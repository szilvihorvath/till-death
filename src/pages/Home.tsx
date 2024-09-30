import { Navbar } from "../components/navbar/navbar";
import { Faq, Intro, When, Where } from "../components/sections";

const Home = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <hr style={{ width: '50%', marginTop: '30px', marginBottom: '30px' }} />
      <Where />
      <hr style={{ width: '50%', marginTop: '30px', marginBottom: '30px' }} />
      <When /><hr style={{ width: '50%', marginTop: '30px', marginBottom: '30px' }} />
      <Faq />
    </>
  )
};

export default Home;
