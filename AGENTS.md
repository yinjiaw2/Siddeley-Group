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

### Layout Rules (Flexbox Only)

Use **Flexbox for all layouts**.

- **Do NOT use Grid layout** (`grid`, `grid-cols-*`, etc. are prohibited).
- Prefer `flex`, `flex-col`, `flex-row`, `flex-wrap`, `justify-*`, `items-*`, `gap-*` for layout structure.
- **Avoid using `absolute` positioning** in normal layouts.
- Only use `absolute` in rare cases where Flexbox cannot achieve the layout (e.g., overlays, badges, decorative elements).

```jsx
// ✅ Correct (Flexbox)
<div className="flex flex-col gap-4 md:flex-row" />

// ❌ Incorrect (Grid)
<div className="grid grid-cols-2 gap-4" />

// ⚠️ Rare acceptable case (absolute)
<div className="relative">
  <span className="absolute top-0 right-0" />
</div>
```

---

### Standardized Sizing & Spacing

**Strictly avoid** hardcoded values (Fixed Pixels, rem) and arbitrary value syntax (e.g., `-[...]`) for responsive design. You must use Tailwind’s functional scales.

- **No Arbitrary Values:** Do not use `sm:text-[1.9rem]` or `lg:leading-[1.8]`.
- **No Fixed Units:** Do not use `w-[320px]` or `mt-[2rem]`.
- **Scale-Based Only:** Use the built-in design scale (e.g., `text-lg`, `p-4`, `gap-2`, `leading-relaxed`).

```jsx
// ✅ Correct: Using functional scales
<h1 className="text-2xl md:text-4xl lg:text-6xl leading-tight" />
<div className="p-4 md:p-8 m-2 lg:m-6" />

// ❌ Incorrect: Using arbitrary values and fixed units
<h1 className="text-[1.9rem] sm:text-[2.5rem] lg:leading-[1.8]" />
<div className="p-[20px] mt-[2rem]" />
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

1. **Add the token to `src/app/globals.css`** under the appropriate CSS variable block.
2. **Register it in `tailwind.config`** so it becomes available as a utility class.
3. **Use it via className** — never hardcode raw values inline.

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

---

### When to Use Raw CSS

Only write raw CSS when Tailwind **cannot** achieve the result. Common exceptions include:

- Complex keyframe animations (`@keyframes`)
- Pseudo-elements with dynamic content (`::before`, `::after`)
- Third-party library style overrides

Even in these cases, **use CSS variables from `globals.css`** for any color or font values.
