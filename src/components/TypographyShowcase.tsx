'use client';

import React from 'react';

const AppleTypographyShowcase: React.FC = () => {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section - Apple Style */}
      <section className="py-16 px-6 text-center">
        <h1 className="text-display-large font-display text-bold text-balance mb-6">
          Think different.
        </h1>
        <p className="text-title-2 font-display text-regular text-secondary text-balance max-w-4xl mx-auto">
          Typography that follows Apple's Human Interface Guidelines for clarity, 
          legibility, and visual hierarchy.
        </p>
      </section>

      {/* Display Typography */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-title-1 font-display text-semibold mb-8 text-secondary">Display Typography</h2>
          <div className="space-y-8">
            <div>
              <p className="text-caption-1 text-tertiary mb-2">DISPLAY LARGE</p>
              <h1 className="text-display-large font-display text-bold">Innovation</h1>
            </div>
            <div>
              <p className="text-caption-1 text-tertiary mb-2">DISPLAY</p>
              <h1 className="text-display font-display text-semibold">Design Excellence</h1>
            </div>
            <div>
              <p className="text-caption-1 text-tertiary mb-2">TITLE LARGE</p>
              <h1 className="text-title-large font-display text-semibold">Beautiful Interface</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content Typography */}
      <section className="py-12 px-6 bg-gray-1">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-title-1 font-display text-semibold mb-8">Content Typography</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-title-2 font-display text-semibold mb-4">Headings</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-caption-1 text-tertiary mb-1">TITLE 1</p>
                  <h1 className="text-title-1 font-display text-semibold">Primary Heading</h1>
                </div>
                <div>
                  <p className="text-caption-1 text-tertiary mb-1">TITLE 2</p>
                  <h2 className="text-title-2 font-display text-semibold">Secondary Heading</h2>
                </div>
                <div>
                  <p className="text-caption-1 text-tertiary mb-1">TITLE 3</p>
                  <h3 className="text-title-3 font-display text-semibold">Tertiary Heading</h3>
                </div>
                <div>
                  <p className="text-caption-1 text-tertiary mb-1">HEADLINE</p>
                  <h4 className="text-headline font-sans text-semibold">Emphasized Content</h4>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-title-2 font-display text-semibold mb-4">Body Text</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-caption-1 text-tertiary mb-1">BODY LARGE</p>
                  <p className="text-body-large font-sans text-regular">
                    Large body text for important introductions and primary content sections.
                  </p>
                </div>
                <div>
                  <p className="text-caption-1 text-tertiary mb-1">BODY</p>
                  <p className="text-body font-sans text-regular">
                    Standard body text for main content. This is the primary reading size with optimal line height and spacing.
                  </p>
                </div>
                <div>
                  <p className="text-caption-1 text-tertiary mb-1">CALLOUT</p>
                  <p className="text-callout font-sans text-regular">
                    Callout text for emphasized information and important details that need attention.
                  </p>
                </div>
                <div>
                  <p className="text-caption-1 text-tertiary mb-1">SUBHEADLINE</p>
                  <p className="text-subheadline font-sans text-regular">
                    Subheadline text for secondary information and supporting content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Elements */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-title-1 font-display text-semibold mb-8">Interactive Elements</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-title-3 font-display text-semibold mb-4">Buttons & Links</h3>
              <div className="flex flex-wrap gap-4">
                <button className="text-button-large font-sans text-medium bg-accent text-white px-6 py-3 rounded-full text-interactive transition-all duration-300 ease-apple hover:bg-accent-hover">
                  Learn more
                </button>
                <button className="text-button font-sans text-medium border border-accent text-accent px-4 py-2 rounded-full text-interactive transition-all duration-300 ease-apple hover:bg-accent hover:text-white">
                  Get started
                </button>
                <a href="#" className="text-callout font-sans text-medium text-accent text-interactive">
                  View details →
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-title-3 font-display text-semibold mb-4">Labels & Captions</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-label font-sans text-semibold text-tertiary">SECTION LABEL</p>
                  <p className="text-body font-sans text-regular">Associated content follows the label</p>
                </div>
                <div>
                  <p className="text-footnote font-sans text-regular text-secondary">
                    Footnote text for disclaimers, legal text, and additional information.
                  </p>
                </div>
                <div>
                  <p className="text-caption-1 font-sans text-regular text-tertiary">
                    Caption text for image descriptions and metadata.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Content */}
      <section className="py-12 px-6 bg-gray-1">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-title-1 font-display text-semibold mb-8">Technical Content</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-title-3 font-display text-semibold mb-4">Code & Technical Text</h3>
              <p className="text-body font-sans text-regular mb-4">
                When referencing code, use <span className="text-code">inline code formatting</span> for 
                variables, function names, and <span className="text-code">technical terms</span>.
              </p>
              <div className="bg-background p-6 rounded-lg border border-gray-2">
                <pre className="text-code font-mono text-regular text-tertiary">
{`// Apple-style code block
const portfolio = {
  typography: 'SF Pro',
  design: 'Human Interface Guidelines',
  accessibility: true
};`}
                </pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-title-3 font-display text-semibold mb-4">Color Variants</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-body font-sans text-regular">Primary Text</p>
                  <p className="text-body font-sans text-secondary">Secondary Text</p>
                  <p className="text-body font-sans text-tertiary">Tertiary Text</p>
                </div>
                <div>
                  <p className="text-body font-sans text-accent">Accent Color</p>
                  <p className="text-body font-sans text-emphasis">Emphasis Gradient</p>
                  <p className="text-body font-sans text-interactive text-accent">Interactive Link</p>
                </div>
                <div>
                  <p className="text-footnote font-sans text-regular text-gray-4">Gray Scale</p>
                  <p className="text-footnote font-sans text-regular text-gray-5">Subtle Text</p>
                  <p className="text-caption-1 font-sans text-regular text-gray-4">Micro Text</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weight & Style Variants */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-title-1 font-display text-semibold mb-8">Font Weights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-title-3 font-display text-semibold mb-4">Light Weights</h3>
              <div className="space-y-2">
                <p className="text-body font-display text-ultralight">Ultralight (100)</p>
                <p className="text-body font-display text-thin">Thin (200)</p>
                <p className="text-body font-display text-light">Light (300)</p>
              </div>
            </div>
            <div>
              <h3 className="text-title-3 font-display text-semibold mb-4">Medium Weights</h3>
              <div className="space-y-2">
                <p className="text-body font-display text-regular">Regular (400)</p>
                <p className="text-body font-display text-medium">Medium (500)</p>
                <p className="text-body font-display text-semibold">Semibold (600)</p>
              </div>
            </div>
            <div>
              <h3 className="text-title-3 font-display text-semibold mb-4">Heavy Weights</h3>
              <div className="space-y-2">
                <p className="text-body font-display text-bold">Bold (700)</p>
                <p className="text-body font-display text-heavy">Heavy (800)</p>
                <p className="text-body font-display text-black">Black (900)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppleTypographyShowcase;
