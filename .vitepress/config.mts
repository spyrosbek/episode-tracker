import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/episode-tracker/',
  lang: 'en-US',
  title: "Episode Tracker",
  description: "A VitePress Site for tracking tv episodes",
  head: [
    ['link', { rel: 'icon', href: '/episode-tracker/assets/img/favicon-16.png' }],
  ],
  cleanUrls: true,
  srcDir: './pages',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
});
