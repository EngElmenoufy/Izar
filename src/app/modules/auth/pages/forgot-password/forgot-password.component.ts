import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-forgot-password',
  imports: [ReactiveFormsModule, ButtonComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  forgotPasswordForm!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm(currentStep: number = 1): void {
    this.forgotPasswordForm = this.fb.group({});
  }

  onSubmit(): void {}
}
