'use client'

import { gql, useSuspenseQuery } from "@apollo/client";

type Props = {
  id: number
  onClose: () => void
}

type PostDetails = {
  post: {
    id: number
    name: string
    tagline: string
    description: string
    url: string
  }
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

function PostDetails({ id, onClose }: Props) {
  const { data } = useSuspenseQuery<PostDetails>(query, { variables: { id } })

  return <div className="fixed z-20 bg-gray-500/75 w-screen h-screen overflow-y-auto top-16 left-0 flex items-center justify-center" onClick={onClose}>
    <div className="rounded bg-white border border-gray-300 p-16 w-full max-w-4xl">
      {data?.post && <>
        <h2 className="text-xl">
          <div className="font-bold">{data.post.name}</div>
          <div className="text-gray-500 ">{data.post.tagline}</div>
        </h2>
        <div className="mt-12">{data.post.description}</div>
      </>}
    </div>
  </div>
}

export default PostDetails