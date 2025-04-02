"use client";
import React, { useState } from "react";
import DesignIdeasModal from "./modals/DesignIdeasModal";

const DesignIdeasNavigation = () => {
  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <div className="relative text-primary hover:text-foreground">
      <button
        onMouseEnter={() => setModalVisibility(true)}
        onMouseLeave={() => setModalVisibility(false)}
        className="cursor-pointer hover:font-medium p-2"
      >
        Design Ideas
      </button>
      {modalVisibility ? (
        <div
          onMouseEnter={() => setModalVisibility(true)}
          onMouseLeave={() => setModalVisibility(false)}
          className="absolute top-10 -left-36 z-50"
        >
          <DesignIdeasModal />
        </div>
      ) : null}
    </div>
  );
};

export default DesignIdeasNavigation;
