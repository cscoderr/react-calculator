import {useState, useEffect} from 'react';


import Button from './components/Button';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonWrapper from './components/ButtonWrapper';

const buttonValues = [
    [7, 8, 9, 'X'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    ['.', 0, '='],
];


const App = () => {
    const [displayValue, setDisplayValue] = useState(0);

    const numClickHandler = (e) => {
        e.preventDefault();
        const value = e.target.innerHTML;

        setDisplayValue((prevValue) => prevValue === 0 ? value : prevValue + value);

    }

    useEffect(() => {
        setDisplayValue(0);
    }, [])
    return (
        <Wrapper>
            <Screen value={displayValue}/>
            <ButtonWrapper>
                {
                    buttonValues.flat().map((btn, i) => {
                        return <Button key={i} className={btn === '=' ? 'equals' : ''} value={btn} buttonClicked={numClickHandler}/>
                    })
                }
            </ButtonWrapper>
            
        </Wrapper>
    );
}

export default App;