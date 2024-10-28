import { prisma } from '@/libs/prisma/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function DELETE(request: NextRequest, props: { params: Promise<{ deleteId: string }> }) {
  const params = await props.params;
  const colections = await prisma.mangaComment.delete({ where: { id: params.deleteId } })
  if (!colections) return NextResponse.json({ status: false, message: 'gagal hapus comment' })
  return NextResponse.json({ status: true, message: 'berhasil hapus comment' })
}
