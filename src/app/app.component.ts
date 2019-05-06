import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import {Router} from "@angular/router"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ashal';
  form: FormGroup;
  username: string;
  password: string;
  login:boolean;
  constructor(
    public fb: FormBuilder,
    private router: Router
  ) {
    this.form = fb.group({
      userName : ['', Validators.required],
      password : ['', Validators.required]
    });
  }

  ngOnInit(){
    this.login = true;
  }

  submit(){
    this.login = true;
    this.username = this.form.controls['userName'].value;
    this.password = this.form.controls['userName'].value;
    if(this.username == "ashal" && this.password == "ashal"){
      this.login = false;
      // this.router.navigate(['http:ashal-web.com/dashboard/report']);
    }
  }

}
