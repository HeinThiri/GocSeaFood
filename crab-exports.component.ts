import { Component,HostListener, ElementRef,Input } from '@angular/core';

@Component({
  selector: 'app-crab-exports',
  templateUrl: './crab-exports.component.html',
  styleUrls: ['./crab-exports.component.css']
})
export class CrabExportsComponent {
  isShow?:boolean;
  topPosToStartShowing = 100;
  @HostListener('window:scroll')
  checkScroll() {
      
    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}


