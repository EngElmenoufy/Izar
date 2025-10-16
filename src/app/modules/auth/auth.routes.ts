import { Routes } from '@angular/router';
import { AuthLayoutComponent } from '../../layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent, title: 'IZAR | Login' },
      {
        path: 'register',
        component: RegisterComponent,
        title: 'IZAR | Register',
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        title: 'IZAR | Forgot Password',
      },
    ],
  },
];
