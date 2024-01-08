import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/service/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted: boolean = false;

  ////////////////////////////////////////////////////////////////////////
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService,
    private router: Router,
  ) {
  }
  ////////////////////////////////////////////////////////////////////////
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
    
  }
  ////////////////////////////////////////////////////////////////////////
  get fc() {
    return this.loginForm.controls
  }
  ////////////////////////////////////////////////////////////////////////
  submit() {
    this.isSubmitted = true
    if (this.loginForm.invalid) return
    this.userService.login(this.loginForm.value).subscribe((data) => {
      if (data.status) {
        this.toastrService.success(`${data.message}`, "Success")
        this.router.navigate(['home'])
      } else {
        this.toastrService.error(`${data.message}`, "Failed")
      }
    })

  }
  ////////////////////////////////////////////////////////////////////////
}
