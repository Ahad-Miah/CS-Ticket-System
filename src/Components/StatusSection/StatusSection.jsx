import React from 'react';
import { toast } from 'react-toastify';

const StatusSection = ({progress,resolve,setResolve,setProgress}) => {

    const handleResolve=(ticket)=>{
            setResolve([...resolve,ticket]);
        const updateProgress=progress.filter(p=>p.id!==ticket.id);
        setProgress(updateProgress);
        toast.success("Complete.Task Added on the Resolve list")
    }
    return (
        <div className=' h-96 px-3 py-6 *:mb-10'>
         <div>
            <h3 className='font-semibold text-2xl mb-3'>Task status</h3>
          {
            progress.length>0  ?  
            progress.map(p=><div key={p.id} className='w-full mb-4 bg-white p-4 rounded-sm'>
                <p className='text-md font-semibold mb-3'>{p.title}</p>
                <button onClick={()=>handleResolve(p)} className='btn bg-green-700 w-full rounded-sm text-white font-semibold'>Complete</button>
            </div>)
             
            : <p className='text-lg text-slate-500'>Select a ticket to add to Task Status</p>
          }
           
         </div>
         <div>
            <h3 className='font-semibold text-2xl mb-3'>Resolved Task</h3>
            {
            resolve.length>0  ?  
            resolve.map(r=><div key={r.id} className='w-full mb-4 bg-[#E0E7FF] p-4 rounded-sm'>
                <p className='text-md font-semibold mb-3'>{r.title}</p>
                
            </div>)
             
            : <p className='text-lg text-slate-500'>No resolved tasks yet.</p>
          }
           
         </div>
        </div>
    );
};

export default StatusSection;