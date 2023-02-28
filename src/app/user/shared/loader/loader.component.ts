import { Component } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { LoaderState } from 'src/app/models/loader';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {

  isLoading: boolean = false;
  ngUnsubscribe = new Subject<void>();
  private subscription: Subscription;

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.subscription = this.loaderService.loaderState
      .subscribe((state: LoaderState) => {
        this.isLoading = state.show;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}