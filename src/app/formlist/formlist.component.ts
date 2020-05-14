import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './formlist.component.html',
  styleUrls: ['./formlist.component.css'],
})
export class FormListComponent implements OnInit {
  @Input() users: any;
  ngOnInit(): void {}
}
