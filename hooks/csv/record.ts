import field from './field';
import { ParseResult } from './parser';

const record = (s: string): ParseResult<string[]> => {
  const length = s.length;

  const res: string[] = [];

  let left = s;

  while (true) {
    let [tempRes, tempLeft] = field(left);
    left = tempLeft;
    res.push(tempRes);
    if (left.length == 0) {
      return [res, left];
    }
    switch (left[0]) {
      case ',':
        left = left.slice(1);
        break;
      case '\n': // \r will be consumed
        return [res, left.slice(1)];
    }
  }
};

export default record;
