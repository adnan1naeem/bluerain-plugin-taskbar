/* @flow */

// import React from 'react';
import BR,{ Plugin, bluerain } from '@blueeast/bluerain-os';
import Taskbar from './common/Taskbar';

import { getResponsiveState } from './redux/InitialState';
import { setStateSystemNav } from './redux/actions';
import reducer from './redux/reducer';
import withSystemNav from './redux/withSystemNav';

import NavAppItem from './common/Buttons/NavAppItem';
import NavDividerItem from './common/Buttons/NavDividerItem';
import NavSpacerItem from './common/Buttons/NavSpacerItem';
/**
 * Main Taskbar Plugin class.
 * @property {string} pluginName "TaskbarPlugin"
 * @property {string} slug "taskbar"
 */

class TaskbarPlugin extends Plugin {
	static withSystemNav: (Component: any) => any;
	static pluginName = 'TaskbarPlugin';

	static slug = 'taskbar';

	static initialize(config = {}, ctx:bluerain) {

		/**
	 * Higher Order component in inject `intl` prop in Component
	 * @param {Component} Component
	 * @returns {Component}
	 */
		/**
		 * Integrations
		 */
		// Components
		ctx.Components.register('NavAppItem', NavAppItem);
		ctx.Components.register('NavDividerItem', NavDividerItem);
		ctx.Components.register('NavSpacerItem', NavSpacerItem);

		/**
		 * Integrations
		 */
		// Add taskbar
		ctx.Filters.add('bluerain.system.app.layout', function taskbar(schema) {
			schema.children.unshift({ component: withSystemNav(Taskbar) });
			return schema;
		});

		ctx.Filters.add('bluerain.redux.reducers.bluerain', function AddSystemNavReducers(reducers) {
			return Object.assign({}, reducers, {
				systemNav: reducer
			});
		});

		/**
		 * Integrations
		 */
		// Add Translations
		ctx.Filters.add('bluerain.intl.messages', function eng(messages) {
			const en = require('./lang/en.ts');
			const ur = require('./lang/ur.ts');

			messages.en =  Object.assign(messages.en ? messages.en : {}, en);
			messages.ur = Object.assign(messages.ur ? messages.ur : {}, ur);

			return messages;
		});


		/**
		 * Integrations
		 */
		// Setup initial stateNavAppItem
		ctx.Filters.add('bluerain.redux.initialState', function ActivateTaskbar(state) {
			const size = ctx.Plugins.get('window-info');
			const taskbarState = getResponsiveState(size);
			return Object.assign({}, state, {
				bluerain: {
					systemNav: taskbarState
				}
			});
		});

		/**
		 * Integrations
		 */
		// When window is resized
		// 	- every time window is resized
		    ctx.Events.on('plugin.window_info.resize', (size, prevSize) => {
			const state = getResponsiveState(size);
			ctx.refs.store.dispatch(setStateSystemNav(state));
		});
	}
}

TaskbarPlugin.withSystemNav = withSystemNav;
export { withSystemNav };
export default TaskbarPlugin;
