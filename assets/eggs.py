import matplotlib.pyplot as plt

n_groups = 10

years = ('2014', '2015', '2016', '2017', '2018')

rainbowTroutReceived = (100000, 150000, 100000, 50000, 150000)

brownTroutReceived = (100000, 80000, 70000, 80000, 100000)

rainbowTroutHatched = (80000, 120000, 90000, 40000, 140000)

brownTroutHatched = (70000, 70000, 70000, 70000, 90000)

plt.scatter(years, rainbowTroutReceived, c='b')
plt.scatter(years, brownTroutReceived, c='#FF1493')
plt.scatter(years, rainbowTroutHatched, c='r')
plt.scatter(years, brownTroutHatched, c='#19b105')

plt.xlabel('Years')
plt.ylabel('Number of Eggs Received and Hatched')
plt.title('Number of Rainbow and Brown Trout Eggs Received and Hatched Since 2014')
plt.show()