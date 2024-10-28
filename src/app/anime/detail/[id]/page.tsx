import DetailAnime from '@/components/Anime/DetailAnime'

const DetailPage = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  return (
    <section className="wrapper">
      <DetailAnime id={params.id} />
    </section>
  )
}

export default DetailPage
