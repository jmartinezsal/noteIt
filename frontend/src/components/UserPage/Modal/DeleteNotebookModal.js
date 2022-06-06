import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getAllNotes } from '../../../store/note';
import { deleteNotebook, getAllNotebooks } from '../../../store/notebook';
import { getAllTrash } from '../../../store/trash';

function DeleteModalNotebook({ id, setShowDeleteModal }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const deleteHandler = async e => {
    e.preventDefault();
    dispatch(deleteNotebook(id))
      .then(() => dispatch(getAllNotes()))
      .then(() => dispatch(getAllTrash()));
    setShowDeleteModal(false);
    history.push('/notebooks')
  }

  const cancleHandler = e => {
    e.preventDefault();
    setShowDeleteModal(false);
  }
  return (

    <form className="modal-container" onSubmit={deleteHandler}>
      <div className='modal-header'>
      <h3>Delete your notebook</h3>
       <p> Are you sure you want to delete this notebook? (This will also send all notes that
        belong to the notebook to the trash )</p>
      </div>
      <div className="button-container-modal">
        <button className="cancel-btn modal-btn" type="button" onClick={cancleHandler}>
          Cancel
        </button>
        <button className="delete-btn modal-btn" type="submit">
          Delete
        </button>
      </div>
    </form>

  )

}

export default DeleteModalNotebook;
