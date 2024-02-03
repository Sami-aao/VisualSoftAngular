import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FindFinanceComponent } from './finance/find-finance/find-finance.component';

export const routes: Routes = [


     // {path: ' ',
     //  pathMatch : 'full', 
     //  redirectTo: 'app'},


     {path : '', 
          component : FindFinanceComponent },


     {path : 'auth', 
     component : FindFinanceComponent },

     {path : 'admin', 
          component : FindFinanceComponent },


          //{ path: '',   redirectTo: '/app', pathMatch: 'full' },
];
