import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core'

import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import {MatSelectModule} from '@angular/material/select'

@Component({
  selector: 'pfc-test-page',
  imports: [ReactiveFormsModule, MatSelectModule],
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestPageComponent implements OnInit {
  private fb = inject(FormBuilder)

  options: { title: string, value: number }[] = [
    {
      title: 'Title 1',
      value: 1,
    },
    {
      title: 'Title 2',
      value: 2,
    },
    {
      title: 'Title 3',
      value: 3,
    },
    {
      title: 'Title 4',
      value: 4,
    },
  ]

  protected form: FormGroup<{
    selection: FormControl<number>
  }>

  constructor() {
    this.form = this.fb.group({
      selection: [null as number, Validators.required],
    })
  }

  ngOnInit(): void {
  }

  handleSubmit() {
    console.log(this.form.value)
  }
}
