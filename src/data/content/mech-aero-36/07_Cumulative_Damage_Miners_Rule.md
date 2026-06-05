# Cumulative Damage (Miner's Rule)

The S-N curve and Goodman diagram assume the part experiences the exact same stress amplitude cycle after cycle, forever.

In reality, machines experience a complex history of varying loads.
-   An airplane wing experiences small stress cycles from engine vibration, moderate cycles from maneuvering, and massive, rare cycles from severe turbulence or hard landings.

How do you calculate the life of a part subjected to a chaotic mix of different stress levels?

## 1. The Concept of Damage Fraction

In 1945, M.A. Miner popularized a linear damage hypothesis (originally proposed by Palmgren). It is based on a simple, intuitive concept:

*   If a part is designed to survive 100,000 cycles at a specific stress level, and you run it for 10,000 cycles, you have "used up" 10% of its life.
*   The "damage" caused by those cycles is $10,000 / 100,000 = 0.1$.

## 2. Palmgren-Miner Linear Damage Rule

Miner's rule states that the total damage a part accumulates is simply the linear sum of the damage fractions from each individual stress level it experiences.

**The Equation:**
$$ \sum \frac{n_i}{N_i} = C $$

Where:
*   $n_i$ = The *actual* number of cycles the part experiences at stress level $i$.
*   $N_i$ = The *maximum allowable* number of cycles to failure at stress level $i$ (read from the material's S-N curve).
*   $C$ = The critical damage sum at which failure occurs. Theoretically, failure occurs when $C = 1.0$ (when 100% of the life is used up).

**Example:**
A car axle experiences:
1.  5,000 cycles at a high stress (where its limit $N_1$ is 10,000 cycles). Damage = $5,000/10,000 = 0.5$
2.  20,000 cycles at a medium stress (where its limit $N_2$ is 100,000). Damage = $20,000/100,000 = 0.2$

Total Damage = $0.5 + 0.2 = 0.7$. The part has consumed 70% of its fatigue life. It is safe, but only has 30% life remaining.

## 3. Shortcomings of Miner's Rule

Miner's rule is universally taught and widely used because it is incredibly easy to calculate. However, it is fundamentally flawed in one major respect: **It ignores the sequence of loading.**

According to the math of Miner's rule, the order in which the loads are applied does not matter ($0.5 + 0.2$ is the same as $0.2 + 0.5$). In metallurgical reality, sequence matters immensely.

**1. High-to-Low Loading (Accelerated Failure):**
If you apply severe, high-stress overloads first, they rapidly initiate microscopic cracks. Even if you subsequently drop to a very low stress level (one that would normally allow infinite life), those pre-existing cracks act as stress concentrators and will continue to grow. The part will fail long before Miner's rule reaches $C=1.0$ (often failing around $C=0.6$).

**2. Low-to-High Loading (Increased Life):**
If a part experiences millions of cycles at very low stress, it sometimes undergoes a phenomenon called "coaxing" or localized strain hardening. When severe high stresses are later applied, the part is actually more resistant to them. It might survive until Miner's rule reaches $C=1.5$ or higher.

## 4. Rainflow Counting

To apply Miner's rule to random, chaotic vibration (like a car suspension driving over a bumpy road), engineers cannot simply look at a waveform. They must use statistical algorithms to break the chaotic signal down into discrete, identifiable "cycles."

The standard algorithm used globally is **Rainflow Cycle Counting**. (The name comes from the algorithm's analogy of rain falling down the peaks and valleys of a roof profile). It mathematically extracts the major, damaging stress cycles hidden within a noisy signal, allowing engineers to bin them by amplitude and apply Miner's rule to predict the part's lifespan.
