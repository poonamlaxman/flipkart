import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FilterpipePipe } from './filterpipe.pipe';
import { DisableclickDirective } from './disableclick.directive';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, FilterpipePipe,DisableclickDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'flipkart';
    isOpen = false;
    filternames:string=''
    searchshow:boolean=false;
    clickhere(){
     this.searchshow = true
    }
// @viewChild('searchbar',{static:true})searchBarRef!: ElementRef
  @ViewChild('searchbar') searchbarref!: ElementRef;

    // @HostListene r('window:scroll')
    //   OnScroll(){
    //     console.log("scrolling");
    //   }
    //   @HostListener('contextmenu')
    //   onrightclick(event:any){
    //     // event.preventDefault();
        
    //   }
    enter(e:any) {
  //  e.target= this.searchshow 
  this.searchshow=true
}

leave(e:any) {
    this.searchshow=false
}
    @HostListener('document:click',['$event'])
    onclick(event:MouseEvent){
      const eventsearch= this.searchbarref.nativeElement.target;

      if(eventsearch){
      this.searchshow=false;
      }

    }
    getclick(event:MouseEvent){
      const target=event.target as HTMLElement;
      console.log('click element Tag',target.tagName);
      console.log("classes",target.className);
      console.log("id", target.id)
      console.log("inner text", target.innerHTML.trim());
      console.log("positon",{
        x:event.clientX,
        y:event.clientY
      })
      

    }
 
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
  
  productdata=[ 
    { category:"Mobile",
      brand:[
        {
         name:'Apple' ,
         model:[
          {name:'i phone 13 pro' },
           { name:'i phone 14 '}
        ]
      },
      {
        name:'Samsung',
        brand:[
          {name:' galaxy s22'},
          {name:'galaxy s23'}
        ]
      }
      ]
    },
    {
      category:"T-shirt",
      brand:[
        {
          name:'nike',
          model:[
            {name:'Men Solid Polo Neck Polyester White T-Shirt'},
            {name:'Women Solid Round Neck Polyester Black T-Shirt'}
          ]
        }
      ]
    },
    {
      category:"loptop",
      brand:[
        {name:'hp',
          model:[
            {name:'HP AMD Ryzen 5 Quad Core 7520U'},
            { name:'HP 14s Intel Core i3 12th Gen 1215U' }
          ]
        },
        {
          name:'Dell',
          model:[
            {name:'DELL 15 Intel Core i5 12th Gen 1235U'},
            {name:'DELL 15 AMD Ryzen 5 Hexa Core 7530U'}
          ]
        }
      ]
    },
    {
      category:"watch",
      brand:[
        {
          name:'titan',
          model:[
            {name:'Titan Automatic Analog Watch'},
            {name:'Purple Acetate Analog Watch'}
          ]
        },
        {name:'royalex ',
          model:[
            {name:'Analog Watch man'},
            {name:'Analog Watch women'}
          ]
        }
      ]
    }
  ]



}
