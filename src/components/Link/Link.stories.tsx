import { SimpleProvider } from "../..";
import StoryWrapper from "../../StoryWrapper";
import { Link } from "./Link";

export default {
	component: Link,
	title: "UI/Link",
};

export const Default = () => (
	<SimpleProvider>
		<StoryWrapper>
			<Link>Some Link</Link>
		</StoryWrapper>
	</SimpleProvider>
);
