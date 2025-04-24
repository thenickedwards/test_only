from math import *

def to_binary(number): #you can add variables to the function
  binary_number = ""
  
  quotient = int(number / 2)

  while quotient > 1:
    if quotient % 2 == 0:
        binary_number += "0"
    else:
        binary_number += "1"
    quotient = quotient / 2
  
  print(binary_number)

to_binary(156) # result 10011100
to_binary(347) # result 101011011
to_binary(13) # result 1101