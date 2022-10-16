import React from 'react'
import { Card } from 'antd';
import './CustomCard.less';

export default function CustomCard({ children, className = '', ...props }) {
    return (
        <Card {...props} className={`custom-card-changes ${className}`}>
            {children}
        </Card>
    )
};