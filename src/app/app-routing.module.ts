
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { ThoisuComponent } from './thoisu/thoisu.component';
import { GiaitriComponent } from './giaitri/giaitri.component';
import { KinhdoanhComponent } from './kinhdoanh/kinhdoanh.component';
import { LamdepComponent } from './lamdep/lamdep.component';
import { TamsuComponent } from './tamsu/tamsu.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';

const routes: Routes = [
  {path: 'Trang Chủ', component:TrangchuComponent},
  {path: 'Thời Sự', component:ThoisuComponent},
  {path: 'Giải Trí', component:GiaitriComponent},
  {path: 'Kinh Doanh', component:KinhdoanhComponent},
  {path: 'Làm Đẹp', component:LamdepComponent},
  {path: 'Tâm Sự', component:TamsuComponent},
  {path: 'Đăng Nhập', component:DangnhapComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
