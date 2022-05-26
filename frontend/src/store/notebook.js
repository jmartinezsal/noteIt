import {csrfFetch} from './csrf';

const LOAD = 'notebooks/LOAD';
const CREATE = 'notebooks/CREATE';
const UPDATE = 'notebooks/UPDATE';
const DELETE = 'notebooks/DELETE';


const load = (notebooks) =>{
  return {
    type: LOAD,
    notebooks
  }
}

const create = (notebook) =>{
  return {
    type: CREATE,
    notebook
  }
}

const update = (notebook) => {
  return {
    type: UPDATE,
    notebook
  }
}

const remove = (notebookId) =>{
  return {
    type: DELETE,
    notebookId
  }
}

export const getAllNotebooks = () => async dispatch =>{
  const response = await csrfFetch('/api/notebooks');

  if(response.ok){
    const notebooks = await response.json();
    dispatch(load(notebooks));
  }
}

export const createNotebook = (payload) => async dispatch =>{
  const response = await csrfFetch('/api/notebooks', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  })

  if(response.ok){
    const notebook = await response.json();
    dispatch(create(notebook))
  }
}


const initialState = {};

const notebooksReduceer = (state = initialState, action ) =>{
  switch(action.type){
    case LOAD:{
      const newState = {};
      action.notebooks.forEach( notebook => {
        newState[notebook.id]= notebook;
      })
      return {...state, ...newState};
    }
    case CREATE:{
      const newState = {};
      if(!newState[action.notebook.id]){
        newState[action.notebook.id] = action.notebook;
      }
      return {...state, ...newState};
    }




    default:
      return state;
  }
}

export default notebooksReduceer;
