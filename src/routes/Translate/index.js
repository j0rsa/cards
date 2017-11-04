import injectReducer from '../../store/reducers';
import view from './components/TranslateView';
import reducer from './reducers';

export default (store) => ({
	path : 'translate',
	/*  Async getComponent is only invoked when route matches   */

	getComponent (nextState, cb) {
		/*  Webpack - use 'require.ensure' to create a split point
		 and embed an async module loader (jsonp) when bundling   */
		require.ensure([], (require) => {
			/*  Add the reducer to the store on key 'counter'  */
			injectReducer(store, { key: 'translate', reducer });
			/*  Return getComponent   */
			cb(null, view);
			/* Webpack named bundle   */
		}, 'translate');
	}
});
