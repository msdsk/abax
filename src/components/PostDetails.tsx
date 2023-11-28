'use client'

import { gql, useSuspenseQuery } from "@apollo/client";

type Props = {
  id: number
}

type PostDetails = {
  id: number
  name: string
  tagline: string
  description: string
  url: string
}

const query = gql`
  query PostDetailsQuery($id: ID!) {
    post(id: $id) {
      id
      name
      tagline
      description
      url
    }
  }
`;

function PostDetails({ id }: Props) {
  const { data } = useSuspenseQuery<PostDetails>(query, { variables: { id } })

  return <div role="dialog" aria-modal="true">

  </div>
}

export default PostDetails