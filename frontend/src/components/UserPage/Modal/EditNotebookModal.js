
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateNotebook, getAllNotebooks } from '../../../store/notebook';

function EditNotebookModal({ notebook, setShowModal }) {
  const dispatch = useDispatch();
  const id = notebook.id;
  const [title, setTitle] = useState(notebook.title);
  const [errors, setErrors] = useState([]);


  const handleSubmit = e => {
    e.preventDefault();
    setErrors([]);
    dispatch((updateNotebook({title, id})))
      .then(() => dispatch(getAllNotebooks()))
      .then(() => setShowModal(false))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        }
      });
  }

  const cancelHandler = e => {
    e.preventDefault();
    setShowModal(false);
  }

  return (
    <form onSubmit={handleSubmit}>
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

      <div className="auth-btn-container">
        <button className="auth-btn" type="submit">Update</button>
        <button className="demo-button btn" onClick={cancelHandler} type="button">Cancel</button>
      </div>
    </form>
  )



}

export default EditNotebookModal;
