export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ed161815451a45e0465771d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-dhd6skan',
                  apiId: '01952ec5-e1c3-408f-8021-d7c0f76d1b1a'
                },
                {
                  buildHookId: '5ed161818d57b88788727c6d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-dqgm3e3p',
                  apiId: '7208ef73-8364-43e0-8a46-9b2e53878fc8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/musy1/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-dqgm3e3p.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
