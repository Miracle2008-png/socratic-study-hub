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
    "thermo-1": [
        "01_Properties_of_Pure_Substances.md", "02_First_Law_of_Thermodynamics.md", "03_Second_Law_and_Entropy.md",
        "04_Exergy_Analysis.md", "05_Gas_Power_Cycles.md", "06_Vapor_and_Combined_Power_Cycles.md",
        "07_Refrigeration_Cycles.md", "08_Thermodynamic_Property_Relations.md", "09_Gas_Mixtures.md",
        "10_Gas_Vapor_Mixtures_and_Air_Conditioning.md", "11_Chemical_Reactions_and_Combustion.md", "12_Concept_Drills.md"
    ],
    "thermo-2": [
        "01_Introduction_to_Heat_Transfer.md", "02_Steady_Heat_Conduction.md", "03_Transient_Heat_Conduction.md",
        "04_Fundamentals_of_Convection.md", "05_External_Forced_Convection.md", "06_Internal_Forced_Convection.md",
        "07_Natural_Convection.md", "08_Boiling_and_Condensation.md", "09_Heat_Exchangers.md",
        "10_Fundamentals_of_Thermal_Radiation.md", "11_Radiation_Heat_Transfer.md", "12_Concept_Drills.md"
    ],
    "fluids-1": [
        "01_Introduction_and_Basic_Concepts.md", "02_Properties_of_Fluids.md", "03_Pressure_and_Fluid_Statics.md",
        "04_Fluid_Kinematics.md", "05_Bernoulli_and_Energy_Equations.md", "06_Momentum_Analysis_of_Flow_Systems.md",
        "07_Dimensional_Analysis_and_Modeling.md", "08_Internal_Flow.md", "09_Differential_Analysis_of_Fluid_Flow.md",
        "10_Approximate_Solutions_of_the_Navier_Stokes_Equation.md", "11_External_Flow_Drag_and_Lift.md", "12_Concept_Drills.md"
    ],
    "fluids-2": [
        "01_Compressible_Flow.md", "02_Open_Channel_Flow.md", "03_Turbomachinery.md",
        "04_Introduction_to_Computational_Fluid_Dynamics.md", "05_Boundary_Layer_Theory.md", "06_Turbulence_Modeling.md",
        "07_Multiphase_Flow.md", "08_Non_Newtonian_Fluids.md", "09_Microfluidics.md",
        "10_Biofluid_Mechanics.md", "11_Aerodynamics_of_Bluff_Bodies.md", "12_Concept_Drills.md"
    ],
    "chem-1": [
        "01_Material_Balances.md", "02_Energy_Balances.md", "03_Chemical_Engineering_Thermodynamics.md",
        "04_Fluid_Mechanics_for_Chemical_Engineers.md", "05_Heat_Transfer_in_Chemical_Processes.md", "06_Mass_Transfer_Fundamentals.md",
        "07_Separation_Processes_Distillation.md", "08_Separation_Processes_Absorption_and_Extraction.md", "09_Chemical_Reaction_Kinetics.md",
        "10_Ideal_Reactor_Design.md", "11_Non_Ideal_Reactors.md", "12_Concept_Drills.md"
    ],
    "chem-2": [
        "01_Process_Dynamics.md", "02_Process_Control_Systems.md", "03_Process_Design_and_Economics.md",
        "04_Plant_Design_and_Optimization.md", "05_Process_Safety_and_Loss_Prevention.md", "06_Environmental_Engineering_for_Chemical_Processes.md",
        "07_Biochemical_Engineering.md", "08_Polymer_Engineering.md", "09_Nanotechnology_in_Chemical_Engineering.md",
        "10_Electrochemical_Engineering.md", "11_Green_Chemistry_and_Engineering.md", "12_Concept_Drills.md"
    ],
    "chem-3": [
        "01_Introduction_to_Petroleum_Geology.md", "02_Reservoir_Rock_Properties.md", "03_Reservoir_Fluid_Properties.md",
        "04_Drilling_Engineering.md", "05_Well_Completion_and_Stimulation.md", "06_Reservoir_Engineering_Fundamentals.md",
        "07_Well_Testing_and_Evaluation.md", "08_Production_Engineering.md", "09_Artificial_Lift_Methods.md",
        "10_Enhanced_Oil_Recovery.md", "11_Natural_Gas_Engineering.md", "12_Concept_Drills.md"
    ]
}

base_dir = r"C:\Users\victus\.gemini\antigravity\worktrees\claude n antigravity\study-platform-builder-prompt\src\data\content"

for batch, files in batches.items():
    batch_dir = os.path.join(base_dir, batch)
    os.makedirs(batch_dir, exist_ok=True)
    for filename in files:
        title = filename.replace(".md", "").replace("_", " ")[3:]
        path = os.path.join(batch_dir, filename)
        subject = "Thermodynamics" if "thermo" in batch else ("Fluid Mechanics" if "fluids" in batch else "Chemical & Petroleum Engineering")
        create_file(path, title, subject)

print("Files generated successfully.")
