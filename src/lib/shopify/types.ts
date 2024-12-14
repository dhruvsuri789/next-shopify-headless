export type Menu = {
  title: string;
  path: string;
};

export type ShopifyMenuOperation = {
  data: {
    menu?: {
      items: {
        title: string;
        url: string;
      }[];
    };
  };
  variables: {
    handle: string;
  };
};

export const TAGS = {
  collections: "collections",
  products: "products",
  pages: "pages",
  blog: "blog",
  blogPosts: "blogposts",
  blogTags: "blogtags",
  blogAuthors: "blogauthors",
  blogTopics: "blogtopics",
  blogCategories: "blogcategories",
  blogSeries: "blogseries",
  blogPostsByTag: "blogpostsbytag",
};

export const domain = "https://next-js-frontend.myshopify.com";
