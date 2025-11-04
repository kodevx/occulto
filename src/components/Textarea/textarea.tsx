import React from 'react'

interface TextAreaProps {
    content: string | React.ReactNode
    styles: string
    placeholder: string
}

const TextArea: React.FC<TextAreaProps> = (props) => {

    const { content, styles, placeholder } = props;

    return (
        <div>
            <div 
                contentEditable={true}
                className={styles}
            >
                {content ? content : (
                    <div className='text-gray-300'>
                        {placeholder}
                    </div>
                )}
            </div>
        </div>
    )
}

export default TextArea;
