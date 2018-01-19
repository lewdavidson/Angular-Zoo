import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome To ZOOOOOOOO';
  selectedAnimal = null;
  masterAnimalList: Animal[] = [
    new Animal('Moon', 'Arctic Fox', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool Shade', 'Loud Noises'),
    new Animal('Prince', 'Ocelot', 4, 'Carnivore', 'Tropical Rainforest Building', 6, 'Male', 'Laying in the Sun', 'Being in a ZOO'),
    new Animal('TInkerbell', 'Deer', 8, 'Herbivore', 'Northern Trail', 2, 'Female', 'Roots and Leaves', 'Loud Noises'),
  ];

  editAnimal(clickedAnimal) {
    console.log('hey brotini');
    this.selectedAnimal = clickedAnimal;
  }
  finishedEditing() {
    this.selectedAnimal = null;
  }
  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
