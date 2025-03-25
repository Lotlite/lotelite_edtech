import React from 'react';
import { GraduationCap as Graduation } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <Graduation className="h-8 w-8 text-[#0077B5]" />
      <span className="ml-2 text-xl font-bold text-[#0077B5]">Lotlite</span>
    </div>
  );
};

export default Logo;