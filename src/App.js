import Navbar from "./components/navbar";
import Header from "./components/header";
import SectionOne from "./components/section-one";
import SectionTwo from "./components/section-two";
import SectionThree from "./components/section-three";
import SectionFour from "./components/section-four";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <Footer />
      </div>
    </>
  );
}

export default App;
