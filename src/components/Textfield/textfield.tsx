import React from 'react';

interface TextfieldProps {
    value: string
}

const Textfield: React.FC<TextfieldProps> = (props) => {

    const { 
        value 
    } = props; 

    return (
        <input 
            type='text' 
            value={value} 
            // className={''} 
        />
    )
}

export default Textfield;
