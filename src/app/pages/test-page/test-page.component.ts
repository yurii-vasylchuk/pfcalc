import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'pfc-test-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatSelectModule, NgxMatSelectSearchModule, MatButtonModule],
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestPageComponent {

}
