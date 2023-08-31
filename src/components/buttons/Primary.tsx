import classNames from 'classnames';
import React, { ComponentPropsWithRef } from 'react';


export function Primary({children, className, ...props}:ComponentPropsWithRef<'div'>){

    return(
        <div className={classNames(["p-5 border rounded-3xl hover:border-red-800", className])} {...props}>
            {children}
        </div>
    )
}