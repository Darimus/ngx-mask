import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
})
export class AppComponent {
  form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.nonNullable.group({
      cpf: [""],
      tel: [""],
      ip: [""],
      data: [""],
    });
  }

  get cpf() {
    return this.form.get("cpf")!; // O ! serve para dizer ao TS que nunca será nulo esse campo
  }

  get tel() {
    return this.form.get("tel")!;
  }

  get ip() {
    return this.form.get("ip")!;
  }

  get data() {
    return this.form.get("data")!;
  }
}
