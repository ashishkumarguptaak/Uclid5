import { Component, OnInit, Inject } from '@angular/core';
import {Http} from "@angular/http"

@Component({
  selector: 'app-compiler',
  templateUrl: './compiler.component.html',
  styleUrls: ['./compiler.component.css']
})
export class CompilerComponent implements OnInit {
  output = "";
  size = "medium";
  background = "white";
  code = "";


  constructor(@Inject(Http) public _http) { }

  ngOnInit() {
  }

  TabOn() {
      event.preventDefault();
      this.code = this.code + '\t';
  }

  compile() {
    this._http.post('http://localhost:1818/compile',{Code:this.code}).subscribe(result => {
      this.output = result._body;
    });
  }

}
