export function generatePassword(
  length,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols,
  excludeAmbiguous
) {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()-=_+";
  const ambiguousChars = "{}[]()/\\'\"`~,;:.<>";

  let characterPool = "";
  if (includeUppercase) characterPool += uppercaseChars;
  if (includeLowercase) characterPool += lowercaseChars;
  if (includeNumbers) characterPool += numberChars;
  if (includeSymbols) characterPool += symbolChars;
  if (!excludeAmbiguous) characterPool += ambiguousChars;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool.charAt(randomIndex);
  }

  const passwordGuidance = password
    .split("")
    .map((char) => {
      let word = char.toUpperCase();
      switch (char.toLowerCase()) {
        case "a":
          word = "Alpha";
          break;
        case "b":
          word = "Bravo";
          break;
        case "c":
          word = "Charlie";
          break;
        case "d":
          word = "Delta";
          break;
        case "e":
          word = "Echo";
          break;
        case "f":
          word = "Foxtrot";
          break;
        case "g":
          word = "Golf";
          break;
        case "h":
          word = "Hotel";
          break;
        case "i":
          word = "India";
          break;
        case "j":
          word = "Juliett";
          break;
        case "k":
          word = "Kilo";
          break;
        case "l":
          word = "Lima";
          break;
        case "m":
          word = "Mike";
          break;
        case "n":
          word = "November";
          break;
        case "o":
          word = "Oscar";
          break;
        case "p":
          word = "Papa";
          break;
        case "q":
          word = "Quebec";
          break;
        case "r":
          word = "Romeo";
          break;
        case "s":
          word = "Sierra";
          break;
        case "t":
          word = "Tango";
          break;
        case "u":
          word = "Uniform";
          break;
        case "v":
          word = "Victor";
          break;
        case "w":
          word = "Whiskey";
          break;
        case "x":
          word = "Xray";
          break;
        case "y":
          word = "Yankee";
          break;
        case "z":
          word = "Zulu";
          break;
        default:
          word = char;
          break;
      }
      return word;
    })
    .join(" ");

  return {
    password: password,
    passwordGuidance: passwordGuidance,
  };
}
