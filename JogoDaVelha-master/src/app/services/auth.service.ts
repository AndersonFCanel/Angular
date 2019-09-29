import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private publicKey = '4c0dc4701d397d82609a8906ef642407';
  private privateKey = '3432c61dd5d29334205e54a350807b961f47524a';

  constructor() { }

  getHash(timeStamp: string): string {
    const hashGenerator: Md5 = new Md5();
    hashGenerator.appendStr(timeStamp);
    hashGenerator.appendStr(this.privateKey);
    hashGenerator.appendStr(this.publicKey);
    const hash: string = hashGenerator.end().toString();
    return hash;
  }

  getTimeStamp(): string {
    return (Date.now() / 1000 | 0).toString();
  }

  getPublicKey(): string {
    return this.publicKey;
  }
}
