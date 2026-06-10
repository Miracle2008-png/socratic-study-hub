# Electromagnetic Induction

We established that an electric current can create a magnetic field (Ørsted's discovery). In 1831, Michael Faraday asked the reverse question: **Can a magnetic field create an electric current?**

Faraday ran experiments placing strong magnets near coils of wire. Nothing happened. The electrons in the wire did not move.
But Faraday noticed something strange. The needle on his ammeter twitched *only* at the exact moment he moved the magnet, or at the exact moment he flipped the switch to turn the electromagnet on or off.

He discovered the secret: A static magnetic field does nothing. **Only a *changing* magnetic field can induce an electric current.**

## 1. Magnetic Flux ($\Phi_B$)

To formalize this, we must use **Magnetic Flux**, which is the total amount of magnetic field piercing through a specific surface area (like the open window of a wire loop).

$$ \Phi_B = \int_S \mathbf{B} \cdot d\mathbf{A} = B A \cos(\theta) $$

Flux depends on three things:
1.  The strength of the Magnetic Field ($B$).
2.  The Area of the wire loop ($A$).
3.  The Angle ($\theta$) between the field and the loop.

## 2. Faraday's Law of Induction

Faraday's Law states that an Electromotive Force (EMF, or Voltage, $\mathcal{E}$) is induced in a wire loop if and only if the magnetic flux through that loop is changing over time.

$$ \mathcal{E} = -N \frac{d\Phi_B}{dt} $$

*   $\mathcal{E}$ is the induced voltage. If the wire forms a closed circuit, this voltage will push an induced current ($I = \mathcal{E}/R$).
*   $N$ is the number of turns of wire in the coil. (Wrapping the wire 100 times multiplies the induced voltage by 100).
*   $\frac{d\Phi_B}{dt}$ is the rate of change of the magnetic flux. 

Because Flux is $BA\cos(\theta)$, there are **three ways to induce electricity**:
1.  **Change the Magnetic Field ($B$):** Push a permanent magnet closer to the loop, or turn up the current on an adjacent electromagnet.
2.  **Change the Area ($A$):** Grab the wire loop and crush it or stretch it, changing how much area is exposed to the field.
3.  **Change the Angle ($\theta$):** Take a rigid wire loop and physically spin it in a constant magnetic field. The flux goes from maximum to zero to negative to zero. This is the operating principle of the **Electric Generator**. Every power plant on Earth (coal, nuclear, wind, hydro) works simply by using steam or wind to physically spin a massive coil of wire inside a giant magnet, inducing electricity.

## 3. Lenz's Law (The Negative Sign)

Why is there a negative sign in Faraday's Law? 
The negative sign represents **Lenz's Law**, which is a manifestation of the Conservation of Energy.

Lenz's Law states: **The induced current will always flow in a direction such that its *own* magnetic field opposes the original change in flux.**

Nature hates change. It acts to maintain the status quo.
*   If the external magnetic flux through a loop is *increasing*, the loop will induce a current to create its own magnetic field pointing in the *opposite* direction to fight the increase.
*   If the external magnetic flux is *decreasing* (e.g., you are pulling the magnet away), the loop will induce a current to create a magnetic field pointing in the *same* direction to try and replace the lost flux and pull the magnet back!

This is why you feel physical, phantom resistance when you try to crank a hand-generator or drop a magnet down a copper pipe. You are physically fighting the opposing magnetic fields created by the induced currents.

## 4. Motional EMF

If you take a straight metal rod of length $L$ and drag it through a uniform magnetic field $B$ at a velocity $v$, the free electrons inside the metal are moving through a magnetic field. 

According to the Lorentz Force ($\mathbf{F} = q\mathbf{v}\times\mathbf{B}$), the magnetic field will push the electrons to one end of the rod. One end becomes negative, the other becomes positive, creating a battery!
The induced voltage across the moving rod is called **Motional EMF**:

$$ \mathcal{E} = B L v $$
