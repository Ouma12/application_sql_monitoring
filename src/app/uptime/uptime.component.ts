import { MonitoringService } from './../monitoring.service';
import { uptime } from './../models/uptime';
import { Projects } from './../models/projects';
import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-uptime',
  templateUrl: './uptime.component.html',
  styleUrls: ['./uptime.component.css']
})
export class UptimeComponent implements OnInit {
 mergettable:any[]=[];
  

  constructor(private monitoringService:MonitoringService) { }


  ngOnInit(): void {
  this.monitoringService.getProject().subscribe(
    (data)=>{
      this.monitoringService.getJson().subscribe(
        (res)=>{
        this.mergettable=this.sortByAtoZ(this.mergetTable(data,res))
        }
      )
    }) 
  }
  sortByAtoZ(arr : any[]=[]) {
   const arr1=  arr.sort((a:any, b:any) =>{
      let keyA = a.name, keyB = b.name;
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
    return arr1
    }
   mergetTable(Projects: string | any[],uptime: any[]){
    let start =0;
    let merge=[];
    while(start<Projects.length){
      if(Projects[start].id==uptime[start].project_id){
        merge.push({...Projects[start],...uptime[start]})
      }
      start=start+1
    }
    return merge;
  }
 
}
