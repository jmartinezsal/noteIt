import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createNotebook, getAllNotebooks } from '../../../store/notebook';

function CreateNotebookModal({ setShowModal }) {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    setErrors([]);
    dispatch((createNotebook({ title })))
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
                <i class="fa-solid fa-exclamation fa-pulse"></i>
                &nbsp; {error}
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
        <button className="cancel-btn btn" onClick={cancelHandler} type="button">Cancel</button>
        <button className="submit-btn" type="submit">Create</button>
      </div>
    </form>
  )



}

export default CreateNotebookModal;
