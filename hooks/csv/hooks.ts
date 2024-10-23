import { useState } from 'react';
import * as parser from './file';
import { CSV, Options } from './file';

export type WordType = 'NGSL' | 'NAWL' | 'TSL' | 'BSL' | (string & {});

export interface WordsCSV extends CSV<'/words.csv'> {
  header: [
    'word',
    'mean',
    'ipa',
    'exampleSentence',
    'translatedSentence',
    'type',
  ];
  records: [string, string, string, string, string, WordType][];
}

export type CSVType<T extends string> = T extends '/words.csv'
  ? WordsCSV
  : CSV<T>;

export const useCSV = <Path extends '/words.csv' | (string & {})>(
  CSVPath: Path,
  options?: Options,
): Promise<CSVType<Path>> => {
  const [csv, setCSV] = useState<Promise<CSVType<Path>>>(
    new Promise((resolve, reject) =>
      fetch(CSVPath)
        .then((f) => f.text())
        .then((t) => resolve(parser.default(t) as CSVType<Path>))
        .catch((e) => reject(e)),
    ),
  );

  return csv;
};
