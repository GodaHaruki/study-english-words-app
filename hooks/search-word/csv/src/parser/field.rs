use crate::csv_value::CSVValue;

use super::{escaped::escaped, non_escaped::non_escaped, ParseResult};

pub fn field<'a>(s: &'a str) -> ParseResult<'a, CSVValue> {
  let first = s.chars().next().unwrap();

  if first == '"' {
    escaped(&s[1..])
  } else {
    non_escaped(s)
  }
}

#[cfg(test)]
mod test_field {
    use crate::{csv_value::CSVValue, parser::field::field};

  #[test]
  fn test_field(){
    let str0 = "3.14,sample1";
    let str1 = "\"sample0\",sample1";

    assert_eq!(field(str0), (CSVValue::Float(3.14), ",sample1"));
    assert_eq!(field(str1), (CSVValue::String("sample0".to_string()), ",sample1"));
  }
}