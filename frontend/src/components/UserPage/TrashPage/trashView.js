import {useSelector, useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';

import { trashDeleteOne} from '../../../store/trash';


function TrashView(){
  const dispatch = useDispatch();
  const {noteId} = useParams();

  const trash = useSelector(state => state.trash[noteId] )



  const onClickSave = async() => {
    // dispatch(updateNote({ id, trashed: true}));

  }

  const onClickDelete = async () => {
    dispatch( trashDeleteOne(trash?.id))
      // .then(() => dispatch(getAllNotes()))
      // .then(() => dispatch(getAllTrash()))

  }


  return (
    <>
     <div className='note-view-page'>
      <div className="editor-note-title">
        <h3> {trash?.title}</h3>
        <i className="fa-solid fa-floppy-disk" onClick={onClickSave}></i>
        <i className="fa-solid fa-trash" onClick={onClickDelete}></i>
      </div>
        <p>{trash?.content}</p>

    </div>
    </>
  )
}


export default TrashView;;
