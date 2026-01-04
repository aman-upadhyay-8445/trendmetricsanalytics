# How to Upload Your Website to GitHub

## Method 1: Using Command Line (Recommended)

### Step 1: Initialize Git Repository

Open Terminal (Mac) or Command Prompt (Windows) and navigate to your project folder:

```bash
cd /Users/amankumar/Desktop/Aman
```

Initialize a Git repository:

```bash
git init
```

### Step 2: Add All Files

Add all your files to Git:

```bash
git add .
```

### Step 3: Create Initial Commit

Commit your files with a message:

```bash
git commit -m "Initial commit: ClarioDash Studio website"
```

### Step 4: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon in the top right
3. Select **New repository**
4. Repository name: `clariodash-studio` (or any name you prefer)
5. Description: "ClarioDash Studio - Premium analytics & dashboard consulting studio"
6. Choose **Public** or **Private**
7. **DO NOT** initialize with README, .gitignore, or license (we already have files)
8. Click **Create repository**

### Step 5: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/YOUR_USERNAME/clariodash-studio.git
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 6: Push to GitHub

Push your code to GitHub:

```bash
git branch -M main
git push -u origin main
```

You'll be prompted for your GitHub username and password (or use a Personal Access Token).

---

## Method 2: Using GitHub Desktop (Easier for Beginners)

### Step 1: Download GitHub Desktop

1. Go to [desktop.github.com](https://desktop.github.com)
2. Download and install GitHub Desktop
3. Sign in with your GitHub account

### Step 2: Create Repository

1. Open GitHub Desktop
2. Click **File** → **Add Local Repository**
3. Click **Choose...** and select your project folder: `/Users/amankumar/Desktop/Aman`
4. Click **Add Repository**

### Step 3: Commit Files

1. You'll see all your files listed
2. In the bottom left, type a commit message: "Initial commit: ClarioDash Studio website"
3. Click **Commit to main**

### Step 4: Publish to GitHub

1. Click **Publish repository** button at the top
2. Name your repository: `clariodash-studio`
3. Add description: "ClarioDash Studio - Premium analytics & dashboard consulting studio"
4. Choose **Public** or **Private**
5. Click **Publish Repository**

---

## Method 3: Using GitHub Web Interface (For Small Projects)

### Step 1: Create Repository on GitHub

1. Go to [github.com](https://github.com) and sign in
2. Click **+** → **New repository**
3. Name: `clariodash-studio`
4. Click **Create repository**

### Step 2: Upload Files

1. On the repository page, click **uploading an existing file**
2. Drag and drop all your files from `/Users/amankumar/Desktop/Aman`
3. Scroll down, add commit message: "Initial commit: ClarioDash Studio website"
4. Click **Commit changes**

---

## After Uploading: Next Steps

### 1. Enable GitHub Pages (To Host Your Website)

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch and **/ (root)** folder
6. Click **Save**
7. Your site will be live at: `https://YOUR_USERNAME.github.io/clariodash-studio/`

### 2. Update Google Apps Script URL (If Needed)

If you're using GitHub Pages, you may need to update the form submission URL in `contact.html` to match your new domain.

### 3. Add README.md (Optional)

Create a README.md file to describe your project:

```markdown
# ClarioDash Studio

Premium analytics & dashboard consulting studio helping founders and growing businesses automate reporting, visualize KPIs, and make confident data-driven decisions.

## Features

- Automated reporting setup
- Executive KPI dashboards
- Growth & funnel analytics
- Monthly reporting support

## Tech Stack

- HTML5
- Tailwind CSS
- Chart.js
- Google Apps Script
```

---

## Troubleshooting

### Issue: "Permission denied" error

**Solution:** Use a Personal Access Token instead of password:
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token
3. Use token as password when pushing

### Issue: "Repository not found"

**Solution:** Check that:
- Repository name is correct
- You're signed in to the right GitHub account
- Repository exists on GitHub

### Issue: Files not showing on GitHub

**Solution:** 
- Make sure you committed: `git commit -m "message"`
- Make sure you pushed: `git push -u origin main`

---

## Quick Command Reference

```bash
# Navigate to project
cd /Users/amankumar/Desktop/Aman

# Initialize Git
git init

# Add all files
git add .

# Commit
git commit -m "Your commit message"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/clariodash-studio.git

# Push to GitHub
git push -u origin main

# For future updates
git add .
git commit -m "Update: description of changes"
git push
```

---

## Recommended Repository Structure

Your repository should look like this:

```
clariodash-studio/
├── index.html
├── contact.html
├── services.html
├── about.html
├── case-studies.html
├── google-apps-script.js
├── .gitignore
├── README.md
└── (other files)
```

---

## Security Note

⚠️ **Important:** The `google-apps-script.js` file contains your Google Apps Script Web App URL. If your repository is public, anyone can see it. Consider:

1. Making the repository **Private** if it contains sensitive information
2. Using environment variables for sensitive URLs (for advanced setups)
3. The Web App URL is already public, so this is usually fine

---

## Need Help?

- GitHub Docs: [docs.github.com](https://docs.github.com)
- Git Tutorial: [git-scm.com/docs](https://git-scm.com/docs)
- GitHub Desktop Guide: [desktop.github.com/help](https://desktop.github.com/help)

