import {ChangeDetectionStrategy, Component, input} from '@angular/core'

import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {TranslateModule} from '@ngx-translate/core'
import {Emittable, Emitter} from '@ngxs-labs/emitter'
import {NavigationState} from '../../state/navigation.state'
import {Navigation} from '../../state/navigation.state-model'
import NavigateBackPayload = Navigation.NavigateBackPayload

@Component({
  selector: 'pfc-dialog-page-heading',
  imports: [MatButtonModule, MatIconModule, TranslateModule],
  templateUrl: './dialog-page-heading.component.html',
  styleUrls: ['./dialog-page-heading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogPageHeadingComponent {
  readonly title = input<string>()
  @Emitter(NavigationState.navigateBack)
  protected goBack: Emittable<NavigateBackPayload>

  constructor() {
  }

  handleNavigateBackClicked() {
    this.goBack.emit({})
  }
}
