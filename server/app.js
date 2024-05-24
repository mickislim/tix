const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the uploads directory

const ticketRouter = require('./router/ticket');


// Multer configuration


// Routes
app.use('/api/tickets', ticketRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://mikeakinyemi41:Qc8ge1K3arIvmJW3@ticketdetails.fyphnwo.mongodb.net/?retryWrites=true&w=majority&appName=TicketDetails')
  .then(() => {
    console.log('MongoDB connected');
    const PORT = process.env.PORT || 3500;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

// Ticket routes

