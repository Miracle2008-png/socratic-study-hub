# DC Circuits and Kirchhoff's Laws

A Direct Current (DC) circuit is a closed loop where the current flows continuously in only one direction. The simplest DC circuit is a battery connected to a single resistor. 

However, real-world electronics involve complex webs of multiple batteries, branches, and dozens of resistors. To analyze these complex networks, we need systematic rules.

## 1. Resistors in Series and Parallel

When multiple resistors are connected together, we can often simplify the circuit by combining them into a single "Equivalent Resistance" ($R_{eq}$).

### Resistors in Series
Resistors are in series when they are connected end-to-end like a chain. 
*   The **Current ($I$) is identical** through every resistor in the chain (there are no forks in the road; the electrons have nowhere else to go).
*   The total Voltage is split among the resistors.
*   **Equivalent Resistance:** You simply add them together.
    $$ R_{eq} = R_1 + R_2 + R_3 + \dots $$

### Resistors in Parallel
Resistors are in parallel when both ends are connected to the same two nodes. The wire splits into multiple parallel paths and then recombines.
*   The **Voltage ($V$) is identical** across every branch in parallel.
*   The total Current splits into the branches. The path of least resistance gets the most current.
*   **Equivalent Resistance:** The reciprocal of the equivalent resistance is the sum of the reciprocals.
    $$ \frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + \dots $$
    *(Note: Adding more resistors in parallel actually makes the total resistance drop, because you are providing more lanes on the highway for the electrons to travel).*

## 2. Kirchhoff's Circuit Laws

Sometimes circuits are so complex (like a bridge circuit) that they cannot be broken down into simple series and parallel combinations. 
To solve any circuit in the universe, we rely on two fundamental laws formulated by Gustav Kirchhoff.

### Kirchhoff's Current Law (KCL)
**"The sum of all currents entering a junction must equal the sum of all currents leaving that junction."**
$$ \sum I_{\text{in}} = \sum I_{\text{out}} $$
*   This is simply the Law of **Conservation of Charge**. Electrons cannot magically materialize or vanish at a wire junction. What goes in must come out.

### Kirchhoff's Voltage Law (KVL)
**"The algebraic sum of all voltage changes around any closed loop in a circuit must be exactly zero."**
$$ \sum_{\text{closed loop}} \Delta V = 0 $$
*   This is simply the Law of **Conservation of Energy**. If you trace a loop around the circuit and return to your exact starting point, you must be at the exact same electrical potential energy you started with. 
*   When tracing a loop, a battery is a voltage "gain" (+$V$), and a resistor is a voltage "drop" ($-IR$).

## 3. RC Circuits (Resistors and Capacitors)

What happens if we put a Capacitor and a Resistor in the same DC circuit? 
We know capacitors store charge. But they don't fill up instantly. The resistor slows down the flow of current. 
This creates a **Transient Circuit** — a circuit whose voltage and current change over time.

### Charging a Capacitor
When you close the switch to connect a battery to an empty capacitor through a resistor:
1.  Initially ($t=0$), the capacitor is empty, so it offers zero resistance. Current spikes to maximum ($I = V/R$).
2.  As charge builds up on the capacitor plates, it creates a "back-pressure" voltage that fights the battery.
3.  The current slows down exponentially.
4.  Eventually ($t \to \infty$), the capacitor is completely full. Its voltage exactly matches the battery. The current drops to perfectly zero. A full capacitor acts like a broken wire.

The math governing the charge $q(t)$ on the capacitor is an exponential growth curve:
$$ q(t) = Q_{\text{max}} \left( 1 - e^{-t / RC} \right) $$

### The Time Constant ($\tau$)
The rate at which the capacitor charges is governed by the product of the Resistance and the Capacitance. We call this the **Time Constant ($\tau$)**.
$$ \tau = R \cdot C $$
*   Units: Ohms $\times$ Farads = Seconds!
*   After exactly 1 time constant ($t = \tau$), the capacitor will be $63.2\%$ fully charged.
*   After 5 time constants ($t = 5\tau$), engineers consider the capacitor to be 99.3% charged (effectively full).
