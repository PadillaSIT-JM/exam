import { Routes, Route } from "react-router-dom";
import Home       from "./pages/Home";
import NavBar     from "./pages/NavBar"; 
import About      from "./pages/About";
import Contact    from "./pages/Contact";
import EventForm from "./pages/EventForm";
import BookRequest   from "./pages/BookRequest";
import Services   from "./pages/Services";     
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <NavBar />
      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/about"       element={<About />} />
        <Route path="/contact"     element={<Contact />} />
        <Route path="/services"    element={<Services />} />
        <Route path="/book-request"   element={<BookRequest />} />
        <Route path="/event-feedback" element={<EventForm />} />

        {/* Optional: 404 page */}
        <Route path="*" element={<div>404 - Page not found</div>} />

      

      </Routes>
    </div>
  );
}

export default App;