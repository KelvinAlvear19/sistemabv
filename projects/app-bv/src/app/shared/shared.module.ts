import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { TittleComponent } from './components/tittle/tittle.component';



@NgModule({
  declarations: [
    ContainerComponent,
    TittleComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TittleComponent,
    ContainerComponent
  ]
})
export class SharedModule { }
