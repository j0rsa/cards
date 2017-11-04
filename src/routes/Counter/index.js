import { injectReducer } from '../../store/reducers';
import view from './containers/CounterContainer';
import reducer from './modules/Counter';

export default (store) => ({
	path : 'counter',
	/*  Async getComponent is only invoked when route matches   */
	getComponent (nextState, cb) {
		/*  Webpack - use 'require.ensure' to create a split point
		 and embed an async module loader (jsonp) when bundling   */
		require.ensure([], (require) => {
			/*  Add the reducer to the store on key 'counter'  */
			injectReducer(store, { key: 'counter', reducer });
			/*  Return getComponent   */
			cb(null, view);
			/* Webpack named bundle   */
		}, 'counter');
	}
});
