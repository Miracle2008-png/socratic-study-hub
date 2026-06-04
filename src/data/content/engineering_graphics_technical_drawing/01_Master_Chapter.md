# Engineering Graphics & Technical Drawing

## 1. Orthographic Projections

Orthographic projection is a method of representing a three-dimensional object in two dimensions using multiple views. The typical views are the Front View, Top View, and Side (Right/Left) View.

### First-Angle vs. Third-Angle Projection
- **First-Angle Projection:** The object is placed between the observer and the projection plane. (Used predominantly in Europe/Asia).
- **Third-Angle Projection:** The projection plane is placed between the observer and the object. (Used predominantly in the US/Canada).

---

## 2. Isometric Projections

An isometric projection is a 3D representation where the three coordinate axes appear equally foreshortened, and the angles between any two of them are 120 degrees.
- Lines parallel to the axes are drawn to scale.
- Non-isometric lines cannot be measured directly.
- Circles appear as ellipses in isometric views.

---

## 3. Sectional Views

Sectional views are used to reveal the internal features of a part that cannot be clearly shown by hidden lines. 
- **Full Section:** The cutting plane passes entirely through the object.
- **Half Section:** The cutting plane passes halfway through the object, exposing one-quarter of it (used for symmetrical parts).
- **Offset Section:** The cutting plane is bent or stepped to pass through features that are not in a straight line.

Hatching lines are drawn (usually at 45°) to indicate solid material that has been cut.

---

## 4. Solved Examples

### Example 4.1: Missing Line in Orthographic Projection
**Problem:** Given a Front View and Top View of a simple L-bracket, determine the Side View. The bracket has a vertical height of 50mm, a base width of 60mm, a uniform thickness of 10mm, and a depth of 40mm.

**Solution Steps:**
1. **Analyze Dimensions:**
   - Overall Height: $50\text{ mm}$
   - Overall Width: $60\text{ mm}$
   - Depth: $40\text{ mm}$
   - Thickness: $10\text{ mm}$
2. **Draft Front View:**
   - Draw an L-shape 60mm wide and 50mm high.
   - The vertical leg is 10mm thick, and the horizontal base is 10mm thick.
3. **Draft Top View:**
   - Draw a rectangle $60 \times 40\text{ mm}$.
   - Draw a solid vertical line 10mm from the left edge representing the top edge of the vertical leg.
4. **Determine Right Side View:**
   - Project height lines from the Front View.
   - Project depth lines from the Top View.
   - The side view will be a rectangle $40 \times 50\text{ mm}$.
   - Add a solid horizontal line 10mm from the bottom to represent the top surface of the horizontal base leg.

### Example 4.2: Limits and Fits Calculation
**Problem:** A hole and shaft system is specified as $\phi 50 \, H7/g6$. Calculate the maximum clearance, minimum clearance, and state the type of fit. 
*Given standard tolerances:* 
- For Hole $50H7$: Fundamental deviation $= 0$, IT7 tolerance $= 25 \, \mu\text{m}$.
- For Shaft $50g6$: Fundamental deviation $= -9 \, \mu\text{m}$, IT6 tolerance $= 16 \, \mu\text{m}$.

**Solution:**
1. **Determine Hole dimensions ($H7$):**
   - Basic Size $= 50.000\text{ mm}$
   - Lower Deviation ($EI$) $= 0$
   - Upper Deviation ($ES$) $= EI + IT7 = 0 + 0.025 = +0.025\text{ mm}$
   - Hole Limits: $\mathbf{50.000\text{ mm}}$ to $\mathbf{50.025\text{ mm}}$
2. **Determine Shaft dimensions ($g6$):**
   - Basic Size $= 50.000\text{ mm}$
   - Upper Deviation ($es$) $= -0.009\text{ mm}$
   - Lower Deviation ($ei$) $= es - IT6 = -0.009 - 0.016 = -0.025\text{ mm}$
   - Shaft Limits: $\mathbf{49.975\text{ mm}}$ to $\mathbf{49.991\text{ mm}}$
3. **Calculate Clearances:**
   - **Maximum Clearance ($C_{max}$):** Maximum Hole - Minimum Shaft
     $$ C_{max} = 50.025 - 49.975 = 0.050\text{ mm} = 50 \, \mu\text{m} $$
   - **Minimum Clearance ($C_{min}$):** Minimum Hole - Maximum Shaft
     $$ C_{min} = 50.000 - 49.991 = 0.009\text{ mm} = 9 \, \mu\text{m} $$
4. **Identify Fit Type:**
   - Since $C_{min} > 0$, there is always a gap between the shaft and the hole.
   - Therefore, this is a **Clearance Fit**.
