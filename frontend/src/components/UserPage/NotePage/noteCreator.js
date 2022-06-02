import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getNote,updateNote  } from '../../../store/note';
import QuillEditor from '../../QuillEditor';



function NoteCreator() {
  const dispatch = useDispatch();
  const { noteId } = useParams();
  const currNote = useSelector(state => state.note[noteId])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")


  useEffect(() => {
    setTitle(currNote?.title)
    setContent(currNote?.content)
  }, [dispatch, noteId]);


  const onClickSave= () => {
    dispatch(updateNote({id: noteId, title, content, trashed:false, notebookId:currNote.notebookId}))

  }

  const onClickDelele =() => {

  }

  return (
    <div className='note-view-page'>
      <div className="editor-note-title">
        <input type="text"
          placeholder="Untitled"
          value={title==="" ? "Untitled" : title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <i className="fa-solid fa-floppy-disk" onClick={onClickSave}></i>
        <i className="fa-solid fa-trash"></i>
      </div>
      <QuillEditor content={content} setContent={setContent} />
    </div>
  )

}

export default NoteCreator;
