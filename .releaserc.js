module.exports = {
  release: {
    branch: 'master',
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/changelog',
      '@semantic-release/github',
      '@semantic-release/npm',
      '@semantic-release/release-notes-generator',
      '@semantic-release/git'
    ],
  },
};
