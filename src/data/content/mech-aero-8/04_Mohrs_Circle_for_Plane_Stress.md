---
title: "Mohr's Circle for Plane Stress"
---

# Mohr's Circle for Plane Stress

In 1882, the German engineer Christian Otto Mohr realized that the cumbersome trigonometric equations for stress transformation actually represent the parametric equation of a circle. 

He developed a brilliant graphical method—**Mohr's Circle**—that allows engineers to visualize and solve complex stress transformations rapidly using simple geometry, completely avoiding the memorization of long trigonometric formulas.

## 1. Setting Up the Coordinate System

To construct Mohr's Circle, we create a specialized 2D Cartesian plane:
*   The **Horizontal Axis** represents Normal Stress ($\sigma$). Tension is positive (right), Compression is negative (left).
*   The **Vertical Axis** represents Shear Stress ($\tau$). **CRITICAL Rule:** We define *downward* as positive shear. (This specific inversion ensures that rotating an element physically counter-clockwise translates to rotating counter-clockwise on the circle).

## 2. Constructing the Circle

Given an initial state of stress ($\sigma_x, \sigma_y, \tau_{xy}$):

1.  **Plot Point A:** The coordinates are $(\sigma_x, \tau_{xy})$. This represents the stress state on the right vertical face of the physical element.
2.  **Plot Point B:** The coordinates are $(\sigma_y, -\tau_{xy})$. This represents the stress state on the top horizontal face.
3.  **Draw the Diameter:** Draw a straight line connecting Point A to Point B. This line is the diameter of Mohr's Circle.
4.  **Find the Center (C):** The circle crosses the horizontal $\sigma$-axis exactly at the average normal stress: 
    $$ C = \sigma_{avg} = \frac{\sigma_x + \sigma_y}{2} $$
5.  **Calculate the Radius (R):** Use the Pythagorean theorem on the triangle formed by C, A, and the x-axis:
    $$ R = \sqrt{(\sigma_x - C)^2 + \tau_{xy}^2} $$
6.  **Draw the Circle:** Using C as the center and R as the radius, draw the full circle.

## 3. Reading the Circle

The entire circle represents the complete stress reality of that specific microscopic point. **Every single point on the perimeter of the circle represents the stress state ($\sigma, \tau$) on a specific tilted plane.**

*   **Principal Stresses ($\sigma_1, \sigma_2$):** Where the circle crosses the horizontal $\sigma$-axis, shear stress is zero. The far right point is $\sigma_1$ ($C + R$). The far left point is $\sigma_2$ ($C - R$).
*   **Maximum Shear Stress ($\tau_{max}$):** The lowest and highest points on the circle represent the maximum in-plane shear. The vertical distance from the center is exactly the radius $R$. Therefore, $\tau_{max} = R$.

## 4. The Double Angle Rule

The most critical physical relationship in Mohr's Circle is the angle mapping:
**An angular rotation of $\theta$ on the physical piece of metal corresponds to an angular rotation of $2\theta$ on Mohr's Circle.**

Because the principal plane ($\sigma_1$) and the maximum shear plane ($\tau_{max}$) are separated by $90^\circ$ on the circle, they are separated by exactly $45^\circ$ on the physical piece of metal.
