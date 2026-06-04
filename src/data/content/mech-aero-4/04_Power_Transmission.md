---
title: "Power Transmission"
---

# Power Transmission

The most common application of circular shafts in engineering is to transmit mechanical power from one device to another (e.g., from a motor to a pump, or from a car engine to the wheels).

To design a drive shaft, an engineer must convert the operational specifications of the motor (Power and RPM) into the internal torque $T$ that the shaft must endure. Once $T$ is known, the Torsion Formula ($\tau = Tc/J$) is used to size the shaft.

## 1. Work and Power

**Work** is performed when a torque $T$ rotates a shaft through an angle $\theta$ (in radians).
$$ W = T \theta $$

**Power** ($P$) is the rate at which work is performed. It is the derivative of work with respect to time.
$$ P = \frac{dW}{dt} = T \frac{d\theta}{dt} $$

Since the rate of change of angular position ($d\theta/dt$) is the angular velocity $\omega$ (in radians per second):
$$ P = T \omega $$

This is the fundamental equation relating power, torque, and rotational speed.

## 2. Converting RPM to Angular Velocity

In industry, rotational speed is almost universally specified in revolutions per minute (RPM), usually denoted by $N$.

Since 1 revolution equals $2\pi$ radians, and 1 minute equals 60 seconds, the conversion from $N$ (RPM) to $\omega$ (rad/s) is:
$$ \omega = \frac{2\pi N}{60} $$

Substituting this into the power equation yields the practical formula:
$$ P = T \left( \frac{2\pi N}{60} \right) $$

## 3. System of Units

**SI Units:**
- $P$ is Power in Watts (W) or Joules/second.
- $T$ is Torque in Newton-meters (N$\cdot$m).
- $\omega$ is Angular Velocity in rad/s.
- *Equation:* $P = T\omega$

**US Customary Units:**
Power is traditionally expressed in horsepower (hp). 
- $1 \text{ hp} = 550 \text{ ft}\cdot\text{lb/s}$.
- If $T$ is in lb$\cdot$ft and $N$ is in RPM, the equation is:
  $$ P (\text{hp}) = \frac{T(\text{lb}\cdot\text{ft}) \times N(\text{RPM})}{5252} $$

## 4. Shaft Design Implication

If a motor produces a constant Power output $P$, then torque and speed are inversely proportional: $T = P / \omega$.

This means a shaft spinning at very high RPM carries a very *low* torque, and can therefore be very thin. 
Conversely, a shaft spinning very slowly (like the final drive shaft of a bulldozer) must carry an immense torque to transmit the same power, and must be designed much thicker to avoid exceeding the allowable shear stress $\tau_{allow}$.
