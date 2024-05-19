/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  "branches": ['+([0-9])?(.{+([0-9]),x}).x', 'master', 'main', 'next-major', {
    name: 'beta',
    prerelease: true
  }, {
    name: 'alpha',
    prerelease: true
  }],
  "plugins": [
    "@droidsolutions-oss/semantic-release-update-file",
    "@semantic-release/npm",
    "@droidsolutions-oss/semantic-release-nuget",
    [
      "@semantic-release/git",
      {
        "assets": ["package.json", "package-lock.json", "Directory.Build.props"],
        "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ],
    "@semantic-release/github"
  ],
  "nugetServer": "https://nuget.pkg.github.com/jdlovins/index.json",
  "projectPath": "apps/my-api/Project.Apps.MyApi.csproj",
  "files": [{
      "path": ["apps/my-api/Directory.Build.props"], // configure update-file plugin to update fields in Directory.Build.props
      "type": "xml",
      "replacements": [{
        "key": "Version",
        "value": "${nextRelease.version}"
      }]
    }
  ]
};
