import { useEffect, useState, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { searchNotes } from '../../store/note';
import { useDispatch } from 'react-redux';

import {BiSearchAlt2} from 'react-icons/bi';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import MobileContext from "../../context/Mobile";

function Search() {
  const history = useHistory();
  const dispatch = useDispatch();
  const {screenWidth} = useContext(MobileContext);

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
      {screenWidth > 700 ? "Search" : <BiSearchAlt2 /> }
    </button>

  ) :
    <NavLink to="/notes/create" className="create nav-btn">
      {screenWidth > 700 ? "New Note" : <AiOutlinePlusCircle />}
    </NavLink>;

  return (
      <form className='search-container' onSubmit={searchHandler}>
        <input onChange={e => setSearch(e.target.value)} placeholder='Search' value={search} maxLength={25}>
        </input>
        {buttonChooser}
      </form>

  )
}
export default Search;
