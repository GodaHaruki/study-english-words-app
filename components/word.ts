import { WordsCSV, WordType } from '@/hooks/csv/hooks';

export interface Word {
  word: string;
  mean: string;
}

// words.csv
// "word","mean","ipa","exampleSentence","translatedSentence","type"
export interface WordInfo<T extends WordType> extends Word {
  ipa: string;
  exampleSentence: string;
  translatedSentence: string;
  type: T;
}

export const generateWordInfos = (csv: WordsCSV): WordInfo<WordType>[] => {
  return csv.records.map((record) => {
    return {
      word: record[0],
      mean: record[1],
      ipa: record[2],
      exampleSentence: record[3],
      translatedSentence: record[4],
      type: record[5],
    };
  });
};
