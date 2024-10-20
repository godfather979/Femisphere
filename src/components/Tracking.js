import { motion } from 'framer-motion';
import RealTimeLocation from './RealTimeLocation';
import RealTimeRouteMap from './RealTimeRouteMap';
import Background from './Background';
import { BackgroundBeams } from '../ui/background-beams';


function Tracking() {
    
    return (
        <>  
            {/* <Background /> */}
            {/* <RealTimeLocation /> */}
            <div className = "bg-neutral-900 min-h-screen">
                
                <div className = "flex justify-between pt-5 p-3">
                <div className = "flex justify-between pt-5 p-3 text-white text-poppins">Emergency Contacts</div>
                <h1 className = "text-white text-3xl ">Have a safe journey</h1>
                <button className="ml-4 bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-200">
                        SOS
                    </button>
                </div>
            <div className = "flex justify-center">
                <div className = "mt-3 w-3/4 h-3/4 z-0" >
                {/* <RealTimeRouteMap /> */}
                <RealTimeLocation />
                </div>
            {/* <BackgroundBeams /> */}
            </div>
            </div>
            
        </>
        
    );
}

export default Tracking;
