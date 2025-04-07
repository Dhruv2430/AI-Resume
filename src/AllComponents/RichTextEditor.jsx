import React, { useState, useEffect } from 'react';
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

const RichTextEditor = ({ onRichTextEditorChange, index, defaultValue = '' }) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleChange = (e) => {
    setValue(e.target.value);
    onRichTextEditorChange(e, index); // pass index if needed
  };

  return (
    <div>
      <EditorProvider>
        <Editor value={value} onChange={handleChange}>
        onRichTextEditorChange(e)
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
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
};

export default RichTextEditor;
