import { SimpleRemValues } from "../../Global";

export interface MarginProps {
	m?: marginValues;
	my?: marginValues;
	mx?: marginValues;
	ml?: marginValues;
	mt?: marginValues;
	mr?: marginValues;
	mb?: marginValues;
	margin?: marginValues;
	marginX?: marginValues;
	marginY?: marginValues;
	marginL?: marginValues;
	marginT?: marginValues;
	marginR?: marginValues;
	marginB?: marginValues;
}

export type marginValues = SimpleRemValues | "auto";
