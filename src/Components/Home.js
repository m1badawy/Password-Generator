import { useDispatch, useSelector } from "react-redux";
import classes from "./Home.module.css";

import { passwordCriteraActions } from "../Store/passwordCriteria";
import { generatePasswordThunk } from "../Store/generatorThunk";

function Home() {
  const dispatch = useDispatch();
  const criteria = useSelector((state) => state.PWCriteria);
  let length = [
    8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 42, 44, 46, 48, 50,
    55, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200,
    300, 400, 500, 600, 700, 800, 900, 1000, 2000,
  ];

  const handleGeneratePassword = (e) => {
    e.preventDefault();
    dispatch(generatePasswordThunk());
  };

  return (
    <div className={classes.wrapper}>
        <h1>Strong Password Generator</h1>
      <form className={classes.form} onSubmit={handleGeneratePassword}>
        <div className={classes.option}>
          <label>Password Length:</label>
          <select
            onChange={(e) => {
              dispatch(
                passwordCriteraActions.setPasswordLength(+e.target.value)
              );
            }}
          >
            {length.map((num) => {
              return <option key={num}>{num}</option>;
            })}
          </select>
        </div>
        <div className={classes.option}>
          <input
            type="checkbox"
            className={classes.checkbox}
            checked={criteria.includeSpecialCharacter}
            onChange={(e) =>
              dispatch(
                passwordCriteraActions.setSpecialCharacter(e.target.value)
              )
            }
          />
          <label>Include Symbols</label>

          <small>( e.g. @#$% )</small>
        </div>
        <div className={classes.option}>
          <input
            type="checkbox"
            className={classes.checkbox}
            checked={criteria.includeNumber}
            onChange={(e) =>
              dispatch(passwordCriteraActions.setIncludeNumber(e.target.value))
            }
          />
          <label>Include Numbers</label>
          <small>( e.g. 123456 )</small>
        </div>
        <div className={classes.option}>
          <input
            type="checkbox"
            className={classes.checkbox}
            checked={criteria.includeLowerCaseLetter}
            onChange={(e) =>
              dispatch(passwordCriteraActions.setLowerCase(e.target.value))
            }
          />
          <label>Include Lowercase Characters</label>
          <small>( e.g. abcdefgh )</small>
        </div>
        <div className={classes.option}>
          <input
            type="checkbox"
            className={classes.checkbox}
            checked={criteria.includeUpperCaseLetter}
            onChange={(e) =>
              dispatch(passwordCriteraActions.setUpperCase(e.target.value))
            }
          />
          <label>Include Uppercase Characters</label>
          <small>( e.g. ABCDEFGH )</small>
        </div>
        <div className={classes.option}>
          <input
            type="checkbox"
            className={classes.checkbox}
            checked={criteria.excludeAmbiguousCharacter}
            onChange={(e) =>
              dispatch(
                passwordCriteraActions.setAmbiguousCharacter(e.target.value)
              )
            }
          />
          <label>Exclude Ambiguous Characters</label>
          <small>
            ( e.g. &#123; &#125; &#91; &#93; &#40; &#41; / \ &#39; &quot; ` ~ ,
            ; : . &lt; &gt; )
          </small>
        </div>
        <button type="submit" className={classes.generate_button}>Generate Password</button>
      </form>
      {criteria.generatedPassword && <div className={classes.result}>
        <div>
        {criteria.generatedPassword && (
          <p className={classes.password_result}>
            Password: <strong>{criteria.generatedPassword}</strong>
          </p>
        )}
        </div>
        {criteria.passwordGuide && (
          <p className={classes.password_result}>
            Remember your password: <strong>{criteria.passwordGuide}</strong>
          </p>
        )}
      </div>}
    </div>
  );
}

export default Home;
