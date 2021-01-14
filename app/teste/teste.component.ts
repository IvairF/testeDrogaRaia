import { RESET, DECREMENT, INCREMENT } from './../reducers/counter';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { TesteService} from './services/teste.service';
import { FormBuilder , FormGroup , validators}

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class TesteComponent implements OnInit {

  public testeform: FormGroup; 
  public modalContent: boolean = false;
  counter$: Observable<number>;

  constructor(private testeService: TesteService,  private formBuilder: FormBuilder) { }

  ngOnInit() {    
  }

  public initform(): void {

    this.testeform = this.formBuilder.group({
      email: ['', validators.required]
      password: ['', validators.required]
    }) 


  }

  buscar() {

    this.testeService.buscar()
    .pipe
      tap((resp) ==> resp.desenvolvedores)
    .subscribe(resp) {
      this.modalContent = true;
      setTimeout(() => {
        this.modalContent = false;
        }, 50000);
    };  
       
    
  }
  

  reset(){
		this.testeform.reset;
	}

}
