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
    date: Date,
    time: '',
    complain: '',
    creator: '',
  }

  // private count = 0; 

  private today = new Date();
  private dd = this.today.getDate();


  ngOnInit() {
    this.retrieveid();
  }

  retrieveid() {
    this._us.retrieveid((data) => {
      // console.log("data?")
      this.name = data;
      // console.log("2name",this.name)
  })
  }

  // futuredate() {
  //   var today = new Date()
  //   if()
  // }

 

  createPoll() {
    console.log("today date", this.today)
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
