"use client";
import React, { useState } from "react";
import DesignIdeasModal from "./modals/DesignIdeasModal";

interface DesignIdeasNavigationProps {
  setIsOpen: (isOpen: boolean) => void;
}

const DesignIdeasNavigation = ({ setIsOpen }: DesignIdeasNavigationProps) => {
  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <div className="relative text-primary hover:text-foreground">
      <button
        onMouseEnter={() => setModalVisibility(true)}
        onMouseLeave={() => setModalVisibility(false)}
        className="cursor-pointer hover:font-semibold p-2"
        onClick={() => setModalVisibility(!modalVisibility)}
      >
        Design Ideas
      </button>
      {modalVisibility ? (
        <div
          onMouseEnter={() => setModalVisibility(true)}
          onMouseLeave={() => setModalVisibility(false)}
          className="absolute top-10 lg:-left-36 -left-28 z-50"
        >
          <DesignIdeasModal
            setModalVisibility={setModalVisibility}
            setIsOpen={setIsOpen}
          />
        </div>
      ) : null}
    </div>
  );
};

export default DesignIdeasNavigation;
