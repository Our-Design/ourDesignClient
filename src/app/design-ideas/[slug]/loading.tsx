import React from "react";
import GallerySkeletonLoader from "./components/GallerySkeletonLoader";

const DesignIdeasLoading: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-secondary via-white to-secondary">
      <div className="container mx-auto px-4 py-12">
        {/* Header Skeleton */}
        <div className="text-center mb-12">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-300 rounded-lg w-64 mx-auto mb-4"></div>
            <div className="h-6 bg-gray-200 rounded-lg w-48 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded-lg w-96 mx-auto"></div>
          </div>
        </div>

        {/* Gallery Skeleton */}
        <GallerySkeletonLoader />
      </div>
    </main>
  );
};

export default DesignIdeasLoading;
