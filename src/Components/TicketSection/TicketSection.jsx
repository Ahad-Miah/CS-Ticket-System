import React, { use } from "react";
import TicketCard from "../TicketCard/TicketCard";

const TicketSection = ({ ticketPromice }) => {
    const tickets=use(ticketPromice)
  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      {/* Title */}
      <h3 className="text-2xl font-semibold mb-6 text-slate-800">
        Customer tickets
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {tickets.map((ticket) => (
         <TicketCard key={ticket.id} ticket={ticket}></TicketCard>
        ))}
      </div>
    </div>
  );
};

export default TicketSection;