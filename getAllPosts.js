function importAll(r) {
  return r.keys().map((fileName) => ({
    link: fileName.substr(1).replace(/\/index\.mdx$|index\.mdx/, ''),
    module: r(fileName),
  }))
}

export const currentPosts = importAll(require.context('./pages/blog/', true, /\.mdx$|.js/))
