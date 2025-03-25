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
        resumeInfo.experience.map((experience, index) => (
          <div key={experience.id} className="mt-4">
            <h2
              className="text-sm font-semibold"
              style={{ color: resumeInfo?.themeColor }}
            >
              {experience?.title}
            </h2>

            <div className="text-xs text-gray-700 mt-1 grid grid-cols-2 gap-2">
              <span>
                {experience?.companyName}, {experience?.city}, {experience?.state}
              </span>
              <span className="text-right text-gray-600">
                {experience?.startDate} - {experience?.currentlyWorking ? 'Present' : experience?.endDate}
              </span>
            </div>

            {experience?.workSummery && (
              <p className="text-xs text-gray-600 mt-2 leading-relaxed whitespace-pre-line">
                {experience?.workSummery}
              </p>
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

export default ExperiencePreview