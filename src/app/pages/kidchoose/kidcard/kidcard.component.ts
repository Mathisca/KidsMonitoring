import {Component, Input, OnInit} from '@angular/core';
import {Kid, KidService} from '../../../services/kid.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-kidcard',
  templateUrl: './kidcard.component.html',
  styleUrls: ['./kidcard.component.scss'],
})
export class KidcardComponent implements OnInit {

  @Input() kid: Kid;

  constructor(private router: Router, private kidServ: KidService) { }

  ngOnInit() {}

  onClick() {
    this.kidServ.currentKid = this.kid.id;
    this.router.navigateByUrl('/main/dashboard');
  }
}
