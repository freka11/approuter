# App Code Explanation

This Next.js application demonstrates a blog-style posts viewer using the App Router. It fetches data from the JSONPlaceholder API and displays posts with pagination.

## Project Structure

```
app/
├── src/
│   └── app/
│       ├── layout.tsx          # Root layout component
│       ├── page.tsx            # Home page displaying posts list
│       ├── globals.css         # Global styles
│       ├── components/
│       │   ├── Card.tsx        # Post card component
│       │   └── Pagination.tsx  # Pagination component
│       ├── posts/
│       │   └── [id]/
│       │       └── page.tsx    # Dynamic post detail page
│       └── services/
│           └── api.ts          # API service functions
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

## Key Components and Files

### 1. Layout (`src/app/layout.tsx`)
- Defines the root layout for the entire application
- Includes metadata for the app title
- Wraps all pages with the HTML structure

### 2. Home Page (`src/app/page.tsx`)
- Server Component that fetches posts data
- Displays a grid of post cards
- Includes pagination controls
- Uses search params for page navigation

### 3. Post Detail Page (`src/app/posts/[id]/page.tsx`)
- Dynamic route that displays individual post details
- Fetches specific post data based on the ID parameter
- Includes navigation back to the posts list

### 4. Components

#### Card (`src/app/components/Card.tsx`)
- Displays a single post with image, title, and body
- Uses random images from Picsum for visual appeal
- Includes hover effects for interactivity

#### Pagination (`src/app/components/Pagination.tsx`)
- Provides navigation between pages
- Shows current page and total pages
- Disables navigation buttons when at boundaries

### 5. API Service (`src/app/services/api.ts`)
- Contains functions for fetching posts data
- Uses JSONPlaceholder API for mock data
- Implements pagination logic
- Includes error handling for failed requests

## Key Features

- **Server-Side Rendering**: All pages are Server Components for optimal performance
- **Dynamic Routing**: Post detail pages use dynamic routes with `[id]`
- **Pagination**: Client-side pagination with URL-based state
- **Responsive Design**: Uses Tailwind CSS for mobile-first responsive layout
- **TypeScript**: Full TypeScript support for type safety
- **Error Handling**: Graceful handling of API failures

## Data Flow

1. Home page loads and fetches posts for the current page
2. Posts are displayed in a responsive grid
3. Users can navigate between pages using pagination
4. Clicking a post navigates to the detail page
5. Detail page fetches and displays the full post content

## Technologies Used

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **JSONPlaceholder** API for mock data
- **Picsum** for random images

## Running the Application

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.</content>
<parameter name="filePath">c:\Users\Likhith Sai\app router\app\AppCodeExplanation.md