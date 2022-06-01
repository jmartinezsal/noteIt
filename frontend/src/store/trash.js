import { csrfFetch } from './csrf';

const LOAD = 'trash/LOAD';

const load = (notes) => {
  return {
    type: LOAD,
    notes
  }
}



export const getAllTrash = () => async dispatch => {
  const response = await csrfFetch('/api/trash');

  if (response.ok) {
    const notes = await response.json();
    dispatch(load(notes));
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
    default:
      return state;
  }

}


export default trashReduceer;
