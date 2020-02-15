import { Injectable } from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from '../question-base';
import { TextBoxQuestion } from './question-textbox';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  getQuestions(): Observable<any[]> {
    let questions: QuestionBase<string>[] = [
      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid', value: 'Solid'},
          {key: 'great', value: 'Great'},
          {key: 'good', value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),
      new TextBoxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasta',
        required: true,
        order: 1
      }),
      new TextBoxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];  
    return of(questions.sort((a, b) => a.order - b.order));
  }
}
