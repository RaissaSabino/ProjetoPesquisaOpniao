import { Component, OnInit,  ViewChild, AfterViewInit } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';

export interface Forms {
  NomeForm: string;
  ativo: string;
  qtdPergunta: number;
}

@Component({
  selector: 'app-home-adm',
  templateUrl: './home-adm.component.html',
  styleUrls: ['./home-adm.component.css']
})
export class HomeAdmComponent implements OnInit {

  array: Array<Forms> = [];

  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};

  constructor() {}

  Ativo: boolean;

  ngOnInit(): void {
    for (let i = 1; i < 30; i++) {
      this.array.push({
        NomeForm: 'Formulário ' + i,
        ativo : i%2 > 0 ? "Sim" : "Não",
        qtdPergunta: 10,
      });
    }

    this.dtOptions = {
      language: {
        url: '//cdn.datatables.net/plug-ins/1.12.1/i18n/pt-BR.json',
      },
      columnDefs: [{ targets: [0], orderable: false }],
      lengthChange: false,
      lengthMenu: [
        [9, 25, 50, -1],
        [9, 25, 50, 'All'],
    ],
    };
  }

  ngAfterViewInit(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns(1).every(function () {
        const that = this;
        $('#nomeEvento' as unknown as HTMLInputElement).on('keyup', function () {
          console.log(this.value);
          that.search(this.value).draw();
        });
      });
    });
  }

  ativo(ativo:string){
    if(ativo == 'Sim'){
      this.Ativo = true;
    }
    else{
      this.Ativo = false;
    }
  }
}
