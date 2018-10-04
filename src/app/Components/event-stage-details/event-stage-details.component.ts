import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from'@angular/router';
import {EventService} from '../event.service';
import {Event} from '../event';

@Component({
  selector: 'app-event-stage-details',
  templateUrl: './event-stage-details.component.html',
  styleUrls: ['./event-stage-details.component.css']
})
export class EventStageDetailsComponent implements OnInit {
  eventObjects:Event;
  CompEvents:Event[];
    constructor(private route:ActivatedRoute,private eservice:EventService) { 
      this.CompEvents=eservice.currevents;
    }
  
    ngOnInit() {
      this.route.paramMap
      .subscribe(params=>{
        let evName=params.get('sname');
       this.eventObjects=this.eservice.getEvent(evName);
      })
    }
  
  }
  