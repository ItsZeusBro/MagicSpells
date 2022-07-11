export const IS_SCIENTIFIC=/^[0-9]+\.[0-9]+e(\+|\-)?[0-9]+$/
export const IS_INTEGER=/^((([1-9],)|([1-9][0-9],)|([1-9][0-9][0-9],))([0-9][0-9][0-9],)*([0-9][0-9][0-9]))($|\s)|^([0-9]*$)/
export const IS_FLOAT=/^[0-9]+\.[0-9]+$/
export const IS_BINARY=/^[0-1]+$/
export const IS_ALPHA_STRING=/^[a-zA-Z]+$/
export const IS_ALPHA_NUMERIC_STRING= /^[a-zA-Z0-9]+$/
export const IS_SENTANCE=/^[A-Z][a-z]*( |, |; )?([a-z]+(')?( |, |; )?)*((\.\.\.)|\?|\!|\.)$/