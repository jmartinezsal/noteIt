import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Tooltip } from 'reactstrap'


function AllNotebookPage() {

  const [notesOpen, setNotesOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const notebooks = useSelector(state => state.notebook);
  const notes = useSelector(state => state.note);
  const sessionUser = useSelector(state => state.session);
  const notebookArr = Object.values(notebooks);
  const availableNotebooks = notebookArr.filter(notebook => !notebook.trashed)

  const notesArr = Object.values(notes);


  const notesFromNotebook = (notebookId) => notesArr.filter(note => notebookId=== note.notebookId)

  return (
    <div className="notebook-page">
      <div className="notebook-page-header">
        <p>Notebooks</p>
        <p>Total Notebooks: {availableNotebooks?.length}</p>
      </div>
      <table className='notebook-table'>
        <thead>
          <tr>
            <td>Title</td>
            <td>Created By</td>
            <td>Updated</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {availableNotebooks.map(notebook => (
            !notebook.trashed &&
            <tr key={notebook.id}>
              <td><span onClick={() => setNotesOpen(!notesOpen)}><i className="fa-solid fa-caret-right"> &nbsp;</i></span>
                {/* {notesOpen && <NoteList notes={notesFromNotebook(notebook.id)} />} */}
              <NavLink to={`/notebooks/${notebook.id}`}>
                <i className="fa-solid fa-book "></i><span>{notebook.title} ({notebook.Notes?.length})</span>
              </NavLink>
                </td>
              <td>{sessionUser.user.username}</td>
              <td>{notebook.updatedAt.slice(5, 10)}-{notebook.updatedAt.slice(0, 4)}</td>
              <td><div className='notebook-actions' id="actionTooltip">...</div>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
      {/* <Tooltip
        isOpen={tooltipOpen}
        placement="top"
        target="actionTooltip"
        toggle={() => {
          setTooltipOpen(!tooltipOpen);
        }}>
        More Actions
      </Tooltip> */}
    </div>
  )
}


export default AllNotebookPage;
