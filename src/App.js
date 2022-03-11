import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import logo from './assets/images/logo.svg'

import ScrollToTop from './ScrollToTop';
import MainPage from './MainPage';
import StrawberryPage from './StrawberryPage';

function App() {
  return (
    <main>
      <header className="animatedHeader">
        <h1>Neon Era</h1>
        <Link to="/"><img src={logo} title="Neon Era" alt="NE Logo" /></Link>
      </header>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/strawberry" element={<StrawberryPage />} />
      </Routes>
      <footer>
        <p>© 2022 <Link to="/">Neon Era</Link>. All Rights Reserved.</p>
      </footer>
    </main>
  )
}

export default App;
