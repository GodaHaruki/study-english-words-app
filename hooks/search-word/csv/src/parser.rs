type ParseResult<'a, T> = (T, &'a str);

pub trait Parser<T> {}
impl<T, F> Parser<T> for F where F: Fn(&str) -> ParseResult<T> {}

pub(crate) mod non_escaped;
pub(crate) mod escaped;
pub(crate) mod field;