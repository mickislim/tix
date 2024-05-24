

const express = require('express');
const ticketRouter = express.Router();



const { getAllTickets, deleteTicket, getSingleTicket,addNewTicket,updateTicket } = require('../controller/ticket');


ticketRouter.post('/addnew', addNewTicket);
ticketRouter.get('/', getAllTickets);
ticketRouter.delete('/delete/:_id', deleteTicket);
ticketRouter.get('/:id', getSingleTicket);
ticketRouter.put('/update',updateTicket)


module.exports = ticketRouter;
