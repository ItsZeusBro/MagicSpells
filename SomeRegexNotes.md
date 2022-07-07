# Negative Look Ahead
/foo(?!bar)/

foobar ***foo***baz

#### Notes:
  1. Grabs any ‘foo’, except for when coming before ‘bar’




# Negative Look Behind

/(?<!bar )foo/

barfoo but***foo***

#### Notes:
1. Grabs any foo exept for when following bar




# Positive Look Ahead
/foo(?=bar)/

***foo***bar foobaz


#### Notes:
1. Grabs any foo only if bar is after it





# Positive Look Behind
/(?<=foo)bar/

foo***bar*** fuubar

#### Notes:
1. Grabs any bar only if foo is before it
    ***
