import HeatMap from "@uiw/react-heat-map";
import attendancePng from "@/assets/Images/attendance.png";
export const Heatmap = () => {
  const value = [
    { date: "2025/01/11", count: 2 },
    { date: "2025/01/12", count: 20 },
    { date: "2025/01/13", count: 10 },
    ...[...Array(17)].map((_, idx) => ({
      date: `2025/02/${idx + 10}`,
      count: idx,
      content: "",
    })),
    { date: "2025/04/11", count: 2 },
    { date: "2025/05/01", count: 5 },
    { date: "2025/05/02", count: 5 },
    { date: "2025/05/04", count: 11 },
  ];
  return (
    <div
      className="flex flex-col p-10 items-center justify-center gap-y-2
        overflow-auto"
    >
      <div className="w-full flex justify-start">
        <img src={attendancePng} alt="" className="w-[35px]" />
        <span className="text-2xl  font-bold text-primary">Attendance</span>
      </div>
      <HeatMap
        value={value}
        weekLabels={["", "Mon", "", "Wed", "", "Fri", ""]}
        className="w-full h-full"
        startDate={
          new Date(new Date().setFullYear(new Date().getFullYear() - 1))
        }
        endDate={new Date()}
      />
    </div>
  );
};
