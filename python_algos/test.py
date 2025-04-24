''' Challenge 1: Using the loop structure of your choice, print to the screen the numbers 10 through 50.'''
def print_nums():
    for n in range(10, 50+1):
        print(n)

''' Challenge 2: Assume you have a variable that contains the string value of 'Nucamp'. Using the loop structure of your choice, loop through each character in the string and print each one to the screen, one by one.'''
def print_letters(string):
    for l in string:
        print(l)

''' Challenge 3: Create an ordered, zero-indexed list/array of 3 single-word strings of your choice and pass it to a function. Example: ['planes', 'trains', 'automobiles']. In the function, swap the order of the first and last items, then return the new list/array.'''
def swap_first_last(_list):
    first = _list[0]
    last = _list.pop()
    _list[0] = last
    _list.append(first)
    print(_list)

''' Challenge 4: Write a function that takes two string arguments and returns the strings concatenated together, adding a comma and a space between them, then call that function. Example: If the function is called with two string arguments of "red" and "blue", the string returned should be "red, blue".'''
def concat_strings(string1, string2):
    print(string1 + string2)

''' Challenge 5: Write a function that takes two arguments, then returns an object with a single property where the first argument is the key, and the second argument is the value. For example, if the function is called with the arguments of 'id' and 2, the return value of the function should be an object such as (in JavaScript): { id: 2 }'''
def create_dict(key, value):
    print({key: value})

''' Challenge 6: Write a function that takes the full name of the day of a week and returns its abbreviation. For example, if the argument 'Friday' is supplied to the function, it should return 'Fri'. '''
weekdays = {
    "Sunday": "Sun",
    "Monday": "Mon",
    "Tuesday": "Tue",
    "Wednesday": "Wed",
    "Thursday": "Thu",
    "Friday": "Fri",
    "Saturday": "Sat"}
def get_abbrev(day, weekdays=weekdays):
    print(weekdays[day])

''' Challenge 7: The traditional color wheel contains the primary colors of red, yellow, and blue. Their complements are green (for red), purple (for yellow), and orange (for blue). Write a function that takes a single argument of any of these six colors, then returns their complement. For example, if "purple" is the argument, the return value should be "yellow". '''
complements = {
    "red": "green",
    "orange": "blue",
    "yellow": "purple",
    "green": "red",
    "blue": "orange",
    "purple": "yellow"}
def get_complement(color, complements=complements):
    print(complements[color])

''' Challenge 8: Write code that will return a random integer between 0 and 100 inclusive and assign it to a variable. '''
import random
def get_random_int():
    print(random.randint(0, 100))



if __name__ == "__main__":
    # print_nums()
    # print_letters("Nucamp")
    # swap_first_last(['planes', 'trains', 'automobiles'])
    # concat_strings("red", "blue")
    # create_dict("id", 2)
    # get_abbrev("Friday")
    # get_complement("purple")
    get_random_int()