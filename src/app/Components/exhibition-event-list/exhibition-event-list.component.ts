import { Component, OnInit } from '@angular/core';
import {EventService} from '../event.service';
import { Events} from '../events';
import {Event} from '../event';
@Component({
  selector: 'app-exhibition-event-list',
  templateUrl: './exhibition-event-list.component.html',
  styleUrls: ['./exhibition-event-list.component.css']
})
export class ExhibitionEventListComponent implements OnInit {
 
  CompEvents:Event[];
  constructor(private eservice:EventService) { 
    this.CompEvents=eservice.currevents;
  }

  ngOnInit() {
  }

}
