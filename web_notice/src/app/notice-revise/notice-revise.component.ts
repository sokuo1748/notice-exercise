import { Component ,OnInit ,Input} from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-notice-revise',
  templateUrl: './notice-revise.component.html',
  styleUrls: ['./notice-revise.component.css']
})
export class NoticeReviseComponent implements OnInit{
  @Input() id: string | undefined;
  title="";
  release_date='';
  deadline_date='';
  detail='';  
  lists :any=[];
  ids="";
  constructor(public route:ActivatedRoute,
    public router:Router,
    public http:HttpClient
    ){ }
  ngOnInit(): void {
    this.route.queryParams.subscribe(q =>{
      this.ids = q['id'];
    })
    console.log(this.ids)
    this.http.get("/notice/find/"+ this.ids).subscribe(
      data=>{
        this.lists = data;
        console.log(this.lists)
      }
    )
  }
  

  revise(){
    console.log(this.title)
    console.log(this.release_date)
    console.log(this.deadline_date)
    console.log(this.detail)
    if(this.title && this.release_date && this.deadline_date && this.detail !=""){
      var revise = {
        "id": this.ids,
        "title":this.title,
        "detail":this.detail,
        "release_date":this.release_date,
        "deadline_date":this.deadline_date,
      };
      this.http.put("/notice/put",revise)
      .subscribe(data=>{
        console.log(data);
      })
      this.router.navigate(['notice-index']);
    }
    
  }

}