import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})

export class TrangchuComponent implements OnInit {
  Trangchu: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit(): void {
  }
}
