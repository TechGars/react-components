import React, { ComponentPropsWithRef, HTMLAttributes, Ref, forwardRef, useEffect, useRef, useState } from 'react';
import classNames from "classnames"
import { Icon } from '../../dynamicIcon';

type variant = 'up' | 'down' | 'right' | 'left' | 'scale';
type size = 'sm' | 'md' | 'lg'

type baseProps = {
    variant?:variant, 
    backdrop?:boolean
    glass?: boolean
    isOpen?:boolean
    defaultOpen?:boolean
    close:() => void
}


type backdrop = {
    backdrop?:true

    /** the size of background blur to apply behind the modal if backdrop props is true*/
    blur?:size
    /** how dark of a background to apply behind the modal if backdrop props is true*/
    opacity?:size
}

type backdropNone = {
    backdrop?:false
    blur?:never
    /** how dark of a background to apply behind the modal if backdrop props is true*/
    opacity?:never
}

type glassType = {
    glass?:true
    /** the size of blur to apply to the modal if glass prop is true*/
    glassBlur?:size
}

type standardType = {
    glass?:false
    glassBlur?:never
}

export type dialogProps = ComponentPropsWithRef<'dialog'> & baseProps & (backdrop | backdropNone) & (standardType | glassType)
// export type dialogProps = HTMLAttributes<HTMLDialogElement> & baseProps & (backdrop | backdropNone) & (standardType | glassType)


export const Popup = forwardRef((props:dialogProps, ref:Ref<HTMLDialogElement> ) => {

    const {className, children, variant='down', glass, isOpen, defaultOpen, backdrop, close, ...rest} = props
    const testRef = useRef<HTMLDialogElement>(null)


    const [refTest, setRefTest] = useState< | HTMLDialogElement | null>(null)

    const closeModal = () => {
        refTest?.close()
        close()
    }

    const handleClickAwayClose = (e: React.MouseEvent<Element>) => {
        if(e.target instanceof HTMLDialogElement)
        // e.target?.nodeName === 'DIALOG' && close()
            if(e.target?.nodeName === 'DIALOG') closeModal()
    }

    useEffect(() => {
        if(isOpen || defaultOpen){
            refTest?.showModal()
        }
        
    },[isOpen, refTest])

  

    const backdropBlurMap:{ [option in size]:string } = {
        sm: 'backdrop:backdrop-blur-sm',
        md: 'backdrop:backdrop-blur-md',
        lg: 'backdrop:backdrop-blur-lg',
    }
    const backdropOpacityMap:{ [option in size]:string } = {
        sm: 'backdrop:backdrop-brightness-[.75]',
        md: 'backdrop:backdrop-brightness-[.5]',
        lg: 'backdrop:backdrop-brightness-[.1]',
    }

    const animationMap:{ [option in variant]:{open:string, close:string} } = {
        up:{
            open: "translate-y-20 open:animate-modal-open",
            close: "[&:not([open])]:animate-modal-close-down"
        },
        down:{
            open: "-translate-y-20 open:animate-modal-open",
            close: "[&:not([open])]:animate-modal-close-up"
        },
        right:{
            open: "-translate-x-20 open:animate-modal-open",
            close: "[&:not([open])]:animate-modal-close-right"
        },
        left:{
            open: "translate-x-20 open:animate-modal-open",
            close: "[&:not([open])]:animate-modal-close-left"
        },
        scale:{
            open: "scale-0 open:animate-modal-scale-open",
            close: "[&:not([open])]:animate-modal-scale-close"
        },
    }

    const { open: openAnimation, close: closeAnimation } = animationMap[variant]

    const backdropBlur = backdrop && backdropBlurMap[props.blur ?? 'none']
    const backdropBrightness = backdrop && backdropOpacityMap[props.opacity ?? 'none']
    const shadowEffect = glass ? 'bg-white/[.07] shadow-button-up' : 'shadow-inset'
    const glassBackgroundBlur = glass && (backdropBlurMap[props.glassBlur ?? 'sm'])?.split(':')[1]

    return(

        <dialog
            ref={ (e) => setRefTest(e) }
            className={classNames([
                "inset-0 block opacity-0 border-[5px] border-transparent",
                'drop-shadow-scaled',
                openAnimation,
                closeAnimation,
                shadowEffect,
                glassBackgroundBlur,
                backdropBrightness,
                backdropBlur,
                className
            ])}
            onClick={ handleClickAwayClose }
            {...rest}
        >
            <div className={classNames(["relative w-ful h-full flex "])}>

                { children }

                <Icon 
                    name='x-circle' 
                    onClick={closeModal} 
                    className={classNames([
                        "absolute right-1 top-1 cursor-pointer self-start brightness-75 drop-shadow-scaled hover:brightness-100 px-1 text-3xl",

                    ])}
                />
            </div>

        </dialog>

    )
})