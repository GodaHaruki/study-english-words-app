import { ParseResult } from './parser';

const nonEscaped = (s: string): ParseResult<string> => {
  const length = s.length;

  let res = '';
  let left = '';

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    switch (c) {
      case ',':
        left = s.slice(i);
        return [res, left];
      case '\n':
        left = s.slice(i);
        return [res, left];
      case '\r':
        if (i + 1 < length) {
          // not out of bounds
          i++;
          switch (s[i]) {
            case '\n':
              left = s.slice(i);
              return [res, left];
            // case ',':
            default:
              throw '\\n expected but not found';
          }
        }

        throw '\\n expected but not found';
      default:
        res += c;
        break;
    }
  }

  return [res, left];
};

export default nonEscaped;
