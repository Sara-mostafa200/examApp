declare type Question = {
  answers: [
    {
      answer: string;
      key: string;
    }
  ];
  type: "single_choice" | "multiple_choice" ;
  _id: string;
  question: string;
  correct: string;
  subject: Subject
  exam:Exam
  createdAt: string;
};


declare type CheckResponse = {
  correct: number;
  wrong: number;
  total: string;
  WrongQuestions: {
    QID: string;
    Question: string;
    inCorrectAnswer: string;
    correctAnswer: string;
    
  }[];
  correctQuestions: {
    QID: string;
    Question: string;
    inCorrectAnswer: string;
    correctAnswer: string;
    
  }[];
};