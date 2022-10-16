import React from 'react'
import './CustomIconContainer.less';

export const CustomIconContainer = ({ children, status = false }) => {
    return (
        <span className={status && 'icon-active-container'}>
            {children}
        </span>
    )
}
