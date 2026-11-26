
# Day 27 - Routing and URL State

## Objective
Learn layouts, nested routes, dynamic route parameters, query strings, and browser history using React Router.

## Technologies
- React
- TypeScript
- React Router DOM
- Vite

## Implementation

### 1. Route Structure
- Configured BrowserRouter and Routes.
- Created a shared DashboardLayout.
- Used Outlet to render nested pages.
- Added Dashboard and Task Details routes.
- Added a fallback 404 page.

### 2. Dynamic Route Parameters
- Used the `:taskId` route parameter.
- Read the parameter using useParams().
- Displayed task details based on the URL.
- Handled invalid task IDs.

### 3. URL-Based Filtering
- Used useSearchParams().
- Added task title search.
- Added status filtering.
- Preserved existing query parameters when updating filters.
- Supported combined search and status filters.

### 4. Navigation and History
- Used Link and NavLink for navigation.
- Supported direct URL entry.
- Supported browser Back and Forward navigation.
- Used replace for search updates to avoid excessive history entries.

## Acceptance Checklist
- [x] Dashboard route works.
- [x] Task detail route works.
- [x] Invalid task IDs show Task Not Found.
- [x] Unknown URLs show a 404 page.
- [x] Search updates the URL.
- [x] Status filtering updates the URL.
- [x] Multiple filters work together.
- [x] Refresh preserves filter state.
- [x] Back and Forward navigation work.

## Submission
Route structure and navigation checklist.
