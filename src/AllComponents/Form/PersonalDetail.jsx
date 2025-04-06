import { ResumeInfoContext } from '@/Context/ResumeInfoContext'
import React, { useContext, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { LoaderCircle } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import GlobalApi from './../../../service/GlobalApi'
import { toast } from 'sonner'


const PersonalDetail = () => {

    const params = useParams()
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState()

    useEffect(()=>{
        console.log("---",resumeInfo)
    },[])

    const handleInputChange = (e) => {
        
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))

        const { name, value } = e.target
        setResumeInfo((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const onSave = async (e) => {
        e.preventDefault()
        setLoading(true)

        const data = {
            data: formData
        }

        try {
            await GlobalApi.UpdateResumeDetail(params.resumeId, data)
            toast("Details updated successfully", { type: "success" }) 
        } catch (error) {
            console.error("Error updating resume details:", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='p-6 sm:p-8 shadow-lg rounded-2xl border-t-4 border-primary mt-10 bg-white space-y-4'>
            <div>
                <h2 className='text-2xl font-semibold text-gray-800'>Personal Details</h2>
                <p className='text-sm text-gray-500 mt-1'>Get started with your basic information</p>
            </div>

            <form className='space-y-6' onSubmit={onSave}>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>First Name</label>
                        <Input name="firstName" required onChange={handleInputChange} placeholder="Enter first name" />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>Last Name</label>
                        <Input name="lastName" required onChange={handleInputChange} placeholder="Enter last name" />
                    </div>
                    <div className='sm:col-span-2'>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>Job Title</label>
                        <Input name="jobTitle" required onChange={handleInputChange} placeholder="e.g. Frontend Developer" />
                    </div>
                    <div className='sm:col-span-2'>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>Address</label>
                        <Input name="address" required onChange={handleInputChange} placeholder="e.g. 123 Street, City, State" />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>Phone</label>
                        <Input name="phone" required onChange={handleInputChange} placeholder="e.g. +91 98765 43210" />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
                        <Input name="email" required onChange={handleInputChange} placeholder="e.g. example@email.com" />
                    </div>
                </div>

                <div className='flex justify-end'>
                    <Button type="submit" disabled={loading} className='w-full sm:w-auto'>
                        {loading ? (
                            <div className='flex items-center gap-2'>
                                <LoaderCircle className='animate-spin w-4 h-4' />
                                <span>Saving...</span>
                            </div>
                        ) : (
                            'Save'
                        )}
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default PersonalDetail
