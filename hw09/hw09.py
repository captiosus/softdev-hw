import time


def funcArgs(f):
    return lambda *arg: f.func_name + ": " + str(arg) + "\n" + f(*arg)


def evalTime(f):
    start = time.time()
    return lambda *arg: f(*arg) + "\n" + str(time.time() - start)


@evalTime
@funcArgs
def hello(string, string2):
    for x in range(6):
        for y in range(6000000):
            test = x * y
    return "hello world " + string + string2

print hello("hi", "bye")
