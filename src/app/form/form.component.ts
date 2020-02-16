import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(public service: NewsService) { }
  model: any = {};

  ngOnInit() {
  }
  onSubmit(conversationForm) {

    console.log(conversationForm.value);

    //post news
    const formData = new FormData();

    formData.append('name',this.model.name);
    formData.append('email',this.model.email);
    formData.append('message',this.model.message);

    this.service.post(formData);
  }

}
