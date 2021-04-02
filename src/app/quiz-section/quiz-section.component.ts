import { Component, OnInit, ViewChild } from "@angular/core";
import {
  QuestionInterface,
  QuizQuestionsComponent,
} from "../quiz-questions/quiz-questions.component";
import { QuizService } from "../quiz.service";

@Component({
  selector: "app-quiz-section",
  templateUrl: "./quiz-section.component.html",
  styleUrls: ["./quiz-section.component.scss"],
})
export class QuizSectionComponent implements OnInit {
  constructor(private quizSerivce: QuizService) {}
  @ViewChild(QuizQuestionsComponent, { static: true })
  private quizQuestion: QuizQuestionsComponent;
  totalQuizQuestion = "10";
  operatorsArray = [
    { value: "Add", checked: true },
    { value: "Substract", checked: true },
    { value: "Multiply", checked: true },
    { value: "Divide", checked: true },
  ];
  question = <QuestionInterface>{};
  quizStarted = false;
  ngOnInit() {
    this.quizSerivce.resetArray();
  }
  initiateQuestion(event: boolean) {
    console.log(this.totalQuizQuestion);
    let userSelectedOperators = [];
    this.operatorsArray.forEach((operator) => {
      operator.checked && userSelectedOperators.push(operator.value);
    });
    const index = Math.floor(Math.random() * userSelectedOperators.length);
    const operator = userSelectedOperators[index];
    const number1 = this.randomNumberGenerator(operator);
    const number2 = this.randomNumberGenerator(operator, true);
    const answer = this.calculateAnswer(operator, number1, number2);
    this.question = {
      operator: operator,
      number1: number1,
      number2: number2,
      answer: answer,
      totalQuizQuestion: parseInt(this.totalQuizQuestion),
    };
  }
  calculateAnswer(operator: string, number1: number, number2: number): number {
    switch (operator) {
      case "Add":
        return number1 + number2;
      case "Substract":
        return number1 - number2;
      case "Multiply":
        return number1 * number2;
      case "Divide":
        return Math.round((number1 / number2) * 100) / 100;
    }
  }
  randomNumberGenerator(operator: string, den?: boolean): number {
    const max = 9;
    const min = operator === "Divide" && den ? 1 : 0;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  dropdownChange(value) {
    console.log(value);
  }
}
