import { Component, OnInit } from '@angular/core';
import { TaskService} from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private user: TaskService, private _router: Router) { }

  private name;
  
  session = this.user.session

  private polls;

  private input = {
    key: ''
};
private count = 0; 

  ngOnInit() {
    if(this.user.session == null){
      this._router.navigateByUrl('/')
    }
    this.retrieveid();

    this.displayPolls();
  }

  logout() {
    this.user.logout()
    .then(data => this._router.navigateByUrl('/'))
    .catch(err => console.warn(err));
  }

  retrieveid() {
    this.user.retrieveid((data) => {
    this.name = data.name;
    console.log(this.name)
    })
  }


  // countthree (data) {
  //   var cdate = data[0]
  //   if(this.count < 3) {
  //     for(let i of data) {
  //       if(i.date == cdate.date) {
  //         this.count += 1;
  //       }
  //     }
  //     console.log(this.count)
  //   }
  //   }

  displayPolls() {
    this.user.displayPolls((data) => {
      // console.log("data",data)
      this.polls = data
      console.log("display all appointments polls", this.polls)
    });
  }

  deletePoll(id) {
    this.user.deletePoll(id)
    .then(data => this._router.navigateByUrl('/dashboard'))
    .catch((err) => console.warn(err));
    this.displayPolls()
  }

}
