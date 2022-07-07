const BETWEEN_1_PCT_AND_100_PCT = "(?!\b[1][0-9][1-9]%)(?!(\b[2-9][0-9][0-9][0-9]*)%)\b[1-9][0-9]?[0-9]?%"
const ANYTHING_OVER_100_PCT_EX = "(?![1-9][0-9]%)(?!100%)((\b[1][0-9][1-9]%(\b))|(\b[1-9][0-9][0-9]*%))"
const ANYTHING_UNDER_0_IN = "\b(0\.[0-9]*[0-9])\b"
exports = {BETWEEN_1_PCT_AND_100_PCT}