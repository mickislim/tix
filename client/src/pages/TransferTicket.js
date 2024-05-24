import React from 'react'
import backIcon from '../assets/back-icon.png'


const TransferTicket = ({closeTransfer}) => {
  return (

    <div className='flex flex-col item-center justify-center  '>
   <form className="top-80 left-1/2 w-8/12 lg:w-3/12 border  py-10  bg-white/95 absolute ">

<div id="form-body" className=" px-8">
    <header className="text-3xl text-azure-black font-bold">Transfer Tickets</header>
    <div className="flex flex-col my-8">
        <label className="text-1xl font-bold text-azure-black mb-2">Recipient Name</label>
<input type="text" placeholder="Recipient's name" className="border-4 border-azure-black px-2 py-1 "/>
    </div>


    <div className="flex flex-col my-8 ">
        <label className="text-1xl font-bold text-azure-black mb-2">Email</label>
<input type="text" placeholder="Recipient's email "  className="border-4 border-azure-black px-2 py-1" />
    </div>

<div className="flex item-center justify-center">
<button type="submit" className=" bg-azure-deepblue text-azure-white hover:bg-azure-lightblue font-extrabold text-1.5xl w-full py-1  rounded-md">Send</button>
</div>

<div className="py-3"><button type="button" className="flex bg-azure-deepblue px-1 text-azure-white text-xs font-semibold " onClick={closeTransfer} ><img src={backIcon} alt='back-icon' className="h-4"/>Back</button></div>

</div>


</form>
    </div>
   )
}

export default TransferTicket