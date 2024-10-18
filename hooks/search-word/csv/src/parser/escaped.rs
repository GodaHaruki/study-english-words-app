use std::str::Chars;

use crate::csv_value::CSVValue;

use super::ParseResult;

pub fn escaped(s: &str) -> ParseResult<CSVValue> {
  escaped_impl(s.chars(), String::new())
}

fn escaped_impl(mut chars: Chars<'_>, s: String) -> ParseResult<'_, CSVValue> {
  let next = chars.next();
  
  if next == Some('"') {
    let str = chars.as_str();
    let next = chars.next();
    if next == Some('"') {
      return escaped_impl(chars, s + "\"")
    } else {
      return (CSVValue::String(s), str);
    }
  }

  escaped_impl(chars, s + next.expect("expect \" but not found").to_string().as_str())
}

#[cfg(test)]
mod tests_escaped {
  use crate::{csv_value::CSVValue, parser::escaped::escaped};

  #[test]
  fn test_non_multibyte_text(){
    let str = "abc123\"\"456\",\"cdf456\"";
    assert_eq!(escaped(str), (CSVValue::String( "abc123\"456".to_string()), ",\"cdf456\""));
  }

  #[test]
  fn test_multibyte_text(){
    let str = "a🙃😉bc😀
    \",😉🙃";
    assert_eq!(escaped(str), (CSVValue::String("a🙃😉bc😀
    ".to_string()), ",😉🙃"));
  }
}