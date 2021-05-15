import { ComponentType } from "react";

export interface Panel {
    name: string;
    label: string;
    component: ComponentType<any>;
}
