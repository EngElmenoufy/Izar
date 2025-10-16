import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { Router, RouterLink } from '@angular/router';
import { mismatch } from '../../../../shared/helpers/mismatch';
import { AuthService } from '../../services/auth.service';
import { MessageService } from '../../../../core/services/message.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, InputComponent, ButtonComponent, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  // private readonly messageService = inject(MessageService);
  private readonly toastr = inject(ToastrService);
  private readonly router = inject(Router);

  registerForm!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^.{6,}$/)]],
      rePassword: [''],
    });
  }

  onRegister(): void {
    console.log('hello');
    if (this.registerForm.valid) {
      const { rePassword, ...formData } = this.registerForm.value;
      console.log(formData);
      this.authService.register(formData).subscribe({
        next: (res: any) => {
          this.authService.saveToken(res.user.token);
          this.router.navigate(['/']);
        },
      });
    }
  }
}
