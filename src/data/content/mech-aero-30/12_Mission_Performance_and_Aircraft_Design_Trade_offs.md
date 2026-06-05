# Mission Performance and Aircraft Design Trade-offs

Every aircraft is designed for a specific **mission profile** — the complete sequence of flight phases from engine start to shutdown. Understanding how the mission profile drives design trade-offs is essential for any aerospace engineer, as virtually every design choice involves competing objectives.

## 1. The Mission Profile

A typical civil transport mission profile:
1. **Engine start / taxi** — ground fuel burn.
2. **Takeoff** — maximum weight, high thrust, short time.
3. **Initial climb** — thrust reduced from takeoff, flaps/slats retracted progressively.
4. **Cruise climb** — climbing to cruise altitude while burning fuel.
5. **Cruise** — primary range phase, optimal altitude and speed.
6. **Descent** — engines at idle thrust (virtually free!).
7. **Approach / landing** — high-lift devices deployed, precision speed control.
8. **Missed approach / go-around** — emergency full thrust at maximum landing weight.
9. **Taxi out** — ground fuel burn after landing.
10. **Reserve fuel** — legally mandated fuel to fly to alternate airport + 45 minutes holding.

Each phase has specific thrust, altitude, speed, and aerodynamic configuration requirements. The design must accommodate all of them.

## 2. Payload-Range Diagram

The most fundamental commercial aircraft performance diagram. It shows the trade-off between how much payload (passengers + cargo, kg) the aircraft can carry versus how far it can fly (range, nautical miles).

**Structure:**
- **Segment A-B:** Constant structural payload limit. The aircraft carries its maximum structural payload; to increase range, add more fuel. Total weight increases, but stays within maximum take-off weight (MTOW) for short ranges.
- **Segment B-C:** Maximum weight limit (MTOW reached). To carry more range, reduce payload (carry more fuel instead of passengers). The aircraft is always at MTOW.
- **Segment C-D:** Maximum fuel capacity reached. To extend range further, reduce payload (less weight = less fuel burn). Aircraft is at MTOW but with full fuel tanks.
- **Point D:** Absolute maximum range — zero payload, maximum fuel, operating at MTOW. Called the **ferry range**.

## 3. The Fundamental Design Trade-offs

### Wing Loading ($W/S$) vs. Span

High wing loading (small wing for a given weight):
- **Pros:** Lower parasite drag at cruise (less wetted area), better ride quality in gusts (gust sensitivity $\propto 1/(W/S)$), higher cruise speed.
- **Cons:** Higher stall speed → longer takeoff/landing rolls, lower service ceiling.

Low wing loading:
- Opposite trade-offs. Short takeoff aircraft (STOL) and gliders have very low wing loading.

### Thrust Loading ($T/W$) vs. Wing Loading

For given runway constraints (takeoff distance, climb gradient), increasing $W/S$ requires increasing $T/W$ to maintain the same takeoff performance. Higher $T/W$ means bigger, heavier, more expensive engines.

### Sweep vs. Aspect Ratio

High sweep → delays wave drag → high cruise Mach.
But high sweep → lower effective AR → higher induced drag.
High AR → low induced drag → high $L/D$.
But high AR with high sweep → complex, heavy wing structure.

Modern solution: moderate sweep (30–35°) + high AR (9–12) enabled by composite materials. The Boeing 787 uses carbon fiber to achieve AR = 9.5 with 32° sweep — impossible in aluminum at acceptable structural weight.

## 4. The Design Spiral

Aircraft design is inherently iterative — every change ripples through the entire system:

1. Increase payload → need more wing → more wing drag → need more thrust → heavier engines → need more fuel → larger wing → back to start, aircraft is now heavier.

This **weight growth spiral** must be converged upon using parametric sizing tools (FLOPS, PIANO, OpenAD). Modern aircraft programs spend 3–5 years in the conceptual/preliminary design phase exclusively running these trade studies before committing to a specific geometry.

The fundamental metric of commercial aircraft design is **DOC (Direct Operating Cost)** — the cost per seat-kilometer. Fuel burn, maintenance cost, crew cost, and aircraft acquisition cost all feed into DOC, and every aerodynamic/structural trade-off must ultimately be evaluated in terms of its DOC impact.
