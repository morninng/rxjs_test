import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
console.log("Hello! Node.js × TypeScript");

interface TestIf {
    aaa: string;
    bbb: string;
}


const testSubject = new ReplaySubject<TestIf>(1);
const test$ = testSubject.map((data)=>{
    console.log("map");
    return {
        aaa: data.aaa + "1",
        bbb: data.bbb + "2"
    }
}).do(()=>{
    console.log("do");
})


function get_aaa(): Observable<string>{
    return test$.map((data: TestIf)=>{
        return data.aaa;
    })
}

function get_bbb(): Observable<string>{
    return test$.map((data: TestIf)=>{
        return data.bbb;
    })
}

get_aaa().subscribe((data)=>{
    console.log(data);

})

get_bbb().subscribe((data)=>{
    console.log(data);

})
testSubject.next({
    aaa:"AAA",
    bbb:"BBB"
})

testSubject.next({
    aaa:"AAAAAA",
    bbb:"BBBAAA"
})
