import { useState } from 'react';
import { CSV, Options } from './file';
import { useCSV } from './hooks';

export class CSVLoaderForSuspense {
  #state:
    | {
        type: 'pending';
        promise: Promise<void>;
      }
    | {
        type: 'fulfilled';
        result: CSV;
      }
    | {
        type: 'rejected';
        error: unknown;
      };

  constructor(CSVPath: string, options?: Options) {
    const promise = useCSV(CSVPath, options)
      .then((result) => {
        this.#state = { type: 'fulfilled', result };
      })
      .catch((error) => {
        this.#state = { type: 'rejected', error };
      });

    this.#state = {
      type: 'pending',
      promise,
    };
  }

  get(): CSV {
    switch (this.#state.type) {
      case 'pending': {
        throw this.#state.promise;
      }
      case 'fulfilled': {
        return this.#state.result;
      }
      case 'rejected': {
        throw this.#state.error;
      }
    }
  }
}
