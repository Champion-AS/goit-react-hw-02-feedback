import React from 'react';
import s from './Feedback.module.css'

const Feedback = ({ options, onLeaveFeedback }) => {
    <div>
        {options.map(option => {
            <button
                key={option}
                className={s.startBtn}
                type="button"
                name={option}
                onClick={e => onLeaveFeedback(e)}>
                {options.charAt(0).toUpperCase() + option.slice(1)}
            </button>
        })}
    </div>
};
export default Feedback;
