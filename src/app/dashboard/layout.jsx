
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div className='w-full flex min-h-screen'>
            <DashboardSidebar></DashboardSidebar>
            <div className='flex-1 w-full p-6'>{children}</div>
        </div>
    );
};

export default DashboardLayout;