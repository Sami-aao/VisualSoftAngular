import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, MatButtonModule, MatIconModule,MatTooltipModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass',
 
})
export class HeaderComponent { 
    green : string;

   constructor(){
    this.green= 'bg-green-500';
   }
}
