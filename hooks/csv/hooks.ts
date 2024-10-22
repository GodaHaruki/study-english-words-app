'use client';

import { useState } from 'react';
import * as parser from './file';
import { CSV, Options } from './file';

export const useCSV = (CSVPath: string, options?: Options) => {
  const [csv, setCSV] = useState<Promise<CSV>>(
    new Promise((resolve, reject) =>
      fetch(CSVPath)
        .then((f) => f.text())
        .then((t) => resolve(parser.default(t)))
        .catch((e) => reject(e)),
    ),
  );

  return csv;
};
