# Traffic Engineering and Flow Theory

## Introduction
While transportation planning focuses on predicting *future* travel demand over decades, traffic engineering is concerned with the *real-time* operational efficiency and safety of the existing street and highway network. It involves the design of intersection geometries, the timing of traffic signals, the deployment of intelligent transportation systems (ITS), and the rigorous analysis of how vehicular traffic behaves in a physical space.

To optimize a roadway, engineers must understand traffic flow theory—the mathematical description of how individual vehicles interact with one another and the infrastructure. Traffic is often modeled analogously to fluid dynamics, shifting between stable, free-flowing states and unstable, congested states. The goal of the traffic engineer is to maximize the "throughput" of a corridor while minimizing delay and accident risk, often quantified through a grading scale known as the Level of Service (LOS).

## The Fundamental Parameters of Traffic Flow
Macroscopic traffic flow theory relies on three interdependent variables:
1.  **Flow ($q$):** The rate at which vehicles pass a specific point on the roadway, typically expressed in vehicles per hour (veh/h).
2.  **Speed ($u$):** The distance covered per unit of time, usually expressed in kilometers per hour (km/h). In traffic theory, we rely heavily on the *space-mean speed*, which is the harmonic mean of the speeds of vehicles passing a point.
3.  **Density ($k$):** The number of vehicles occupying a given length of a lane or roadway at a specific instant, usually expressed in vehicles per kilometer (veh/km).

The fundamental equation of traffic flow unites these three variables: $q = u \cdot k$.

## Greenshields Model
In 1935, Bruce Greenshields proposed a pioneering model that assumed a linear relationship between traffic speed and traffic density. According to Greenshields, when the road is empty (density $k \approx 0$), vehicles travel at their maximum "free-flow speed" ($u_f$). As density increases, drivers are forced to slow down due to proximity to other vehicles. Eventually, the density reaches a "jam density" ($k_j$), where vehicles are bumper-to-bumper, and the speed drops to zero ($u = 0$).

## Queuing Theory and Intersections
At bottlenecks—such as a lane closure, a toll booth, or a red light—demand temporarily exceeds capacity, leading to the formation of queues. Traffic engineers use queuing theory to predict the length of these lines, the average delay per vehicle, and the necessary storage space (e.g., the length of a left-turn lane) to prevent the queue from spilling back into adjacent intersections.

---

## Detailed Mathematical Examples

### 1. The Fundamental Equation of Traffic Flow
The simplest application of traffic flow theory is deriving the third macroscopic variable when two are known.

**Problem:** Aerial photography of a 2-kilometer stretch of highway reveals exactly 60 vehicles occupying the rightmost lane. A radar gun positioned on an overpass determines that the space-mean speed of these vehicles is $85 \text{ km/h}$. Calculate the density ($k$) and the corresponding flow rate ($q$) in the right lane.

**Solution:**
Calculate the density ($k$), which is vehicles per length:
$$
k = \frac{60 \text{ vehicles}}{2 \text{ km}} = 30 \text{ veh/km}
$$

Use the fundamental equation to calculate flow ($q$):
$$
q = u \times k
$$
$$
q = 85 \text{ km/h} \times 30 \text{ veh/km} = 2,550 \text{ veh/h}
$$

The lane is carrying a flow of $2,550 \text{ vehicles per hour}$.

### 2. Greenshields Macroscopic Stream Model
Greenshields postulated a linear relationship between speed ($u$) and density ($k$): $u = u_f (1 - \frac{k}{k_j})$. From this, we can derive the parabolic relationship between flow and density to find the maximum capacity of the road.

**Problem:** A segment of freeway has been observed to have a free-flow speed ($u_f$) of $120 \text{ km/h}$ and a jam density ($k_j$) of $140 \text{ veh/km/lane}$. Assuming Greenshields' linear speed-density model applies, calculate the maximum flow rate (capacity, $q_{max}$) of the lane, and determine the optimum speed ($u_o$) and optimum density ($k_o$) at which this maximum flow occurs.

**Solution:**
In the Greenshields model, maximum flow occurs exactly halfway between zero and maximum density/speed:
$$
u_o = \frac{u_f}{2} = \frac{120}{2} = 60 \text{ km/h}
$$
$$
k_o = \frac{k_j}{2} = \frac{140}{2} = 70 \text{ veh/km}
$$

The maximum flow capacity ($q_{max}$) is the product of optimum speed and density:
$$
q_{max} = u_o \times k_o = \frac{u_f \times k_j}{4}
$$
$$
q_{max} = 60 \times 70 = 4,200 \text{ veh/h/lane}
$$

The theoretical maximum capacity of the lane is $4,200 \text{ vehicles per hour}$, occurring at a speed of $60 \text{ km/h}$.

### 3. D/D/1 Queuing Theory (Deterministic Arrival and Departure)
Deterministic queuing assumes vehicles arrive at a constant rate and are serviced at a constant rate.

**Problem:** Vehicles arrive at a single toll booth at a constant rate ($\lambda$) of $1,200 \text{ veh/h}$. The toll booth can process vehicles at a constant service rate ($\mu$) of $900 \text{ veh/h}$. At $t = 0$, the toll booth opens with zero vehicles in line. Calculate the length of the queue after $20 \text{ minutes}$, and the total delay accumulated by all vehicles in the queue during this $20\text{-minute}$ period.

**Solution:**
Convert arrival and service rates to vehicles per minute:
$$
\lambda = \frac{1200}{60} = 20 \text{ veh/min}
$$
$$
\mu = \frac{900}{60} = 15 \text{ veh/min}
$$

Calculate the queue length ($Q_t$) at time $t = 20 \text{ min}$:
Since $\lambda > \mu$, the queue is growing.
$$
Q_t = (\lambda - \mu) \times t
$$
$$
Q_{20} = (20 - 15) \times 20 = 5 \times 20 = 100 \text{ vehicles}
$$

Calculate the total delay (Total Wait Time). In a D/D/1 queue starting from zero, the total delay is the area of the triangle formed by the cumulative arrivals and cumulative departures over time.
$$
\text{Total Arrivals after 20 min} = 20 \times 20 = 400 \text{ vehicles}
$$
$$
\text{Total Departures after 20 min} = 15 \times 20 = 300 \text{ vehicles}
$$

The delay for the $i$-th vehicle is the horizontal distance between the arrival and departure curves. The total delay ($D_{total}$) is the area between the curves:
$$
D_{total} = \frac{1}{2} \times t \times Q_t
$$
$$
D_{total} = \frac{1}{2} \times 20 \text{ min} \times 100 \text{ vehicles} = 1,000 \text{ vehicle-minutes}
$$

After 20 minutes, there are $100$ vehicles in line, and the system has generated $1,000 \text{ vehicle-minutes}$ of total delay.

---

```diagram
{
  "type": "flowchart",
  "direction": "TB",
  "nodes": [
    {"id": "data", "label": "Traffic Data Collection (Volume, Speed)"},
    {"id": "model", "label": "Apply Flow Models (e.g. Greenshields)"},
    {"id": "cap", "label": "Determine Roadway Capacity"},
    {"id": "demand", "label": "Compare Demand vs Capacity"},
    {"id": "unc", "label": "Uncongested Flow (LOS A-C)"},
    {"id": "cong", "label": "Congested Flow (Queueing, LOS E-F)"},
    {"id": "opt", "label": "Optimize Signals / Expand Capacity"}
  ],
  "edges": [
    {"from": "data", "to": "model", "label": "Input Variables"},
    {"from": "model", "to": "cap", "label": "Calculate Limits"},
    {"from": "cap", "to": "demand", "label": "Assessment"},
    {"from": "demand", "to": "unc", "label": "Demand < Capacity"},
    {"from": "demand", "to": "cong", "label": "Demand > Capacity"},
    {"from": "cong", "to": "opt", "label": "Mitigation Required"},
    {"from": "opt", "to": "data", "label": "Monitor Changes"}
  ]
}
```
