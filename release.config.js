/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
    "branches": [
        "main"
      ],
      "plugins": [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        "@droidsolutions-oss/semantic-release-update-file",
        "@semantic-release/npm",
        "@droidsolutions-oss/semantic-release-nuget",
        [
          "@semantic-release/git",
          {
            "assets": ["package.json", "package-lock.json", "CHANGELOG.md", "Directory.Build.props"],
            "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
          }
        ],
        "@semantic-release/gitlab"
      ]
  };