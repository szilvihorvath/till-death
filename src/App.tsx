import { Container } from "./components/container/Container"
import { Header } from "./components/header/Header"
import { Navbar } from "./components/navbar/navbar"
import { When, Where, Faq, Intro } from "./components/sections/index"
import './App.css'

function App() {
  return (
      <Container>
        <Header />
        <Navbar />
        <Intro />
        <hr style={{width: '50%', marginTop: '30px', marginBottom: '30px'}}/>
        <Where />
        <hr style={{width: '50%', marginTop: '30px', marginBottom: '30px'}}/>
        <When />
        <hr style={{width: '50%', marginTop: '30px', marginBottom: '30px'}}/>
        <Faq />
      </Container>
  )
}

export default App
