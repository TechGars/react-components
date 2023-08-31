import classNames from "classnames";
import React, { HTMLAttributes, useEffect, useRef, useState } from "react";
import { scrollIntoView } from "seamless-scroll-polyfill";

type Variant = 'standard' | 'fade-in' | 'scroll' | 'auto-play'

type carouselProps = HTMLAttributes<HTMLDivElement> & {
    variant: Variant
    children: React.ReactNode[]
}

type autoPlay = {
    variant: 'auto-play'
    /** autoplay interval time in seconds */
    interval: number
    style?: 'linear' | 'random'
}

type noneAutoPlay = {
    variant: Exclude<Variant, 'auto-play'>
}





export function Carousel(props:carouselProps & (autoPlay | noneAutoPlay)){

    const { className, children, variant } = props

    const isScrollVariant = variant === 'scroll'
    const isAutoplayVariant = variant === 'auto-play'
    const isFadeInVariant = variant === 'fade-in'

    const [indexOfDisplayedContent, setIndexOfDisplayedContent] = useState(0)
    //NOTE: questionable
    const [shouldFadeInContent, setShouldFadeInContent] = useState(false)
    const contentParentRef = useRef<HTMLDivElement>(null)

    //NOTE: observer intersecting target element
    const { target: observerElementTarget } = useIntersectionObserver('.content', {
        threshold:.5,
        root:contentParentRef?.current
    })



    useEffect(() => {

        let contentLoadTimeout:NodeJS.Timeout
        let autoPlayTimer:NodeJS.Timer

        //TODO: set animation delay for fade in animation
        console.log(variant)
        if(isFadeInVariant){
            setShouldFadeInContent(true)
            contentLoadTimeout = setTimeout(() => setShouldFadeInContent(false), 200)
        }

        if(isAutoplayVariant){

            autoPlayTimer = setInterval(() => {

                const randomContentIndex = children._getRandomIndex()
                
                if(randomContentIndex !== indexOfDisplayedContent ) return setIndexOfDisplayedContent(prev => randomContentIndex)
                return setIndexOfDisplayedContent(prev => children._getRandomIndex())

            }, props.interval * 1000)
            
        }

        if(observerElementTarget){
            setIndexOfDisplayedContent(Number(observerElementTarget.id))
        }

        return () => {
            clearTimeout(contentLoadTimeout)
            clearInterval(autoPlayTimer)
        }
        
    },[indexOfDisplayedContent, observerElementTarget])


    const handleSwitchContent = (index:number) => {
        setIndexOfDisplayedContent(index)
        scrollActiveElementToView(index)
    }

    const scrollActiveElementToView = (index:number) => {
        const element = document.getElementById(index.toString())

        if(element instanceof Element){
            scrollIntoView(element, {behavior:'smooth', block:'nearest', inline:'center'})
        }
    }

    
    return( 
        <div 
             className={classNames([
                 "w-full h-full flex flex-col justify-center overflow-hidden gap-5 p-5 bg-gray-200", 
                 className
             ])}
             {...props}
         >

            <div 
                ref={contentParentRef}
                onLoad={() => setShouldFadeInContent(true)}
                className={classNames([
                    `relative flex w-full h-full items-center scroll-smooth overflow-x-auto snap-x snap-mandatory scrollbar-none gap-5 opacity-30 transition ease duration-500 delay-200`,
                    shouldFadeInContent && 'opacity-100',

                ])}
            >
                
                {
                    isScrollVariant
                        ? children.map(
                            (child, index) => (
                                <div 
                                    key={index} 
                                    id={index.toString()} 
                                    className={classNames([
                                        "relative content flex-shrink-0 snap-center flex w-full h-full justify-center items-center transition ease duration-[300]",
                                        
                                    ])}
                                >
                                    {child}
                                </div>
                            )
                            )
                        : (
                            <div 
                                id={indexOfDisplayedContent.toString()} 
                                className={classNames([
                                    "content flex w-full h-full justify-center items-center transition ease duration-300",
                                ])}
                            >
                                {children[indexOfDisplayedContent]}
                            </div>
                        )
                }

            </div>
                

            {
                isAutoplayVariant 
                    ? null
                    : (
                        <div className="navigation-dots w-full flex justify-evenly">
                        {
                            children.map((node, index) => {

                                return(

                                    <IndicatorDot 
                                        key={index} 
                                        onClick={() => handleSwitchContent(index)}
                                        active={indexOfDisplayedContent === index}
                                    />

                                )
                            })
                        }
                        </div>
                    )
            }
           
        </div>
    )

}


function IndicatorDot(
    {active, color, ...props}
        :HTMLAttributes<HTMLDivElement> 
        & {
            active:boolean
        }
    
){

    return(
        <div 
            className={classNames([
                "circle h-5 w-5 rounded-full bg-gray-600 brightness-200 cursor-pointer",
                active && 'brightness-50'
            ])} 
            {...props}
        />
    )
}


export function useIntersectionObserver(observable:string, options?:{threshold?:number, rootMargin?:string, root?:Element | null}){

    const [isIntersecting, setIsIntersecting] = useState(false)
    const [target, setIntersectingTarget] = useState<Element|null>(null)
    const [boundingClientRect, setBoundingClientRect] = useState<DOMRectReadOnly | null>(null)
    const [intersectingRation, setIntersectingRatio] = useState<number>(0)

    useEffect(() => {
        
        const observer = new IntersectionObserver((entries) => {

            entries.forEach(element => {

                if(element.isIntersecting){ 
                    setIsIntersecting(true)
                    setIntersectingTarget(element.target)
                    setBoundingClientRect(element.boundingClientRect)
                    setIntersectingRatio(prev => element.intersectionRatio)
                }
            })
        },options)
    
        const content = document.querySelectorAll(`${observable}`)

        content.forEach(element => {
            observer.observe(element)
        })

        return () => observer.disconnect()
    },[])

    return {isIntersecting, target, boundingClientRect, intersectingRation}
}