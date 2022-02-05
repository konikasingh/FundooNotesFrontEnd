import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/UserService/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = true;
  constructor(private formBuilder: FormBuilder,private userService: UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
  });
}
 register() { 
  this.submitted=true;
  if(this.registerForm.valid)
  {
    console.log(this.registerForm.value);
    let reqregister={
     firstName:this.registerForm.value.firstName,
     lastName:this.registerForm.value.lastName,
     emailId:this.registerForm.value.email,
     password:this.registerForm.value.password,
    
   }
   this.userService.userRegister(reqregister).subscribe((response:any)=>{
     console.log(response)
   })
  }
  else
  {
    console.log("invalid");
  }
}
}
