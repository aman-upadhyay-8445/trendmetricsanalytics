# Push to GitHub - Quick Guide

## ✅ Your files are already committed!

Your code has been committed locally. Now follow these steps to push to GitHub:

---

## Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon in the top right corner
3. Select **New repository**
4. Fill in:
   - **Repository name:** `trendmetrics-intelligence` (or any name you prefer)
   - **Description:** "TrendMetrics Intelligence - Intelligent Analytics. Clear Decisions."
   - **Visibility:** Choose **Public** or **Private**
   - **⚠️ IMPORTANT:** Do NOT check "Initialize with README" (we already have files)
5. Click **Create repository**

---

## Step 2: Connect and Push

After creating the repository, GitHub will show you commands. Use these:

### Option A: If you haven't added a remote yet

Open Terminal and run:

```bash
cd /Users/amankumar/Desktop/Aman

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/trendmetrics-intelligence.git

# Push to GitHub
git push -u origin main
```

### Option B: If remote already exists

```bash
cd /Users/amankumar/Desktop/Aman

# Check current remote
git remote -v

# If you need to update the remote URL:
git remote set-url origin https://github.com/YOUR_USERNAME/trendmetrics-intelligence.git

# Push to GitHub
git push -u origin main
```

---

## Step 3: Authentication

When you run `git push`, you'll be prompted for:
- **Username:** Your GitHub username
- **Password:** Use a **Personal Access Token** (not your GitHub password)

### How to create a Personal Access Token:

1. Go to GitHub → Settings → Developer settings
2. Click **Personal access tokens** → **Tokens (classic)**
3. Click **Generate new token (classic)**
4. Give it a name: "TrendMetrics Intelligence"
5. Select scopes: Check **repo** (full control of private repositories)
6. Click **Generate token**
7. **Copy the token immediately** (you won't see it again!)
8. Use this token as your password when pushing

---

## Step 4: Verify

After pushing, refresh your GitHub repository page. You should see all your files!

---

## Quick Commands Reference

```bash
# Navigate to project
cd /Users/amankumar/Desktop/Aman

# Check status
git status

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/trendmetrics-intelligence.git

# Push to GitHub
git push -u origin main

# For future updates
git add .
git commit -m "Your update message"
git push
```

---

## Troubleshooting

### "Repository not found"
- Make sure the repository name matches exactly
- Check that you're using the correct GitHub username
- Verify the repository exists on GitHub

### "Permission denied"
- Use Personal Access Token instead of password
- Make sure the token has `repo` scope

### "Remote origin already exists"
```bash
# Remove existing remote
git remote remove origin

# Add new remote
git remote add origin https://github.com/aman-upadhyay-8445/trendmetricsanalytics.git
```

---

## Next Steps After Pushing

1. **Enable GitHub Pages** (to host your website):
   - Go to repository → Settings → Pages
   - Source: Deploy from branch
   - Branch: `main` / `/ (root)`
   - Save
   - Your site will be live at: `https://YOUR_USERNAME.github.io/trendmetrics-intelligence/`

2. **Update Google Apps Script** (if needed):
   - If using a custom domain, update the form URL in `contact.html`

---

## Need Help?

- GitHub Docs: https://docs.github.com
- Git Tutorial: https://git-scm.com/docs

