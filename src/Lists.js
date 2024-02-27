import React, { useEffect, useState } from 'react';

function Lists() {
  const [list, setList] = useState([]);

  const fetchdata = async () => {
    try {
      const response = await fetch('https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json');
      const jsonData = await response.json();
      setList(jsonData.appointments);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="m-5 border border-gray-300 p-4 rounded-3xl ">
      <div className="w-full">
        <h1 className="text-2xl text-slate-600 m-4">Today's Appointment List</h1>

        <div className="md:flex bg-slate-200 rounded-t-xl p-2">
          <div className="flex-1 m-3 text-sm font-bold text-slate-500">PATIENTS</div>
          <div className="flex-1 m-3 ml-7 text-sm font-bold text-slate-500 hidden md:block">DATE</div>
          <div className="flex-1 m-3 text-sm font-bold text-slate-500 hidden md:block">TIME</div>
          <div className="flex-1 m-3 text-sm font-bold text-slate-500 hidden md:block">DOCTOR</div>
          <div className="flex-1 m-3 text-sm font-bold text-slate-500 hidden md:block">INJURY</div>
          <div className="flex-1 m-3 text-sm font-bold text-slate-500 hidden md:block">ACTION</div>
        </div>

        {list.map((item, index) => (
          <div key={index} className="flex md:flex-row flex-col bg-white rounded-md border-b">
            <div className="flex-1 p-2 flex items-center">
              <i className="fa fa-user  text-cyan-500 mr-2 bg-slate-100 p-4 rounded-full" aria-hidden="true"></i>
              <div>
                <div className="font-bold text-lg">{item.patient_name}</div>
                <div className="text-base text-slate-500">{item.mobile_number}</div>
              </div>
            </div>
            <div className="flex-1 p-2 text-gray-500 flex  items-center">
              <i className="fa fa-calendar mr-2" aria-hidden="true"></i>
              {item.appointment_date}
            </div>
            <div className="flex-1 p-2 text-gray-500 flex  items-center">
              <i className="fa fa-clock-o mr-2" aria-hidden="true"></i>
              {item.appointment_time}
            </div>
            <div className="flex-1 p-2 text-gray-600 flex  items-center">
              <i className={`fa fa-star ${index === 3 || index === 4 ? 'text-orange-500 ' : 'text-green-600'} text-lg mr-2`} aria-hidden="true"></i>
              {item.doctor}
            </div>
            <div className="flex-1 p-2 flex items-center">
              <span className='bg-slate-300 p-2 rounded-md text-base'>{item.injury}</span>
            </div>
            <div className="flex-1 p-2 flex  items-center cursor-pointer">
              <i className="fa fa-ellipsis-v text-slate-500" aria-hidden="true"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lists;
