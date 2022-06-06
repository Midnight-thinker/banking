import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Transfer from './components/Transfer';
import History from './components/History';
import Footer from './components/Footer';
import Account from './components/Account';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <div>
    <Navbar />
    <Routes>
    <Route exact path="/home" element={ <Home /> } />
    <Route exact path="/transfer" element={ <Transfer /> } />
    <Route exact path="/history" element={ <History /> } />
    <Route exact path="/account" element={ <Account /> } />
    </Routes>
    </div>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
