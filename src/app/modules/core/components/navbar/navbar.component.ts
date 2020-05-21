import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() toggleState = new EventEmitter<boolean>();

  sidebarVisible = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  sidebarToggle() {
    this.sidebarVisible === false ? this.sidebarOpen() : this.sidebarClose();
  }

  sidebarOpen() {
    this.toggleState.emit(true);
    this.sidebarVisible = true;
  }

  sidebarClose() {
    this.toggleState.emit(false);
    this.sidebarVisible = false;
  }

}
