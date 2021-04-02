import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { QuestionInterface } from "./quiz-questions/quiz-questions.component";

@Injectable({
  providedIn: "root",
})
export class QuizService {
  questionAnswerTrigger = new BehaviorSubject<QuestionInterface>(null);
  questionsArray = <QuestionInterface[]>[];
  constructor() {}
  resetArray() {
    this.questionsArray = <QuestionInterface[]>[];
  }
}
