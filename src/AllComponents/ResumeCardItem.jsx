import { NotebookIcon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const ResumeCardItem = ({ resume }) => {
  return (
    <Link to={'/resume/' + resume.documentId + '/edit'} className="block">
      <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg h-[280px]">
        <div className="flex items-center justify-center h-[180px] bg-gradient-to-b from-pink-100 via-purple-200 to-blue-200 border-t-4 border-blue-400">
          <NotebookIcon size={48} className="text-blue-600" />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">{resume.title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default ResumeCardItem;
