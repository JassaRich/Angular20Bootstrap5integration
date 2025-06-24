import { Routes } from '@angular/router';

import { Dashboard } from './dashboard/dashboard';
import { Users } from './users/users';
import { Reports } from './reports/reports';
import { Settings } from './settings/settings';
import { Login } from './login/login';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
 { path: 'dashboard', component: Dashboard },
  { path: 'users', component: Users },
  { path: 'reports', component: Reports },
  { path: 'settings', component: Settings },
  { path: 'login', component: Login },
];
