import { AbstractControl } from '@angular/forms';

export const mismatch = (control: AbstractControl) => {
  const password = control.get('password');
  const rePassword = control.get('rePassword');

  if (rePassword?.value === '') {
    return null;
  }

  if (password?.value !== rePassword?.value) {
    rePassword?.setErrors({
      mismatch: true,
    });
    return { mismatch: true };
  }

  return null;
};
