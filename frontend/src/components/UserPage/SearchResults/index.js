
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

import ContentNavigation from '../../ContentNavigation';


function SearchResults({notes}) {

  return (
    <div className="note-page">
      <ContentNavigation content={notes} type={"search"} />
      <Route path="/notes/:noteId">
      </Route>
    </div>

  )
}

export default SearchResults;
