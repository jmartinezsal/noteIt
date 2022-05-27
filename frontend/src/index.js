import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import configureStore from './store';
import { restoreCSRF, csrfFetch } from './store/csrf';
import * as sessionActions from './store/session';
import * as notebookActions from './store/notebook';
import * as noteActions from './store/note';
import {ModalProvider} from './context/Modal.js'


const store = configureStore();

if(process.env.NODE_ENV !== 'production'){
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
  window.notebookActions = notebookActions;
  window.noteActions = noteActions;
}

function Root(){
  return(
    <Provider store={store} >
      <ModalProvider>
        <BrowserRouter>
        <App />
        </BrowserRouter>
      </ModalProvider>
    </Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
