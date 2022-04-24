const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://docs.haptic.finance/',
    gaTrackingId: null,
    trailingSlash: true,
  },
  header: {
    logo: 'https://raw.githubusercontent.com/HapticFinance/assets/29e2f5a27dd86bc1b08fc933d7fae149b790827f/logo-horizontal.svg',
    logoLink: 'https://haptic.finance/',
    title:
      "<a href='https://docs.haptic.finance'><img class='img-responsive' src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/learn-logo.svg' alt='Haptic Logo' /></a>",
    githubUrl: 'https://github.com/hapticfinance/docs',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/hapticfinance" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discord.gg/ahJVRvjyzk" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: true,
      indexName: 'index',
    },
    forcedNavOrder:{
      enabled: false,
    }
  },
  sidebar: {
    forcedNavOrder: [
      //'/basics', // add trailing slash if enabled above
      //'/borrowers',
    ],
    collapsedNav: [
      '/basics', // add trailing slash if enabled above
    ],
    links: [{ text: 'Haptic Finance', link: 'https://haptic.finance/' }],
    frontline: false,
    ignoreIndex: true,
    // title:
    //   "Docs",
  },
  siteMetadata: {
    title: 'Haptic Documentation',
    description: 'Haptic Finance Docs',
    ogImage: null,
    docsLocation: 'https://github.com/HapticFinance/docs/',
    favicon: 'https://raw.githubusercontent.com/HapticFinance/assets/main/favicon.ico',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
