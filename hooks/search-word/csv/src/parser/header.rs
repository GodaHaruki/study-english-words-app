use std::str::Chars;

use crate::{csv::SPLIT_CHAR, csv_value::CSVValue};

use super::{field::field, ParseResult};

pub fn header(s: &str) -> ParseResult<Vec<CSVValue>> {
  let (first, s) = field(s);
  header_rec(s.chars(), vec![first])
}

fn header_rec(mut chars: Chars, mut v: Vec<CSVValue>) -> ParseResult<Vec<CSVValue>> {
  match chars.next() {
    Some(SPLIT_CHAR) => {
      let (value, s) = field(chars.as_str());
      v.push(value);

      header_rec(s.chars(), v)
    },
    Some('\n') => (v, chars.as_str()),
    Some('\r') => {
      if chars.next() == Some('\n') {
        (v, chars.as_str())
      } else {
        panic!("wrong csv")
      }
    },
    Some(c) => panic!("wrong csv {}", c),
    None => panic!("woudn't reach")
  }
}

#[cfg(test)]
mod test_header {
    use crate::{csv_value::CSVValue, parser::header::header};


  #[test]
  fn test_header(){
    let str = "123,abc,a🙃😉bc😀,3.14,\"samp\nle\"\r\n";
    assert_eq!(header(str), 
    (vec![
      CSVValue::Number(123),
      CSVValue::String("abc".to_string()),
      CSVValue::String("a🙃😉bc😀".to_string()),
      CSVValue::Float(3.14),
      CSVValue::String("samp\nle".to_string())
      ], "")
    );
  }
}
