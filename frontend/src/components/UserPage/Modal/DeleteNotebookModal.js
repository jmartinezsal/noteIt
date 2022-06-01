import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getAllNotes } from '../../../store/note';
import { deleteNotebook, getAllNotebooks } from '../../../store/notebook';

function DeleteModalNotebook({ id, setShowDeleteModal }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const deleteHandler = e => {
    e.preventDefault();
    dispatch(deleteNotebook(id))
      .then(() => dispatch(getAllNotebooks()))
      .then(() => dispatch(getAllNotes()));
    setShowDeleteModal(false);
    history.push('/notebooks')
  }

  const cancleHandler = e => {
    e.preventDefault();
    setShowDeleteModal(false);
  }
  return (

    <form className="modal-container" onSubmit={deleteHandler}>
      <label>
        Are you sure you want to delete this notebook? (This will also send all notes that
        belong to the notebook to the trash )
      </label>
      <div className="button-container-modal">
        <button className="cancel-btn" type="button" onClick={cancleHandler}>
          Cancel
        </button>
        <button className="submit-btn" type="submit">
          Delete
        </button>
      </div>
    </form>

  )

}

export default DeleteModalNotebook;
