import React, { ComponentProps } from 'react'
interface Props extends ComponentProps<"div"> {
  text: string,
  onClick : React.MouseEventHandler;
  className : string
}
export const Button = ({text, onClick, className} :Props ) => {
  return (
        <>
           <button onClick={onClick} type="button" className={className} >{text}</button>
        </>
  )
}
