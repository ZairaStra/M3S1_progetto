import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/MyNav";
import "./components/Headings";
import "./components/MyFooter";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Headings from "./components/Headings";
import Gallery from "./components/Gallery";

const App = function () {
  return (
    <>
      <MyNav />
      <Headings />
      <Gallery title="Harry Potter" /*  query="Harry Potter"  */ />
      <MyFooter />
    </>
  );
};

export default App;
