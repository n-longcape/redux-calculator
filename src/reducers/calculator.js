import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
    inputValue: 0,
    resultValue: 0,
    actionType: 'RESET',
    showingResult: false,
  };

const calculator = (state = initialAppState, action) => {
    if (action.type === actionTypes.INPUT_NUMBER) {
        return {
            ...state,
            inputValue: state.inputValue * 10 + action.number,
            showingResult: false,
        };
    } else if (action.type === actionTypes.PLUS) {
        return {
          ...state,
          inputValue: 0,
          resultValue: state.resultValue + state.inputValue,
          actionType: action.type,
          showingResult: true,
        };
    } else if (action.type === actionTypes.MINUS) {
        return {
          ...state,
          inputValue: 0,
          resultValue:  state.resultValue === 0 ? state.inputValue : state.resultValue - state.inputValue,
          actionType: action.type,
          showingResult: true,
        };
    } else if (action.type === actionTypes.TIMES) {
        return {
            ...state,
            inputValue: 0,
            resultValue: state.resultValue === 0 ? state.inputValue : state.resultValue * state.inputValue,
            actionType: action.type,
            showingResult: true,
        };
    } else if (action.type === actionTypes.DEVIDE) {
        return {
            ...state,
            inputValue: 0,
            resultValue: state.resultValue === 0 ? state.inputValue : state.resultValue / state.inputValue,
            actionType: action.type,
            showingResult: true,
        };
    } else if (action.type === actionTypes.RESET) {
        console.log(state.resultValue);
        return {
            ...state,
            inputValue: 0,
            resultValue: 0,
            showingResult: true,
        }; 
    } else if (action.type === actionTypes.EQUAL) {
        let result = 0
        if(state.actionType === actionTypes.PLUS) {
            result = state.resultValue + state.inputValue
        } else if(state.actionType === actionTypes.MINUS) {
            result = state.resultValue - state.inputValue
        } else if(state.actionType === actionTypes.TIMES) {
            result = state.resultValue * state.inputValue
        } else if(state.actionType === actionTypes.DEVIDE) {
            result = state.resultValue / state.inputValue
        }
        console.log(result)           
        return {
            ...state,
            inputValue: 0,
            resultValue: result,
            showingResult: true,
        };                           
    } else {
     return state;
    }
};

export default calculator;