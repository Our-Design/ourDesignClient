import React from "react";
import { fetchCloudinaryImages } from "@/actions/fetchCloudinaryImages";
import GalleryGrid from "./components/GalleryGrid";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const DesignIdeasComponent = async ({ params }: PageProps) => {
  const { slug } = await params;

  const images = await fetchCloudinaryImages(slug);

  if (
    "error" in images ||
    !images?.resources ||
    images.resources.length === 0
  ) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-secondary via-white to-secondary">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="capitalize text-4xl font-bold text-heading mb-4">
              {slug.replace("-", " ")}
            </h2>
            <p className="text-xl text-accent">
              No designs found in this category yet.
            </p>
            <div className="mt-8">
              <div className="inline-flex items-center px-4 py-2 bg-muted rounded-full text-sm text-accent">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Check back soon for new designs!
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-secondary via-white to-secondary">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="capitalize text-4xl md:text-5xl font-bold text-heading mb-4 tracking-tight">
            {slug.replace("-", " ")}
          </h1>
          <div className="flex items-center justify-center gap-2 text-lg text-accent">
            <span className="w-12 h-0.5 bg-primary"></span>
            <span className="font-medium">
              {images.resources.length} Beautiful Designs
            </span>
            <span className="w-12 h-0.5 bg-primary"></span>
          </div>
          <p className="mt-4 text-accent max-w-2xl mx-auto">
            Discover stunning {slug.replace("-", " ")} designs to inspire your
            next project. Click on any image to view it in full resolution.
          </p>
        </div>

        {/* Gallery Grid */}
        <GalleryGrid images={images.resources} />

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-heading mb-4">
              Love what you see?
            </h3>
            <p className="text-accent mb-6">
              Get a personalized design for your space
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DesignIdeasComponent;
