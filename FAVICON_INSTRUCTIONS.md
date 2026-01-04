# Favicon Generation Instructions

The favicon has been set up to use the shield icon from the logo. To generate a proper favicon.ico file:

## Option 1: Online Converter (Recommended)
1. Use an online SVG to ICO converter (e.g., https://convertio.co/svg-ico/)
2. Upload `logo/shield-icon.svg`
3. Generate favicon.ico in sizes: 16x16, 32x32
4. Save as `favicon.ico` in the root directory

## Option 2: Use SVG as Favicon (Modern Browsers)
Modern browsers support SVG favicons. The current setup references `favicon.ico`, but you can also add this to the `<head>` of each HTML file:

```html
<link rel="icon" type="image/svg+xml" href="logo/shield-icon.svg">
```

## Option 3: ImageMagick (Command Line)
If you have ImageMagick installed:
```bash
convert logo/shield-icon.svg -resize 32x32 favicon.ico
```

The shield icon is already extracted and available at `logo/shield-icon.svg`.

