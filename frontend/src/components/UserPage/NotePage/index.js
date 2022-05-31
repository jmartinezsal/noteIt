import {useSelector} from 'react-redux';
import ContentNavigation from '../../ContentNavigation';

function NotePage() {

  const notes = useSelector(state => state.note);
  const notesArr = Object.values(notes);

  return (
    <div className="note-page">
      <ContentNavigation content={notesArr} type={"notes"}/>
    </div>

  )
}

export default NotePage;
