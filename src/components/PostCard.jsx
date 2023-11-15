import React from 'react';

const PostCard = () =>
{
  return (
    <div className="w-80 bg-white shadow rounded-lg overflow-hidden mt-20 ml-20">

      <div
        className="h-48 w-full bg-gray-200 flex flex-col  p-4 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')" }}
      >
        <div className="flex justify-between">
          <h2 className='text-white'>test</h2>
          <button >
            <svg
              fill='#ffff' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" /></svg>
          </button>

        </div>
        <p className='text-xs text-white'>3 hours ago</p>
      </div>

      <div className="p-4 flex flex-col ">
        <p className="text-gray-800 font-light text-2xs ">
          #test
        </p>
        <p className="text-gray-800 mt-7 text-2xl  ">test</p>
        <p className="text-gray-400	 mt-7">test</p>



        <div className="flex justify-between w-full mt-4">
          <button>
            <div className="flex items-center text-gray-500">
              <svg fill='#3F42F1' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" /></svg>
              <p className='text-indigo-500'>LIKE 0</p>
            </div>
          </button>



          <div>
            <button
              className="py-1 px-4 bg-white text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center">
              <svg fill='#3F42F1' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
              <p className='text-indigo-500'>DELETE</p>
            </button>
          </div>


        </div>
      </div>
    </div>
  );
};

export default PostCard;
