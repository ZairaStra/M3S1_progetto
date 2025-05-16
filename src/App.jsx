import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/MyNav";
import "./components/Headings";
import "./components/MyFooter";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Headings from "./components/Headings";

const App = function () {
  return (
    <>
      <MyNav />
      <Headings />
      <MyFooter />
    </>
  );
};

export default App;
