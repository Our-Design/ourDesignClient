# Blog System Documentation

## Overview
This blog system is designed to be easily scalable and maintainable. Adding new blog posts requires minimal code changes - just add the data and everything else is handled automatically.

## Project Structure

```
src/
├── app/
│   └── blogs/
│       ├── page.tsx              # Blog listing page
│       └── [slug]/
│           ├── page.tsx          # Blog detail page
│           └── loading.tsx       # Loading component
├── data/
│   └── blogs.ts                  # Blog data and utilities
└── types/
    └── index.ts                  # TypeScript type definitions
```

## Adding New Blog Posts

### Step 1: Add Blog Data
Edit `src/data/blogs.ts` and add a new blog object to the `blogPosts` array:

```typescript
{
  id: 4, // Use the next available ID
  slug: "your-blog-slug", // URL-friendly version of title
  category: "Design Trends", // Category for filtering
  title: "Your Blog Title",
  description: "Brief description for SEO and previews",
  content: `
    <h2>Your Content Here</h2>
    <p>Use HTML for rich content formatting...</p>
  `,
  date: "January 15, 2025", // Publication date
  readTime: "5 min read", // Estimated reading time
  image: "/your-image.jpg", // Image path in public folder
  author: {
    name: "Author Name",
    avatar: "/author-avatar.jpg"
  },
  tags: ["Tag1", "Tag2", "Tag3"], // SEO tags
  featured: false // Set to true for featured posts
}
```

### Step 2: Add Images (Optional)
Place your images in the `public/` folder. The system automatically handles image optimization through Next.js.

### Step 3: That's It!
The system automatically:
- Generates static routes for each blog post
- Creates SEO metadata
- Handles responsive design
- Provides related article suggestions
- Manages navigation and breadcrumbs

## Features

### Blog Listing Page
- **Hero Section**: Eye-catching header with category filters
- **Featured Posts**: Special highlighted posts with larger layout
- **Grid Layout**: Responsive card-based design
- **Newsletter Signup**: Email collection for marketing
- **Hover Effects**: Smooth animations and transitions

### Blog Detail Page
- **SEO Optimized**: Automatic meta tags and structured data
- **Responsive Hero**: Full-width image with overlay content
- **Rich Content**: HTML support with custom styling
- **Social Sharing**: Twitter, Facebook, LinkedIn buttons
- **Related Articles**: Automatic suggestions based on category
- **Breadcrumb Navigation**: Easy navigation structure
- **Tags System**: Topic-based organization

### Technical Features
- **Static Generation**: Fast loading with pre-built pages
- **TypeScript**: Full type safety and IntelliSense
- **Responsive Design**: Mobile-first approach
- **SEO Friendly**: Meta tags, structured data, clean URLs
- **Performance Optimized**: Image optimization, lazy loading
- **Accessibility**: Screen reader friendly, keyboard navigation

## Content Guidelines

### Slug Format
- Use lowercase letters, numbers, and hyphens only
- Keep it concise but descriptive
- Example: "top-10-interior-design-trends-2025"

### Content HTML
- Use semantic HTML tags (h2, h3, p, strong, etc.)
- Keep paragraphs short for better readability
- Use h2 for main sections, h3 for subsections
- Include **Pro Tips** and **Examples** for engagement

### Images
- Use high-quality, relevant images
- Optimize for web (recommended: 800px wide, WebP format)
- Provide descriptive alt text
- Use consistent aspect ratios for grid layouts

### Categories
Current categories include:
- Design Trends
- Sustainability
- Space Planning
- Technology
- Color & Styling

Add new categories as needed - the system automatically handles filtering.

## Styling

The blog system uses the project's design system with:
- **Primary Color**: Deep blue (#011640)
- **Secondary Background**: Warm off-white (#fff7f1)
- **Accent Colors**: Soft pink (#ffd6d6) for highlights
- **Typography**: Clean, readable fonts with proper hierarchy
- **Shadows**: Subtle depth with hover enhancements

## Performance Considerations

- All images are automatically optimized by Next.js
- Static generation ensures fast page loads
- CSS is scoped and optimized
- Font loading is optimized
- No external dependencies for basic functionality

## Future Enhancements

Possible additions (requires development):
- Search functionality
- Category filtering
- Author pages
- Comments system
- Reading progress indicator
- Table of contents
- Print styling
- Dark mode support
