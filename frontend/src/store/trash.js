import { csrfFetch } from './csrf';

const LOAD = 'trash/LOAD';
const DELETE = 'trash/DELETE';
const DELETEALL = 'trash/DELETEALL';

const load = (notes) => {
  return {
    type: LOAD,
    notes
  }
}

const deleteOne = (noteId) => {
  return {
    type: DELETE,
    noteId
  }
}

const deleteAll = () =>{
  return {
    type: DELETEALL
  }
}





export const getAllTrash = () => async dispatch => {
  const response = await csrfFetch('/api/trash');

  if (response.ok) {
    const notes = await response.json();
    dispatch(load(notes));
  }
}



export const trashDeleteOne = (noteId) => async dispatch => {
  const response = await csrfFetch(`/api/trash/${noteId}`,{
    method: 'DELETE'
});

  if (response.ok) {
    const noteId = await response.json();
    dispatch(deleteOne(noteId));
  }
}




const initialState = {};

const trashReduceer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const newState = {};
      action.notes.forEach(note => {
        newState[note.id] = note;
      })
      return { ...state, ...newState };
    }
    case DELETE: {
      const newState = { ...state };
      delete newState[action.noteId]
      return newState;
    }
    case DELETEALL:{
      return {};
    }
    default:
      return state;
  }

}


export default trashReduceer;
