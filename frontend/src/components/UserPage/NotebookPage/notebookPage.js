import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ContentNavigation from '../../ContentNavigation';


function NotebookPage() {

  const { notebookId } = useParams();
  const currNotebook = useSelector(state => state.notebook[notebookId])
  const notes = useSelector(state => state.note);
  const notesArr = Object.values(notes);


  const notesFromNotebook = () => {
   let notes = notesArr.filter(note => parseInt(notebookId, 10) === note.notebookId)
   return notes;
  }

  return (
    <>
      <ContentNavigation currNotebook={currNotebook} content={notesFromNotebook()} type={currNotebook.title} />
    </>
  )
}

export default NotebookPage;
