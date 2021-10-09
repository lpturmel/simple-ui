import { SimpleRemValues } from "../../Global";

export interface MarginProps {
	margin?: marginValues;
	marginX?: marginValues;
	marginY?: marginValues;
	marginLeft?: marginValues;
	marginTop?: marginValues;
	marginRight?: marginValues;
	marginBottom?: marginValues;
}

export type marginValues = SimpleRemValues | "auto";
