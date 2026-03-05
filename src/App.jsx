import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import StatusSection from "./Components/StatusSection/StatusSection";
import TicketSection from "./Components/TicketSection/TicketSection";
import FooTer from "./Components/Footer/FooTer";
import { ToastContainer } from "react-toastify";

const fetchTickets = async () => {
  const ticketResponse = await fetch("/tickets.json").then((res) => res.json());
  return ticketResponse;
};

const ticketPromice = fetchTickets();

function App() {
  const [progress,setProgress]=useState([]);
  const [resolve,setResolve]=useState([]);
  const[tickets,setTickets]=useState([])
  return (
    <div>
      <Navbar></Navbar>
      <section className="bg-[#dee5ea] pb-20">
        <Banner resolve={resolve} progress={progress}></Banner>
        <div className=" mx-5 md:mx-10 md:grid grid-cols-4 gap-[24px]">
          <div className="col-span-3">
            <Suspense
              fallback={
                <div>
                  <span className="loading loading-bars loading-xs"></span>
                  <span className="loading loading-bars loading-sm"></span>
                  <span className="loading loading-bars loading-md"></span>
                  <span className="loading loading-bars loading-lg"></span>
                  <span className="loading loading-bars loading-xl"></span>
                </div>
              }
            >
              {" "}
              <TicketSection tickets={tickets} setTickets={setTickets} progress={progress} setProgress={setProgress} ticketPromice={ticketPromice}></TicketSection>
            </Suspense>
          </div>
          <StatusSection tickets={tickets} setTickets={setTickets} setProgress={setProgress} setResolve={setResolve} resolve={resolve} progress={progress} className=" border border-blue-700 h-60"></StatusSection>
        </div>
      </section>
      <FooTer></FooTer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
