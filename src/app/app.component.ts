import { Component, OnInit } from '@angular/core';
import { FireServiceService } from './fire-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ElecPoll';
  a: any;
   Thiruvananthapuram = [
        { value: 'Shashi Tharoor', viewValue: 'Shashi Tharoor(UDF)' },
        { value: 'C. Divakaran', viewValue: 'C. Divakaran(LDF)' },
        { value: 'Kummanam Rajasekharan', viewValue: 'Kummanam Rajasekharan(NDA)' },
        { value: 'Others', viewValue: 'Others' }
    ];
    Attingal = [
        { value: 'Adoor Prakash', viewValue: 'Adoor Prakash(UDF)' },
        { value: 'A. Sampath', viewValue: 'A. Sampath(LDF)' },
        { value: 'Shobha Surendran', viewValue: 'Shobha Surendran(NDA)' },
        { value: 'Others', viewValue: 'Others' }
    ];
    Kollam = [
        { value: 'N. K. Premachandran', viewValue: 'N. K. Premachandran(UDF)' },
        { value: 'K. N. Balagopal', viewValue: 'K. N. Balagopal(LDF)' },
        { value: 'KV Sabu', viewValue: 'KV Sabu(NDA)' },
        { value: 'Others', viewValue: 'Others' }
    ];
    Pathanamthitta = [
        { value: 'Anto Antony', viewValue: 'Anto Antony(UDF)' },
        { value: 'Veena George', viewValue: 'Veena George(LDF)' },
        { value: 'K. Surendran', viewValue: 'K. Surendran(NDA)' },
        { value: 'Others', viewValue: 'Others' }
    ];
    Mavelikkara = [
        { value: 'Kodikunnil Suresh', viewValue: 'Chittayam Gopakumar(UDF)' },
        { value: 'C. Divakaran', viewValue: 'C. Divakaran(LDF)' },
        { value: 'Thazhava Sahadevan', viewValue: 'Thazhava Sahadevan(NDA)' },
        { value: 'Others', viewValue: 'Others' }
    ];
    Alappuzha = [
        { value: 'Shanimol Usman', viewValue: 'Shanimol Usman(UDF)' },
        { value: 'A. M. Ariff', viewValue: 'A. M. Ariff(LDF)' },
        { value: 'KS Radhakrishnan', viewValue: 'KS Radhakrishnan(NDA)' },
        { value: 'Others', viewValue: 'Others' }
    ];
    Kottayam = [
        { value: 'Thomas Chazhikadan', viewValue: 'Thomas Chazhikadan(UDF)' },
        { value: 'V. N. Vasavan', viewValue: 'V. N. Vasavan(LDF)' },
        { value: 'P. C. Thomas', viewValue: 'P. C. Thomas(NDA)' },
        { value: 'Others', viewValue: 'Others' }
    ];
    Idukki = [
        { value: 'Dean Kuriakose', viewValue: 'Dean Kuriakose(UDF)' },
        { value: 'Joice George', viewValue: 'Joice George(LDF)' },
        { value: 'Biju Krishnan', viewValue: 'Biju Krishnan(NDA)' },
        { value: 'Others', viewValue: 'Others' }
    ];
    Ernakulam = [
        { value: 'Hibi Eden', viewValue: 'Hibi Eden(UDF)' },
        { value: 'P Rajeev', viewValue: 'P Rajeev(LDF)' },
        { value: 'Alphons Kannanthanam', viewValue: 'Alphons Kannanthanam(NDA)' },
        { value: 'Others', viewValue: 'Others' }
    ];
    Chalakudy = [
        { value: 'Benny Behanan', viewValue: 'Benny Behanan(UDF)' },
        { value: 'Innocent', viewValue: 'Innocent(LDF)' },
        { value: 'AN Radhakrishnan', viewValue: 'AN Radhakrishnan(NDA)' },
        { value: 'Others', viewValue: 'Others' }
    ];
    Thrissur = [
        { value: 'T. N. Prathapan', viewValue: 'T. N. Prathapan(UDF)' },
        { value: 'Rajaji Mathew Thomas', viewValue: 'Rajaji Mathew Thomas(LDF)' },
        { value: 'Suresh Gopi', viewValue: 'Suresh Gopi(NDA)' },
        { value: 'Others', viewValue: 'Others' }
    ];
    Alathur = [
        { value: 'Remya Haridas', viewValue: 'Remya Haridas(UDF)' },
        { value: 'P.K. Biju', viewValue: 'P.K. Biju(LDF)' },
        { value: 'TV Babu', viewValue: 'TV Babu(NDA)' },
        { value: 'Others', viewValue: 'Others' }
    ];
    Palakkad = [
        { value: 'V.K Sreekandan', viewValue: 'V.K Sreekandan(UDF)' },
        { value: 'M.B. Rajesh', viewValue: 'M.B. Rajesh(LDF)' },
        { value: 'C Krishnakumar', viewValue: 'C Krishnakumar(NDA)' },
        { value: 'Others', viewValue: 'Others' }
    ];
    Ponnani = [
        { value: 'E. T. Mohammed Basheer', viewValue: 'E. T. Mohammed Basheer(UDF)' },
        { value: 'P. V. Anvar', viewValue: 'P. V. Anvar(LDF)' },
        { value: 'VT Rema', viewValue: 'VT Rema(NDA)' },
        { value: 'Others', viewValue: 'Others' }
    ];
    Malappuram = [
        { value: 'P. K. Kunhalikutty', viewValue: 'P. K. Kunhalikutty(UDF)' },
        { value: 'V.P. Sanu', viewValue: 'V.P. Sanu(LDF)' },
        { value: 'Unnikrishnan Master', viewValue: 'Unnikrishnan Master(NDA)' },
        { value: 'Others', viewValue: 'Others' }
    ];
    Kozhikode = [
        { value: 'M. K. Raghavan', viewValue: 'M. K. Raghavan(UDF)' },
        { value: 'A. Pradeepkumar', viewValue: 'A. Pradeepkumar(LDF)' },
        { value: 'KP Prakash Babu', viewValue: 'KP Prakash Babu(NDA)' },
        { value: 'Others', viewValue: 'Others' }
    ];
    Wayanad = [
        { value: 'Rahul Gandhi', viewValue: 'Rahul Gandhi(UDF)' },
        { value: 'P.P. Suneer', viewValue: 'P.P. Suneer(LDF)' },
        { value: 'Thushar Vellappally', viewValue: 'Thushar Vellappally(NDA)' },
        { value: 'Others', viewValue: 'Others' }
    ];
    Vatakara = [
        { value: 'K. Muraleedharan', viewValue: 'K. Muraleedharan(UDF)' },
        { value: 'P. Jayarajan', viewValue: 'P. Jayarajan(LDF)' },
        { value: 'VK Sajeevan', viewValue: 'VK Sajeevan(NDA)' },
        { value: 'Others', viewValue: 'Others' }
    ];
    Kannur = [
        { value: 'K. Sudhakaran', viewValue: 'K. Sudhakaran(UDF)' },
        { value: 'P.K. Sreemathy', viewValue: 'P.K. Sreemathy(LDF)' },
        { value: 'CK Padmanabhan', viewValue: 'CK Padmanabhan(NDA)' },
        { value: 'Others', viewValue: 'Others' }
    ];
    Kasaragod = [
        { value: 'Rajmohan Unnithan', viewValue: 'Rajmohan Unnithan(UDF)' },
        { value: 'K.P. Satheesh Chandran', viewValue: 'K.P. Satheesh Chandran(LDF)' },
        { value: 'Raveesh Thantri Kuntar', viewValue: 'Raveesh Thantri Kuntar(NDA)' },
        { value: 'Others', viewValue: 'Others' }
    ];

    constructor(public fs: FireServiceService, private route:Router, public db: FireServiceService) { }

    ngOnInit() { 
      this.getDetails();
    }

    getDetails = () => 
    this.db.getPeople()
    .subscribe(
      res =>  { 
      console.log(res); 
    });

    onClickSubmit(data) {
      //alert("Entered Email id : " + data.Thiruvananthapuram);
      
      this.fs.createUser(data)
      .then(
          res => {
               console.log("success");
          }

      )
   }
  //  Admin(){
  //    this.route.navigate(['/','admin']);
  //  }
}
