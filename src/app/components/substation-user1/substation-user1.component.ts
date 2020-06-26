import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-substation-user1',
  templateUrl: './substation-user1.component.html',
  styleUrls: ['./substation-user1.component.css']
})
export class SubstationUser1Component implements OnInit {
  subSationList=[];
  subscription={};
  devicesList=[];
  selectedSubstation='';
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getSubstationList();
  }

   //get substation list
   getSubstationList() {
    // let key = this.type==1?'SUB_STATIONS':'STREET_LIGHT'
    this.subscription['getsubstationList'] = this.apiService.getSubStationList('SUB_STATIONS').subscribe(res=>{
        this.subSationList = res['SUB_STATIONS'];
    });
  }

    //get device list from selected substation
    getDeviceList() {
      this.subscription['getDevicesList'] = this.apiService.getDevicesList(this.selectedSubstation).subscribe(res=>{
          this.devicesList = res.devices;
      })
    }

//change substation callback
changeSubStation(){
  this.devicesList=[];
   if(this.selectedSubstation) {
      this.getDeviceList();
   }
}


  
}
