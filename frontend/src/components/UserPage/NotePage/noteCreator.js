import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { getNote, getAllNotes, updateNote, trashNote, createNote } from '../../../store/note';
import { createNotebook } from '../../../store/notebook';
import { getAllTrash } from '../../../store/trash';
import QuillEditor from '../../QuillEditor';



function NoteCreator() {
  const dispatch = useDispatch();
  const history = useHistory()
  let { noteId, notebookId } = useParams();

  let path = useParams()

  const notes = useSelector(state => state.note);
  const notesArr = Object.values(notes);
  const currNote = notes[noteId];
  const notebooks = useSelector(state => state.notebook);
  const notebooksArr = Object.values(notebooks);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);


  useEffect(() => {
    if (noteId !== 'create') {
      dispatch(getNote(noteId))
      setTitle(currNote?.title)
      setContent(currNote?.content)
    } else {
      setTitle('');
      setContent('');
    }
  }, [dispatch, noteId]);

  if (!notebookId) {
    notebookId = notebooksArr[notebooksArr.length - 1]?.id
  }


  const onClickSave = async () => {
    if (notebooksArr.length === 0) {
      const notebook = await dispatch(createNotebook({ title: "Primary Notebook" }));
      notebookId = notebook.id;
    }

    if (noteId !== 'create') {
      dispatch(updateNote({ id: currNote.id, title, content, notebookId: currNote.notebookId }));
    } else {

      const note = await dispatch(createNote({ title, content, notebookId }))
      history.push(Object.values(path).length === 2 ? `/notebooks/${notebookId}/notes/${note.id}` : `/notes/${note.id}`)
    }
  }

  const onClickTrashed = async () => {

    dispatch(trashNote({ id: currNote.id, trashed: true, title, content, notebookId: notebooksArr[0].id }))
      .then(() => dispatch(getAllNotes()))
      .then(() => dispatch(getAllTrash()))

    history.push(Object.values(path).length === 2 ? `/notebooks/${notebookId}` : `/notes`);
  }

  return (
    <div className='note-view-page'>
      <div className="editor-note-title">
        <input type="text"
          placeholder="Untitled"
          value={title}
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
