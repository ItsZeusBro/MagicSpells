export const SCIENTIFIC=/(\+|\-)?[0-9]+\.[0-9]+(e|E)(\+|\-)?[0-9]+/
export const SCIENTIFIC_G=/(\+|\-)?[0-9]+\.[0-9]+(e|E)(\+|\-)?[0-9]+/g
export const INTEGER=/^((([1-9],)|([1-9][0-9],)|([1-9][0-9][0-9],))([0-9][0-9][0-9],)*([0-9][0-9][0-9]))($|\s)|^([0-9]*$)/
export const FLOAT=/^[0-9]+\.[0-9]+$/
export const BINARY=/^[0-1]+$/
export const ALPHA_STRING=/^[a-zA-Z]+$/
export const ALPHA_NUMERIC_STRING= /^[a-zA-Z0-9]+$/
export const SENTANCE=/^[A-Z][a-z]*( |, |; )?([a-z]+(')?( |, |; )?)*((\.\.\.)|\?|\!|\.)$/