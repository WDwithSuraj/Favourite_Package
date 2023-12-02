import React, {TextareaHTMLAttributes } from 'react'
interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  text: string;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    className : string,
    placeholder : string
    rows : number;
}
export const TextArea = ({text, onChange, className, placeholder, rows, value} : Props) => {
  return (
   <>
  <label htmlFor="message" className="block mb-2 text-lg font-semibold text-gray-600">{text}</label>
  <textarea onChange={onChange} value={value} placeholder={placeholder} className={className} id="message" rows={rows} ></textarea>
   </>
  )
}
