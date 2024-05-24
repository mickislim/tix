import React, { useState } from 'react';
import axios from 'axios';

const CreateTicket = () => {
    const [sits, setSits] = useState(['']);
    const [ticket, setTicket] = useState({
        name: '',
        imageURL: '',
        day: '',
        month: '',
        time: '',
        venue: '',
        category: '',
    });

    const addSitField = () => {
        setSits((prevSits) => [...prevSits, '']);
    };

    const handleChange = (e, index) => {
        const newSits = [...sits];
        newSits[index] = e.target.value;
        setSits(newSits);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3500/api/tickets/addnew', {
                ...ticket,
                sits: sits.filter((sit) => sit.trim() !== ''), // Filter out empty sits
            });
            console.log(response.data);
            setTicket({
              name: '',
              imageURL: '',
              day: '',
              month: '',
              time: '',
              venue: '',
              category: '',
          });
          setSits(['']); 
        } catch (error) {
            console.error('Error submitting ticket:', error);
        }

   
        
    };

    return (
        <form className="py-10 px-5" onSubmit={handleSubmit}>
            <div className="text-2xl py-3 px-2">
                <label>Ticket Name</label>
                <input
                    type="text"
                    className="border-4 border-azure-black"
                    name="name"
                    value={ticket.name}
                    onChange={(e) => setTicket({ ...ticket, name: e.target.value })}
                />
            </div>

            <div className="text-2xl py-3 px-2">
                <label>Ticket Image</label>
                <input
                    type="url"
                    className="border-4 border-azure-black"
                    name="img"
                    value={ticket.imageURL}
                    onChange={(e) => setTicket({ ...ticket, imageURL: e.target.value })}
                />
            </div>

            <div className="text-2xl py-3 px-2">
                <label>Ticket Date & Time</label>
                <input
                    type="text"
                    placeholder="FRI"
                    className="border-4 border-azure-black"
                    name="day"
                    value={ticket.day}
                    onChange={(e) => setTicket({ ...ticket, day: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="SEP 15"
                    className="border-4 border-azure-black"
                    name="month"
                    value={ticket.month}
                    onChange={(e) => setTicket({ ...ticket, month: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="5:00 PM"
                    className="border-4 border-azure-black"
                    name="time"
                    value={ticket.time}
                    onChange={(e) => setTicket({ ...ticket, time: e.target.value })}
                />
            </div>

            <div className="text-2xl py-3 px-2">
                <label>Ticket Venue</label>
                <input
                    type="text"
                    placeholder="venue and city"
                    className="border-4 border-azure-black"
                    name="venue"
                    value={ticket.venue}
                    onChange={(e) => setTicket({ ...ticket, venue: e.target.value })}
                />
            </div>

            <div className="text-2xl py-3 px-2">
                <label>Sits</label>
                {sits.map((sit, index) => (
                    <input
                        key={index}
                        type="text"
                        placeholder="SECTION LAWN 15"
                        className="border-4 border-azure-black mb-2"
                        value={sit}
                        onChange={(e) => handleChange(e, index)}
                    />
                ))}
                <button
                    type="button"
                    onClick={addSitField}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Add Sit
                </button>
            </div>

            <div className="text-2xl py-3 px-2">
                <label>Ticket Category</label>
                <input
                    type="text"
                    placeholder="General Admission"
                    className="border-4 border-azure-black"
                    name="category"
                    value={ticket.category}
                    onChange={(e) => setTicket({ ...ticket, category: e.target.value })}
                />
            </div>

            <button className="bg-red-500 text-white py-2 px-4 rounded">Submit</button>
        </form>
    );
};

export default CreateTicket;
