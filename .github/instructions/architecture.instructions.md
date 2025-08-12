---
applyTo: '**/*.ts,**/*.tsx'
description: Architecture patterns and module organization for the React template project
---

# React Template Architecture Guide

## Architecture Overview

This is a **modular monolith** React app with feature-based organization. Each module is self-contained with its own routes, components, services, and utilities.

### Module Structure Pattern

```
src/modules/{module-name}/
├── index.ts                 # Public API exports
├── components/             # Module-specific components
├── services/              # API calls & React Query
├── router/                # Routes & lazy loading
├── helpers/               # Module utilities
└── constants/             # Module constants
```

**Key Example**: `src/modules/auth/` demonstrates the complete pattern.

## Critical Development Workflows

### Adding New Modules

1. Create folder in `src/modules/{name}/`
2. Export routes from `{name}/router/routes.ts`
3. Add routes to `src/router/routes.ts` moduleRoutes array
4. Export public API in `{name}/index.ts`

### Path Aliases (Vite Config)

- `@/shared` → `src/modules/shared`
- `@/auth` → `src/modules/auth`
- `@/router` → `src/router`
- `@/config` → `src/modules/config`

### Commands

- `pnpm dev` - Development server
- `pnpm typecheck` - TypeScript validation
- `pnpm lint:fix` - Auto-fix ESLint issues

## Project-Specific Patterns

### Authentication & HTTP

- **Token Management**: Auto-refresh in `src/modules/shared/lib/axios.ts`
- **Auth Context**: Global user state via React Query in `src/modules/shared/contexts/auth.tsx`
- **Protected Routes**: Use `PrivateRoute` component

### Data Fetching & State Management

- **React Query**: All API calls use `@tanstack/react-query` for async state
- **Query Keys**: Define in `{module}/services/query-keys.ts`
- **HTTP Client**: Use `src/modules/shared/services/http-client.ts` wrapper
- **Global State**: Use Context API for simple state, consider Zustand for complex global state

### Component Patterns

- **SVG Icons**: Import via `<SvgIcon name="iconName" />` from `@/shared/components/ui/svg`
- **Lazy Routes**: All routes use `lazy()` loading with fallbacks
- **Error Boundaries**: Router-level error handling

### Code Organization

- **Barrel Exports**: Each module's `index.ts` defines public API
- **Type Safety**: Strict TypeScript with React 19 + Compiler
- **Path-based Routing**: Routes defined per module, combined centrally
- **No Testing Setup**: Project prioritizes development speed over test coverage
