import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { PeopleComponent } from './people/people.component'

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'people',
    component: PeopleComponent
  }
]