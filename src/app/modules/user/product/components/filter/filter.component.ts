import {
  Component,
  effect,
  inject,
  input,
  OnInit,
  output,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ResizeService } from '../../../../../core/services/resize.service';
import { IconsComponent } from '../../../../../shared/components/icons/icons.component';
import { OverlayComponent } from '../../../../../shared/components/overlay/overlay.component';
import { SelectComponent } from '../../../../../shared/components/select/select.component';
import { OnlyNumbersDirective } from '../../../../../shared/directives/only-numbers.directive';
import { colors } from '../../../../../shared/helpers/colors';

@Component({
  selector: 'app-filter',
  imports: [
    IconsComponent,
    SelectComponent,
    OnlyNumbersDirective,
    ReactiveFormsModule,
    OverlayComponent,
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
  host: {
    class: 'md:col-span-3 xl:col-span-2',
  },
})
export class FilterComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  readonly resizeService = inject(ResizeService);
  isMobileOpen = input<boolean>(false);
  closeMobileFilter = output<void>();

  categoryOptions = ['man', 'woman', 'kids'];
  RatingsOptions = ['4.5 & Up', '4 & Up', '3.5 & Up', '3 & Up'];
  sizeOptions = ['S', 'M', 'L', 'XL', '2XL', '3XL'];
  activatedFilters: (string | undefined)[] = [];

  filterColors = colors;

  filterForm!: FormGroup;

  constructor() {
    effect(() => {
      this.resizeService.isMobile();
      this.onCloseMobileFilter();
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  onCloseMobileFilter(): void {
    this.closeMobileFilter.emit();
  }

  initForm(): void {
    this.filterForm = this.fb.group({
      category: [''],
      rating: [''],
      minPrice: [''],
      maxPrice: [''],
      discount: ['all'],
      sizes: this.fb.control<string[]>([]),
    });
  }

  toggleSize(size: string) {
    const control = this.filterForm.get('sizes');
    const selected = control?.value || [];

    if (selected.includes(size)) {
      control?.setValue(selected.filter((s: string) => s !== size));
    } else {
      control?.setValue([...selected, size]);
    }
  }

  isSizeSelected(size: string): boolean {
    return this.filterForm.value.sizes!.includes(size);
  }

  onReset(): void {
    this.filterForm.reset({
      category: '',
      rating: '',
      minPrice: '',
      maxPrice: '',
      discount: 'all',
      sizes: [],
    });
    this.setActivatedFilters();
    this.onCloseMobileFilter();
  }

  setActivatedFilters() {
    const entities = Object.entries(this.filterForm.value);
    this.activatedFilters = entities
      .filter(
        (item) => item[1] && item[1] !== 'all' && (item[1] as string).length
      )
      .map((item) => {
        return item.join(': ');
      });
  }

  onSubmit(): void {
    console.log(this.filterForm.value);
    this.setActivatedFilters();
    this.onCloseMobileFilter();
  }
}
