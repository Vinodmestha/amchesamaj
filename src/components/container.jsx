import React from 'react'

export default function Container({ className, children }) {
    return (
        <div className={`max-w-screen-xl mx-auto px-3 sm:px-6 lg:px-0 ${className}`}>
            {children}
        </div>
    )
}
