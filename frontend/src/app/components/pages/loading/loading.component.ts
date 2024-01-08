import { Component } from '@angular/core';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
  isLoading!:boolean;

  constructor(
    private loadingService: LoadingService
  ){
    loadingService.isLoading.subscribe((loading)=>{
      this.isLoading = loading
    })
  }

}
