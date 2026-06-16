"use client";

import { useState } from "react";

const languages = ["Python", "Node.js", "cURL", "HTTP"];

const snippets: Record<string, string> = {
  Python: `import designlab

client = designlab.Client(api_key="sk-...")

result = client.generate(
  prompt="A premium dashboard",
  style="modern-blue"
)
print(result.url)`,
  "Node.js": `import { DesignLab } from 'designlab'

const client = new DesignLab({
  apiKey: process.env.DESIGNLAB_KEY
})

const result = await client.generate({
  prompt: "A premium dashboard",
  style: "modern-blue"
})

console.log(result.url)`,
  cURL: `curl -X POST https://api.designlab.dev/v1/generate \\
  -H "Authorization: Bearer sk-..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "A premium dashboard",
    "style": "modern-blue"
  }'`,
  HTTP: `POST /v1/generate HTTP/1.1
Host: api.designlab.dev
Authorization: Bearer sk-...
Content-Type: application/json

{
  "prompt": "A premium dashboard",
  "style": "modern-blue"
}`,
};

export function CodeBlock() {
  const [active, setActive] = useState("Python");

  return (
    <div className="bg-[var(--color-surface-dark)] rounded-[10px] overflow-hidden">
      <div className="flex gap-1 px-4 pt-4 pb-2 overflow-x-auto">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => setActive(lang)}
            className={`px-3 py-[6px] font-[family-name:var(--font-code)] text-xs leading-snug rounded-[4px] transition-all duration-150 cursor-pointer ${
              active === lang
                ? "bg-[var(--color-surface-deep)] text-[var(--color-on-dark)] shadow-[inset_0_-2px_0_var(--color-primary)]"
                : "bg-transparent text-[var(--color-on-dark-mute)] hover:text-[var(--color-on-dark)]"
            }`}
          >
            {lang}
          </button>
        ))}
      </div>
      <div className="px-6 pb-6 pt-2">
        <pre className="font-[family-name:var(--font-code)] text-sm leading-relaxed text-[var(--color-on-dark)] overflow-x-auto">
          <code>{snippets[active]}</code>
        </pre>
      </div>
    </div>
  );
}
