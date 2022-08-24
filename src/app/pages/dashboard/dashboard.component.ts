import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr'
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  MinLengthValidator,
  Validators
} from '@angular/forms';
import { ClipboardService } from 'ngx-clipboard';
import { Router } from '@angular/router';
import { OnlineStatusService, OnlineStatusType } from 'ngx-online-status';
import { ApiService } from 'src/app/services/api.service';
// import { ToastrService } from 'ngx-toastr';
import { NotifierService } from 'angular-notifier';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  status: OnlineStatusType;
  OnlineStatusType = OnlineStatusType;
  form: FormGroup;
  submitted = false;
  disabled = false;
  // shortedUrl = null;
  domainName = 'dcutly.com';
  currentUrl = null;
  shortedUrl = '';
  visitUrl = '';
  Alias:string = '';
  URLlink:string = '';
  onlineStatus:any;
  constructor(private formBuilder: FormBuilder , private clipboardApi: ClipboardService , private router: Router, public apiService:ApiService , private onlineStatusService: OnlineStatusService, public toastr: ToastrService) { }


  copyText() {
    this.clipboardApi.copyFromContent(this.shortedUrl)
  }
  btnClick() {
    // this.router.navigateByUrl(this.visitUrl);
    window.open(this.shortedUrl, '_blank');


};

  ngOnInit(): void {



   this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
      if(!status) alert('Not connected to internet'); return false;
    });
  //  console.log('OnlineStatusType',this.OnlineStatusType);
  }




  onSubmit(): void {

    console.log('url',this.URLlink);
    console.log('alias',this.Alias);




    if (!this.URLlink || this.URLlink.length < 6) {
    return alert('Please enter the valid url');
    }



    let url:any = '';

    url =  this.Alias ? this.URLlink+'/'+this.Alias: this.URLlink ;


    this.shortedUrl = '';
    let params = {
      url:url,
      paramEncryption: true
  }

  let apiUrl = 'cut/short';
    this.apiService.post(apiUrl,params).subscribe((item:any) =>{
      this.shortedUrl = item.data[0];
      this.submitted = true;
      }, error=>{
      console.error(error);
      })





  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();



    // this.shortedUrl =`https://${this.f.Customize.value}/${this.f.Alias.value}`;
  }

}
