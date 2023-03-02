import {
  ChangeDetectionStrategy,
  Component,
  NgZone,
  OnInit,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  Password,
  PasswordService,
} from 'src/app/services/password/password.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  passwords$: Observable<Password[]>;
  urlSubject = new BehaviorSubject('');
  url$ = this.urlSubject.asObservable();

  constructor(private zone: NgZone, private passwordService: PasswordService) {
    this.passwords$ = passwordService.get('sam');
  }

  ngOnInit(): void {
    this.zone.run(() => {
      this.getCurrentTab();
    });
  }

  async getCurrentTab() {
    console.log(window.location.toString());

    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    this.urlSubject.next(new URL(tabs[0].url!).hostname);
  }
}
