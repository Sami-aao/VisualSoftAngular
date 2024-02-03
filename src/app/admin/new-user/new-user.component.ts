import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewUserComponent { }
