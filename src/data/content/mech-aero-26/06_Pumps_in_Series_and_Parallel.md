# Pumps in Series and Parallel

A single centrifugal pump may not be sufficient to meet the flow rate ($Q$) or head ($H$) requirements of a particular system. Instead of custom-designing a massive new pump, engineers often combine multiple standard pumps in series or parallel networks to achieve the desired performance.

## 1. Pumps in Series (To Increase Head)

When pumps are connected end-to-end (the discharge of Pump 1 feeds directly into the suction of Pump 2), they are in **series**.

- **Flow Rate:** The exact same water flows through both pumps. Therefore, the flow rate is identical for both.
  $$Q_{total} = Q_1 = Q_2$$
- **Head:** Pump 1 adds pressure to the water. Pump 2 takes that high-pressure water and adds *even more* pressure. The total head is the sum of the individual heads.
  $$H_{total}(Q) = H_1(Q) + H_2(Q)$$

**Creating the Composite Curve:**
To find the performance curve of the combined series system, take the individual pump curves and add them **vertically** at every flow rate $Q$.
- *Application:* Deep well pumps (submersible bore pumps) are just dozens of small impellers stacked in series on a single shaft to lift water hundreds of meters out of the ground.

## 2. Pumps in Parallel (To Increase Flow)

When pumps draw from a common suction header and discharge into a common discharge header, they are in **parallel**.

- **Head:** Both pumps must overcome the exact same pressure difference between the suction and discharge manifolds. Therefore, the head must be identical across both pumps.
  $$H_{total} = H_1 = H_2$$
- **Flow Rate:** Each pump contributes a portion of the total flow.
  $$Q_{total}(H) = Q_1(H) + Q_2(H)$$

**Creating the Composite Curve:**
To find the performance curve of the combined parallel system, take the individual pump curves and add them **horizontally** at every head $H$.
- *Application:* Municipal water plants use parallel pumps to handle widely varying daily demand. They turn on one pump at night, and switch on three in parallel during the morning shower rush.

## 3. The Operating Point Trap

A common misconception is that adding two identical pumps in parallel will double the flow rate in the system. **This is false.**

The actual flow rate is dictated by the intersection of the composite pump curve and the system curve. 
Because the system curve bends upward ($H_{sys} = H_{stat} + KQ^2$), as you try to push more flow through the pipes, the friction head rises exponentially. 

- When you turn on a second pump in parallel, the total flow $Q$ increases, which increases the pipe friction, forcing both pumps to operate at a higher head $H$ than before. 
- Looking at a backward-curved pump chart, a higher $H$ means each individual pump delivers *less* flow than it did when running alone.
- Therefore, two parallel pumps might only deliver 1.5 times the flow of a single pump, not 2.0 times. (If the pipe friction is extremely high, turning on a second parallel pump might barely increase flow at all!).

Similarly, adding a pump in series does not double the flow rate, nor does it necessarily double the head actually delivered, because the operating point slides up the system curve. System interaction must always be plotted to find the true operating point.
