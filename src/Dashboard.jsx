import React from 'react'
import ProfileCard from './components/ProfileCard'
import TaskCard from './components/TaskCard'
import RankingCard from './components/RankingCard'
import RecentlySolvedCard from './components/RecentlySolved'
import { Calendar } from './components/ui/calendar'

export function Dashboard() {

  //const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <div className="bg-grad md:p-8">
      <div className="md:flex flex-col md:flex-row gap-4">
        <div className='md:w-2/3'>
          <ProfileCard className="" />
        </div>
        <div className='md:w-1/3'>
          <RecentlySolvedCard className="px-12" />
        </div>
      </div>
      {/* <div className="md:flex flex-col md:flex-row gap-6 mt-9">
        <div className="">
          <TaskCard assigned="22PC19" title="Task - 1" completed={3} total={15} />
        </div>
        <div className="">
          <TaskCard assigned="22PC19" title="Task - 2" completed={3} total={15} />
        </div>
      </div>
      <div className="md:flex flex-col md:flex-row gap-6 mt-9">
        <div className='md:w-'>
          <RankingCard type="Weekly" classRank={15} batchRank={35} overallRank={125} />
        </div>
        <div className='md:w-[32'>
          <RankingCard type="Monthly" classRank={15} batchRank={35} overallRank={125} />
        </div>

        <div>
          <Calendar className="rounded-md border text-white" />
        </div> */}

      <div className='flex w-full md:flex-nowrap gap-0 flex-wrap-reverse pt-3 justify-between'>
        <div className='flex md:w-3/4 flex-wrap  justify-start  bg-hite'>
          <div className='md:w-1/3 w-full p-2 '>
            <TaskCard assigned="22PC19" title="Task - 1" completed={3} total={15} />
          </div>
          <div className='md:w-1/3 w-full p-2 '>
            <TaskCard assigned="22PC19" title="Task - 2" completed={3} total={15} />
          </div>
          <div className='md:w-1/3 w-full p-2 '>
            <TaskCard assigned="22PC19" title="Task - 2" completed={3} total={15} />
          </div>
          <div className='md:w-1/3 w-full p-2'>
            <TaskCard assigned="22PC19" title="Task - 2" completed={3} total={15} />
          </div>
          <div className='md:w-1/3 w-full p-2 '>
            <TaskCard assigned="22PC19" title="Task - 2" completed={3} total={15} />
          </div>
        </div>
        <div className='md:w-1/4 p-2 w-full'>
          <Calendar className="rounded-md  flex justify-center w-full p-12 text-white  bg-glassbg" />
        </div>
      </div>



      {/* <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border" /> */}

    {/* </div> */}

    </div >
  )
}
