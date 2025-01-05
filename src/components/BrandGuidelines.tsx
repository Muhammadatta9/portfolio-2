import React from 'react';

const BrandGuidelines = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Cover Page */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Vespera Travel Co. - Brand Guidelines</h1>
        <p className="text-lg text-gray-600 mt-2">Guidelines for Consistency in Brand Identity</p>
        <div className="mt-6">
          <img src="/logo.svg" alt="Vespera Logo" className="w-48 mx-auto" />
        </div>
      </section>

      {/* Page 1: Brand Overview */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900">Brand Overview</h2>
        <p className="text-lg text-gray-600 mt-4">
          <strong>Brand Name:</strong> Vespera Travel Co. <br />
          <strong>Tagline:</strong> Journey to the Extraordinary <br />
          <strong>Mission:</strong> To provide luxurious, unforgettable travel experiences with a focus on personalized adventures. <br />
          <strong>Target Audience:</strong> Affluent individuals seeking unique and high-end travel experiences.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mt-8">Logo Usage</h3>
        <p className="text-lg text-gray-600 mt-4">
          Our logo should always maintain a clean and clear appearance. Avoid any distortions, color changes, or excessive scaling.
        </p>
        <div className="mt-4 flex justify-center">
          <img src="/logo.svg" alt="Logo Example" className="w-48" />
        </div>
      </section>

      {/* Page 2: Color Palette and Typography */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900">Color Palette</h2>
        <p className="text-lg text-gray-600 mt-4">Our primary colors are:</p>
        <div className="flex space-x-4 mt-4">
          <div className="w-24 h-24 bg-[#2C3E50] rounded-lg">
            <p className="text-center text-white pt-8">#2C3E50</p>
          </div>
          <div className="w-24 h-24 bg-[#E67E22] rounded-lg">
            <p className="text-center text-white pt-8">#E67E22</p>
          </div>
          <div className="w-24 h-24 bg-[#ECF0F1] rounded-lg">
            <p className="text-center text-gray-800 pt-8">#ECF0F1</p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mt-8">Typography</h3>
        <p className="text-lg text-gray-600 mt-4">Use the Poppins font for headings and Arial for body text.</p>
        <p className="text-lg text-gray-600 mt-2">
          <strong>Example:</strong> "Discover your next adventure with Vespera."
        </p>
        <div className="mt-4 text-lg font-poppins text-gray-900">
          <p className="font-bold">Poppins Bold</p>
          <p className="font-medium">Poppins Medium</p>
          <p className="font-normal">Poppins Regular</p>
        </div>
      </section>

      {/* Page 3: Iconography and Photography */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900">Iconography</h2>
        <p className="text-lg text-gray-600 mt-4">
          Our icons are simple, clean, and minimalist. They should represent the luxurious and adventurous spirit of Vespera.
        </p>
        <div className="flex space-x-8 mt-8">
          <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="60" fill="#E67E22" />
            </svg>
          </div>
          <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 200 200">
              <path d="M70 60 L100 120 L130 60" stroke="#2C3E50" strokeWidth="4" fill="none" />
            </svg>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mt-8">Photography Guidelines</h3>
        <p className="text-lg text-gray-600 mt-4">
          Use high-quality, professional images that showcase exotic destinations, luxury experiences, and personalized adventures.
        </p>
      </section>

      {/* Page 4: Social Media and Brand Voice */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900">Social Media Guidelines</h2>
        <p className="text-lg text-gray-600 mt-4">
          Maintain a consistent brand aesthetic across all platforms by using the brand colors, fonts, and logo. Ensure that content reflects the luxurious and adventurous spirit of Vespera.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mt-8">Brand Voice</h3>
        <p className="text-lg text-gray-600 mt-4">
          Our brand voice is confident, inspiring, and aspirational. Use friendly yet professional language to engage with our audience.
        </p>
        <p className="text-lg text-gray-600 mt-2">
          <strong>Example Post:</strong> "Embark on your next luxury adventure with Vespera. Experience Bali's hidden gems like never before. #VesperaTravel #ExploreWithUs"
        </p>
      </section>
    </div>
  );
};

export default BrandGuidelines;
