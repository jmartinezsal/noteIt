import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getNote, updateNote, trashNote } from '../../../store/note';
import QuillEditor from '../../QuillEditor';



function NoteCreator() {
  const dispatch = useDispatch();
  const { noteId } = useParams();
  const currNote = useSelector(state => state.note[noteId])
  const notebooks = useSelector(state => state.notebook)
  const notebooksArr = Object.values(notebooks)
  console.log(notebooksArr)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")


  useEffect(() => {
    dispatch(getNote(noteId))
    setTitle(currNote?.title)
    setContent(currNote?.content)
  }, [dispatch, noteId]);


  const onClickSave = () => {
    dispatch(updateNote({ id: currNote.id, title, content, trashed: false, notebookId: currNote.notebookId }))

  }

  const onClickTrashed = () => {
    dispatch(trashNote({ id: currNote.id, trashed: true, title, content, notebookId: notebooksArr[0]}))
  }

  return (
    <div className='note-view-page'>
      <div className="editor-note-title">
        <input type="text"
          placeholder="Untitled"
          value={title === "" ? "Untitled" : title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <i className="fa-solid fa-floppy-disk" onClick={onClickSave}></i>
        <i className="fa-solid fa-trash" onClick={onClickTrashed}></i>
      </div>
      <QuillEditor content={content} setContent={setContent} />
    </div>
  )

}

export default NoteCreator;
