import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Output,
  ViewChild,
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {TranslateModule} from '@ngx-translate/core';
import {MatButtonModule} from '@angular/material/button';
import {IMeal} from '../../commons/models/domain.models';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {Observable} from 'rxjs';
import {IPfcc} from '../../commons/models/common.models';
import {MatExpansionModule} from '@angular/material/expansion';

export interface AddMealDialogData {
  items: Observable<IDishOption[]>;
  filter: (val: string) => void;
}

@Component({
  selector: 'pfc-add-meal',
  standalone: true,
  imports: [CommonModule,
    TranslateModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule],
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddMealComponent {
  meals: IMeal[] = [];

  @Output()
  search = new EventEmitter<string | null>();

  @ViewChild('searchField')
  searchField!: ElementRef<HTMLInputElement>;
  selectedOptionId = 'NOTHING';

  constructor(private dialogRef: MatDialogRef<AddMealComponent>,
              private cdr: ChangeDetectorRef,
              @Inject(MAT_DIALOG_DATA) public data: AddMealDialogData) {
  }

  dishOptionTrackBy = (idx: number, item: IDishOption) => item.id;

  handleSearchChange() {
    this.data.filter(this.searchField.nativeElement.value);
  }

  handleOptionClick(selectedOptionId: string) {
    if (this.selectedOptionId === selectedOptionId) {
      this.selectedOptionId = 'NOTHING';
    } else {
      this.selectedOptionId = selectedOptionId;
    }
    this.cdr.markForCheck();
  }

  handleDeleteOptionClick(option: IDishOption) {
    if (option.type === 'dish' && option.delete != null) {
      option.delete();
    }
  }
}

export type DishOptionType = 'dish' | 'recipe' | 'raw-food';

interface IBaseDishOption {
  id: string;
  name: string;
  type: DishOptionType;
  pfcc: IPfcc;
}

export type IDishOption =
  (IBaseDishOption & { type: 'dish', delete?: (() => void) }) |
  (IBaseDishOption & { type: 'recipe' | 'raw-food' })
