import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {MatButtonModule} from '@angular/material/button';
import {combineLatest, of, Subject} from 'rxjs';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'pfc-test-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatSelectModule, NgxMatSelectSearchModule, MatButtonModule, RouterLink],
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestPageComponent {
  fireEvents() {
    const s1 = of('s1-1');
    const s2 = new Subject();
    setTimeout(() => {
      s2.next('s2-1');
      s2.complete();
    }, 500)

    combineLatest([s1, s2])
      .subscribe(res => console.log(res));
  }
}
