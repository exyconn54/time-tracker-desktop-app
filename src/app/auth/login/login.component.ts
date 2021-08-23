// Core Modules
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Services
// import { AuthService } from '@services/auth/auth.service';

// Const
// import { messages } from '@consts/message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { 
    this.initForm();
  }

  /**
  * Angular Life Cycle
  */
  ngOnInit(): void {
    
  }

  /**
 * Init Login Form
 */
  initForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  /**
   * Is form valid
   */
  get isFormValid() {
    return this.loginForm.valid;
  }

  /**
   * Is form dirty
   */
  get isFormDirty() {
    return this.loginForm.dirty;
  }

  /**
   * Login
   */
  login() {
    localStorage.setItem('token', 'dev-token');
    this.router.navigate(['projects']);
    if (!this.isFormValid) {
      return;
    }
  }
}
