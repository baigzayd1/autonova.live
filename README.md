# Autonova.live

A TypeScript-based full-stack web application with React frontend and Express.js backend.

## Branch Protection & Security

This repository implements comprehensive branch protection rules for the main branch to ensure code quality and security:

- **Required pull request reviews** (minimum 1 approval)
- **Automatic dismissal of stale reviews** when new commits are pushed
- **Required status checks** including TypeScript compilation, linting, testing, and security audits
- **Branch update requirements** before merging
- **No bypassing of protection rules** (applies to all users including administrators)

For detailed information, see [Branch Protection Documentation](docs/branch-protection.md).

### Setting Up Branch Protection

To configure branch protection rules automatically:

```bash
# Ensure GitHub CLI is installed and authenticated
gh auth login

# Run the configuration script
npm run setup-branch-protection
```

## Development

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
npm install --legacy-peer-deps
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run check` - TypeScript compilation check
- `npm run db:push` - Push database schema changes
- `npm run setup-branch-protection` - Configure GitHub branch protection rules

### Development Workflow

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes and commit them
3. Push your branch: `git push origin feature/your-feature`
4. Create a pull request targeting the main branch
5. Ensure all status checks pass and get at least one approval
6. Merge via GitHub when all requirements are met

## Project Structure

- `client/` - React frontend application
- `server/` - Express.js backend server
- `shared/` - Shared TypeScript types and utilities
- `scripts/` - Automation scripts including branch protection setup
- `docs/` - Project documentation

## CI/CD

The project uses GitHub Actions for continuous integration and deployment:

- **Azure Static Web Apps** - Automatic deployment on main branch
- **Code Quality Checks** - TypeScript, linting, testing, and security validation
- **Branch Protection** - Automated enforcement of code quality standards