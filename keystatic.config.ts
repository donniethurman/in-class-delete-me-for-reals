import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',          // save files on this computer
  },

  collections: {
    posts: collection({
      label: 'Posts',                       // name shown in the dashboard
      slugField: 'title',                   // title also becomes the file name
      path: 'src/content/posts/*',          // * is replaced by the slug
      format: { contentField: 'content' },  // this field becomes the body
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },
});