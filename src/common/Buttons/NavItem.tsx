// @flow
/* eslint-disable */
import React from 'react';
import ListItem from 'material-ui/List/ListItem';

export default (props: {
	primaryText: string,
	hideLabel: boolean,
	label:string,
	icon:string
}) => {

	const { label, hideLabel, ...other } = props; // eslint-disable-line
console.log("itemssssssssssss");
	let primaryText;
	let icon;

	if (hideLabel === true) {
		primaryText = props.icon;
		icon = null;
	} else {
		primaryText = label;
		icon = props.icon;
	}

	return <ListItem primaryText={primaryText} leftIcon={icon} {...other} />;
};
