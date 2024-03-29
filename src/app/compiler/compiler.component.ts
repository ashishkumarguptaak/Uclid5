import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import {Http} from "@angular/http";
import { ViewChild } from '@angular/core';
import bsCustomFileInput from 'bs-custom-file-input';


@Component({
  selector: 'app-compiler',
  templateUrl: './compiler.component.html',
  styleUrls: ['./compiler.component.css']
})
export class CompilerComponent implements OnInit {

  baseURL = 'http://localhost:1818';
  output = "";
  size = "medium";
  background = "white";
  code = "";
  uploadSpinner: boolean = false;
  compileSpinner: boolean = false;
  private fileText;


  constructor(@Inject(Http) public _http) { }

  ngOnInit() {
    bsCustomFileInput.init();
  }

  TabOn() {
      event.preventDefault();
      this.code = this.code + '\t';
  }

  compile() {
    this.compileSpinner = true;
    this._http.post(this.baseURL+'/compile',{Code:this.code, FileName: "uclid" + Date.now() + ".ucl"}).subscribe(result => {
      this.output = result._body;
      this.compileSpinner = false;
    });
  }


  fileUpload(event) {
    var reader = new FileReader();
    reader.readAsText(event.srcElement.files[0]);
    var me = this;
    reader.onload = function () {
      me.fileText = reader.result;
    }
  }

  compileFile(){
   this.uploadSpinner = true;
    if(this.fileText === undefined){
    this.uploadSpinner=false;
    return ;}
    this._http.post(this.baseURL+'/compile', {Code:this.fileText, FileName: "upload" + Date.now() + ".ucl"}).subscribe(result => {
      this.output = result._body;
      this.uploadSpinner = false;
    });
  }
}
