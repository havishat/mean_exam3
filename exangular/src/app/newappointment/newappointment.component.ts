import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService} from '../task.service';

@Component({
  selector: 'app-newappointment',
  templateUrl: './newappointment.component.html',
  styleUrls: ['./newappointment.component.css']
})
export class NewappointmentComponent implements OnInit {

  constructor(private _us: TaskService, private _router: Router) { }

  private name: String;

  newpoll = {
    date: '',
    time: '',
    complain: '',
    creator: '',
  }

  // private count = 0; 



  ngOnInit() {
    this.retrieveid();
  }

  retrieveid() {
    this._us.retrieveid((data) => {
      this.name = data;
      // console.log("2name",this.name)
  })
  }


 

  createPoll() {
    
    this.newpoll.creator = this._us.session.name;
    console.log("poll", this.newpoll)
    this._router.navigate(["/dashboard"])
    this._us.create(this.newpoll, (res) => { //callback is here
      console.log("pollinfo2",res);
    },() => { //errorback function this is the second parameter of retrieveTasks
      console.log("error something");
    });

   
  }

}
