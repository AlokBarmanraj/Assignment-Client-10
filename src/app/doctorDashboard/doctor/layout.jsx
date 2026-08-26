import { requireRole } from '@/lib/session';
import React from 'react';

const DoctorLayout = async ({children}) => {
    await requireRole ("doctor");
    return children;
};

export default DoctorLayout;