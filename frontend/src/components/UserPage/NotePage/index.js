import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

import ContentNavigation from '../../ContentNavigation';
import NoteCreator from './noteCreator';
import { getAllNotes } from '../../../store/note';

function NotePage() {
  const dispatch = useDispatch();


  const notes = useSelector(state => state.note);
  const notesArr = Object.values(notes);



  return (
    <div className="note-page">
      <ContentNavigation content={notesArr} type={"notes"} />
      <Route path="/notes/:noteId">
        <NoteCreator />
      </Route>
    </div>

  )
}

export default NotePage;
