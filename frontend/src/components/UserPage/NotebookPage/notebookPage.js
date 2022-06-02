import { useSelector } from 'react-redux';
import { useParams, Route } from 'react-router-dom';
import ContentNavigation from '../../ContentNavigation';
import NoteCreator from '../NotePage/noteCreator';


function NotebookPage() {

  const { notebookId } = useParams();
  const currNotebook = useSelector(state => state.notebook[notebookId])
  const notes = useSelector(state => state.note);
  const notesArr = Object.values(notes);


  const notesFromNotebook = () => {
   let notes = notesArr?.filter(note => parseInt(notebookId, 10) === note.notebookId)
   return notes;
  }

  return (
    <>
      <ContentNavigation currNotebook={currNotebook} content={notesFromNotebook()} type={currNotebook?.title} />
      <Route path="/notebooks/:notebookId/notes/:noteId">
        <NoteCreator />
      </Route>
    </>
  )
}

export default NotebookPage;
