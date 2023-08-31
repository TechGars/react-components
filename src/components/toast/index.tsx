
import React, { ComponentPropsWithRef, useEffect, useState } from "react";
import classNames from "classnames";


interface ToastProps {
    message:string|null|undefined
    duration?: number
    close: () => void
    className?:string
}


export function Toast({ message, close, duration, className }:ToastProps){
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {

        if(message){
            setIsOpen(true)
            setTimeout(() => {
                handleClose()
            }, duration ?? 3000);
        }

    }, [message])
    
    const handleClose = () => {

        setIsOpen(false)

        setTimeout(() => {
                close()
        }, duration ?? 3000);
    }
    
    return(
        <div 
            className={
                classNames([
                    `absolute top-0 -translate-y-full transition ease duration-300 flex justify-between p-2 drop-shadow-2xl`,
                    isOpen && 'translate-y-1/2', 
                    className 
                ])
            }
        >
            <span className={classNames([`flex-1 text-center p-3`])}>
                { message }
            </span>

            <CloseButton onClick={ handleClose }/>

        </div>
    )
}

export function CloseButton({ onClick, className }:ComponentPropsWithRef<'div'>){

    const Line = ({className}:{className?:string}) => <div className={classNames([`border border-solid absolute top-[50%] w-full`, className])}/>
    
    return(
        <div onClick={ onClick } className={classNames([`cursor-pointer w-[1rem] h-[1rem] rotate-[45deg] flex justify-center items-center p-2`, className])}>
            <Line/>
            <Line className={`rotate-[90deg]`}/>
        </div>
    )
}