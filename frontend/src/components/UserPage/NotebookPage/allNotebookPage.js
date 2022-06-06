import { useState} from 'react';
import { useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';



function AllNotebookPage() {
  const [notesOpen, setNotesOpen] = useState(false);
  // const [tooltipOpen, setTooltipOpen] = useState(false);

  const notebooks = useSelector(state => state.notebook);
  const notes = useSelector(state => state.note);
  const sessionUser = useSelector(state => state.session);

  const notebookArr = Object.values(notebooks);
  const notesArr = Object.values(notes);

  const noteCount = (notebookId) =>{
    let count = 0;
    for(let i=0; i < notesArr.length; i++){
      const note = notesArr[i]
      if(note['notebookId'] === notebookId){
        count++;
      }
    }
    return count;
  }


  return (
    <div className="notebook-page">
      <div className="notebook-page-header">
        <p>Notebooks</p>
        <p>Total Notebooks: {notebookArr?.length}</p>
      </div>
      <table className='notebook-table'>
        <thead>
          <tr>
            <td>Title</td>
            <td>Created By</td>
            <td>Updated</td>
            {/* <td>Actions</td> */}
          </tr>
        </thead>
        <tbody>
          {notebookArr?.map(notebook => (
            <tr key={notebook?.id}>
              <td><span onClick={() => setNotesOpen(!notesOpen)}><i className="fa-solid fa-caret-right"> &nbsp;</i></span>
                {/* {notesOpen && <NoteList notes={notesFromNotebook(notebook?.id)} />} */}
              <NavLink to={`/notebooks/${notebook?.id}`}>
                <i className="fa-solid fa-book "></i><span>{notebook?.title} ({noteCount(notebook.id)})</span>
              </NavLink>
                </td>
              <td>{sessionUser.user.username}</td>
              <td>{notebook?.updatedAt.slice(5, 10)}-{notebook?.updatedAt.slice(0, 4)}</td>
              {/* <td><div className='notebook-actions' id="actionTooltip">...</div>
              </td> */}

            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}


export default AllNotebookPage;
