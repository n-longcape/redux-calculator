import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions'
import NumBtn from '../components/NumBtn';
import PlusBtn from '../components/PlusBtn';
import Result from '../components/Result';
import ResetBtn from '../components/ResetBtn';
import MibnusBtn from '../components/MinusBtn';
import TimesBtn from '../components/TimesBtn';
import DevideBtn from '../components/DevideBtn';
import EqualBtn from '../components/EqualBtn';

class CalculatorContainer extends Component {
    render() {
        const { calculator, actions } = this.props;
        return (
            <div>
               <div>
                    <NumBtn n={1} onClick={() => actions.onNumClick(1)} />
                    <NumBtn n={2} onClick={() => actions.onNumClick(2)} />
                    <NumBtn n={3} onClick={() => actions.onNumClick(3)} />
                </div>
                <div>
                    <NumBtn n={4} onClick={() => actions.onNumClick(4)} />
                    <NumBtn n={5} onClick={() => actions.onNumClick(5)} />
                    <NumBtn n={6} onClick={() => actions.onNumClick(6)} />
                </div>
                <div>
                    <NumBtn n={7} onClick={() => actions.onNumClick(7)} />
                    <NumBtn n={8} onClick={() => actions.onNumClick(8)} />
                    <NumBtn n={9} onClick={() => actions.onNumClick(9)} />
                </div>
                <div>
                    <NumBtn n={0} onClick={() => actions.onNumClick(0)} />
                    <ResetBtn onClick={actions.onResetClick} />
                    <EqualBtn onClick={actions.onEqualClick} />
                </div>
                <div>
                    <PlusBtn onClick={actions.onPlusClick} />
                    <MibnusBtn onClick={actions.onMinusClick} />
                    <TimesBtn onClick={actions.onTimesClick} />
                    <DevideBtn onClick={actions.onDevideClick} />
                </div>
                <Result result={calculator.showingResult ? calculator.resultValue : calculator.inputValue} />
            </div>
        );
    }
}

const mapState = (state, ownProps) => ({
    calculator: state.calculator,
  });

  function mapDispatch(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch),
    };
  }  

export default connect(mapState, mapDispatch)(CalculatorContainer);