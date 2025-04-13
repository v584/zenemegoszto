import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../user';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class ProfileComponent implements OnInit {
  user: User | null = null;
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      bio: [''],
      profilePicture: [''],
    });
  }

  ngOnInit(): void {
    this.user = {
      id: 'user123',
      username: 'johndoe',
      email: 'john.doe@example.com',
      profilePicture: '/placeholder.png',
      bio: 'imadom a zeneket!!!',
      joinDate: new Date('2025-04-13'),
    };

    if (this.user) {
      this.profileForm.patchValue({
        username: this.user.username,
        email: this.user.email,
        bio: this.user.bio,
        profilePicture: this.user.profilePicture,
      });
    }
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    }
  }
}
