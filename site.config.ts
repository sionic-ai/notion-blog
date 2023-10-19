import { siteConfig } from './lib/site-config'

export default siteConfig({
    // the site's root Notion page (required)
    rootNotionPageId: 'bd4842bd31fc4d72adde231f15721005',

    // if you want to restrict pages to a single notion workspace (optional)
    // (this should be a Notion ID; see the docs for how to extract this)
    rootNotionSpaceId: null,

    // basic site info (required)
    name: 'Sionic AI Blog',
    domain: 'blog.sionic.ai',
    author: 'Sionic AI',

    // open graph metadata (optional)
    description: 'Create your AI today: simply, quickly, and economically',

    // social usernames (optional)
    //   twitter: 'transitive_bs',
    github: 'sionic-ai',
    linkedin: 'sionic-ai-inc',
    // mastodon: '#', // optional mastodon profile URL, provides link verification
    // newsletter: '#', // optional newsletter URL
    // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

    // default notion icon and cover images for site-wide consistency (optional)
    // page-specific values will override these site-wide defaults
    defaultPageIcon: null,
    defaultPageCover: null,
    defaultPageCoverPosition: 0.5,

    // whether or not to enable support for LQIP preview images (optional)
    isPreviewImageSupportEnabled: true,

    // whether or not redis is enabled for caching generated preview images (optional)
    // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
    // environment variables. see the readme for more info
    isRedisEnabled: false,

    // map of notion page IDs to URL paths (optional)
    // any pages defined here will override their default URL paths
    // example:
    //
    pageUrlOverrides: {
      '/member': '7c768cf6232642f0b16f011c3deafa16',
      '/culture': 'c4f1ed7068394e70bda372ee9d50c267',
      '/joinus': 'a2440456488c4ae5bd7cacd283532fba',
      '/articles': '4e12ecd4a88a4bd9ab811f470a4b1038',
    },
    // pageUrlOverrides: null,

    // whether to use the default notion navigation style or a custom one with links to
    // important pages
    //   navigationStyle: 'default'
    navigationStyle: 'custom',
    navigationLinks: [
        {
            title: 'Member',
            pageId: '7c768cf6232642f0b16f011c3deafa16'
        },
        {
            title: 'Culture',
            pageId: 'c4f1ed7068394e70bda372ee9d50c267'
        },
        {
            title: 'Join us!',
            pageId: 'a2440456488c4ae5bd7cacd283532fba'
        },
        {
            title: 'Articles',
            pageId: '4e12ecd4a88a4bd9ab811f470a4b1038'
        }
    ]
})
