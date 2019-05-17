import {Component, Input, OnInit} from '@angular/core';
import {Kid} from '../../../services/kid.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-kidcard',
  templateUrl: './kidcard.component.html',
  styleUrls: ['./kidcard.component.scss'],
})
export class KidcardComponent implements OnInit {

  @Input() kid: Kid;

  constructor(private location: Location) { }

  ngOnInit() {}

  onClick() {
    console.log('a');
    this.location.go('/dashboard');
  }
}
