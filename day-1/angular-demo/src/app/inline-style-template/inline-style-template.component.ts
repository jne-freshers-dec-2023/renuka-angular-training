import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-style-template',
  template: `
    <h1 class="both-style-template">
      inline-style-template works!
</h1>
  `,
  styles: [`
  .both-style-template{
    color: purple;
    font-size: 30px;
  }
  *{
    background-color:pink;
  }`
  ]
})
export class InlineStyleTemplateComponent {

}
