import { Pipe, PipeTransform } from '@angular/core';
import { IStatus } from '../interfaces/user/status.interface';

@Pipe({
  name: 'status',
})
export class StatusPipe implements PipeTransform {
  transform(status: boolean): string {
    const INVALID_STATUS = status === null || status === undefined;
    const ACTIVE_STATUS = status === true;
    if (INVALID_STATUS) {
      return 'Status indisponível ou inválido';
    }

    return status ? 'Ativo' : 'Inativo';
  }
}
