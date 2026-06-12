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
    "eng-math-9": [
        "01_Introduction_to_Differential_Equations.md", "02_First_Order_Linear_ODEs.md", "03_Separable_and_Exact_Equations.md",
        "04_Second_Order_Linear_ODEs.md", "05_Nonhomogeneous_Equations.md", "06_Systems_of_Linear_ODEs.md",
        "07_The_Laplace_Transform.md", "08_Inverse_Laplace_Transforms.md", "09_Series_Solutions_of_ODEs.md",
        "10_Introduction_to_PDEs.md", "11_Heat_Wave_and_Laplace_Equations.md", "12_Concept_Drills.md"
    ],
    "eng-math-10": [
        "01_Systems_of_Linear_Equations.md", "02_Matrix_Algebra.md", "03_Determinants.md",
        "04_Vector_Spaces.md", "05_Linear_Transformations.md", "06_Orthogonality_and_Least_Squares.md",
        "07_Eigenvalues_and_Eigenvectors.md", "08_Diagonalization.md", "09_Symmetric_Matrices_and_Quadratic_Forms.md",
        "10_Singular_Value_Decomposition.md", "11_Applications_in_Engineering.md", "12_Concept_Drills.md"
    ],
    "eng-math-11": [
        "01_Complex_Numbers.md", "02_Complex_Functions_and_Mappings.md", "03_Analytic_Functions.md",
        "04_Elementary_Complex_Functions.md", "05_Complex_Integration.md", "06_Cauchys_Integral_Theorem.md",
        "07_Taylor_and_Laurent_Series.md", "08_Residues_and_Poles.md", "09_Applications_of_Residues.md",
        "10_Conformal_Mapping.md", "11_Applications_in_Fluid_Flow_and_Electrostatics.md", "12_Concept_Drills.md"
    ],
    "eng-math-12": [
        "01_Descriptive_Statistics.md", "02_Probability_Theory.md", "03_Discrete_Random_Variables.md",
        "04_Continuous_Random_Variables.md", "05_Joint_Probability_Distributions.md", "06_Sampling_Distributions.md",
        "07_Point_Estimation.md", "08_Statistical_Intervals.md", "09_Hypothesis_Testing.md",
        "10_Simple_Linear_Regression.md", "11_Multiple_Linear_Regression.md", "12_Concept_Drills.md"
    ],
    "eng-math-13": [
        "01_Introduction_to_Numerical_Methods.md", "02_Roots_of_Equations.md", "03_Linear_Algebraic_Equations.md",
        "04_Optimization.md", "05_Curve_Fitting.md", "06_Numerical_Differentiation.md",
        "07_Numerical_Integration.md", "08_ODEs_Initial_Value_Problems.md", "09_ODEs_Boundary_Value_Problems.md",
        "10_PDEs_Finite_Difference_Methods.md", "11_PDEs_Finite_Element_Method.md", "12_Concept_Drills.md"
    ]
}

base_dir = r"C:\Users\victus\.gemini\antigravity\worktrees\claude n antigravity\study-platform-builder-prompt\src\data\content"

for batch, files in batches.items():
    batch_dir = os.path.join(base_dir, batch)
    os.makedirs(batch_dir, exist_ok=True)
    for filename in files:
        title = filename.replace(".md", "").replace("_", " ")[3:]
        path = os.path.join(batch_dir, filename)
        create_file(path, title, "Engineering Mathematics")

print("Math files generated successfully.")
