
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, useLocation, useParams } from 'react-router-dom';

import { searchNotes } from '../../../store/note';
import ContentNavigation from '../../ContentNavigation';
import NoteCreator from '../NotePage/noteCreator';

function SearchResults() {
  const location = useLocation();

  const [results, setResults ] = useState([])
  const allNotes = useSelector(state => state.note)

  useEffect(( )=>{
    setResults(location.state.results);
  }, [location])

  const resultNotes = results.map(el => allNotes[el])

  return (
    <div className="note-page">
      <ContentNavigation  content={resultNotes} type={"search"} search={location.state.search}/>
      <Route path={`/search?${location.state.search}/notes/:noteId`}>
        <NoteCreator />
      </Route>
    </div>

  )
}

export default SearchResults;
