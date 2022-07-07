# Wild and Wonderful World of Magic Spells
These are Regex pattern matching spells for very specific tasks that are also pretty general.


## For example:
Grabbing anything in a string between 1% and 100% using word boundaries (grabs them all) 

    (?!\b[1][0-9][1-9]%)(?!(\b[2-9][0-9][0-9][0-9]*)%)\b[1-9][0-9]?[0-9]?%

For example it grabs anything in bold but not anything else:

"***100% 99%*** 101%"
