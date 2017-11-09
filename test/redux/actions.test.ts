import {
	enableSystemNav,
	dockSystemNav,
	setStateSystemNav,
	hideLabelsSystemNav,
	undockSystemNav,
	toggleSystemNav,
	closeSystemNav,
	openSystemNav,
	disableSystemNav,
	showLabelsSystemNav
} from '../../src/redux/actions';
import Plugin from '../../src/index';

import BR, { Plugins, BlueRainProvider, App } from '@blueeast/bluerain-os';

beforeEach(() => {
	document.body.innerHTML = '<div class="app-container">' + '</div>';
});

it('should register plugin successfully', () => {
	BR.Plugins.register(Plugin);
	const plugin = BR.Plugins.get(Plugin.slug);
	expect(plugin).toBeTruthy();
});

it('It should dispatch an action  enableSystemNav', () => {
	BR.boot();
	BR.Events.emit('plugin.window_info.resize', 'xm', 'xm');
	BR.refs.store.dispatch(enableSystemNav());
	let state = BR.refs.store.getState();
	expect(state.bluerain.systemNav.disabled).toEqual(false);
});

it('It should dispatch an action dockSystemNav', () => {
	BR.boot();
	BR.refs.store.dispatch(dockSystemNav());
	let state = BR.refs.store.getState();
	expect(state.bluerain.systemNav.docked).toEqual(true);
});

it('It should dispatch an action hideLabelsSystemNav', () => {
	BR.boot();
	BR.refs.store.dispatch(hideLabelsSystemNav());
	let state = BR.refs.store.getState();
	expect(state.bluerain.systemNav.hideLabels).toEqual(true);
});

it('It should dispatch an action undockSystemNav', () => {
	BR.boot();
	BR.refs.store.dispatch(undockSystemNav());
	let state = BR.refs.store.getState();
	expect(state.bluerain.systemNav.docked).toEqual(false);
});
it('It should dispatch an action disableSystemNav', () => {
	BR.boot();
	BR.refs.store.dispatch(disableSystemNav());
	let state = BR.refs.store.getState();
	expect(state.bluerain.systemNav.disabled).toEqual(true);
});
it('It should dispatch an action openSystemNav', () => {
	BR.boot();
	BR.refs.store.dispatch(openSystemNav());
	let state = BR.refs.store.getState();
	expect(state.bluerain.systemNav.open).toEqual(true);
});

it('It should dispatch an action closeSystemNav', () => {
	BR.boot();
	BR.refs.store.dispatch(closeSystemNav());
	let state = BR.refs.store.getState();
	expect(state.bluerain.systemNav.open).toEqual(false);
});

it('It should dispatch an action toggleSystemNav', () => {
	BR.boot();
	BR.refs.store.dispatch(toggleSystemNav());
	let state = BR.refs.store.getState();

	expect(state.bluerain.systemNav.open).toEqual(false);
});

it('It should dispatch an action showLabelsSystemNav', () => {
	BR.boot();
	BR.refs.store.dispatch(showLabelsSystemNav());
	let state = BR.refs.store.getState();
	expect(state.bluerain.systemNav.open).toEqual(true);
});

it('It should dispatch an action showLabelsSystemNav', () => {
	BR.boot();
	BR.refs.store.dispatch(showLabelsSystemNav());
	let state = BR.refs.store.getState();
	expect(state.bluerain.systemNav.open).toEqual(true);
});
