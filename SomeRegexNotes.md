
# Positive Look Ahead
/foo(?=bar)/

***foo***bar foobaz


#### Notes:
1. Grabs any foo ***only if before bar***



# Positive Look Behind
/(?<=bar)foo/

bar***foo*** fuubar

#### Notes:
1. Grabs any foo ***only if after bar***




# Negative Look Ahead
/foo(?!bar)/

foobar ***foo***baz

#### Notes:
  1. Grabs any foo, ***only if not before ‘bar’***




# Negative Look Behind

/(?<!bar )foo/

barfoo but***foo***

#### Notes:
1. Grabs any foo ***only if not after bar***




