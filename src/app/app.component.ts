import { Component, OnInit } from '@angular/core';
import { FireServiceService } from './fire-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ConstantPool } from '@angular/compiler';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'ElecPoll';
    a: any;
    isLinear = false;
    upa: number = null;
    nda: number = null;
    Thrdfrnt: number = null;
    totalSeats: number = 572;
    seatsInp: number;
    private isDisabledUpa: boolean = false;
    private isDisabledNda: boolean = false;
    private isDisabledOth: boolean = false;
    constituents = [
        {
            value: 'Thiruvananthapuram',
            viewValue: 'Thiruvananthapuram',
            candte: [
                { value: 'Shashi Tharoor', viewValue: 'Shashi Tharoor(UDF)' },
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
        {
            value: 'Kollam',
            viewValue: 'Kollam',
            candte: [
                { value: 'N. K. Premachandran', viewValue: 'N. K. Premachandran(UDF)' },
                { value: 'K. N. Balagopal', viewValue: 'K. N. Balagopal(LDF)' },
                { value: 'KV Sabu', viewValue: 'KV Sabu(NDA)' },
                { value: 'Others', viewValue: 'Others' }
            ]
        },
        {
            value: 'Pathanamthitta',
            viewValue: 'Pathanamthitta',
            candte: [
                { value: 'Anto Antony', viewValue: 'Anto Antony(UDF)' },
                { value: 'Veena George', viewValue: 'Veena George(LDF)' },
                { value: 'K. Surendran', viewValue: 'K. Surendran(NDA)' },
                { value: 'Others', viewValue: 'Others' }
            ]
        },
        {
            value: 'Mavelikkara',
            viewValue: 'Mavelikkara',
            candte: [
                { value: 'Kodikunnil Suresh', viewValue: 'Chittayam Gopakumar(UDF)' },
                { value: 'C. Divakaran', viewValue: 'C. Divakaran(LDF)' },
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

    constructor(public fs: FireServiceService, private route: Router, public db: FireServiceService) { }

    ngOnInit() {
        //this.getDetails();
    }

    // getDetails = () =>
    //     this.db.getPeople()
    //         .subscribe(
    //         res => {
    //             console.log(res);
    //         });

    onClickSubmit(form: NgForm, data, isValid: boolean) {
        if (!isValid) {
            alert("Enter All Fields")
        } else {
            this.fs.createUser(data)
                .then(
                    res => {
                        alert("Your form has been submitted");
                        form.reset();
                    }
                )
        }
    }

    onSearchChange(button: string) {
        console.log(button);
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
        if((this.nda > 0) && (this.upa > 0)) {
            if(this.nda + this.upa < 543){
                this.Thrdfrnt = 543 - (this.nda + this.upa); 
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
