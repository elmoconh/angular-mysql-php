import {Component, OnInit, ViewChild, Renderer2, AfterViewInit} from '@angular/core';
import {ProductosService} from '../../productos.service';
import {Router} from '@angular/router';
import {Products} from '../../models/products';
declare var $;

@Component({
  selector: 'inicio-root',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit, AfterViewInit {
  public products: Products [];
  @ViewChild('productsTable', {static: false}) Table;
  public dataTable: any;
  public dtOptions;
  public tableElement: any;
  constructor(
    private crudService: ProductosService,
    private router: Router,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.crudService.getProducts().subscribe(data => {
      this.products = data;
    }, err => {}, () => {
      setTimeout(() => {
        this.dataTable = $(this.Table.nativeElement);
        this.tableElement = this.dataTable.DataTable(this.dtOptions);
      }, 1000);
    });
  }

  ngAfterViewInit(): void {
  }

  getNavigation(link, id) {
    if (id === '') {
      this.router.navigate([link]);
    } else {
      this.router.navigate([link + '/' + id]);
    }
  }

  deleteProduct(pID) {
this.crudService.deleteProduct(pID).subscribe(data => {
this.loadProducts();
})
}
}
