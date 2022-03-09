import { BrowserRouter } from "react-router-dom";
import Home from "./containers/Home/Home";
import Navigation from "./containers/Navigation/Navigation";
import "./styles/styles.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
