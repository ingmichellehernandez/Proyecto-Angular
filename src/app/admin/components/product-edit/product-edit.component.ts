import { Component, OnInit } from '@angular/core';

// FormGroup es un grupo de controles (email, titulo, descripción, etc) y
// FormBuilder son sirve para crear ese grupo rapidamente, seria la inyeccion.
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// importamos de angula "router" para poder usar las rutas y "ActiveRoute" que nos ayudara a obtener el ID del producto.
// "params" lo importamos para tipar datos. 
import { Router, ActivatedRoute, Params } from '@angular/router';
// importamos "services" para crear el producto.
import { ProductsService } from '../../../core/services/products/products.service';
import { MyValidators } from '../../../utils/validators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
// Aqui llamamos a esa construcción en vez de llamarla en ngOnInit.
    this.buildForm();
   }
// aqui vamos a saber el ID.
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productsService.getProduct(this.id)
      .subscribe(product => {
        this.form.patchValue(product);
        // this.form.patchValue({ 
        //   se puede ir indicando con que se llenaran esos campos o hacerlo general.
        //   id: product.id,
        //   description: product.description
        // })
      });
    });
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
    this.productsService.updateProduct(this.id, product)
    .subscribe((newProduct) => {
      console.log(newProduct);
      this.router.navigate(['./admin/products']);
    });
  }
}

// Crearemos un método "private", llamaremos la instancia de "formBuild" y mostrar un grupo basados en un Json.
// Luego los parametros es lo que necesitamos saber del E-Commerce.
// Dentro del array, el primer items es el estado inicial y el segundo items que es un array sera las validaciones requeridas.
private buildForm(): any {
  this.form = this.formBuilder.group({
    title: ['', [Validators.required]],
// a parte de que el campo sea requerido, tendra nuetsra validacion ya creada.
    price: ['', [Validators.required, MyValidators.isPriceValid]],
    image: [''],
    description: ['', [Validators.required]]
    });
  }

  // cada vez que llame a esta variable, retorname este campo "price".
  get priceField () {
    return this.form.get('price');
  }

}
