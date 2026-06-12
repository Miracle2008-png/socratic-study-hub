# 11. Embedded Systems and Microcontrollers

## The System on a Chip (SoC)

A standard Microprocessor (like an Intel Core i7) is just the "brain". To make a functioning computer, you must buy a motherboard, solder in Gigabytes of DRAM, attach a 500-watt power supply, and plug in a massive SSD. This is great for a desktop PC, but terrible if you are trying to build a smart thermostat or a drone.

A **Microcontroller (MCU)** takes the Microprocessor (CPU), the RAM, the Flash Memory (hard drive), and the I/O controllers, and shrinks them all down onto a single, tiny, $2 piece of silicon. 

These are **Embedded Systems**: computers embedded inside other machines, designed to do one specific task with extreme reliability, on microscopic power budgets (e.g., running on a coin-cell battery for 3 years).

---

## Communicating with Hardware

A microcontroller (like the ATMega328 on an Arduino) has physical metal legs that stick out of the chip. By writing C code, you can control the voltage on these legs to interact with the physical world.

### 1. GPIO (General Purpose Input/Output)
You can configure a pin as an `OUTPUT`. Writing a `1` in software connects the pin to $5\text{V}$ (turning on an LED or a relay). Writing a `0` connects it to Ground ($0\text{V}$).
You can configure a pin as an `INPUT`. The CPU reads the pin. If it senses $5\text{V}$, the software registers a `1` (a button is being pressed).

### 2. PWM (Pulse Width Modulation)
Digital logic is only $5\text{V}$ or $0\text{V}$. How do you dim an LED to 50% brightness, or run a motor at half speed?
You use **PWM**. You toggle the pin ON and OFF incredibly fast (e.g., 1000 times a second). 
If the pin is ON for 50% of the time and OFF for 50% of the time (a $50\%$ Duty Cycle), the physical motor's inertia averages out the energy, and it spins at exactly half speed.

### 3. ADC (Analog to Digital Converter)
Sensors (like a temperature thermistor) don't output binary 1s and 0s. They output analog voltages (e.g., $2.34\text{V}$).
An ADC reads this analog voltage and converts it into a binary number (e.g., a 10-bit ADC converts $0\text{V}-5\text{V}$ into a number between $0$ and $1023$). So $2.5\text{V}$ becomes `512`.

---

## Serial Communication Protocols

To talk to complex sensors (like a GPS module or an OLED screen), flipping a single GPIO pin ON and OFF isn't enough. We use standardized digital protocols:

*   **UART (Universal Asynchronous Receiver-Transmitter):** 2 wires (TX and RX). Data is sent sequentially as a stream of 1s and 0s at an agreed-upon speed (Baud Rate), like 9600 bits per second.
*   **I²C (Inter-Integrated Circuit):** 2 wires (SDA for data, SCL for clock). A "Master" microcontroller can talk to up to 127 "Slave" sensors on the exact same two wires by shouting their unique 7-bit address down the line. Used for short-distance chips on the same board.
*   **SPI (Serial Peripheral Interface):** 4 wires. Extremely fast (megabits per second). Used for SD cards and color LCD screens.

---

## Engineering Applications

*   **The ESP32:** The king of modern IoT (Internet of Things). It costs $3, has two 32-bit CPU cores running at $240\text{MHz}$, and has physical Wi-Fi and Bluetooth radios built directly into the silicon. This is what powers smart plugs and connected appliances.
*   **Real-Time Operating Systems (RTOS):** In a drone, the code that reads the gyroscope and adjusts the motors *must* execute exactly every 1 millisecond. If it is delayed by even 5 milliseconds because the CPU was busy writing to an SD card, the drone flips upside down and crashes. Embedded engineers use an RTOS to guarantee strict, hard real-time deadlines.

---

## Worked Examples

### Example 1 — Easy: PWM Duty Cycle

**Problem:** You are controlling a DC motor using an Arduino. The Arduino's `analogWrite()` function accepts an 8-bit integer (from $0$ to $255$) to set the PWM duty cycle. The system voltage is $12\text{V}$.
If you write `analogWrite(127)`, what is the Duty Cycle percentage, and what is the *average* voltage delivered to the motor?

**Solution:**
1.  **Calculate Duty Cycle:**
    The maximum value is 255. You wrote 127.
    $$ \text{Duty Cycle} = \frac{127}{255} \approx \mathbf{50\%} $$
2.  **Calculate Average Voltage:**
    The pin is outputting $12\text{V}$ for half the time, and $0\text{V}$ for half the time.
    $$ V_{avg} = 12\text{V} \times 0.50 = \mathbf{6.0\text{V}} $$
*(The motor will spin at exactly half its maximum speed).*

---

### Example 2 — Medium: ADC Resolution

**Problem:** A microcontroller has a 12-bit Analog-to-Digital Converter (ADC). The reference voltage is exactly $3.30\text{V}$.
You connect an analog temperature sensor to the ADC pin. 
(A) How many discrete digital "steps" can the ADC resolve?
(B) What is the smallest change in voltage that the ADC can detect (the resolution)?

**Solution:**
**(A) Discrete Steps:**
A 12-bit binary number can represent $2^{12}$ distinct values.
$$ 2^{12} = \mathbf{4096 \text{ steps (from 0 to 4095)}} $$

**(B) Voltage Resolution:**
The $3.30\text{V}$ range is divided evenly across the 4096 steps.
$$ \text{Resolution} = \frac{3.30\text{V}}{4096} \approx 0.000805\text{V} = \mathbf{0.805 \text{ mV}} $$
*(The CPU can detect a change in the sensor of less than 1 millivolt!)*

---

### Example 3 — Hard: UART Baud Rate Math

**Problem:** You are transmitting a text message over UART to a GPS module at a Baud Rate of $115,200$ bps (bits per second).
In standard UART protocol (8-N-1), sending a single 8-bit byte of data actually requires sending **10 bits** over the wire (1 Start bit, 8 Data bits, 1 Stop bit).
If you want to send a string of text that is $500$ characters long, exactly how many milliseconds will it take for the transmission to complete?

**Solution:**
1.  **Calculate total bits to send:**
    Each character is 1 byte.
    1 byte requires 10 bits over the wire.
    $$ \text{Total Bits} = 500 \text{ characters} \times 10 \text{ bits/char} = 5000 \text{ bits} $$
2.  **Calculate time in seconds:**
    The Baud rate is $115,200$ bits per second.
    $$ \text{Time (s)} = \frac{\text{Total Bits}}{\text{Baud Rate}} = \frac{5000}{115200} $$
    $$ \text{Time (s)} \approx 0.0434 \text{ seconds} $$
3.  **Convert to milliseconds:**
    $$ 0.0434 \text{ s} \times 1000 = \mathbf{43.4 \text{ ms}} $$
*(The microcontroller will be tied up for 43 milliseconds. In embedded systems, this is an eternity. You should definitely use an Interrupt or DMA to handle this transmission in the background!)*

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Embedded Systems",
        "icon": "BrainCircuit",
        "description": "Computers hidden inside the physical world."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Microcontrollers (MCU)",
        "icon": "Activity",
        "description": "CPU + RAM + Flash + I/O on a single $2 silicon chip."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "GPIO & PWM",
        "icon": "Sigma",
        "description": "Flipping physical voltages to blink LEDs and control motor speeds."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Digital Protocols",
        "icon": "Layers",
        "description": "UART, I2C, SPI. Standardized languages for chips to talk to sensors."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Next: Concept Drills",
        "icon": "Target",
        "description": "The final test of your Digital Logic and Architecture mastery."
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
