import React from 'react'
import ProfileCard from './components/ProfileCard'
import TaskCard from './components/TaskCard'
import RankingCard from './components/RankingCard'
import RecentlySolvedCard from './components/RecentlySolved'
import { Calendar } from './components/ui/calendar'

export function Dashboard() {

  //const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
      <div className="bg-black p-8">
      <div className="md:flex flex-col md:flex-row gap-6">
        <div className='md:w-4/6 '>
          <ProfileCard />
        </div>
        
        <div className='md:w-2/6'>
        <RecentlySolvedCard />
        </div>
      </div>
      <div className="md:flex flex-col md:flex-row gap-6 mt-9">
        <div className="md:w-[32%] gap-3">
          <TaskCard assigned="22PC19" title="Task - 1" completed={3} total={15} />
        </div>
        <div className="md:w-[32%] gap-3">
        <TaskCard assigned="22PC19" title="Task - 2" completed={3} total={15} />
        </div>
      </div>
      <div className="md:flex flex-col md:flex-row gap-6 mt-9">
        <div className='md:w-[32%]'>
        <RankingCard type="Weekly" classRank={15} batchRank={35} overallRank={125} />
        </div>
        <div className='md:w-[32%]'>
        <RankingCard type="Monthly" classRank={15} batchRank={35} overallRank={125} />
        </div>

        <div>
      <Calendar className="rounded-md border text-white" />
    </div>
    

        
        {/* <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border" /> */}
        
      </div>
      
    </div>
  )
}
