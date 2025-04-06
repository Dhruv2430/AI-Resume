import React, { useState } from 'react'
import PersonalDetail from './PersonalDetail'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, LayoutGrid, LayoutGridIcon } from 'lucide-react'
// import Summary from './Summery'

const FormSection = () => {

  const [activeFormIndex, setactiveFormIndex] = useState(1)

  return (
    <>
      <div >
        <div className='flex justify-between items-center'>
          <Button variant='outline' size='sm' className='flex gap-2' > <LayoutGrid />Theme</Button>
        <div className='flex gap-2'>
          {
            activeFormIndex > 1 && (
              <Button variant='outline' size='sm' className='flex gap-2' onClick={() => setactiveFormIndex(activeFormIndex - 1)} ><ArrowLeft/>Back</Button>
            )
          }
          <Button className='flex gap-2' size='sm' onClick={() => setactiveFormIndex(activeFormIndex + 1)} >Next <ArrowRight /></Button>
        </div>
        </div>
        <div>
         {activeFormIndex == 1? <PersonalDetail /> :null} 
         {/* <Summary/> */}
        </div>
      </div>
    </>
  )
}

export default FormSection