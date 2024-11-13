import {useState} from 'react';

export default function Login() {

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');

  const [enteredValues, setEnteredValues] = useState({
    mail: '',
    pass: ''
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
  }

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }

  function handleValuesChange(field, event) {
    setEnteredValues(prev => ({...prev, [field]: event.target.value}));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          {/*<input id="email" type="email" name="email" value={enteredEmail} onChange={handleEmailChange} />          */}
          <input id="email" type="email" name="email" value={enteredValues.mail}
                 onChange={(e) => handleValuesChange("mail", e)} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          {/*<input id="password" type="password" name="password" value={enteredPassword}*/}
          {/*       onChange={(e) => setEnteredPassword(e.target.value)} />*/}
          <input id="password" type="password" name="password" value={enteredValues.pass}
                 onChange={(e) => handleValuesChange("pass", e)} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" type="submit">Login</button>
      </p>
    </form>
  );
}
