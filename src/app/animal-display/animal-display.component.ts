import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-animal-display',
  templateUrl: './animal-display.component.html',
  styleUrls: ['./animal-display.component.css']
})
export class AnimalDisplayComponent implements OnInit {
@Input() childAnimalList: Animal[];
@Output() clickSender = new EventEmitter();

  editAnimalClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  filterByAllAnimals: string = 'allAnimals';

  onChange(optionFromMenu) {
    this.filterByAllAnimals = optionFromMenu;
  }



  constructor() { }

  ngOnInit() {
  }

}
