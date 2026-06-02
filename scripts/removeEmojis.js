import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const replacements = [
  { file: 'src/components/AdminDashboard.tsx', from: '{user.streak || 0} 🔥', to: '{user.streak || 0}' },
  { file: 'src/components/AiHub.tsx', from: '(⚙️ top bar)', to: '(top bar)' },
  { file: 'src/components/Dashboard.tsx', from: "Day 1 🔥", to: "Day 1" },
  { file: 'src/components/Dashboard.tsx', from: "days 🔥", to: "days" },
  { file: 'src/components/Dashboard.tsx', from: "📚 Study a topic", to: "Study a topic" },
  { file: 'src/components/GPACalculatorWidget.tsx', from: "target! 🚀", to: "target!" },
  { file: 'src/components/Grapher2D.tsx', from: "📍 (", to: "(" },
  { file: 'src/components/LoginScreen.tsx', from: "Welcome back! 🚀", to: "Welcome back!" },
  { file: 'src/components/SocraticSolver.tsx', from: "🎉 **Problem Mastered!**", to: "**Problem Mastered!**" },
  { file: 'src/components/SpacedRepetition.tsx', from: "All caught up! 🎉", to: "All caught up!" },
  { file: 'src/components/UploadHub.tsx', from: "✨ PREMIUM AI", to: "PREMIUM AI" },
  { file: 'src/components/UploadHub.tsx', from: "<h3>📄 AI Document", to: "<h3>AI Document" },
  { file: 'src/components/UploadHub.tsx', from: "📄 This file format", to: "This file format" },
  { file: 'src/context/PremiumContext.tsx', from: "content: '✨';", to: "content: '';" }
];

for (const { file, from, to } of replacements) {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(new RegExp(from.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), 'g'), to);
    fs.writeFileSync(filePath, content, 'utf8');
  }
}
console.log('Emojis removed from strings.');
