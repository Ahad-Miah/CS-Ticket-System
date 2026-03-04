import React from 'react';

const StatusSection = ({progress}) => {
    return (
        <div className=' h-96 px-3 py-6 *:mb-10'>
         <div>
            <h3 className='font-semibold text-2xl mb-3'>Task status</h3>
          {
            progress.length>0  ?  
            progress.map(p=><div className='w-full bg-white p-4 rounded-sm'>
                <p className='text-md font-semibold mb-3'>{p.title}</p>
                <button className='btn bg-green-700 w-full rounded-sm text-white font-semibold'>Complete</button>
            </div>)
             
            : <p className='text-lg text-slate-500'>Select a ticket to add to Task Status</p>
          }
           
         </div>
         <div>
            <h3 className='font-semibold text-2xl mb-3'>Resolved Task</h3>
            <p className='text-lg text-slate-500'>No resolved tasks yet.</p>
         </div>
        </div>
    );
};

export default StatusSection;