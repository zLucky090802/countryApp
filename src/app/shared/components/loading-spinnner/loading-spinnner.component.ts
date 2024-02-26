import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-loading-spinnner',
  templateUrl: './loading-spinnner.component.html',
  styleUrls: ['./loading-spinnner.component.css']
})
export class LoadingSpinnnerComponent {

  @Input()
  public placeholder: string = ''
}
