interface Response {
  id: string;
  response: string;
}

interface Question {
  id: string;
  support: string;
  question: string;
  responses: Array<Response>;
}

export interface Qcm {
  id: string;
  consigne: string;
  questions: Array<Question>;
}
