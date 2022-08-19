import { useEffect, useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { searchNotes } from '../../store/note';
import {useDispatch} from 'react-redux';

function Search() {
  const dispatch = useDispatch()
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {

    if (search.length > 0) {
      setActive(true)
    }
  }, [search])

  const searchHandler = () => {
    const notes = dispatch(searchNotes({search}));


  }


  const buttonChooser = active ? (
    <NavLink to="/search">

    <div className="search nav-btn" onClick={searchHandler}>
      Search
    </div>
    </NavLink>
  ) :
  <NavLink to="/notes/create">
    <div className="note nav-btn">
      New Note
    </div>
  </NavLink>
    ;

  return (
    <div className="search-container">
      <form >
        <input onChange={e => setSearch(e.target.value)}  placeholder='Search' value={search} maxLength={25}>
        </input>
      </form>
    {buttonChooser}

    </div>
  )
}
export default Search;
