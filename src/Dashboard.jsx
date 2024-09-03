import React from 'react'
import ProfileCard from './components/ProfileCard'
import TaskCard from './components/TaskCard'
import RankingCard from './components/RankingCard'
import RecentlySolvedCard from './components/RecentlySolved'
import { Calendar } from './components/ui/calendar'

export function Dashboard() {

  //const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <div className="bg-grad p-8">
      <div className="md:flex flex-col md:flex-row gap-6">
        <div className='md:w-4/6'>
          <ProfileCard className="px-12" />
        </div>
        <div className='md:w-2/6'>
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

      <div className='flex w-full md:flex-nowrap flex-wrap-reverse pt-6 justify-between'>
        <div className='flex flex-wrap w-fi gap-6 bg-we'>
          <div className='md:w  '>
            <TaskCard assigned="22PC19" title="Task - 1" completed={3} total={15} />
          </div>
          <div className='md: '>
            <TaskCard assigned="22PC19" title="Task - 2" completed={3} total={15} />
          </div>
          <div className='md:  '>
            <TaskCard assigned="22PC19" title="Task - 2" completed={3} total={15} />
          </div>
          <div className='md:'>
            <TaskCard assigned="22PC19" title="Task - 2" completed={3} total={15} />
          </div>
          <div className='md: '>
            <TaskCard assigned="22PC19" title="Task - 2" completed={3} total={15} />
          </div>
        </div>
        <div className=' '>
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
