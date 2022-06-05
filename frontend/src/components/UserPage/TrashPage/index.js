import { Route } from 'react-router-dom';
import {useSelector} from 'react-redux';

import TrashView from './trashView';
import ContentNavigation from '../../ContentNavigation';



function Trash(){
  const trash = useSelector(state => state.trash);
  const trashArr = Object.values(trash);

  return (
    <>
      <ContentNavigation  content={trashArr} type={"trash"} />
      <Route path="/trash/:noteId">
        <TrashView />
      </Route>
    </>
  )
}

export default Trash;
