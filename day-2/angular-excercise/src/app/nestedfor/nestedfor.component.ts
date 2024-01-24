import { Component } from '@angular/core';

@Component({
  selector: 'app-nestedfor',
  templateUrl: './nestedfor.component.html',
  styleUrls: ['./nestedfor.component.css']
})
export class NestedforComponent {
  title= "Nested for Loop";
  students=[
    {name: "Sham", phone: 7482928392, hobbies:["dancing","singing", "swimming"]},
    {name: "Radha", phone:4987925855, hobbies:["singing","travelling"]},
    {name: "Krishna", phone: 4852369712, hobbies:["drawing","singing", "treeking"]},
  ]

}
