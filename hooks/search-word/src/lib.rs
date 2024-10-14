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

#[wasm_bindgen]
pub fn get_word_distances(word: &str, target_csv: &str) -> WordDistances {
    let csv = CSV::new(target_csv);

    let (words, distances) = csv
        .records
        .iter()
        .map(|v| {
            use CSVValue::*;
            match &v[0] {
                String(s) => (s.clone(), levenshtein(word, s.as_str())),
                _ => panic!("wrong csv"),
            }
        })
        .unzip();

    WordDistances::from(words, distances)
}

#[wasm_bindgen]
pub fn get_word_distances_sorted(word: &str, target_csv: &str) -> WordDistances {
    let csv = CSV::new(target_csv);

    let mut temp = csv
        .records
        .iter()
        .map(|v| {
            use CSVValue::*;
            match &v[0] {
                String(s) => (levenshtein(word, s.as_str()), s.clone()),
                _ => panic!("wrong csv"),
            }
        })
        .collect::<Vec<(usize, String)>>();

    temp.sort_by(|(d0, _), (d1, _)| (*d0 - *d1).cmp(d0));

    let (distances, words) = temp.into_iter().unzip();

    WordDistances::from(words, distances)
}
