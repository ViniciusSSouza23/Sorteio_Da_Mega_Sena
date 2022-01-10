import { BrowserRouter } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Global } from "./Styles/Global";
import 'bootstrap/dist/css/bootstrap.min.css';
import Rotas from "./Routes";


function App() {
  return (
    <BrowserRouter>
      <Global/>
      <Header/>
      <Rotas/>
      <Footer/>
    </BrowserRouter>
      
    
  );
}

export default App;
