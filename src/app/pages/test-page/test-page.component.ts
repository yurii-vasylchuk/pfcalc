import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {MatButtonModule} from '@angular/material/button';
import {BehaviorSubject, filter} from 'rxjs';

@Component({
    selector: 'pfc-test-page',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, MatSelectModule, NgxMatSelectSearchModule, MatButtonModule],
    templateUrl: './test-page.component.html',
    styleUrls: ['./test-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestPageComponent implements OnInit {
    protected formGroup: FormGroup;

    protected options: BehaviorSubject<Option[]> = new BehaviorSubject<Option[]>([]);

    constructor(private fb: FormBuilder) {
        this.formGroup = fb.group({
            select: [null, Validators.required],
            selectSearch: [null],
        });

        this.formGroup.get('selectSearch').valueChanges.pipe(filter(search => !!search)).subscribe(search => {
            console.log(`loading '${search}'`);
            this.options.next(this.generateOptions(search));
        });
    }

    ngOnInit(): void {
        this.options.next(this.generateOptions());
    }

    handleSubmit() {
        console.log(this.formGroup.value);
    }

    private generateOptions(search?: string) {
        const res: Option[] = [];
        for (let i = 0; i < 10; i++) {
            res.push(new Option(`${search ?? 'Option'} ${i}`, i));
        }
        return res;
    }
}

class Option {
    constructor(public readonly name: string, public readonly id: number) {
    }
}
