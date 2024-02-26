import { outputAst } from '@angular/compiler';
import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {


  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

  ngOnInit(): void {
    this.debouncerSuscription=this.debouncer
    .pipe(
      
      )
      .subscribe(value =>{
        this.onDebounce.emit(value);
      })
    }

    ngOnDestroy(): void {
      this.debouncerSuscription?.unsubscribe();
    }

  @Input()
  public placeholder: string = ''

  @Input()
  public initialValue: string = '';

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  emitValue(value:string){
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm:string){
    this.debouncer.next(searchTerm);

  }
}
