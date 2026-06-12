import os
import re
import shutil

path = 'src/data/engineeringData.ts'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# We want to find all `{ id: 'old_id', title: 'Some Title' }`
pattern = r"\{\s*id:\s*'([^']+)',\s*title:\s*'([^']+)'\s*\}"
matches = re.finditer(pattern, content)

new_content = content
for match in matches:
    old_id = match.group(1)
    title = match.group(2)
    
    # generate new_id from title
    new_id = title.lower()
    new_id = re.sub(r'[^a-z0-9]+', '', new_id) # like limitsandcontinuity
    
    # But wait, maybe the user wants hyphens? The user example is 'limitsandcontinuity'
    
    print(f"Renaming {old_id} to {new_id} ({title})")
    
    # Rename folder if it exists
    old_folder = os.path.join('src', 'data', 'content', old_id)
    new_folder = os.path.join('src', 'data', 'content', new_id)
    
    if os.path.exists(old_folder):
        if not os.path.exists(new_folder):
            os.rename(old_folder, new_folder)
            print(f"  Moved folder {old_id} -> {new_id}")
        else:
            print(f"  New folder {new_id} already exists!")
            
    # Replace in content
    # Only replace exact ID string to avoid matching partials
    new_content = re.sub(r"id:\s*'" + old_id + r"'", f"id: '{new_id}'", new_content)

# Save back
with open(path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Done updating engineeringData.ts")
