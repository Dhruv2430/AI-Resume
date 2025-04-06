import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import GlobalApi from './../../../service/GlobalApi'
import { LoaderCircle } from 'lucide-react';
import { toast } from 'sonner';

function Summary({enabledNext}) {
    const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext);
    const [summary, setSummary] = useState();
    const [loading, setLoading] = useState(false);
    const params = useParams();
    
    useEffect(() => {
        summary && setResumeInfo({
            ...resumeInfo,
            summary: summary
        })
    }, [summary])
    
    const onSave = (e) => {
        e.preventDefault();
       
        setLoading(true)
        const data = {
            data: {
                summary: summary
            }
        }
        GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(resp => {
            console.log(resp);
            enabledNext(true);
            setLoading(false);
            toast("Details updated")
        }, () => {
            setLoading(false);
            toast("Failed to update details")
        })
    }
    
    return (
        <div>
            <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
                <h2 className='font-bold text-lg'>Summary</h2>
                <p>Add Summary for your job title</p>
                <form className='mt-7' onSubmit={onSave}>
                    <label>Add Summary</label>
                    <Textarea 
                        className="mt-5" 
                        required
                        value={summary}
                        defaultValue={summary ? summary : resumeInfo?.summary}
                        onChange={(e) => setSummary(e.target.value)}
                    />
                    <div className='mt-2 flex justify-end'>
                        <Button 
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Summary