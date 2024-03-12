import { Lesson } from "../models"

export const mockLesson = (): Lesson => {
  return {
    title: 'Ôn tập DAY 3',
    amount_of_term: 69,
    image: 'https://o.quizlet.com/NQTLDXGUfAs1LY6qlXJ3rA_m.png?funnelUUID=078e59b1-0dce-4c67-9986-2d2050fb05ee',
    tag_role: null,
  }
}

export const mockLessons = (count = 3): Lesson[] => {
  return Array.from(Array(count).keys()).map(() =>mockLesson())
}
