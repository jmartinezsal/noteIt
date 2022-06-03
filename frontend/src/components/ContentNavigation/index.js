import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import DeleteModalNotebook from '../UserPage/Modal/DeleteNotebookModal';
import EditNotebookModal from '../UserPage/Modal/EditNotebookModal';
function ContentNavigation({ content, type, currNotebook }) {

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const switchComponent = (type) => {

    switch (type) {
      case "notes": {
        return (
          <>
            <div className="content-title">
              <img src='/images/note-icon.svg' alt="note-icon"></img>
              <p>All Notes</p>
            </div>
            <div className="content-actions">
              <p>Total Notes: {content.length}</p>
            </div>
            <NavLink className="create-note-btn" to="/notes/create">
              New Note
            </NavLink>
          </>
        )
      }
      case "trash": {
        return (
          <>
            <div className="content-title">
              <img src='/images/note-icon.svg' alt="note-icon"></img>
              <p>Trash</p>
            </div>
            <div className="content-actions">
              <p>Total Notes: {content.length}</p>
            </div>
          </>
        )
      }

      default: {
        return (
          <>
            <div className="content-title">
              <i className="fa-solid fa-book "></i>
              <p>{currNotebook?.title}</p>
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
              <NavLink className="create-note-btn" to={`/notebooks/${currNotebook?.id}/notes/create`}>
                New Note
              </NavLink>
            </div>
          </>
        )
      }
    }
  }





  return (
    <div className="content-nav">
      <div className="content-nav-header">
        {switchComponent(type)}

      </div>
      <div className="content-selection-container">
        {content?.map(item => (
          <NavLink key={item.id} to={
            (type === "notes" && (`/notes/${item.id}`)) ||
            (type === "trash" && (`/trash/${item.id}`)) ||
            (`/notebooks/${item.notebookId}/notes/${item.id}`)}>
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
