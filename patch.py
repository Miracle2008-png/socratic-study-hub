import os

file_path = r'src\components\TopicModule.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

target = """                  code: ({ children, className, ...props }) => {
                    const isBlock = className?.includes('language');
                    if (className?.includes('language-drill')) {
                      return <InteractiveDrill content={String(children)} />;
                    }
                    if (className?.includes('language-diagram')) {
                      return <InteractiveDiagram content={String(children)} />;
                    }"""

replacement = """                  code: ({ children, className, ...props }) => {
                    const isBlock = className?.includes('language');
                    const contentStr = String(children);
                    if (className?.includes('language-drill') || contentStr.includes('"options":')) {
                      return <InteractiveDrill content={contentStr} />;
                    }
                    if (className?.includes('language-diagram') || contentStr.includes('"nodes":')) {
                      return <InteractiveDiagram content={contentStr} />;
                    }"""

new_content = content.replace(target, replacement)
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Patch applied.")
