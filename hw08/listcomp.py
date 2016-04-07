def union(a, b):
    return a + [x for x in b if x not in a]

def intersection(a, b):
    return [x for x in a if x in b]

def setDifference(a, b):
    return [x for x in a if x not in b]

def symmetricDifference(a, b):
    return setDifference(a, b) + setDifference(b ,a)

def cartestianProduct(a ,b):
    return [(x, y) for x in a for y in b]

a = [5, 7, 3, 6, 2, 9]
b = [1, 2, 9, 8]


print union(a, b)
print intersection(a, b)
print setDifference(a, b)
print symmetricDifference(a, b)
print cartestianProduct(a, b)
