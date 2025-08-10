# Hugo Commands for Content Creation

## Content Creation Commands

### Create New Posts

```bash
# Create a new blog post
hugo new posts/my-new-post/index.md

# Create a new post with date-based naming
hugo new posts/2025-08-10-my-post-title/index.md

# Create a new journal entry
hugo new journal/my-journal-entry.md

# Create a new page
hugo new about.md
```

### Create Content with Specific Archetypes

```bash
# Use default archetype
hugo new posts/my-post.md

# Use custom archetype (if you have one)
hugo new --kind article posts/my-article.md
```

### Create Page Bundles (Recommended)

```bash
# Create a page bundle (folder with index.md + resources)
hugo new posts/my-post-bundle/index.md

# This creates:
# content/posts/my-post-bundle/
# └── index.md
```

## Development Commands

### Local Development

```bash
# Start development server
hugo server

# Start server with drafts included
hugo server -D

# Start server on specific port
hugo server --port 1314

# Start server with live reload disabled
hugo server --disableLiveReload
```

### Building Site

```bash
# Build site for production
hugo

# Build with minification
hugo --minify

# Build and clean destination directory
hugo --cleanDestinationDir

# Build including future-dated content
hugo -F

# Build including expired content
hugo -E
```

## Content Management

### List Content

```bash
# List all content
hugo list all

# List drafts
hugo list drafts

# List expired content
hugo list expired

# List future content
hugo list future
```

### Configuration

```bash
# Check Hugo version
hugo version

# Validate config files
hugo config

# Show environment info
hugo env
```

## Useful Flags

### Common Flags

- `-D, --buildDrafts` - Include content marked as draft
- `-E, --buildExpired` - Include expired content
- `-F, --buildFuture` - Include content with future publish date
- `--cleanDestinationDir` - Remove files from destination not found in static directories
- `--minify` - Minify any supported output format
- `-v, --verbose` - Verbose output
- `--gc` - Enable garbage collection after build

### Server-Specific Flags

- `--bind string` - Interface to bind to (default "127.0.0.1")
- `-p, --port int` - Port to run server on (default 1313)
- `--disableFastRender` - Enable full re-renders on changes
- `--navigateToChanged` - Navigate to changed content file on live browser reload

## Content Organization Tips

### Recommended Structure

```
content/
├── posts/           # Blog posts
│   └── my-post/
│       ├── index.md
│       └── image.jpg
├── journal/         # Journal entries
│   └── entry.md
├── about/           # Static pages
│   └── index.md
└── _index.md        # Homepage content
```

### Frontmatter Examples

```yaml
---
title: "My Blog Post"
date: 2025-08-10T15:04:05Z
draft: false
type: "posts" # Section type
tags: ["tag1", "tag2"]
categories: ["category1"]
summary: "Brief description"
---
```

```yaml
---
title: "Journal Entry"
date: 2025-08-10
type: "journal" # Shows up in /journal/
draft: true # Won't publish until draft: false
---
```

## Quick Workflow

1. **Create new post**: `hugo new posts/my-post/index.md`
2. **Start development**: `hugo server -D`
3. **Edit content** in your editor
4. **Preview** at http://localhost:1313
5. **Remove `draft: true`** when ready to publish
6. **Build for production**: `hugo --minify`

