# Overview

This is a full-stack web application built with React on the frontend and Express.js on the backend. The application appears to be a movie database or TMDB (The Movie Database) clone, designed to display movie information including details like "Guardians of the Galaxy Vol. 2". The project uses modern web technologies including TypeScript, Tailwind CSS, and shadcn/ui components for a polished user interface.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Hookform Resolvers for form validation

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API structure with proxy endpoints for external services
- **External API Integration**: OMDB API proxy to fetch movie data while avoiding CORS issues
- **Development Server**: Custom Vite integration for hot module replacement during development

## Data Storage Solutions
- **Database**: PostgreSQL configured with Drizzle ORM
- **Database Client**: Neon Database serverless driver for cloud PostgreSQL
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Session Storage**: PostgreSQL-based session storage using connect-pg-simple
- **In-Memory Storage**: Temporary MemStorage implementation for development/testing

## Authentication and Authorization
- **User Management**: Basic user schema with username/password authentication
- **Session Management**: Express sessions with PostgreSQL backing store
- **Data Validation**: Zod schemas for type-safe data validation
- **Security**: Planned implementation with existing user storage interface

## External Dependencies
- **Movie Data**: OMDB API integration for fetching movie information
- **UI Components**: Extensive Radix UI component library for accessible UI elements
- **Database**: Neon Database for serverless PostgreSQL hosting
- **Development Tools**: Replit-specific plugins for development environment integration
- **Styling**: Font Awesome for icons, Google Fonts (Inter) for typography
- **Date Handling**: date-fns library for date manipulation and formatting

The architecture follows a modern full-stack pattern with clear separation between frontend and backend concerns, utilizing cloud-native database solutions and external APIs for content delivery.