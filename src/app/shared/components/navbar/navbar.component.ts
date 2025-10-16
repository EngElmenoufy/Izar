import {
  Component,
  computed,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { OverlayComponent } from '../overlay/overlay.component';
import { Category } from '../../../core/models/category.interface';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../modules/auth/services/auth.service';
import { User } from '../../../core/models/user.interface';
import { IconsComponent } from '../icons/icons.component';

@Component({
  selector: 'app-navbar',
  imports: [PopupComponent, OverlayComponent, RouterLink, IconsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  isAuth = input<boolean>(false);
  private readonly authService = inject(AuthService);
  isOpenedCategoriesPopup = signal<boolean>(false);
  isOpenedUserPopup = signal<boolean>(false);
  isOpenedPopup = computed(
    () => this.isOpenedCategoriesPopup() || this.isOpenedUserPopup()
  );

  categories = signal<Category[]>([]);

  user = signal<User | undefined>(undefined);

  userAvatar = computed(() =>
    this.user()?.avatar ===
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAABAAEBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPwA='
      ? 'images/profile.jpg'
      : this.user()?.avatar
  );

  userName = computed(
    () => `${this.user()?.firstName} ${this.user()?.lastName}`
  );

  userLinks = computed(() => {
    const links = [
      {
        title: 'Account settings',
        icon: '<i class="fa-solid fa-gear"></i>',
      },
      {
        title: 'Sign out',
        icon: '<i class="fa-solid fa-arrow-right-from-bracket"></i>',
      },
    ];
    if (this.user()?.role === 'user') {
      links.unshift(
        {
          title: 'My Purchases',
          icon: '<i class="fa-solid fa-shop"></i>',
        },
        {
          title: 'My Purchases Requests',
          icon: '<i class="fa-solid fa-arrow-trend-up"></i>',
        }
      );
    } else if (this.user()?.role === 'seller') {
      links.unshift(
        {
          title: 'My Products',
          icon: '<i class="fa-solid fa-boxes-stacked"></i>',
        },
        {
          title: 'My Sales',
          icon: '<i class="fa-solid fa-magnifying-glass-dollar"></i>',
        },
        {
          title: 'My Sales Requests',
          icon: '<i class="fa-solid fa-arrow-trend-up"></i>',
        },
        {
          title: 'Add Product',
          icon: '<i class="fa-solid fa-plus"></i>',
        }
      );
    }
    return links;
  });

  ngOnInit(): void {
    // this.getAllCategories();
    // this.getUserData();
  }

  getUserData() {
    // const decodeToken = this.authService.decodeToken();
    // if (decodeToken) {
    //   this.userService.getUserById(decodeToken.id).subscribe({
    //     next: (res: any) => {
    //       if (res.status === 'success') {
    //         this.user.set(res.data);
    //       }
    //     },
    //   });
    // }
  }

  getAllCategories(): void {
    // this.categoryService.getAllCategories().subscribe({
    //   next: (res: Category[]) => {
    //     this.categories.set(res);
    //   },
    // });
  }

  onToggleCategoriesPopup() {
    this.isOpenedUserPopup.set(false);
    this.isOpenedCategoriesPopup.update((value) => !value);
  }

  onToggleUserPopup() {
    this.isOpenedCategoriesPopup.set(false);
    this.isOpenedUserPopup.update((value) => !value);
  }

  onClosePopup() {
    this.isOpenedCategoriesPopup.set(false);
    this.isOpenedUserPopup.set(false);
  }
}
