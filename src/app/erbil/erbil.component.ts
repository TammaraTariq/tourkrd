import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-erbil',
  templateUrl: './erbil.component.html',
  styleUrls: ['./erbil.component.css']
})
export class ErbilComponent implements OnInit {

  constructor(public db:AngularFireDatabase) {

    

   }

  ngOnInit() {
  }



}
