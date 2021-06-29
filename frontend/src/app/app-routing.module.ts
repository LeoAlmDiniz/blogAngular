import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
//especificamente ele entende que é o home.component.ts (é coisa desse typescrit)

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, //acho que deu pra entender né: qdo for raiz, vai pra home
  {path: 'home', component: HomeComponent},
  {path: 'feed', component: FeedComponent},
  {path: 'contato', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
