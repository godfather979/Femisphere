import { motion } from 'framer-motion';
import Activity from './Activity';


function WellnessCard() {
  return (

    <>
    <div className="h-screen bg-blue-500 flex justify-center items-center space-x-8">
      {/* First Card - Calories */}
      <div className="w-[731px] h-[329px] relative bg-gradient-to-b from-white to-[#e0e0e0] rounded-2xl shadow-lg">
        {/* Title */}
        <div className="left-[20px] top-[20px] absolute text-[#202125] text-2xl font-medium font-['Chillax'] leading-[30px]">
          Calories
        </div>

        {/* Calorie Numbers */}
        <div class="h-[222px] flex-col justify-between items-start inline-flex">
    <div class="text-[#8f8f8f] text-sm font-normal font-['Chillax'] leading-[21px]">2000</div>
    <div class="text-[#8f8f8f] text-sm font-normal font-['Chillax'] leading-[21px]">1000</div>
    <div class="text-[#8f8f8f] text-sm font-normal font-['Chillax'] leading-[21px]">500</div>
    <div class="text-[#8f8f8f] text-sm font-normal font-['Chillax'] leading-[21px]">100</div>
    <div class="text-[#8f8f8f] text-sm font-normal font-['Chillax'] leading-[21px]">0</div>
</div>

        {/* Bars and Month Labels */}
        <div className="w-[633px] h-[233px] left-[78px] top-[76px] absolute justify-between items-end inline-flex">
        <div class="w-[633px] h-[233px] justify-between items-end inline-flex ">
    <div class="w-[634px] h-[0px] border border-[#8f8f8f]"></div>
    <div class="h-[172px] flex-col justify-start items-center gap-3 inline-flex px-3">
        <div class="w-8 grow shrink basis-0 bg-gradient-to-b from-[#feecba] to-[#ffbb00] rounded-[18px]"></div>
        <div class="text-[#202125] text-base font-normal font-['Chillax'] leading-normal">Jan</div>
    </div>
    <div class="h-[127px] flex-col justify-start items-center gap-3 inline-flex px-3">
        <div class="w-8 grow shrink basis-0 bg-gradient-to-b from-[#fee6a7] to-[#fec012] rounded-[18px]"></div>
        <div class="text-[#202125] text-base font-normal font-['Chillax'] leading-normal">Feb</div>
    </div>
    <div class="h-[189px] flex-col justify-start items-center gap-3 inline-flex px-3">
        <div class="w-8 grow shrink basis-0 bg-gradient-to-b from-[#fee7a9] to-[#fec526] rounded-[18px]"></div>
        <div class="text-[#202125] text-base font-normal font-['Chillax'] leading-normal">Mar</div>
    </div>
    <div class="h-[156px] flex-col justify-start items-center gap-3 inline-flex px-3">
        <div class="w-8 grow shrink basis-0 bg-gradient-to-b from-[#fee5a0] to-[#fec62b] rounded-[18px]"></div>
        <div class="text-[#202125] text-base font-normal font-['Chillax'] leading-normal">Apr</div>
    </div>
    <div class="h-[127px] flex-col justify-start items-center gap-3 inline-flex px-3">
        <div class="w-8 grow shrink basis-0 bg-gradient-to-b from-[#fee5a0] to-[#fec62b] rounded-[18px]"></div>
        <div class="text-[#202125] text-base font-normal font-['Chillax'] leading-normal">May</div>
    </div>
    <div class="h-[172px] flex-col justify-start items-center gap-3 inline-flex px-3">
        <div class="w-8 grow shrink basis-0 bg-gradient-to-b from-[#fee5a0] to-[#fec62b] rounded-[18px]"></div>
        <div class="text-[#202125] text-base font-normal font-['Chillax'] leading-normal">Jun</div>
    </div>
    <div class="h-[189px] flex-col justify-start items-center gap-3 inline-flex px-3">
        <div class="w-8 grow shrink basis-0 bg-gradient-to-b from-[#fee5a0] to-[#fec62b] rounded-[18px]"></div>
        <div class="text-[#202125] text-base font-normal font-['Chillax'] leading-normal">Jul</div>
    </div>
    <div class="h-[233px] flex-col justify-start items-center gap-3 inline-flex px-3">
        <div class="w-8 grow shrink basis-0 bg-gradient-to-b from-[#fee192] to-[#fec834] rounded-[18px]"></div>
        <div class="text-[#202125] text-base font-normal font-['Chillax'] leading-normal">Sep</div>
    </div>
    <div class="h-[156px] flex-col justify-start items-center gap-3 inline-flex px-3">
        <div class="w-8 grow shrink basis-0 bg-gradient-to-b from-[#fee5a0] to-[#fec62b] rounded-[18px]"></div>
        <div class="text-[#202125] text-base font-normal font-['Chillax'] leading-normal">Aug</div>
    </div>
    <div class="h-[197px] flex-col justify-start items-center gap-3 inline-flex px-3">
        <div class="w-8 grow shrink basis-0 bg-gradient-to-b from-[#0c25af] to-[#7584d7] rounded-[18px]"></div>
        <div class="text-[#202125] text-base font-semibold font-['Chillax'] leading-normal">Oct</div>
    </div>
    <div class="h-[122px] flex-col justify-start items-center gap-3 inline-flex px-3">
        <div class="w-8 grow shrink basis-0 bg-gradient-to-b from-[#fee5a0] to-[#fec62b] rounded-[18px]"></div>
        <div class="text-[#202125] text-base font-normal font-['Chillax'] leading-normal">Nov</div>
    </div>
    <div class="h-[156px] flex-col justify-end items-center gap-3 inline-flex px-3">
        <div class="w-8 grow shrink basis-0 bg-gradient-to-b from-[#fee5a0] to-[#fec62b] rounded-[18px]"></div>
        <div class="text-[#202125] text-base font-normal font-['Chillax'] leading-normal">Dec</div>
    </div>

    {[
            { height: "172px", month: "Jan", from: "#feecba", to: "#ffbb00" },
            { height: "127px", month: "Feb", from: "#fee6a7", to: "#fec012" },
            { height: "189px", month: "Mar", from: "#fee7a9", to: "#fec526" },
            { height: "156px", month: "Apr", from: "#fee5a0", to: "#fec62b" },
            { height: "127px", month: "May", from: "#fee5a0", to: "#fec62b" },
            { height: "172px", month: "Jun", from: "#fee5a0", to: "#fec62b" },
            { height: "189px", month: "Jul", from: "#fee5a0", to: "#fec62b" },
            { height: "233px", month: "Sep", from: "#fee192", to: "#fec834" },
            { height: "156px", month: "Aug", from: "#fee5a0", to: "#fec62b" },
            { height: "197px", month: "Oct", from: "#0c25af", to: "#7584d7" },
            { height: "122px", month: "Nov", from: "#fee5a0", to: "#fec62b" },
            { height: "156px", month: "Dec", from: "#fee5a0", to: "#fec62b" },
          ].map((bar, index) => (
            <div
              key={index}
              className="flex-col justify-start items-center gap-3 inline-flex"
            >
              <motion.div
                className="w-8 grow shrink basis-0 rounded-[18px]"
                style={{
                  height: bar.height,
                  background: `linear-gradient(to bottom, ${bar.from}, ${bar.to})`,
                }}
                initial={{ height: 0 }}
                animate={{ height: bar.height }}
                transition={{ duration: 1 }}
              />
              
            </div>
          ))}
</div>
          
        </div>

        {/* Month Selection */}
        <div className="h-8 px-3 left-[610px] top-[20px] absolute bg-[#efecfe] rounded-2xl justify-end items-center gap-2 inline-flex">
          <div className="text-[#202125] text-base font-normal font-['Chillax'] leading-normal">
            Month
          </div>
          <div className="w-4 h-4 relative bg-white rounded-full"></div>
        </div>
      </div>


      
      
      

       
      </div>
          <Activity />
      </>
    
  );
}

export default WellnessCard;
