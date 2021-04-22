import { act } from '@testing-library/react';
import { INSERT_VALUE, INCREASE, DECREASE, INITSTATE, INSERT_VALUE_EI, INSERT_VALUE_TF, INSERT_VALUE_JP } from './actionType';

export const increase = (num) => ({ type: INCREASE, num: num });
export const decrease = () => ({ type: DECREASE });
export const initstate = () => ({ type: INITSTATE });
export const insertValueJP = (value) => ({ type: INSERT_VALUE_JP, value: value });
export const insertValueEI = (value) => ({ type: INSERT_VALUE_EI, value: value });
export const insertValueTF = (value) => ({ type: INSERT_VALUE_TF, value: value });
export const insertValue = (value) => ({ type: INSERT_VALUE, value: value });
const init = {
    page_count: 0,
    total: 0,
    r_total: [],
    value_J: 0,
    value_P: 0,
    value_E: 0,
    value_I: 0,
    value_T: 0,
    value_F: 0,
    value_array: []
}

export default function testFn(state = init, action) {
    if (state === undefined) {
        return false;
    }

    switch (action.type) {
        case INSERT_VALUE:
            if (action.value == "J") {
                return {
                    ...state,
                    value_J: state.value_J + 1,
                    value_array: state.value_array.concat(action.value)
                }
            } else if (action.value == "P") {
                return {
                    ...state,
                    value_P: state.value_P + 1,
                    value_array: state.value_array.concat(action.value)
                }
            } else if (action.value == "E") {
                return {
                    ...state,
                    value_E: state.value_E + 1,
                    value_array: state.value_array.concat(action.value)
                }
            } else if (action.value == "I") {
                return {
                    ...state,
                    value_I: state.value_I + 1,
                    value_array: state.value_array.concat(action.value)
                }
            } else if (action.value == "T") {
                return {
                    ...state,
                    value_T: state.value_T + 1,
                    value_array: state.value_array.concat(action.value)
                }
            } else if (action.value == "F") {
                return {
                    ...state,
                    value_F: state.value_F + 1,
                    value_array: state.value_array.concat(action.value)
                }
            } else {
                return {
                    ...state,
                    value_array: state.value_array.concat(action.value)
                }

            }
        case INSERT_VALUE_JP:
            if (action.value == "J") {
                return {
                    ...state,
                    value_J: state.value_J + 1
                }
            } else {
                return {
                    ...state,
                    value_P: state.value_P + 1
                }
            }
        case INSERT_VALUE_EI:
            if (action.value == "E") {
                return {
                    ...state,
                    value_J: state.value_E + 1
                }
            } else {
                return {
                    ...state,
                    value_P: state.value_I + 1
                }
            }
        case INSERT_VALUE_TF:
            if (action.value == "T") {
                return {
                    ...state,
                    value_J: state.value_T + 1
                }
            } else {
                return {
                    ...state,
                    value_P: state.value_F + 1
                }
            }
        case INCREASE:
            return {
                ...state,
                page_count: state.page_count + 1,
                total: state.total + action.num,
                r_total: state.r_total.concat(action.num)
            }
        case DECREASE:
            const type = state.value_array[state.value_array.length - 1];
            const test = {
                ...state,
                page_count: state.page_count - 1,
                total: state.total - state.r_total[state.r_total.length - 1],
                r_total: state.r_total.slice(0, state.r_total.length - 1),
                value_array: state.value_array.slice(0, state.value_array.length - 1),
            }
            console.log(type)
            if (type !== "X") {
                test["value_" + type] = state["value_" + state.value_array[state.value_array.length - 1]] - 1
            }
            return test
        case INITSTATE:
            return {
                ...state,
                page_count: 0,
                total: 0,
                r_total: [],
                value_J: 0,
                value_P: 0,
                value_E: 0,
                value_I: 0,
                value_T: 0,
                value_F: 0,
                value_array: []
            }
        default:
            return state
    }
}