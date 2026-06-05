# Structural Health Monitoring

**Structural Health Monitoring (SHM)** is the process of using permanently embedded sensors to continuously monitor the in-service behavior of a structure, detect damage as it occurs, and assess remaining structural life — in real time, without taking the structure out of service.

## 1. The SHM Paradigm

Traditional inspection relies on scheduled visual inspection and non-destructive evaluation (NDE) — expensive, infrequent, and dependent on inspector skill. SHM replaces periodic inspection with continuous, automated, physics-based monitoring.

**The damage detection hierarchy (Rytter's levels):**
1. **Detection**: Is there damage? (Binary yes/no)
2. **Localization**: Where is the damage?
3. **Classification**: What type of damage? (crack, delamination, corrosion)
4. **Severity**: How severe is it?
5. **Prognosis**: How much remaining life does the structure have?

Most current SHM systems operate reliably at Levels 1–3. Level 5 (prognosis) remains an active research frontier.

## 2. Vibration-Based Damage Detection

Damage (cracks, delamination, corrosion) reduces local stiffness. Since $\omega_n = \sqrt{k/m}$, reduced stiffness lowers natural frequencies. **Tracking shifts in natural frequencies** over time reveals the presence of damage.

**Limitations:**
- Natural frequencies are global properties — insensitive to localized damage.
- Environmental changes (temperature, humidity) also shift frequencies, masking damage signatures.

**Mode shape changes and the damage index method** compare mode shapes before and after damage. The ratio of modal strain energy in damaged vs. undamaged states localizes the damage position more accurately than frequency shifts alone.

## 3. Guided Wave SHM (Lamb Waves)

Piezoelectric (PZT) transducers bonded to plate structures generate **Lamb waves** — elastic waves that propagate within thin plates and are highly sensitive to cracks, delamination, and thickness changes.

An actuator PZT generates a broadband Lamb wave pulse. Sensor PZTs distributed across the structure receive the wave. Any crack or delamination along the path reflects, scatters, or absorbs the wave — creating detectable changes in the received signal.

**Advantages:** One actuator-sensor pair can interrogate a 1–2 m region of plate. Can detect millimeter-scale cracks. Active sensing (can be triggered on demand).

**Applications:** Aircraft composite fuselage monitoring, wind turbine blade delamination detection, pipeline corrosion monitoring.

## 4. Acoustic Emission

**Acoustic Emission (AE)** is the passive detection of stress waves naturally emitted by crack growth, fiber breakage, matrix cracking, or corrosion activity.

AE sensors (wideband piezoelectric transducers) passively listen for these signals. The arrival time difference between multiple sensors triangulates the source location.

AE is extremely sensitive — it can detect a single crack propagation event releasing nanojouiles of energy. Used for real-time monitoring of pressure vessels, bridges, and composite structures under proof load testing.
