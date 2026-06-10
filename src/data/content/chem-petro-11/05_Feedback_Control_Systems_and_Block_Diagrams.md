# Feedback Control Systems and Block Diagrams

We now know how to model the physical process using transfer functions. But the physical process is only one part of the feedback loop. 
To analyze how a fully automated plant will react, we must mathematically connect the sensor, the controller, the valve, and the process together. We do this using **Block Diagrams**.

## 1. Anatomy of a Block Diagram

A block diagram is a visual and mathematical representation of the flow of information in a control system. 

*   **Blocks (Rectangles):** Represent a physical component (e.g., the Tank, the Valve). Inside the block is its Transfer Function, $G(s)$.
*   **Arrows:** Represent the signals (usually electronic currents or physical variables like flow rate) moving between components, defined by variables like $X(s)$ or $Y(s)$.
*   **Summing Junctions (Circles):** Where two signals combine. A plus ($+$) or minus ($-$) sign next to the arrow indicates whether the signal is added or subtracted.

### The Standard Feedback Loop Components
A typical closed-loop block diagram traces the physical sequence of events:
1.  **Setpoint ($Y_{sp}(s)$):** Enters the main summing junction.
2.  **Comparator:** The summing junction calculates the **Error ($E(s)$)** by subtracting the measured value from the setpoint: $E(s) = Y_{sp}(s) - Y_m(s)$.
3.  **Controller ($G_c(s)$):** Takes the Error and calculates a controller output signal ($P(s)$).
4.  **Final Control Element / Valve ($G_v(s)$):** Takes the electrical signal $P$ and physically opens, changing the manipulated flow rate ($U(s)$).
5.  **The Process ($G_p(s)$):** Takes the manipulated flow rate and physically changes the actual output variable ($Y(s)$).
6.  **Disturbance ($G_d(s)$):** An external disturbance ($D(s)$) passes through its own transfer function and adds directly to the output $Y$ via a summing junction.
7.  **Sensor/Transmitter ($G_m(s)$):** Reads the actual output $Y(s)$ and converts it to the measured electronic signal ($Y_m(s)$), feeding it back to the beginning comparator.

## 2. Block Diagram Algebra

Block diagrams are not just pictures; they are exact algebraic equations. 
If an arrow $X$ goes into a block $G$, the arrow coming out is simply $X \cdot G$.

By systematically multiplying blocks and substituting equations around the loop, we can derive the **Closed-Loop Transfer Function**. This single equation tells us exactly how the final output $Y$ will respond to either a change in Setpoint or a Disturbance, taking the entire automated loop into account.

### The Closed-Loop Equation
To find how the output $Y$ reacts to a Setpoint change $Y_{sp}$ (assuming Disturbance $D=0$):
1.  Forward path from $Y_{sp}$ to $Y$: Multiply all blocks in the top path together ($G_c G_v G_p$).
2.  Feedback loop: Multiply all blocks in the entire circular loop ($G_c G_v G_p G_m$).

The magical rule for any standard feedback loop is:
$$ \frac{Y}{Y_{sp}} = \frac{\text{Product of Forward Blocks}}{1 + \text{Product of Loop Blocks}} $$

Substituting our components:
$$ \frac{Y(s)}{Y_{sp}(s)} = \frac{G_c G_v G_p}{1 + G_c G_v G_p G_m} $$

Similarly, if we want to know how the system reacts to a Disturbance ($D$) while holding the Setpoint constant:
$$ \frac{Y(s)}{D(s)} = \frac{G_d}{1 + G_c G_v G_p G_m} $$

Notice that the denominator ($1 + G_c G_v G_p G_m$) is identical in both equations. This denominator is called the **Characteristic Equation** ($1 + G_{loop} = 0$), and it entirely determines whether the automated plant will be stable or whether it will oscillate violently out of control.

## 3. Negative vs. Positive Feedback

Notice that in the comparator (summing junction), the measured signal $Y_m$ is *subtracted* from the setpoint. $E = SP - Y_m$.
This is **Negative Feedback**. 
*   If the temperature gets too high, the error becomes negative. The controller sees a negative error and closes the steam valve, bringing the temperature back down. It actively fights deviations.

If the comparator *added* the signals ($E = SP + Y_m$), we would have **Positive Feedback**.
*   If the temperature rises slightly, the error becomes larger. The controller sees a larger error and opens the steam valve *more*. The temperature skyrockets. Positive feedback loops accelerate instability and lead to catastrophic runaway reactions. We deliberately avoid them in physical plant control.
