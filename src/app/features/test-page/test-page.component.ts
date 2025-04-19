import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import {MatSelectModule} from '@angular/material/select'

@Component({
  selector: 'pfc-test-page',
  imports: [CommonModule, ReactiveFormsModule, MatSelectModule],
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestPageComponent implements OnInit {
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

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      selection: [null as number, Validators.required],
    })
  }

  ngOnInit(): void {
  }

  handleSubmit() {
    console.log(this.form.value)
  }
}
