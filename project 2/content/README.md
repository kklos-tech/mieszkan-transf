# Content Management System

This folder contains all editable content for the Mieszkancom website. All text and images should be managed through these folders for easy updates.

## Folder Structure

```
content/
├── projects/           # Project portfolio items
│   └── YYYYMMDD--Project-Name/
│       ├── info.txt    # Project description (filename format: YYYYMMDD--Project-Name.txt)
│       ├── 001-Title.jpg  # Images (001 is hero/thumbnail, 002+)
│       ├── 002-Title.jpg
│       └── ...
├── testimonials/       # Client testimonials
│   └── testimonial-01.txt
├── faq/               # Frequently asked questions
│   └── question-01.txt
└── contact/           # Contact information
    └── info.txt
```

## How to Add/Edit Content

### Projects

1. Create a new folder in `content/projects/` with format: `YYYYMMDD--Project-Name`
   - Example: `20251105--Pink-House`

2. Inside the folder:
   - Create a text file: `YYYYMMDD--Project-Name.txt`
   - Add the project description inside this file
   - Add images with naming: `001-Title.jpg`, `002-Title.jpg`, etc.
   - The first image (001) will be used as the hero image and thumbnail

### Testimonials

Create text files in `content/testimonials/`:
- Format: `testimonial-XX.txt`
- Content format:
  ```
  Name: Jan Kowalski
  Project: Mieszkanie 75m²
  Year: 2024
  Quote: Bardzo polecam współpracę z Mieszkancom...
  ```

### FAQ

Create text files in `content/faq/`:
- Format: `question-XX.txt`
- Content format:
  ```
  Question: Czym jest projektowanie ergonomiczne?
  Answer: Projektowanie ergonomiczne to podejście...
  ```

### Contact Information

Edit `content/contact/info.txt`:
```
Email: kontakt@mieszkancom.pl
Phone: +48 123 456 789
Location: Polska
```

## Polish Language Support

All content files should be in Polish. Use proper Polish characters:
- ą, ć, ę, ł, ń, ó, ś, ź, ż

## Image Guidelines

- Format: JPG or PNG
- Recommended size: 1920x1080 for project images
- File naming: Use descriptive titles in the filename
- Example: `001-Living-Room.jpg`, `002-Kitchen-Design.jpg`

## Updating the Website

After adding or editing content:
1. The website will automatically scan these folders
2. New content will appear on the site without code changes
3. Keep the naming conventions consistent for proper parsing
