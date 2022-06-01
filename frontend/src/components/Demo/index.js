import {useDispatch} from 'react-redux';
import { login } from '../../store/session.js';

function Demo(){
  const dispatch = useDispatch();

  const loginDemo = e =>{
    e.preventDefault();
    const credential = "DemoUser";
    const password = "password";

    return dispatch(login({credential, password}));
  }

  return (
      <button type="button" className="demo-button btn" onClick={loginDemo}>
        Demo User
      </button>
  )
}

export default Demo;
