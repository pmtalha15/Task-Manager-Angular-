import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, ContentChildren, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, QueryList, SimpleChanges, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/project';
import { ProjectsService } from 'src/app/projects.service';
import { CheckBoxPrinterComponent } from '../check-box-printer/check-box-printer.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit,OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  @Input("currentProject") project:Project | any;
  @Input("recordIndex") i : number | any;

  @Output() editClick = new EventEmitter();
  @Output() deleteClick = new EventEmitter();

  @ViewChild("tbl") tbl : ElementRef | any;
 
  MySubscriptions : Subscription | any;

  hideDetails: boolean = false;

  @ContentChildren("selectionBoxes") selectionBoxes : QueryList<CheckBoxPrinterComponent> | any;
  
  constructor(public projectsService : ProjectsService){

  }
  ngAfterViewInit(): void {
   console.log("-------------ngAfterViewInit");
   console.log(this.tbl);
   
   
  }
  ngAfterViewChecked(): void {
    console.log("-------------ngAfterViewChecked");
  }

  ngOnChanges(simpleChanges:SimpleChanges){
    console.log("----------------onChanges");
    for(let propName in simpleChanges){
      let chng = simpleChanges[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}:currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  ngOnInit(): void {
    console.log("------------OnInIt");
    
    this.MySubscriptions = 
    this.projectsService.MySubject.subscribe((hide:boolean)=>{
      this.hideDetails = hide;
    })
    
  }

  ngDoCheck(): void {
    console.log("---------------ngDoCheck");
  }

  ngAfterContentInit(): void {
    console.log("-----------------ngAfterContentInit");
    console.log(this.selectionBoxes.toArray());
    
  }

  ngAfterContentChecked(){
    console.log("-----------------ngAfterContentChecked");
  }

  onEditClick(event:any, i:any){
    this.editClick.emit({event,i});
  }

  onDeleteClick(event:any, i:any){
    this.deleteClick.emit({event,i});
  }

  ngOnDestroy(){
    console.log("----------------ngOnDestroy");
    this.MySubscriptions.unsubscribe();
  }

  isAllCheckedChange(b:boolean){
    let selectionBox = this.selectionBoxes.toArray();
    if(b){
      for(let i=0;i<selectionBox.length;i++){
        selectionBox[i].check();
      }
    }else{
      for(let i=0;i<selectionBox.length;i++){
        selectionBox[i].uncheck();
      }
    }
  }

  
}
