# 8. Pipelining and CPU Performance

## The Assembly Line

In an early, simple CPU, the processor fetches an instruction, decodes it, executes the math, and writes it back to the register. This entire process takes 1 clock cycle.
The problem? While the ALU is executing the math, the Fetch hardware is sitting completely idle. This is highly inefficient.

To fix this, modern CPUs use **Pipelining**, a concept identical to a factory assembly line.
We split the CPU into 5 physical hardware stages:
1.  **IF:** Instruction Fetch
2.  **ID:** Instruction Decode
3.  **EX:** Execute (ALU)
4.  **MEM:** Memory Access
5.  **WB:** Write Back to Register

Instead of waiting for an instruction to finish completely, the CPU fetches Instruction 1. On the next clock tick, Instruction 1 moves to the Decode stage, and the CPU *immediately fetches Instruction 2*. 

**The Result:** A 5-stage pipeline doesn't make a single instruction execute faster (it still takes 5 clock ticks to travel end-to-end). But, because the pipeline is full, **one instruction finishes and exits the pipeline on every single clock tick!** This theoretically increases the CPU's throughput by 5x.

---

## Hazards: Throwing a Wrench in the Works

Pipelining sounds perfect, but it introduces massive physical logic problems called **Hazards**, which force the CPU to stall (insert "bubbles" or dead clock cycles into the pipeline) while waiting for things to resolve.

### 1. Data Hazards
Occur when Instruction 2 needs the mathematical result of Instruction 1, but Instruction 1 hasn't finished its Write Back stage yet!
*Example:* 
`ADD R1, R2, R3` (Calculates R1)
`SUB R4, R1, R5` (Needs R1 immediately! It must stall and wait for the ADD to finish).

### 2. Control Hazards (Branching)
Occur when the CPU hits a Branch instruction (an IF statement). The CPU doesn't know if the branch will be taken until it does the math in the Execute stage. But the pipeline has already blindly fetched the next 3 instructions! If the branch *is* taken, the CPU fetched the wrong code. It must violently "flush" the pipeline, destroying the fetched instructions and starting over at the new address.

---

## CPU Performance Equation

How do we define the absolute speed of a CPU? It is not just Gigahertz (Clock Rate). It depends on three factors (The Iron Law of Performance):
$$ \text{Execution Time} = \text{Instructions} \times \text{CPI} \times \text{Clock Period} $$
*   **Instructions:** How many assembly instructions the compiler generated (Depends on the ISA: CISC vs RISC).
*   **CPI (Cycles Per Instruction):** How many clock ticks it takes on average to finish an instruction. (A perfect pipeline has a CPI of 1.0. A pipeline plagued by stalls and hazards might have a CPI of 2.5).
*   **Clock Period:** The physical speed of the transistors (e.g., $1/3\text{GHz} = 0.33\text{ns}$).

---

## Engineering Applications

*   **Branch Prediction:** To prevent the massive performance loss of flushing a pipeline during a Control Hazard, modern Intel CPUs have a dedicated AI hardware block called a "Branch Predictor." It literally guesses whether an IF statement will be true or false based on past behavior, and fetches code down that path speculatively. Modern predictors are over 95% accurate.
*   **The Megahertz Myth:** In the early 2000s, the Intel Pentium 4 ran at a blazing $4.0\text{GHz}$, while the AMD Athlon ran at only $2.2\text{GHz}$. Yet, the AMD chip was faster! Why? Intel used an absurdly long 31-stage pipeline to achieve the high clock speed. But when a branch misprediction occurred, flushing 31 stages was catastrophic. The AMD chip had a shorter pipeline and a much better CPI, proving that Clock Speed is only one third of the equation.

---

## Worked Examples

### Example 1 — Easy: Pipeline Speedup

**Problem:** A non-pipelined CPU takes $5\text{ns}$ to completely execute one instruction.
You redesign it into a perfect 5-stage pipelined CPU, where each stage takes exactly $1\text{ns}$.
If you need to execute 1,000,000 instructions, how long does it take for the non-pipelined CPU vs the pipelined CPU?

**Solution:**
1.  **Non-Pipelined:**
    Instructions happen sequentially.
    $1,000,000 \times 5\text{ns} = \mathbf{5,000,000 \text{ ns (5.0 ms)}} $
2.  **Pipelined:**
    It takes $5\text{ns}$ to fill the pipeline and spit out the first instruction.
    After that, one instruction finishes every single $1\text{ns}$ stage clock tick!
    Total time = $5\text{ns}$ (for the first) + $999,999 \times 1\text{ns}$ (for the rest).
    Total time = $\mathbf{1,000,004 \text{ ns (1.0 ms)}} $
*(The pipelined processor is almost exactly 5 times faster!)*

---

### Example 2 — Medium: Identifying Data Hazards

**Problem:** Look at the following sequence of MIPS assembly instructions traveling down a 5-stage pipeline (IF, ID, EX, MEM, WB):
```assembly
1. ADD R1, R2, R3
2. SUB R4, R5, R6
3. AND R7, R1, R8
```
Identify the Data Hazard. Between which two instructions does it occur, and which register causes it?

**Solution:**
1.  **Analyze dependencies:**
    Instruction 1 calculates a new value and stores it into **R1**.
    Instruction 2 uses R5 and R6. (No conflict).
    Instruction 3 uses **R1** and R8.
2.  **Identify the Hazard:**
    Instruction 3 requires the value of R1 to perform its math in the Execute (EX) stage. 
    However, Instruction 1 doesn't actually save the new value into R1 until its final Write Back (WB) stage!
    Because Instruction 3 is only two steps behind Instruction 1 in the pipeline, Instruction 1 will not have finished its WB stage when Instruction 3 hits its EX stage. Instruction 3 will read the *old, wrong* data from R1.
3.  **Final Answer:**
    A Read-After-Write (RAW) data hazard exists between **Instruction 1 and Instruction 3**, caused by **Register 1 (R1)**.

---

### Example 3 — Hard: The Iron Law of Performance

**Problem:** You are deciding between two CPUs to run a specific rendering program.
*   **CPU A (CISC):** Clock rate = $2.0\text{GHz}$. The compiler generates $50$ billion instructions. The complex architecture results in a CPI of $1.5$.
*   **CPU B (RISC):** Clock rate = $3.0\text{GHz}$. The compiler requires $80$ billion instructions (because the instructions are simpler). The streamlined pipeline results in a perfect CPI of $1.0$.
Which CPU finishes the program faster, and by how many seconds?

**Solution:**
1.  **Use the Iron Law Equation:**
    $$ \text{Time} = \text{Instructions} \times \text{CPI} \times \left(\frac{1}{\text{Clock Rate}}\right) $$
2.  **Calculate CPU A:**
    $$ \text{Time}_A = (50 \times 10^9) \times 1.5 \times \left(\frac{1}{2.0 \times 10^9}\right) $$
    The $10^9$ terms cancel out.
    $$ \text{Time}_A = 50 \times 1.5 \times 0.5 = 75 \times 0.5 = \mathbf{37.5 \text{ seconds}} $$
3.  **Calculate CPU B:**
    $$ \text{Time}_B = (80 \times 10^9) \times 1.0 \times \left(\frac{1}{3.0 \times 10^9}\right) $$
    $$ \text{Time}_B = 80 \times 1.0 \times 0.333 = \mathbf{26.67 \text{ seconds}} $$
4.  **Final Answer:**
    **CPU B is faster** by exactly $37.5 - 26.67 = \mathbf{10.83 \text{ seconds}}$. 
*(Even though CPU B had to execute 30 billion more instructions, its higher clock rate and flawless CPI allowed it to win easily).*

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Pipelining",
        "icon": "BrainCircuit",
        "description": "The Assembly Line. Fetch, Decode, Execute, Mem, WriteBack."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Throughput",
        "icon": "Activity",
        "description": "One instruction finishes every clock tick. 5x theoretical speedup."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Data Hazards",
        "icon": "Sigma",
        "description": "An instruction needs data that the previous instruction hasn't finished saving yet."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Control Hazards",
        "icon": "Layers",
        "description": "An IF statement jumps. The pipeline fetched the wrong code and must be flushed."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Next: The Memory Hierarchy",
        "icon": "Target",
        "description": "The CPU is now so fast it has outrun the RAM. How do we keep it fed with data?"
      },
      "style": { "background": "#0f766e", "color": "#ccfbf1" }
    }
  ],
  "edges": [
    {"source": "1", "target": "2", "animated": true},
    {"source": "2", "target": "3", "animated": true},
    {"source": "2", "target": "4", "animated": true},
    {"source": "3", "target": "5", "animated": true},
    {"source": "4", "target": "5", "animated": true}
  ]
}
```
