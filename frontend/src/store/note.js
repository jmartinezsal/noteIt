import {csrfFetch} from './csrf';

const LOAD = 'notes/LOAD';
const CREATE = 'notes/CREATE';
const UPDATE = 'notes/UPDATE';
const DELETE = 'notes/DELETE';


const load = (notes) =>{
  return {
    type: LOAD,
    notes
  }
}

const create = (note) =>{
  return {
    type: CREATE,
    note
  }
}

const update = (note) =>{
  return {
    type: UPDATE,
    note
  }
}


const remove = (noteId) =>{
  return {
    type: DELETE,
    noteId,
  }
}

export const getAllNotes = () => async dispatch =>{
  const response = await csrfFetch('/api/notes');

  if(response.ok){
    const notes = await response.json();
    dispatch(load(notes));
  }
}

export const getNote = (noteId) => async dispatch =>{
  const response = await csrfFetch(`/api/notes/${noteId}`);

  if(response.ok){
    const note = await response.json();
    dispatch(create(note));
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
    dispatch(create(note))
    return note
  }
}

export const updateNote = (payload) => async dispatch =>{
  console.log(payload)
  const response = await csrfFetch(`/api/notes/${payload.id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  })


  if(response.ok){
    const note = await response.json();
    dispatch(update(note))
  }
}
export const trashNote = (payload) => async dispatch =>{
  const response = await csrfFetch(`/api/notes/${payload.id}`, {
    method: 'PUT',
  })

  if(response.ok){
    const note = await response.json(payload);
    dispatch(update(note))
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
      return { ...newState};
    }
    case CREATE:{
      const newState = {...state,[action.note.id]: action.note}
      return newState;
    }
    case UPDATE:{
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
