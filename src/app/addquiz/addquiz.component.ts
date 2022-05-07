import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz';
import { QuizService } from '../quiz.service';
@Component({
  selector: 'app-addquiz',
  templateUrl: './addquiz.component.html',
  styleUrls: ['./addquiz.component.css']
})
export class AddquizComponent implements OnInit {

  constructor(private quizservice:QuizService) { }
  quiz:Quiz=new Quiz();
  ngOnInit(): void {
    this.quiz=new Quiz();
  }
  save() {
    this.quizservice
    .createQuiz(this.quiz).subscribe(data => {
      console.log(this.quiz)
     
      
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.save();    
  }
}
