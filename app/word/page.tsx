'use client';

import { useState } from 'react';
import { Grid } from '../grid';
import type { Word } from '../study/[wordSetId]/[studyType]/page';

enum SearchType {
  Mean,
  Word,
}

export default function Word() {
  // const [searchType, setSearchType] = useState<SearchType>(SearchType.Word)
  const setSearchType = useState<SearchType>(SearchType.Word)[1];
  const [query, setQuery] = useState<string>('');

  // const [serachedResult, setSearchedResult] = useState<Word>();

  return (
    <Grid>
      <select
        className='select select-bordered col-span-3 w-full md:col-span-2'
        onChange={(evt) => {
          switch (evt.target.value) {
            case 'mean':
              setSearchType(SearchType.Mean);
              break;
            case 'word':
              setSearchType(SearchType.Word);
              break;
          }
        }}
      >
        <option disabled selected>
          Search by
        </option>
        <option value='mean'>mean</option>
        <option value='word'>word</option>
      </select>
      <input
        type='text'
        placeholder='search word...'
        className='input input-bordered col-span-9 w-full md:col-span-10'
        value={query}
        onChange={(evt) => setQuery(evt.target.value)}
      />
    </Grid>
  );
}
