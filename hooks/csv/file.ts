import record from './record';

export interface CSV {
  header: string[];
  records: string[][];
}

export interface Options {
  header?: boolean;
}

const csv = (s: string, options?: Options): CSV => {
  let left = s;

  const is_header =
    options?.header === undefined || options.header === true ? true : false;

  let header: string[] = [];

  if (is_header) {
    let [tempHeader, tempLeft] = record(s);
    left = tempLeft;
    header = tempHeader;
  }

  let records: string[][] = [];

  while (left.length != 0) {
    if (left[0] == '\r') {
      left = left.slice(1);
      if (left.length > 0 && left[0] == '\n') {
        return { header, records };
      } else {
        throw '\\n expected but not found';
      }
    } else if (left[0] == '\n') {
      return { header, records };
    }

    let [tempRecord, tempLeft] = record(left);
    left = tempLeft;
    records.push(tempRecord);
  }

  return { header, records };
};

export default csv;
