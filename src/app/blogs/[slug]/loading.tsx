const BlogDetailLoading = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Skeleton */}
      <div className="h-[60vh] md:h-[70vh] bg-gray-200 animate-pulse relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-8 lg:px-16 pb-16">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb skeleton */}
              <div className="h-4 bg-white/20 rounded w-48 mb-6"></div>
              
              {/* Category skeleton */}
              <div className="h-8 bg-white/20 rounded-full w-32 mb-4"></div>
              
              {/* Title skeleton */}
              <div className="space-y-3 mb-6">
                <div className="h-8 bg-white/20 rounded w-full"></div>
                <div className="h-8 bg-white/20 rounded w-3/4"></div>
              </div>
              
              {/* Meta skeleton */}
              <div className="flex space-x-6">
                <div className="h-4 bg-white/20 rounded w-32"></div>
                <div className="h-4 bg-white/20 rounded w-24"></div>
                <div className="h-4 bg-white/20 rounded w-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="py-16 px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Description skeleton */}
          <div className="mb-12 p-8 bg-gray-100 rounded-2xl animate-pulse">
            <div className="space-y-3">
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-4/5"></div>
              <div className="h-4 bg-gray-300 rounded w-3/5"></div>
            </div>
          </div>

          {/* Content skeleton */}
          <div className="space-y-6 animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-2/3"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-4/5"></div>
            </div>
            <div className="h-6 bg-gray-200 rounded w-1/2"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailLoading;
