import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrafficLightService {
  // lights = new Subject <string>()
  lights = new BehaviorSubject <string>('verde')
  public lights$ = this.lights.asObservable() // convierto mi subjet en un observable
  private lastValue: string = 'verde'

  constructor() {
    // this.lights.next('verde')
    interval(1000).subscribe(() => this.lastValue === 'verde' ? this.lights.next('rojo') : this.lights.next('verde'))
    this.lights.subscribe((valor) => (this.lastValue = valor))
  }
}
