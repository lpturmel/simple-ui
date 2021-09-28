import MainProps from ".";

export function parseStateProps(state: string, stateType: string) {
	let returnString = "";

	const items = state.trim().split(" ");
	items.forEach((item) => {
		returnString += `simple-ui-${stateType}:${item} `;
	});
	return returnString;
}

export interface StateProps {
	_hover?: MainProps;
	_focus?: MainProps;
	_active?: MainProps;
}
