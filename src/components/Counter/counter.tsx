import React from 'react';
import Button from '../Button';

const MIN_COUNT = 1
const MAX_COUNT = 26;

interface CounterProps {
    value: number
    handleIncrement: () => void
    handleDecrement: () => void
}

const Counter: React.FC<CounterProps>= (props) => {

    const {
        value,
        handleIncrement,
        handleDecrement
    } = props;

    return (
        <div className='flex flex-row justify-center mt-10 md:mt-0 font-alan font-bold'>
            <div className='shadow-xl shadow-gray-300 rounded-full'>
                <Button 
                    disabled={value === MIN_COUNT} 
                    onClick={handleDecrement}
                    styles={'h-12 w-12 rounded-full bg-white active:bg-emerald-100 hover:bg-emerald-100 transition delay-50 duration-300 ease-out active:scale-50 disabled:cursor-not-allowed disabled:opacity-50'}
                >
                    {'<'}
                </Button>
                <span className='mx-3 px-0'>{value}</span>
                <Button 
                    disabled={value === MAX_COUNT} 
                    onClick={handleIncrement} 
                    styles={'h-12 w-12 rounded-full bg-white active:bg-emerald-100 hover:bg-emerald-100 transition delay-50 duration-300 ease-out active:scale-50 disabled:cursor-not-allowed disabled:opacity-50'}
                >
                    {'>'}
                </Button>
            </div>
        </div>
    )
}

export default Counter;