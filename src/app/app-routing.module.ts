import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuroutingComponent } from './menurouting/menurouting.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path: '', component: MenuroutingComponent, children: []},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
