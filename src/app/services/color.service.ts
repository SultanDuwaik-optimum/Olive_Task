import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Themes } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private url = "http://localhost:3000/themes";
  constructor(private apiService: ApiService) { }

  getColors(): Observable<Themes> {
    return this.apiService.get<Themes>(this.url) as Observable<Themes>;
  }

}