# 2. Combinational Logic

## Memoryless Computation

A **Combinational Logic** circuit is a circuit where the output depends *only* on the current state of the inputs. There is no memory, no concept of "past states," and no clocks. The instant the inputs change, the electricity flows through the logic gates, and the output changes (after a tiny propagation delay).

---

## Designing from a Truth Table

If an engineer needs a circuit to perform a specific task, they start by writing out the Truth Table. But how do you convert a Truth Table into a physical circuit?

### 1. Sum of Products (SOP)
Look at the Truth Table. Find every row where the Output is $1$. For each of those rows, write an AND expression that describes those exact inputs. Then, OR all of those expressions together.
*Example: If the output is 1 when $A=0$ and $B=1$, the expression is $\overline{A}B$.*

### 2. Karnaugh Maps (K-Maps)
SOP equations are often massive and inefficient. **Karnaugh Maps** are a visual tool used to simplify SOP equations without doing messy Boolean Algebra. 
You draw a grid where the edges are labeled in "Gray Code" (where only one bit changes at a time: 00, 01, 11, 10). You place 1s in the grid according to the Truth Table, and then circle contiguous groups of 1s (groups of 2, 4, 8). Each circle directly yields a highly simplified Boolean term.

---

## Standard Combinational Circuits

Instead of building everything from scratch, engineers use standard combinational blocks:

### 1. The Multiplexer (MUX)
A MUX is a digital switch or selector. It has multiple data inputs ($D_0, D_1, D_2, D_3$), one output ($Y$), and a set of "Select Lines" ($S_0, S_1$). The binary number on the select lines determines which data input is routed to the output.
*(Example: If $S_1=1, S_0=0$ (Binary 2), then $Y$ outputs whatever is on $D_2$).*

### 2. The Decoder
A Decoder takes a binary number as an input and activates exactly one specific output wire.
*(Example: A 2-to-4 Decoder has inputs A and B. If $A=1, B=1$ (Binary 3), then only Output line #3 goes HIGH; the others stay LOW).*

### 3. The Adder
How does a CPU do math? It uses logic gates!
*   **Half Adder:** Adds two bits ($A$ and $B$). It outputs a Sum ($S$) and a Carry-Out ($C_{out}$).
    *   $S = A \oplus B$ (XOR)
    *   $C_{out} = A \cdot B$ (AND)
*   **Full Adder:** Adds three bits ($A$, $B$, and a Carry-In $C_{in}$ from a previous column). By chaining 32 Full Adders together, you create the heart of a 32-bit CPU's Arithmetic Logic Unit (ALU).

---

## Engineering Applications

*   **Network Routers:** At its core, an internet router is a massive Multiplexer. It reads the destination address on a packet of data, sets the Select Lines, and physically routes the data bits to the correct output port leading to the destination server.
*   **Memory Addressing:** When a CPU wants to read from RAM, it sends a 32-bit address. A massive Decoder circuit reads this 32-bit number and activates exactly ONE specific physical wire out of 4 billion, connecting that specific memory cell to the data bus.

---

## Worked Examples

### Example 1 — Easy: Multiplexer Logic

**Problem:** You have a 2-to-1 Multiplexer. It has two data inputs ($D_0, D_1$), one Select line ($S$), and one output ($Y$). 
When $S=0$, $Y = D_0$. When $S=1$, $Y = D_1$.
Write the Boolean SOP (Sum of Products) equation for the output $Y$.

**Solution:**
1.  **Identify the conditions for $Y$ to be active:**
    $Y$ is active if:
    (Condition 1): $S$ is 0 AND $D_0$ is 1.
    OR
    (Condition 2): $S$ is 1 AND $D_1$ is 1.
2.  **Write the Boolean expression for each condition:**
    Condition 1: $\overline{S} \cdot D_0$
    Condition 2: $S \cdot D_1$
3.  **Combine with OR:**
    $$ \mathbf{Y = (\overline{S} \cdot D_0) + (S \cdot D_1)} $$

---

### Example 2 — Medium: 2-bit Adder

**Problem:** You are adding two 2-bit binary numbers: $A_1 A_0$ and $B_1 B_0$.
(e.g., $10_2 + 11_2 = 101_2$, which is $2+3=5$).
How many individual Full Adders and Half Adders are required to build this circuit? What is the maximum number of bits the output could be?

**Solution:**
1.  **Analyze the Least Significant Bit (Column 0):**
    You are adding $A_0$ and $B_0$. There is no carry-in from a previous column.
    Therefore, Column 0 requires **1 Half Adder**.
    This outputs the final $S_0$ bit, and generates a carry-out ($C_1$).
2.  **Analyze the Most Significant Bit (Column 1):**
    You are adding $A_1$, $B_1$, AND the carry-in ($C_1$) from Column 0. 
    Adding three bits requires **1 Full Adder**.
    This outputs the final $S_1$ bit, and generates a final carry-out ($C_2$).
3.  **Maximum Output Bits:**
    The largest inputs are $11_2 + 11_2$ ($3+3=6$).
    $6$ in binary is $110_2$, which requires **3 bits** ($C_2$, $S_1$, $S_0$).
4.  **Final Answer:**
    The circuit requires **1 Half Adder and 1 Full Adder**, and produces a **3-bit output**.

---

### Example 3 — Hard: Karnaugh Map Extraction

**Problem:** You are given a 3-variable Truth Table ($A, B, C$). The output $Y$ is $1$ for the following input combinations ($ABC$): $000, 001, 100, 101$.
Draw the K-Map logic mentally, group the 1s, and find the simplified Boolean expression.

**Solution:**
1.  **Analyze the True terms (SOP):**
    $Y = \overline{A}\overline{B}\overline{C} + \overline{A}\overline{B}C + A\overline{B}\overline{C} + A\overline{B}C$
2.  **Visualize the K-Map:**
    Imagine a grid. The columns are $AB$ ($00, 01, 11, 10$). The rows are $C$ ($0, 1$).
    The 1s are located at $000, 001, 100, 101$.
    These correspond to the entire $AB=00$ column, and the entire $AB=10$ column.
3.  **Group the 1s:**
    In a K-Map, the left edge wraps around to the right edge! The column $00$ is perfectly adjacent to the column $10$.
    You can draw one massive circle of 4 that encompasses all four 1s.
4.  **Extract the simplified expression:**
    Look at the variables inside this massive circle:
    *   $A$ changes from $0$ to $1$. Because it changes, it cancels out.
    *   $C$ changes from $0$ to $1$. Because it changes, it cancels out.
    *   $B$ is firmly stuck at $0$ for the entire circle.
5.  **Final Answer:**
    The only variable that matters is that $B$ must be $0$.
    $$ \mathbf{Y = \overline{B}} $$
*(If you plug $B=0$ into the truth table, you see that $Y=1$ regardless of what $A$ or $C$ are doing!)*

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Combinational Logic",
        "icon": "BrainCircuit",
        "description": "Output relies entirely on the CURRENT state of inputs. No memory."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Sum of Products (SOP)",
        "icon": "Activity",
        "description": "Extracting an AND-OR equation directly from a Truth Table."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Karnaugh Maps",
        "icon": "Sigma",
        "description": "Visual grids used to instantly simplify massive SOP equations."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Decoders & Multiplexers",
        "icon": "Layers",
        "description": "Routing logic. Activating specific wires and routing data streams."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Next: Sequential Logic",
        "icon": "Target",
        "description": "What if we need the circuit to REMEMBER what happened 1 second ago? We need Memory."
      },
      "style": { "background": "#0f766e", "color": "#ccfbf1" }
    }
  ],
  "edges": [
    {"source": "1", "target": "2", "animated": true},
    {"source": "2", "target": "3", "animated": true},
    {"source": "1", "target": "4", "animated": true},
    {"source": "3", "target": "5", "animated": true},
    {"source": "4", "target": "5", "animated": true}
  ]
}
```
