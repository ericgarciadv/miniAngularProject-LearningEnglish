import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Heart } from '../shared/heart.model'

@Component({
  selector: 'app-attempt',
  templateUrl: './attempt.component.html',
  styleUrls: ['./attempt.component.css']
})
export class AttemptComponent implements OnInit, OnChanges {

  @Input() public attempt: number

  public hearts: Array<Heart> = [
    new Heart(true), new Heart(true), new Heart(true)
  ]

  constructor() { 
  }

  ngOnChanges() {
    if(this.attempt !== this.hearts.length) {
      let index = this.hearts.length - this.attempt
      this.hearts[index - 1].full = false
    }
  }

  ngOnInit() {
  }

}
