import { useLocation } from "solid-app-router";
import { Component } from "solid-js";

interface SidebarItemProps {
	title: string;
	path: string;
}
const SidebarItem: Component<SidebarItemProps> = (props) => {
	const location = useLocation();
	const isSelected = location.pathname === props.path;
	return (
		<a
			href={props.path}
			style={
				isSelected
					? {
							width: "100%",
							padding: "8px",
							"border-radius": "8px",
							"background-color": "#9eb9d8",
					  }
					: {
							width: "100%",
							padding: "8px",
					  }
			}
		>
			{props.title}
		</a>
	);
};
export default SidebarItem;
