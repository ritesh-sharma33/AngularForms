import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit() {

  }

  newHero() {
    this.model = new Hero(42, '', '', '');
  }

  get diagnostic() { return JSON.stringify(this.model); }

}
