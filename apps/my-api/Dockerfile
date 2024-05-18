FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS build-env
WORKDIR /usr/src/app

COPY ./*/ .

ENTRYPOINT ["dotnet", "Project.Apps.MyApi.dll"]


# # Build runtime image
# FROM mcr.microsoft.com/dotnet/aspnet:8.0
# WORKDIR /App
# COPY --from=build-env /App/out .
# ENTRYPOINT ["dotnet", "Project.Apps.MyApi.dll"]