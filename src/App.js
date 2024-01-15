import './styles/App.css';
import { Outlet, Navigate, useNavigate } from "react-router-dom"
import NavBar from "./components/NavBar"
import { useEffect, useState } from 'react';

function App() {
  const [classList, setClassList] = useState([])

  useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/classes")
      .then((r) => r.json())
      .then(data => setClassList(data.results))
  }, [])


  return (
    <div className="App">
      <header><NavBar /></header>
      <Outlet context={classList} />
      <footer></footer>
    </div>
  );
}

export default App;
