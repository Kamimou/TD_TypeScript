import { Adresse } from './Adresse';

export class Personne {
  private _prenom: string;
  private _nom: string;
  private _age: number;
  private _adresse: Adresse;

  constructor(prenom: string, nom: string, age: number, adresse: Adresse) {
    if (age < 0) {
      throw new Error('Age invalide');
    }
    this._prenom = prenom;
    this._nom = nom;
    this._age = age;
    this._adresse = adresse;
  }
  
  get prenom(): string { return this._prenom; }
  set prenom(value: string) { this._prenom = value; }

  get nom(): string { return this._nom; }
  set nom(value: string) { this._nom = value; }

  get age(): number { return this._age; }
  set age(value: number) {
    if (value < 0) {
      throw new Error('Age invalide');
    }
    this._age = value;
  }

  get adresse(): Adresse { return this._adresse; }
  set adresse(value: Adresse) { this._adresse = value; }
}
