# 7. Introduction to Triple Integrals

We are now ready to extend integration into three dimensions. 

Just as a double integral computes the 2D sum of $f(x,y)$ over a region $R$, a **triple integral** computes the 3D sum of $f(x,y,z)$ over a solid volume $E$.

### Mathematical Definition
If $E$ is a closed, bounded solid region in 3D space, we divide it into tiny rectangular boxes of volume $\Delta V = \Delta x \Delta y \Delta z$. The triple integral is defined as the limit of the Riemann sum over these boxes:

$$ \iiint_E f(x,y,z) dV = \lim_{l,m,n \to \infty} \sum_{i=1}^{l} \sum_{j=1}^{m} \sum_{k=1}^{n} f(x_i^*, y_j^*, z_k^*) \Delta V $$

### What does a Triple Integral represent?
Because the input function $f$ has 3 dimensions, and the integration volume $dV$ has 3 dimensions, the mathematical result is effectively 4-dimensional! 
Because we cannot visualize 4D space, we rely on physical interpretations:

1.  **Mass of a 3D Object:** If $f(x,y,z)$ is a volume density function $\rho(x,y,z)$ (e.g., density of the Earth varies from crust to core), the triple integral gives the total mass of the object.
    $$ m = \iiint_E \rho(x,y,z) dV $$
2.  **Total Charge:** If $f(x,y,z)$ represents the charge density in a cloud of gas, the integral gives the total electrical charge.
3.  **Volume:** If $f(x,y,z) = 1$ everywhere inside $E$, the "4th dimension" collapses, and the integral simply computes the 3D volume of the solid.
    $$ V = \iiint_E 1 \, dV $$

### Triple Integrals over Rectangular Boxes
The simplest 3D region is a rectangular box $B = [a,b] \times [c,d] \times [r,s]$.
*   $a \le x \le b$
*   $c \le y \le d$
*   $r \le z \le s$

Thanks to Fubini's Theorem for Triple Integrals, we can set this up as an iterated integral in any of the $3! = 6$ possible orders ($dx\,dy\,dz$, $dy\,dx\,dz$, $dz\,dy\,dx$, etc.).

$$ \iiint_B f(x,y,z) dV = \int_{r}^{s} \int_{c}^{d} \int_{a}^{b} f(x,y,z) dx \, dy \, dz $$

To evaluate, simply work from the inside out:
1.  Integrate the innermost integral with respect to $x$ (treat $y,z$ as constants).
2.  Integrate the middle integral with respect to $y$ (treat $z$ as constant).
3.  Integrate the outermost integral with respect to $z$.


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Intro Triple Integrals",
        "icon": "BrainCircuit",
        "description": "Topic: Intro Triple Integrals"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Double Integrals",
        "icon": "FunctionSquare",
        "description": "Integrating over 2D regions (Area/Volume)."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Fubini's Theorem",
        "icon": "Sigma",
        "description": "Evaluating via iterated single integrals."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Polar Coordinates (r, θ)",
        "icon": "Activity",
        "description": "Jacobian transformation: dx dy = r dr dθ."
      },
      "style": {
        "background": "#14532d",
        "color": "#dcfce7"
      }
    },
    {
      "id": "5",
      "data": {
        "label": "Triple Integrals",
        "icon": "Layers",
        "description": "Integrating over 3D volumes (Mass/Density)."
      },
      "style": {
        "background": "#7f1d1d",
        "color": "#fee2e2"
      }
    },
    {
      "id": "6",
      "data": {
        "label": "Cylindrical & Spherical",
        "icon": "Target",
        "description": "Advanced coordinate transformations for symmetric regions."
      },
      "style": {
        "background": "#0f766e",
        "color": "#ccfbf1"
      }
    }
  ],
  "edges": [
    {
      "source": "1",
      "target": "2",
      "animated": true
    },
    {
      "source": "2",
      "target": "3",
      "animated": true
    },
    {
      "source": "3",
      "target": "4",
      "animated": true
    },
    {
      "source": "4",
      "target": "5",
      "animated": true
    },
    {
      "source": "5",
      "target": "6",
      "animated": true
    }
  ]
}
```
