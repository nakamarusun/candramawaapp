// Stores the definition of payloads

import { Observable } from 'rxjs';

// HTTP payload interface
export interface Payload<Type> {
  status: PayloadStatus; // Type
  message?: string; // Additional error / various message
  data: Type;
}

export enum PayloadStatus {
  IDLE, // Man still idling
  SUCCESS, // Payload is successfully gotten
  ERROR, // Error
  GETTING, // Getting
  GETTINGPARTIAL, // Already have partial data but we're getting more
}

// Interface to store name and url data in the search bar autocomplete
export interface SearchStruct {
  name: string;
  url: string;
}

// Interface that implements the getSearch observable, that will populate the
// autocomplete searchbar at the top
// The rationale we separate the observable normally and search is because the
// Programmer may display not everything
export interface SearchSource {
  searchSectionName: string; // The name of the autocomplete section
  get getSearch$(): SearchObservable; // An observable that will contain search terms
}

export type SearchObservable = Observable<SearchStruct[]>;
