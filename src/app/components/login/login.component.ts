import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenicationService } from '../../core/services/authenication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private authenicationService: AuthenicationService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  submit() {
    if (this.form.valid) {
      let loginData = this.form.value;
      this.authenicationService.login(loginData)
      .subscribe(res => {
        this.router.navigate([''])
      });
    }
  }

  
}
