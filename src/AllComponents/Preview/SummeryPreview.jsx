import React from 'react'

function SummeryPreview({resumeInfo}) {
  return (
    <p className='text-xs text-gray-700 leading-relaxed'>
        {resumeInfo?.summery}
    </p>
  )
}

export default SummeryPreview