import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fbIcon from '../assets/fb.png';
import twitterIcon from '../assets/twitter.png';
import mailIcon from '../assets/mail.png';
import ticketIcon from '../assets/ticket.png';
import sellTicketIcon from '../assets/sell-ticket.png';
import transferTicketIcon from '../assets/transfer-tickets-icon.png';
import TransferTicket from './TransferTicket';
import axios from 'axios';

const TicketPage = () => {
    const { id } = useParams(); // Get the ticket ID from URL parameters
    const [ticket, setTicket] = useState(null);
    const [isTransferOpen, setIsTransferOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchSingleTicket = async () => {
        try {
            const res = await axios.get(`http://localhost:3500/api/tickets/${id}`); // Corrected URL with protocol
            setTicket(res.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching ticket:', error);
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSingleTicket();
    }, [id]);

    const openTransfer = (e) => {
        e.preventDefault();
        setIsTransferOpen(true);
    };

    const closeTransfer = (e) => {
        e.preventDefault();
        setIsTransferOpen(false);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading ticket data.</div>;

    return (
        <>
            <header className="text-3xl ml-5 my-5">Event Details</header>
            <div id="container" className="flex space-x-8 relative ">
                <div id="section-1" className="border ml-5 px-5 py-3 w-5/12">
                    <div id="ticket-img"><img alt='eventImage' src={ticket.imageURL} /></div>
                    <div id="venue-date" className="flex justify-start space-x-20 border-b my-5 ">
                        <div id="date" className="flex font-bold justify-center items-start text-start flex-col w-3/8">
                            <h1 className="text-2xl">{ticket.day}</h1>
                            <p>{ticket.month}</p>
                        </div>
                        <div id="venue" className="flex flex-col items-start w-5/8">
                            <h1 className="text-start text-2xl my-3 font-bold">{ticket.name}</h1>
                            <h1 className="text-xs font-semibold text-azure-black">{ticket.time} • {ticket.venue}</h1>
                        </div>
                    </div>
                    <div id="notify" className="flex justify-between">
                        <div><h1 className="font-semibold">Share You're Going</h1></div>
                        <div id="icons">
                            <ul className="flex space-x-3 px-10">
                                <li><img src={fbIcon} alt='fb-icon' className="h-5" /></li>
                                <li><img src={twitterIcon} alt='twitter-icon' className="h-5" /></li>
                                <li><img src={mailIcon} alt='mail-icon' className="h-5" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="section-2" className="w-7/12">
                    <div id="download" className="flex bg-orange-50 py-4 px-5">
                        <div>
                            <h1 className="text-blue-950 font-bold">How to get into the event <a href="/" className="text-azure-deepblue">More Details</a></h1>
                            <h1 className="py-5 font-semibold text-azure-black">With this order, pick the ticket delivery option that works for you • print-at-home or go mobile</h1>
                        </div>
                        <div className="flex item-center justify-center border-red-500 border-2 p-3 m-auto">
                            <button type="button" className="bg-tm-green text-azure-white bg-azure-lightblue h-8 px-6 font-bold hover:bg-azure-deepblue text-start text-nowrap">PRINT TICKETS</button>
                        </div>
                    </div>
                    <div id="trade" className="flex border my-5 font-bold text-azure-lightblue">
                        <div className="text-center w-3/12 py-6 px-3 border">
                            <button type="button" onClick={openTransfer}><img src={transferTicketIcon} alt='transfer-ticket-icon' className="flex h-6 m-auto" />Transfer Tickets</button>
                        </div>
                        <div className="text-center w-3/12 py-6 px-3 border">
                            <button type="button" className="flex flex-col justify-center items-center m-auto"><img src={sellTicketIcon} alt='sell-ticket-icon' className="h-6" />Sell Tickets</button>
                        </div>
                    </div>
                    {ticket.sits && (
                        <div>
                            <h1 className="text-2xl font-bold mt-10 mb-4">My Tickets ({ticket.sits.length})</h1>
                            <ul className="text-1.5xl font-bold">
                                {ticket.sits.map((sit, index) => (
                                    <li key={index} className="flex justify-start item-center text-center hover:bg-black/20 border py-2 px-5">
                                        <img src={ticketIcon} alt='ticket-icon' className="h-5 mr-2" />
                                        {sit}, <em className="font-light">{ticket.category}</em>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            {isTransferOpen && <TransferTicket closeTransfer={closeTransfer} />}
        </>
    );
};

export default TicketPage;
