export const environment = {
    production: false,
    apiUrl: 'https://conferidor-de-jogos-production.up.railway.app',
    // outras variáveis de ambiente...


    tokenWhitelistedDomains:[ new RegExp('conferidor-de-jogos-production.up.railway.app') ],
    tokenBlacklistedRoutes: [new RegExp('\/oauth\/token')] 
  };