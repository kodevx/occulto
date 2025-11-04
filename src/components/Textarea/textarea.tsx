import React from 'react'
interface StylesType {
    root: string
    placeholder: string
}

interface TextAreaProps {
    content: string | React.ReactNode
    styles: StylesType
    placeholder: string
}

const TextArea: React.FC<TextAreaProps> = (props) => {

    const { 
        content, 
        styles, 
        placeholder
    } = props;

    return (
        <div>
            <div className={styles.root}>
                {content ? content : (
                    <div className={styles.placeholder}>
                        {placeholder}
                    </div>
                )}
            </div>
        </div>
    )
}

export default TextArea;
