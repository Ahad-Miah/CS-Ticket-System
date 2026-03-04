import React from 'react';
import { LuCalendarDays } from "react-icons/lu";

const TicketCard = ({ticket,setProgress,progress}) => {
  const handleClick=(Pticket)=>{
    setProgress([...progress, Pticket]);
  }
    return (
         <div onClick={()=>handleClick(ticket)}
            className="flex flex-col bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow w-full"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
              <h2 className="text-md md:text-lg font-bold text-slate-900 leading-tight">
                {ticket.title}
              </h2>
              <div className={`badge badge-lg py-4 px-4 gap-2 ${ticket.status=="Open"?"bg-[#B9F8CF]":"bg-[#F8F3B9]"} border-none text-[#065F46] font-semibold whitespace-nowrap`}>
                <div className={`h-3 w-3 rounded-full ${ticket.status=="Open"?"bg-[#02A53B]":"bg-[#FEBB0C]"}`}></div>
                {ticket.status}
              </div>
            </div>
            <p className="text-slate-500 text-base md:text-lg mb-6 line-clamp-2">
              {ticket.description}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-4 pt-4  mt-auto">
              <div className="flex items-center gap-4 md:gap-6">
                <span className="text-slate-500  text-base md:text-md">
                  #{ticket.id}
                </span>

                <p className="text-red-500 font-semibold  text-xs md:text-sm uppercase">
                  {ticket.priority} PRIORITY
                </p>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-4 md:gap-6 text-slate-500">
            
                <span className="text-base md:text-md">{ticket.customer}</span>

                <div className="flex items-center gap-2">
                  <LuCalendarDays className="text-xl md:text-2xl text-slate-400" />
                  <span className="text-base md:text-lg">
                    {new Date(ticket.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
    );
};

export default TicketCard;