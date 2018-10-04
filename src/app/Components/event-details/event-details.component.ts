import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from'@angular/router';
import {EventService} from '../event.service';
import {Event} from '../event';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
eventObjects:Event;
CompEvents:Event[];
  constructor(private route:ActivatedRoute,private eservice:EventService) {
    this.CompEvents=eservice.currevents;
   }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params=>{
      let evName=params.get('ename');
     this.eventObjects=this.eservice.getEvent(evName);
    })
  }

}
