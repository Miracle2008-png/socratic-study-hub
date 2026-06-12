# 3. Sequential Logic and Flip-Flops

## The Invention of Memory

Combinational logic is "memoryless." If you remove the input, the output vanishes instantly. A CPU cannot function like this; it needs to store results, remember what step of the program it is on, and hold data in RAM.

To give a circuit memory, we must use **Feedback**—routing the output of a gate back into its own input. This creates **Sequential Logic**, where the output depends not just on the current inputs, but on the *past history* (the state) of the circuit.

---

## The SR Latch (Set-Reset)

The simplest memory element is the **SR Latch**, built by cross-coupling two NOR gates (or NAND gates). It has two inputs: Set ($S$) and Reset ($R$), and two outputs: $Q$ and $\overline{Q}$ (which is always the opposite of $Q$).

*   **Set ($S=1, R=0$):** Forces the output $Q$ to $1$.
*   **Reset ($S=0, R=1$):** Forces the output $Q$ to $0$.
*   **Hold ($S=0, R=0$):** The circuit locks. The cross-coupled gates hold each other in equilibrium. $Q$ retains whatever value it had previously. **Memory is achieved!**
*   **Invalid ($S=1, R=1$):** Causes both outputs to go to 0, breaking the rule that $Q$ and $\overline{Q}$ must be opposites. If both inputs drop to 0 simultaneously, the circuit enters a "race condition" and the final state is unpredictable.

---

## Clocks and Flip-Flops

An SR Latch is asynchronous—the instant you change the input, the output changes. In a complex CPU with billions of gates, signals take different amounts of time to travel through wires of different lengths. If memory elements update asynchronously, chaos ensues (data gets saved before it finishes calculating).

To fix this, computers use a **Clock Signal**: a massive, continuous square wave that oscillates between 1 and 0 (e.g., $3.0\text{GHz}$). 
We upgrade the Latch into a **Flip-Flop** by adding circuitry so that it *only* accepts new data at the exact instant the clock wave changes from 0 to 1 (the **Rising Edge**). 
This forces the entire CPU to march in perfect, synchronized steps.

### The D Flip-Flop (Data)
This is the most common memory element in modern electronics.
*   It has one Data input ($D$) and one Clock input ($CLK$).
*   On the rising edge of the clock, the output $Q$ grabs whatever value is on $D$ and locks it in. 
*   For the rest of the clock cycle, no matter how wildly $D$ changes, $Q$ remains absolutely locked.

### The T Flip-Flop (Toggle)
*   If $T=1$ on the clock edge, the output $Q$ flips its state (1 becomes 0, 0 becomes 1).
*   If $T=0$, it holds its state.

---

## Engineering Applications

*   **Registers:** A single D Flip-Flop stores 1 bit of memory. By placing 64 D Flip-Flops in a row and wiring all their Clock pins together, you create a 64-bit Register. When the clock ticks, an entire 64-bit word is instantly captured and stored.
*   **Button Debouncing:** When you press a physical mechanical button, the metal contacts bounce against each other microscopically, sending a jagged storm of 1s and 0s to the microcontroller. By routing the button through an SR Latch, the very first microscopic touch "Sets" the latch to 1, and it perfectly ignores all the subsequent bouncing.

---

## Worked Examples

### Example 1 — Easy: D Flip-Flop Timing

**Problem:** A D Flip-Flop is driven by a $1\text{kHz}$ clock. At $t=0.5\text{ms}$, the Data input ($D$) goes from 0 to 1. The first rising edge of the clock occurs at $t=1.0\text{ms}$. The Data input drops back to 0 at $t=1.5\text{ms}$. The second rising edge of the clock occurs at $t=2.0\text{ms}$.
What is the state of the Output ($Q$) at $t=0.8\text{ms}$, $t=1.2\text{ms}$, and $t=2.2\text{ms}$? (Assume initial $Q=0$).

**Solution:**
1.  **At $t=0.8\text{ms}$:**
    The $D$ input is 1, but no clock edge has occurred yet. The flip-flop is holding its initial state.
    $$ \mathbf{Q = 0} $$
2.  **At $t=1.2\text{ms}$:**
    A rising edge occurred at $1.0\text{ms}$. At that exact instant, $D$ was 1. The flip-flop captured it.
    $$ \mathbf{Q = 1} $$
3.  **At $t=2.2\text{ms}$:**
    A rising edge occurred at $2.0\text{ms}$. At that exact instant, $D$ had already dropped back to 0. The flip-flop captured the 0.
    $$ \mathbf{Q = 0} $$

---

### Example 2 — Medium: Frequency Division

**Problem:** You have a $100\text{MHz}$ clock signal. You connect the $\overline{Q}$ output of a D Flip-Flop directly back into its own $D$ input. You feed the $100\text{MHz}$ clock into the $CLK$ pin. 
What is the frequency of the square wave coming out of the $Q$ output?

**Solution:**
1.  **Analyze the behavior:**
    Because $\overline{Q}$ (the opposite of $Q$) is fed into $D$, every time the clock ticks, the flip-flop grabs the *opposite* of its current state.
    If $Q=0$, $\overline{Q}=1$. On the clock edge, it grabs $1$. $Q$ becomes $1$.
    On the next clock edge, $\overline{Q}$ is now 0. It grabs $0$. $Q$ becomes $0$.
2.  **Analyze the timing:**
    It takes *two* clock ticks to complete one full cycle of the output (0, then 1, then back to 0).
3.  **Determine Frequency:**
    Because it takes two clock cycles to make one output cycle, the frequency is divided exactly in half.
    $$ f_{out} = \frac{100\text{MHz}}{2} = \mathbf{50\text{MHz}} $$
*(This circuit is called a "Divide-by-2 Counter". By chaining 10 of these together, you can perfectly divide a high-speed clock down to a slow, usable frequency).*

---

### Example 3 — Hard: Building a T Flip-Flop from a D Flip-Flop

**Problem:** You need a Toggle (T) Flip-Flop, but you only have a D Flip-Flop and a bin of basic logic gates (AND, OR, XOR). 
Design a combinational logic circuit to attach to the $D$ input that will make the D Flip-Flop behave exactly like a T Flip-Flop.

**Solution:**
1.  **Define T Flip-Flop behavior:**
    *   If $T=0$, next state ($Q_{next}$) = current state ($Q$).
    *   If $T=1$, next state ($Q_{next}$) = opposite of current state ($\overline{Q}$).
2.  **Define D Flip-Flop behavior:**
    *   $Q_{next} = D$.
3.  **Set them equal to find the logic for $D$:**
    We need an equation for $D$ that relies on $T$ and the current $Q$.
    Look at the truth table for the required $D$ input:
    *   $T=0, Q=0 \implies$ We want $Q_{next}=0 \implies D=0$
    *   $T=0, Q=1 \implies$ We want $Q_{next}=1 \implies D=1$
    *   $T=1, Q=0 \implies$ We want $Q_{next}=1 \implies D=1$
    *   $T=1, Q=1 \implies$ We want $Q_{next}=0 \implies D=0$
4.  **Identify the gate:**
    The truth table for $D$ is $0, 1, 1, 0$. This is exactly the truth table for an **XOR** gate!
5.  **Final Circuit:**
    $$ \mathbf{D = T \oplus Q} $$
    *(Take the $Q$ output, run it through an XOR gate with the $T$ input, and plug the result into the $D$ input. You have successfully synthesized a T Flip-Flop!)*

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Sequential Logic",
        "icon": "BrainCircuit",
        "description": "Adding Memory by routing outputs back to inputs (Feedback)."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "The SR Latch",
        "icon": "Activity",
        "description": "Set and Reset. Cross-coupled NOR gates that lock a 1 or 0 indefinitely."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "The Clock Signal",
        "icon": "Sigma",
        "description": "A high-speed square wave that forces the entire system to step in synchronization."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "The D Flip-Flop",
        "icon": "Layers",
        "description": "Captures the Data (D) input exactly on the rising edge of the Clock. The basis of RAM."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Next: Finite State Machines",
        "icon": "Target",
        "description": "Combining memory and logic to build machines that navigate through sequences of states."
      },
      "style": { "background": "#0f766e", "color": "#ccfbf1" }
    }
  ],
  "edges": [
    {"source": "1", "target": "2", "animated": true},
    {"source": "2", "target": "3", "animated": true},
    {"source": "3", "target": "4", "animated": true},
    {"source": "4", "target": "5", "animated": true}
  ]
}
```
