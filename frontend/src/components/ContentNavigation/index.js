import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import DeleteModalNotebook from '../UserPage/Modal/DeleteNotebookModal';
import EditNotebookModal from '../UserPage/Modal/EditNotebookModal';
function ContentNavigation({ content, type, currNotebook }) {

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);


  return (
    <div className="content-nav">
      <div className="content-nav-header">
        {type === "notes" ? (
          <>
            <div className="content-title">
              <img src='/images/note-icon.svg' alt="note-icon"></img>
              <p>All Notes</p>
            </div>
            <div className="content-actions">
              <p>Total Notes: {content.length}</p>
            </div>
          </>

        ) : (
          <>
            <div className="content-title">
              <i className="fa-solid fa-book "></i>
              <p>{type}</p>
            </div>
            <div className="content-actions">
              <p>Total Notes: {content.length} </p>
              <i className="fa-solid fa-file-pen" onClick={() => setShowEditModal(true)} ></i>
              {showEditModal &&
                <Modal onClose={() => setShowEditModal(false)} >
                  <EditNotebookModal notebook={currNotebook} setShowEditModal={setShowEditModal} />
                </Modal>
              }
              <i className="fa-solid fa-trash" onClick={() => setShowDeleteModal(true)}></i>
              {showDeleteModal && (
                <Modal onClose={() => setShowDeleteModal(false)} >
                  <DeleteModalNotebook id={currNotebook?.id} setShowDeleteModal={setShowDeleteModal} />
                </Modal>
              )}
            </div>

          </>
        )}
      </div>
      <div className="content-selection-container">
        {content?.map(item => (
          <NavLink key={item.id} to= {type === "notes" ?  (`/notes/${item.id}`) : (`/notebooks/${item.notebookId}/notes/${item.id}`) }>
            <div className="content-item-card" >
              <p className="note-title">{item?.title}</p>
              <p className="note-content">{item?.content} </p>
              <p className="note-date">{item?.updatedAt.slice(5, 10)}-{item?.updatedAt.slice(0, 4)}</p>
            </div>
          </NavLink>
        ))}
      </div>


    </div>
  )
}

export default ContentNavigation;
