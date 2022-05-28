import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { TittleComponent } from './components/tittle/tittle.component';
import { TableComponent } from './components/table/table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import swal from 'sweetalert';

@NgModule({
  declarations: [
    ContainerComponent,
    TittleComponent,
    ContainerComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports: [
    TittleComponent,
    ContainerComponent,
    TableComponent,
    NgxPaginationModule
  ]
})
export class SharedModule { }
