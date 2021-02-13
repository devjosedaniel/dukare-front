export interface ResModelo {
  status: string;
  modelos: Modelo[];
}

export interface Modelo {
  id: number;
  nombre: string;
  estado: number;
  created_at?: any;
  update_at?: any;
}


export interface RespMoto {
  status: string;
  motos: Moto[];
}

export interface Moto {
  id?: number;
  modelo?: string;
  chasis?: any;
  motor?: any;
  cilindraje?: any;
  potencia?: any;
  enfriamiento?: any;
  arranque?: any;
  alimentacion?: any;
  encendido?: any;
  tipoenfriamiento?: any;
  capacidad?: any;
  colores?: any;
  transmision?: any;
  estado?: number;
  idproceso?: any;
  created_at?: string;
  update_at?: string;
}


export interface Usuario {
  id: number;
  usuario: string;
  rol: number;
  estado: number;
  created_at: string;
  updated_at: string;
}
