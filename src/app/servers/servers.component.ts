import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowNewServer = false;
    serverCreationStatus = "No server was created!";
    serverName = "testServer";
    serverCreation = false;
    servers = ['testServer', 'testServer2']

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000)
    }

    ngOnInit(): void {
    }

    onCreateServer() {
        this.serverCreation = true;
        this.servers.push('serverName');
        this.serverCreationStatus = "Server was created, and the server name is " + this.serverName;
    }

    onChangeServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}
