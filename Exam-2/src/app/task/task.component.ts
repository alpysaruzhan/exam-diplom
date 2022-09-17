import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {HttpService} from "../services/http.service";
import {Task} from "../Task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  public tasks:Task[] = []
  public text:any
  constructor(public service:HttpService, public http: HttpClient) { }
  ngOnInit(): void {
    this.service.getTasks().subscribe(result=>{
      this.tasks = result
    })

  }
  deleteTask(task: Task):void{
    this.http.delete(`http://localhost:3000/tasks/${task.id}`).subscribe(console.log)
    this.tasks = this.tasks.filter(p => p!== task)

  }
  clickTask(text:any){
   const body = {name: this.text, data: '19.07.22', done: true};
    this.http.post<any>('http://localhost:3000/tasks', body).subscribe(res=>{
      this.tasks.push(res)
    });  
    this.text = '';
  }
}
