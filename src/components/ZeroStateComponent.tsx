import Image from "next/image";
import React from "react";

const ZeroStateComponent = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-col items-center text-accent">
      <Image src="/zero-state2.png" alt="zero-state" width={250} height={250} />
      <p>{text}</p>
    </div>
  );
};

export default ZeroStateComponent;
