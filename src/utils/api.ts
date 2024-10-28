export const getDataResponse = async (url: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`, {
      next: { revalidate: 60 },
    });
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getNestedDataResponse = async (url: string, objectProperty: string) => {
  const res = await getDataResponse(url);
  return res?.data?.flatMap((item: any) => item[objectProperty]);
};

export const reproduce = (data: Array<object>, gap: number) => {
  const first = ~~(Math.random() * (data?.length - gap) + 1);
  const last = first + gap;
  const response = data?.slice(first, last);
  return response;
};
