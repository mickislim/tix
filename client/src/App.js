import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateTicket from './pages/CreateTicket';
import MyTicketsHome from './pages/MyTicketsHome';
import Navbar from './pages/Navbar';
import TicketPage from './pages/TicketPage';

function App() {
  
  return (
    <div id='container' className="bg-white/95">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/create/ticket" element={<CreateTicket />} />
          <Route path="/" element={<MyTicketsHome />} />
          <Route path='ticket/:id' element={<TicketPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
