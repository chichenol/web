import { Injectable } from '@angular/core';
import { categories } from '../assets/home/data/hardcoded_categories'
import { Category } from 'src/model/category';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getCategories(): Category[] {
    return categories
  }

  constructor() { }
}
