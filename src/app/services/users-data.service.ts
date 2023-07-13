import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  usersall : Object[] = [];
  private usersObs = new BehaviorSubject<Object[]>(this.usersall);
  
 
  
constructor() { }

addUsers(user: object){
this.usersall.push(user)
this.usersObs.next(this.usersall)
console.log(this.usersall);
}

getUsersObs(): Observable<Object[]>{
  return this.usersObs.asObservable()
}

isEmailUsed(email: string): boolean{
  const loweCaseEmail = email.toLowerCase()
  console.log(email);
  console.log("Wszystko:", this.usersall);
  return this.usersall.some((user: any) => user.email && user.email.toLowerCase() === loweCaseEmail);
}


}
