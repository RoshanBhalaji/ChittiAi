import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';

const Header = () => {
  const handleButtonClick = () => {
    toast('Integrating the Gemini AI, developed by Roshan 💻', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce
    });
    speak('Welcome to Chitti AI! Integrating the Gemini AI, developed by Roshan.'); // Speak the message
  };

  const speak = (message) => {
    const speech = new SpeechSynthesisUtterance(message);
    speech.lang = 'en-IN';  // Set language (optional)
    window.speechSynthesis.speak(speech);
  };
  const handleRobotClick = () => {
    speak('Hello! I am Chitti AI.'); // Speak when the robot emoji is clicked
  };

  useEffect(() => {
    speak('Welcome to Chitti AI!'); // Speak when the component mounts
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="flex justify-between items-center p-3 bg-gray-900 sticky top-0 z-50">
      <h1 className="font-pops text-5xl text-white tracking-wide sm:align-middle typewriter1">
  Explore Chitti AI 
 <button onClick={handleRobotClick}><span className='inline-block hover:scale-110 transition-transform duration-300' role="img" aria-label="robot" style={{fontSize: '1.5rem'}}>🤖</span>
</button> </h1>

        <div className="flex items-center">
          <button onClick={handleButtonClick}>
            <img
              src="/AII.jpg"
              alt="Logo"
              width="70"
              className="rounded-full border-2 border-white shadow-lg hover:scale-110 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
