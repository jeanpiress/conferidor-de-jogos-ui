export const environment = {
    production: false,
    apiUrl: 'http://localhost:8080',
    // outras variáveis de ambiente...


    tokenWhitelistedDomains:[/localhost:8080/],
    tokenBlacklistedRoutes: [/\/oauth\/token/]
  };