import { Container } from "./components/container/Container"
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from "./pages/Home"
import Rsvp from "./pages/Rsvp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Container />}>
      <Route index element={<Home />} />
      <Route path="/rsvp" element={<Rsvp />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
