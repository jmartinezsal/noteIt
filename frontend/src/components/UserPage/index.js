import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllNotebooks} from '../../store/notebook'
import {getAllNotes} from '../../store/note'



function UserPage(){
  const dispatch = useDispatch();

  const notebooks = useSelector(state => state.notebooks)
  const notes = useSelector(state =>state.notes);

  useEffect(() =>{
    dispatch(getAllNotebooks());
    dispatch(getAllNotes());
  }, [dispatch])



  return(
    <div className="user-page">

    </div>
  )
}

export default UserPage;
