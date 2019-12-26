import { Injectable } from '@angular/core';
import {CanDeactivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CreateEventRouteGuardService implements CanDeactivate<any> {

  constructor() { }

  canDeactivate(component): boolean {
    if (component.isDirty) {
      return window.confirm("There are some not saved changes. Are you sure?");
    }
    return true;
  }
}
