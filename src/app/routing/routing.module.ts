import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule } from '@angular/router';
import {CourseComponent} from '../user/course/course.component';
import {UserComponent} from '../user/user.component';
import {ExhibitionEventListComponent} from '../exhibition-event-list/exhibition-event-list.component';
import {StageEventListComponent} from '../stage-event-list/stage-event-list.component';
import { EventDetailsComponent } from '../event-details/event-details.component';
import { EventStageDetailsComponent } from '../event-stage-details/event-stage-details.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path:'exhibition-event-list', component:ExhibitionEventListComponent},
      {path:'stage-event-list', component:StageEventListComponent},
      {path:'eventDetails/:ename', component:EventDetailsComponent},
      {path:'seventDetails/:sname', component:EventStageDetailsComponent},
     
    
    ])
  ],
  declarations: [],
  exports: [RouterModule]

})
export class RoutingModule { }
