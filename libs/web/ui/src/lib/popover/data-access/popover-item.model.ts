export interface PopoverItem {
  title: string;
  items?: PopoverItem[];

  [key: string]: any;
}
