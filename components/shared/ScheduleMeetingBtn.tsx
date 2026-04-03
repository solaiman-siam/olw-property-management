import Link from 'next/link';
import React from 'react';

const ScheduleMeetingBtn = () => {
    return (
        <Link
          href="/schedule"
          className="hidden group md:inline-flex items-center gap-2 px-5 py-2.75 bg-primary01 text-white text-sm font-semibold rounded-lg shrink-0 transition-all duration-200 hover:bg-[#dd2c4f] hover:-translate-y-px shadow-primary01/10 hover:shadow-primary01/10 active:translate-y-0"
        >
          Schedule A Meeting
          <span className="text-base group-hover:translate-x-1 transition-transform duration-200">→</span>
        </Link>
    );
};

export default ScheduleMeetingBtn;