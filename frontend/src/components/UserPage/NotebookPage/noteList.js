import { useState } from 'react';
import { Tooltip } from 'reactstrap'

function NoteList({ notes }) {
  const [tooltipOpen, setTooltipOpen] = useState(false);


  return (
    <>
      {notes.forEach(note => {
        <tr className="note-table-row" key={note.id}>
          <td>{note.title}</td>
          {/* <td>{sessionUser.user.username}</td> */}
          <td>{note?.updatedAt.slice(5, 10)}-{note.updatedAt.slice(0, 4)}</td>
          <td><div className='notebook-actions' id={`notes-actionTooltip`}>...</div></td>
        </tr>
      })}
      <Tooltip
        isOpen={tooltipOpen}
        placement="top"
        target={"notes-actionTooltip"}
        toggle={() => {
          setTooltipOpen(!tooltipOpen);
        }}>
        More Actions
      </Tooltip>
    </>
  )
}

export default NoteList;
