import React from 'react';

function ExperiencePreview({ resumeInfo }) {
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-base mb-3 uppercase tracking-wide"
        style={{ color: resumeInfo?.themeColor }}
      >
        Professional Experience
      </h2>
      <hr className="border-t-2" style={{ borderColor: resumeInfo?.themeColor }} />

      {resumeInfo?.experience?.length > 0 ? (
        resumeInfo.experience.map((experience) => (
          <div key={experience.id} className="mt-4 mb-6">
            <div className="flex justify-between items-center">
              <h2
                className="text-sm font-semibold"
                style={{ color: resumeInfo?.themeColor }}
              >
                {experience?.title}
              </h2>
              <span className="text-xs text-gray-600">
                {experience?.startDate} - {experience?.currentlyWorking ? 'Present' : experience?.endDate}
              </span>
            </div>

            <div className="text-xs text-gray-700 mt-1">
              <span>
                {experience?.companyName}, {experience?.city}, {experience?.state}
              </span>
            </div>

            {experience?.workSummery && (
          <div dangerouslySetInnerHTML={{ __html: experience.workSummery }} />
            )}
          </div>
        ))
      ) : (
        <p className="text-center text-xs text-gray-500 mt-4">
          No professional experience details available.
        </p>
      )}
    </div>
  );
}

export default ExperiencePreview;