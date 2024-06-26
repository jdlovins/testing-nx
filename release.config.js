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
        "@droidsolutions-oss/semantic-release-nuget",
        [
          "@semantic-release/git",
          {
            "assets": ["package.json", "package-lock.json", "CHANGELOG.md", "Directory.Build.props"],
            "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
          }
        ]
      ],
      "nugetServer": "https://nuget.pkg.github.com/jdlovins/index.json",
      "projectPath": "apps/my-api/Project.Apps.MyApi.csproj",
      "files": [
        {
          "path": ["Directory.Build.props"], // configure update-file plugin to update fields in Directory.Build.props
          "type": "xml",
          "replacements": [
            {
              "key": "VersionPrefix",
              "value": "${nextRelease.version}"
            },
            {
              "key": "RepositoryCommit",
              "value": "${CI_COMMIT_SHA}"
            }
          ]
        }
      ]
  };