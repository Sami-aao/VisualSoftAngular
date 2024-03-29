import { CommonModule, NgClass, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleChange, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { CarService } from '../car.service';
import { OnInit } from '@angular/core';
import { Car } from './car.model';
@Component({
  selector: 'app-find-finance',
  standalone: true,
  imports: [
    CommonModule,MatButtonToggleModule,MatButtonModule, MatIconModule, MatButtonModule, MatIconModule,FormsModule,NgFor,
    RouterLink, NgClass, MatMenuModule, MatCheckboxModule, MatProgressBarModule, MatFormFieldModule, MatInputModule, MatDividerModule, MatTooltipModule
  ],


  templateUrl: './find-finance.component.html',
  styleUrl: './find-finance.component.sass',
  
})
export class FindFinanceComponent implements OnInit {
  filters: string[] = ['القسط الشهري', 'الموديل', 'الميزانية'];
  numberOfCards: any = {};
  selectedFilter: string = 'القسط الشهري';
  cars: Car[] = [];
  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.cars = this.carService.getCars();
  }

    /**
     * On filter change
     *
     * @param change
     */
    onFilterChange(change: MatButtonToggleChange): void
    {
        // Set the filter
        this.selectedFilter = change.value;

        // Filter the cards
        //this._filterCards();
    }
 }

