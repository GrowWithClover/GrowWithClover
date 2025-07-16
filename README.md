# Clover - Magical Marketing Agency

## Overview

This project is a modern full-stack web application for "Clover," a magical marketing agency. Built with React, TypeScript, and Express.js, it features a mystical design theme with emerald green and gold colors, magical animations, and fantasy-inspired elements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight router)
- **Styling**: Tailwind CSS with custom magical theme
- **UI Components**: Radix UI with shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions and magical effects
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API**: RESTful endpoints for contact form submission
- **Development**: Vite for development server and HMR

### Database Strategy
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Shared schema definitions using Drizzle and Zod
- **Storage**: In-memory storage for development (MemStorage class)
- **Migration**: Drizzle Kit for database migrations

## Key Components

### Frontend Components
- **Custom UI Components**: 
  - `MagicalButton` - Themed buttons with magical styling
  - `SectionCard` - Fantasy-styled cards with variants (mystical, grimoire, scroll)
  - `MeshBackground` - Animated background with mesh patterns
- **Page Structure**: Single-page application with home page featuring sections for hero, services, pricing, testimonials, and contact
- **Form Handling**: Contact form with validation and toast notifications

### Backend Services
- **Contact API**: Handles form submissions with validation
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Error Handling**: Centralized error handling middleware

### Design System
- **Typography**: Cinzel and Crimson Text fonts for magical elegance
- **Color Palette**: 
  - Emerald dark/medium for primary elements
  - Soft gold for accents
  - Rich black backgrounds
- **Theming**: CSS custom properties for consistent styling

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form (name, email, message)
   - Form validation using Zod schema
   - API request to `/api/contact` endpoint
   - Data stored via storage interface
   - Success/error feedback via toast notifications

2. **Data Validation**:
   - Shared schema definitions between frontend and backend
   - Type-safe data handling with TypeScript
   - Runtime validation with Zod

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, React DOM
- **Routing**: Wouter
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Components**: Radix UI primitives, shadcn/ui components
- **Forms**: React Hook Form, @hookform/resolvers
- **Animations**: Framer Motion
- **State**: TanStack React Query
- **Validation**: Zod
- **Utilities**: date-fns, embla-carousel-react

### Backend Dependencies
- **Server**: Express.js
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Validation**: Zod, drizzle-zod
- **Session**: connect-pg-simple
- **Development**: tsx, esbuild

### Development Tools
- **Build Tool**: Vite with React plugin
- **TypeScript**: Full type checking
- **Linting**: Built-in TypeScript checking
- **Replit Integration**: Custom plugins for development environment

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Static Assets**: Served from `dist/public` in production

### Environment Configuration
- **Development**: Uses tsx for TypeScript execution
- **Production**: Compiled JavaScript with Node.js
- **Database**: PostgreSQL via environment variable `DATABASE_URL`

### Hosting Considerations
- **Static Files**: Frontend assets served by Express in production
- **Database**: Configured for Neon serverless PostgreSQL
- **Sessions**: PostgreSQL-based session storage ready for production

The application is designed as a showcase website with a contact form, making it suitable for deployment on platforms like Replit, Vercel, or traditional hosting with PostgreSQL support.