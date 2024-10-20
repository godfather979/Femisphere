function Habit() {
    return (
      <div className="w-[400px] bg-gradient-to-b from-[#f8f8fc] to-[#e2e2e2] rounded-2xl shadow-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-[#202125]">Habit tracker</h2>
          <div className="flex space-x-2">
            <button className="text-[#a78bfa]">Habits</button>
            <button className="text-[#8f8f8f]">Tasks</button>
          </div>
        </div>
  
        {/* Habit Items */}
        <div className="mt-4 space-y-4">
          {/* Habit 1 */}
          <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-[#f4e1ff] rounded-full">
                <span className="text-xl text-[#7e22ce]">🏃‍♂️</span>
              </div>
              <div>
                <h3 className="font-medium text-[#202125]">Morning run</h3>
                <p className="text-sm text-[#8f8f8f]">07:00 am &bull; Park &bull; 45min</p>
              </div>
            </div>
            <input type="checkbox" className="text-[#7e22ce]" />
          </div>
  
          {/* Habit 2 */}
          <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-[#cce4ff] rounded-full">
                <span className="text-xl text-[#007bff]">💧</span>
              </div>
              <div>
                <h3 className="font-medium text-[#202125]">1.5L of water daily</h3>
                <p className="text-sm text-[#8f8f8f]">All day &bull; Park</p>
              </div>
            </div>
            <input type="checkbox" className="text-[#007bff]" />
          </div>
  
          {/* Habit 3 */}
          <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-[#fff3cd] rounded-full">
                <span className="text-xl text-[#856404]">🍳</span>
              </div>
              <div>
                <h3 className="font-medium text-[#202125]">Cooking meal preps for 3 days</h3>
                <p className="text-sm text-[#8f8f8f]">11:00 am &bull; Home &bull; 2h</p>
              </div>
            </div>
            <input type="checkbox" className="text-[#856404]" />
          </div>
        </div>
      </div>
    );
  }
  
  export default Habit;
  