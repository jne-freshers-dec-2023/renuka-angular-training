import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent {
  form= new FormGroup({
    topics: new FormArray([]) 
  });
  addTopic(topic: HTMLInputElement){
    (this.form.get('topics') as FormArray).push( new FormControl(topic.value));
    topic.value='';
  }

  removeTopic(topic: FormControl){
    console.log(topic)
    let index = this.refForm.controls.indexOf(topic);
    this.refForm.removeAt(index);
  }

  get refForm(): FormArray<FormControl> {
    return this.form.get('topics') as FormArray;                                 
  }
}
