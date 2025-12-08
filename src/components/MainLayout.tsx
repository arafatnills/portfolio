import React from 'react';
import Sidebar from './Sidebar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="container overflow-x-hidden mx-auto min-h-screen py-12 font-sans md:py-20 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
                <Sidebar />
                <main className="pt-24 lg:w-1/2 lg:py-24 ml-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
