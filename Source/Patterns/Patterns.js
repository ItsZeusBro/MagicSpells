export const SCIENTIFIC=/(\+|-| |^)?[0-9]+\.[0-9]+(e|E)(\+|\-)?[0-9]+\b/
export const INTEGER=/(\+|-| |^)[0-9]+\b/
export const FLOAT=/(\+|-| |^)[0-9]+\.[0-9]+\b/
export const BINARY=/(\+|-| |^)[0-1]+\b/
export const OCTET=""
export const HEX=""

export const LITERAL=/(.|\s)/u
export const CHAR=/[^\n\t\r]/u
export const WORD=/[^\n\t\r ]+/u
export const ALPHA_STRING=""
export const ALPHA_NUMERIC_STRING=""
export const SENTANCE=""
export const PARAGRAPH=""
export const LINE=/.*(\r\n)|.*(\n)|.*(\r\n$)|.*(\n$)/

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