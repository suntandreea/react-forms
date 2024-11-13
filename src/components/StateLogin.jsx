import {useState} from 'react';

export default function Login() {

  const [enteredValues, setEnteredValues] = useState({
    mail: '',
    pass: ''
  });
  const [didEdit, setDidEdit] = useState({
    mail: false,
    pass: false
  });

  const emailIsInvalid = didEdit.mail && !(enteredValues.mail.includes('@'));

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
    event.target.reset();
  }

  function handleValuesChange(field, event) {
    setEnteredValues(prev => ({...prev, [field]: event.target.value}));
    setDidEdit(prev => ({...prev, [field]: false}));
  }

  function handleBlur(field) {
    setDidEdit(prev => ({...prev, [field]: true}));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email"
                 value={enteredValues.mail}
                 onBlur={() => handleBlur("mail")}
                 onChange={(e) => handleValuesChange("mail", e)} />
          {emailIsInvalid && <div className="control-error"><p>Please enter a valid email!</p></div>}

        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password"
                 value={enteredValues.pass}
                 onBlur={() => handleBlur("pass")}
                 onChange={(e) => handleValuesChange("pass", e)} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat" type="reset">Reset</button>
        <button className="button" type="submit">Login</button>
      </p>
    </form>
  );
}
