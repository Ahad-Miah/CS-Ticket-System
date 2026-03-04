import React from 'react';

const StatusSection = () => {
    return (
        <div className=' h-96 px-3 py-6 *:mb-10'>
         <div>
            <h3 className='font-semibold text-2xl mb-3'>Task status</h3>
            <p className='text-lg text-slate-500'>Select a ticket to add to Task Status</p>
         </div>
         <div>
            <h3 className='font-semibold text-2xl mb-3'>Resolved Task</h3>
            <p className='text-lg text-slate-500'>No resolved tasks yet.</p>
         </div>
        </div>
    );
};

export default StatusSection;