import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-car-form',
  imports: [ReactiveFormsModule],
  templateUrl: './car-form.html',
  styleUrls: ['./car-form.css'],  // <-- FIXED
  standalone: true,
})
export class CarForm {

  // FIXED: inject must be imported
  carService = inject(CarService);

  reservationForm: FormGroup = new FormGroup({
    checkIn: new FormControl('', [Validators.required]),
    checkOut: new FormControl('', [Validators.required]),
    clientName: new FormControl('', [Validators.required]),
    clientEmail: new FormControl('', [Validators.required, Validators.email]),
    carModel: new FormControl('', [Validators.required]),
    carNumber: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if (this.reservationForm.invalid) return;

    const data = { ...this.reservationForm.value, id: Date.now() };
    this.carService.addReservaion(data);
    this.reservationForm.reset();
  }
}
