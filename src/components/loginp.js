import { motion } from 'framer-motion';
import Login from './Login';
import { BackgroundBeams } from '../ui/background-beams';
import myGif from '../images/0001-0240-unscreen.gif';
import Glober from './Glober';



function Loginp() {
    
    return (
        <>
            <div className = "bg-neutral-900 flex min-h-screen h-full">
            <BackgroundBeams />
            
            

            <div className = "w-1/2 flex flex-col items-start ">
            {/* <img className = "-mt-20 -mb-8"src={myGif} alt="Description of GIF" /> */}
            {/* <Glober /> */}
            <div className = "w-full text-white flex justify-center h-4/5">
            <Glober />
            </div>
            <div className="w-full text-center text-5xl font-bold  text-yellow-400 ">FEMISPHERE</div>
            
            </div>
            <div className = "w-1/2 flex items-center justify-center ">
            <div className = "p-3 z-50">
            <Login />
            </div>
            
            
            </div>
            
            
            </div>
        </>
        
    );
}

export default Loginp;
