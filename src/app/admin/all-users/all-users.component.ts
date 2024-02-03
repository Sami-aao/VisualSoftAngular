import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-all-users',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllUsersComponent { }
