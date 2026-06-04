---
title: "Moment-Area Method: Theorem 2"
---

# Moment-Area Method: Theorem 2

Theorem 1 allows us to find the slope of the beam. However, engineers are primarily concerned with finding the physical vertical sag (deflection). This is accomplished using the second theorem of the Moment-Area method.

## 1. Tangential Deviation ($t_{B/A}$)

Theorem 2 does not directly calculate the absolute vertical deflection $v$ from the horizontal axis. Instead, it calculates a very specific geometric distance called the **tangential deviation**, denoted as $t_{B/A}$.

Imagine the bent elastic curve of a beam.
1.  Draw a straight tangent line touching the curve exactly at point A.
2.  Extend this straight tangent line all the way across the drawing until it is directly above (or below) point B.
3.  The vertical distance measured from that straight tangent line to the actual physical position of the beam at point B is the tangential deviation, **$t_{B/A}$**.

## 2. Statement of Theorem 2

Through a bit of geometric derivation (utilizing small angle approximations where arc length equals vertical drop), the calculus yields a profound geometric truth.

**Theorem 2** states:
**The tangential deviation of point B relative to the tangent drawn at point A ($t_{B/A}$) is exactly equal to the "First Moment of Area" of the M/EI diagram between A and B, computed strictly about point B.**

Mathematically:
$$ t_{B/A} = (\text{Area of M/EI between A and B}) \times \bar{x}_B $$

Where:
*   **Area** is the geometric area of the M/EI diagram between the two points.
*   **$\bar{x}_B$** is the horizontal distance from the centroid of that area directly to the point B (the point you are trying to find the deviation of).

## 3. Practical Application

Theorem 2 is most powerful when used in conjunction with a point of known zero slope, such as the fixed wall of a cantilever beam (Point A).

Because the tangent line drawn at the wall is perfectly horizontal, the tangential deviation of the tip (Point B) relative to the wall ($t_{B/A}$) is identical to the absolute vertical deflection ($v_B$) of the tip.

**Example:** The cantilever beam with a point load $P$.
1.  The M/EI diagram is a triangle with base $L$ and height $-PL/EI$.
2.  The area is $-\frac{PL^2}{2EI}$.
3.  The centroid of this triangle is located a distance of $\frac{2}{3}L$ away from the tip (Point B). Therefore, $\bar{x}_B = \frac{2}{3}L$.
4.  Apply Theorem 2: $t_{B/A} = (\text{Area}) \times \bar{x}_B = \left(-\frac{PL^2}{2EI}\right) \times \left(\frac{2L}{3}\right) = -\frac{PL^3}{3EI}$.

The absolute maximum deflection of the cantilever is exactly $-PL^3 / 3EI$. We derived this complex formula purely by multiplying the area of a triangle by the location of its centroid.

For simply supported beams, the geometry is slightly more complex (requiring similar triangles), but the core geometric principles remain incredibly fast and robust.
