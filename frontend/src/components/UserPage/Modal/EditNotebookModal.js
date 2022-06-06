
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateNotebook, getAllNotebooks } from '../../../store/notebook';

function EditNotebookModal({ notebook, setShowEditModal }) {
  const dispatch = useDispatch();
  const id = notebook.id;
  const [title, setTitle] = useState(notebook.title);
  const [errors, setErrors] = useState([]);


  const handleSubmit = e => {
    e.preventDefault();
    setErrors([]);
    dispatch((updateNotebook({title, id})))
      .then(() => dispatch(getAllNotebooks()))
      .then(() => setShowEditModal(false))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        }
      });
  }

  const cancelHandler = e => {
    e.preventDefault();
    setShowEditModal(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='modal-header'>
        <p></p>
      </div>
      <ul>
        <div className='errors'>
          {errors.map((error, idx) =>
            <>
              <li key={idx}>
               {error}
              </li>
            </>
          )}
        </div>
      </ul>
      <div className="input-container">
        <input type="text"
          placeholder='Title'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>

      <div className="button-container-modal">
        <button className="cancel-btn" onClick={cancelHandler} type="button">Cancel</button>
        <button className="submit-btn" type="submit">Update</button>
      </div>
    </form>
  )



}

export default EditNotebookModal;
