"use client";
import { CountdownCircleTimer } from 
	'react-countdown-circle-timer'

    export default function countdown() {
        const duration = 300; // Durasi 1 jam (3600 detik)

        return (

            <div className="flex justify-between">
            <div className="text-center flex flex-col items-center"style={{ margin: '0 5px' }}>
            <CountdownCircleTimer 
              isPlaying 
              duration={duration}
              colors={['#004777', '#F7B801', '#A30000', '#A30000']}
              colorsTime={[7, 5, 2, 0]}
              size={50}  
            > 
              {({ remainingTime }) => {
                const hours = Math.floor(remainingTime / 3600);
                return (
                  <div className="text-sm">
                    {hours < 10 ? `0${hours}` : hours}
                  </div>
                  
                );
              }} 
            </CountdownCircleTimer> 
</div>
            {/* Menit */}
            <CountdownCircleTimer 
              isPlaying 
              duration={duration}
              colors={['#004777', '#F7B801', '#A30000', '#A30000']}
              colorsTime={[7, 5, 2, 0]}
              size={50}  
            > 
              {({ remainingTime }) => {
                const minutes = Math.floor(remainingTime / 60);
                return (
                  <div className="text-sm">
                    {minutes < 10 ? `0${minutes}` : minutes}
                  </div>
                );
              }} 
            </CountdownCircleTimer> 

            {/* Detik */}
            <CountdownCircleTimer 
              isPlaying 
              duration={duration}
              colors={['#004777', '#F7B801', '#A30000', '#A30000']}
              colorsTime={[7, 5, 2, 0]}
              size={50} // ukuran lingkaran
            > 
              {({ remainingTime }) => {
                const seconds = remainingTime % 60;
                return (
                  <div className="text-sm">
                    {seconds < 10 ? `0${seconds}` : seconds}
                  </div>
                );
              }} 
            </CountdownCircleTimer> 

</div>
);
}