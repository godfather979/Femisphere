function Meditation() {
    return (
      <div className="w-[300px] bg-gradient-to-b from-[#b3a6e6] to-[#f0e1ff] rounded-2xl shadow-lg p-4 flex flex-col">
        {/* Title */}
        <h2 className="text-lg font-semibold text-[#202125]">Meditation</h2>
  
        {/* Image */}
        <div className="flex justify-center mt-2">
          <img
            src="path_to_your_image" // replace with the actual path or URL of your image
            alt="Meditation"
            className="w-[150px] h-[150px] object-contain"
          />
        </div>
  
        {/* Description */}
        <div className="mt-4">
          <p className="text-sm text-[#4b4b4b]">Good vibes, good life</p>
          <p className="text-sm text-[#8f8f8f]">Positive thinking | 27min</p>
        </div>
  
        {/* Play Button */}
        <div className="mt-auto flex justify-center">
          <button className="bg-white rounded-full p-2 shadow-md">
            <span className="text-[#202125]">▶</span>
          </button>
        </div>
      </div>
    );
  }
  
  export default Meditation;
  