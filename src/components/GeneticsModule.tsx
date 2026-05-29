import React, { useState } from 'react';
import { Dna } from 'lucide-react';
import TheoryLayout from './TheoryLayout';

const geneticsTheory = `
# Molecular Genetics & Heredity

Genetics is the branch of biology concerned with genes, genetic variation, and heredity. At its core lies the central dogma: DNA → RNA → Protein, the flow of information that underlies all life.

## 1. DNA Structure

DNA (Deoxyribonucleic acid) is a double-stranded helix composed of nucleotide monomers. Each nucleotide contains:
- A **deoxyribose** sugar (5 carbons)
- A **phosphate** group (forming the backbone via phosphodiester bonds)
- One of four **nitrogenous bases**: Adenine (A), Thymine (T), Guanine (G), Cytosine (C)

The two strands are antiparallel (5'→3' and 3'→5') and held together by hydrogen bonds between complementary bases. **Watson-Crick base pairing** (1953):
- A pairs with T via **2 hydrogen bonds**
- G pairs with C via **3 hydrogen bonds**

**Chargaff's Rules** (empirically established before the structure was solved):
$$[A] = [T], \\quad [G] = [C], \\quad [A] + [G] = [T] + [C] = 50\\%$$

The helix has a diameter of 2 nm, with a full turn every 3.4 nm (10 base pairs per turn).

## 2. DNA Replication

DNA replication is semiconservative: each daughter cell receives one parental strand and one newly synthesized strand. Established by the **Meselson-Stahl experiment** (1958) using $^{15}$N/$^{14}$N density labeling.

Key enzymes and their roles:
- **Helicase** — unwinds the double helix at the replication fork
- **Primase** — synthesizes a short RNA primer (~10 nt) to initiate synthesis
- **DNA Polymerase III** — adds nucleotides 5'→3' (complementary to template read 3'→5')
- **DNA Ligase** — joins Okazaki fragments on the lagging strand
- **Topoisomerase** — relieves torsional stress ahead of the fork

The **leading strand** is synthesized continuously in the direction of fork movement. The **lagging strand** is synthesized in short **Okazaki fragments** (100–200 nt in eukaryotes, 1000–2000 nt in prokaryotes) because synthesis must proceed 5'→3' away from the fork.

Fidelity is extraordinary: DNA polymerase has $3' \\to 5'$ exonuclease **proofreading** activity, reducing error rate to approximately $1 \\times 10^{-9}$ per base pair per replication — one error per billion bases.

## 3. Transcription

Transcription is the synthesis of mRNA from a DNA template, catalyzed by **RNA Polymerase** (RNApol).

Steps in eukaryotes:
1. **Initiation** — Transcription factors assemble at the **TATA box** (~25 bp upstream of TSS) and recruit RNApol II
2. **Elongation** — RNApol moves 3'→5' along the template, synthesizing mRNA 5'→3' (U replaces T)
3. **Termination** — Polyadenylation signal (AAUAAA) triggers cleavage and poly-A tail addition

**Pre-mRNA processing** in eukaryotes (not prokaryotes):
- **5' capping** — 7-methylguanosine cap added (protects from degradation, aids translation initiation)
- **Splicing** — Spliceosome removes **introns** (non-coding), joins **exons** (coding)
- **Poly-A tail** — ~200 A nucleotides added to 3' end (stability, nuclear export)

**Alternative splicing** allows one gene to produce multiple proteins — vastly expanding proteomic diversity without increasing genome size.

## 4. Translation

Translation occurs at the ribosome (large complex of rRNA + protein), converting mRNA into protein.

The **genetic code** consists of 64 codons (triplets of bases). Of these:
- 61 codons encode the **20 standard amino acids** (degenerate/redundant code)
- 3 are **stop codons**: UAA, UAG, UGA
- AUG (methionine) is the universal **start codon**

The ribosome has three sites: A (aminoacyl), P (peptidyl), E (exit). The **elongation cycle**:
1. **Aminoacyl-tRNA** with matching anticodon enters the A site
2. Peptide bond forms between amino acids (catalyzed by peptidyl transferase activity of 23S/28S rRNA)
3. Ribosome **translocates** 3 nt in 5'→3' direction; peptidyl-tRNA moves P→E

Elongation rate: ~15-20 amino acids/second in eukaryotes.

## 5. Mendelian Genetics

Gregor Mendel (1865) established the laws of inheritance through pea plant experiments:

**Law of Segregation:** Alleles separate during gamete formation, so each gamete carries one allele per gene.

**Law of Independent Assortment:** Genes on different chromosomes assort independently during meiosis.

For a monohybrid cross ($Aa \\times Aa$), the Punnett square gives:
- Genotype ratio: $1\\,AA : 2\\,Aa : 1\\,aa$
- Phenotype ratio (A dominant): $3\\text{ dominant} : 1\\text{ recessive}$

For a **dihybrid cross** ($AaBb \\times AaBb$), with independent assortment:
$$P(A\\_B\\_) = \\frac{9}{16}, \\; P(A\\_bb) = \\frac{3}{16}, \\; P(aaB\\_) = \\frac{3}{16}, \\; P(aabb) = \\frac{1}{16}$$

## 6. Hardy-Weinberg Equilibrium

In an idealized infinite, random-mating population with no selection, mutation, drift, or migration, allele frequencies remain constant. If $p$ = frequency of allele A, $q$ = frequency of allele a:
$$p + q = 1$$
$$p^2 + 2pq + q^2 = 1$$

Genotype frequencies: $p^2$ (AA), $2pq$ (Aa), $q^2$ (aa). This is the null model of population genetics — deviations indicate evolution is occurring.

## Interactive Punnett Square

Select parent genotypes and the trait. The 4-square grid updates in real-time, color-coding dominant (gold) and recessive (grey) offspring phenotypes with probability percentages.
`;

type Allele = 'A' | 'a';
type Genotype = 'AA' | 'Aa' | 'aa';

const genotypeAlleles: Record<Genotype, [Allele, Allele]> = {
  AA: ['A', 'A'], Aa: ['A', 'a'], aa: ['a', 'a']
};

const GeneticsModule: React.FC = () => {
  const [parent1, setParent1] = useState<Genotype>('Aa');
  const [parent2, setParent2] = useState<Genotype>('Aa');

  const g1 = genotypeAlleles[parent1];
  const g2 = genotypeAlleles[parent2];
  const combos = [
    [g1[0], g2[0]], [g1[0], g2[1]],
    [g1[1], g2[0]], [g1[1], g2[1]]
  ] as [Allele, Allele][];

  const isDominant = (a: Allele, b: Allele) => a === 'A' || b === 'A';
  const dominantCount = combos.filter(([a, b]) => isDominant(a, b)).length;
  const recessiveCount = 4 - dominantCount;

  const genotypeLabel = ([a, b]: [Allele, Allele]) =>
    a === 'A' && b === 'A' ? 'AA' : a === 'a' && b === 'a' ? 'aa' : 'Aa';

  const selectStyle = {
    padding: '8px 16px', borderRadius: 8, border: '1px solid rgba(212,175,55,0.3)',
    background: 'white', fontSize: 16, fontWeight: 600, color: 'var(--color-text-primary)',
    cursor: 'pointer', outline: 'none'
  };

  return (
    <TheoryLayout title="Molecular Genetics" theoryContent={geneticsTheory}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 16, animation: 'fadeIn var(--transition-normal)' }}>
        <div className="luxury-card" style={{ padding: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <Dna size={18} style={{ color: 'var(--color-accent)' }} />
            <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 18, fontWeight: 500 }}>Punnett Square Generator</h3>
          </div>
          <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginBottom: 20 }}>
            A = dominant allele, a = recessive allele. Gold = dominant phenotype expressed.
          </p>

          <div style={{ display: 'flex', gap: 24, alignItems: 'center', marginBottom: 28, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: 1 }}>Parent 1</label>
              <select value={parent1} onChange={e => setParent1(e.target.value as Genotype)} style={selectStyle}>
                <option value="AA">AA (Homozygous Dominant)</option>
                <option value="Aa">Aa (Heterozygous)</option>
                <option value="aa">aa (Homozygous Recessive)</option>
              </select>
            </div>
            <div style={{ fontSize: 28, fontWeight: 300, color: 'var(--color-text-secondary)' }}>×</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: 1 }}>Parent 2</label>
              <select value={parent2} onChange={e => setParent2(e.target.value as Genotype)} style={selectStyle}>
                <option value="AA">AA (Homozygous Dominant)</option>
                <option value="Aa">Aa (Heterozygous)</option>
                <option value="aa">aa (Homozygous Recessive)</option>
              </select>
            </div>
          </div>

          {/* Punnett Square */}
          <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr 1fr', gridTemplateRows: '40px 1fr 1fr', gap: 4, maxWidth: 320 }}>
            <div />
            {g2.map((a, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 700, color: 'var(--color-accent)' }}>{a}</div>
            ))}
            {g1.map((a1, rowIdx) => [
              <div key={`row-${rowIdx}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 700, color: 'var(--color-accent)' }}>{a1}</div>,
              ...g2.map((a2, colIdx) => {
                const combo: [Allele, Allele] = [a1, a2];
                const dom = isDominant(a1, a2);
                return (
                  <div key={`${rowIdx}-${colIdx}`} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    height: 80, borderRadius: 10, fontSize: 20, fontWeight: 600,
                    background: dom ? 'rgba(212,175,55,0.15)' : 'rgba(90,77,65,0.06)',
                    border: `2px solid ${dom ? 'rgba(212,175,55,0.4)' : 'rgba(90,77,65,0.15)'}`,
                    color: dom ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                    transition: 'all 0.3s'
                  }}>
                    {genotypeLabel(combo)}
                  </div>
                );
              })
            ])}
          </div>

          {/* Results */}
          <div style={{ marginTop: 24, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <div style={{ padding: '12px 20px', borderRadius: 10, background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)', flex: 1, textAlign: 'center' }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: 'var(--color-accent)' }}>{dominantCount * 25}%</div>
              <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', marginTop: 4 }}>Dominant Phenotype</div>
              <div style={{ fontSize: 11, color: 'var(--color-text-secondary)', marginTop: 2 }}>{dominantCount}/4 offspring</div>
            </div>
            <div style={{ padding: '12px 20px', borderRadius: 10, background: 'rgba(90,77,65,0.05)', border: '1px solid rgba(90,77,65,0.1)', flex: 1, textAlign: 'center' }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: 'var(--color-text-secondary)' }}>{recessiveCount * 25}%</div>
              <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', marginTop: 4 }}>Recessive Phenotype</div>
              <div style={{ fontSize: 11, color: 'var(--color-text-secondary)', marginTop: 2 }}>{recessiveCount}/4 offspring</div>
            </div>
          </div>
        </div>
      </div>
    </TheoryLayout>
  );
};

export default GeneticsModule;
