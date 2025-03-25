import React from 'react';

function SkillsPreview({ resumeInfo }) {
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-base mb-3 uppercase tracking-wide"
        style={{ color: resumeInfo?.themeColor }}
      >
        Skills
      </h2>
      <hr className="border-t-2" style={{ borderColor: resumeInfo?.themeColor }} />

      {resumeInfo?.skills?.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-4">
          {resumeInfo.skills.map((skill) => (
            <div key={skill.id} className="flex items-center gap-2">
              <h2 className="text-xs font-medium">{skill.name}</h2>
              <div className="h-2 w-[120px] bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full transition-all duration-500 rounded-full"
                  style={{
                    backgroundColor: resumeInfo?.themeColor,
                    width: skill?.rating + '%',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-xs text-gray-500 mt-4">
          No skills added yet.
        </p>
      )}
    </div>
  );
}

export default SkillsPreview