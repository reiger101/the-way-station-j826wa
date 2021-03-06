import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  servers = ['testserver 1', 'testserver 2'];
  
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },5000);
  }

  ngOnInit() {

  }

  onCreateServer() {
    this.serverCreationStatus = 'Server created!';
    this.servers.push(this.serverName);
  }
}