'''
figure out ho quickly the depth increases
count the umber of times a depth measurement increases from the previous
#199 (N/A - no previous measurement)
# 200 (increased)
# 208 (increased)
# 210 (increased)
# 200 (decreased)
# 207 (increased)
# 240 (increased)
# 269 (increased)
# 260 (decreased)
# 263 (increased)
how many measurements are larger than the last?
'''

depths = open('depths.txt', 'r')

depthsList = depths.readlines()
print(type(depthsList))
# for depth in depthsList:
    # print(type(depth))

