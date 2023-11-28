// ProductHunt API schema is broken and can't generate valid types
// so here we go

export interface ProductHuntPost {
  id: number;
  name: string;
  tagline: string;
  url: string;
  thumbnail: {
    url: string;
  };
  topics: {
    nodes: {
      name: string;
    }[];
  };
}

export interface ProductHuntPosts {
  posts: {
    nodes: ProductHuntPost[]
  };
}