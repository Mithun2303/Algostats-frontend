import Stats from "@/components/Stats";
import Profile from "@/components/ui/Profile";
import Leaderboard from "@/components/Leaderboard";
import { Calendar } from "@/components/ui/calendar";
import React from "react";
import { FaClock, FaCalendarAlt, FaMedal } from "react-icons/fa";

const problems = [
  { title: "Two Sum", difficulty: "Easy" },
  { title: "Add Two Numbers", difficulty: "Hard" },
  { title: "Reverse Integer", difficulty: "Medium" },
  { title: "Insert Interval", difficulty: "Medium" },
  { title: "Is Subsequence", difficulty: "Easy" },
  { title: "Two Sum", difficulty: "Easy" },
  { title: "Add Two Numbers", difficulty: "Hard" },
];
const name = "Morty";
const course = "MSc CyberSecurity";
const rollNumber = "22PC01";
const role = "Student";

const cardData = [
  {
    title: "Attendance",
    icon: <FaClock />,
    value: "89",
    total: "89",
    description: "Great, you always attending class, keep it up!",
  },
  {
    title: "Task",
    icon: <FaCalendarAlt />,
    value: "10",
    total: "20",
    description: "Don't forget to turn in your task",
  },
  {
    title: "Rank",
    icon: <FaMedal />,
    value: "1",
    total: "160",
    description: "Top 10 students in campus",
  },
];

function Dashboard() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <body className="bg-black w-screen">
      <div className="flex">
        <div className="flex">
          <div className="flex flex-col">
            <div className="mt-8 ml-10">
              <Profile
                name={name}
                course={course}
                rollNumber={rollNumber}
                role={role}
                problems={problems}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mt-8 ml-3">
              <div className="flex justify-center items-center p-2 bg-blueGrey w-[1050px] h-[180px] rounded-xl shadow-lg text-white ml-2">
                {cardData.map((card, index) => (
                  <Stats
                    key={index}
                    title={card.title}
                    icon={card.icon}
                    value={card.value}
                    total={card.total}
                    description={card.description}
                    hasBorder={index !== cardData.length - 1}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-row">
              <div className="">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="flex items-center justify-center text-white rounded-xl bg-blueGrey max-w-[270px] ml-5 mt-3"
                />
              </div>
              <div className="">
                <div className="bg-blueGrey w-[790px] h-[285px] rounded-xl ml-3 mt-3">
                  <div>Performance</div>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
        
      </div>
      <div>
        <Leaderboard />
      </div>
    </body>
  );
}

export default Dashboard;
