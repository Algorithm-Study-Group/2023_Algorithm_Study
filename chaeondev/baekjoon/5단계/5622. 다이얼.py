string = input()
result = 0
for char in string:
    if char in ['A', 'B', 'C']:
        result += 3
    elif char in ['D', 'E', 'F']:
        result += 4
    elif char in ['G', 'H', 'I']:
        result += 5
    elif char in ['J', 'K', 'L']:
        result += 6
    elif char in ['M', 'N', 'O']:
        result += 7
    elif char in ['P', 'Q', 'R', 'S']:
        result += 8
    elif char in ['T', 'U', 'V']:
        result += 9
    elif char in ['W', 'X', 'Y', 'Z']:
        result += 10
    else:
        result += 0
print(result)
