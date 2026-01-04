# Fix: 403 Permission Denied Error

## 🔴 Problem
```
remote: Permission to aman-upadhyay-8445/trendmetricsanalytics.git denied to Aman8185.
fatal: unable to access 'https://github.com/aman-upadhyay-8445/trendmetricsanalytics.git/': The requested URL returned error: 403
```

**Issue:** Git is trying to authenticate as `Aman8185` but the repository belongs to `aman-upadhyay-8445`.

---

## ✅ Solution: Clear Cached Credentials

### Step 1: Clear macOS Keychain Credentials

```bash
cd /Users/amankumar/Desktop/Aman

# Clear GitHub credentials from macOS keychain
git credential-osxkeychain erase <<EOF
host=github.com
protocol=https
EOF
```

### Step 2: Update Remote URL (if needed)

```bash
# Make sure remote is correct
git remote set-url origin https://github.com/aman-upadhyay-8445/trendmetricsanalytics.git

# Verify
git remote -v
```

### Step 3: Push Again (will prompt for credentials)

```bash
git push origin main
```

**When prompted:**
- **Username:** `aman-upadhyay-8445` (NOT Aman8185)
- **Password:** [Paste your Personal Access Token for aman-upadhyay-8445]

---

## Alternative: Use Token in URL (Temporary)

If clearing credentials doesn't work:

```bash
# Replace YOUR_TOKEN with your Personal Access Token for aman-upadhyay-8445
git remote set-url origin https://YOUR_TOKEN@github.com/aman-upadhyay-8445/trendmetricsanalytics.git

# Push
git push origin main

# After successful push, remove token from URL for security
git remote set-url origin https://github.com/aman-upadhyay-8445/trendmetricsanalytics.git
```

---

## Method 2: Use SSH Instead (Recommended)

### Step 1: Generate SSH Key (if you don't have one)

```bash
# Check if you have SSH key
ls -la ~/.ssh/id_ed25519.pub

# If not, generate one:
ssh-keygen -t ed25519 -C "your_email@example.com"
# Press Enter 3 times (use default location, no passphrase)
```

### Step 2: Add SSH Key to GitHub

```bash
# Copy your public key
cat ~/.ssh/id_ed25519.pub
# Copy the entire output
```

Then:
1. Go to: https://github.com/settings/keys
2. Click **New SSH key**
3. Title: "MacBook Air" (or any name)
4. Paste your public key
5. Click **Add SSH key**

### Step 3: Change Remote to SSH

```bash
cd /Users/amankumar/Desktop/Aman

# Change to SSH
git remote set-url origin git@github.com:aman-upadhyay-8445/trendmetricsanalytics.git

# Test connection
ssh -T git@github.com
# Should say: "Hi aman-upadhyay-8445! You've successfully authenticated..."

# Push (no password needed!)
git push origin main
```

---

## Method 3: Use GitHub CLI (Easiest)

```bash
# Install GitHub CLI
brew install gh

# Authenticate
gh auth login
# Follow prompts, select:
# - GitHub.com
# - HTTPS
# - Login with a web browser
# - Authenticate as: aman-upadhyay-8445

# Push
git push origin main
```

---

## Quick Fix Commands

Copy and paste this entire block:

```bash
cd /Users/amankumar/Desktop/Aman

# Clear cached credentials
git credential-osxkeychain erase <<EOF
host=github.com
protocol=https
EOF

# Verify remote
git remote set-url origin https://github.com/aman-upadhyay-8445/trendmetricsanalytics.git

# Push (will ask for credentials)
git push origin main
# Username: aman-upadhyay-8445
# Password: [Your Personal Access Token]
```

---

## Verify Your Token

Make sure your Personal Access Token is for the correct account:
1. Go to: https://github.com/settings/tokens
2. Verify you're logged in as `aman-upadhyay-8445`
3. Check that your token has `repo` scope
4. If token is for wrong account, create a new one for `aman-upadhyay-8445`

---

## Still Not Working?

Check which account Git thinks you're using:

```bash
# Check git config
git config --global user.name
git config --global user.email

# Update if needed
git config --global user.name "aman-upadhyay-8445"
git config --global user.email "your_email@example.com"
```



