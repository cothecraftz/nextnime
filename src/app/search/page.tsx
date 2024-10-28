import Search from '@/components/Fragments/Search';
import LoadingSpinner from '@/components/Loading/LoadingSpinner';
import React, { Suspense } from 'react';

export default async function SearchPageAnime(
  props: {
    searchParams?: Promise<{
      query: string;
      type: string;
    }>;
  }
) {
  const searchParams = await props.searchParams;
  return (
    <section className="wrapper">
      <Suspense fallback={<LoadingSpinner />}>
        <Search searchQuery={searchParams?.query!!} searchType={searchParams?.type!!} />
      </Suspense>
    </section>
  );
}
