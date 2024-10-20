import { motion } from 'framer-motion';
import Login from './Login';
import { BackgroundBeams } from '../ui/background-beams';



function Loginp() {
    
    return (
        <>
            <div className = "bg-neutral-900">
            <Login />
            <BackgroundBeams />
            </div>
        </>
        
    );
}

export default Loginp;
