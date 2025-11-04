import React from 'react';

interface ButtonProps {
    styles: string
    disabled: boolean
    children?: React.ReactNode
    onClick: () => void 
}

const Button: React.FC<ButtonProps> = (props) => {

    const {
        children,
        styles,
        ...rest
    } = props;

    return (
        <button className={styles} {...rest}>
            {children}
        </button>
    )
}

export default Button;
