import { Component , OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-notice-index',
  templateUrl: './notice-index.component.html',
  styleUrls: ['./notice-index.component.css']
})
export class NoticeIndexComponent implements OnInit{

  constructor(private http:HttpClient,
  private router:Router){}
  childTitle = "";
  lists :any=[];
  id = "";
  str : String = "無資料";
  ngOnInit() {

    this.http.get("/notice/findAll")
      .subscribe(data =>{
        this.lists = data;
        console.log(this.lists);
      })
    if(this.lists ==null){
      this.str = "123";
    }
    
      
  }

  add(){
    
    this.router.navigate(['notice-add']);
  }
  
  revise(id: any){

    // let navigationExtras: NavigationExtras = {
    //   queryParams: { 'id': id },

    //   };
    //   this.router.navigate(['/notice-revise'],navigationExtras);
    this.router.navigate(['/notice-revise'],{
      queryParams:{
        id:id
      }
    });
  }
  
  dele(list: any){
    console.log(list.id)
    this.http.delete("/notice/dele/"+list.id)
      .subscribe(data=>{
        console.log("dele"+ data +" success!!!");
      })
      location.reload()
  }
}

