---
title: "Fatigue Crack Growth (Paris Law)"
---

# Fatigue Crack Growth (Paris Law)

The Stress-Life (S-N) method is based entirely on *crack initiation*. It assumes that once a crack begins, failure is imminent. This is a "Safe-Life" design philosophy: you retire the part before a crack ever forms.

However, in aerospace, designing parts massive enough to never, ever form a crack would make the airplane too heavy to fly. Engineers *know* cracks exist in airplane wings. They use a "Damage Tolerant" design philosophy: they assume a crack exists, track how fast it grows, and ensure it is inspected and repaired before it reaches a critical size.

To do this, they rely on Fracture Mechanics and the **Paris Law**.

## 1. Relating $K$ to Crack Growth

In 1961, Paul Paris made a breakthrough discovery. He combined the concept of fatigue cycling with Irwin's Stress Intensity Factor ($K$).

In a fatigue cycle, the stress alternates between a maximum and a minimum. Therefore, the stress intensity at the crack tip also fluctuates:
$$ \Delta K = K_{max} - K_{min} = Y \Delta\sigma \sqrt{\pi a} $$

Paris discovered that the rate at which a fatigue crack grows per cycle ($da/dN$, how many millimeters it advances with each "bend") is directly proportional to the range of stress intensity ($\Delta K$) it experiences.

## 2. The Paris-Erdogan Equation

When crack growth rate ($da/dN$) is plotted against the stress intensity range ($\Delta K$) on a log-log scale, the data forms a distinct "S" shape with three regions:

1.  **Region I (Threshold):** Below a certain threshold ($\Delta K_{th}$), the crack will not grow at all, regardless of how many cycles are applied.
2.  **Region II (Stable Growth):** The middle section is a straight, upward-sloping line on the log-log plot. This is where predictable, stable crack growth occurs.
3.  **Region III (Fast Fracture):** As the crack gets very long, $K_{max}$ approaches the material's Fracture Toughness ($K_{Ic}$). The growth rate skyrockets, leading to immediate catastrophic failure.

The **Paris Law** is an empirical equation that describes the straight line of Region II:

$$ \frac{da}{dN} = C (\Delta K)^m $$

Where:
*   $da/dN$: Crack growth rate per cycle.
*   $\Delta K$: The stress intensity factor range.
*   $C$ and $m$: Material constants determined through testing. (For typical steels, $m$ is usually around 3 or 4).

## 3. Designing Maintenance Schedules

The Paris Law is the mathematical engine behind aircraft maintenance schedules.

1.  **Assume an initial flaw:** Engineers assume the largest possible crack that could be missed by ultrasonic or X-ray inspection is present from day one (initial crack size, $a_0$).
2.  **Determine critical flaw:** They calculate the critical crack size ($a_f$) that would cause the wing to snap under maximum load (using $K_{Ic}$).
3.  **Integrate the Paris Law:** By rearranging the Paris Law equation and integrating it from $a_0$ to $a_f$, engineers can calculate the exact number of flight cycles ($N_{f}$) it will take for that microscopic flaw to grow into a catastrophic crack.

$$ N_f = \int_{a_0}^{a_f} \frac{1}{C (\Delta K)^m} da $$

4.  **Set Inspection Intervals:** If the math says it will take 10,000 flights for the crack to become dangerous, the FAA mandates that the aircraft must be thoroughly inspected every 3,000 flights. This ensures the crack will be found and repaired well before it reaches the critical size. This is why commercial flight is incredibly safe despite structural fatigue.
