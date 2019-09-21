import * as actionTypes from '../utils/actionTypes';

export const onNumClick = (number) => ({
    type: actionTypes.INPUT_NUMBER,
    number,
});

export const onPlusClick = () => ({
    type: actionTypes.PLUS,
});

export const onMinusClick = () => ({
    type: actionTypes.MINUS,
});


export const onTimesClick = () => ({
    type: actionTypes.TIMES,
});

export const onDevideClick = () => ({
    type: actionTypes.DEVIDE,
});

export const onResetClick = () => ({
    type: actionTypes.RESET,
});  

export const onEqualClick = () => ({
    type: actionTypes.EQUAL,
});  