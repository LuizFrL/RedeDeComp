import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../core/user/user.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Clipboard} from '@angular/cdk/clipboard';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user$: Observable<any>;
  textCopy = 'Copiar para área de transferência';
  @ViewChild('tooltip') manualTooltip: MatTooltip;

  constructor(
    private userService: UserService,
    private router: Router,
    private clipboard: Clipboard
  ) {
    this.user$ = this.userService.getUser();
  }

  ngOnInit(): void {
  }

  logOut(): void {
    this.userService.logOut();
  }

  copyUrlToClipboard(uid: string): void {
    this.clipboard.copy(window.location.origin + this.router.url + '/' + uid);
    this.textCopy = 'Url copiada com sucesso!';
    this.manualTooltip.show();
  }

  leaveTooltip(): void {
    this.manualTooltip.hide();
    this.textCopy = 'Copiar para área de transferência';
  }
}
