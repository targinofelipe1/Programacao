import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './produto/cadastro/cadastro.component';
import { ListagemComponent } from './produto/listagem/listagem.component';

const routes: Routes = [
  {
    path: 'listarproduto',
    component: ListagemComponent,
  },
  {
    path: 'cadastrarproduto',
    component: CadastroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
