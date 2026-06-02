import * as fs from 'fs';
import * as path from 'path';

// Read the original file
const formulasPath = path.resolve(__dirname, 'src/data/formulas.ts');
let content = fs.readFileSync(formulasPath, 'utf8');

// We are going to replace the interface Category with CategoryNode
// and replace the 'export const categories: Category[] =' with the new tree

let modifiedContent = content.replace(
  `export interface Category { id: string; label: string; icon: React.ElementType; color: string; formulas: Formula[]; }`,
  `export interface CategoryNode {\n  id: string;\n  label: string;\n  icon?: React.ElementType;\n  color?: string;\n  formulas?: Formula[];\n  children?: CategoryNode[];\n}`
);

// We'll replace the word Category[] with CategoryNode[]
modifiedContent = modifiedContent.replace('export const categories: Category[] = [', 'export const formulaTree: CategoryNode[] = [\n  {\n    id: "physics", label: "Physics & Astronomy", color: "#f43f5e",\n    children: [');

// Then, manually inject the groups.
// Mechanics
modifiedContent = modifiedContent.replace(`{
    id: 'mechanics'`, `  {
    id: 'mechanics'`);

// Before 'calculus' we close Physics and open Mathematics
modifiedContent = modifiedContent.replace(`{
    id: 'calculus'`, `]
  },
  {
    id: "mathematics", label: "Mathematics", color: "var(--color-math)",
    children: [
      {
    id: 'calculus'`);

// Before 'organic_chem' we close Mathematics and open Chemistry & Life Sciences
modifiedContent = modifiedContent.replace(`{
    id: 'organic_chem'`, `]
  },
  {
    id: "life_sciences", label: "Chemistry & Life Sciences", color: "var(--color-chemistry)",
    children: [
      {
    id: 'organic_chem'`);

// Before 'chem_eng_transfer' we close Chemistry and open Engineering
modifiedContent = modifiedContent.replace(`{
    id: 'chem_eng_transfer'`, `]
  },
  {
    id: "engineering", label: "Engineering", color: "#f59e0b",
    children: [
      {
        id: "chemical_eng", label: "Chemical Engineering", color: "#10b981",
        children: [
          {
    id: 'chem_eng_transfer'`);

// Before eng_maths_1 we close Chemical Eng and open Eng Maths
modifiedContent = modifiedContent.replace(`{
    id: 'eng_maths_1'`, `]
      },
      {
        id: "eng_mathematics", label: "Engineering Mathematics", color: "#3b82f6",
        children: [
          {
    id: 'eng_maths_1'`);

// Add Engineering Statistics under Engineering, so we must close eng_maths_3 before it.
// Wait, Engineering Statistics is currently under physical_chem.
// Let's just write the whole thing out properly, string replacement is risky.

// Let's create the final string programmatically instead of naive replace.
