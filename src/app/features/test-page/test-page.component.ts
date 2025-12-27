import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core'

import {ReactiveFormsModule} from '@angular/forms'
import {MatSelectModule} from '@angular/material/select'
import {ApiService} from '../../service/api.service'
import {MatButton} from '@angular/material/button'
import {map, Observable} from 'rxjs'
import {IMeal} from '../../commons/models/domain.models'
import {AsyncPipe} from '@angular/common'
import {MatDialog} from '@angular/material/dialog'
import {EditMealDialogComponent} from '../dialogs/edit-meal-dialog/edit-meal-dialog.component'

@Component({
  selector: 'pfc-test-page',
  imports: [ReactiveFormsModule, MatSelectModule, MatButton, AsyncPipe],
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestPageComponent implements OnInit {
  protected meals$: Observable<IMeal[]>
  private api = inject(ApiService)
  private dialog = inject(MatDialog)

  ngOnInit(): void {
    this.meals$ = this.api.loadMeals(0, 10, null, null)
      .pipe(
        map(page => page.data),
      )
  }

  showDialog(meal: IMeal) {
    const matDialogRef = this.dialog.open(EditMealDialogComponent, {
      data: {meal: meal},
    })

    matDialogRef.afterClosed().subscribe(result => {
      console.log(result)
    })
  }
}
