import { Dispatch, MouseEvent, SetStateAction } from "react";

export interface Text {
    text: string;
    setText: Dispatch<SetStateAction<string>>;
    clickHandler: (e: MouseEvent) => void;
}
