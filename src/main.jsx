import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Events from './pages/events/Events.jsx';
import ScrollToTop from './component/ScrollToTop.jsx';
import TicketForm from './pages/ticket-form/TicketForm.jsx';
import Ticket from './pages/ready-ticket/Ticket.jsx';

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Events />} />
        <Route path="/ticket-form/:number" element={<TicketForm />} />
        <Route path="/ticket" element={<Ticket />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
