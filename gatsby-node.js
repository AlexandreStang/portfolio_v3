const path = require('path')

// exports.createPages: Exports the createPages function, a Gatsby Node API, which is called during the build process.
// async ({graphql, actions}): Marks the function as asynchronous, allowing the use of await for promises.
exports.createPages = async ({graphql, actions}) => {

    // await graphql(...): Waits for the query to complete, ensuring data is populated before proceeding.
    // const { data }: Extracts the data object containing the query result.
    const {data} = await graphql(` 
        query CreateProjects {
            projects: allMarkdownRemark(
                filter: {frontmatter: {isActive: {eq: true}}}
            ) {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
        }
    `)

    // Loops through each node (Markdown file) to create a page.
    data.projects.nodes.forEach(node => {
        actions.createPage({
            // Specifies the URL for the new page.
            path: '/projects/' + node.frontmatter.slug,
            // Specifies the React component that will be used to render this page.
            component: path.resolve('./src/templates/project-details.js'),
            // Passes additional data (as query variable $slug) to the page's context
            context: {slug: node.frontmatter.slug}
        })
    })

}