/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
    "branches": [
        "main"
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