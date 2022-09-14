import { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { searchNotes } from '../../store/note';
import { useDispatch } from 'react-redux';

function Search() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [active, setActive] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search.length > 0) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [search])

  const searchHandler = async (e) => {
    e.preventDefault();
    const results = await dispatch(searchNotes(search))

    history.push({
      pathname: `/search`,
      state: {
        results: results,
        search: search
      }
    })
    setSearch('')
  }



  const buttonChooser = active ? (
    <button className="search nav-btn" type="submit">
      Search
    </button>

  ) :
    <NavLink to="/notes/create">
      New Note
    </NavLink>
    ;

  return (
    <div className="search-container">
      <form onSubmit={searchHandler}>
        <input onChange={e => setSearch(e.target.value)} placeholder='Search' value={search} maxLength={25}>
        </input>
        {buttonChooser}
      </form>

    </div>
  )
}
export default Search;
