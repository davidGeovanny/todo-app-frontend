import React from 'react'

export const Paneltabs = ( { 
    children,
} ) => {
    return (
        <div className="tab-content pt-5 z-depth-1">
            { children }
            
        </div>
    );
}
