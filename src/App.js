import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Root from './components/root';

// Add react-router-dom imports
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';

// create router with JSX Route elements
const appRouter = createBrowserRouter(createRoutesFromElements(<Route path = "/" element = {<Root></Root>}>
  <Route index element = {<HomePage></HomePage>} ></Route>
  <Route path = ":type" element = {<HomePage></HomePage>}></Route>
  <Route path =":type/:id" element = {<PetDetailsPage></PetDetailsPage>}></Route>
  <Route path = ":type/:id" element = {<PetDetailsPage></PetDetailsPage>}></Route>
  <Route path = "search" element = {<SearchPage></SearchPage>}></Route>
  <Route path = "pet-details-not-found" element = {<PetDetailsNotFound></PetDetailsNotFound>}></Route>

</Route>));

function App() {
  return (
    <RouterProvider router = {appRouter}/>
  );
}

export default App;
