import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InfographicComponent} from './components/infographic/infographic.component';


@NgModule({
  declarations: [
    InfographicComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InfographicComponent,
  ]
})
export class SharedModule {
}
