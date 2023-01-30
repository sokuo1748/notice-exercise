import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticeAddComponent } from './notice-add/notice-add.component';
import { NoticeIndexComponent } from './notice-index/notice-index.component';
import { NoticeReviseComponent } from './notice-revise/notice-revise.component';
const routes: Routes = [//routes in here
  { path: '', pathMatch: 'full', redirectTo: 'notice-index' },
  { path: 'notice-index', component: NoticeIndexComponent },
  { path: 'notice-revise', component: NoticeReviseComponent},
  { path:'notice-add',component:NoticeAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
