const fs = require('fs');

function fixImport(file, fromStr, toStr) {
  let text = fs.readFileSync(file, 'utf8');
  text = text.replace(fromStr, toStr);
  fs.writeFileSync(file, text);
}

fixImport('src/components/MindMap.tsx', 
  "import { Background, Controls, MiniMap, Connection, Edge, addEdge, applyNodeChanges, applyEdgeChanges, NodeChange, EdgeChange } from 'reactflow';",
  "import { Background, Controls, MiniMap, addEdge, applyNodeChanges, applyEdgeChanges, type Connection, type Edge, type NodeChange, type EdgeChange } from 'reactflow';");

fixImport('src/components/SpacedRepetition.tsx',
  "import { Flashcard, Grade } from '../utils/spacedRepetitionAlgo';",
  "import type { Flashcard, Grade } from '../utils/spacedRepetitionAlgo';");

fixImport('src/context/GamificationContext.tsx',
  "import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';",
  "import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';");

fixImport('src/data/topicCompiler.ts',
  "import { TopicContent, Section } from './topicContent';",
  "import type { TopicContent, Section } from './topicContent';");

