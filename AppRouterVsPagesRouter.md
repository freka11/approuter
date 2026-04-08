# Differences between App Router and Pages Router in Next.js

## Overview
Next.js has evolved from the Pages Router (used in Next.js 12 and earlier) to the App Router (introduced in Next.js 13). The App Router is the recommended approach for new applications, offering improved performance, better developer experience, and more advanced features.

## Key Differences

### 1. Directory Structure
- **Pages Router**: Uses a `pages/` directory for routing. Each file in `pages/` corresponds to a route.
- **App Router**: Uses an `app/` directory with a more flexible structure. Routes are defined by folders containing `page.tsx` and `layout.tsx` files.

### 2. Routing
- **Pages Router**: File-based routing where `pages/index.js` maps to `/` and `pages/blog/[slug].js` maps to `/blog/[slug]`.
- **App Router**: Folder-based routing with nested layouts. For example, `app/blog/[slug]/page.tsx` defines the route `/blog/[slug]`.

### 3. Data Fetching
- **Pages Router**: Uses functions like `getServerSideProps`, `getStaticProps`, and `getInitialProps` exported from page components.
- **App Router**: Data fetching happens directly in Server Components using `fetch()` or other async operations. No special functions needed.

### 4. Components
- **Pages Router**: All components are Client Components by default.
- **App Router**: Server Components by default, with Client Components marked with `'use client'` directive.

### 5. Layouts
- **Pages Router**: Custom layouts require `_app.js` and `_document.js` files.
- **App Router**: Built-in layout system with `layout.tsx` files that wrap child routes.

### 6. API Routes
- **Pages Router**: API routes defined in `pages/api/` directory.
- **App Router**: API routes defined in `app/api/` directory using `route.ts` files.

### 7. Metadata and SEO
- **Pages Router**: Uses `next/head` or custom meta tags.
- **App Router**: Built-in `metadata` API for static metadata and `generateMetadata` for dynamic metadata.

### 8. Advanced Features
- **Pages Router**: Limited support for advanced patterns.
- **App Router**: Supports route groups, parallel routes, intercepting routes, and partial rendering.

### 9. Performance
- **App Router**: Better performance with Server Components, streaming, and improved caching strategies.

## Migration
Migrating from Pages Router to App Router requires restructuring the application. Next.js provides a codemod to help with the migration process.

For more details, see the [Next.js App Router documentation](https://nextjs.org/docs/app).</content>
<parameter name="filePath">c:\Users\Likhith Sai\app router\app\AppRouterVsPagesRouter.md