import MainProps from ".";

export function parseStateProps(state: string, stateType: string) {
	let returnString = "";

	const items = state.trim().split(" ");
	items.forEach((item) => {
		returnString += `${stateType}:${item} `;
	});
	return returnString;
}

export interface StateProps {
	_hover?: MainProps;
	_focus?: MainProps;
	_active?: MainProps;
}
