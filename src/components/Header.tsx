import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/outline';

export const Header: React.FC = () => {
  return (
    <header className="mb-8 text-center">
      <div className="flex items-center justify-center gap-3">
        <BeakerIcon className="h-10 w-10 text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-900">AI Researcher</h1>
      </div>
      <div className="mt-4 text-center">
        <p className="mt-2 text-xl text-blue-600 font-semibold">
          Your Intelligent Research Assistant Powered by AI
        </p>
        <p className="mt-2 text-lg text-gray-700">
          Developed in association with the <span className="font-bold text-red-600">Mars Technology Institute (MTI)</span>
        </p>
        <p className="mt-2 text-lg text-gray-700">
          Towards solving earthly problems with application on Mars
        </p>
        <p className="mt-2 text-lg text-purple-600 font-medium">
          Developed by <span className="font-bold">MIFECO.com</span>
        </p>
      </div>
    </header>
  );
};
