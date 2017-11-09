# Taskbar Plugin

Adds internationalization through (react-intl-redux)[https://github.com/ratson/react-intl-redux].

## Usage

Run the following command in the plugin directoy:

### Installation

```shell
npm i --save @blueeast/bluerain-plugin-taskbar
```

Then in your boot function, pass the plugin like this:

```javascript
import BR from '@blueeast/bluerain-os';
import TaskbarPlugin from '@blueeast/bluerain-plugin-taskbar';

BR.boot({
	plugins: [TaskbarPlugin]
})
```

### Initializing  Plugin

Boot you function like this:

```javascript
BR.boot({
	
	plugins: [IntlPlugin]
})

```



### Add Task bar Fillter

	ctx.Filters.add('bluerain.system.app.layout', function taskbar(schema) {
				schema.children.unshift({ component: withSystemNav(Taskbar) });
				return schema;
			});
	
	ctx.Filters.add('bluerain.redux.reducers.bluerain', function           
	AddSystemNavReducers(reducers) {
				return Object.assign({}, reducers, {
					systemNav: reducer
				});
		});
### Adding Translations

	ctx.Filters.add('bluerain.intl.messages', function eng(messages) {
				const en = require('./lang/en.ts');
				const ur = require('./lang/ur.ts');
	
				messages.en =  Object.assign(messages.en ? messages.en : {}, en);
				messages.ur = Object.assign(messages.ur ? messages.ur : {}, ur);
	
				return messages;
			});

### Initial State

	ctx.Filters.add('bluerain.redux.initialState', function ActivateTaskbar(state) {
				const size = ctx.Plugins.get('window-info');
				const taskbarState = getResponsiveState(size);
				return Object.assign({}, state, {
					bluerain: {
						systemNav: taskbarState
					}
				});
			});
### Events

Make sure you have access to the BlueRain context. Then do this:

```javascript
 ctx.Events.on('plugin.window_info.resize', (size, prevSize) => {
			const state = getResponsiveState(size);
			ctx.refs.store.dispatch(setStateSystemNav(state));
		});
```

## Components

This plugin registers following components in the Component registry, so they can be reused later by other apps and plugins:

-   NavAppItem
-   NavDividerItem
-   NavSpacerItem

## Filters

### bluerain.intl.messages

This hook gives the ability to add custom intl messages.

**Parameters:**

| Name     | Type   | Description     |
| -------- | ------ | --------------- |
| messages | Object | The messages db |

**Returns:**

| Name     | Type   | Description     |
| -------- | ------ | --------------- |
| messages | Object | The messages db |

**Example:**

This example registers custom english and urdu messages to the system.

```javascript
BR.Filters.add('bluerain.intl.messages', function eng(messages) {
	const en = require('./lang/en.json');
	const ur = require('./lang/ur.json');

	messages.en =  Object.assign(messages.en ? messages.en : {}, en);
	messages.ur = Object.assign(messages.ur ? messages.ur : {}, ur);

	return messages;
});
```


# Bluerain Plugin Task Bar

A plugin for Task Bar that shows Platform Logo and Navigation items. Platform Logo and Navigation items are passed through Bluerain-os configurations.
**Extends Plugin**

Adds Task Bar to BlueRain Apps.

## Usage

```shell
npm i --save @blueeast/bluerain-plugin-taskbar
```

Then in your boot function, pass the plugin like this:

```javascript
import BR from '@blueeast/bluerain-os';
import TaskbarPlugin from '@blueeast/bluerain-plugin-taskbar';

BR.boot({
	plugins: [TaskbarPlugin]
})
```

## API

### configuration

**Logos**
```
	logos: {
		default: {
      src: "https://s3-us-west-2.amazonaws.com/bluerainimages/mevris-logo.svg",
      type: "image/svg+xml"
    },
		headerLogo: {
      src: "https://s3-us-west-2.amazonaws.com/bluerainimages/mevris-logo-expended.svg",
      type: "image/svg+xml"
    },
		headerLogoSquare: {
      src: "https://s3-us-west-2.amazonaws.com/bluerainimages/mevris-logo-icon.svg",
      type: "image/svg+xml"
    },
	},
```
**NavItems**

```
		taskbar: {
			items: [{
				component: 'NavAppItem',
				props: { slug: 'hello-world' }
			},
			'->',
			{
				component: 'NavAppItem',
				props: { slug: 'settings' }
			}]
		}
```
###Components

This plugin registers following components in component registry.

- NavAppItem

- NavDividerItem

- NavSpacerItem

### Filters

- It adds task bar by adding a function in 'bluerain.system.app.layout' filter.
- It adds systemNav reducers in 'bluerain.redux.reducers.bluerain' filter. 

### SystemNav

**Actions**
Following Actions can be dispatched 
- enable,
- disable,
- open, 
- close,
- toggle,
- dock,
- undock,
- hideLabels,
- showLabels

**Initial State**
```javascript
const initialState =  {
	disabled: false,
	open: true,
	docked: true,
	hideLabels: false,
};
```

### Responsiveness

This Plugin is responsive on desktop and mobile. It shows only icons on Desktop and icon with Labels on mobile screen.
# bluerain-plugin-taskbar
