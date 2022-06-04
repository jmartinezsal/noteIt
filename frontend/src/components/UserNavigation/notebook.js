import { NavLink } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import { useState } from 'react';
import {GiNotebook} from 'react-icons/gi'

import CreateNotebookModal from '../UserPage/Modal/CreateNotebookModal';


function Notebook() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="user-nav-selection">
      &nbsp;
      <i className="fa-solid fa-caret-right"> &nbsp;</i>
      <NavLink to="/notebooks">
        <GiNotebook />
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
