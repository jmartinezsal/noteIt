import { useState } from 'react';
import {useSelector} from 'react-redux';
import {Tooltip} from 'reactstrap'


function NotebookPage(){

  const [tooltipOpen, setTooltipOpen] = useState(false);

  const notebooks = useSelector(state => state.notebook);
  const sessionUser = useSelector(state => state.session)
  const notebookArr = Object.values(notebooks);

  return(
    <div className="notebook-page">
      <div className="notebook-page-header">
        <p>Notebooks</p>
      </div>
      <table className='notebook-table'>
        <tr>
          <th>Title</th>
          <th>Created By</th>
          <th>Updated</th>
          <th>Actions</th>
        </tr>
        {notebookArr.map(notebook => (
          <tr key={notebook.id}>
              <td><i class="fa-solid fa-caret-right"> &nbsp;</i>
              <i className="fa-solid fa-book "></i><span>{notebook.title}</span></td>
              <td>{sessionUser.user.username}</td>
              <td>{notebook.updatedAt.slice(5,10)}-{notebook.updatedAt.slice(0,4)}</td>
              <td><div className='notebook-actions' id="actionTooltip">...</div>
            </td>
              <Tooltip
                isOpen={tooltipOpen}
                placement="top"
                target="actionTooltip"
                toggle={() => setTooltipOpen(!tooltipOpen)}>
                More Actions
            </Tooltip>

          </tr>
        ))}
      </table>
    </div>
  )
}


export default NotebookPage;
