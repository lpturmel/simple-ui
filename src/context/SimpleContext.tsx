import { Component, createContext } from "solid-js";
import { createStore, SetStoreFunction, Store } from "solid-js/store";
import "../index.css";
import "../props/typography/placeholderColor/index.css";
import "../props/sizing/width/index.css";
import "../props/sizing/minWidth/index.css";
import "../props/sizing/maxWidth/index.css";
import "../props/sizing/height/index.css";
import "../props/sizing/minHeight/index.css";
import "../props/sizing/maxHeight/index.css";
import "../props/background/color/index.css";
import "../props/background/gradientColor/index.css";
import "../props/background/attachment/index.css";
import "../props/background/clip/index.css";
import "../props/background/image/index.css";
import "../props/background/opacity/index.css";
import "../props/background/origin/index.css";
import "../props/background/position/index.css";
import "../props/background/repeat/index.css";
import "../props/background/size/index.css";
import "../props/text/colors/index.css";
import "../props/text/fontSize/index.css";
import "../props/text/fontWeight/index.css";
import "../props/borders/borderRadius/index.css";
import "../props/borders/borderWidth/index.css";
import "../props/borders/borderColor/index.css";
import "../props/borders/borderStyle/index.css";
import "../props/borders/borderOpacity/index.css";
import "../props/borders/divideWidth/index.css";
import "../props/borders/divideColor/index.css";
import "../props/borders/divideOpacity/index.css";
import "../props/borders/divideStyle/index.css";
import "../props/borders/ringWidth/index.css";
import "../props/borders/ringColor/index.css";
import "../props/borders/ringOpacity/index.css";
import "../props/borders/ringOffsetWidth/index.css";
import "../props/borders/ringOffsetColor/index.css";
import "../props/spacing/margin/index.css";
import "../props/spacing/padding/index.css";
import "../props/spacing/spaceBetween/index.css";
import "../props/layout/display/index.css";
import "../props/layout/position/index.css";
import "../props/layout/overflow/index.css";
import "../props/layout/absolutePosition/index.css";
import "../props/layout/clear/index.css";
import "../props/layout/zIndex/index.css";
import "../props/layout/boxDecorationBreak/index.css";
import "../props/layout/boxSizing/index.css";
import "../props/layout/container/index.css";
import "../props/layout/floats/index.css";
import "../props/layout/isolation/index.css";
import "../props/layout/objectFit/index.css";
import "../props/layout/objectPosition/index.css";
import "../props/layout/overscrollBehavior/index.css";
import "../props/layout/visibility/index.css";
import "../props/flex/flex/index.css";
import "../props/flex/flexDirection/index.css";
import "../props/flex/flexGrow/index.css";
import "../props/flex/flexShrink/index.css";
import "../props/flex/flexWrap/index.css";
import "../props/flex/gap/index.css";
import "../props/flex/order/index.css";
import "../props/flex/justifyContent/index.css";
import "../props/flex/justifyItems/index.css";
import "../props/flex/justifySelf/index.css";
import "../props/flex/alignContent/index.css";
import "../props/flex/alignItems/index.css";
import "../props/flex/alignSelf/index.css";
import "../props/flex/placeContent/index.css";
import "../props/flex/placeItems/index.css";
import "../props/flex/placeSelf/index.css";
import "../props/grid/gridTemplateColumns/index.css";
import "../props/grid/gridTemplateRows/index.css";
import "../props/grid/gridColSpan/index.css";
import "../props/grid/gridRowSpan/index.css";
import "../props/grid/gridFlow/index.css";
import "../props/grid/autoColumns/index.css";
import "../props/grid/autoRows/index.css";
import "../props/transition/transitionProperty/index.css";
import "../props/transition/transitionDuration/index.css";
import "../props/transition/transitionTiming/index.css";
import "../props/transition/transitionDelay/index.css";
import "../props/transition/animation/index.css";
import "../props/effects/boxShadow/index.css";
import "../props/effects/opacity/index.css";
import "../props/effects/mixBlend/index.css";
import "../props/effects/backgroundBlend/index.css";
import "../props/tables/borderCollapse/index.css";
import "../props/tables/tableLayout/index.css";
import "../props/transforms/transform/index.css";
import "../props/transforms/origin/index.css";
import "../props/transforms/scale/index.css";
import "../props/transforms/rotate/index.css";
import "../props/transforms/translate/index.css";
import "../props/transforms/skew/index.css";
import "../props/interactivity/appearance/index.css";
import "../props/interactivity/cursor/index.css";
import "../props/interactivity/pointerEvents/index.css";
import "../props/interactivity/resize/index.css";
import "../props/interactivity/userSelect/index.css";
import "../props/filters/filter/index.css";
import "../props/filters/blur/index.css";
import "../props/filters/brightness/index.css";
import "../props/filters/contrast/index.css";
import "../props/filters/dropShadow/index.css";
import "../props/filters/grayscale/index.css";
import "../props/filters/hueRotate/index.css";

import { DefaultTheme, SimpleThemeConfig } from "../theme";

interface IProviderStore {
	theme: SimpleThemeConfig | null;
	defaultTheme: SimpleThemeConfig;
}

const [state, setState] = createStore<IProviderStore>({
	theme: null,
	defaultTheme: DefaultTheme,
});
export const SimpleContext = createContext<
	[Store<IProviderStore>, SetStoreFunction<IProviderStore>]
>([state, setState]);

interface SimpleProviderProps {
	theme?: SimpleThemeConfig;
}
export const SimpleProvider: Component<SimpleProviderProps> = (props) => {
	if (props.theme) {
		setState("theme", () => props.theme);
	}
	return (
		<SimpleContext.Provider value={[state, setState]}>
			<div id="simple-ui-portal" />
			{props.children}
		</SimpleContext.Provider>
	);
};
