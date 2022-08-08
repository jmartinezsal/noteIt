import {useState, useEffect} from 'react';
import { useSelector, useDispatch} from "react-redux";

import { scratchPadEditor } from "../../../store/session";

function ScratchPad (){
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)

  const [scratchPad, setScratchPad] = useState(user.scratchPad);
  const [checker, setChecker ] = useState()
  const [active, setActive] = useState(true);

  useEffect(() =>{

    dispatch(scratchPadEditor({scratchPad}));

  }, [dispatch, scratchPad, active])



  return(
    <form className="scratch-pad">
      <p className="scratch-pad-header">Quick memo:</p>
      <textarea value={scratchPad} onChange={(e) => setScratchPad(e.target.value)} >
      </textarea>
    </form>
  )

}
export default ScratchPad;
