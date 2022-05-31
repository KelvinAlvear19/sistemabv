import { Component, OnInit, Input } from '@angular/core';
interface IData{
  id:number;
  agency:string;
}

@Component({
  selector: 'bv-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() dataAgency:any
  @Input() columns!:string[]
  objectKeys = Object.keys;
  pageActual: number=1;
  Alert:boolean=false;
  
  constructor() { }

  ngOnInit(): void {
  }

  deleteRow(rowId:number): void{
    if (confirm('Estas seguro de borrar?')) {
      var i = this.dataAgency.map((x: { id: any; })=>{
         x.id;
      }).indexOf(rowId);
      this.dataAgency.splice(i,1);
    }
  }

}
