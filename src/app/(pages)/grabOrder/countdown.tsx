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
              colors={[ 
                ['#004777', 0.33], // warna untuk jam
              ]} 
              size={50} // ukuran lingkaran
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
              colors={[ 
                ['#F7B801', 0.33], // warna untuk menit
              ]} 
              size={50} // ukuran lingkaran
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
              colors={[ 
                ['#A30000', 0.33], // warna untuk detik
              ]} 
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