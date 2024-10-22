'use client';

import { useEffect, useState } from 'react';
import * as parser from './file';

export interface Options {
  header?: boolean;
}

export const useCSV = (CSVPath: string, options?: Options) => {
  const [csv, setCSV] = useState<
    Promise<{ header: string[]; records: string[][] }>
  >(
    new Promise((resolve, reject) =>
      fetch(CSVPath)
        .then((f) => f.text())
        .then((t) => resolve(parser.default(t)))
        .catch((e) => reject(e)),
    ),
  );

  return csv;
};
