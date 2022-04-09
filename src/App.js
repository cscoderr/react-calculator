import {useState, useEffect} from 'react';


import Button from './components/Button';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonWrapper from './components/ButtonWrapper';

const buttonValues = [
    [7, 8, 9, '*'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    ['.', 0, 'C', '='],
];


const App = () => {
    const [displayValue, setDisplayValue] = useState(0);
    const [sign, setSign] = useState('');
    const [secondData, setSecondData] = useState(0);

    const numClickHandler = (e) => {
        e.preventDefault();
        const value = e.target.innerHTML;

        setDisplayValue((prevValue) => prevValue === 0 ? value : prevValue + value);

    }

    const signClickHandler = (e) => {
        e.preventDefault();
        const value = e.target.innerHTML;

        setDisplayValue('');
        setSecondData(displayValue);
        setSign(value);

    }

    const calculateClickHandler = (e) => {
        e.preventDefault();

        const result = eval(`${secondData} ${sign} ${displayValue}`);
        setDisplayValue(result);

    }

    const clearClickHandler = (e) => {
        e.preventDefault();
        setDisplayValue(0);
        setSecondData(0);
        setSign('');

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
                        return <Button key={i} className={btn === '=' ? 'equals' : ''} value={btn} buttonClicked={ btn === '+' || btn === '-' || btn === '*' ? signClickHandler : btn === '=' ? calculateClickHandler : btn === 'C' ? clearClickHandler :  numClickHandler }/>
                    })
                }
            </ButtonWrapper>
            
        </Wrapper>
    );
}

export default App;