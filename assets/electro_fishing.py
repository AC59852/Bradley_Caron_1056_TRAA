import numpy as np
import matplotlib.pyplot as plt
 
barWidth = 0.25
 
Komoka = [15, 14, 23,]
Oxbow = [10, 18, 12]
Dingman = [13, 15, 14]
 
K = np.arange(len(Komoka))
O = [x + barWidth for x in K]
D = [x + barWidth for x in O]
 
plt.bar(K, Komoka, color='r', width=barWidth, label='Komoka')
plt.bar(O, Oxbow, color='g', width=barWidth, label='Oxbow')
plt.bar(D, Dingman, color='b', width=barWidth, label='Dingman')
 
plt.xlabel('group', fontweight='bold')
plt.xticks([W + barWidth for W in range(len(Komoka))], ['2016', '2017', '2018',])
 
plt.legend()
plt.show()