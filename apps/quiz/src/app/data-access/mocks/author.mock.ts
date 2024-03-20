import { Author } from '../models';

export const mockAuthor = (): Author => {
  return {
    name: 'romahomenuk',
    image:
      'https://lh3.googleusercontent.com/a/ACg8ocIZCYn_aKM34I_rdASAvDBNVf6vE6Q7RH3CipVMzrUV_A=s96-c?sz=150',
    amount_of_course: 69,
    amount_of_lessons: 96,
  };
};

export const mockAuthors = (count = 3): Author[] => {
  return Array.from(Array(count).keys()).map(() => mockAuthor());
};
