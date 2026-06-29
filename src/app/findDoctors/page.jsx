import SearchAndFilterDoctor from '@/components/findDoctor/SearchAndFilterDoctor';
import React from 'react';
export const metadata = {
  title: "Doctor | Find Doctor",
};

const page = () => {
  return (
    <div>
      <SearchAndFilterDoctor></SearchAndFilterDoctor>
    </div>
  );
};

export default page;