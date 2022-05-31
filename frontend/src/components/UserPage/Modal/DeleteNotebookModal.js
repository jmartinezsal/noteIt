

import {deleteNotebook} from '../../../store/notebook';

function DeleteModalNotebook(){

  const deleteHandler = e =>{
    e.preventDefault();
    dispathc
  }
  return(

    <form className="modal-container" onSubmit={deleteHandler}>
  <label>
    Are you sure you want to delete this image?
  </label>
  <div className="button-container-modal">
    <button className="cancel-button" type="button" onClick={cancleHandler}>
      Cancel
    </button>
    <button className="delete-button" type="submit">
      Delete
    </button>
  </div>
</form>

)

}
