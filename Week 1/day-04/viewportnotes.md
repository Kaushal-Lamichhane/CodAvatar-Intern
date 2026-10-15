# Day 04 — Viewport Testing Notes

## Objective
Test the TaskFlow dashboard at different screen sizes to ensure the layout remains readable and usable.

## Viewport Comparison

| Device | Width | Expected Result | Actual Result |
|---|---:|---|---|
| Mobile | 375px | Sidebar stacks above content; one card column | AS Expected |
| Tablet | 768px | Layout adapts to available width | As Expected |
| Desktop | 1440px | Sidebar and main content appear side by side | As Expected |

## Testing Checklist

- [x] No unwanted horizontal scrolling.
- [x] Text wraps correctly within cards.
- [x] Buttons and other controls remain reachable.
- [x] Keyboard focus is visible.
- [x] Layout remains usable when zoomed in.
- [x] Cards fit within the available screen width.

## Key Observations

**Flexbox:** Used to arrange the sidebar and main content.

**CSS Grid:** Used to arrange task cards into rows and columns.

**Media Queries:** Used to change the layout at smaller viewport widths.

**Overflow:** Check whether any element extends beyond the viewport.

## Screenshots

Screenshots are provided inside screenshot folder.

## Conclusion

Responsive testing helps identify layout problems across screen sizes. Record the actual results after testing rather than assuming the expected layout works correctly.

**Status:** In progress



