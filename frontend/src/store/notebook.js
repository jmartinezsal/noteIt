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

const makeNotebook = (notebook) =>{
  return {
    type: CREATE,
    notebook,

  }
}
const editNotebook = (notebook) =>{
  return {
    type: UPDATE,
    notebook,

  }
}

const remove = (notebookId) =>{
  return {
    type: DELETE,
    notebookId,
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
    dispatch(makeNotebook(notebook))
    return notebook;
  }
}

export const updateNotebook = (payload) => async dispatch =>{
  const response = await csrfFetch(`/api/notebooks/${payload.id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  })

  if(response.ok){
    const notebook = await response.json();
    dispatch(editNotebook(notebook));
    return notebook;
  }
}
export const deleteNotebook = (notebookId) => async dispatch =>{
  const response = await csrfFetch(`/api/notebooks/${notebookId}`, {
    method: 'DELETE',
  })

  if(response.ok){
    const id = await response.json();
    dispatch(remove(notebookId))
    return id;
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
      return { ...newState};
    }
    case CREATE:{
      const newState = {...state,
        [action.notebook.id]: action.notebook
      }
      return newState;
    }
    case UPDATE:{
      const newState = {...state,
        [action.notebook.id]: action.notebook
      }
      return newState;
    }
    case DELETE:{
      const newState = {...state };
        delete newState[action.notebookId]
      return newState;
    }
    default:
      return state;
  }
}

export default notebooksReduceer;
