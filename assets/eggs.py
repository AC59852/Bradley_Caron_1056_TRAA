import numpy as np
import matplotlib.pyplot as plt
 
barWidth = 0.15
 
rainbowTroutReceived = [100000, 150000, 100000, 50000, 150000]
brownTroutReceived = [100000, 80000, 70000, 80000, 100000]
rainbowTroutHatched = [80000, 120000, 90000, 40000, 140000]
brownTroutHatched = [70000, 70000, 70000, 70000, 90000]
 
RTR = np.arange(len(rainbowTroutReceived))
BTR = [x + barWidth for x in RTR]
RTH = [x + barWidth for x in BTR]
BTH = [x + barWidth for x in RTH]
 
plt.bar(RTR, rainbowTroutReceived, color='#d08bd1', width=barWidth, label='rainbowTroutReceived')
plt.bar(BTR, brownTroutReceived, color='#472b15', width=barWidth, label='brownTroutReceived')
plt.bar(RTH, rainbowTroutHatched, color='#632a64', width=barWidth, label='rainbowTroutHatched')
plt.bar(BTH, brownTroutHatched, color='#974b0e', width=barWidth, label='brownTroutHatched')
 
plt.xlabel('group', fontweight='bold')
plt.xticks([W + barWidth for W in range(len(rainbowTroutReceived))], ['2016', '2017', '2018', ''])
 
plt.legend()
plt.show()