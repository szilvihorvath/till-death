import { Container } from "./components/container/Container"
import { HashRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./pages/Home"
import Rsvp from "./pages/Rsvp";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route path="/" element={<Home />} />
          <Route path="rsvp" element={<Rsvp />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
