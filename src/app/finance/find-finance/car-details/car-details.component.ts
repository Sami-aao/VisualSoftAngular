import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarDetailsComponent { }
