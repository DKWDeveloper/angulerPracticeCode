import { Component } from '@angular/core';
import { asapScheduler, asyncScheduler, interval, map, merge, of, queueScheduler, switchMap } from 'rxjs';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent {
  title: string = 'Scheduler';

  ngOnInit() {
    this.BasicOfscheduler()
    this.sch();

  }


  /**Basic example of scheduler */
  BasicOfscheduler() {
    console.log('Script starting')
    let queueScheduler$ = of('Queue Scheduler', queueScheduler);
    let asyncScheduler$ = of('async Scheduler', asyncScheduler);
    let asapScheduler$ = of('asap Scheduler', asapScheduler)

    merge(asyncScheduler$, queueScheduler$, asapScheduler$).subscribe((data) => {
      console.log(data);
    })

    console.log('script ending')
  }

  sch() {
    // Fetch data from the API every 5 seconds
    const data$ = interval(3000, asyncScheduler).pipe(
      switchMap(() => fetch("https://jsonplaceholder.typicode.com/todos/1").then(res => res.json()))
    );

    // Subscribe to the data stream
    const subscription = data$.subscribe((data) => {
      console.log("Received data:", data);
    });

    // Cancel the subscription after 30 seconds
    asyncScheduler.schedule(() => {
      console.log("unsubscribe");
      subscription.unsubscribe();
    }, 30000);
  }
}
