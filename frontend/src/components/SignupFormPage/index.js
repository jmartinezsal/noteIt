import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import Navigation from "../SplashPage/navigation";

function SignupFormPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/home" />;


  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      dispatch(sessionActions.signup({ email, username, password }))
        .then(() => history.push('/home'))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <>
      <Navigation />
      <div className="auth-page">
        <div className="auth-form-container">
          <div className="auth-form-top" >
            <img className="auth-logo" src="/images/auth-logo.svg" alt="brand" />
            <p>Noting everyting you need.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <ul className="errors">
              {errors.map((error, idx) =>
                <>
                  <li key={idx}>
                    {error}
                  </li>
                </>
              )}
            </ul>
            <div className="input-container">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="auth-btn-container">
              <button type="submit" className="auth-btn btn">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignupFormPage;
