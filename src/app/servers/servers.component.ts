import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverCreateState = "Server not create yet ....! ";
  serverCreated = false;
  serverName = "";
  constructor() {
    setTimeout(() => {
      this.allowNewServer = false;
    }, 1000);
   }
  ngOnInit() {
  }
  onServerCreate (){
    this.serverCreated =  true;
    this.serverCreateState = "server created done  with name : "  + this.serverName;
  }
  /*onChangeServerName(e:Event){
    this.serverName = (<HTMLInputElement>e.target).value; 
  }*/

}
