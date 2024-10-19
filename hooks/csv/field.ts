import escaped from './escaped';
import nonEscaped from './nonEscaped';
import { ParseResult } from './parser';

const field = (s: string): ParseResult<string> => {
  if (s[0] == '"') {
    return escaped(s.slice(1));
  } else {
    return nonEscaped(s.slice(1));
  }
};

export default field;
