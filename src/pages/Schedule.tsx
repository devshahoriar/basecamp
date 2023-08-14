/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import WithChildBoard from '../components/shared/WithChildBoard'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useState } from 'react'
import ModelBase from '../components/shared/ModelBase'
import { AiOutlineClose } from 'react-icons/ai'
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from 'react-date-range';
import 'rc-time-picker/assets/index.css';
import TimePicker from 'rc-time-picker';

import moment from 'moment';

const now = moment().hour(0).minute(0);

const format = 'h:mm a';

const Schedule = () => {
  const [showModel, setShowModel] = useState(false)
  const [deletePromt, setDeletePromt] = useState(false)
  const [deleteId, setDeleteId] = useState('' as string)
  const [state, setState] = useState<any>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);


  function onChange(value : any) {
    console.log(value && value.format(format));
  }


  return (
    <main>
      <div className="container mt-5">
        <WithChildBoard isMenu={false}>
          <h1 className="text-center text-2xl mb-4">Schudule</h1>
          <div className='flex justify-center'>
            <div className='max-w-[500px] flex-1'>
              <FullCalendar
                eventClick={(info) => {
                  setDeleteId(info.event.id)
                  setDeletePromt(true)
                }}
                customButtons={{
                  addEvent: {
                    text: 'Add Event',
                    click: () => {
                      setShowModel(p => !p)
                    }
                  }
                }}
                headerToolbar={{
                  right: 'prev,next addEvent',
                }}
                events={[{
                  id: 'a',
                  title: 'The Title',
                  start: '2023-08-01',
                  end: '2023-08-03',
                },{
                  id: 'ad',
                  title: 'The Title',
                  start: '2023-08-01',
                  end: '2023-08-02',
                }]} contentHeight={450} plugins={[dayGridPlugin]} />
            </div>
            {showModel && <ModelBase set={setShowModel}>
              <div className='bg-slate-300 dark:bg-slate-800 w-full md:w-[600px] relative rounded-lg shadow-xl mx-0 scale-90 md:scale-100 md:mx-3'>
                <button onClick={() => setShowModel(false)} className='btn btn-sm md:btn-md absolute right-3 top-3'>
                  <AiOutlineClose />
                </button>
                <div className='p-5 pt-10 flex flex-col justify-between h-full items-start'>
                  <div className='flex justify-center w-full flex-col items-center '>
                    <h1 className='text-base md:text-xl'>Select your schudule date time:</h1>
                    <TimePicker
                      showSecond={false}
                      defaultValue={now}
                      className="time-picker"
                      onChange={onChange}
                      format={format}
                      use12Hours
                      inputReadOnly
                    
                    />
                    <DateRange editableDateInputs={true}
                      className='mt-4'
                      onChange={item => setState([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={state} />
                    <input type="text" placeholder="Event Title" className="input input-bordered md:w-[60%] w-full focus:outline-none mt-4 px-2" />
                  </div>
                  <div className='flex justify-center items-center w-full'>
                  <button className='btn mt-5'>Add Event</button>
                  </div>
                </div>
              </div>
            </ModelBase>}

            {deletePromt && <ModelBase set={setDeletePromt}>
              <div className='bg-slate-300 dark:bg-slate-800 w-full md:w-[600px] relative rounded-lg shadow-xl mx-3 py-2'>
                <button onClick={() => {
                  setDeleteId('')
                  setDeletePromt(false)
                }} className='btn absolute right-3 top-3'>
                  <AiOutlineClose />
                </button>
                <div className='m-5 mt-10 flex flex-col justify-between h-full items-start'>
                  <h1 className='text-xl md:text-2xl'>Do you want to delete?</h1>
                  <button className='btn mt-10'>Delete</button>
                </div>
              </div>
            </ModelBase>}


          </div>
        </WithChildBoard>
      </div>
    </main>
  )
}

export default Schedule
