import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import ScrollToTop from './ScrollToTop';
import MainPage from './MainPage';
import StrawberryPage from './StrawberryPage';

function App() {
  return (
    <main>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/strawberry" element={<StrawberryPage />} />
      </Routes>
      <div className="footerDiv">
        <p>© 2022 <Link to="/">Neon Era</Link>. All Rights Reserved.</p>
      </div>
    </main>
  )
}

export default App;
