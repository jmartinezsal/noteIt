import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createNotebook, getAllNotebooks } from '../../../store/notebook';

function CreateNotebookModal({ setShowModal }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    setErrors([]);
    const notebook = await dispatch((createNotebook({ title })))
    .then(() => setShowModal(false))
    .catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) {
        setErrors(data.errors);
      }
    });
    history.push(`/notebooks`)
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
