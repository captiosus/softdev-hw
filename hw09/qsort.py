def qsort(list):
    return [] if not list else qsort([x for x in list if x < list[0]])+[x for x in list if x == list[0]]+qsort([x for x in list if x > list[0]])

unallocated = [2, 6, 1, 3, 8, 13, 213, 4, 6, 8, 4, 21, 3, 7, 9, 0]
print qsort(unallocated)
