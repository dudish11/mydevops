FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["oren_and_kobi_console.csproj", "./"]
RUN dotnet restore "./oren_and_kobi_console.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "oren_and_kobi_console.csproj" -c Release -o /app/build
FROM build AS publish
RUN dotnet publish "oren_and_kobi_console.csproj" -c Release -o /app/publish
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "oren_and_kobi_console.dll"]