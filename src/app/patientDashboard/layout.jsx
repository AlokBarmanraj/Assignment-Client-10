

import { PatientDashboardSidebar } from '@/components/dashboard/PatientDashboardSidebar';
import React from 'react';


const DashboardLayout = ({children}) => {
    return (
        <div className='w-full flex min-h-screen'>
            <PatientDashboardSidebar></PatientDashboardSidebar>
            <div className='flex-1 w-full p-6'>{children}</div>
        </div>
    );
};

export default DashboardLayout;