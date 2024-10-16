use std::str::Chars;

use header::header;
use record::record;

use crate::{csv::CSV, csv_value::CSVValue};

pub(crate) mod non_escaped;
pub(crate) mod escaped;
pub(crate) mod field;
pub(crate) mod header;
pub(crate) mod record;

type ParseResult<'a, T> = (T, &'a str);

pub fn parse(s: &str) -> ParseResult<CSV> {
  let (header, s) = header(s);

  let mut chars = s.chars();
  match chars.next() {
    Some('\r') => {
      if chars.next() != Some('\n') {
        panic!("expect \n but not found")
      }
    },
    Some('\n') => (),
    _ => panic!("expect CRLF or LF but not found")
  };
  let (records, s) = records(chars.as_str());

  (CSV { header, records}, s)
}

fn records(s: &str) -> ParseResult<Vec<Vec<CSVValue>>> {
  let (first, s) = record(s);

  records_rec(s.chars(), vec![first])
}

fn records_rec(mut chars: Chars, mut v: Vec<Vec<CSVValue>>) -> ParseResult<Vec<Vec<CSVValue>>> {
  match chars.next() {
    None => return (v, chars.as_str()),
    Some('\r') => {
      if chars.next() == Some('\n') {
        let mut chars2 = chars.clone();
        if chars2.next().is_none() {
          (v, chars.as_str())
        } else {
          let (record, s) = record(chars.as_str());
          v.push(record);
  
          records_rec(s.chars(), v)
        }
      } else {
        panic!("expect \n but not found")
      }
    },
    Some('\n') => {
      let mut chars2 = chars.clone();
      if chars2.next().is_none() {
        (v, chars.as_str())
      } else {
        let (record, s) = record(chars.as_str());
        v.push(record);

        records_rec(s.chars(), v)
      }
    },
    Some(c) => panic!("expect CRLF or LF but found {}", c)
  }
}

#[cfg(test)]
mod test_parser {
    use crate::{csv::CSV, csv_value::CSVValue};

    use super::parse;

  #[test]
  fn test_parse(){
    let str = "aaa,123,3.14,\"a🙃😉bc😀\"\r\naaa,123,3.14,\"a🙃😉bc😀\"\naaa,123,3.14,\"a🙃😉bc😀\"";
    assert_eq!(parse(str).0,
    CSV {
      header: vec![
        CSVValue::String("aaa".to_string()),
        CSVValue::Number(123),
        CSVValue::Float(3.14),
        CSVValue::String("a🙃😉bc😀".to_string())
      ],
      records: vec![
        vec![
          CSVValue::String("aaa".to_string()),
          CSVValue::Number(123),
          CSVValue::Float(3.14),
          CSVValue::String("a🙃😉bc😀".to_string())
        ],
        vec![
          CSVValue::String("aaa".to_string()),
          CSVValue::Number(123),
          CSVValue::Float(3.14),
          CSVValue::String("a🙃😉bc😀".to_string())
        ],
      ]
    }
  );
  }
}