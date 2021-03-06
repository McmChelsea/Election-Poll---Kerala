import { Component, OnInit, AfterViewInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { FireServiceService } from './fire-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ConstantPool } from '@angular/compiler';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit,AfterViewChecked {
    btnSbtDisabled = false;
    remainingSeats = 543;
    title = 'ElecPoll';
    a: any;
    isLinear = false;
    upa: number = null;
    nda: number = null;
    Thrdfrnt: number = null;
    totalSeats: number = 572;
    seatsInp: number;
    isDisabledUpa: boolean = false;
    isDisabledNda: boolean = false;
    isDisabledOth: boolean = false;
    displayDiv = 'form';
    panelOpenState = false;
    detailedData: any;
    dataCount: any;

    res_Alappuzha = 'Shanimol Usman(UDF)';
    res_Alathur= 'Remya Haridas(UDF)';
    res_Attingal= 'Adoor Prakash(UDF)'; 
    res_Chalakudy= 'Benny Behanan(UDF)';
    res_Ernakulam= 'Hibi Eden(UDF)';
    res_Idukki= 'Dean Kuriakose(UDF)';
    res_Kannur= 'K. Sudhakaran(UDF)';
    res_Kasaragod= 'K.P. Satheesh Chandran(LDF)';
    res_Kottayam= 'Thomas Chazhikadan(UDF)';
    res_Kozhikode= 'A. Pradeepkumar(LDF)';
    res_Malappuram= 'P. K. Kunhalikutty(UDF)';
    res_Mavelikkara= 'Kodikunnil Suresh(UDF)';
    res_Palakkad= 'M.B. Rajesh(LDF)';
    res_Pathanamthitta= 'K. Surendran(NDA)';
    res_Ponnani= 'E. T. Mohammed Basheer(UDF)';
    res_Thiruvananthapuram= 'Kummanam Rajasekharan(NDA)'; 
    res_Thrissur= 'Suresh Gopi(NDA)';
    res_Vatakara= 'K. Muraleedharan(UDF)';
    res_Wayanad= 'Rahul Gandhi(UDF)';

    results = [
        
        { Alappuzha: 'Shanimol Usman(UDF)' },
        { Alathur: 'Remya Haridas(UDF)' },
        { Attingal: 'Adoor Prakash(UDF)' },
        { Chalakudy: 'Benny Behanan(UDF)' },
        { Ernakulam: 'Hibi Eden(UDF)' },
        { Idukki: 'Dean Kuriakose(UDF)' },
        { Kannur: 'K. Sudhakaran(UDF)' },
        { Kasaragod: 'K.P. Satheesh Chandran(LDF)' },
        { Kollam: 'Thomas Chazhikadan(UDF)' },
        { Kozhikode: 'A. Pradeepkumar(LDF)' },
        { Malappuram: 'P. K. Kunhalikutty(UDF)' },
        { Mavelikkara: 'Kodikunnil Suresh(UDF)' },
        { Palakkad: 'M.B. Rajesh(LDF)' },
        { Pathanamthitta: 'K. Surendran(NDA)' },
        { Ponnani: 'E. T. Mohammed Basheer(UDF)' },
        { Thiruvananthapuram: 'Kummanam Rajasekharan(NDA)' },
        { Thrissur: 'Suresh Gopi(NDA)' },
        { Vatakara: 'K. Muraleedharan(UDF)' },
        { Wayanad: 'Rahul Gandhi(UDF)' }
        
    ];

    text: any = {
        Year: 'Year',
        Month: 'Month',
        Weeks: "Weeks",
        Days: "Days",
        Hours: "Hours",
        Minutes: "Minutes",
        Seconds: "Seconds",
        MilliSeconds: "MilliSeconds"
    };
    constituents = [
        {
            value: 'Thiruvananthapuram',
            viewValue: 'Thiruvananthapuram',
            candte: [
                { value: 'Shashi Tharoor', viewValue: 'Shashi Tharoor(UDF)', isCorrect: 'true' },
                { value: 'C. Divakaran', viewValue: 'C. Divakaran(LDF)' },
                { value: 'Kummanam Rajasekharan', viewValue: 'Kummanam Rajasekharan(NDA)' },
                { value: 'Others', viewValue: 'Others' }
            ]
        },
        {
            value: 'Attingal',
            viewValue: 'Attingal',
            candte: [
                { value: 'Adoor Prakash', viewValue: 'Adoor Prakash(UDF)' },
                { value: 'A. Sampath', viewValue: 'A. Sampath(LDF)' },
                { value: 'Shobha Surendran', viewValue: 'Shobha Surendran(NDA)' },
                { value: 'Others', viewValue: 'Others' }
            ]
        },
        //Avoided Kollam, Used Kottayam instead...
        // {
        //     value: 'Kollam',
        //     viewValue: 'Kollam',
        //     candte: [
        //         { value: 'N. K. Premachandran', viewValue: 'N. K. Premachandran(UDF)' },
        //         { value: 'K. N. Balagopal', viewValue: 'K. N. Balagopal(LDF)' },
        //         { value: 'KV Sabu', viewValue: 'KV Sabu(NDA)' },
        //         { value: 'Others', viewValue: 'Others' }
        //     ]
        // },
        {
            value: 'Pathanamthitta',
            viewValue: 'Pathanamthitta',
            candte: [
                { value: 'Anto Antony', viewValue: 'Anto Antony(UDF)', isCorrect : 'true' },
                { value: 'Veena George', viewValue: 'Veena George(LDF)' },
                { value: 'K. Surendran', viewValue: 'K. Surendran(NDA)' },
                { value: 'Others', viewValue: 'Others' }
            ]
        },
        {
            value: 'Mavelikkara',
            viewValue: 'Mavelikkara',
            candte: [
                { value: 'Kodikunnil Suresh', viewValue: 'Kodikunnil Suresh(UDF)' },
                { value: 'Chittayam Gopakumar', viewValue: 'Chittayam Gopakumar(LDF)' },
                { value: 'Thazhava Sahadevan', viewValue: 'Thazhava Sahadevan(NDA)' },
                { value: 'Others', viewValue: 'Others' }
            ]
        },
        {
            value: 'Alappuzha',
            viewValue: 'Alappuzha',
            candte: [
                { value: 'Shanimol Usman', viewValue: 'Shanimol Usman(UDF)' },
                { value: 'A. M. Ariff', viewValue: 'A. M. Ariff(LDF)' },
                { value: 'KS Radhakrishnan', viewValue: 'KS Radhakrishnan(NDA)' },
                { value: 'Others', viewValue: 'Others' }
            ]
        },
        {
            value: 'Kottayam',
            viewValue: 'Kottayam',
            candte: [
                { value: 'Thomas Chazhikadan', viewValue: 'Thomas Chazhikadan(UDF)' },
                { value: 'V. N. Vasavan', viewValue: 'V. N. Vasavan(LDF)' },
                { value: 'P. C. Thomas', viewValue: 'P. C. Thomas(NDA)' },
                { value: 'Others', viewValue: 'Others' }
            ]
        },
        {
            value: 'Idukki',
            viewValue: 'Idukki',
            candte: [
                { value: 'Dean Kuriakose', viewValue: 'Dean Kuriakose(UDF)' },
                { value: 'Joice George', viewValue: 'Joice George(LDF)' },
                { value: 'Biju Krishnan', viewValue: 'Biju Krishnan(NDA)' },
                { value: 'Others', viewValue: 'Others' }
            ]
        },
        {
            value: 'Ernakulam',
            viewValue: 'Ernakulam',
            candte: [
                { value: 'Hibi Eden', viewValue: 'Hibi Eden(UDF)' },
                { value: 'P Rajeev', viewValue: 'P Rajeev(LDF)' },
                { value: 'Alphons Kannanthanam', viewValue: 'Alphons Kannanthanam(NDA)' },
                { value: 'Others', viewValue: 'Others' }
            ]
        },
        {
            value: 'Chalakudy',
            viewValue: 'Chalakudy',
            candte: [
                { value: 'Benny Behanan', viewValue: 'Benny Behanan(UDF)' },
                { value: 'Innocent', viewValue: 'Innocent(LDF)' },
                { value: 'AN Radhakrishnan', viewValue: 'AN Radhakrishnan(NDA)' },
                { value: 'Others', viewValue: 'Others' }
            ]
        },
        {
            value: 'Thrissur',
            viewValue: 'Thrissur',
            candte: [
                { value: 'T. N. Prathapan', viewValue: 'T. N. Prathapan(UDF)' },
                { value: 'Rajaji Mathew Thomas', viewValue: 'Rajaji Mathew Thomas(LDF)' },
                { value: 'Suresh Gopi', viewValue: 'Suresh Gopi(NDA)' },
                { value: 'Others', viewValue: 'Others' }
            ]
        },
        {
            value: 'Alathur',
            viewValue: 'Alathur',
            candte: [
                { value: 'Remya Haridas', viewValue: 'Remya Haridas(UDF)' },
                { value: 'P.K. Biju', viewValue: 'P.K. Biju(LDF)' },
                { value: 'TV Babu', viewValue: 'TV Babu(NDA)' },
                { value: 'Others', viewValue: 'Others' }
            ]
        },
        {
            value: 'Palakkad',
            viewValue: 'Palakkad',
            candte: [
                { value: 'V.K Sreekandan', viewValue: 'V.K Sreekandan(UDF)' },
                { value: 'M.B. Rajesh', viewValue: 'M.B. Rajesh(LDF)' },
                { value: 'C Krishnakumar', viewValue: 'C Krishnakumar(NDA)' },
                { value: 'Others', viewValue: 'Others' }
            ]
        },
        {
            value: 'Ponnani',
            viewValue: 'Ponnani',
            candte: [
                { value: 'E. T. Mohammed Basheer', viewValue: 'E. T. Mohammed Basheer(UDF)' },
                { value: 'P. V. Anvar', viewValue: 'P. V. Anvar(LDF)' },
                { value: 'VT Rema', viewValue: 'VT Rema(NDA)' },
                { value: 'Others', viewValue: 'Others' }
            ]
        },
        {
            value: 'Malappuram',
            viewValue: 'Malappuram',
            candte: [
                { value: 'P. K. Kunhalikutty', viewValue: 'P. K. Kunhalikutty(UDF)' },
                { value: 'V.P. Sanu', viewValue: 'V.P. Sanu(LDF)' },
                { value: 'Unnikrishnan Master', viewValue: 'Unnikrishnan Master(NDA)' },
                { value: 'Others', viewValue: 'Others' }
            ]
        },
        {
            value: 'Kozhikode',
            viewValue: 'Kozhikode',
            candte: [
                { value: 'M. K. Raghavan', viewValue: 'M. K. Raghavan(UDF)' },
                { value: 'A. Pradeepkumar', viewValue: 'A. Pradeepkumar(LDF)' },
                { value: 'KP Prakash Babu', viewValue: 'KP Prakash Babu(NDA)' },
                { value: 'Others', viewValue: 'Others' }
            ]
        },
        {
            value: 'Wayanad',
            viewValue: 'Wayanad',
            candte: [
                { value: 'Rahul Gandhi', viewValue: 'Rahul Gandhi(UDF)' },
                { value: 'P.P. Suneer', viewValue: 'P.P. Suneer(LDF)' },
                { value: 'Thushar Vellappally', viewValue: 'Thushar Vellappally(NDA)' },
                { value: 'Others', viewValue: 'Others' }
            ]
        },
        {
            value: 'Vatakara',
            viewValue: 'Vatakara',
            candte: [
                { value: 'K. Muraleedharan', viewValue: 'K. Muraleedharan(UDF)' },
                { value: 'P. Jayarajan', viewValue: 'P. Jayarajan(LDF)' },
                { value: 'VK Sajeevan', viewValue: 'VK Sajeevan(NDA)' },
                { value: 'Others', viewValue: 'Others' }
            ]
        },
        {
            value: 'Kannur',
            viewValue: 'Kannur',
            candte: [
                { value: 'K. Sudhakaran', viewValue: 'K. Sudhakaran(UDF)' },
                { value: 'P.K. Sreemathy', viewValue: 'P.K. Sreemathy(LDF)' },
                { value: 'CK Padmanabhan', viewValue: 'CK Padmanabhan(NDA)' },
                { value: 'Others', viewValue: 'Others' }
            ]
        },
        {
            value: 'Kasaragod',
            viewValue: 'Kasaragod',
            candte: [
                { value: 'Rajmohan Unnithan', viewValue: 'Rajmohan Unnithan(UDF)' },
                { value: 'K.P. Satheesh Chandran', viewValue: 'K.P. Satheesh Chandran(LDF)' },
                { value: 'Raveesh Thantri Kuntar', viewValue: 'Raveesh Thantri Kuntar(NDA)' },
                { value: 'Others', viewValue: 'Others' }
            ]
        }
    ];

    constructor(public fs: FireServiceService, private route: Router, public db: FireServiceService, private cdr: ChangeDetectorRef) { }

    ngOnInit() {
       this.getDetails(); 
   
    }

    ngAfterViewInit() {
        //this.countNos();
        //this.compareValues();
        //console.log(2)
        //console.log(document.querySelectorAll('.person0 .count').length)
    }

    ngAfterViewChecked() {
        var person = [];
        for(var i = 0; i < this.detailedData.length; i++ ){
            //console.log(this.detailedData.length);
            //person[i] = document.querySelectorAll('.person(i) .count').length;
            console.log(person[i]);
            //this.cdr.detectChanges();
        }
       //console.log(a)
    }

    countNos() {
        //return document.getElementsByClassName("count")[0].classList.length;
        //console.log(document.getElementsByClassName( "count" ).length);
    }

    getDetails = () =>
    
        this.db
            .getData()
            .subscribe(res => {
                this.detailedData = res;
                console.log(this.detailedData);
                //this.compareValues();
            });
           
             
                //(this.detailedData = res));

    compareValues() {
        let count = 0;
        //console.log(this.detailedData);
        for (let i of this.detailedData){
            for(let j of this.results){
                count++;
                console.log()
            }
        }
    }

    onClickSubmit(form: NgForm, data, isValid: boolean) {
        const total = this.upa + this.nda + this.Thrdfrnt;
        this.btnSbtDisabled = true;
        if (!isValid) {
            alert("Please make sure you have entered \n1) UID \n2) Email \n3) 20 Constituents and \n4) Seat Shares")
            this.btnSbtDisabled = false;
        } else if (this.upa === null || this.nda === null || this.Thrdfrnt === null) {
            alert('Please fill all the seat shares');
            this.btnSbtDisabled = false;
        } else if (total !== 543) {
            alert('Prediction Total must be equal to 543');
            this.Thrdfrnt = 543 - (this.upa + this.nda);
            this.btnSbtDisabled = false;
        } else {
            this.fs.createUser(data)
                .then(
                    res => {
                        // alert("Your form has been submitted");
                        // form.reset();
                        this.btnSbtDisabled = false;
                        this.displayDiv = 'msg-success';
                    }
                )
        }
    }

    onSearchChange(button: string) {
        //Single Input logic
        if (button === 'upa') {
            if (this.upa >= 543) {
                this.upa = 543;
                this.isDisabledNda = true;
                this.isDisabledOth = true;
            } else {
                this.isDisabledNda = false;
                this.isDisabledOth = false;
            }
        }
        if (button === 'nda') {
            if (this.nda >= 543) {
                this.nda = 543;
                this.isDisabledUpa = true;
                this.isDisabledOth = true;
            }
            else {
                this.isDisabledUpa = false;
                this.isDisabledOth = false;
            }
        }
        if (button === 'ThirdFront') {
            if (this.Thrdfrnt >= 543) {
                this.Thrdfrnt = 543;
                this.isDisabledNda = true;
                this.isDisabledUpa = true;
            }
            else {
                this.isDisabledNda = false;
                this.isDisabledUpa = false;
            }
        }
        //Sum of two inputs - auto fill the third
        if ((this.nda > 0) && (this.upa > 0)) {
            if (this.nda + this.upa < 543) {
                this.Thrdfrnt = 543 - (this.nda + this.upa);
            }
        }
        if ((this.nda > 0) && (this.Thrdfrnt > 0)) {
            if (this.nda + this.Thrdfrnt < 543) {
                this.upa = 543 - (this.nda + this.Thrdfrnt);
            }
        }
        if ((this.upa > 0) && (this.Thrdfrnt > 0)) {
            if (this.upa + this.Thrdfrnt < 543) {
                this.nda = 543 - (this.upa + this.Thrdfrnt);
            }
        }
        // if((this.nda > 0) && (this.Thrdfrnt > 0)) {
        //     if(this.nda + this.Thrdfrnt < 543){
        //         this.upa = 543 - (this.nda + this.Thrdfrnt); 
        //     }
        // }

        //Sum - of three inputs logic
        // this.seatsInp = this.upa + this.nda + this.Thrdfrnt;
        // if (this.seatsInp > 543) {
        //     console.log(this.seatsInp);
        //     this.seatsInp = this.seatsInp - 543;
        //     this.Thrdfrnt = this.Thrdfrnt - this.seatsInp;
        // }
        // console.log(this.upa, this.nda, this.Thrdfrnt, this.seatsInp);
    }

    onChange(a: any, b: any) {
        console.log(a, b);
    }
    //  Admin(){
    //    this.route.navigate(['/','admin']);
    //  }
}
