# Portfolio 2026 - Modular Structure

This project has been refactored into a clean, modular structure for better maintainability and reusability.

## Project Structure

```
src/
├── app/
│   └── page.tsx                 # Main page component (clean & minimal)
├── components/
│   ├── index.ts                 # Centralized exports
│   ├── layout/
│   │   ├── Header.tsx           # Navigation header
│   │   ├── MobileLayout.tsx     # Mobile-specific layout
│   │   └── DesktopLayout.tsx    # Desktop grid layout
│   └── bento/
│       ├── HeroSection.tsx      # Main hero/intro section
│       ├── PortraitSection.tsx  # Profile image section
│       ├── WorkSection.tsx      # Projects/work display
│       ├── SkillsSection.tsx    # Skills and tools
│       ├── AvailabilitySection.tsx # Work availability status
│       ├── AboutSection.tsx     # About/bio section
│       ├── ContactSection.tsx   # Contact CTA
│       └── SocialsSection.tsx   # Social media links
├── constants/
│   └── data.ts                  # All content data centralized
└── types/
    └── index.ts                 # TypeScript type definitions
```

## Key Benefits

### 🧩 **Modularity**
- Each bento box is a separate, reusable component
- Easy to rearrange, modify, or extend individual sections
- Components can be easily tested in isolation

### 📝 **Centralized Data Management**
- All content is stored in `src/constants/data.ts`
- Easy to update personal information, projects, skills, etc.
- Single source of truth for all portfolio data

### 🔒 **Type Safety**
- Complete TypeScript integration
- Proper interfaces for all components and data
- Compile-time error checking

### 🎨 **Consistent Styling**
- Responsive design preserved across all breakpoints
- Unified styling system with Tailwind CSS
- Proper ultra-wide screen support (1900px+)

### 🔧 **Easy Customization**
- Props-driven components for flexible usage
- Default values with override capability
- Event handlers for interactions

## Usage Examples

### Adding a New Project
```typescript
// In src/constants/data.ts
export const PROJECTS: Project[] = [
  // ... existing projects
  {
    name: "New Project",
    image: "/images/new-project.png",
    hasImage: true,
    description: "Description of the new project"
  }
];
```

### Customizing a Section
```tsx
// Use with custom props
<HeroSection 
  title="Custom Title" 
  className="custom-styles" 
/>

// Or use with default values
<HeroSection />
```

### Handling Interactions
```tsx
<ContactSection 
  onContactClick={() => {
    // Custom contact action
    window.open('mailto:contact@example.com');
  }}
/>
```

## Responsive Design

The layout automatically adapts to different screen sizes:

- **Mobile**: Horizontal scroll layout with touch-friendly interactions
- **Tablet**: 12-column CSS Grid with optimized spacing
- **Desktop**: Enhanced grid with larger text and images  
- **Ultra-wide (1900px+)**: No white space, full viewport utilization

## Development

To modify the portfolio:

1. **Content changes**: Edit `src/constants/data.ts`
2. **Component changes**: Modify individual components in `src/components/`
3. **New sections**: Create new components and add to layout
4. **Styling**: Update Tailwind classes within components
5. **Types**: Add new interfaces in `src/types/index.ts`

This modular approach makes the codebase much more maintainable and allows for easy future enhancements!
