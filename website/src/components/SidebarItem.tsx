import { Component } from "solid-js";

interface SidebarItemProps {
	title: string;
	path: string;
}
const SidebarItem: Component<SidebarItemProps> = (props) => {
	return <a href={props.path}>{props.title}</a>;
};
export default SidebarItem;
