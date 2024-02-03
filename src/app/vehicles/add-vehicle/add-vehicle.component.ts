import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-add-vehicle',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './add-vehicle.component.html',
  styleUrl: './add-vehicle.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddVehicleComponent { }
