import {useSelector} from 'react-redux';
import ContentNavigation from '../../ContentNavigation';
import NoteCreator from './noteCreator';

function NotePage() {

  const notes = useSelector(state => state.note);
  const notesArr = Object.values(notes);

  return (
    <div className="note-page">
      <ContentNavigation content={notesArr} type={"notes"}/>
      <NoteCreator />
    </div>

  )
}

export default NotePage;
