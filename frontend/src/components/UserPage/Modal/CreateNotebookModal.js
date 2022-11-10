import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createNotebook} from '../../../store/notebook';

function CreateNotebookModal({ setShowModal }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    setErrors([]);
    const notebook = await dispatch((createNotebook({ title })))
    .catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) {
        setErrors(data.errors);
      }
    });
    history.push(`/notebooks/${notebook.id}`)
    setShowModal(false)
  }


  const cancelHandler = e => {
    e.preventDefault();
    setShowModal(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='modal-header'>
        <h3>Create a notebook</h3>
        <p>Enter the title of the notebook you want to create.
           A unique title will help in organizing your notes. </p>
      </div>
      <ul>
        <div className='errors'>
          {errors.map((error, idx) =>
            <>
              <li key={idx}>
                {idx+1}. {error}
              </li>
            </>
          )}
        </div>
      </ul>
      <div className="modal-input-container">
        <input type="text"
          placeholder='Title'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>

      <div className="button-container-modal">
        <button className="cancel-btn modal-btn" onClick={cancelHandler} type="button">Cancel</button>
        <button className="submit-btn modal-btn" type="submit">Create</button>
      </div>
    </form>
  )



}

export default CreateNotebookModal;
