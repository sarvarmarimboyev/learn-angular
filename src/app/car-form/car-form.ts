import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { CarService } from '../services/car.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-form',
  imports: [ReactiveFormsModule],
  templateUrl: './car-form.html',
  styleUrls: ['./car-form.css'],
  standalone: true,
})
export class CarForm {
  carService = inject(CarService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  reservationForm: FormGroup = new FormGroup({
    checkIn: new FormControl('', [Validators.required]),
    checkOut: new FormControl('', [Validators.required]),
    clientName: new FormControl('', [Validators.required]),
    clientEmail: new FormControl('', [Validators.required, Validators.email]),
    carModel: new FormControl('', [Validators.required]),
    carNumber: new FormControl('', [Validators.required]),
  });

  constructor() {
    const reservationID = this.activatedRoute.snapshot.paramMap.get('id');
    if (reservationID) {
      const reservation = this.carService.getReservationById(+reservationID);

      if (reservation) {
        this.reservationForm.patchValue({
          checkInDate: reservation.checkInDate,
          checkOutDate:reservation.checkOutDate,
          clientName:reservation.clientName,
          clientEmail:reservation.clientEmail,
          carModel:reservation.carModel,
          carNumber:reservation.carNumber
        });
      }
    }
  }

  onSubmit() {
    
    const data = { ...this.reservationForm.value, id: Date.now() };
    
    const reservationID = this.activatedRoute.snapshot.paramMap.get('id');
    
    if (reservationID) {
      const reservation = this.carService.getReservationById(+reservationID);
      if(reservation){
        this.carService.updatedReservation(reservation)
 }
          }
        }
  
    this.carService.addReservaion(data);
    this.reservationForm.reset();
    this.router.navigate(['/list']);
  }
}
