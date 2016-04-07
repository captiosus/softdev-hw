p="myNoobPass1234*"
# print [x for x in p]
# print [x for x in "1234"]
#
# UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
# print [ x for x in p if x in UC_LETTERS ]
#
# print [ 1 for x in p if x in UC_LETTERS ]
#
# print [ 1 if x in UC_LETTERS else 0 for x in p ]

UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
LC_LETTERS="abcdefghijklmnopqrstuvwxyz"
NUMBERS="1234567890"
SYMBOLS=".?!&#,;:-_*"
# UC = [ 1 for x in p if x in UC_LETTERS ]
# LC = [ 1 for x in p if x in LC_LETTERS ]
# NUM = [ 1 for x in p if x in NUMBERS ]
# if 1 in UC and 1 in LC and 1 in NUM:
#     print "success"
# else:
#     print "fail"
# check = [ 1 if x in UC_LETTERS else 2 if x in LC_LETTERS else 3 if x in NUMBERS else 0 for x in p ]
# if 1 in check and 2 in check and 3 in check:
#     print "success"
# else:
#     print "fail"

check = [ 3 if x in UC_LETTERS else
            2 if x in LC_LETTERS else
            1 if x in NUMBERS else
            4 if x in SYMBOLS else
            0 for x in p ]
            
if 1 in check and 2 in check and 3 in check and 4 in check:
    print "Your score is: " + ("10" if sum(check) > 50 else str(sum(check)/5))
else:
    print "Does not meet criteria"
