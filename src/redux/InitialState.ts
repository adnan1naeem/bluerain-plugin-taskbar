export const getResponsiveState = (size: string) => {
	if (size === 'xs' || size === 'sm') {
		return {
			open: false,
			docked: false,
			hideLabels: false,
			disabled: false
		};
	}
	return {
		open: true,
		docked: true,
		hideLabels: true,
		disabled: true
	};
};

export default (size: string) => {
	const state = getResponsiveState(size);
	state.disabled = false;

	return state;
};
