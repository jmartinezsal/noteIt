import {useSelector, useDispatch} from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import ReactHtmlParser from 'html-react-parser';
import {MdOutlineRecycling} from 'react-icons/md';

import { getAllTrash, trashDeleteOne} from '../../../store/trash';
import { updateNote} from '../../../store/note';




function TrashView(){
  const dispatch = useDispatch();
  const history = useHistory();
  const {noteId} = useParams();
  const notebooks = useSelector(state => state.notebook);

  const trash = useSelector(state => state.trash[noteId] )

  const onClickSave = async() => {
    dispatch(updateNote({ id:noteId, trashed: false, title:trash.title }))
     .then(() =>dispatch(getAllTrash()));
     history.push('/trash');

  }

  const onClickDelete = async () => {
    dispatch( trashDeleteOne(trash?.id))

  }


  return (
    <>
     <div className='note-view-page'>
      <div className="editor-note-title">
        <h3> {trash?.title}</h3>
        <MdOutlineRecycling onClick={onClickSave} />
        <i className="fa-solid fa-trash" onClick={onClickDelete}></i>
      </div>
        <p>{ReactHtmlParser(trash?.content)}</p>
    </div>
    </>
  )
}


export default TrashView;;
