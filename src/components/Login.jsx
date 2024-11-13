import {useRef} from 'react';

export default function Login() {
  const mail = useRef();
  const pass = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const email = mail.current.value;
    const password = pass.current.value;
    console.log(email, password);
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={mail} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={pass} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" type="submit">Login</button>
      </p>
    </form>
  );
}
