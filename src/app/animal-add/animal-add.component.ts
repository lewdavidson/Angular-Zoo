import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-animal-add',
  templateUrl: './animal-add.component.html',
  styleUrls: ['./animal-add.component.css']
})
export class AnimalAddComponent implements OnInit {
@Output() newAnimalSender = new EventEmitter();
submitForm(name: string, species: string, age: number, diet: string, location: string, caretakers: number, gender: string, like: string, dislike: string) {
  const newAnimalToAdd: Animal = new Animal(name, species, age, diet, location, caretakers, gender, like, dislike);
  this.newAnimalSender.emit(newAnimalToAdd);
}
  constructor() { }

  ngOnInit() {
  }

}
