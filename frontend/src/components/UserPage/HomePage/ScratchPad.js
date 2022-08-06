const { useState } = require("react");
const { MdOutlineLeaderboard } = require("react-icons/md");
const { useSelector } = require("react-redux")

function ScratchPad (){
  const user = useSelector(state => state.session.user)

  const [scratchPad, setScratchPad] = useState(user.scratchPad);

  return(
    <form className="scratch-pad">
      <p className="scratch-pad-header">Quick memo:</p>
      <textarea value={scratchPad} onChange={(e) => setScratchPad(e.target.value)}>

      </textarea>
    </form>
  )
}

export default ScratchPad;
