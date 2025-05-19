import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule,  FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'flipkart';
    isOpen = false;

    constructor(){
      console.log("run");
      
    }
    menuItems = [
  'Beauty & Personal Care',
  "Men's Grooming",
  'Food & Health Care',
  'Nutrition & Health Care',
  'Baby Care',
  'Toys & School Supplies',
  'Sports & Fitness',
  'Books',
  'Music',
  'Stationery & Office Supplies',
  'Auto Accessories',
  'Safety & Huggiene Essentials'
];
 subMenuItems = [
    'More in Beauty & Personal Care',
    'View all',
    'Bath & Oral Care',
    'Personal Hygiene',
    'Eye Makeup',
    'Face Makeup',
    'Lip Makeup',
    'Hair Care',
    'Bath Essentials',
    "Women's Personal Hygiene",
    'Body & Skin Care',
    'Top Brand Deals'
  ];
   mobiles = [
  { name: 'iPhone 14 Pro', brand: 'Apple' },
  { name: 'Galaxy S23', brand: 'Samsung' },
  { name: 'Pixel 8', brand: 'Google' },
  { name: 'OnePlus 11', brand: 'OnePlus' }
];



}
