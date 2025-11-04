import React from 'react'

interface TextAreaProps {
    content: string
    styles: string
    placeholder: string
}

const TextArea: React.FC<TextAreaProps> = (props) => {

    const { content, styles, placeholder } = props;

    return (
        <div>
            <textarea 
                placeholder={placeholder} 
                className={styles}
            >
                {content}
            </textarea>
        </div>
    )
}

export default TextArea;
