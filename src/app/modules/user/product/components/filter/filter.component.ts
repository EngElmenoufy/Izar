import { Component, inject, OnInit } from '@angular/core';
import { IconsComponent } from '../../../../../shared/components/icons/icons.component';
import { SelectComponent } from '../../../../../shared/components/select/select.component';
import { InputComponent } from '../../../../../shared/components/input/input.component';
import { OnlyNumbersDirective } from '../../../../../shared/directives/only-numbers.directive';
import { ClickOutsideDirective } from '../../../../../shared/directives/click-outside.directive';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [
    IconsComponent,
    SelectComponent,
    InputComponent,
    OnlyNumbersDirective,
    ClickOutsideDirective,
    ReactiveFormsModule,
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent implements OnInit {
  categoryOptions = ['man', 'woman', 'kids'];
  RatingsOptions = ['4.5 & Up', '4 & Up', '3.5 & Up', '3 & Up'];
  private readonly fb = inject(FormBuilder);

  activatedFilters: (string | undefined)[] = [];

  filterColors = [
    { background: '#ff6b6b', color: '#ffffff' },
    { background: '#27ae60', color: '#ffffff' },
    { background: '#f39c12', color: '#ffffff' },
    { background: '#8e44ad', color: '#ffffff' },
    { background: '#34495e', color: '#ffffff' },
    { background: '#ecf0f1', color: '#2c3e50' },
    { background: '#1abc9c', color: '#ffffff' },
    { background: '#d35400', color: '#ffffff' },
    { background: '#c0392b', color: '#ffffff' },
    { background: '#95a5a6', color: '#2c3e50' },
  ];

  filterForm!: FormGroup;

  ngOnInit(): void {
    this.initForm();
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

  sizeOptions = ['S', 'M', 'L', 'XL', '2XL', '3XL'];

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

    console.log(this.activatedFilters);
  }

  onSubmit(): void {
    console.log(this.filterForm.value);
    this.setActivatedFilters();
  }
}
