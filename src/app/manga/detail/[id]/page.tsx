import DetailManga from '@/components/Manga/DetailManga'

const DetailPage = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  return (
    <section className="wrapper">
      <DetailManga id={params.id} />
    </section>
  )
}

export default DetailPage
