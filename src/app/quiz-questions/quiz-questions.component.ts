import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  AfterViewInit,
} from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { QuizService } from "../quiz.service";

@Component({
  selector: "app-quiz-questions",
  templateUrl: "./quiz-questions.component.html",
  styleUrls: ["./quiz-questions.component.scss"],
})
export class QuizQuestionsComponent implements AfterViewInit {
  @Output()
  initiateQuestion: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() question = <QuestionInterface>{};
  userAnswer: number;
  count = 0;
  timer = 20;
  interval;
  score: number = 0;
  completed = false;
  constructor(private quizSerivce: QuizService, private route: Router) {}

  ngAfterViewInit() {
    this.initiateQuestion.emit(true);
    this.interval = setInterval(() => {
      this.timer == 0
        ? this.count < this.question.totalQuizQuestion && this.submit()
        : this.timer--;
    }, 1000);
  }
  submit() {
    this.timer = 20;
    this.count++;
    this.count === this.question.totalQuizQuestion && (this.completed = true);
    this.userAnswer === this.question.answer ? this.score++ : "";
    this.question["userAnswer"] = this.userAnswer;
    this.quizSerivce.questionAnswerTrigger.next(this.question);
    clearInterval(this.interval);
    this.ngAfterViewInit();
  }
  getAnswer(value: number) {
    this.userAnswer = value;
  }
}

export interface QuestionInterface {
  operator: string;
  number1: number;
  number2: number;
  answer: number;
  userAnswer?: number;
  totalQuizQuestion?: number;
}
