# Electric Current and Resistance

Until now, we have only studied Electrostatics—charges sitting perfectly still. 
When charges begin to move continuously, they form an electric current. This continuous flow of energy is the foundation of the modern technological world.

## 1. Electric Current ($I$)

**Current** is the rate at which electric charge flows past a given point in a circuit. 

$$ I = \frac{dQ}{dt} $$

*   **Units:** The unit of current is the Ampere (A), or simply "Amp." $1 \text{ Amp} = 1 \text{ Coulomb per second}$.
*   **Direction Convention:** By historical accident, Benjamin Franklin guessed the wrong sign for the moving charge. He believed positive "electric fluid" flowed from positive to negative. We now know that in metal wires, the moving particles are negative electrons flowing from negative to positive. However, all of electrical engineering still uses **Conventional Current**, which pretends that positive charges are flowing from the $(+)$ battery terminal to the $(-)$ terminal.

### Drift Velocity
When you flip a light switch, the light turns on instantly (at near the speed of light). However, the physical electrons in the wire do not move that fast.
Electrons in a wire constantly bounce off the metal atoms in a chaotic, random thermal dance at high speeds. When a voltage is applied, the electric field gives them a tiny, slow, aggregate nudge in one direction. This average forward speed is called the **Drift Velocity ($v_d$)**.
In a typical copper wire carrying 1 Ampere, the physical electrons are only drifting forward at a microscopic $0.1 \text{ millimeters per second}$! 

## 2. Ohm's Law and Resistance

To make water flow through a pipe, you need a water pump to create a pressure difference. To make current flow through a wire, you need a battery to create a potential difference (Voltage).

In 1827, Georg Ohm discovered that for most common materials (like metal wires), the current that flows is directly proportional to the voltage applied. 

This is **Ohm's Law**:
$$ V = I \cdot R $$

*   $V$ is the Voltage (Volts).
*   $I$ is the Current (Amps).
*   $R$ is the **Resistance**, measured in Ohms ($\Omega$).

Resistance is a measure of how much an object resists the flow of electrons. It is the electrical equivalent of friction.

### Resistivity ($\rho$)
The total resistance ($R$) of a wire depends on its physical dimensions (how long and how thick it is) and what metal it is made of.
$$ R = \rho \frac{L}{A} $$
*   $L$ is the length of the wire. (Longer wire = more resistance).
*   $A$ is the cross-sectional area. (Fatter, thicker wire = less resistance, like a wide water pipe).
*   $\rho$ (rho) is the **Resistivity** of the material. Copper has a very low resistivity; rubber has a phenomenally high resistivity.

## 3. Electrical Power

As electrons are forced through the "friction" of a resistor, they lose potential energy. This energy does not disappear; it is converted into thermal energy (heat) or light. This is how toaster ovens, space heaters, and incandescent light bulbs work.

The rate at which electrical energy is converted into heat is the **Power ($P$)**.

$$ P = I \cdot V $$

*   **Units:** Watts (W). $1 \text{ Watt} = 1 \text{ Joule per second}$.

By substituting Ohm's law ($V = IR$) into the power equation, we get two other incredibly useful forms:
$$ P = I^2 R $$
$$ P = \frac{V^2}{R} $$

The equation $P = I^2 R$ is why power companies transmit electricity at terrifyingly high voltages (like 500,000 Volts). To deliver the same amount of Power ($P=IV$) at a high voltage, you can use a very tiny current ($I$). Because the power lost to heat in the power lines scales with the *square* of the current ($I^2 R$), lowering the current by a factor of 10 reduces the wasted heat by a factor of 100!

## 4. Superconductors

In normal metals, resistivity slowly increases as the wire gets hotter (the atoms vibrate more violently, creating more obstacles for the drifting electrons). 
In 1911, it was discovered that if you cool certain materials to near Absolute Zero (e.g., using liquid helium), their resistance doesn't just get small—it drops to **exactly zero**.

These materials are called **Superconductors**. Once a current is started in a superconducting loop, it will flow forever without losing any energy to heat, without needing a battery to keep it going. 
Creating a room-temperature superconductor remains one of the most highly sought-after holy grails in modern physics.
