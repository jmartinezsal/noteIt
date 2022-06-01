import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import Navigation from '../SplashPage/navigation';

function LoginFormPage(){
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if(sessionUser) return(
    <Redirect to="/home" />
  )

  const handleSubmit = e => {
    e.preventDefault();
    setErrors([]);
    dispatch(sessionActions.login({ credential, password }))
      .then( () =>  history.push('/home'))
    .catch(async res =>{
      const data = await res.json();
      if(data && data.errors) setErrors(data.errors);
    })



  }

  return(
    <>
      <Navigation />
        <div className="auth-page">
          <div className="auth-form-container">
          <h2>Login Here</h2>
            <form onSubmit={handleSubmit}>
              <ul>
                {errors.map((error, idx) =>
                <li key={idx}>{error}</li>
                )}
              </ul>
              <div className="input-container">
                <input type="text"
                placeholder='Username or Email'
                value={credential}
                name="credential"
                onChange={e => setCredential(e.target.value)}
                />
                <input type="password"
                placeholder='Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
              </div>
                <button type="submit" className="auth-btn">Sign In</button>
            </form>
          </div>
      </div>
  </>
  )
};

export default LoginFormPage;
