import { AuthenticationService } from './../../services/authentication.service';
import { Subscription } from 'rxjs';
import { User } from './../../models/user';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];

  constructor(
      private authenticationService: AuthenticationService,
      private userService: UserService
  ) {
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
          this.currentUser = user;
      });
  }

  ngOnInit() {
      this.loadAllUsers();
  }

  ngOnDestroy() {
      this.currentUserSubscription.unsubscribe();
  }

  deleteUser(id: number) {
      this.userService.delete(id).pipe(first()).subscribe(() => {
          this.loadAllUsers();
      });
  }

  private loadAllUsers() {
      this.userService.getAll().pipe(first()).subscribe(users => {
          this.users = users;
      });
  }

}
