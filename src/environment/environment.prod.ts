export const environment = {
  production: true,
  apiUrl: 'https://conferidor-de-jogos-production.up.railway.app',
  // outras variáveis de ambiente específicas para produção...

  tokenWhitelistedDomains:[new RegExp('conferidor-de-jogos-production.up.railway.app') ],
  tokenBlacklistedRoutes: [new RegExp('\/oauth\/token')]
};
  