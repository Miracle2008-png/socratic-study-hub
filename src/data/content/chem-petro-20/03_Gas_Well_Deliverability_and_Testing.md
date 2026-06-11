# Gas Well Deliverability and Testing

Unlike an oil well, which often requires a pump to lift the heavy liquid, a gas well operates entirely on natural, explosive expansion. The gas in the rock is under immense pressure, and it desperately wants to expand to the low-pressure surface. 

To design the surface pipelines and compressor stations, an engineer must know exactly how much gas the well will deliver at various pressures. This requires determining the well's **Deliverability Equation**.

## 1. The Difference Between Oil and Gas Flow

In an oil well, the Inflow Performance Relationship (IPR) is roughly linear ($q \propto \Delta P$).

In a gas well, the physics are fundamentally different because gas is highly compressible. 
*   As the gas flows through the rock toward the wellbore, the pressure drops.
*   As the pressure drops, the gas violently expands. 
*   Because the gas expands, its velocity skyrockets.
*   As velocity skyrockets, the physical friction against the rock grains (turbulent flow) becomes massive.

Because of this violent expansion and turbulent friction, the flow of gas is proportional to the **Difference in Pressure Squared**.

$$ q \propto (P_R^2 - P_{wf}^2) $$

## 2. The Rawlins-Schellhardt Deliverability Equation

In 1935, two engineers, Rawlins and Schellhardt, conducted empirical tests on hundreds of gas wells and derived the standard Gas Deliverability Equation.

$$ q_g = C (P_R^2 - P_{wf}^2)^n $$

*   **$q_g$:** Gas flow rate (Mscf/day).
*   **$P_R$:** Average Reservoir Pressure.
*   **$P_{wf}$:** Bottomhole Flowing Pressure.
*   **$C$:** The Performance Coefficient. A constant that describes the geometry of the well and the permeability of the rock. (A high $C$ means a great well).
*   **$n$:** The Turbulence Exponent. It ranges from 0.5 to 1.0.
    *   If $n = 1.0$, the flow is perfectly smooth and laminar (like slow-moving water).
    *   If $n = 0.5$, the flow is violently turbulent, and massive amounts of energy are wasted on friction against the rock.

To predict the future flow rate of the well, the engineer must solve this equation to find the exact values of $C$ and $n$ for their specific well. 

## 3. Gas Well Testing (The Flow After Flow Test)

You cannot find $C$ and $n$ by looking at a rock core. You must perform a massive, physical field test on the actual well. 

The most common test is the **Flow After Flow Test** (or a 4-Point Test). 
The engineer intentionally flows the massive gas well at four different, stabilized rates.

1.  **Shut-In:** The well is closed. The pressure builds up until it reaches the true Average Reservoir Pressure ($P_R$).
2.  **Rate 1:** The engineer opens the surface choke slightly. The well flows at a low rate ($q_1$). They wait for the flow to stabilize and record the bottomhole flowing pressure ($P_{wf1}$).
3.  **Rate 2:** They open the choke wider. The well flows faster ($q_2$). The pressure drops further. They wait and record ($P_{wf2}$).
4.  **Rates 3 and 4:** They repeat this process for two more increasingly massive flow rates.

### The Math (Plotting the Data)
The engineer takes the four physical data points and plots them on a specialized **Log-Log Graph**.
*   **Y-Axis:** $(P_R^2 - P_{wf}^2)$
*   **X-Axis:** Flow Rate ($q$)

Because it is plotted on a logarithmic scale, the Rawlins-Schellhardt equation transforms into a perfectly straight line.
*   The data points from the four flow tests will form a straight line.
*   The **Slope** of this line is mathematically equal to $\frac{1}{n}$. (This gives you the $n$ exponent).
*   The **Y-Intercept** allows you to calculate the performance constant $C$.

## 4. The Absolute Open Flow (AOF)

Once the engineer has drawn the straight line on the graph and calculated $C$ and $n$, the well is officially "Tested."

The ultimate goal of this test is to calculate the **Absolute Open Flow (AOF)**.
The AOF is the theoretical maximum flow rate the well could ever possibly achieve. It is calculated by assuming the bottomhole pressure ($P_{wf}$) is dropped to exactly zero (a total vacuum). 

$$ AOF = C (P_R^2 - 0^2)^n = C (P_R^2)^n $$

The AOF is a legally and financially critical number. Oil companies use the AOF to legally report the size and capability of their gas wells to government regulators and investors.
