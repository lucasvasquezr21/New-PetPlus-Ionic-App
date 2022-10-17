import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input()title: string;
    dropdown: false;
    // eslint-disable-next-line @typescript-eslint/member-ordering
    @ViewChild('productbtn', { read: ElementRef })productbtn: ElementRef;
    constructor() { }

  ngOnInit() {}

  hideDropdown(event){
    const xTouch = event.clientX;
    const yTouch = event.clientY;
    const react = this.productbtn.nativeElement.getBoundingClientReact();
    const topBoundary = react.top+2;
    const leftBoundary = react.left+2;
    const rightBoundary = react.right+2;
  }

}
