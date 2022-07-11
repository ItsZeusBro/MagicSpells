export const META_NUM_RANGE= /\[[0-9]*\-[0-9]*\]/;
export const META_CHAR_RANGE=/\[([a-z]|[A-Z])-([a-z]|[A-Z])\]/;
export const META_E = /e\\\+\?\\\-\?\[[0-9]*\-[0-9]*\]\*/;
export const META_SCIENTIFIC = /\/\[[0-9]*\-[0-9]*\]\*\\\.\[[0-9]*\-[0-9]*\]\*e\\\+\?\\\-\?\[[0-9]*\-[0-9]*\]\*\//;
export const SCIENTIFIC=/[0-9]*\.[0-9]*e\+?\-?[0-9]*/;
