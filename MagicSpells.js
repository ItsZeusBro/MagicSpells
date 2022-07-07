export const BETWEEN_1_PCT_AND_100_PCT = "/ (?!\b[1][0-9][1-9]%)(?!(\b[2-9][0-9][0-9][0-9]*)%)\b[1-9][0-9]?[0-9]?% /g";
export const ANYTHING_OVER_100_PCT_EX = "/ (?![1-9][0-9]%)(?!100%)((\b[1][0-9][1-9]%(\b))|(\b[1-9][0-9][0-9]*%)) /g";
export const ANYTHING_UNDER_0_IN = "/ \b0\.[0-9]*\b /g";
export const ANYTHING_UNDER_0_EX = "/ (?!\b0.[0][0]*\b)(\b0\.[0-9]*\b) /g";
export const ANYTHING_UNDER_0_EX_TRUNC = "/ \b(0\.[0-9]*)(?!0*\b)[0-9]\b /g"
export const ANYTHING_SCIENTIFIC="/ \b((0\.[0-9]*)|([1-9]*\.[0-9]*))(?!0*\b)[0-9]e(\+|-|)[1-9][0-9]*\b /g"
export const DEWEY_DECIMAL="/ \b[0-9][0-9][0-9]\.?[0-9]?[0-9]?[0-9]? ([A-Z][a-z]{1,44} ?)([a-z]{1,45} ?)*\b/g"