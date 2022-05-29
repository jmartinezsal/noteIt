import {useSelector} from 'react-redux';

function NotePage() {

  const notes = useSelector(state => state.note);
  console.log(notes)

  return (
    <div className="user-content-container">

    </div>

  )
}

export default NotePage;
