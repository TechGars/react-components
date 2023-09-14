import React, { HTMLAttributes, Ref, forwardRef } from 'react';
import classNames from "classnames";


type drawerPositions = "left-center" | "right-center" | "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"
type variant = "top" | "right" | "bottom" | "left"
type size = 'sm' | 'md' | 'lg'


interface baseProps extends HTMLAttributes<HTMLSpanElement> {
    isOpen :boolean
    variant: variant
    positioned?: drawerPositions
    closeDrawer: () => void
}



type backdrop = {
    
    backdrop:true
    /** the size of background blur to apply behind the modal if backdrop props is true*/
    blur?:size
    /** how dark of a background to apply behind the modal if backdrop props is true*/
    opacity?:size
}

type backdropNone = {
    
    backdrop?:false
    blur?:never
    opacity?:never
}

type glassType = {
    
    glass?:true
    /** the size of blur to apply to the modal if glass prop is true*/
    glassBlur?:size
}

type standardType = {

    glass?:never
    glassBlur?:never
}


export type DrawerProps = baseProps & (backdrop | backdropNone) & (glassType | standardType)

export const Drawer = forwardRef((props: DrawerProps, ref:Ref<HTMLSpanElement>) => {

    const {
        isOpen, 
        children, 
        className, 
        positioned,
        variant,
        backdrop,
        glass,
        closeDrawer,
        ...otherProps
    } = props

    const userSetPositionMap:{ [option in drawerPositions]:string} = {
        "top-left": "items-start justify-start",
        "top-center": "items-start justify-center",
        "top-right": "items-start justify-end",
        "bottom-left": "items-end justify-start",
        "bottom-center": "items-end justify-center",
        "bottom-right": "items-end justify-end",
        "left-center": "items-center justify-start",
        "right-center": "items-center justify-end",
    }

    const openAnimationMap:{ [option in variant]:{open:string, close:string, autoPositioning:string}} = {
        top: { open:'translate-y-0', close:'-translate-y-full', autoPositioning:'justify-start items-start' },
        right: { open:'', close:'translate-x-full', autoPositioning:'justify-end items-start' },
        bottom: { open:'translate-y-0', close:'translate-y-full', autoPositioning:'justify-start items-end' },
        left: { open:'translate-x-0', close:'-translate-x-full', autoPositioning:'justify-start items-start' },
    }

 
    const backdropBlurMap:{ [option in size]:string } = {
        sm: 'backdrop-blur-sm',
        md: 'backdrop-blur-md',
        lg: 'backdrop-blur-lg',
    }

    const backdropOpacityMap:{ [option in size]:string } = {
        sm: 'backdrop-brightness-[.75]',
        md: 'backdrop-brightness-[.5]',
        lg: 'backdrop-brightness-[.1]',
    }

    const userSetPosition = positioned && userSetPositionMap[positioned]
    const {open:openAnimation, close:closeAnimation, autoPositioning} = openAnimationMap[variant]

    const backdropBrightness = props.backdrop && backdropOpacityMap[props.opacity ?? 'sm']
    const backdropBlur = props.backdrop && props.blur && backdropBlurMap[props.blur]
    const glassBackgroundBlur = glass && backdropBlurMap[props.glassBlur ?? 'sm']

    const hideDrawerOnClose = !isOpen && 'animate-hide-drawer'

    const handleClose = (e: React.MouseEvent<Element>) => {
        if(e.target instanceof HTMLSpanElement)
            e.target?.id === 'drawer' && closeDrawer()
    }


    return(
        <span 
            id='drawer'
            ref={ ref }
            className={classNames([
                "absolute h-full w-full flex overflow-hidden border border-red-500",
                autoPositioning,
                userSetPosition,
                backdropBrightness,
                backdropBlur,
                hideDrawerOnClose
            ])} 
            onClick={ handleClose }
        >

            <span 
                className={classNames([
                    "flex justify-center items-center transition ease-in-out duration-[1500ms]",
                    glass && 'bg-white/[.07] shadow-button-up',
                    isOpen ? openAnimation : closeAnimation,
                    glassBackgroundBlur,
                    className
                ])}

                {...otherProps}
            >
                {children}

            </span>
        </span>
    )

})

