import { ParseResult } from './parser';

const escaped = (s: string): ParseResult<string> => {
  const length = s.length;

  let res = '';
  let left = '';

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    switch (c) {
      case '"':
        if (i + 1 < length) {
          // not out of bounds
          i++;
          switch (s[i]) {
            case '"':
              res += '"';
              break;
            // case ',':
            default:
              left = s.slice(i);
              return [res, left];
          }
        }
        break;
      default:
        res += c;
        break;
    }
  }

  return [res, left];
};

export default escaped;
