import {Autor} from '../../autor/model/autor';

export interface Libro {
  libroId: bigint;
  genero: string;
  nombre: string;
  fechaEmision: Date;
  autors: Autor;

}
