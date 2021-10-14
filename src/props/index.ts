import { ColorProps } from "./typography/textColor/colors";
import { FontVariantProps } from "./typography/fontVariant";
import { FontSizeProps } from "./typography/fontSize";
import { FontFamilyProps } from "./typography/fontFamily";
import { FontSmoothingProps } from "./typography/fontSmoothing";
import { FontStyleProps } from "./typography/fontStyle";
import { FontWeightProps } from "./typography/fontWeight";
import { MarginProps } from "./spacing/margin";
import { PaddingProps } from "./spacing/padding";
import { StateProps } from "./states";
import { WidthProps } from "./sizing/width/width";
import { HeightProps } from "./sizing/height/height";
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
import { AnimateProps } from "./transition/animation";
import { BorderOpacityProps } from "./borders/borderOpacity";
import { DivideWidthProps } from "./borders/divideWidth";
import { DivideColorProps } from "./borders/divideColor";
import { DivideOpacityProps } from "./borders/divideOpacity";
import { DivideStyleProps } from "./borders/divideStyle";
import { RingWidthProps } from "./borders/ringWidth";
import { RingColorProps } from "./borders/ringColor";
import { RingOpacityProps } from "./borders/ringOpacity";
import { RingOffsetWidthProps } from "./borders/ringOffsetWidth";
import { RingOffsetColorProps } from "./borders/ringOffsetColor";
import { GradientColorProps } from "./background/gradientColor";
import { BoxShadowProps } from "./effects/boxShadow";
import { OpacityProps } from "./effects/opacity";
import { MixBlendProps } from "./effects/mixBlend";
import { BackgroundBlendProps } from "./effects/backgroundBlend";
import { BorderCollapseProps } from "./tables/borderCollapse";
import { TableLayoutProps } from "./tables/tableLayout";
import { TransformProps } from "./transforms/transform";
import { OriginProps } from "./transforms/origin";
import { ScaleProps } from "./transforms/scale";
import { RotateProps } from "./transforms/rotate";
import { TranslateProps } from "./transforms/translate";
import { SkewProps } from "./transforms/skew";
import { AppearanceProps } from "./interactivity/appearance";
import { CursorProps } from "./interactivity/cursor";
import { OutlineProps } from "./interactivity/outline";
import { PointerEventsProps } from "./interactivity/pointerEvents";
import { ResizeProps } from "./interactivity/resize";
import { UserSelectProps } from "./interactivity/userSelect";
import { BackgroundColorProps } from "./background/color";
import { PlaceholderColorProps } from "./typography/placeholderColor";
import { BoxDecorationBreakProps } from "./layout/boxDecorationBreak";
import { BoxSizingProps } from "./layout/boxSizing";
import { FloatsProps } from "./layout/floats";
import { IsolationProps } from "./layout/isolation";
import { ObjectFitProps } from "./layout/objectFit";
import { ObjectPositionProps } from "./layout/objectPosition";
import { OverscrollBehaviorProps } from "./layout/overscrollBehavior";
import { VisibilityProps } from "./layout/visibility";
import { BackgroundAttachmentProps } from "./background/attachment";
import { BackgroundClipProps } from "./background/clip";
import { BackgroundImageProps } from "./background/image";
import { BackgroundOpacityProps } from "./background/opacity";
import { BackgroundOriginProps } from "./background/origin";
import { BackgroundPositionProps } from "./background/position";
import { BackgroundRepeatProps } from "./background/repeat";
import { BackgroundSizeProps } from "./background/size";
import { FilterProps } from "./filters/filter";
import { BlurProps } from "./filters/blur";
import { BrightnessProps } from "./filters/brightness";
import { ContrastProps } from "./filters/contrast";
import { DropShadowProps } from "./filters/dropShadow";
import { GrayscaleProps } from "./filters/grayscale";
import { HueRotateProps } from "./filters/hueRotate";
import { InvertProps } from "./filters/invert";
import { SaturateProps } from "./filters/saturate";
import { SepiaProps } from "./filters/sepia";
import { BackdropFilterProps } from "./filters/backdropFilter";
import { BackdropBlurProps } from "./filters/backdropBlur";
import { BackdropBrightnessProps } from "./filters/backdropBrightness";
import { BackdropContrastProps } from "./filters/backdropContrast";
import { BackdropGrayscaleProps } from "./filters/backdropGrayscale";
import { BackdropHueRotateProps } from "./filters/backdropHueRotate";
import { BackdropInvertProps } from "./filters/backdropInvert";
import { BackdropOpacityProps } from "./filters/backdropOpacity";
import { BackdropSaturateProps } from "./filters/backdropSaturate";
import { BackdropSepiaProps } from "./filters/backdropSepia";
import { LetterSpacingProps } from "./typography/letterSpacing";
import { LineHeightProps } from "./typography/lineHeight";
import { ListStyleProps } from "./typography/listStyle";
import { ListPositionProps } from "./typography/listPosition";
import { PlaceholderOpacityProps } from "./typography/placeholderOpacity";
import { TextAlignProps } from "./typography/textAlign";
import { TextOpacityProps } from "./typography/textOpacity";
import { TextDecorationProps } from "./typography/textDecoration";
import { TextTransformProps } from "./typography/textTransform";
import { TextOverflowProps } from "./typography/textOverflow";
import { VerticalAlignProps } from "./typography/verticalAlign";

type MainProps<T = {}> =
	// Spacing
	PaddingProps &
		MarginProps &
		SpacingProps &
		// Filters
		FilterProps &
		BlurProps &
		BrightnessProps &
		ContrastProps &
		DropShadowProps &
		GrayscaleProps &
		HueRotateProps &
		InvertProps &
		SaturateProps &
		SepiaProps &
		BackdropFilterProps &
		BackdropBlurProps &
		BackdropBrightnessProps &
		BackdropContrastProps &
		BackdropGrayscaleProps &
		BackdropHueRotateProps &
		BackdropInvertProps &
		BackdropOpacityProps &
		BackdropSaturateProps &
		BackdropSepiaProps &
		// Misc
		StateProps &
		// interactivity
		AppearanceProps &
		CursorProps &
		OutlineProps &
		PointerEventsProps &
		ResizeProps &
		UserSelectProps &
		// effects
		BoxShadowProps &
		OpacityProps &
		MixBlendProps &
		BackgroundBlendProps &
		// Sizing
		WidthProps &
		MinWidthProps &
		MaxWidthProps &
		HeightProps &
		MinHeightProps &
		MaxHeightProps &
		// Backgrounds
		GradientColorProps &
		BackgroundColorProps &
		BackgroundAttachmentProps &
		BackgroundClipProps &
		BackgroundImageProps &
		BackgroundOpacityProps &
		BackgroundOriginProps &
		BackgroundPositionProps &
		BackgroundRepeatProps &
		BackgroundSizeProps &
		// Borders
		BorderRadiusProps &
		BorderWidthProps &
		BorderColorProps &
		BorderStyleProps &
		BorderOpacityProps &
		DivideWidthProps &
		DivideColorProps &
		DivideOpacityProps &
		DivideStyleProps &
		RingWidthProps &
		RingColorProps &
		RingOpacityProps &
		RingOffsetWidthProps &
		RingOffsetColorProps &
		// Transition & animations
		TransitionProps &
		TransitionDurationProps &
		TransitionTimingProps &
		TransitionDelayProps &
		AnimateProps &
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
		BoxDecorationBreakProps &
		BoxSizingProps &
		FloatsProps &
		IsolationProps &
		ObjectFitProps &
		ObjectPositionProps &
		OverscrollBehaviorProps &
		VisibilityProps &
		// Tables
		BorderCollapseProps &
		TableLayoutProps &
		// Transforms
		TransformProps &
		OriginProps &
		ScaleProps &
		RotateProps &
		TranslateProps &
		SkewProps &
		// Typography
		FontSizeProps &
		FontWeightProps &
		ColorProps &
		PlaceholderColorProps &
		FontFamilyProps &
		FontSizeProps &
		FontSmoothingProps &
		FontStyleProps &
		FontVariantProps &
		LetterSpacingProps &
		LineHeightProps &
		ListStyleProps &
		ListPositionProps &
		PlaceholderOpacityProps &
		TextAlignProps &
		TextOpacityProps &
		TextDecorationProps &
		TextTransformProps &
		TextOverflowProps &
		VerticalAlignProps &
		T;
export default MainProps;
