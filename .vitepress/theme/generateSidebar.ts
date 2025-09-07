import fs from 'fs';
import path from 'path';

const notesDir = path.resolve(process.cwd(), 'post/notes');

import type { DefaultTheme } from 'vitepress';

function getSidebarItems(dir: string): DefaultTheme.SidebarItem[] {
  const items: DefaultTheme.SidebarItem[] = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      items.push({
        text: file,
        items: getSidebarItems(fullPath),
        collapsed: false,
      });
    } else if (file.endsWith('.md') && file !== 'index.md') {
      const text = path.basename(file, '.md');
      const link = '/notes/' + path.relative(notesDir, fullPath).replace(/\\/g, '/').replace(/\.md$/, '');
      items.push({ text, link });
    }
  }
  return items;
}

export function generateSidebar() {
  return {
    '/notes/': getSidebarItems(notesDir),
  };
}