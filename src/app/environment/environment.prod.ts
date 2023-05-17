export const environment = {
    production: true,
    apiUrl: 'https://api.example.com',
    // outras variáveis de ambiente específicas para produção...

    tokenWhitelistedDomains:[/api.example.com/],
    tokenBlacklistedRoutes: [/\/oauth\/token/]
  };
  