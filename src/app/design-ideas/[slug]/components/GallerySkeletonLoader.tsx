import React from "react";

const GallerySkeletonLoader: React.FC = () => {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5 gap-6 space-y-6">
      {Array.from({ length: 12 }, (_, index) => (
        <div key={index} className="break-inside-avoid mb-6 animate-pulse">
          <div className="bg-gray-200 rounded-2xl overflow-hidden">
            <div
              className="w-full bg-gray-300"
              style={{
                height: `${Math.floor(Math.random() * 200) + 200}px`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GallerySkeletonLoader;
