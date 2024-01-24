import { Component,EventEmitter,OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent {
  @Output() updateDataEvent= new EventEmitter<String>();
}
