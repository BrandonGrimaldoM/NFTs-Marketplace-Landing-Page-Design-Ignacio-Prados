"use client";
import { useEffect, useState } from "react";
import { Roboto_Condensed } from "next/font/google";

interface Numberstsx {
  collection: number;
  artists: number;
  community: number;
}

const roboto = Roboto_Condensed({ subsets: ["latin"], weight: "700" });

export default function Numbers(props: Numberstsx) {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const [three, setThree] = useState(0);

  const animateNumber = () => {
    for (let index = 0; index <= props.collection; index++) {
      setTimeout(() => {
        setOne(index);
      }, (index + 1) * 10);
    }
  };

  const animateNumberTwo = () => {
    for (let index = 0; index <= props.artists; index++) {
      setTimeout(() => {
        setTwo(index);
      }, (index + 1) * 10);
    }
  };

  const animateNumberThree = () => {
    for (let index = 0; index <= props.community; index++) {
      setTimeout(() => {
        setThree(index);
      }, (index + 1) * 10);
    }
  };

  useEffect(() => {
    animateNumber();
    animateNumberTwo();
    animateNumberThree();
  }, []);

  return (
    <div className="flex gap-10">
      <div>
        <p className={roboto.className + " text-4xl scale-y-50"}>
          {one + "k+"}
        </p>
        <p className="text-[#CEBAF9] font-medium">Collections</p>
      </div>

      <div>
        <p className={roboto.className + " text-4xl scale-y-50"}>
          {two + "k+"}
        </p>
        <p className="text-[#CEBAF9] font-medium"> Artists</p>
      </div>

      <div>
        <p className={roboto.className + " text-4xl scale-y-50"}>
          {three + "k+"}
        </p>
        <p className="text-[#CEBAF9] font-medium">Community</p>
      </div>
    </div>
  );
}
