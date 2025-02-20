import Filter from '@/components/Filter'
import React from 'react'

export default async function page  ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params
  return (
    <div>
      <Filter featured={slug} />
    </div>
  )
}