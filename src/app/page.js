"use client";
import { useState } from "react";
import Image from "next/image";
import giph from '../../public/giphy.gif'
import val from '../../public/valentines.jpg'

export default function Home() {
  const [position, setPosition] = useState({ top: "50%", left: "50%" });
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };



  const handleButtonClick = () => {
    const maxWidth = window.innerWidth - 100; // Adjust for button width
    const maxHeight = window.innerHeight - 40; // Adjust for button height

    const newTop = Math.random() * maxHeight;
    const newLeft = Math.random() * maxWidth;

    setPosition({
      top: `${newTop}px`,
      left: `${newLeft}px`,
    });
  };

  const buttonStyle = {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "transform 0.3s ease-in-out",
    top: position.top,
    left: position.left,
  };

  return (
    <main className="flex text-black min-h-screen flex-col items-center w-full justify-between p-24 bg-fixed bg-center bg-cover bg-[url('/val/public/valentines.jpg')]">
        <Image
    alt="Mountains"
    src={val}
    placeholder="blur"
    quality={100}
    fill
    sizes="100vw"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: -1, // Set a negative z-index to position the image behind other content
    }}
  />
      <h1 className=" font-semibold text-lg sm:text-base">Heyy, Will you be my Valentines?</h1>

      <div className="grid gap-4 grid-cols-2 content-center">
        <div>
          <button
            className=" p-4 bg-pink-700 w-auto rounded-lg"
            style={buttonStyle}
            onClick={handleButtonClick}
          >
            Hell No
          </button>
        </div>
        <div>
      <button
      className=" bg-pink-500 p-5 rounded-2xl"
       onClick={handleClick}>Fuck Yes Daddy</button>

      {/* 👇️ show elements on click */}
      {isShown && (
        <div>
         <h1 className=" font-bold text-xl text-red-600">Wooooooooooh!!!🥳🥳🥳</h1>
        </div>
      )}

      {/* 👇️ show component on click */}
      {isShown && 
     <Image
     src={giph}
     alt="Picture of the author"
     />
      }
    </div>
      </div>
      
    </main>
  );
}
