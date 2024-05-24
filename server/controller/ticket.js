

const Ticket = require('../model/ticket');

const getAllTickets = async (req, res) => {

try {
    const tickets = await Ticket.find({});
    res.status(200).json(tickets);
} catch (error) {
   res.json('cannot get tickets') 
}
};

const addNewTicket = async (req, res) => {

try {
  const {name,imageURL,day,month,time,sits,venue,category}= req.body
    const savedTicket = await Ticket.create({name,imageURL,day,month,time,sits,venue,category});
    savedTicket.save()
    res.status(201).json(savedTicket);
    
} catch (error) {
    console.log(error)
}

   
};

const  deleteTicket = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTicket = await Ticket.findByIdAndDelete(id);
        if (!deletedTicket) {
            return res.status(404).json({ error: 'Ticket not found' });
        }
        res.status(200).json({ message: 'Ticket deleted successfully', deletedTicket });
    } catch (error) {
        console.error('Error deleting ticket:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



    const getSingleTicket = async (req, res) => {
        const { id, name } = req.params;
        try {
            let ticket;
            if (id) {
                // If id is provided, find ticket by id
                ticket = await Ticket.findById(id);
            } else if (name) {
                // If name is provided, find ticket by name
                ticket = await Ticket.findOne({ name: name });
            } else {
                return res.status(400).json({ error: 'Please provide either id or name of the ticket' });
            }
    
            if (!ticket) {
                return res.status(404).json({ error: 'Ticket not found' });
            }
            
            res.status(200).json(ticket);
        } catch (error) {
            console.error('Error fetching ticket:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    
       

};


const updateTicket = async (req, res) => {
    const { id } = req.params;
    const updateFields = req.body;

    try {
        const updatedTicket = await Ticket.findByIdAndUpdate(id, updateFields, { new: true });
        if (!updatedTicket) {
            return res.status(404).json({ error: 'Ticket not found' });
        }
        res.status(200).json(updatedTicket);
    } catch (error) {
        console.error('Error updating ticket:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getAllTickets,
    addNewTicket,
    deleteTicket,
    getSingleTicket,
    updateTicket,
};
