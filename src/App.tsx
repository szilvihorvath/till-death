import { Container } from "./components/container/Container"
import { HashRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Rsvp from "./pages/Rsvp";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Container />}>
            <Route path="/" element={<Home />} />
            <Route path="rsvp" element={<Rsvp />} />
            <Route path="thanks" element={<Confirmation />} />
          </Route>
        </Routes>
      </HashRouter>
  )
}

export default App
