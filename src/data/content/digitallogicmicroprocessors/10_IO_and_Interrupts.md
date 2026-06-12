# 10. I/O and Interrupts

## Talking to the Outside World

A microprocessor with the fastest ALU and largest cache in the world is completely useless if it cannot accept input (from a keyboard, mouse, or sensor) or generate output (to a screen or motor). 

But there is a massive problem: A CPU runs at $3.0\text{GHz}$ ($3,000,000,000$ ticks per second). A human types on a keyboard at roughly 5 keystrokes per second. 
From the CPU's perspective, a human is effectively a stationary object frozen in time. How does the CPU interact with such agonizingly slow external hardware?

---

## Method 1: Polling (The Inefficient Way)

In a **Polling** system, the CPU executes a loop in software:
1.  *Hey Keyboard, did you press a key?* (No).
2.  *Hey Keyboard, did you press a key?* (No).
3.  *Hey Keyboard, did you press a key?* (No).

Because the CPU is so fast, it might ask the keyboard this question 600 million times before the human's finger finally presses the 'A' key. 
**The Problem:** The CPU wastes $99.99\%$ of its processing power executing this useless loop, doing absolutely no real work, burning electricity, and generating heat.

## Method 2: Interrupts (The Smart Way)

Instead of the CPU constantly asking the hardware if it needs attention, the hardware physically taps the CPU on the shoulder when it is ready. This is an **Interrupt**.

Every CPU has a physical pin on the chip called the `INT` (Interrupt) pin. 
1.  The CPU runs its main program (e.g., rendering a video game).
2.  The human presses a key. The keyboard controller sends a $5\text{V}$ electrical pulse directly to the CPU's `INT` pin.
3.  The CPU's hardware immediately freezes. It takes the Program Counter (PC) and saves it to a safe place in memory.
4.  The CPU jumps to a specific memory address containing the **Interrupt Service Routine (ISR)**—a tiny piece of code written by the OS driver.
5.  The ISR reads the 'A' key, saves it to memory, and issues a "Return from Interrupt" command.
6.  The CPU perfectly restores its PC and resumes rendering the video game as if nothing ever happened.

*(This entire process takes a few microseconds. The CPU spent $99.99\%$ of its time rendering the game, and only $0.01\%$ dealing with the keyboard!)*

---

## Memory-Mapped I/O

When the CPU's ISR runs, how does it actually *read* the data from the keyboard? 
It uses **Memory-Mapped I/O**.

The CPU doesn't have special "Keyboard Read" instructions. Instead, the motherboard hardware tricks the CPU. The hardware assigns the keyboard controller to a specific physical RAM address (e.g., `0x8000_0004`). 
When the CPU executes a standard `LOAD R1, [0x8000_0004]` instruction, the motherboard intercepts the signal, stops it from going to the RAM chip, and routes it directly to the keyboard controller. The keyboard places the ASCII code for 'A' onto the data bus, and the CPU reads it, completely unaware that it didn't just read from RAM!

---

## Engineering Applications

*   **Direct Memory Access (DMA):** What if you need to load a 1-Gigabyte texture from the SSD into the Graphics Card? If the CPU uses interrupts to move the data byte-by-byte, it will be paralyzed for seconds. Instead, the CPU uses a DMA Controller. The CPU says, "Hey DMA, copy 1GB from the SSD to the GPU, let me know when you're done." The CPU then goes back to doing math. The independent DMA hardware silently moves the data across the motherboard bus. When it finishes, it fires one single Interrupt to the CPU to say "Done!"
*   **Real-Time Systems:** In an anti-lock braking system (ABS) in a car, when the wheel speed sensor detects a skid, it fires a Non-Maskable Interrupt (NMI). The CPU *must* drop whatever it is doing (even if it's playing the radio) and run the brake-release ISR within 1 millisecond, or the car crashes.

---

## Worked Examples

### Example 1 — Easy: The Interrupt Vector Table

**Problem:** A computer has many devices (Keyboard, Mouse, Network Card, Hard Drive). When the `INT` pin goes high, how does the CPU know *which* ISR to run? 

**Solution:**
When a device fires an interrupt, it places an 8-bit number (the "Interrupt Vector") onto the data bus. 
The CPU reads this vector (e.g., Vector `0x09` for Keyboard).
The CPU then looks at a hardcoded table in RAM called the **Interrupt Vector Table (IVT)**. 
At index `0x09` in the table, it finds the exact 32-bit memory address where the Keyboard's ISR code is stored (e.g., `0x00A1_4400`), and jumps the Program Counter there.

---

### Example 2 — Medium: Calculating Polling Overhead

**Problem:** A CPU runs at $1.0\text{GHz}$. It is connected to a network card that receives $10,000$ packets of data per second. 
If the CPU uses Polling, the polling loop takes $400$ clock cycles to execute. To ensure it doesn't miss a packet, the CPU must poll the network card $50,000$ times per second.
What percentage of the CPU's total processing power is wasted just running the polling loop?

**Solution:**
1.  **Calculate the CPU's total cycles per second:**
    $1.0\text{GHz} = 1,000,000,000 \text{ cycles/second}$
2.  **Calculate the cycles spent polling per second:**
    $50,000 \text{ polls} \times 400 \text{ cycles/poll} = 20,000,000 \text{ cycles/second}$
3.  **Calculate the percentage:**
    $$ \frac{20,000,000}{1,000,000,000} \times 100 = \mathbf{2.0\%} $$
*(Wasting 2% of a multi-million transistor CPU just to ask a network card if it has data is incredibly inefficient. This is why all modern networks use Interrupts!)*

---

### Example 3 — Hard: ISR Context Switching

**Problem:** A CPU is executing the following Assembly program:
```assembly
100: LOAD R1, [0x4000]
104: ADDI R1, R1, 5
108: STORE R1, [0x4000]  <-- INT fires exactly as this finishes!
112: SUBI R2, R2, 1
116: BNE R2, R0, 100
```
When the interrupt fires, the CPU jumps to the ISR at address `0x8000`. The ISR code uses Register 1 (R1) to do its own math. 
If the ISR does not save and restore the state of the CPU, what catastrophic bug will occur when the ISR finishes and returns to the main program?

**Solution:**
1.  **Analyze the Interrupt Timing:**
    The interrupt fires after line 108. The CPU saves the PC (`112`) so it knows where to return.
2.  **Analyze the Main Program State:**
    At this exact moment, `R1` holds a specific mathematical value that the main program was just working with.
3.  **Analyze the ISR action:**
    The CPU jumps to `0x8000`. The ISR code starts running. The ISR *overwrites* the data in `R1` with its own data.
4.  **Analyze the Return:**
    The ISR finishes. It jumps the PC back to `112`. 
    The main program resumes. However, `R1` now contains garbage data left behind by the ISR! When the loop goes back to line `104`, it will add 5 to the wrong number. The program will crash or calculate corrupted data.
5.  **The Fix:**
    The very first line of *any* ISR must push all the CPU registers onto the RAM "Stack", and the very last line must pop them back off, perfectly restoring the **Context** before returning.

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "I/O Systems",
        "icon": "BrainCircuit",
        "description": "How the 3.0GHz CPU talks to the 5Hz human."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Polling",
        "icon": "Activity",
        "description": "The CPU constantly asking 'Are you ready?' Wastes massive amounts of power."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Interrupts",
        "icon": "Sigma",
        "description": "Hardware sends an electrical shock to the CPU to force it to pause and run an ISR."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Memory-Mapped I/O",
        "icon": "Layers",
        "description": "Tricking the CPU into thinking the Keyboard is just a RAM address."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Next: Embedded Systems",
        "icon": "Target",
        "description": "Taking the entire CPU, RAM, and I/O and putting it onto a single $2 chip."
      },
      "style": { "background": "#0f766e", "color": "#ccfbf1" }
    }
  ],
  "edges": [
    {"source": "1", "target": "2", "animated": true},
    {"source": "1", "target": "3", "animated": true},
    {"source": "3", "target": "4", "animated": true},
    {"source": "4", "target": "5", "animated": true}
  ]
}
```
