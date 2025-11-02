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
            className={'h-14 w-[700px] text-lg placeholder-gray-300 font-medium rounded-full p-5 shadow-gray-300 shadow-xl outline-none'/*styles*/}
        />
    )
}

export default Textfield;
