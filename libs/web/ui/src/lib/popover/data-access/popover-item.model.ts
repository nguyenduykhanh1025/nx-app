export interface PopoverItem {
  title: string;
  childrenItems?: PopoverItem[];

  [key: string]: any;
}
