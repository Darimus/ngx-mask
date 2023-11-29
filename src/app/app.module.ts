import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { NgxMaskDirective, provideNgxMask } from "ngx-mask";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxMaskDirective, ReactiveFormsModule],
  providers: [
    provideNgxMask({
      /* configs */
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
