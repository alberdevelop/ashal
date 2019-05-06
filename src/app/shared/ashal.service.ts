import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Unit } from './unit';
import { Category } from './category';
import { AccDef } from './accdef';

@Injectable({
  providedIn: 'root'
})
export class AshalService {
  public apiUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  // units
  getUnits(): Observable<Unit[]>{
    return this.http
      .get<Unit[]>(this.apiUrl + 'units-list')
      // .pipe(catchError(this.handleError('getTasks', [])))
  }

  newUnit(unit: Unit): Observable<Unit>{
    return this.http.post<Unit>(this.apiUrl + 'new-unit', unit)
  }

  viewUnit(Unit_No: string): Observable<Unit>{
    return this.http.get<Unit>(this.apiUrl + 'unit/' + Unit_No)
  }

  updateUnit(Unit_No: string, unit: Unit): Observable<Unit>{
    return this.http.put<Unit>(this.apiUrl + 'unit/' + Unit_No, unit)
  }

  deleteUnit(Unit_No: string): Observable<Unit>{
    return this.http.delete<Unit>(this.apiUrl + 'unit/' + Unit_No)
  }


  // categorys
  getCategorys(): Observable<Category[]>{
    return this.http
      .get<Category[]>(this.apiUrl + 'categorys-list')
      // .pipe(catchError(this.handleError('getTasks', [])))
  }

  newCategory(cat: Category): Observable<Category>{
    return this.http.post<Category>(this.apiUrl + 'new-category', cat)
  }

  viewCategory(CAT_No: string): Observable<Category>{
    return this.http.get<Category>(this.apiUrl + 'cat/' + CAT_No)
  }

  updateCategory(CAT_No: string, cat: Category): Observable<Category>{
    return this.http.put<Category>(this.apiUrl + 'cat/' + CAT_No, cat)
  }

  deleteCategory(CAT_No: string): Observable<Category>{
    return this.http.delete<Category>(this.apiUrl + 'cat/' + CAT_No)
  }


  // accdef
  getAccDef(): Observable<AccDef[]>{
    return this.http
      .get<AccDef[]>(this.apiUrl + 'accdef-list')
      // .pipe(catchError(this.handleError('getTasks', [])))
  }

  newAccDef(accDef: AccDef): Observable<AccDef>{
      return this.http.post<AccDef>(this.apiUrl + 'new-accdef', accDef)
  }

  viewAccdef(AccDef_No: string): Observable<AccDef>{
    return this.http.get<AccDef>(this.apiUrl + 'accdef/' + AccDef_No)
  }

  updateAccdef(AccDef_No: string, accDef: AccDef): Observable<Category>{
    return this.http.put<AccDef>(this.apiUrl + 'accdef/' + AccDef_No, accDef)
  }

  deleteAccdef(AccDef_No: string): Observable<AccDef>{
    return this.http.delete<AccDef>(this.apiUrl + 'accdef/' + AccDef_No)
  }

  getAccdefBalance(accdefNo: string){
    let params = new HttpParams().set('accdefNo', accdefNo);
    return this.http.get(this.apiUrl + 'sum-active-accdef', { params })
  }

}