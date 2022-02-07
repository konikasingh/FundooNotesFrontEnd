import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/UserService/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm!:FormGroup;
  submitted = false;
  token:any;
  passwordHide=true;
  constructor(private formBuilder: FormBuilder,private userService: UserService,private activatedRoute:ActivatedRoute,
    private route:Router) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
    this.token=this.activatedRoute.snapshot.paramMap.get('token');
  }
  resetPassword() { 
    this.submitted=true;
    if(this.resetPasswordForm.valid)
    {
      console.log(this.resetPasswordForm.value,this.token);
      let reqresetPassword={
      newPassword:this.resetPasswordForm.value.password,
      confirmPassword:this.resetPasswordForm.value.confirmPassword,       
     }
     this.userService.userResetPassword(reqresetPassword,this.token).subscribe((response:any)=>{
       console.log(response)
       
     })
    }
    else
    {
      console.log("invalid");
    }
  }
}
