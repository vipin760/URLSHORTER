import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnDestroy {
  isLoading!: boolean;
  subscription!: Subscription;
  ////////////////////////////////////////////////////////////////////////
  constructor(
    private loadingService: LoadingService
  ) {
    this.subscription = loadingService.isLoading.subscribe((loading) => {
      this.isLoading = loading
    })
  }
  ////////////////////////////////////////////////////////////////////////
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }
  ////////////////////////////////////////////////////////////////////////
}
