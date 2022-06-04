import { useState, useEffect } from 'react';

import { BsCaretRight, BsCaretDown } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

function ListExpander( content ) {
  const [showList, setShowList] = useState(false);

  const openList = () => {
    if (showList) return;
    setShowList(true);
  };

  useEffect(() => {
    if (!showList) return;

    const closeList = () => {
      setShowList(false);
    };

    document.addEventListener('click', closeList);

    return () => document.removeEventListener("click", closeList);
  }, [showList]);

  return (
    <>
      <div className="user-nav-selection-caret">
        {!showList ?
          <BsCaretRight onClick={openList} /> : <BsCaretDown />
        }
      </div>
      {showList &&
      <div className="list-container" >
        {content.map(item => (
          <div className="list-selction"  >
            <p>{item.title}</p>

          </div>
        ))}
        </div>
}
    </>
  )
}

export default ListExpander;
