extern crate console_error_panic_hook;

use csv::{csv::CSV, csv_value::CSVValue};
use wasm_bindgen::prelude::wasm_bindgen;
use word_distance::levenshtein::levenshtein;
use word_distances::WordDistances;

pub mod word_distances;

/*
CSV should follow RFC4180 Format
https://www.rfc-editor.org/rfc/rfc4180.txt

header: entry,meaning,ipa,word_id,example_sentence,translated_sentence,type
value: [String, String, String, i32, String, String]
 */

fn set_error_hook(){
    #[cfg(feature = "error_handle")]
    std::panic::set_hook(Box::new(console_error_panic_hook::hook));
}

#[wasm_bindgen]
pub fn get_word_distances(word: &str, target_csv: &str) -> WordDistances {
    set_error_hook();

    let csv = CSV::new(target_csv);

    let (words, distances) = csv
        .records
        .iter()
        .map(|v| {
            use CSVValue::*;
            match &v[0] {
                String(s) => (s.clone(), levenshtein(word, s.as_str())),
                Float(f) => panic!("expect String but found float {}", f),
                Number(n) => panic!("expect String but found number {}", n)
            }
        })
        .unzip();

    WordDistances::from(words, distances)
}



#[wasm_bindgen]
pub fn get_word_distances_sorted(word: &str, target_csv: &str) -> WordDistances {
    set_error_hook();

    let csv = CSV::new(target_csv);

    let mut temp = csv
        .records
        .iter()
        .map(|v| {
            use CSVValue::*;
            match &v[0] {
                String(s) => (levenshtein(word, s.as_str()), s.clone()),
                Float(f) => panic!("expect String but found float {}", f),
                Number(n) => panic!("expect String but found number {}", n)
            }
        })
        .collect::<Vec<(usize, String)>>();

    temp.sort_by(|(d0, _), (d1, _)| d0.cmp(d1));

    let (distances, words) = temp.into_iter().unzip();

    WordDistances::from(words, distances)
}