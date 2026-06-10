# Crossplot Analysis and Lithology Identification

So far, we have looked at each wireline log as a single, squiggly line. We have calculated porosity assuming we already knew exactly what the rock matrix was (Sandstone vs. Limestone).

But what if you are drilling an exploratory "Wildcat" well in an unmapped jungle basin? You don't know the lithology. The rock might be a complex, microscopic blend of 40% Sandstone, 40% Limestone, and 20% Dolomite. 

If you use the Density equation and falsely assume the rock is 100% Sandstone ($\rho_{ma} = 2.65$), your calculated porosity will be completely mathematically invalid, and you will miscalculate the oil reserves by millions of barrels. 

To solve this, petrophysicists do not look at single logs. They plot multiple logs against each other simultaneously using **Crossplots**.

## 1. The Power of Crossplotting

A crossplot is simply a scatter-plot graph. It removes Depth entirely.
It plots the mathematical reading from one tool on the X-axis, and the reading from a different tool on the Y-axis. 

Every single foot of depth in the well becomes a single dot on the graph. If you plot 1,000 feet of log data, you get a massive cluster of 1,000 dots. The physical location of that cluster of dots on the graph instantly reveals the exact chemical lithology of the rock, without needing to know anything about the geology beforehand.

## 2. The Neutron-Density Crossplot

This is the most famous and widely used crossplot in the industry.
*   **X-Axis:** Neutron Porosity ($\phi_N$), assuming a limestone matrix.
*   **Y-Axis:** Bulk Density ($\rho_b$) from the Density tool.

The graph is pre-printed with three massive, sweeping, curved lines. These are the "Lithology Lines."
1.  The top line represents 100% pure Sandstone.
2.  The middle line represents 100% pure Limestone.
3.  The bottom line represents 100% pure Dolomite.

### How to Read the Plot
1.  **Pure Lithology:** If your cluster of 1,000 data points lands perfectly on top of the middle line, you know with 100% certainty that the rock is pure Limestone. Furthermore, you can simply read the exact, true Porosity by looking at where the dots land along the length of the line.
2.  **Mixed Lithology:** If your cluster of dots lands exactly halfway between the Sandstone line and the Limestone line, the math is telling you that the rock is a perfect 50/50 blend of quartz and calcite. 
3.  **The Gas Effect:** What if the cluster of dots doesn't land on any line? What if the cluster is floating high up in the top-left corner of the graph, far above the Sandstone line? 
    *   This is the mathematical manifestation of the Gas Effect (High Density porosity, Low Neutron porosity). 
    *   The dots are physically pulled toward the top-left by the extreme low density and low hydrogen index of the gas. The petrophysicist knows instantly they have found a massive gas zone.

## 3. The M-N Lithology Plot

If the rock is an incredibly complex, 3-part mineral mixture, the Neutron-Density crossplot might be ambiguous. 
To solve a 3-mineral problem, you need 3 equations. You must bring in the third tool: The Sonic Log.

The M-N plot uses data from all three porosity tools (Density, Neutron, and Sonic) simultaneously.
It creates two complex, artificial mathematical parameters: $M$ and $N$.
*   **M:** Combines the Sonic transit time and the Bulk Density.
*   **N:** Combines the Neutron porosity and the Bulk Density.

Because porosity mathematically cancels out of the equations for $M$ and $N$, these two numbers are almost purely dependent on the solid rock matrix.

*   The engineer calculates $M$ and $N$ for every depth and plots them on a graph.
*   The graph contains a massive triangle, with the three corners representing pure Quartz, pure Calcite, and pure Dolomite.
*   Wherever the data point lands inside the triangle, simple geometric math tells the engineer the exact percentage of all three minerals present in that specific foot of rock.

By leveraging the combined physics of radiation and sound, the petrophysicist can mathematically dissect the microscopic chemical composition of a rock located three miles underground, without ever physically touching it.
