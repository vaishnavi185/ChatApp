import React from 'react';
import Nav from './Nav.jsx';

export default function ChatScreen() {
  return (
    <div className='bg-[#d7dad9] bg-cover min-h-screen flex justify-center items-center'>
      <div className="grid grid-flow-col grid-rows-3 gap-4 w-full max-w-[1400px] h-[90vh] sm:h-[750px] bg-[#ffffff] rounded-2xl p-4">
        <div className="row-span-3 ...">
          <div className="flex flex-col ...">
            <div className='w-[500px] h-[55px] bg-[#def2fa] rounded-2xl'>
              <Nav />
            </div>
            <div>02</div>
            <div>03</div>
          </div>
        </div>
        <div className="col-span-2 row-span-2 ...">03</div>
      </div>
    </div>
  );
}
