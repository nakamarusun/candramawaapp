import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import {
  SearchObservable,
  SearchSource,
  SearchStruct,
} from 'src/app/common/payload';
import { ProductsService } from 'src/app/menu/products/products/products.service';

// This interface packages observables with arrays. The arrays contain searchable
// terms that will appear in the search bar. Later,
interface ObservableSearcher {
  [sectionName: string]: {
    source: SearchObservable;
    contents: SearchStruct[];
  };
}

interface SearchGroup {
  group: string;
  content: SearchStruct[];
}

const MAX_RESULT = 4;

// IDEA: Can be used to show things like history here

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  // Detect changes in the search bar
  searchForm = new FormControl();

  // Initial autocompletes
  initialAuto: SearchGroup[] = [
    {
      group: 'QuickGo!',
      content: [
        {
          name: 'Home',
          url: '/',
        },
        {
          name: 'Produk',
          url: '/products',
        },
      ],
    },
  ];

  // We'll get all the search terms from other services with this array
  searchSources: ObservableSearcher = {};

  // Observable to be inserted into the HTML
  searchGroupOptions: Observable<SearchGroup[]>;

  constructor(private productSvc: ProductsService) {
    // Fill search sources here
    const searchSources: SearchSource[] = [productSvc];

    // Subscribe to everything that is searchable
    for (let searchSource of searchSources) {
      const { getSearch$ } = searchSource;

      // Subscribe
      getSearch$.subscribe((x) => {
        this._updateSearchSource(searchSource, x);
      });
      this._updateSearchSource(searchSource, []);
    }

    this.searchGroupOptions = this.searchForm.valueChanges.pipe(
      startWith([]),
      map((x) => this._filterSearch(x))
    );
  }

  private _updateSearchSource(
    { getSearch$, searchSectionName }: SearchSource,
    content: SearchStruct[]
  ) {
    this.searchSources = {
      ...this.searchSources,
      [searchSectionName]: {
        source: getSearch$,
        contents: content,
      },
    };
  }

  private _filterSearch(value: string): SearchGroup[] {
    if (value.length === 0) {
      return this.initialAuto;
    }

    // TODO: Maybe implement counter?
    let counter = 0;
    return Object.entries(this.searchSources)
      .map(([key, val]) => ({
        group: key,
        content: val.contents.filter(({ name }) =>
          name.toLowerCase().includes(value.toLowerCase())
        ),
      }))
      .filter(({ content }) => content.length > 0);
  }

  ngOnInit(): void {
    this.productSvc.getProducts();
  }
}