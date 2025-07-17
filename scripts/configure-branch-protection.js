#!/usr/bin/env node

/**
 * Script to configure branch protection rules for the main branch
 * This script implements the security requirements specified in the issue:
 * 
 * 1. Enable required pull request reviews before merging
 * 2. Require at least one approving review for pull requests
 * 3. Dismiss stale pull request approvals when new commits are pushed
 * 4. Require status checks to pass before merging
 * 5. Require branches to be up to date before merging
 * 6. Do not allow bypassing the above settings
 */

import { execSync } from 'child_process';

// Configuration for branch protection rules
const BRANCH_PROTECTION_CONFIG = {
  required_status_checks: {
    strict: true, // Require branches to be up to date before merging
    contexts: [
      'build_and_deploy_job', // Azure Static Web Apps CI/CD
      'typescript-check',     // TypeScript compilation check
      'lint-check',          // Code linting check
      'test-check'           // Test suite check
    ]
  },
  enforce_admins: true, // Do not allow bypassing these settings
  required_pull_request_reviews: {
    required_approving_review_count: 1, // Require at least one approving review
    dismiss_stale_reviews: true,         // Dismiss stale reviews when new commits are pushed
    require_code_owner_reviews: false,  // Can be enabled if CODEOWNERS file exists
    require_last_push_approval: false,  // Can be enabled for stricter control
    bypass_pull_request_allowances: {
      users: [],
      teams: [],
      apps: []
    }
  },
  restrictions: null, // No push restrictions (everyone can create PRs)
  allow_force_pushes: false,
  allow_deletions: false,
  block_creations: false
};

/**
 * Get repository information from git remote
 */
function getRepoInfo() {
  try {
    const remoteUrl = execSync('git remote get-url origin', { encoding: 'utf8' }).trim();
    const match = remoteUrl.match(/github\.com[:/]([^/]+)\/([^/.]+)/);
    
    if (!match) {
      throw new Error('Could not parse GitHub repository from remote URL');
    }
    
    return {
      owner: match[1],
      repo: match[2]
    };
  } catch (error) {
    throw new Error(`Failed to get repository info: ${error.message}`);
  }
}

/**
 * Configure branch protection using GitHub CLI
 */
async function configureBranchProtection() {
  const { owner, repo } = getRepoInfo();
  const branch = 'main';
  
  console.log(`Configuring branch protection for ${owner}/${repo}:${branch}`);
  
  try {
    // Check if GitHub CLI is available and authenticated
    execSync('gh auth status', { stdio: 'pipe' });
    
    // Configure branch protection using GitHub CLI
    const protectionCommand = [
      'gh api',
      '--method PUT',
      `/repos/${owner}/${repo}/branches/${branch}/protection`,
      '--input -'
    ].join(' ');
    
    console.log('Applying branch protection rules...');
    execSync(protectionCommand, {
      input: JSON.stringify(BRANCH_PROTECTION_CONFIG),
      stdio: 'inherit'
    });
    
    console.log('✅ Branch protection rules configured successfully!');
    
    // Display the configuration
    console.log('\n📋 Applied configuration:');
    console.log('- Required pull request reviews: ✅ (minimum 1 approval)');
    console.log('- Dismiss stale reviews on new commits: ✅');
    console.log('- Required status checks: ✅');
    console.log('  - Azure Static Web Apps build');
    console.log('  - TypeScript compilation check');
    console.log('  - Linting check');
    console.log('  - Test suite check');
    console.log('- Require branches to be up to date: ✅');
    console.log('- Enforce rules for administrators: ✅');
    console.log('- Allow force pushes: ❌');
    console.log('- Allow deletions: ❌');
    
  } catch (error) {
    if (error.message.includes('gh auth status')) {
      console.error('❌ GitHub CLI is not authenticated.');
      console.error('Please run: gh auth login');
      process.exit(1);
    }
    
    console.error('❌ Failed to configure branch protection:', error.message);
    
    // Provide manual configuration instructions
    console.log('\n📖 Manual Configuration Instructions:');
    console.log('If the automated script fails, you can configure branch protection manually:');
    console.log(`1. Go to https://github.com/${owner}/${repo}/settings/branches`);
    console.log('2. Click "Add rule" for the main branch');
    console.log('3. Configure the following settings:');
    console.log('   ✅ Require a pull request before merging');
    console.log('   ✅ Require approvals (1 minimum)');
    console.log('   ✅ Dismiss stale pull request approvals when new commits are pushed');
    console.log('   ✅ Require status checks to pass before merging');
    console.log('   ✅ Require branches to be up to date before merging');
    console.log('   ✅ Require conversation resolution before merging');
    console.log('   ✅ Do not allow bypassing the above settings');
    console.log('   ❌ Allow force pushes');
    console.log('   ❌ Allow deletions');
    
    process.exit(1);
  }
}

/**
 * Alternative method using curl for environments without GitHub CLI
 */
function configureBranchProtectionWithCurl() {
  const { owner, repo } = getRepoInfo();
  const branch = 'main';
  
  console.log('\n🔧 Alternative: Using curl method');
  console.log('Set the GITHUB_TOKEN environment variable and run:');
  console.log('');
  console.log(`curl -X PUT \\
  -H "Accept: application/vnd.github.v3+json" \\
  -H "Authorization: token $GITHUB_TOKEN" \\
  https://api.github.com/repos/${owner}/${repo}/branches/${branch}/protection \\
  -d '${JSON.stringify(BRANCH_PROTECTION_CONFIG, null, 2)}'`);
}

// Main execution
if (import.meta.url === `file://${process.argv[1]}`) {
  configureBranchProtection().catch(error => {
    console.error('Script execution failed:', error.message);
    configureBranchProtectionWithCurl();
    process.exit(1);
  });
}

export { BRANCH_PROTECTION_CONFIG, configureBranchProtection };