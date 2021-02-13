export class MotoModel {
  id: number;
  modelo: string;
  chasis: any;
  motor: any;
  cilindraje: any;
  ref: any;
  cpn: any;
  cn1: any;
  cn2: any;
  estado: number;
  idproceso: number;
  proceso: string;
  colorestado: string;
  color1: string;
  color2: string;
  // tslint:disable-next-line: variable-name
  created_at: string;
  // tslint:disable-next-line: variable-name
  update_at: string;
  anio: string;

  constructor() {
      this.idproceso = 1;
      this.chasis = '';
      this.motor = '';
      this.cilindraje = '';
      this.ref = '';
      this.cpn = '';
      this.cn1 = '';
      this.cn2 = '';
      this.color1 = '';
      this.color2 = '';
      this.anio = '';
      this.estado = 1;
  }
}
