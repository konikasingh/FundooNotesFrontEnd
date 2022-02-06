import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/UserService/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  forgetPasswordForm!:FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,  private userService: UserService) { }

  ngOnInit(): void {
    this.forgetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  forgetPassword() { 
    this.submitted=true;
    if(this.forgetPasswordForm.valid)
    {
      console.log(this.forgetPasswordForm.value);
      let forgetPassword={
       email:this.forgetPasswordForm.value.email,    
     }
     this.userService.userforgetPassword(forgetPassword).subscribe((response:any)=>{
       console.log(response)
     })
    }
    else
    {
      console.log("invalid");
    }
  }

}
