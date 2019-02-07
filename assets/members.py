import numpy as np
import matplotlib.pyplot as plt


n_groups = 17

members = (52, 48, 67, 45, 45, 50, 55, 67, 65, 70, 60, 60, 55, 60, 65, 75, 80)


fig, ax = plt.subplots()

index = np.arange(n_groups)
bar_width = 0.35

opacity = 0.6

ax.bar(index, members, bar_width, alpha=opacity, color='b', label='Members')


ax.set_xlabel('year')
ax.set_ylabel('members')
ax.set_title('Members of TRAA since 2002')
ax.set_xticks(index + bar_width / 2)
ax.set_xticklabels(('2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011' '2012' '2013'
'2014' '2015' '2016' '2017' '2018'))
ax.legend()

fig.tight_layout()
plt.show()
