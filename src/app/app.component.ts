import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { EventsService } from './events.service';
import { map, tap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public events: EventsService) {}
  title = 'eventsCalendar';
  calendarEvents = new Array();
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };

  ngOnInit(): void {
    this.calendarOptions = {
      editable: true,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth'
      }
    };
    this.updateEvents();
  }

  updateEvents() {
    // this.events.eventSource$.subscribe(e => (this.calendarOptions.events = e));
    // console.log(this.calendarOptions);

    this.events
      .get('trips', null)
      .pipe(tap(e => console.log(e)))
      .subscribe(e => {
        this.calendarOptions.events = e;
        this.calendarEvents = e;
        console.log(e);
      });
  }

  deleteEvent(id) {
    console.log(id);
    this.events.delete(`trips/${id}`).subscribe(e => {});
  }
}
