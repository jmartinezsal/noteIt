import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GiNotebook } from 'react-icons/gi'

import { Modal } from '../../context/Modal';
import ListExpander from '../UserPage/Actions/listExpander';
import CreateNotebookModal from '../UserPage/Modal/CreateNotebookModal';


function Notebook() {
  const [showModal, setShowModal] = useState(false);
  const notebooks = useSelector(state => state.notebook);
  const notebooksArr = Object.values(notebooks);
  return (
    <div className="user-nav-selection ">
        {/* <ListExpander content={notebooksArr}/> */}
      <NavLink to="/notebooks" activeClassName="active-nav">
        <GiNotebook />
        <span>Notebook</span>
      </NavLink>
      <i onClick={() => setShowModal(true)} className="fa-solid fa-circle-plus plus"></i>
      {showModal &&
        <Modal onClose={() => setShowModal(false)}>
          <CreateNotebookModal setShowModal={setShowModal} />
        </Modal>
      }
    </div>
  )
}

export default Notebook;
