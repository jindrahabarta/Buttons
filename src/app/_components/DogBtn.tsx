"use client";
import React, { useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const DogBtn = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const click = () => {
    setIsClicked(!isClicked);

    setTimeout(() => {
      setIsClicked(false);
    }, 2000);
  };

  //animacdee

  const bgTl = gsap.timeline();

  const hover = () => {
    // const bgTl = gsap.to(".btnBg", {
    //   width: 250,
    //   duration: 0.2,
    // });

    bgTl.to(".btnBg", {
      width: 250,
      duration: 0.2,
    });
    bgTl.to(".btnBg", {
      left: 250,
      duration: 0.2,
    });

    bgTl.play();
  };

  const mouseOut = () => {
    // const bgTl = gsap.to(".btnBg", {
    //   width: 0,
    //   duration: 0.2,
    // });
    // bgTl.play();
    bgTl.to(".btnBg", {
      width: 0,
      left: 0,
    });
  };

  return (
    <button
      onClick={click}
      onMouseOver={hover}
      onMouseLeave={mouseOut}
      className={`${
        isClicked
          ? " bg-gray-800 overflow-visible delay-200"
          : "overflow-hidden"
      } group relative w-52 py-2 bg-black delay-200 duration-200`}
    >
      {isClicked ? (
        <p className="z-20 text-white relative">Zboží máš v košíku</p>
      ) : (
        <p className="z-20 text-white relative">Přidat do košíku</p>
      )}

      {!isClicked && (
        <div className="h-full w-0 absolute top-0 left-0 bg-violet-600 z-10  btnBg"></div>
      )}

      <div className="absolute w-full h-full top-0 left-0 flex justify-center">
        <Image
          src="https://png.pngtree.com/png-vector/20231015/ourmid/pngtree-surprised-crazy-dog-dog-png-image_10286611.png"
          width={100}
          height={200}
          alt="dogggo"
          className={`${
            isClicked ? "bottom-0" : "bottom-[-100px]"
          } absolute duration-200 ease-linear doggo`}
        ></Image>
      </div>
    </button>
  );
};

export default DogBtn;
