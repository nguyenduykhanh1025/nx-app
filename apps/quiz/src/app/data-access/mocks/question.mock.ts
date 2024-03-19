import { Question } from '../models';

export const mockQuestion = (): Question => {
  return {
    title: 'Ôn tập DAY 3',
    content: 'Nâng cấp để có quyền truy cập đầy đủ vào thư viện Hỏi đáp',
  };
};

export const mockQuestions = (count = 3): Question[] => {
  return Array.from(Array(count).keys()).map(() => mockQuestion());
};
