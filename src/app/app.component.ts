import { Component, ElementRef,ViewContainerRef, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:'<h1 #spanData>H1 Data print</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'temp_ele_viewContainer';
  @ViewChild('elementData',{read:ElementRef}) elementDataRef!: ElementRef;
  @ViewChild('templateData',{read:TemplateRef}) templateDataRef!:TemplateRef<any>;
  @ViewChild('containerData',{read:ViewContainerRef}) containerDataRef!:ViewContainerRef;


  /*
    01 = ng-template need to ViewContainerRef for the rendered the ng-template and it need to define in constructor...
    02 = vcr means ViewContainerRef and this variable is used for the ng-template render....
  */
  constructor(private vcr:ViewContainerRef){}

  ngAfterViewInit():void{
    console.log("AfterViewInit Element Data: "+this.elementDataRef.nativeElement.textContent);

    console.log("AfterViewInit Container Data: "+this.containerDataRef.element.nativeElement.textContent);
    // console.log("AfterViewInit Container Data: ",this.containerDataRef.element.nativeElement);

    /*
      It will render the ng-template into the html file....
      CreateEmbeddedView is help to rendered ng-template to html it will work with the ViewContainerRef and pass parameter as a template ref variable...
    */
    let view = this.vcr.createEmbeddedView(this.templateDataRef);

    console.log(view.rootNodes);
  }
}
