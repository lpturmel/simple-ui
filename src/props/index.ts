import { ColorProps } from "./text/colors/colors";
import { MarginProps } from "./spacing/margin";
import { PaddingProps } from "./spacing/padding";
import { FontSizeProps } from "./text/fontSize";
import { StateProps } from "./states";
import { WidthProps } from "./sizing/width/width";
import { HeightProps } from "./sizing/height/height";
import { FontWeightProps } from "./text/fontWeight";
import { BorderRadiusProps } from "./borders/borderRadius";
import { SpacingProps } from "./spacing/spaceBetween";
import { DisplayProps } from "./layout/display";
import { PositionProps } from "./layout/position";
import { FlexProps } from "./flex/flex";
import { FlexDirectionProps } from "./flex/flexDirection";
import { FlexWrapProps } from "./flex/flexWrap";
import { FlexGrowProps } from "./flex/flexGrow";
import { FlexShrinkProps } from "./flex/flexShrink";
import { GridTemplateColumnProps } from "./grid/gridTemplateColumns";
import { GridColSpanProps } from "./grid/gridColSpan";
import { GridTemplateRowsProps } from "./grid/gridTemplateRows";
import { GridRowSpanProps } from "./grid/gridRowSpan";
import { AutoColumnsProps } from "./grid/autoColumns/index";
import { GridFlowProps } from "./grid/gridFlow";
import { AutoRowsProps } from "./grid/autoRows";
import { GapProps } from "./flex/gap";
import { JustifyContentProps } from "./flex/justifyContent";
import { JustifyItemsProps } from "./flex/justifyItems";
import { OrderProps } from "./flex/order";
import { JustifySelfProps } from "./flex/justifySelf";
import { AlignContentProps } from "./flex/alignContent";
import { AlignItemsProps } from "./flex/alignItems";
import { AlignSelfProps } from "./flex/alignSelf";
import { PlaceContentProps } from "./flex/placeContent";
import { PlaceItemsProps } from "./flex/placeItems";
import { PlaceSelfProps } from "./flex/placeSelf";
import { OverflowProps } from "./layout/overflow";
import { AbsolutePositionProps } from "./layout/absolutePosition";
import { ClearProps } from "./layout/clear";
import { ZindexProps } from "./layout/zIndex";
import { MinWidthProps } from "./sizing/minWidth";
import { MaxWidthProps } from "./sizing/maxWidth";
import { MinHeightProps } from "./sizing/minHeight/minHeight";
import { MaxHeightProps } from "./sizing/maxHeight/maxHeight";
import { BorderWidthProps } from "./borders/borderWidth";
import { BorderColorProps } from "./borders/borderColor";
import { BorderStyleProps } from "./borders/borderStyle";
import { TransitionProps } from "./transition/transitionProperty";
import { TransitionDurationProps } from "./transition/transitionDuration";
import { TransitionTimingProps } from "./transition/transitionTiming";
import { TransitionDelayProps } from "./transition/transitionDelay";

type MainProps<T = {}> =
	// Spacing
	PaddingProps &
		MarginProps &
		SpacingProps &
		// Typography
		FontSizeProps &
		FontWeightProps &
		ColorProps &
		// Misc
		StateProps &
		// Sizing
		WidthProps &
		MinWidthProps &
		MaxWidthProps &
		HeightProps &
		MinHeightProps &
		MaxHeightProps &
		// Borders
		BorderRadiusProps &
		BorderWidthProps &
		BorderColorProps &
		BorderStyleProps &
		// Transition & animations
		TransitionProps &
		TransitionDurationProps &
		TransitionTimingProps &
		TransitionDelayProps &
		//
		DisplayProps &
		PositionProps &
		FlexProps &
		FlexDirectionProps &
		FlexGrowProps &
		FlexShrinkProps &
		FlexWrapProps &
		OrderProps &
		JustifyContentProps &
		JustifyItemsProps &
		JustifySelfProps &
		AlignContentProps &
		AlignItemsProps &
		AlignSelfProps &
		PlaceContentProps &
		PlaceItemsProps &
		PlaceSelfProps &
		GridTemplateColumnProps &
		GridColSpanProps &
		GridTemplateRowsProps &
		GridRowSpanProps &
		GridFlowProps &
		AutoColumnsProps &
		AutoRowsProps &
		GapProps &
		OverflowProps &
		AbsolutePositionProps &
		ClearProps &
		ZindexProps &
		T;
export default MainProps;
