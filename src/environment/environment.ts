export const environment = {
    production: false,
    apiUrl: 'http://localhost:8080',
    // outras variáveis de ambiente...


    tokenWhitelistedDomains:[ new RegExp('localhost:8080') ],
    tokenBlacklistedRoutes: [new RegExp('\/oauth\/token')] 
  };