import React, { useState } from 'react'
import PersonalDetail from './PersonalDetail'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react'
import Summery from './Summery'
import Experience from './Experience'
import Education from './Education'



const FormSection = () => {
  const [activeFormIndex, setActiveFormIndex] = useState(1)
  const [enableNext, setEnableNext] = useState(true)

  return (
    <>
      <div>
        <div className='flex justify-between items-center'>
          <Button variant='outline' size='sm' className='flex gap-2'> 
            <LayoutGrid />Theme
          </Button>
          <div className='flex gap-2'>
            {
              activeFormIndex > 1 && (
                <Button 
                  variant='outline' 
                  size='sm' 
                  className='flex gap-2' 
                  onClick={() => setActiveFormIndex(activeFormIndex - 1)}
                >
                  <ArrowLeft/>Back
                </Button>
              )
            }
            <Button 
              className='flex gap-2' 
              size='sm' 
              onClick={() => setActiveFormIndex(activeFormIndex + 1)}
              disabled={!enableNext}
            >
              Next <ArrowRight />
            </Button>
          </div>
        </div>
        <div>
          {activeFormIndex === 1 ? 
            <PersonalDetail enableNext={(v) => setEnableNext(v)} /> :
            activeFormIndex === 2 ? 
            <Summery /> : 
            activeFormIndex === 3 ?
             <Experience/>:
            activeFormIndex === 4 ?
            <Education/>:
            null }
        </div>

      </div>
    </>
  )
}

export default FormSection