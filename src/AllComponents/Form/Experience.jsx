import React, { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import { Button } from '@/components/ui/button'
import { CircleMinus, PlusSquare } from 'lucide-react'
import RichTextEditor from '../RichTextEditor'
import { LoaderCircle } from 'lucide-react'
import { toast } from 'sonner'

const Experience = () => {

    const { resumeInfo, setResumeInfo } = React.useContext(ResumeInfoContext)
    const [loading, setLoading] = useState(false)

    const handleChange = (index, event) => {
      const entery = experience.slice();
        const { name, value } = event.target;
        entery[index][name] = value;
        setExperience(entery);
    }

    const HandleAddExprinces = () => {
        setExperience([...experience, formField])
        
    }

    const HandleAddExprincesRemove = () => {
      setExperience(experience.slice(0, experience.length - 1))
       
    }

    const formField = {
        title: '',
        companyName: '',
        city: '',
        state: '',
        startDate: '',
        endDate: '',
        workSummery: '',
    }

    const [experience, setExperience] = useState([formField])

    useEffect(() => {   
        setResumeInfo(() => ({
            ...resumeInfo,
            experience:experience
        }))
    }, [experience])

    const handleRichTextEditor = (event, name, index) => {
        const entery = experience.slice();
        const { value } = event.target;
        entery[index][name] = value;
        setExperience(entery);
    }

    const onSave = () => {
        setLoading(true)
        const data={
            data:{
                Experience:experience.map(({ id, ...rest }) => rest)
            }
        }
    }

    return (
        <>  
            <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
                <h2 className='font-bold text-lg'>Experience</h2>
                <p>Add Experience for your job</p>
                <div>
                    {experience.map((item, index) => (
                        <div key={index}>
                            <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
                                <div>
                                    <label className='text-xs'>Position Title</label>
                                    <Input name="title"
                                        onChange={(event) => handleChange(index, event)}
                                        defaultValue={item?.title}
                                    />
                                </div>
                                <div>
                                    <label className='text-xs'>Company Name</label>
                                    <Input name="companyName"
                                        onChange={(event) => handleChange(index, event)}
                                        defaultValue={item?.companyName} />
                                </div>
                                <div>
                                    <label className='text-xs'>City</label>
                                    <Input name="city"
                                        onChange={(event) => handleChange(index, event)}
                                        defaultValue={item?.city} />
                                </div>
                                <div>
                                    <label className='text-xs'>State</label>
                                    <Input name="state"
                                        onChange={(event) => handleChange(index, event)}
                                        defaultValue={item?.state}
                                    />
                                </div>
                                <div>
                                    <label className='text-xs'>Start Date</label>
                                    <Input type="date"
                                        name="startDate"
                                        onChange={(event) => handleChange(index, event)}
                                        defaultValue={item?.startDate} />
                                </div>
                                <div>
                                    <label className='text-xs'>End Date</label>
                                    <Input type="date" name="endDate"
                                        onChange={(event) => handleChange(index, event)}
                                        defaultValue={item?.endDate}
                                    />
                                </div>
                                <div className='col-span-2'>
                                    <RichTextEditor
                                    index={index}
                                    onRichTextEditorChange={(event)=>handleRichTextEditor(event,'workSummery',index)}  />
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='flex justify-between items-center'>
                      <div className='flex gap-2'>
                      <Button variant='outline' onClick={HandleAddExprinces}> <PlusSquare/>Add More experience</Button>
                      <Button variant='outline' onClick={HandleAddExprincesRemove}> <CircleMinus /> Remove </Button>
                      </div>
                      <Button disabled={loading} onClick={() => onSave()}>
                            {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience
