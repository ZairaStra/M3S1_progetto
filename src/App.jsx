import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/MyNav";
import "./components/MyFooter";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";

const App = function () {
  return (
    <>
      <MyNav />

      <MyFooter />
    </>
  );
};

export default App;
