import { UiType } from "../../../data-access/models/ui-type.model";

export type ButtonType = keyof typeof UiType | 'TRANSPARENT' | 'LINK';
