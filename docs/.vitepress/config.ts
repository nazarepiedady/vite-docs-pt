import { defineConfig, DefaultTheme } from 'vitepress'

const ogDescription = 'Ferramental de Frontend de Nova Geração'
const ogImage = 'https://vitejs.dev/og-image.png'
const ogTitle = 'Vite'
const ogUrl = 'https://vitejs.dev'

// netlify envs
const deployURL = process.env.DEPLOY_PRIME_URL || ''
const commitRef = process.env.COMMIT_REF?.slice(0, 8) || 'dev'

const deployType = (() => {
  switch (deployURL) {
    case 'https://main--vite-docs-main.netlify.app':
      return 'main'
    case '':
      return 'local'
    default:
      return 'release'
  }
})()
const additionalTitle = ((): string => {
  switch (deployType) {
    case 'main':
      return ' (ramo principal)'
    case 'local':
      return ' (local)'
    case 'release':
      return ''
  }
})()
const versionLinks = ((): DefaultTheme.NavItemWithLink[] => {
  switch (deployType) {
    case 'main':
    case 'local':
      return [
        {
          text: 'Documentação da Vite 3 (Lançamento)',
          link: 'https://vitejs.dev'
        },
        {
          text: 'Documentação da Vite 2',
          link: 'https://v2.vitejs.dev'
        }
      ]
    case 'release':
      return [
        {
          text: 'Documentação da Vite 2',
          link: 'https://v2.vitejs.dev'
        }
      ]
  }
})()

export default defineConfig({
  title: `Vite${additionalTitle}`,
  description: 'Ferramental de Frontend de Nova Geração',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@vite_js' }],
    ['meta', { name: 'theme-color', content: '#646cff' }]
  ],

  vue: {
    reactivityTransform: true
  },

  themeConfig: {
    logo: '/logo.svg',

    editLink: {
      pattern: 'https://github.com/vitejs/vite/edit/main/docs/:path',
      text: 'Sugerir mudanças para esta página',
    },

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/vite_js' },
      { icon: 'discord', link: 'https://chat.vitejs.dev' },
      { icon: 'github', link: 'https://github.com/vitejs/vite' }
    ],

    algolia: {
      appId: '7H67QR5P0A',
      apiKey: 'deaab78bcdfe96b599497d25acc6460e',
      indexName: 'vitejs',
      searchParameters: {
        facetFilters: ['tags:pt']
      }
    },

    carbonAds: {
      code: 'CEBIEK3N',
      placement: 'vitejsdev'
    },

    localeLinks: {
      text: 'Português',
      items: [
        { text: 'English', link: 'https://vitejs.dev' },
        { text: '简体中文', link: 'https://cn.vitejs.dev' },
        { text: '日本語', link: 'https://ja.vitejs.dev' },
        { text: 'Español', link: 'https://es.vitejs.dev' }
      ]
    },

    footer: {
      message: `Lançada sob a Licença MIT. (${commitRef})`,
      copyright: 'Copyright © 2019-present Evan You & Colaboradores da Vite',
    },

    nav: [
      { text: 'Guia', link: '/guide/', activeMatch: '/guide/' },
      { text: 'Configuração', link: '/config/', activeMatch: '/config/' },
      { text: 'Extensões', link: '/plugins/', activeMatch: '/plugins/' },
      {
        text: 'Recursos',
        items: [
          { text: 'Equipa', link: '/team' },
          {
            items: [
              {
                text: 'Twitter',
                link: 'https://twitter.com/vite_js'
              },
              {
                text: 'Conversa de Discord',
                link: 'https://chat.vitejs.dev'
              },
              {
                text: 'Awesome Vite',
                link: 'https://github.com/vitejs/awesome-vite'
              },
              {
                text: 'Comunidade da DEV',
                link: 'https://dev.to/t/vite'
              },
              {
                text: 'Compatibilidade de Extensões de Rollup',
                link: 'https://vite-rollup-plugins.patak.dev/'
              },
              {
                text: 'Relatório de Mudança',
                link: 'https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md'
              }
            ]
          }
        ]
      },
      {
        text: 'Versão',
        items: versionLinks
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guia',
          items: [
            {
              text: 'Porquê Vite',
              link: '/guide/why'
            },
            {
              text: 'Começar',
              link: '/guide/'
            },
            {
              text: 'Funcionalidades',
              link: '/guide/features'
            },
            {
              text: 'Utilizando Extensões',
              link: '/guide/using-plugins'
            },
            {
              text: 'Pré-Empacotamento de Dependência',
              link: '/guide/dep-pre-bundling'
            },
            {
              text: 'Manipulação de Recurso Estático',
              link: '/guide/assets'
            },
            {
              text: 'Construindo para Produção',
              link: '/guide/build'
            },
            {
              text: 'Desdobrando um Sítio Estático',
              link: '/guide/static-deploy'
            },
            {
              text: 'Modos e Variáveis de Ambiente',
              link: '/guide/env-and-mode'
            },
            {
              text: 'Interpretação no Servidor (SSR)',
              link: '/guide/ssr'
            },
            {
              text: 'Integração de Backend',
              link: '/guide/backend-integration'
            },
            {
              text: 'Comparações',
              link: '/guide/comparisons'
            },
            {
              text: 'Resolução de Problemas',
              link: '/guide/troubleshooting'
            },
            {
              text: 'Migração da v2',
              link: '/guide/migration'
            }
          ]
        },
        {
          text: 'APIs',
          items: [
            {
              text: 'API de Extensão',
              link: '/guide/api-plugin'
            },
            {
              text: 'API de HMR',
              link: '/guide/api-hmr'
            },
            {
              text: 'API de JavaScript',
              link: '/guide/api-javascript'
            },
            {
              text: 'Referência de Configuração',
              link: '/config/'
            }
          ]
        }
      ],
      '/config/': [
        {
          text: 'Configuração',
          items: [
            {
              text: 'Configurando a Vite',
              link: '/config/'
            },
            {
              text: 'Opções Partilhadas',
              link: '/config/shared-options'
            },
            {
              text: 'Opções de Servidor',
              link: '/config/server-options'
            },
            {
              text: 'Opções de Construção',
              link: '/config/build-options'
            },
            {
              text: 'Opções de Pré-Visualização',
              link: '/config/preview-options'
            },
            {
              text: 'Opções de Otimização de Dependência',
              link: '/config/dep-optimization-options'
            },
            {
              text: 'Opções de Interpretação no Servidor',
              link: '/config/ssr-options'
            },
            {
              text: 'Opções de Operário',
              link: '/config/worker-options'
            }
          ]
        }
      ]
    }
  }
})
