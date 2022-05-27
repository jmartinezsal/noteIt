import {csrfFetch} from './csrf';

const LOAD = 'notes/LOAD';
const CREATE_OR_UPDATE = 'notes/CREATE_OR_UPDATE';
const UPDATE = 'notes/UPDATE';
const DELETE = 'notes/DELETE';


const load = (notes) =>{
  return {
    type: LOAD,
    notes
  }
}

const createOrUpdate = (note) =>{
  return {
    type: CREATE_OR_UPDATE,
    note
  }
}


const remove = (noteId, note) =>{
  return {
    type: DELETE,
    noteId,
    note
  }
}

export const getAllNotes = () => async dispatch =>{
  const response = await csrfFetch('/api/notes');

  if(response.ok){
    const notes = await response.json();
    dispatch(load(notes));
  }
}

export const createNote = (payload) => async dispatch =>{
  const response = await csrfFetch('/api/notes', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  })

  if(response.ok){
    const note = await response.json();
    dispatch(createOrUpdate(note))
    return note
  }
}

export const updateNote = (payload) => async dispatch =>{
  const response = await csrfFetch(`/api/notes/${payload.id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  })

  if(response.ok){
    const note = await response.json();
    dispatch(createOrUpdate(note))
  }
}
export const deleteNote = (noteId) => async dispatch =>{
  const response = await csrfFetch(`/api/notes/${noteId}`, {
    method: 'DELETE',
  })

  if(response.ok){
    const note = await response.json();
    dispatch(remove(noteId, note))
  }
}


const initialState = {};

const notesReduceer = (state = initialState, action ) =>{
  switch(action.type){
    case LOAD:{
      const newState = {};
      action.notes.forEach( note => {
        newState[note.id]= note;
      })
      return {...state, ...newState};
    }
    case CREATE_OR_UPDATE:{
      const newState = {...state,[action.note.id]: action.note}
      return newState;
    }
    case DELETE:{
      const newState = {...state };
      if(newState[action.noteId].trashed){
        delete newState[action.noteId]
      } else {
        newState[action.noteId].trashed = true;
      }
      return newState;
    }
    default:
      return state;
  }
}

export default notesReduceer;
