import { Component, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { TrafficLightService } from 'src/app/services/traffic-light.service';


@Component({
  selector: 'app-car1',
  templateUrl: './car1.component.html',
  styleUrls: ['./car1.component.scss']
})
export class Car1Component implements OnDestroy {
    lightsSubscription: Subscription;

  constructor(public trafficLightService: TrafficLightService){
    this.lightsSubscription =  this.trafficLightService.lights.subscribe(console.log)
  }
  ngOnDestroy(): void {
    this.lightsSubscription.unsubscribe();
  }
}
