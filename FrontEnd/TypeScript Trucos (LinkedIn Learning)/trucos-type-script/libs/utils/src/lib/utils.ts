import {Picture, Location, User, Name, SimpleNameType, Company}  from '@trucos-type-script/models';
export function utils(): string {
  return 'utils';
}

/**
 * Metodo para saludar al usuario
 * @param name nombre del usuario
 */
export function greet(name:string):string {
    return `Hola ${name}`;
}

export class Person{
  readonly name:string;
  lastName: string;
  age: number | undefined | null;
  location! :Partial<Location>;

  constructor(){
    this.name='yasmin';
  }

  getFullname(): string{
    return `${this.name} ${this.lastName}`;
  }
}


const person = new Person();
person.lastName = 'Lorenzo';
person.age = undefined;
person.location = {
  state:'Tabasco',
  country: 'Mexico'
}
person.getFullname();

const user: Required<User> = {
  gender:'',
  name: {},
  location:{
      street:{
        name: 'Periferico',
        number:30
      }
  },
  login:{},
  dob:{},
  registered:{},
  phone:'',
  cell:'',
  id:{},
  picture:{},
  nat:'',
  email:''
};

const name :Omit<Name,"title"> = {
  first:'Yasmin',
  last:'Femerling',
}

const name1: SimpleNameType= {
  first:'Yasmin',
  last:'Femerling',
}

const userPhoto:Readonly<Picture>={
  large: 'https://via.placeholder.com/300.png',
  medium: 'https://via.placeholder.com/150.png',
  thumbnail: 'http://via.placeholder.com/50.png'
}

function getStreetNumber(client:User | Company): number | string{
  if(client.location?.street?.number){
    return client.location.street.number;
  } else{
    return 'Sin numero';
  }
}

getStreetNumber(user); //?

//**Arreglos de solo lectura */
// const consoles: readonly [string,string,string] = 
// ['Commodore','Amstrad','ZX Spectrum'];

const consoles: ReadonlyArray<string> = 
['Commodore','Amstrad','ZX Spectrum'];
const consoles1: readonly string[] = 
['Commodore','Amstrad','ZX Spectrum'];

/**Identifiacion de tipos de datos */
// const status= true;
// let constrolStatus = status as boolean;

export async function getRemoteData(url: string){
  const response = await fetch(url);
  const body = await response.json();
  return body.results;
}

async function manageClients(){
  const clients = <User[]> 
   (await getRemoteData('https://randomuser.me/api?results=5'));
  clients[0];
}
manageClients();

/**Tipos de datos genericos */

interface KeyPair<T,U> {
  key:T;
  value:U;
}

const keypair1 : KeyPair<boolean,string> ={key:true,value:'Yes'};