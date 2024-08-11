import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isTextArea?: boolean;
}

export default function Input({ isTextArea = false, ...props }: InputProps) {
  const baseStyle = `
    text-gray-100 bg-slate-900/50 backdrop-blur-xl backdrop-saturate-200 
    border-2 border-gray-800 px-3 py-4 text-sm rounded-xl 
    hover:bg-slate-900/70 hover:border-gray-700 
    focus:bg-slate-900/80 focus:border-gray-500 focus:outline-none
  `;

  if (isTextArea) {
    return (
      <textarea
        className={`${baseStyle} resize-none w-full h-24`}
        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    );
  }

  return <input className={baseStyle} {...props} />;
}
