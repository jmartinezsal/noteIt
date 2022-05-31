import { NavLink } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import { useState } from 'react';
import CreateNotebookModal from '../UserPage/Modal/CreateNotebookModal';


function Notebook() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="user-nav-selection">
      &nbsp;
      <i className="fa-solid fa-caret-right"> &nbsp;</i>
      <NavLink to="/notebooks">
        <i className="fa-solid fa-book"></i>
        <span>Notebook</span>
      </NavLink>
      <i onClick={() => setShowModal(true)} className="fa-solid fa-circle-plus"></i>
      {showModal &&
        <Modal onClose={() => setShowModal(false)}>
          <CreateNotebookModal setShowModal={setShowModal} />
        </Modal>
      }
    </div>
  )
}

export default Notebook;
