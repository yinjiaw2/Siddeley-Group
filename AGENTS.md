# Agents Guide

## Styling Rules

### Tailwind CSS First

Always use Tailwind CSS utility classes for styling. Raw CSS should only be used when Tailwind cannot achieve the desired result.

```jsx
// ✅ Correct
<div className="flex items-center gap-4 p-6 bg-background text-foreground" />

// ❌ Incorrect
<div style={{ display: "flex", alignItems: "center" }} />
```

---

### Global CSS is the Source of Truth

All colors, fonts, and design tokens are defined in **`src/app/globals.css`**.

> **Before creating any custom color or font, check `globals.css` first.**  
> If the token you need already exists there, use it. Do not duplicate or override it.

Reference tokens via their Tailwind class names:

```jsx
// ✅ Colors from globals.css
<div className="bg-background text-foreground" />
<div className="bg-primary text-primary-foreground" />
<div className="border-border" />

// ✅ Fonts from globals.css
<h1 className="font-app-heading" />
<p className="font-app-body" />
<span className="font-app-mono" />
```

---

### Adding New Tokens

If a design requirement cannot be met by existing tokens:

1. **Add the token to `src/app/globals.css`** under the appropriate CSS variable block
2. **Register it in `tailwind.config`** so it becomes available as a utility class
3. **Use it via className** — never hardcode raw values inline

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      "brand-subtle": "var(--color-brand-subtle)",
    },
    fontFamily: {
      "app-display": "var(--font-app-display)",
    },
  },
}
```

```jsx
// Usage
<section className="bg-brand-subtle font-app-display" />
```

---

### When to Use Raw CSS

Only write raw CSS when Tailwind **cannot** achieve the result. Common exceptions include:

- Complex keyframe animations (`@keyframes`)
- Pseudo-elements with dynamic content (`::before`, `::after` with `content`)
- Third-party library style overrides
- Scroll snap or complex grid/mask properties not supported by Tailwind

Even in these cases, **use CSS variables from `globals.css`** for any color or font values
