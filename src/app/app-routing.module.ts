import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'feature1', pathMatch: 'full' },
  {
    path: 'feature1',
    loadChildren: () =>
      import('./features/feature1/feature1.module').then(
        (m) => m.Feature1Module
      ),
  },
  {
    path: 'feature2',
    loadChildren: () =>
      import('./features/feature2/feature2.module').then(
        (m) => m.Feature2Module
      ),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
