import {useSelector} from 'react-redux';
import ContentNavigation from '../../ContentNavigation';



function Trash(){
  const trash = useSelector(state => state.trash);
  const trashArr = Object.values(trash);
  console.log(trashArr)

  return (
    <>
      <ContentNavigation  content={trashArr} type={"trash"} />

      

    </>
  )
}

export default Trash;
