import './styles/App.css';
import { Outlet, Navigate, useNavigate } from "react-router-dom"
import NavBar from "./components/NavBar"

function App() {
  const navigate = useNavigate();





  return (
    <div className="App">
      <NavBar />
      {/* <header>
        This is the header
      </header>
      <main>
        This is the Main
      </main>
      <footer>
        This is the Footer
      </footer> */}
    </div>
  );
}

export default App;
