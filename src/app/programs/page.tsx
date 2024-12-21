import Orphanages from '@/components/Orphan';
import RationDistribution from '@/components/Rashan';
import Scholarships from '@/components/Scholarship';
import React from 'react';

const ProgramsPage = () => {
  return (
    <div className="bg-blue-200" >
      <Orphanages />
      <Scholarships />
      <RationDistribution />
    </div>
  );
};

export default ProgramsPage;

