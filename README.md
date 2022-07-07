# Wild and Wonderful World of Magic Spells
<img src="https://github.com/ItsZeusBro/MagicSpells/blob/0aad09ce01a08b6f81516c8d4337b0d044cf13b4/inwriting.gif" height="200" width="250"/>

These are Regex pattern matching spells for very specific tasks that are also pretty general.


## For example:
Grabbing anything in a string between 1% and 100% using word boundaries (grabs them all) 

    (?!\b[1][0-9][1-9]%)(?!(\b[2-9][0-9][0-9][0-9]*)%)\b[1-9][0-9]?[0-9]?%

For example it grabs anything in bold but not anything else:

"***100% 99%*** 101%"
