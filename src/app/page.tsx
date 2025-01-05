import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import BrandGuidelines from '@/components/BrandGuidelines';

const VesperaPortfolio = () => {
  const brandColor = "#2C3E50";
  const accentColor = "#E67E22";
  
  const BusinessCard = () => (
    <div className="w-96 h-56 bg-white rounded-lg shadow-lg p-6 relative">
      <div className="absolute top-6 left-6">
        <svg width="40" height="40" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="60" fill={brandColor} />
          <path d="M70 60 L100 120 L130 60" stroke={accentColor} strokeWidth="4" fill="none"/>
        </svg>
      </div>
      <div className="mt-16 ml-2">
        <h3 className="text-xl font-bold text-gray-800">Sarah Anderson</h3>
        <p className="text-sm text-gray-600">Travel Experience Director</p>
        <div className="mt-4 text-sm text-gray-600">
          <p>+92 (300) 0000000 </p>
          <p>Atta@vespera.travel</p>
          <p>123 Clifton Karachi</p>
          <p>SIndh Karachi</p>
        </div>
      </div>
    </div>
  );

  const Banner = () => (
    <div className="w-full h-64 bg-gradient-to-r from-slate-800 to-orange-700 rounded-lg relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Discover Your Next Adventure</h1>
          <p className="text-xl text-white">Luxury Travel Experiences by Vespera</p>
        </div>
      </div>
    </div>
  );

  const Envelope = () => (
    <div className="w-full h-96 bg-white rounded-lg shadow-lg p-8">
      <div className="border-2 border-gray-200 h-full rounded-lg p-6 flex items-center justify-center">
        <div className="text-center">
          <svg width="60" height="60" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="60" fill={brandColor} />
            <path d="M70 60 L100 120 L130 60" stroke={accentColor} strokeWidth="4" fill="none"/>
          </svg>
          <div className="mt-4">
            <p className="font-bold">Vespera Travel Co.</p>
            <p>123 Sunset Boulevard</p>
            <p>Los Angeles, CA 90028</p>
          </div>
        </div>
      </div>
    </div>
  );

  const SocialPost = () => (
    <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
      <img 
        src="https://via.placeholder.com/800x400.png?text=Travel+destination" 
        alt="Travel destination" 
        className="w-full h-48 object-cover" 
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Explore Bali's Hidden Gems</h3>
        <p className="text-gray-600 mb-4">Discover secluded beaches, ancient temples, and luxurious retreats in our exclusive Bali expedition. #VesperaTravel #LuxuryTravel</p>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <img 
              src="https://via.placeholder.com/40" 
              alt="Profile Picture" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="ml-2 text-sm font-semibold text-gray-700">Vespera Travel</span>
          </div>
          <button className="text-blue-500 text-sm font-semibold hover:underline">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
  

  const ShoppingBag = () => (
    <div className="w-64 h-80 bg-white rounded-lg shadow-lg relative">
      <div className="absolute top-0 left-0 right-0 h-20 bg-slate-800 rounded-t-lg flex items-center justify-center">
        <svg width="40" height="40" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="60" fill="white" />
          <path d="M70 60 L100 120 L130 60" stroke={accentColor} strokeWidth="4" fill="none"/>
        </svg>
      </div>
      <div className="absolute top-24 left-4 right-4 bottom-4 border-2 border-gray-200 rounded-lg"></div>
    </div>
  );

  const UIDesign = () => (
    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-slate-800 p-4">
        <div className="flex items-center space-x-4">
          <svg width="30" height="30" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="60" fill="white" />
            <path d="M70 60 L100 120 L130 60" stroke={accentColor} strokeWidth="4" fill="none"/>
          </svg>
          <nav className="flex space-x-4 text-white">
            <span>Destinations</span>
            <span>Experiences</span>
            <span>About</span>
            <span>Contact</span>
          </nav>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Featured Destinations</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="aspect-video bg-gray-200 rounded-lg"></div>
          <div className="aspect-video bg-gray-200 rounded-lg"></div>
          <div className="aspect-video bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Vespera Travel Company - Brand Identity</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="logo" className="w-full">
          <TabsList>
            <TabsTrigger value="logo">Logo</TabsTrigger>
            <TabsTrigger value="banner">Banner</TabsTrigger>
            <TabsTrigger value="card">Business Card</TabsTrigger>
            <TabsTrigger value="envelope">Envelope</TabsTrigger>
            <TabsTrigger value="posts">Social Posts</TabsTrigger>
            <TabsTrigger value="bag">Shopping Bag</TabsTrigger>
            <TabsTrigger value="ui">UI Design</TabsTrigger>
          </TabsList>
          
          <TabsContent value="logo" className="flex justify-center p-8">
            <svg width="200" height="100" viewBox="0 0 400 200">
              <circle cx="100" cy="100" r="60" fill={brandColor}/>
              <path d="M70 60 L100 120 L130 60" stroke={accentColor} strokeWidth="4" fill="none"/>
              <path d="M85 80 L100 110 L115 80" stroke={accentColor} strokeWidth="2" fill="none"/>
              <circle cx="100" cy="100" r="40" stroke={accentColor} strokeWidth="1" fill="none"/>
              <path d="M100 65 L100 75 M100 125 L100 135 M65 100 L75 100 M125 100 L135 100" 
                    stroke={accentColor} strokeWidth="2"/>
              <text x="180" y="105" fontFamily="Arial" fontSize="40" fill={brandColor} 
                    fontWeight="bold">VESPERA</text>
              <text x="180" y="125" fontFamily="Arial" fontSize="12" fill={accentColor}>
                JOURNEY TO THE EXTRAORDINARY</text>
            </svg>
          </TabsContent>
          
          <TabsContent value="banner" className="p-4">
            <Banner />
          </TabsContent>
          
          <TabsContent value="card" className="p-4">
            <BusinessCard />
          </TabsContent>
          
          <TabsContent value="envelope" className="p-4">
            <Envelope />
          </TabsContent>
          
          <TabsContent value="posts" className="p-4">
            <SocialPost />
          </TabsContent>
          
          <TabsContent value="bag" className="p-4">
            <ShoppingBag />
          </TabsContent>
          
          <TabsContent value="ui" className="p-4">
            <UIDesign />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default VesperaPortfolio;
