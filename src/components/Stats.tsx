function Stats({ title, icon, value, total, description, hasBorder }) {
  return (
    <div className={`flex flex-col w-1/3 ${ hasBorder ? 'border-r-2 border-gray-500' : ""} pr-5`}>
      <div className="text-2xl text-lightBlue font-bold pl-10 mb-4">
        {title}
      </div>
      <div className="flex items-baseline ml-10 text-5xl font-bold">
        <div className="mr-4 text-4xl">{icon}</div>
        <span>{value}</span>
        <span className="text-2xl ml-1">/{total}</span>
      </div>
      <div className="text-sm text-gray-400 mt-2 pl-10">{description}</div>
    </div>
  );
}

export default Stats;
