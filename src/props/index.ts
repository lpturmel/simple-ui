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

type MainProps<T = {}> = PaddingProps &
	MarginProps &
	ColorProps &
	StateProps &
	FontSizeProps &
	FontWeightProps &
	WidthProps &
	HeightProps &
	BorderRadiusProps &
	SpacingProps &
	DisplayProps &
	PositionProps &
	FlexProps &
	FlexDirectionProps &
	FlexGrowProps &
	FlexShrinkProps &
	FlexWrapProps &
	GridTemplateColumnProps &
	GridColSpanProps &
	GridTemplateRowsProps &
	GridRowSpanProps &
	GridFlowProps &
	AutoColumnsProps &
	AutoRowsProps &
	T;
export default MainProps;
