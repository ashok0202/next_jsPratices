import React from 'react'

export default function Page({ params }: { params: { slug?: string[] } }) {
  const slug = params.slug || []

  if (slug.length === 2) {
    return (
      <div>
        <h2>Viewing docs for feature {slug[0]} and concept {slug[1]}</h2>
      </div>
    )
  } else if (slug.length === 1) {
    return (
      <div>
        <h2>Viewing docs for feature {slug[0]}</h2>
      </div>
    )
  }

  return <div>page</div>
}
