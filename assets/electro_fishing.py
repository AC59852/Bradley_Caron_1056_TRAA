import numpy as np
import matplotlib.pyplot as plt


n_groups = 9

Komoka = (15, 14, 23)
Oxbow = ( 10, 18, 12)
Dingman = (13, 15, 14)

fig, ax = plt.subplots()

index = np.arange(n_groups)
bar_width = 0.35

opacity = 0.6

ax.bar(index, Komoka, bar_width, alpha=opacity, color='b', label='Komoka')
ax.bar(index + bar_width, Oxbow, bar_width, alpha=opacity, color='#FF1493', label='Oxbow')
ax.bar(index + bar_width, Dingman, bar_width, alpha=opacity, color='r', label='Dingman')

ax.set_xlabel('Year')
ax.set_ylabel('Number of Rainbow Trout Caught')
ax.set_title('Number of Rainbow Trout Caught Electro Fishing in Lake Komoka, Oxbow and Dingman Since 2016')
ax.set_xticks(index + bar_width / 2)
ax.set_xticklabels(('2016', '2017', '2018'))
ax.legend()

fig.tight_layout()
plt.show()