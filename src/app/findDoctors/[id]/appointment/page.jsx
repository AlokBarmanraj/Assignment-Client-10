
"use client"
import AppointmentDoctor from '@/components/findDoctor/AppointmentDoctor';
import { authClient } from '@/lib/auth-client';
import React from 'react';

const AppointmentPage = () => {
    return (
        <div>
            <AppointmentDoctor></AppointmentDoctor>
        </div>
    );
};

export default AppointmentPage;