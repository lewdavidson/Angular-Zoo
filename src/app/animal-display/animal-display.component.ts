import { Component, OnInit, Input } from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-animal-display',
  templateUrl: './animal-display.component.html',
  styleUrls: ['./animal-display.component.css']
})
export class AnimalDisplayComponent implements OnInit {
@Input() childAnimalList: Animal[];







  constructor() { }

  ngOnInit() {
  }

}
