import React from 'react'

function EducationalPreview({resumeInfo}) {
  return (
    <div className='my-6'>
    <h2 className='text-center font-bold text-base mb-3 uppercase tracking-wide'
    style={{
        color: resumeInfo?.themeColor
    }}
    >Education</h2>
    <hr style={{
        borderColor: resumeInfo?.themeColor
    }} />

    {resumeInfo?.education?.map((education) => (
        <div key={education.id} className='my-5'>
            <h2 className='text-sm font-bold'
                style={{
                    color: resumeInfo?.themeColor
                }}
            >
                {education.universityName}
            </h2>
            <h2 className='text-xs flex justify-between text-gray-700'>
                {education?.degree} in {education?.major}
                <span>{education?.startDate} - {education?.endDate}</span>
            </h2>
            <p className='text-xs my-2 text-gray-600'>
                {education?.description}
            </p>
        </div>
    ))}
    </div>
  )
}

export default EducationalPreview
