# 12. Concept Drills

Test your mastery of Vector Spaces & Subspaces. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: You are examining a set of vectors $H$ inside $\mathbb{R}^3$. You discover that the zero vector $\langle 0,0,0 \rangle$ is NOT inside $H$. What can you immediately conclude?
Options:
A) $H$ is a linearly independent set.
B) $H$ spans $\mathbb{R}^3$.
C) $H$ is NOT a valid subspace.
D) $H$ forms a basis.
Answer: C
Explanation: The very first requirement for a subset to be a valid subspace is that it must contain the zero vector. (A plane must pass through the origin to be a subspace). If the zero vector is missing, it immediately fails the test and is rejected as a subspace.
```

```drill
Question: A set contains 4 vectors living in $\mathbb{R}^3$ space. Is it possible for this set to be Linearly Independent?
Options:
A) Yes, if none of them are scalar multiples of each other.
B) Yes, if they span the space.
C) No. It is mathematically impossible.
D) Only if the matrix has a determinant of zero.
Answer: C
Explanation: $\mathbb{R}^3$ has a dimension of 3, meaning you can only have a maximum of 3 independent directions (x, y, z). If you introduce a 4th vector into a 3D space, it is mathematically forced to be a linear combination of the other three. It is absolutely impossible for 4 vectors in $\mathbb{R}^3$ to be independent.
```

```drill
Question: An engineer defines a transformation matrix $A$ of size $6 \times 8$ (6 rows, 8 columns). She calculates the Nullity of the matrix and finds it is 5. What is the Rank of the matrix?
Options:
A) 1
B) 3
C) 6
D) 8
Answer: B
Explanation: By the Rank-Nullity Theorem: Rank + Nullity = $n$ (where $n$ is the number of columns). The matrix has 8 columns. If the Nullity is 5, the Rank must be exactly $8 - 5 = 3$. 
```

```drill
Question: Which of the following is NOT a requirement for a set of vectors to form a Basis for a vector space?
Options:
A) The set must contain the zero vector.
B) The set must span the entire vector space.
C) The set must be linearly independent.
D) The number of vectors in the set must equal the dimension of the space.
Answer: A
Explanation: A Basis must span the space and must be linearly independent. However, if a set contains the zero vector, it is automatically linearly DEPENDENT (because $1\mathbf{0} = \mathbf{0}$, a non-trivial solution). Therefore, a Basis must NEVER contain the zero vector!
```
