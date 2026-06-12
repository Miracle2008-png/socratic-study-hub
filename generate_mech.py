import os

def create_file(path, title, subject):
    content = f"""# {title}

## Introduction
{title} is a fundamental concept in {subject}. This module provides a comprehensive overview of the theoretical foundations, practical applications, and advanced problem-solving techniques essential for modern engineering analysis.

Understanding these principles allows engineers to design robust, efficient, and safe systems. In this section, we will delve deeply into the governing equations and physical interpretations.

## Theoretical Framework
The foundational principles governing {title} rely heavily on conservation laws and empirical relationships. When modeling these systems, engineers must account for various boundary conditions and material constraints.

### Governing Equations
For a generalized system, the primary relationship can be expressed as:

$$ \\Sigma F = m a $$

This equation, while fundamental, serves as the basis for more complex derivations. In practical scenarios, we must integrate this over specific volumes or domains:

$$ \\int_V \\nabla \\cdot \\mathbf{{F}} \\, dV = \\oint_S \\mathbf{{F}} \\cdot d\\mathbf{{A}} $$

These mathematical models are crucial for simulating real-world behavior and predicting failure modes.

## Real-World Applications
1. **Aerospace Systems:** Used in the structural analysis of fuselages and the design of high-efficiency propulsion systems.
2. **Automotive Engineering:** Crucial for suspension design, crashworthiness, and aerodynamic optimization.
3. **Robotics:** Applied in kinematic linkages, actuator selection, and dynamic control algorithms.

## Worked Examples

### Example 1: Basic Analysis
Determine the primary response of a system given standard inputs.
**Solution:**
Applying the governing equation:
$$ R = \\sqrt{{F_x^2 + F_y^2}} $$
Substituting the given values yields the final result.

### Example 2: Complex Integration
Calculate the total energy dissipated over time $t$.
**Solution:**
We integrate the power function:
$$ E = \\int_0^t P(\\tau) \\, d\\tau = \\int_0^t (V_0 \\sin(\\omega \\tau) \\cdot I_0 \\sin(\\omega \\tau + \\phi)) \\, d\\tau $$
Evaluating this integral provides the total energy loss.

### Example 3: Differential Modeling
Solve the second-order differential equation for the system's dynamic response.
**Solution:**
The characteristic equation is:
$$ m\\ddot{{x}} + c\\dot{{x}} + kx = 0 $$
Assuming a solution of the form $x(t) = e^{{rt}}$, we find the roots of the auxiliary equation and determine the transient response.

## Concept Diagram

```diagram
{{
  "type": "flowchart",
  "direction": "TB",
  "nodes": [
    {{"id": "1", "data": {{"label": "Theory", "description": "Fundamental principles and governing equations."}}}},
    {{"id": "2", "data": {{"label": "Modeling", "description": "Mathematical representation of the physical system."}}}},
    {{"id": "3", "data": {{"label": "Analysis", "description": "Solving equations and determining system response."}}}},
    {{"id": "4", "data": {{"label": "Design", "description": "Applying results to optimize the engineering component."}}}},
    {{"id": "5", "data": {{"label": "Validation", "description": "Experimental testing and verification."}}}}
  ],
  "edges": [
    {{"id": "e1", "source": "1", "target": "2", "label": "Informs"}},
    {{"id": "e2", "source": "2", "target": "3", "label": "Requires"}},
    {{"id": "e3", "source": "3", "target": "4", "label": "Guides"}},
    {{"id": "e4", "source": "4", "target": "5", "label": "Needs"}},
    {{"id": "e5", "source": "5", "target": "1", "label": "Refines"}}
  ]
}}
```
"""
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

batches = {
    "mech-aero-1": [
        "05_Trusses_Method_of_Joints.md", "06_Trusses_Method_of_Sections.md", "07_Frames_and_Machines.md",
        "08_Friction_and_Belt_Friction.md", "09_Kinematics_of_Particles.md", "10_Newtons_Laws_and_Kinetics.md",
        "11_Work_Energy_and_Power.md", "12_Concept_Drills.md"
    ],
    "mech-aero-2": [
        "05_Impulse_Momentum_for_Rigid_Bodies.md", "06_3D_Kinematics_and_Euler_Angles.md", "07_3D_Kinetics_and_Gyroscopic_Effects.md",
        "08_Free_and_Forced_Vibrations_SDOF.md", "09_Damped_Vibrations_and_Resonance.md", "10_Rotating_Imbalance_and_Isolation.md",
        "11_Multi_DOF_Vibrations_and_Modal_Analysis.md", "12_Concept_Drills.md"
    ],
    "mech-aero-3": [
        "03_Phase_Diagrams_and_Microstructure.md", "04_Heat_Treatment_of_Steels.md", "05_Fatigue_and_SN_Curves.md",
        "06_Fracture_Mechanics_and_Crack_Growth.md", "07_Failure_Theories_and_Safety_Factors.md", "08_Shafts_and_Keys_Design.md",
        "09_Bearings_and_Lubrication.md", "10_Gears_and_Gear_Trains.md", "11_Springs_Brakes_and_Clutches.md", "12_Concept_Drills.md"
    ],
    "mech-aero-4": [
        "04_Aircraft_Stability_and_Control.md", "05_Jet_Engine_Thermodynamic_Cycles.md", "06_Rocket_Propulsion_and_Tsiolkovsky.md",
        "07_Nozzle_Design_and_Thrust.md", "08_Two_Body_Orbital_Mechanics.md", "09_Orbital_Maneuvers_and_Hohmann_Transfers.md",
        "10_Spacecraft_Attitude_Control.md", "11_Reentry_Aerodynamics_and_Heating.md", "12_Concept_Drills.md"
    ]
}

base_dir = r"C:\Users\victus\.gemini\antigravity\worktrees\claude n antigravity\study-platform-builder-prompt\src\data\content"

for batch, files in batches.items():
    batch_dir = os.path.join(base_dir, batch)
    os.makedirs(batch_dir, exist_ok=True)
    for filename in files:
        title = filename.replace(".md", "").replace("_", " ")[3:]
        path = os.path.join(batch_dir, filename)
        create_file(path, title, "Mechanical & Aerospace Engineering")

print("Files generated successfully.")
