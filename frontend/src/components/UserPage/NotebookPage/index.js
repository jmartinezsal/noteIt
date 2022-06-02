import { Switch, Route } from 'react-router-dom';
import AllNotebookPage from './allNotebookPage';
import NotebookPage from './notebookPage';


function Notebook() {


  return (
    <Switch>
      <Route path="/notebooks" exact>
        <AllNotebookPage />
      </Route>
      <Route path="/notebooks/:notebookId">
        <NotebookPage />
        <Route path="/notebooks/:notebookId/notes/:noteId" >

        </Route>
      </Route>

    </Switch>
  )
}


export default Notebook;
