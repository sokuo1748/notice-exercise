import { Component, OnInit ,Input } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";

@Component({
  selector: 'app-notice-add',
  templateUrl: './notice-add.component.html',
  styleUrls: ['./notice-add.component.css']

})

export class NoticeAddComponent implements OnInit {
  constructor(private http:HttpClient,
    private router:Router,
    ){}
  title='';
  release_date='';
  deadline_date='';
  detail='';
  ngOnInit() {
    
  }
  
  add(){
    console.log(this.title)
    console.log(this.release_date)
    console.log(this.deadline_date)
    console.log(this.detail)
    if(this.title && this.release_date && this.deadline_date && this.detail){
      var add = {
        "title":this.title,
        "detail":this.detail,
        "release_date":this.release_date,
        "deadline_date":this.deadline_date,
      };
      this.http.post("/notice/addnotice",add)
        .subscribe(data =>{
          console.log(data);
        })
        this.router.navigate(['notice-index']);

    }
  }

  
  public Editor: any = ClassicEditor;
 
}


