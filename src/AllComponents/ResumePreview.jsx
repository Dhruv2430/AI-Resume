import {ResumeInfoContext} from './../Context/ResumeInfoContext'
import React, { useContext } from 'react'
import PersonalDetailPreview from './Preview/PersonalDetailPreview'
import SummeryPreview from './Preview/SummeryPreview'
import ExperiencePreview from './Preview/ExperiencePreview'
import EducationalPreview from './Preview/EducationalPreview'
import SkillsPreview from './Preview/SkillsPreview'


function ResumePreview() {

  const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)

  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]'
      style={{
        borderColor: resumeInfo?.themeColor
      }}>

      <PersonalDetailPreview resumeInfo={resumeInfo} />

      <SummeryPreview resumeInfo={resumeInfo} />

      {resumeInfo?.Experience?.length > 0 && <ExperiencePreview resumeInfo={resumeInfo} />}

      {resumeInfo?.education?.length > 0 && <EducationalPreview resumeInfo={resumeInfo} />}

      {resumeInfo?.skills?.length > 0 && <SkillsPreview resumeInfo={resumeInfo} />}
    </div>
  )
}

export default ResumePreview