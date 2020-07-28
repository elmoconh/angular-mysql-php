import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ProductosService} from '../../productos.service';

@Component({
  selector: 'app-subir',
  templateUrl: './subir.component.html',
  styleUrls: ['./subir.component.css']
})
export class SubirComponent implements OnInit {

 productForm: FormGroup;
  constructor(
      private fb: FormBuilder,
      private crudService: ProductosService,
      private router: Router) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      desc: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(1000)])],
      price: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
  }

  saveProduct(values){
    const productData = new FormData();
    productData.append('name', values.name);
    productData.append('description', values.desc);
    productData.append('price', values.price);
    this.crudService.createProduct(productData).subscribe(result => {
      this.router.navigate(['']);
    });
  }
  }