import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // 템플릿에 바인딩하기 위해서는 프로퍼티를 public으로 선언해야 함
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
