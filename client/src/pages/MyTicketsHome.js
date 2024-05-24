import React, { useState,useEffect } from 'react'
import axios from 'axios'
import pin from '../assets/pin.png'
import checkmark from '../assets/checkmark.png'
import calendar from '../assets/calendar.png'
import { Link, useParams } from 'react-router-dom'
import seeDetail from '../assets/see-details.png'


const MyTicketsHome = () => {
    const [tickets, setTickets] = useState([])
    const { id } = useParams();

   

    useEffect(() => {
        fetchData();
    }, [id]); // Fetch data when component mounts

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3500/api/tickets');
            setTickets(response.data); // Update tickets state with fetched data
        } catch (error) {
            console.error('Error fetching tickets:', error);
        }
    };




  return (
    <div>
   <div className="mx-10 my-4">
    <ul className="flex flex-row space-x-1 font-semibold text-black/60">
        <li className="">My Account</li> 
        <li className="font-extrabold"> </li>
        <li >My Events</li>
    </ul>
</div>

<div className="flex flex-row justify-between item-center mx-10 my-10">
    <header className="text-3xl font-bold ">My Events</header>
<button type="button" className="flex items-center  mx-12 text-tm-green font-bold">View my listings <img src={seeDetail} alt='see details' className="h-4 ml-1"/></button>
</div>

<div className="flex justify-start items-center mx-10 my-5">
    
    <ul className="flex space-x-4 font-bold border-b-zinc-600">
        <li className="border-b-8">
            Upcoming
        </li>

        <li className="text-black/40">Past Events</li>
    </ul>
    


</div>

<div>{tickets.map((ticket,index)=>(
    <div key={ticket._id} className="flex mx-10  my-5 justify-start items-start ">
 <div id="event-img" className="w-4/12"  >
        <img src={ticket.imageURL} alt='ticket-img' className="h-80" />
    </div>


    <div id="event-details" className="border flex justify-between items-center w-9/12 font-bold text-azure-black">
        <div  className="flex flex-col mx-4 my-6  ">
            <h1 className="text-3xl my-3">{ticket.name}</h1>
    
            <div className="flex text-1.5xl  text-center items-start justify-start my-3">
             <div className="">
                <img src={calendar}  alt="calendar" className="h-5"/>
             </div>   
                
                <ul className="flex text-2l ml-1 " >
                    <li>{ticket.day}, {ticket.month} </li> 
                    <li>{ticket.time}</li>
                </ul>
    
            </div>
    
    <div className="flex  text-center items-start justify-start my-3">
        <div><img src={pin} alt='location-icon' className="h-5"/></div>
        <p className="text-1.5xl ml-1 ">{ticket.venue}</p>
    </div>
    
    <div>
        <button className="flex text-white text-xs bold bg-azure-deepblue p-2  "><img src={checkmark} alt='checkmark-icon' className="h-3 mr-1" /> View In Wallet </button>
    </div>
    
        </div>

        <div key={ticket.id} className=" mx-10 text-center border-azure-deepblue border-2 px-4 py-2" > <Link  to={`/ticket/${ticket._id}`} key={index} className="text-nowrap text-azure-deepblue font-bold text-xs">See Details</Link></div>
    </div>
   

    </div>

))}</div>



</div>
)
}

export default MyTicketsHome