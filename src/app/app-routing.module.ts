import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'xbox',
    loadChildren: () => import('./xbox/xbox.module').then( m => m.XboxPageModule)
  },
  {
    path: 'ps',
    loadChildren: () => import('./ps/ps.module').then( m => m.PsPageModule)
  },
  {
    path: 'pc',
    loadChildren: () => import('./pc/pc.module').then( m => m.PcPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
