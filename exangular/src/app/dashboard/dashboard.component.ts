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

  displayPolls() {
    this.user.displayPolls((data) => {
      this.polls = data
      console.log("display all appointments polls", this.polls.creator)
    });
  }

  deletePoll(id) {
    this.user.deletePoll(id)
    .then(data => this._router.navigateByUrl('/dashboard'))
    .catch((err) => console.warn(err));
    this.displayPolls()
  }

}
