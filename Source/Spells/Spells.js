export const SCIENTIFIC=/(\+|\-)?[0-9]+\.[0-9]+(e|E)(\+|\-)?[0-9]+/
export const INTEGER=/((([1-9],)|([1-9][0-9],)|([1-9][0-9][0-9],))([0-9][0-9][0-9],)*([0-9][0-9][0-9]))($|\s)|^([0-9]*)/
export const FLOAT=/[^\.\?\;\,\>\<\/\\%\$\#\@\!\(\)\{\}\:\"\'\~\`\|\*\&\^\_\-](\+?|-?|)[0-9]+\.[0-9]+[^\.\?\;\,\>\<\/\\\%\$\#\@\!\(\)\{\}\:\"\'\~\`\|\*\&\^\_\-]/
export const BINARY=/[0-1]+/
export const OCTET=""
export const HEX=""

export const CHAR=""
export const ALPHA_STRING=/^[a-zA-Z]+/
export const ALPHA_NUMERIC_STRING= /^[a-zA-Z0-9]+/
export const SENTANCE=/^[A-Z][a-z]*( |, |; )?([a-z]+(')?( |, |; )?)*((\.\.\.)|\?|\!|\.)/
export const PARAGRAPH=""
export const LINE=""

export const JAVAFUNCTION=""
export const JSFUNCTION=""
export const CPPFUNCTION=""
export const PYFUNCTION=""
export const GOFUNCTION=""
export const PHPFUNCTION=""

export const HTML=""
export const XML=""
export const JSON=""

export const JAVABLOCK="" 
export const JSBLOCK="" 
export const CPPBLOCK=""
export const PYBLOCK=""
export const GOBLOCK=""
export const PHPBLOCK=""