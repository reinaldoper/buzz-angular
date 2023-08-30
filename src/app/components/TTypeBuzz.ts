export interface TTypeBuzz {
  results: [
    {
      category: string;
      type: string;
      difficulty: string;
      question: string;
      correct_answer: string;
      incorrect_answers: [string]
    }
  ]
}

export interface Buzz {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: [string];
  alQuestions?: [string] | any;
}