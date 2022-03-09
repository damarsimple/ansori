import { gql } from '@apollo/client'
import { Box, Button } from '@mui/material'
import AdminWrapper from '../../../components/AdminWrapper'
import MUITable from '../../../components/MUITable'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function News() {
  const { push } = useRouter()
  return (
    <AdminWrapper>
      <Link href="/admin/news/create">
        <a>
          <Button fullWidth variant="contained">
            Buat Berita
          </Button>
        </a>
      </Link>
      <MUITable<{ id: number; name: string }>
        headcells={[
          {
            name: 'name',
            label: 'Name',
          },
        ]}
        name={'News'}
        keys={'findManyComic'}
        countKeys={'findManyComicCount'}
        countQuery={gql`
          query FindManyComicCount {
            findManyComicCount
          }
        `}
        action={['edit', 'delete']}
        onEdit={(row) => push(`/admin/news/` + row.id)}
        // deleteQuery={gql``}
        query={gql`
          query(
            $take: Int
            $skip: Int
            $orderBy: [ComicOrderByWithRelationInput]
            $where: ComicWhereInput
          ) {
            findManyComic(
              take: $take
              skip: $skip
              orderBy: $orderBy
              where: $where
            ) {
              id
              name
              slug
              thumb
              type
              thumbWide
              altName
              released
              isHentai
              rating
              views
              viewsHourly
              viewsDaily
              viewsWeek
              description
              status
              age
              concept
              lastChapterUpdateAt
              createdAt
              updatedAt
            }
          }
        `}
      />
    </AdminWrapper>
  )
}
