import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; // <— Imported
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService {

  constructor(private _http: Http) { }

  session;

  polls;
  

  //create appointment

  create(pollinfo, callback, errorback) {
    console.log("pollinfo1", pollinfo)
    this._http.post('/polls', pollinfo).subscribe(
      (response) => {
        callback(response.json());       
      },
      (error) => {
        errorback();
        console.log("could not display poll", error)
      }
    );
  }

  //display appointment

  displayPolls(callback) {
    console.log("1234")
    this._http.get('/polls').subscribe(
      (response) => {
        callback(response.json());
        console.log("display all appointment", response)      
      },
      (error) => {
        console.log("could not display polls", error)
      }
    );
  }

  //cancel appoinment
  deletePoll(id) {
    console.log("iddelete", id)
    return this._http.delete(`/polls/${id}`)
    .map((response: Response) => response.json())
    .toPromise();
}

    // dashboad logout 
    logout() {
      return this._http.get('/login/logout')
      .map((response: Response) => response.json())
      .toPromise();
  }



// login page created
createNote(user, callback) {
  console.log("in taskserv",user)
  return this._http.post('/login', user).subscribe(
    (response) => {
      console.log("login sent to response", response);
      this.session = response
      callback()
    },
    (error) => {
      console.log("could not login", error);
    }
  );
}

//get the user names 
retrieveid(callback) {
  this._http.get('/login/one').subscribe(
    (response) => {
      callback(response.json());      
    },
    (error) => {
      console.log("could not retrive all data", error)
    }
  );
}

}

