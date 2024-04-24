import { PopoverItem } from "libs/web/ui/src/lib/menu/data-access/models";

export const mockPopoverLanguages = (): PopoverItem[] => {
  return [
    {
      title: 'Item1',
      childrenItems: [
        {
          title: 'Sub item 1',
        },
        {
          title: 'Sub item 2',
        },
      ],
    },
    {
      title: 'Item2',
      childrenItems: [
        {
          title: 'Sub item 1',
        },
        {
          title: 'Sub item 2',
        },
      ],
    },
    {
      title: 'Item2',
      childrenItems: [
        {
          title: 'Sub item 1',
        },
        {
          title: 'Sub item 2',
        },
      ],
    },
    {
      title: 'Item2',
      childrenItems: [
        {
          title: 'Sub item 1',
        },
        {
          title: 'Sub item 2',
        },
      ],
    },
  ];
};
