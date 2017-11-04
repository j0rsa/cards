import { combineReducers } from 'redux';
import TranslateReducer from './TranslateReducer';

export const rootReducer = combineReducers({
	translation: TranslateReducer
});

export default rootReducer;
