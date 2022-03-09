import { gql } from '@apollo/client'
import AdminWrapper from '../../../components/AdminWrapper'
import MUITable from '../../../components/MUITable'

export default function News() {
  return (
    <AdminWrapper>
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
        editPush={(row) => `/admin/news/` + row.id}
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
