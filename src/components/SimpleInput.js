import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const namedInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    } else {
      setEnteredNameIsValid(true);
      console.log(enteredName);
      const enteredValue = namedInputRef.current.value;
      console.log(enteredValue);
      setEnteredName("");
    }
  };



  // useEffect(()=> {
  //   if (enteredNameIsValid) {
  //     console.log('named is validated ...');
  //   }
  // })

  const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          ref={namedInputRef}
          value={enteredName}
        />
        {!enteredNameIsValid && (
          <p className="error-text">* Name must not be Empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
