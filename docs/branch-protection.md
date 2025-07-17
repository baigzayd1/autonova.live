# Branch Protection Configuration

This document outlines the branch protection rules configured for the main branch to enhance security and code quality in this TypeScript-based project.

## Overview

Branch protection rules have been implemented to:
- Prevent direct pushes to the main branch
- Ensure code review process is followed
- Maintain code quality through required reviews and status checks
- Keep the main branch stable and protect it from unintended changes

## Protection Rules Configured

### 1. Required Pull Request Reviews
- **Minimum required reviews**: 1 approval
- **Dismiss stale reviews**: Enabled (when new commits are pushed)
- **Require code owner reviews**: Disabled (can be enabled if CODEOWNERS file is added)

### 2. Required Status Checks
The following status checks must pass before merging:
- **build_and_deploy_job**: Azure Static Web Apps CI/CD build
- **typescript-check**: TypeScript compilation verification  
- **lint-check**: Code linting and style validation
- **test-check**: Test suite execution
- **build-check**: Build artifacts verification
- **security-check**: Security audit for dependencies

### 3. Branch Update Requirements
- **Require branches to be up to date**: Enabled
- Ensures feature branches have latest main branch changes before merging

### 4. Administrative Settings
- **Enforce for administrators**: Enabled
- **Allow force pushes**: Disabled
- **Allow deletions**: Disabled
- No bypassing of protection rules allowed

## Implementation Methods

### Automated Setup (Recommended)

Use the provided script to configure branch protection rules:

```bash
# Ensure GitHub CLI is installed and authenticated
gh auth login

# Run the configuration script
npm run setup-branch-protection
```

### Manual Setup

If automated setup fails, configure manually through GitHub UI:

1. Navigate to `https://github.com/[owner]/[repo]/settings/branches`
2. Click "Add rule" for the main branch
3. Configure the following settings:
   - ✅ Require a pull request before merging
   - ✅ Require approvals (1 minimum)
   - ✅ Dismiss stale pull request approvals when new commits are pushed
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - ✅ Require conversation resolution before merging
   - ✅ Do not allow bypassing the above settings
   - ❌ Allow force pushes
   - ❌ Allow deletions

### API Configuration

For programmatic setup, use the GitHub REST API:

```bash
curl -X PUT \
  -H "Accept: application/vnd.github.v3+json" \
  -H "Authorization: token $GITHUB_TOKEN" \
  https://api.github.com/repos/[owner]/[repo]/branches/main/protection \
  -d @branch-protection-config.json
```

## Workflow Integration

### Enhanced CI/CD Pipeline

The project includes enhanced workflows that provide the required status checks:

#### Code Quality Workflow (`.github/workflows/code-quality.yml`)
- **TypeScript Check**: Validates TypeScript compilation
- **Lint Check**: Runs ESLint for code style validation
- **Test Check**: Executes test suite (if present)
- **Build Check**: Verifies successful build and artifacts
- **Security Check**: Runs npm audit for security vulnerabilities

#### Existing Azure Workflow
- **Build and Deploy**: Continues to handle Azure Static Web Apps deployment

### Status Check Requirements

All status checks must pass before a pull request can be merged:

1. **typescript-check**: Ensures TypeScript compiles without errors
2. **lint-check**: Validates code style and basic quality rules
3. **test-check**: Ensures all tests pass (if tests are present)
4. **build-check**: Verifies the application builds successfully
5. **security-check**: Checks for high-severity security vulnerabilities
6. **build_and_deploy_job**: Azure Static Web Apps deployment validation

## Development Workflow

With branch protection enabled, the development workflow becomes:

1. **Create Feature Branch**: Create a new branch from main
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Develop and Commit**: Make changes and commit to your feature branch
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin feature/your-feature-name
   ```

3. **Create Pull Request**: Open a PR targeting the main branch

4. **Code Review**: Wait for at least one approval from a team member

5. **Status Checks**: Ensure all automated checks pass:
   - TypeScript compilation
   - Code linting
   - Tests (if present)
   - Build verification
   - Security audit

6. **Update Branch**: If main has new commits, update your branch:
   ```bash
   git checkout main
   git pull origin main
   git checkout feature/your-feature-name
   git rebase main
   git push --force-with-lease origin feature/your-feature-name
   ```

7. **Merge**: Once approved and all checks pass, merge via GitHub UI

## Benefits

- **Code Quality**: Mandatory reviews and automated checks maintain high code standards
- **Security**: Prevents unauthorized direct pushes and ensures security audits
- **Stability**: Main branch remains stable through required status checks
- **Collaboration**: Enforces collaborative development through required reviews
- **Transparency**: All changes are tracked through pull requests

## Troubleshooting

### Common Issues

1. **Status checks failing**: Check the Actions tab for detailed error logs
2. **Branch not up to date**: Rebase or merge main branch into your feature branch
3. **Missing required reviews**: Request reviews from team members
4. **GitHub CLI authentication**: Run `gh auth login` to authenticate

### Updating Protection Rules

To modify protection rules, either:
- Update `scripts/configure-branch-protection.js` and re-run
- Modify rules manually through GitHub settings
- Use the GitHub API with updated configuration

## Maintenance

- Review and update required status checks as the project evolves
- Consider adding additional quality gates (e.g., code coverage, performance tests)
- Regularly audit and update the protection rules based on team needs
- Monitor the effectiveness of the rules and adjust as necessary