import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  role: string;
  city: string;
}

@Component({
  selector: 'app-user-profile',
  imports: [CommonModule],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.scss',
})
export class UserProfile implements OnInit {
  
  user: User | null = null;
  userId: number | null = null;

  allUsers: User[] = [
    {
      "id": 1,
      "name": "Aarav Sharma",
      "email": "aarav.sharma@example.com",
      "age": 25,
      "role": "Frontend Developer",
      "city": "Bangalore"
    },
    {
      "id": 2,
      "name": "Ananya Verma",
      "email": "ananya.verma@example.com",
      "age": 27,
      "role": "Backend Developer",
      "city": "Hyderabad"
    },
    {
      "id": 3,
      "name": "Rohit Singh",
      "email": "rohit.singh@example.com",
      "age": 24,
      "role": "UI/UX Designer",
      "city": "Delhi"
    },
    {
      "id": 4,
      "name": "Priya Patel",
      "email": "priya.patel@example.com",
      "age": 26,
      "role": "QA Engineer",
      "city": "Ahmedabad"
    },
    {
      "id": 5,
      "name": "Karan Mehta",
      "email": "karan.mehta@example.com",
      "age": 28,
      "role": "DevOps Engineer",
      "city": "Pune"
    },
    {
      "id": 6,
      "name": "Sneha Iyer",
      "email": "sneha.iyer@example.com",
      "age": 23,
      "role": "Software Engineer",
      "city": "Chennai"
    },
    {
      "id": 7,
      "name": "Vikram Rao",
      "email": "vikram.rao@example.com",
      "age": 29,
      "role": "Tech Lead",
      "city": "Mumbai"
    },
    {
      "id": 8,
      "name": "Neha Kapoor",
      "email": "neha.kapoor@example.com",
      "age": 26,
      "role": "Product Analyst",
      "city": "Noida"
    },
    {
      "id": 9,
      "name": "Amit Joshi",
      "email": "amit.joshi@example.com",
      "age": 31,
      "role": "Project Manager",
      "city": "Gurgaon"
    },
    {
      "id": 10,
      "name": "Pooja Nair",
      "email": "pooja.nair@example.com",
      "age": 24,
      "role": "Data Analyst",
      "city": "Kochi"
    }
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(params =>{
      
      console.log('reached in constructor', this.activatedRoute);
      
    })
  }

  ngOnInit(): void {
   this.activatedRoute.paramMap.subscribe(params=>{
     console.log('reached in Ngonint');
    const userId= Number(params.get('id'));
    this.user = this.allUsers.find(u => u.id === userId) || null;
   })
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }
}
