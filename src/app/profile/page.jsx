"use client";
import ProfileEditModal from '@/components/ProfileEditModal';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';

const ProfilePage = () => {
      const userInfo = authClient.useSession();
  const user = userInfo.data?.user;
    return (
      <Card className="mt-16 mb-16 w-full max-w-md mx-auto bg-white border border-gray-200 p-5 sm:p-8 rounded-xl shadow-xl">
        <Avatar className="w-32 h-32 mx-auto rounded-full">
          <Avatar.Image
            src={user?.image}
            alt="User"
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name?.[0]}</Avatar.Fallback>
        </Avatar>
        <div className="text-center mt-5">
          <h2 className="font-bold text-gray-600 text-3xl">{user?.name}</h2>
          <h2 className="font-bold text-gray-400 italic">{user?.email}</h2>
        </div>
        <div className="text-center mt-10">
          <ProfileEditModal></ProfileEditModal>
        </div>
      </Card>
    );
};

export default ProfilePage;