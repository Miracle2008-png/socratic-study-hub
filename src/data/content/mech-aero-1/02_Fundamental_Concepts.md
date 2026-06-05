# Fundamental Concepts

Before formulating the laws of mechanics, several fundamental concepts and principles must be defined. These concepts form the absolute vocabulary of physical modeling.

## 1. Space, Time, Mass, and Force

1. **Space**: The geometric region occupied by bodies whose positions are described by linear and angular measurements relative to a coordinate system. In classical mechanics, space is assumed to be 3-dimensional and Euclidean.
2. **Time**: The measure of the succession of events. While statics deals with systems independent of time, time is a fundamental quantity in mechanics.
3. **Mass**: A measure of the inertia of a body, which is its resistance to a change in velocity. Mass is an absolute scalar quantity and dictates the gravitational attraction between bodies.
4. **Force**: The action of one body on another. A force tends to move a body in the direction of its action. Force is characterized by its magnitude, direction, and point of application (it is a vector quantity).

## 2. Idealizations

To simplify the mathematical modeling of physical systems, we use three key idealizations:
- **Particle**: A body of negligible dimensions. When a body is idealized as a particle, the principles of mechanics reduce to a simplified form because the geometry of the body will not be involved in the analysis. A particle has mass, but its size is totally ignored.
- **Rigid Body**: A combination of a large number of particles in which all the particles remain at a fixed distance from one another, both before and after applying a load.
- **Concentrated Force**: Represents the effect of a loading which is assumed to act at a point on a body. We can represent a load by a concentrated force, provided the area over which the load is applied is very small compared to the overall size of the body.

## 3. Newton's Three Laws of Motion

Engineering mechanics is formulated on the basis of Newton's Three Laws of Motion:

**First Law**: A particle originally at rest, or moving in a straight line with constant velocity, tends to remain in this state provided the particle is not subjected to an unbalanced force. This is the governing law of Statics.

**Second Law**: A particle acted upon by an unbalanced force $\mathbf{F}$ experiences an acceleration $\mathbf{a}$ that has the same direction as the force and a magnitude that is directly proportional to the force. 
$$ \mathbf{F} = m\mathbf{a} $$

**Third Law**: The mutual forces of action and reaction between two particles are equal, opposite, and collinear. 
$$ \mathbf{F}_{AB} = -\mathbf{F}_{BA} $$

## 4. Newton's Law of Gravitational Attraction

Newton postulated a law governing the mutual attraction between any two particles:
$$ F = G \frac{m_1 m_2}{r^2} $$
where:
- $F$ = force of attraction between the two particles
- $G$ = universal constant of gravitation ($6.673 \times 10^{-11} \; \text{m}^3/(\text{kg}\cdot\text{s}^2)$)
- $m_1, m_2$ = mass of each of the two particles
- $r$ = distance between the centers of the two particles

**Weight**: The weight of a body is the gravitational force exerted on it by the earth. 
$$ W = mg $$
where $g$ is the acceleration due to gravity ($9.81 \; \text{m/s}^2$ or $32.2 \; \text{ft/s}^2$). Weight is always directed vertically downward toward the center of the earth.
