import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { useContext } from 'react';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { Brain, LoaderCircle } from 'lucide-react';
import {
  Editor,
  EditorProvider,
  BtnBold,
  BtnItalic,
  Toolbar,
  BtnUnderline,
  BtnStrikeThrough,
  Separator,
  BtnNumberedList,
  BtnBulletList,
  BtnLink,
  BtnClearFormatting,
  BtnStyles
} from 'react-simple-wysiwyg';
import { toast } from 'sonner';
import { AIChatSession } from './../../service/AIModal';

const PROMPT = 'position title: {positionTitle}, Depends on position title give me 5-7 bullet points for my experience in resume (Please do not add experience level and No JSON array), give me result in HTML tags';

function RichTextEditor({ onRichTextEditorChange, index, defaultValue = '' }) {
  const [value, setValue] = useState(defaultValue);
  const [loading, setLoading] = useState(false);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const GenerateSummeryFromAI = async () => {
    if (!resumeInfo?.experience?.[index]?.title) {
      toast('Please Add Position Title');
      return;
    }
    
    setLoading(true);
    try {
      const prompt = PROMPT.replace('{positionTitle}', resumeInfo.experience[index].title);
      const result = await AIChatSession.sendMessage(prompt);
      const response = result.response.text();
      
    
      const cleanResponse = response.replace('[', '').replace(']', '');
      setValue(cleanResponse);
      
      setResumeInfo((prev) => {
        const updatedExperience = [...prev.experience];
        updatedExperience[index].workSummary = cleanResponse;
        return { ...prev, experience: updatedExperience };
      });
      
      toast.success('Summary generated successfully!');
    } catch (error) {
      toast.error('Failed to generate summary.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className='flex justify-between items-center mb-2'>
        <label className='text-xs'>Summary</label>
        <Button 
          variant='outline'
          size='sm'
          onClick={GenerateSummeryFromAI}
          disabled={loading}
          className="flex gap-2 border-primary text-primary"
        >
          {loading ? 
            <LoaderCircle className='animate-spin h-4 w-4'/> : 
            <>
              <Brain className='h-4 w-4'/> Generate use AI
            </>
          }
        </Button>
      </div>
      <EditorProvider>
        <Editor 
          value={value} 
          onChange={(e) => {
            setValue(e.target.value);
            onRichTextEditorChange(e);
          }}
        >
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
            <BtnLink />
            <Separator />
            <BtnClearFormatting />
            <Separator />
            <BtnStyles />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
}

export default RichTextEditor;