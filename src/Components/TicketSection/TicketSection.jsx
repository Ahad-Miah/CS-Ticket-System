import React, { use, useEffect } from "react";
import TicketCard from "../TicketCard/TicketCard";

const TicketSection = ({ ticketPromice,setProgress,progress,setTickets,tickets }) => {
    const data=use(ticketPromice)
   
    useEffect(()=>{

      if(data){
        setTickets(data)
      }
    },[data,setTickets])
  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      {/* Title */}
      <h3 className="text-2xl font-semibold mb-6 text-slate-800">
        Customer tickets
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {tickets.map((ticket) => (
         <TicketCard tickets={tickets} progress={progress} setTickets={setTickets}  setProgress={setProgress} key={ticket.id} ticket={ticket}></TicketCard>
        ))}
      </div>
    </div>
  );
};

export default TicketSection;