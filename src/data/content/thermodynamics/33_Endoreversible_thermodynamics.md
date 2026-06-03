# Endoreversible thermodynamics

Endoreversible thermodynamics is a subset of irreversible thermodynamics aimed at making more realistic assumptions about heat transfer than are typically made in reversible thermodynamics. It gives an upper bound on the power that can be derived from a real process that is lower than that predicted by Carnot for a Carnot cycle, and accommodates the exergy destruction occurring as heat is transferred irreversibly. 

## Efficiency at maximal power

Consider a semi-ideal heat engine, in which heat transfer takes time, according to Fourier's law of heat conduction: ${\dot {Q}}\propto \Delta T$ , but other operations happen instantly.

Its maximal efficiency is the standard Carnot result, but it requires heat transfer to be reversible (quasistatic), thus taking infinite time. At maximum power output, its efficiency is the Chambadal–Novikov efficiency: $\eta =1-{\sqrt {\frac {T_{L}}{T_{H}}}}=1-{\sqrt {1-\eta _{Carnot}}}$
Due to occasional confusion about the origins of the above equation, it is sometimes named the Chambadal–Novikov–Curzon–Ahlborn efficiency.

### Derivation

This derivation is a slight simplification of Curzon & Ahlborn.

Consider a heat engine, with a single working fluid cycling around the engine. On one side, the working fluid has temperature $T_{H}'$ , and is in direct contact with the hot heat bath. On the other side, it has temperature $T_{L}'$ , and is in direct contact with the cold heat bath.

The heat flow into the engine is ${\dot {Q}}_{H}=k_{H}(T_{H}-T_{H}')$ , where $k_{H}$ is the heat conduction coefficient. The heat flow out of the engine is ${\dot {Q}}_{L}=k_{L}(T_{L}'-T_{L})$
. The power output of the engine is ${\dot {W}}={\dot {Q}}_{H}-{\dot {Q}}_{L}$
.

Side note: if one cycle of the engine takes time $t$ , and during this time, it is in contact with the hot side only for a time $t_{H}$ , then we can reduce to this case by replacing $k_{H}$ with $k_{H}{\frac {t_{H}}{t}}$
. Similar comments apply to the cold side.

By Carnot theorem, we have $\eta ={\frac {\dot {W}}{{\dot {Q}}_{H}}}\leq 1-{\frac {T_{L}'}{T_{H}'}}$
. This then gives us a problem of constraint optimization: ${\begin{cases}\max _{T_{H}',T_{L}'}{\dot {W}}\\{\frac {\dot {W}}{{\dot {Q}}_{H}}}\leq 1-{\frac {T_{L}'}{T_{H}'}}\end{cases}}$
This can be solved by typical methods, such as Lagrange multipliers, giving us $T_{H}'=x{\sqrt {T_{H}}};\quad T_{L}'=x{\sqrt {T_{L}}};\quad x={\frac {k_{H}{\sqrt {T_{H}}}+k_{L}{\sqrt {T_{L}}}}{k_{H}+k_{L}}}$ at which point the engine is operating at efficiency $\eta =1-{\sqrt {\frac {T_{L}}{T_{H}}}}$
.

In particular, if $k_{L}\gg k_{H}$ , then we have $T_{H}'={\sqrt {T_{H}T_{L}}};\quad T_{L}'=T_{L}$
This is often the case with practical heat engines in power generation plants, where the work fluid can only spend a small amount of time with the hot bath (nuclear reactor core, coal furnance, etc), but a much larger amount of time with the cold bath (open atmosphere, a large body of water, etc).

### Experimental data

For some typical cycles, the above equation (note that absolute temperatures must be used) gives the following results:

As shown, the endoreversible efficiency much more closely models the observed data. 

However, such an engine violates Carnot's principle which states that work can be done any time there is a difference in temperature. The fact that the hot and cold reservoirs are not at the same temperature as the working fluid they are in contact with means that work can and is done at the hot and cold reservoirs. The result is tantamount to coupling the high and low temperature parts of the cycle, so that the cycle collapses.  

In the Carnot cycle, the working fluid must always remain constant temperatures, as the heat reservoirs they are in contact with and that they are separated by adiabatic transformations which prevent thermal contact. The efficiency was first derived by William Thomson in his study of an unevenly heated body in which the adiabatic partitions between bodies at different temperatures are removed and maximum work is performed. It is well known that the final temperature is the geometric mean temperature ${\sqrt {T_{H}T_{L}}}$ so that the efficiency is the Carnot efficiency for an engine working between $T_{H}$ and ${\sqrt {T_{H}T_{L}}}$
.
