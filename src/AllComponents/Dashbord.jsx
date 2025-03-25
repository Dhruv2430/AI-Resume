import React, { useState, useEffect } from 'react';
import AddResume from './AddResume';
import { useUser } from '@clerk/clerk-react';
import GlobalApi from './../../service/GlobalApi.js';
import ResumeCardItem from './ResumeCardItem'; 

const Dashboard = () => {
  const { user } = useUser();
  const [resumeList, setResumeList] = useState([]);

  const fetchUserResumes = () => {
    if (user) {
      GlobalApi.GetUserResumes(user.primaryEmailAddress.emailAddress)
        .then(resp => {
          console.log(resp.data.data);
          setResumeList(resp.data.data);
        })
        .catch(err => console.error("Error fetching resumes:", err));
    }
  };

  useEffect(() => {
    fetchUserResumes();
  }, [user]);

  return (
    <div>
      <div className="p-10 md:px-20 lg:px-32">
        <h2 className="font-bold text-3xl">My Resume</h2>
        <p>Start creating an AI resume for your next job role</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10">
          <AddResume />
          {resumeList.length > 0 ? (
            resumeList.map((resume, index) => (
              <ResumeCardItem
                resume={resume}
                key={index}
                refreshData={fetchUserResumes}
              />
            ))
          ) : (
            [1, 2, 3, 4].map((item, index) => (
              <div key={index} className="h-[280px] rounded-lg bg-slate-200 animate-pulse"></div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
