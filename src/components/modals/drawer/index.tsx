import React, { HTMLAttributes } from 'react';
import classNames from "classnames";


type drawerPositions = ["left-center" , "right-center" , "top-left" , "top-center" , "top-right" , "bottom-left" , "bottom-center" , "bottom-right"]
type openVariant = ["top" , "right" , "bottom" , "left"]
type blurSize = ['sm' , 'md' , 'lg' , 'none']
type backdropBrightness = blurSize

type DrawerProps = {
    overlayNone?:boolean
    isOpen :boolean
    openVariant: openVariant[number]
    positioned?: drawerPositions[number]
    closeDrawer: () => void
}


type backdrop = {
    backdrop:true
    bdBlur?: blurSize[number]
    bdDark?: backdropBrightness[number]
}

type backdropNone = {
    backdrop?:false
}
export function Drawer(props:HTMLAttributes<HTMLSpanElement> & DrawerProps & (backdrop | backdropNone)){

    const {
        isOpen, 
        children, 
        className, 
        positioned,
        openVariant,
        closeDrawer,
        ...otherProps
    } = props

    const userSetPositionMap = {
        "top-left": "items-start justify-start",
        "top-center": "items-start justify-center",
        "top-right": "items-start justify-end",
        "bottom-left": "items-end justify-start",
        "bottom-center": "items-end justify-center",
        "bottom-right": "items-end justify-end",
        "left-center": "items-center justify-start",
        "right-center": "items-center justify-end",
    }

    const openAnimationMap = {
        'top': { openAnimation:'translate-y-0', closeAnimation:'-translate-y-full', autoPositioning:'justify-start items-start' },
        'right': { openAnimation:'translate-x-0', closeAnimation:'translate-x-full', autoPositioning:'justify-end items-start' },
        'bottom': { openAnimation:'translate-y-0', closeAnimation:'translate-y-full', autoPositioning:'justify-start items-end' },
        'left': { openAnimation:'translate-x-0', closeAnimation:'-translate-x-full', autoPositioning:'justify-start items-start' },
    }

 
    const backdropBlurMap = {
        'sm': 'backdrop-blur-sm',
        'md': 'backdrop-blur-md',
        'lg': 'backdrop-blur-lg',
    }
    const backdropOpacityMap = {
        'sm': 'backdrop-brightness-[.75]',
        'md': 'backdrop-brightness-[.5]',
        'lg': 'backdrop-brightness-[.1]',
        'standard': 'backdrop-brightness-[.90]'
    }

    const userSetPosition = positioned && userSetPositionMap[positioned]
    const {openAnimation, closeAnimation, autoPositioning} = openAnimationMap[openVariant]

    const backdropBlur = props.backdrop && props.bdBlur && backdropBlurMap[props.bdBlur]
    const backdropBrightness = props.backdrop && props.bdDark && backdropOpacityMap[props.bdDark]
    const backdropStandard = props.backdrop && !props.bdBlur && !props.bdDark && backdropOpacityMap['standard']

    const hideDrawerOnClose = !isOpen && 'animate-hide-drawer'

    const handleClose = (e: React.MouseEvent<Element>) => {
        if(e.target instanceof HTMLSpanElement)
            e.target?.id === 'drawer' && closeDrawer()
    }


    return(
        <span 
            id='drawer'
            className={classNames([
                "absolute h-full w-full flex overflow-hidden transition ease duration-300",
                autoPositioning,
                userSetPosition,
                backdropBlur,
                backdropStandard,
                backdropBrightness,
                hideDrawerOnClose
            ])} 
            onClick={ handleClose }
        >

            <span 
                className={classNames([
                    "transition ease-in-out duration-300 shadow-lg shadow-black flex justify-center items-center",
                    isOpen ? openAnimation : closeAnimation,
                    className
                ])}

                {...otherProps}
            >
                {children}

            </span>
        </span>
    )

}

