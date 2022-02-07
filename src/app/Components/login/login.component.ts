import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/UserService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
  submitted = true;
  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  login() { 
    this.submitted=true;
    if(this.loginForm.valid)
    {
      console.log(this.loginForm.value);
      let reqlogin={
       emailId:this.loginForm.value.email,
       password:this.loginForm.value.password,
      
     }
     this.userService.userLogin(reqlogin).subscribe((response:any)=>{
       console.log(response.userInfo.token)
       localStorage.setItem('token',response.userInfo.token)
     })
    }
    else
    {
      console.log("invalid");
    }
  }

}
