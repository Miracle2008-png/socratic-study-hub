import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import TheoryLayout from './TheoryLayout';

const organicTheory = `
# Organic Chemistry

Organic chemistry is the study of the structure, properties, composition, reactions, and preparation of carbon-containing compounds. Because carbon can form four stable covalent bonds, including bonds to other carbon atoms, it can form long chains, branched structures, and rings, giving rise to an almost infinite variety of complex molecules.

## 1. IUPAC Nomenclature

The International Union of Pure and Applied Chemistry (IUPAC) provides a systematic method of naming organic chemical compounds so that every distinct structure has a unique, unambiguous name.

### Core Rules for Alkanes
1. **Find the longest carbon chain**: This determines the parent alkane name (e.g., meth-, eth-, prop-, but-, pent-, hex-).
2. **Number the chain**: Number from the end that gives the substituents the lowest possible numbers.
3. **Identify substituents**: Halogens (fluoro, chloro, bromo, iodo) and alkyl groups (methyl, ethyl) are prefixes. Principal functional groups like alcohols (-ol) become suffixes.

### Functional Groups Priority
When multiple functional groups are present, priority determines which group is the suffix (the principal functional group) and which groups are prefixes:
1. Carboxylic Acids (-oic acid)
2. Esters (-oate)
3. Amides (-amide)
4. Aldehydes (-al)
5. Ketones (-one)
6. Alcohols (-ol) 
7. Amines (-amine)
8. Alkenes/Alkynes (-ene / -yne)
9. Halogens (Prefix only: chloro, bromo)

*In the Interactive Molecule Builder, you can synthesize your own alkane chain and attach substituents to Carbon-2. Watch how the IUPAC naming engine automatically identifies the parent chain and prefixes/suffixes based on your additions!*

## 2. Carbon Bonding and Hybridization

Carbon's electron configuration is $1s^2 2s^2 2p^2$. To form four identical bonds (like in methane, $CH_4$), one $2s$ and three $2p$ orbitals hybridize:

- **sp³ hybridization:** Four single bonds. Tetrahedral geometry, bond angle $109.5^\\circ$.
- **sp² hybridization:** One double bond (one $\\sigma$, one $\\pi$), two single bonds. Trigonal planar geometry, bond angle $120^\\circ$.
- **sp hybridization:** One triple bond (one $\\sigma$, two $\\pi$), one single bond. Linear geometry, bond angle $180^\\circ$.

## 3. Nucleophilic Substitution ($S_N1$ vs $S_N2$)

Alkyl halides undergo substitution reactions where a nucleophile (electron-rich species) replaces the halogen leaving group.

### $S_N2$ Mechanism (Substitution Nucleophilic Bimolecular)
- **Mechanism:** A concerted, one-step reaction. The nucleophile attacks the electrophilic carbon from the side opposite the leaving group.
- **Stereochemistry:** Causes complete inversion of stereochemistry (Walden inversion).
- **Rate Law:** $\\text{Rate} = k[\\text{Substrate}][\\text{Nucleophile}]$.
- **Substrate trend:** Methyl > $1^\\circ$ > $2^\\circ$ $\\gg 3^\\circ$ (due to steric hindrance).
- **Conditions:** Favored by strong nucleophiles and polar aprotic solvents (e.g., acetone, DMSO).

### $S_N1$ Mechanism (Substitution Nucleophilic Unimolecular)
- **Mechanism:** A two-step reaction. The leaving group departs first, forming a carbocation intermediate, followed by nucleophilic attack from either side.
- **Stereochemistry:** Results in racemization (mixture of retention and inversion).
- **Rate Law:** $\\text{Rate} = k[\\text{Substrate}]$. The rate-determining step is carbocation formation.
- **Substrate trend:** $3^\\circ$ > $2^\\circ$ $\\gg 1^\\circ$ (due to carbocation stability via hyperconjugation).
- **Conditions:** Favored by weak nucleophiles and polar protic solvents (e.g., water, alcohols) which stabilize the ionic intermediate.

## 4. Elimination Reactions ($E1$ vs $E2$)

Elimination reactions often compete with substitution. A base removes a proton, and a leaving group departs, forming an alkene double bond.

### $E2$ Mechanism
- Concerted one-step process, similar to $S_N2$.
- Requires a strong base.
- **Stereochemistry:** The proton and leaving group must be **anti-periplanar** for efficient orbital overlap.
- **Regioselectivity:** Usually follows **Zaitsev's Rule** (forms the more substituted, more stable alkene), unless a bulky base like tert-butoxide is used, which favors the Hofmann product.

### $E1$ Mechanism
- Two-step process forming a carbocation intermediate, competing directly with $S_N1$.
- Always forms the Zaitsev product.
- Rearrangements (hydride or alkyl shifts) can occur if a more stable carbocation can form.

## 5. Electrophilic Addition to Alkenes

The $\\pi$ bond in alkenes is nucleophilic and reacts with electrophiles. 
When a hydrohalide (HX) adds to an asymmetric alkene, the addition follows **Markovnikov's Rule**: the hydrogen attaches to the carbon with more hydrogens, placing the halogen on the more substituted carbon.

This occurs because the reaction proceeds through the most stable carbocation intermediate ($3^\\circ > 2^\\circ > 1^\\circ$). If peroxides are added during HBr addition, an anti-Markovnikov product forms via a radical mechanism.

## 6. Aromatic Chemistry

Benzene ($C_6H_6$) is highly stable due to cyclic, planar, fully conjugated $\\pi$ electron delocalization. 

**Hückel's Rule:** A cyclic, planar, fully conjugated molecule is aromatic if it has $4n + 2$ $\\pi$ electrons ($n=0, 1, 2, \\ldots$). Benzene has $6$ $\\pi$ electrons ($n=1$).

Because of its stability, benzene undergoes **Electrophilic Aromatic Substitution (EAS)** rather than addition. Common EAS reactions include nitration, halogenation, sulfonation, and Friedel-Crafts alkylation/acylation. Substituents already on the ring direct incoming groups to either ortho/para positions (electron-donating groups) or meta positions (electron-withdrawing groups).
`;

const OrganicModule: React.FC = () => {
  const [backboneLength, setBackboneLength] = useState(3);
  const [substituents, setSubstituents] = useState<Record<number, string>>({});

  const addSubstituent = (position: number, type: string) => {
    setSubstituents(prev => ({
      ...prev,
      [position]: type
    }));
  };

  const getCarbonChain = () => {
    let chain = '';
    for (let i = 1; i <= backboneLength; i++) {
      let sub = substituents[i];
      if (i > 1) {
        chain += ' - ';
      }
      
      if (i === 1 || i === backboneLength) {
        if (!sub) chain += 'CH3';
        else if (sub === 'OH') chain += 'CH2(OH)';
        else if (sub === 'Cl') chain += 'CH2Cl';
        else if (sub === 'Br') chain += 'CH2Br';
      } else {
        if (!sub) chain += 'CH2';
        else if (sub === 'OH') chain += 'CH(OH)';
        else if (sub === 'Cl') chain += 'CH(Cl)';
        else if (sub === 'Br') chain += 'CH(Br)';
      }
    }
    return chain;
  };

  const getName = () => {
    const prefix = ['Meth', 'Eth', 'Prop', 'But', 'Pent', 'Hex', 'Hept', 'Oct'][backboneLength - 1];
    
    const subs = Object.keys(substituents);
    if (subs.length === 0) return `${prefix}ane`;
    
    let hasAlcohol = false;
    
    const parts = [];
    for (const [pos, type] of Object.entries(substituents)) {
      if (type === 'OH') hasAlcohol = true;
      else if (type === 'Cl') parts.push(`${pos}-chloro`);
      else if (type === 'Br') parts.push(`${pos}-bromo`);
    }
    
    let base = prefix.toLowerCase();
    if (hasAlcohol) base += 'anol';
    else base += 'ane';
    
    return parts.length > 0 ? `${parts.join(', ')}-${base}` : base;
  };

  return (
    <TheoryLayout title="Organic Chemistry" theoryContent={organicTheory}>
      <div className="organic-module">
        <div className="builder-layout">
          <div className="builder-canvas luxury-card">
            <div className="molecule-display">
              <div className="structural-formula">
                {getCarbonChain()}
              </div>
            </div>
            
            <div className="molecule-info">
              <span className="label">IUPAC Name:</span>
              <span className="name">{getName().charAt(0).toUpperCase() + getName().slice(1)}</span>
            </div>
          </div>

          <div className="builder-controls luxury-card">
            <h4>Synthesis Controls</h4>
            
            <div className="control-group">
              <label>Carbon Backbone Length: {backboneLength}</label>
              <input 
                type="range" 
                min="1" 
                max="8" 
                value={backboneLength} 
                onChange={(e) => {
                  setBackboneLength(parseInt(e.target.value));
                  setSubstituents({});
                }} 
              />
            </div>

            <div className="substituent-panel">
              <p>Add Substituents to C2:</p>
              <div className="btn-group">
                <button className="sub-btn" onClick={() => addSubstituent(2, 'OH')} disabled={backboneLength < 2}>+ Hydroxyl (-OH)</button>
                <button className="sub-btn" onClick={() => addSubstituent(2, 'Cl')} disabled={backboneLength < 2}>+ Chloro (-Cl)</button>
                <button className="sub-btn" onClick={() => addSubstituent(2, 'Br')} disabled={backboneLength < 2}>+ Bromo (-Br)</button>
              </div>
            </div>

            <button className="reset-btn mt-4" onClick={() => setSubstituents({})}>
              <RotateCcw size={16} /> Reset Substituents
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .organic-module { display: flex; flex-direction: column; gap: 24px; animation: fadeIn var(--transition-normal); padding: 12px;}
        .builder-layout { display: flex; flex-direction: column; gap: 24px; align-items: stretch; }
        .builder-canvas { padding: 48px 32px; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 300px; gap: 48px; }
        .builder-controls { padding: 32px; display: flex; flex-direction: column; gap: 24px; }
        
        .structural-formula {
          font-family: 'Times New Roman', serif;
          font-size: 32px;
          color: var(--color-text-primary);
          letter-spacing: 2px;
          text-align: center;
          word-wrap: break-word;
          max-width: 100%;
        }

        .molecule-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 16px 32px;
          background: rgba(212, 175, 55, 0.05);
          border-radius: var(--border-radius-full);
          border: 1px solid rgba(212, 175, 55, 0.2);
        }

        .molecule-info .label { font-size: 12px; text-transform: uppercase; letter-spacing: 2px; color: var(--color-text-secondary); }
        .molecule-info .name { font-family: var(--font-primary); font-size: 20px; font-weight: 500; color: var(--color-accent); text-align: center;}

        .control-group { display: flex; flex-direction: column; gap: 12px; }
        .substituent-panel { margin-top: 16px; border-top: 1px solid rgba(90, 77, 65, 0.1); padding-top: 16px; }
        .substituent-panel p { font-size: 14px; color: var(--color-text-secondary); margin-bottom: 12px; }
        .btn-group { display: flex; flex-direction: column; gap: 8px; }
        
        .sub-btn {
          padding: 12px;
          background: var(--color-base);
          border: 1px solid rgba(90, 77, 65, 0.1);
          border-radius: 8px;
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: left;
          font-family: monospace;
          color: var(--color-text-primary);
        }
        .sub-btn:hover:not(:disabled) { border-color: var(--color-accent); background: var(--color-white); }
        .sub-btn:disabled { opacity: 0.5; cursor: not-allowed; }

        input[type="range"] { -webkit-appearance: none; width: 100%; height: 4px; background: rgba(90, 77, 65, 0.1); border-radius: 2px; outline: none; }
        input[type="range"]::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 16px; height: 16px; border-radius: 50%; background: var(--color-accent); cursor: pointer; }

        .reset-btn { padding: 12px; border-radius: 8px; background: var(--color-base-alt); color: var(--color-text-secondary); display: flex; align-items: center; justify-content: center; gap: 8px; transition: var(--transition-fast); border: 1px solid rgba(90, 77, 65, 0.1); cursor: pointer;}
        .reset-btn:hover { background: var(--color-white); color: var(--color-text-primary); border-color: var(--color-accent); }
      `}</style>
    </TheoryLayout>
  );
};

export default OrganicModule;
