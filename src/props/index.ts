interface ComponentProps {
	variant?: string;
}
type MainProps<T = {}> = ComponentProps & T;

export default MainProps;
