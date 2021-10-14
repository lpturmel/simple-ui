export interface FontVariantProps {
	fontVariant?: FontVariantValues;
}

export type FontVariantValues =
	| "normal-nums"
	| "ordinal"
	| "slashed-zero"
	| "lining-nums"
	| "oldstyle-nums"
	| "proportional-nums"
	| "tabular-nums"
	| "diagonal-fractions"
	| "stacked-fractions";
