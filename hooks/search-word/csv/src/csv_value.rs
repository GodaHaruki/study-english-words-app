#[derive(Debug, PartialEq)]
pub enum CSVValue {
  String(String),
  Number(i32),
  Float(f32),
}

impl CSVValue {
  pub fn new<'a>(s: &'a str) -> Self {
    if let Ok(n) = s.parse::<i32>() {
      Self::Number(n)
    } else if let Ok(f) = s.parse::<f32>() {
      Self::Float(f)
    } else {
      Self::String(s.to_string())
    }
  }
}