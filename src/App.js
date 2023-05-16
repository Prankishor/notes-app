import Notes from './pages/Notes'
import Create from './pages/Create'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route path="/" element={<Notes />} />
      <Route path="/create" element={<Create />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;