# 4. Finite State Machines

## The Brain of the Machine

We now have **Combinational Logic** (which can do math and make decisions) and **Sequential Logic** (which can remember things). By wiring them together in a specific architecture, we create a **Finite State Machine (FSM)**.

An FSM is a system that can be in one of a finite number of "States" at any given time. Based on its *current state* and its *current inputs*, it calculates what its *next state* should be, and what its *outputs* should be. 

This is the conceptual foundation of every microprocessor, video game, and automated control system in the world.

---

## The Anatomy of an FSM

An FSM hardware circuit consists of three distinct physical blocks:
1.  **State Register (Memory):** A bank of D Flip-Flops that holds the current state as a binary number (e.g., $S_0 = 00$, $S_1 = 01$, $S_2 = 10$).
2.  **Next-State Logic (Combinational):** A web of logic gates. It looks at the Current State and the External Inputs, and computes the binary number for the Next State.
3.  **Output Logic (Combinational):** A web of logic gates that decides what the machine's external outputs should be (e.g., turning on a green light).

### Moore vs. Mealy Machines
There are two flavors of FSMs, defined by how their Output Logic works:
*   **Moore Machine:** The outputs depend **ONLY on the Current State**. (Safer, easier to design, outputs only change on clock edges).
*   **Mealy Machine:** The outputs depend on the **Current State AND the External Inputs**. (Faster, requires fewer states, but outputs can glitch if the inputs bounce).

---

## The Design Process

How does an engineer build an FSM to solve a problem (like a traffic light controller)?
1.  **State Diagram:** Draw circles representing the states (Green, Yellow, Red) and arrows showing the transitions based on inputs (Timer=1, Car_Waiting=1).
2.  **State Table:** Convert the diagram into a truth table. (If State=00 and Input=1, Next State=01).
3.  **State Assignment:** Assign binary numbers to each state. (Requires $\lceil \log_2(N) \rceil$ flip-flops for $N$ states).
4.  **Derive Boolean Equations:** Use K-Maps to find the SOP logic for the Next State and the Outputs.
5.  **Build the Circuit:** Wire up the Flip-Flops and Logic Gates.

---

## Engineering Applications

*   **Vending Machines:** A classic FSM. State 0: Wait. Input: Quarter inserted. Transition to State 1. Input: Quarter inserted. Transition to State 2 (50 cents). Input: Button pressed. Output: Dispense Soda. Transition back to State 0.
*   **CPU Control Units:** The "brain" inside a CPU is a massive FSM. It loops through states: **Fetch** instruction from RAM $\rightarrow$ **Decode** instruction $\rightarrow$ **Execute** math $\rightarrow$ **Store** result in RAM.

---

## Worked Examples

### Example 1 — Easy: Flip-Flop Counting

**Problem:** You are designing an FSM for a combination lock. The lock requires the user to input a specific sequence of 12 distinct steps to open. 
How many D Flip-Flops are required in the State Register to uniquely identify all 12 states?

**Solution:**
1.  **Determine required bits:**
    We need enough binary bits to count up to 12 distinct values (0 through 11).
    $2^1 = 2$ states.
    $2^2 = 4$ states.
    $2^3 = 8$ states. (Not enough).
    $2^4 = 16$ states. (Enough).
2.  **Calculate Flip-Flops:**
    Each D Flip-Flop holds exactly 1 bit.
    Therefore, you need **4 D Flip-Flops**.
*(You will have 4 "unused" states: 12, 13, 14, 15. In safe FSM design, you must wire the next-state logic so that if a glitch forces the machine into state 15, it automatically resets to state 0).*

---

### Example 2 — Medium: State Diagram to Table

**Problem:** A Moore FSM has two states ($S_0$ and $S_1$) and one input ($X$).
*   If in $S_0$ and $X=0$, stay in $S_0$.
*   If in $S_0$ and $X=1$, go to $S_1$.
*   If in $S_1$ and $X=0$, go to $S_0$.
*   If in $S_1$ and $X=1$, stay in $S_1$.
*   The output ($Y$) is $1$ only when in state $S_1$.
Assign $S_0 = 0$ and $S_1 = 1$. Create the State Table showing Current State ($Q$), Input ($X$), Next State ($Q_{next}$), and Output ($Y$).

**Solution:**
| Current State ($Q$) | Input ($X$) | Next State ($Q_{next}$) | Output ($Y$) |
| :---: | :---: | :---: | :---: |
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 1 |

*(Notice that the Output $Y$ only depends on $Q$, ignoring $X$. This proves it is a Moore machine!)*

---

### Example 3 — Hard: Deriving Next-State Logic

**Problem:** Look at the State Table you just derived in Example 2. 
If you were to build this FSM using a single D Flip-Flop, what is the exact Boolean logic equation you must wire to the $D$ input pin? What is the equation for the Output $Y$?

**Solution:**
1.  **Understand D Flip-Flops:**
    For a D Flip-Flop, the Next State ($Q_{next}$) is literally whatever you put on the $D$ pin.
    Therefore, the equation for $D$ is exactly the equation for $Q_{next}$.
2.  **Derive the SOP for $Q_{next}$:**
    Look at the table. $Q_{next}$ is 1 in two rows:
    Row 2: $Q=0, X=1 \implies \overline{Q}X$
    Row 4: $Q=1, X=1 \implies QX$
3.  **Simplify the equation:**
    $$ D = \overline{Q}X + QX $$
    Factor out $X$:
    $$ D = X(\overline{Q} + Q) $$
    Since $(\overline{Q} + Q) = 1$:
    $$ \mathbf{D = X} $$
4.  **Derive Output $Y$:**
    Look at the table. $Y$ is 1 whenever $Q=1$.
    $$ \mathbf{Y = Q} $$
*(Result: This incredibly complex-sounding FSM is actually just a single wire connecting the Input directly to the Flip-Flop's D pin, and using the Q pin as the Output!)*

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Finite State Machines",
        "icon": "BrainCircuit",
        "description": "Combining Logic and Memory to create intelligent, sequential controllers."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "State Register",
        "icon": "Activity",
        "description": "A bank of Flip-Flops holding the 'Current State' as a binary number."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Next-State Logic",
        "icon": "Sigma",
        "description": "Combinational logic. Evaluates Current State + Inputs to determine where to go next."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Output Logic",
        "icon": "Layers",
        "description": "Moore (depends only on State) vs Mealy (depends on State + Inputs)."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Next: Registers & Memory",
        "icon": "Target",
        "description": "Scaling up from a few Flip-Flops to billions of bits: RAM, SRAM, and DRAM."
      },
      "style": { "background": "#0f766e", "color": "#ccfbf1" }
    }
  ],
  "edges": [
    {"source": "1", "target": "2", "animated": true},
    {"source": "1", "target": "3", "animated": true},
    {"source": "1", "target": "4", "animated": true},
    {"source": "3", "target": "2", "animated": true},
    {"source": "2", "target": "4", "animated": true}
  ]
}
```
