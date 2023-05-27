import {AfterViewInit, ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatSelect, MatSelectChange, MatSelectModule} from "@angular/material/select";
import {Store} from "@ngxs/store";
import {Language} from "../../commons/models/auth.models";
import {LanguageChangedEvent} from "../../state/auth/auth.state-models";
import {AuthState} from "../../state/auth/auth.state";
import {take} from "rxjs";
import {MatButtonModule} from "@angular/material/button";
import {ToggleMenuAction} from "../../state/ui/ui.state-model";

@Component({
  selector: 'pfc-heading',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatIconModule, MatSelectModule, MatButtonModule],
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadingComponent implements AfterViewInit {
  //TODO: Auto-infer
  protected availableLanguages: Language[] = ['ua', 'en'];
  protected isAuthenticated = this.store.select(AuthState.isAuthenticated);

  @ViewChild("langSelector")
  private langSelector!: MatSelect;

  constructor(private store: Store) {
  }

  handleLangChanged(selection: MatSelectChange) {
    this.store.dispatch(new LanguageChangedEvent(selection.value));
  }

  ngAfterViewInit(): void {
    this.store.select(AuthState.language)
      .pipe(take(1))
      .subscribe(value => {
        this.langSelector.writeValue(value);
      });
  }

  handleMenuClicked() {
    this.store.dispatch(new ToggleMenuAction())
  }
}
