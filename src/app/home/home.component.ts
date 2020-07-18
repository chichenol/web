import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Category } from '../../model/category'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: Category[];

  getCategories(): void {
    this.categories = this.dataService.getCategories()
  }

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // Load Categories for carousel
    this.getCategories()
  }

}
