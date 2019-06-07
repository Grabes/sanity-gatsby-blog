export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cfa48866a0970a86028e7bf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-eyy768c8',
                  apiId: 'ac8ab94a-299e-4704-8e04-38026e005234'
                },
                {
                  buildHookId: '5cfa4886a6a751b89b950a53',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-n5wgxnsz',
                  apiId: '50ac72d2-f70c-4349-b3b6-12d2db5f97fb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Grabes/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-n5wgxnsz.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
