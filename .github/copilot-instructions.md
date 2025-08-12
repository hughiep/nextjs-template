---
applyTo: '**/*.ts,**/*.tsx'
---

# React Template Coding Standards

Follow the [architecture patterns](./instructions/architecture.instructions.md) for project structure and organization, adhere to the [technology stack](./instructions/techstack.instructions.md) for consistency, and use the [general coding standards](./instructions/general-coding.instructions.md) for best practices.

## Naming Conventions

- **File and Directory Names**: Use lowercase with hyphens (e.g., `my-file.ts`).
- **PascalCase**: Component names, interfaces, type aliases
- **camelCase**: Variables, functions, methods
- **ALL_CAPS**: Constants
- **Underscore prefix**: Private class members (`_privateMember`)

## TypeScript Guidelines

- Use TypeScript for all new code
- Follow functional programming principles where possible
- Use interfaces for data structures and type definitions
- Prefer immutable data (`const`, `readonly`)
- Use optional chaining (`?.`) and nullish coalescing (`??`) operators

## React Guidelines

- Use functional components with hooks (no class components)
- Follow React hooks rules (no conditional hooks)
- Keep components small and focused
- Follow Single Responsibility Principle (SRP)
- Use React's built-in features (Context API, Suspense) for state management
- Implement patterns like presentational/container components, compound components, and HOCs for reusability

## Error Handling

- Use try/catch blocks for async operations
- Implement proper error boundaries in React components
- Always log errors with contextual information
