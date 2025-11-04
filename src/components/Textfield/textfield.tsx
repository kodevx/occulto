import React from 'react';

interface TextfieldProps {
    value: string,
    placeholder: string
    styles: string
    handleOnChange: (value: string) => void 
}

const Textfield: React.FC<TextfieldProps> = (props) => {

    const { 
        value,
        placeholder,
        handleOnChange,
        styles 
    } = props; 

    return (
        <input 
            type='text' 
            value={value} 
            onChange={e => handleOnChange(e.target.value)}
            placeholder={placeholder}
            className={styles}
        />
    )
}

export default Textfield;
