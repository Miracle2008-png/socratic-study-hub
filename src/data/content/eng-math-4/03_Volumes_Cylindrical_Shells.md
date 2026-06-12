# Volumes by Cylindrical Shells

The Disk/Washer method involves slicing the solid *perpendicular* to the axis of revolution. Sometimes, this results in very difficult or impossible integrals (for example, if a curve bounds itself on the left and right, requiring you to split it into two functions of $y$).

The **Method of Cylindrical Shells** involves slicing the solid *parallel* to the axis of revolution.

## 1. The Concept of a Cylindrical Shell

Imagine taking a thin, vertical rectangular strip of area and rotating it around the y-axis. It sweeps out a hollow, thin-walled cylinder—a "cylindrical shell."

To find the volume of this shell, imagine cutting it vertically and unrolling it flat. It forms a rectangular slab.
*   The length of the slab is the circumference of the shell: $2\pi r$.
*   The height of the slab is $h$.
*   The thickness of the slab is $dr$ (or $dx$).

Therefore, the volume of one thin shell is:
$$ dV = 2\pi r \cdot h \cdot dx $$

## 2. Revolution around the y-axis (Integrating with respect to $x$)

If a region is bounded by $y = f(x)$, the x-axis, $x=a$, and $x=b$, and is revolved around the **y-axis**:
*   The radius $r$ of a shell at position $x$ is simply $x$.
*   The height $h$ of the shell is the function value $f(x)$.
*   The thickness is $dx$.

$$ V = \int_{a}^{b} 2\pi x f(x) \, dx $$

**Why use Shells instead of Washers here?**
To use Washers for a revolution around the y-axis, you *must* integrate with respect to $y$ ($dy$). If the function is $y = x - x^3$, you cannot easily solve this for $x$ in terms of $y$. Washers would be a nightmare. Shells allows you to revolve around the y-axis while still integrating with respect to $x$.

## 3. Revolution around the x-axis (Integrating with respect to $y$)

If the region is revolved around the **x-axis**, the shells are horizontal. You must slice horizontally, meaning the thickness is $dy$.

$$ V = \int_{c}^{d} 2\pi y g(y) \, dy $$

*   The radius is $y$.
*   The height (length) of the shell is determined by the right curve minus the left curve: $g(y) - h(y)$.

## 4. General Formula

$$ V = \int 2\pi \cdot (\text{radius}) \cdot (\text{height}) \, d(\text{thickness}) $$

**Revolving around other axes:**
If revolving around the vertical line $x = 2$, and the region lies to the right of $x=2$:
*   The radius of a shell at position $x$ is the distance from $x$ to the axis: $r = x - 2$.
*   The height is $f(x)$.
$$ V = \int_{a}^{b} 2\pi (x - 2) f(x) \, dx $$


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Volumes Cylindrical Shells",
        "icon": "BrainCircuit",
        "description": "Core Concept: Volumes Cylindrical Shells"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Volumes of Revolution",
        "icon": "ArrowRightCircle",
        "description": "Disk and washer methods."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Arc Length",
        "icon": "ArrowRightCircle",
        "description": "Measuring curve distances."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Center of Mass",
        "icon": "CheckCircle",
        "description": "Physical applications of integrals."
      },
      "style": {
        "background": "#14532d",
        "color": "#dcfce7"
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
    }
  ]
}
```
