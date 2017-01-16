import { Subscription } from 'rxjs';

export class SharedService {
    currentSubscription: Subscription;

    cancelAllRequests(): void {
        console.log("in ther service current subscription", this.currentSubscription)
        if (this.currentSubscription) {
            this.currentSubscription.unsubscribe();
            console.log("all requests canceled");
            this.currentSubscription = null;
        }
    }
}