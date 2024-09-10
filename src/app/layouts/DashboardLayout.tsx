'use client'

import React, { useState, useEffect, ReactNode } from 'react';
import { ScrollArea } from "@/app/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";
import { Button } from "@/app/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
import { LayoutDashboard, ShoppingCart, Users, FileText, Settings, Menu, X } from 'lucide-react';

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const SidebarContent: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`bg-gray-800 text-white h-full ${isOpen ? 'w-64' : 'w-16'}`}>
            <div className="p-4 font-bold text-xl border-b border-gray-700 flex justify-between items-center">
                {isOpen ? 'AdminLTE 3' : ''}
                <Button variant="ghost" size="icon" onClick={toggleSidebar} className="text-white">
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </Button>
            </div>
            <ScrollArea className="h-[calc(100vh-64px)]">
                <nav className="p-2">
                    <ul>
                        <li>
                            <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded">
                                <LayoutDashboard size={20} />
                                {isOpen && <span className="ml-2">Dashboard</span>}
                            </a>
                        </li>
                        <li>
                            <Accordion type="single" collapsible className={isOpen ? '' : 'hidden'}>
                                <AccordionItem value="e-commerce">
                                    <AccordionTrigger className="py-2 px-2 hover:bg-gray-700 rounded">
                                        <div className="flex items-center">
                                            <ShoppingCart size={20} />
                                            <span className="ml-2">E-commerce</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="pl-6">
                                            <li><a href="#" className="block py-1 hover:text-gray-300">Products</a></li>
                                            <li><a href="#" className="block py-1 hover:text-gray-300">Orders</a></li>
                                            <li><a href="#" className="block py-1 hover:text-gray-300">Customers</a></li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            {!isOpen && (
                                <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded">
                                    <ShoppingCart size={20} />
                                </a>
                            )}
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded">
                                <Users size={20} />
                                {isOpen && <span className="ml-2">Users</span>}
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded">
                                <FileText size={20} />
                                {isOpen && <span className="ml-2">Reports</span>}
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded">
                                <Settings size={20} />
                                {isOpen && <span className="ml-2">Settings</span>}
                            </a>
                        </li>
                    </ul>
                </nav>
            </ScrollArea>
        </div>
    );
};

export default function DashboardLayout({children}: {children: ReactNode}) {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
            setIsOpen(window.innerWidth >= 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <div className="flex">
            {isMobile ? (
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50">
                            <Menu size={24} />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="p-0 bg-gray-800">
                        <SidebarContent isOpen={true} toggleSidebar={() => {}} />
                    </SheetContent>
                </Sheet>
            ) : (
                <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'w-64' : 'w-16'}`}>
                    <SidebarContent isOpen={isOpen} toggleSidebar={toggleSidebar} />
                </div>
            )}
            <div className="flex-1">
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    );
}