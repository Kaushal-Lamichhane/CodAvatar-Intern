# CSS Notes — Day 03

**Project:** TaskFlow  
**Topic:** CSS Box Model, Specificity, Positioning and Overflow

## 1. CSS Box Model

Every HTML element is treated as a rectangular box consisting of four parts:

1. **Content:** The text, image or other content inside the element.
2. **Padding:** Space between the content and the border.
3. **Border:** The outline surrounding the padding and content.
4. **Margin:** Space outside the border, separating the element from others.

### Example

```css
.card {
    width: 300px;
    padding: 20px;
    border: 2px solid black;
    margin: 16px;
}
```

With the default `content-box` model, the total width is:

`300 + 40 + 4 = 344px`

Margin is excluded from this width.

### Box-sizing

```css
* {
    box-sizing: border-box;
}
```

With `border-box`, the declared width includes content, padding and border. This makes layout sizing easier to manage.

## 2. CSS Spacing Scale

A spacing scale keeps the design consistent instead of using random values.

| Variable | Value | Typical use |
|---|---:|---|
| `--space-1` | 4px | Tiny gaps |
| `--space-2` | 8px | Small gaps |
| `--space-3` | 12px | Compact spacing |
| `--space-4` | 16px | Card padding |
| `--space-6` | 24px | Section padding |
| `--space-8` | 32px | Large separation |

### CSS custom properties

```css
:root {
    --space-1: 4px;
    --space-2: 8px;
    --space-3: 12px;
    --space-4: 16px;
    --space-6: 24px;
    --space-8: 32px;
}

article {
    padding: var(--space-4);
    margin-bottom: var(--space-3);
}
```

Custom properties let us reuse the same values throughout the project.

## 3. Typography Scale

Typography controls text size, readability and visual hierarchy.

```css
:root {
    --text-sm: 14px;
    --text-base: 16px;
    --text-lg: 20px;
    --text-xl: 28px;
}

body {
    font-size: var(--text-base);
    line-height: 1.6;
}

h1 {
    font-size: var(--text-xl);
    line-height: 1.2;
}
```

- `font-size` controls text size.
- `font-weight` controls how bold the text is.
- `line-height` controls the height of each line.
- `font-family` specifies the typeface.

## 4. CSS Specificity and Cascade

Specificity determines which selector takes priority when multiple CSS rules target the same element.

### Specificity order

| Selector | Specificity |
|---|---|
| `p` | `0-0-1` |
| `.subtitle` | `0-1-0` |
| `header p` | `0-0-2` |
| `#subtitle` | `1-0-0` |

The values represent IDs, classes/attributes/pseudo-classes, and element selectors, respectively.

### Conflicting selectors example

```css
header p {
    color: red;
}

header p {
    color: green;
}
```

Both selectors have equal specificity, so the later declaration wins under the same cascade conditions. The paragraph becomes green.

However, a higher-specificity selector may win even if it appears earlier.

### Important cascade considerations

The result can also depend on:

- `!important`
- Cascade origin and cascade layers
- Inline styles
- Specificity
- Source order when earlier factors are equal

### How to inspect computed styles

1. Open the page in Chrome.
2. Right-click an element and choose **Inspect**.
3. Open the **Styles** tab to see matching CSS rules.
4. Find crossed-out declarations to identify overridden rules.
5. Open **Computed** to inspect the final calculated property values.

## 5. CSS Positioning

### Relative

```css
.box {
    position: relative;
    top: 10px;
    left: 10px;
}
```

The element moves relative to its normal position. Its original space remains reserved.

### Absolute

```css
.container {
    position: relative;
}

.box {
    position: absolute;
    top: 0;
    right: 0;
}
```

The element is removed from normal document flow and positioned relative to its nearest qualifying ancestor, such as a positioned container.

### Fixed

```css
.help-button {
    position: fixed;
    right: 16px;
    bottom: 16px;
}
```

The element normally stays in the same position relative to the viewport while scrolling. Certain ancestor properties, such as transforms, can change its containing block.

### Sticky

```css
nav {
    position: sticky;
    top: 0;
}
```

The element behaves normally until it reaches the specified scroll threshold. It then sticks within its scrolling container's constraints.

### Quick comparison

| Position | Keeps original space? | Main reference |
|---|---|---|
| `static` | Yes | Normal document flow |
| `relative` | Yes | Original position |
| `absolute` | No | Nearest qualifying ancestor |
| `fixed` | No | Usually the viewport |
| `sticky` | Yes | Scroll container and threshold |

## 6. Horizontal Overflow

Horizontal overflow occurs when content extends beyond the available page width.

### Diagnose it

Open Chrome DevTools → Console and run:

```js
document.documentElement.scrollWidth >
document.documentElement.clientWidth
```

- `true`: the document is wider than the viewport.
- `false`: no document-level horizontal overflow is detected at that moment.

### Common causes

- Fixed-width elements that are too wide.
- Long, unbroken text.
- Flex items that cannot shrink.
- Images wider than their containers.
- Excessive padding or borders.

### Fix the underlying cause

```css
img {
    max-width: 100%;
    height: auto;
}

nav ul {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
}

article {
    overflow-wrap: anywhere;
}
```

Use these rules where appropriate. Avoid arbitrary negative margins or hiding overflow simply to conceal a layout problem.

## 7. TaskFlow Application

In TaskFlow, these concepts help us:

- Use consistent spacing for the header, sections and task cards.
- Keep typography readable and consistent.
- Center navigation and diagnose conflicting styles.
- Position interface elements intentionally.
- Make the dashboard work on narrow screens.
- Prevent content from extending beyond the viewport.

## 8. Day 03 Acceptance Checklist

- [x] Applied a consistent spacing and typography scale.
- [x] Created and diagnosed a conflicting CSS selector.
- [x] Inspected computed styles in Chrome DevTools.
- [x] Tested relative, absolute, fixed and sticky positioning.
- [ ] Checked horizontal overflow and corrected its cause.
- [ ] Captured computed-style evidence.
- [x] Committed the completed work to Git.

## 9. Key Takeaways

- Padding is inside the border; margin is outside it.
- `box-sizing: border-box` makes width calculations easier.
- Specificity, cascade rules and source order determine which declaration wins.
- Computed styles show the final applied property values.
- Positioning changes how elements are placed in the layout.
- Overflow should be diagnosed and fixed at its source.

**Daily reflection:** Record one CSS concept you understood, one problem you encountered, and how you solved it.