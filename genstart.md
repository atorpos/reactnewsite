Here’s how to create a React project with TypeScript and build a website with navigation:

## Create React + TypeScript Project

**Option 1: Create React App with TypeScript**

```bash
npx create-react-app my-app --template typescript
cd my-app
npm start
```

**Option 2: Vite with TypeScript (Recommended - faster)**

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev
```

## Install React Router for TypeScript

```bash
npm install react-router-dom
npm install @types/react-router-dom
```​​​​​​​​​​​​​​​​

Perfect! Here's a complete React + TypeScript website with navigation. 

## Key TypeScript Features Demonstrated:

**1. Interface Definitions:**
```typescript
interface NavItem {
  id: string;
  label: string;
}

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}
```

**2. Typed Components:**

```typescript
const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  // Component logic with full type safety
};
```

**3. State with Types:**

```typescript
const [formData, setFormData] = useState<ContactFormData>({
  name: '',
  email: '',
  message: ''
});
```

**4. Event Handlers with Types:**

```typescript
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  // Fully typed event handling
};
```

## Project Structure for TypeScript:

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── ServiceCard.tsx
│   └── pages/
│       ├── Home.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       └── Contact.tsx
├── types/
│   ├── index.ts
│   └── components.ts
├── App.tsx
└── index.tsx
```

## TypeScript Configuration Files:

**tsconfig.json** (automatically created):

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## Benefits of TypeScript:

1. **Type Safety** - Catch errors at compile time
1. **Better IDE Support** - Autocomplete and IntelliSense
1. **Refactoring** - Safe renaming and restructuring
1. **Documentation** - Types serve as documentation
1. **Scalability** - Better for large applications

## To extend this further:

1. **Add React Router with TypeScript:**

```bash
npm install react-router-dom @types/react-router-dom
```

1. **Add State Management:**

```bash
npm install @reduxjs/toolkit react-redux
```

1. **Add UI Libraries:**

```bash
npm install @mui/material @emotion/react @emotion/styled
# or
npm install antd
```

The TypeScript version provides excellent developer experience with full type safety and better tooling support!​​​​​​​​​​​​​​​​
