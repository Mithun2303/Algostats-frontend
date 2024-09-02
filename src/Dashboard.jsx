import React from 'react'
import ProfileCard from './components/ProfileCard'
import TaskCard from './components/TaskCard'
import RankingCard from './components/RankingCard'
import RecentlySolvedCard from './components/RecentlySolved'

export const Dashboard = () => {
  return (
    <div className="bg-black p-8">
    <div className="md:flex flex-col md:flex-row gap-6">
      <div className='md:w-4/6 col-span-3 '>
        <ProfileCard />
      </div>
      <div className='md:w-2/6 '>
      <RecentlySolvedCard />
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-9">
      <div className="col-span-2 grid grid-cols-2 gap-4">
        <TaskCard title="Task - 1" completed={3} total={15} />
        <TaskCard title="Task - 2" completed={3} total={15} />
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      <RankingCard type="Weekly" classRank={15} batchRank={35} overallRank={125} />
      <RankingCard type="Monthly" classRank={15} batchRank={35} overallRank={125} />
    </div>
  </div>
  )
}
