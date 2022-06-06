import { Route } from 'react-router-dom';
import {useSelector} from 'react-redux';

import TrashView from './trashView';
import ContentNavigation from '../../ContentNavigation';



function Trash(){
  const trash = useSelector(state => state.trash);
  const trashArr = Object.values(trash);

  return (
    <div className="note-page">
      <ContentNavigation  content={trashArr} type={"trash"} />
      <Route path="/trash/:noteId">
        <TrashView />
      </Route>
    </div>
  )
}

export default Trash;
