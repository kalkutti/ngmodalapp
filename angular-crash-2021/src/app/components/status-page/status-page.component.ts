import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-status-page',
  templateUrl: './status-page.component.html',
  styleUrls: ['./status-page.component.css']
})
export class StatusPageComponent {
  task: Task;
  
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private taskService: TaskService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.taskService.getSingleTask(id).subscribe((taskre) => { this.task = taskre; });
  }

  backClicked() {
    this.location.back();
  }
}
