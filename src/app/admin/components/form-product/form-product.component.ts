import { Component, OnInit } from '@angular/core';

// FormGroup es un grupo de controles (email, titulo, descripción, etc) y
// FormBuilder son sirve para crear ese grupo rapidamente, seria la inyeccion.
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// importamos de angula en mo
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';

import { finalize } from 'rxjs/operators';

// importamos "services" para crear el producto.
import { ProductsService } from '../../../core/services/products/products.service';
import { MyValidators } from '../../../utils/validators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {
  form: FormGroup;
  image$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage
  ) {
// Aqui llamamos a esa construcción en vez de llamarla en ngOnInit.
    this.buildForm();
   }

  ngOnInit(): void {
  }

// Este método recibira la información que envia el boton.
// Imprime el valor actual que tiene el formulario, en "value" tendremos un json de todo los valores (id, title, etc).
// "event: Event" lo usamos para cancelar ese atash y que quite la accion por defecto, esto se hace porque un formulario
// por defecto en html intentara enviar esto y recargar la pag. 
// Se ejecuta la función, se pide que evite eventos por defecto y que haga el que queremos, si el formulario es valido,
// guardara en la constante product todos los valores de ese form, ira a productService y ejecutara la función "createProduct"
// creara el producto con todos los valores que estan en product, nos subscribimos para ver esos cambios y lo guardamos,
// luego pedimos qu emustre en consola lo que guardamos y por ultimo que vaya a "router" y navegue hasta esa ruta para
// que luego nos la muestre.
saveProduct(event: Event): void {
  event.preventDefault();
  if (this.form.valid){
    const product = this.form.value;
    this.productsService.createProduct(product)
    .subscribe((newProduct) => {
      console.log(newProduct);
      this.router.navigate(['./admin/products']);
    });
  }
}

// para subir el archivos se usara "angular FireStorage" que permite subir archivos a esta nube.
// se recibe un evento.
uploadFiel(event) {
// primero se necesitara el archivo y "target" nos daria el elemento que no lo dan en un array, se quiere el de la posicion uno.
  const file = event.target.files[0];
// al ya tener el archivo, se guardara en el directorio "name" (nombre de la carpeta).
  const name = 'image.png';
// ahora se necesita saber la referencia de ese archivo utilizando el "storage".
  const fileRef = this.storage.ref(name);
// despues de tener la referencia, se crea una tarea para subir el archivo que esta en esa carpeta.
  const task = this.storage.upload(name, file);

// como la tarea es un "observable" y se demorara en subir se procesara con un pipe.
// esto nos ayudara a saber cuando la carga finaliza o no.
  task.snapshotChanges()
  .pipe(
    finalize(() => {
//  se obtendra la url.
      this.image$ = fileRef.getDownloadURL();
// nos suscribimos para hacer que todo esto se procese.
      this.image$.subscribe(url => {
        console.log(url);
// esta "url" se le asignara al formulario en el campo de "image".
        this.form.get('image').setValue(url);
      });
    })
  )
  .subscribe();
}

// Crearemos un método "private", llamaremos la instancia de "formBuild" y mostrar un grupo basados en un Json.
// Luego los parametros es lo que necesitamos saber del E-Commerce.
// Dentro del array, el primer items es el estado inicial y el segundo items que es un array sera las validaciones requeridas.
private buildForm(): any {
  this.form = this.formBuilder.group({
    id: ['', [Validators.required]],
    title: ['', [Validators.required]],
// a parte de que el campo sea requerido, tendra nuetsra validacion ya creada.
    price: ['', [Validators.required, MyValidators.isPriceValid]],
    image: [''],
    description: ['', [Validators.required]]
    });
  }

  // cada vez que llame a esta variable, retorname este campo "price".
  get priceField (){
    return this.form.get('price');
  }
}
