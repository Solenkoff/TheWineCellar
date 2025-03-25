import React, { useState } from 'react';

export default function Home() {


    // Mock data for wine cards
    const wineCards = Array(8).fill().map((_, i) => ({
      id: i + 1,
      name: `Premium Wine ${i + 1}`,
      region: 'Bordeaux, France',
      price: `$${(20 + i * 5).toFixed(2)}`,
      rating: '★★★★☆'
    }));

    return (
        <div className="min-w-screen min-h-screen flex flex-col">

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">The Wine Cellar</h3>
                            <p className="text-gray-400">
                                Your premier destination for fine wines from around the world.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Shipping Policy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Newsletter</h4>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="px-4 py-2 rounded-l text-gray-900 w-full"
                                />
                                <button className="bg-red-700 px-4 py-2 rounded-r">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
                        <p>© {new Date().getFullYear()} The Wine Cellar. All rights reserved.</p>
                    </div>
                </div>
            </footer>


            <main className='main'>
                <div>

                    {wineCards.map((wine) => 
                    <div key={wine.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="h-48 bg-gray-200 flex items-center justify-center">
                        <span className="text-5xl">🍷</span>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-1">{wine.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">{wine.region}</p>
                        <div className="flex justify-between items-center">
                          <span className="font-bold">{wine.price}</span>
                          <span className="text-yellow-500">{wine.rating}</span>
                        </div>
                      </div>
                    </div>
                   )}

                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">The Wine Cellar</h3>
                            <p className="text-gray-400">
                                Your premier destination for fine wines from around the world.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Shipping Policy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Newsletter</h4>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="px-4 py-2 rounded-l text-gray-900 w-full"
                                />
                                <button className="bg-red-700 px-4 py-2 rounded-r">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
                        <p>© {new Date().getFullYear()} The Wine Cellar. All rights reserved.</p>
                    </div>
                </div>
            </footer>

        </div>
    );
};

