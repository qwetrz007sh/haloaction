module.exports = {
  write: {
    platform: 'notion',
    notion: {
      token: process.env.NOTION_TOKEN,
      databaseId: process.env.NOTION_DATABASE_ID,
      filter:  {property: 'status', select: {equals: '待发布'}}
    }
  },
  deploy: {
    platform: 'halo',
    local: {
      outputDir: './docs',
      filename: 'title',
      format: 'markdown',
    },
    halo: {
      endpoint: process.env.HALO_ENDPOINT,
      token: process.env.HALO_TOKEN,
      policyName: process.env.HALO_POLICY_NAME,
      rowType: 'markdown',
      needUploadImage: false,
    }
  },
  image: {
    enable: true,
    platform: 'github',
    local: {
      outputDir: './docs/images',
      prefixKey: '/images',
      pathFollowDoc: false,
    },
    github: {
      user: process.env.GITHUB_USER,
      token: process.env.GITHUB_TOKEN,
      repo: process.env.GITHUB_REPO,
      branch: process.env.GITHUB_BRANCH, 
      host: process.env.GITHUB_HOST,
      prefixKey: process.env.GITHUB_PREFIXKEY,
    }
  }
}
