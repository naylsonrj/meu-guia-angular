import { Injectable } from '@angular/core';
import { Usuario } from './acesso/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  public cadastrarUsuario(usuario: Usuario): void {
    console.log('Chegamos até o serviço: ', usuario);
  }
}
