import React, { ComponentPropsWithoutRef, InputHTMLAttributes } from 'react';
import classNames from "classnames"


type Variant = 'standard' | 'rounded' | 'underline'
type roundness = 'sm' | 'md' | 'lg'

type generalProps = {
    variant:Variant
}

type rounded = {
    variant: 'rounded'
    roundness: roundness
}

type notRounded = {
    variant: 'standard' | 'underline'
}

type inputProps = InputHTMLAttributes<HTMLInputElement> & generalProps & (rounded | notRounded)
type textAreaProps = ComponentPropsWithoutRef<'textarea'> & generalProps & (rounded | notRounded)

export function LabeledInput(props:inputProps ){
    const { name, type, variant, className,  ...rest } = props

    const borderStyleMap:{ [variant in Variant] :string } = {
        standard:'border-2',
        rounded: 'border-2',
        underline: 'border-b-2 border-dark-grey'
    }

    const roundedBorderSize = {
        sm: 'rounded-lg',
        md: 'rounded-2xl',
        lg: 'rounded-3xl'
    }
    
    const shadowMap = {
        standard: 'drop-shadow-standard shadow-inner',
        underline: 'drop-shadow-underline',
    }

    const borderStyle = borderStyleMap[variant]
    const borderRoundness = variant === 'rounded' && roundedBorderSize[props.roundness]
    const dropShadow = variant === 'underline' ? shadowMap['underline'] : shadowMap['standard']

    return(
        <div className={classNames([`relative flex flex-col-reverse flex-1 group/input bg-inherit`])}>
           
            <input 
                required
                type={ type } 
                name={ name } 
                id={ name } 
                autoComplete="_"
                className={classNames([
                    `peer border-transparent px-[1rem] w-full h-[3rem] transition ease duration-500`,
                    `focus:outline-none focus:ring`,
                    borderStyle,
                    borderRoundness,
                    dropShadow,
                    className
                ])}
                {...rest}
            />

            <label 
                id={ name }
                htmlFor={ name } 
                className={classNames(`
                    absolute translate-y-[60%] w-full h-full translate-x-[7%] uppercase tracking-[.2rem] transition ease duration-500`,

                    'bg-dark-grey bg-clip-text text-transparent invert grayscale mix-blend-difference',
                    
                    'group-focus-within/input:translate-y-3 group-focus-within/input:translate-x-[5%]',
                    
                    'peer-valid:translate-y-3 peer-valid:translate-x-[5%]',
                )}
            >
                { name }
            </label>
            
        </div>
    )
}

export function LabeledTextArea(props:textAreaProps){

    const { name, variant, className, ...rest } = props

    const borderStyleMap:{ [variant in Variant] :string } = {
        standard:'border-2',
        rounded: 'border-2',
        underline: 'border-b-2 border-dark-grey'
    }

    const roundedBorderSize = {
        sm: 'rounded-lg',
        md: 'rounded-2xl',
        lg: 'rounded-3xl'
    }
    
    const shadowMap = {
        standard: 'drop-shadow-standard shadow-inner',
        underline: 'drop-shadow-underline',
    }

    const borderStyle = borderStyleMap[variant]
    const borderRoundness = variant === 'rounded' && roundedBorderSize[props.roundness]
    const dropShadow = variant === 'underline' ? shadowMap['underline'] : shadowMap['standard']


    return(
        <div className={classNames([`relative flex flex-col-reverse flex-1 group/input`])}>
           
            <textarea 
                required
                name={ name } 
                id={ name } 
                className={classNames([
                    `peer border-transparent border-solid px-[1rem] w-full transition ease duration-500`,
                    `focus:outline-none focus:ring`,
                    borderStyle,
                    borderRoundness,
                    dropShadow,
                    className
                ])}
                {...rest}
            />

            <label 
                id={ name }
                htmlFor={ name } 
                className={classNames(`
                    absolute translate-y-1/3 translate-x-[12%] uppercase text-sm mb-[1rem] tracking-[.2rem] transition ease duration-500`,
                    'group-focus-within/input:-translate-y-[5.5rem] group-focus-within/input:translate-x-2',
                    'peer-valid:translate-y-5 peer-valid:translate-x-0'
                )}
            >
                { name }
            </label>
            
        </div>
    )
}
