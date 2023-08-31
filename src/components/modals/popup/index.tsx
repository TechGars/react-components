import React, { HTMLAttributes, Ref, forwardRef } from 'react';
import classNames from "classnames"

type variant = 'up' | 'down' | 'right' | 'left' | 'scale';
type blurSize = 'sm' | 'md' | 'lg' | 'none'
type backdropBrightness = 'sm' | 'md' | 'lg' | 'none'

export const Popup = forwardRef(function(
    {className, children, variant='down', blur='none', backdrop='none', close, ...rest}
    :HTMLAttributes<HTMLDialogElement> 
    & {
            variant?:variant, 
            blur?:blurSize,
            backdrop?:backdropBrightness,
            close:() => void
        }, 
        forwardedRef:Ref<HTMLDialogElement>
    )
{

    const handleClose = (e: React.MouseEvent<Element>) => {
        if(e.target instanceof HTMLDialogElement)
        e.target?.nodeName === 'DIALOG' && close()
    }

    const backdropBlurMap = {
        'sm': 'backdrop:backdrop-blur-sm',
        'md': 'backdrop:backdrop-blur-md',
        'lg': 'backdrop:backdrop-blur-lg',
    }
    const backdropOpacityMap = {
        'sm': 'backdrop:backdrop-brightness-[.75]',
        'md': 'backdrop:backdrop-brightness-[.5]',
        'lg': 'backdrop:backdrop-brightness-[.1]',
    }

    const animationMap = {
        'up':{
            openAnimation: "translate-y-20 open:animate-modal-open",
            closeAnimation: "[&:not([open])]:animate-modal-close-down"
        },
        'down':{
            openAnimation: "-translate-y-20 open:animate-modal-open",
            closeAnimation: "[&:not([open])]:animate-modal-close-up"
        },
        'right':{
            openAnimation: "-translate-x-20 open:animate-modal-open",
            closeAnimation: "[&:not([open])]:animate-modal-close-right"
        },
        'left':{
            openAnimation: "translate-x-20 open:animate-modal-open",
            closeAnimation: "[&:not([open])]:animate-modal-close-left"
        },
        'scale':{
            openAnimation: "scale-0 open:animate-modal-scale-open",
            closeAnimation: "[&:not([open])]:animate-modal-scale-close"
        },
    }

    const { openAnimation, closeAnimation } = animationMap[variant]
    const backdropBlur = backdropBlurMap[blur]
    const backdropBrightness = backdropOpacityMap[backdrop]

    return(

        <dialog 
            ref={forwardedRef}
            className={classNames([
                "inset-0 block opacity-0 rounded-lg shadow-2xl shadow-gray-950", 
                openAnimation,
                closeAnimation,
                backdropBlur,
                backdropBrightness,
                className
            ])}
            onClick={handleClose}
            {...rest}
        >
            <div className={classNames(["relative w-ful h-full"])}>

                { children }

                <button 
                    onClick={close}
                    className="absolute right-1 top-1 cursor-pointer flex items-center justify-center w-[5%] bg-dark-grey bg-clip-text mix-blend-difference text-transparent invert grayscale" 
                >
                    X
                </button>
            </div>

        </dialog>

    )
})