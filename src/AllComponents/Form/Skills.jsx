import { Input } from '@/components/ui/input';
import React, { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import '@smastrom/react-rating/style.css';
import { Button } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';
import { toast } from 'sonner';
import GlobalApi from './../../../service/GlobalApi';
import { useParams } from 'react-router-dom';

const Skills = () => {
    const { resumeInfo, setResumeInfo } = React.useContext(ResumeInfoContext);

    const [skillList, setskillList] = useState([{
        name: '',
        rating: 0,
    }]);

    const params = useParams();
    const [loading, setLoading] = useState(false);

    const AddSkill = () => {
        setskillList([...skillList, {
            name: '',
            rating: 0,
        }]);
    };

    const RemoveSkill = () => {
        if (skillList.length > 1) {
            setskillList(skillList => skillList.slice(0, skillList.length - 1));
        }
    };

    useEffect(() => {
        setResumeInfo({
            ...resumeInfo,
            skills: skillList
        });
    }, [skillList, resumeInfo]);
   
    const onSave = () => {
        setLoading(true);
        const data = {
            data: {
                skills: skillList
            }
        };
        
        GlobalApi.UpdateResumeDetail(params.resumeId, data)
            .then((res) => {
                setLoading(false);
                toast.success('Skills saved successfully');
            })
            .catch((err) => {
                setLoading(false);
                toast.error('Failed to save skills');
              
            });
    };
    
    const handleChange = (index, name, value) => {
        const newEntries = skillList.slice();
        newEntries[index][name] = value;
        setskillList(newEntries);
    };

    return (
        <>
            <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
                <h2 className='font-bold text-lg'>Skills</h2>
                <p>Add skills for your job</p>

                <div>
                    {skillList.map((item, index) => (
                        <div key={index} className='flex justify-between border p-2 rounded-lg mt-2'>
                            <div className='mt-2 w-full mr-4'>
                                <label>Skill Name</label>
                                <Input
                                    type="text"
                                    name="name"
                                    value={item.name}
                                    onChange={(e) => handleChange(index, 'name', e.target.value)}
                                    placeholder="Enter skill name"
                                />
                            </div>
                            <div className="flex items-center">
                                <Rating 
                                    style={{ maxWidth: 170 }} 
                                    value={item.rating}
                                    onChange={(v) => handleChange(index, 'rating', v)} 
                                />
                            </div>
                        </div>
                    ))}
                    <div className='mt-4'>
                        <div className='flex justify-between'>
                            <div className='flex gap-2'>
                                <Button variant="outline" onClick={AddSkill} className="text-primary"> + Add More Skill</Button>
                                <Button variant="outline" onClick={RemoveSkill} className="text-primary" disabled={skillList.length <= 1}> - Remove</Button>
                            </div>
                            <Button disabled={loading} onClick={onSave}> 
                                {loading ? <LoaderCircle className='mr-2 animate-spin' /> : null}
                                {loading ? 'Saving...' : 'Save'}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills;