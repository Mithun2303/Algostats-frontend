import React, { useEffect, useState } from 'react'
import ProfileCard from './components/ProfileCard'
import TaskCard from './components/TaskCard'
import RankingCard from './components/RankingCard'
import RecentlySolvedCard from './components/RecentlySolved'
import { Calendar } from './components/ui/calendar'
import axios from 'axios'
import Lottie from "lottie-react";
import loader from "@/assets/loader.json"
import { useParams } from 'react-router-dom'
export function Dashboard({userId}) {
  const {id} = useParams();
  const [isLoading,setIsLoading] = useState(true);
  const [userDetails, setUserDetails] = useState({});
  const [recentlySolved,setRecentlySolved] = useState(null);
  const getUserDetails = async (jwt) => {
    const response = await axios.get(import.meta.env.VITE_API_URL + `api/user/${id}`,)
    setUserDetails(response.data);
    console.log(response.data);
    return true
  }

  useEffect(()=>{
    setUserDetails(null);
    setRecentlySolved(null);
  },[id])

  const getRecentlySolved = async (jwt) => {
    const response = await axios
    .post(import.meta.env.VITE_API_URL + 'api/user/problem/8',
      {
        id:userDetails.id
      })
    setRecentlySolved(response.data);
    console.log(response.data);
    return true
  }

  const apiCalls = async(jwt) =>{
    const response = await Promise.all([
      getRecentlySolved(jwt),
      getUserDetails(jwt)
    ]);
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }
  useEffect(() => {
    const jwt = localStorage.getItem(import.meta.env.VITE_JWT_HASH);
    if (jwt) {
      // Promise.all([
      //   getRecentlySolved
      // ])
      apiCalls(jwt);
      
    }
  }, [id])

  
  //const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    isLoading==true ? 
    <main className='h-screen w-screen bg-[rgb(242,242,242)] flex justify-center items-center'>
      <Lottie animationData={loader} className=''/>
    </main>:
    <div className="bg-grd md:p-8">
      <div className="md:flex flex-col md:flex-row gap-4">
        <div className='md:w-2/3'>
          <ProfileCard className="" userDetails={userDetails} />
        </div>
        <div className='md:w-1/3'>
          {recentlySolved!=null && <RecentlySolvedCard className="px-12" recentlySolved={recentlySolved} />}
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
