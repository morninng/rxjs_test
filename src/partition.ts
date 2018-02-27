import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/partition';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';

const number_sub = new ReplaySubject<number>(1);


const [evens, odd] = Observable.timer(0, 5000)
    .partition(x => x % 2 === 0);



const oddSubscription = 
odd.switchMap((data: number) => {

    console.log('pzrent', data);
    if(evenSubscription){
        evenSubscription.unsubscribe()
    }

    return Observable.timer(0, 500)

}).subscribe((data)=>{

    console.log('odd', data);
})


const evenSubscription = 
evens.switchMap((data: number) => {

    console.log('pzrent', data);
    if(oddSubscription){
        oddSubscription.unsubscribe()
    }

    return Observable.timer(0, 500)
}).subscribe((data)=>{

    console.log('even', data);
})

