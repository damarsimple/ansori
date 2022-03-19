/* eslint-disable */
//@ts-nocheck
// *******************************************************
// *******************************************************
//
// GENERATED FILE, DO NOT MODIFY
//
// Made by Victor Garcia ®
//
// https://github.com/victorgarciaesgi
// *******************************************************
// *******************************************************
// 💙

export type Maybe<T> = T | null;

export interface ImageGallery {
  id: number;
  name: string;
  description: Maybe<string>;
  image: Maybe<string>;
  createdAt: undefined;
  updatedAt: undefined;
}

export interface Member {
  id: number;
  name: string;
  role: string;
  description: Maybe<string>;
  image: Maybe<string>;
  createdAt: undefined;
  updatedAt: undefined;
}

export interface Donation {
  id: number;
  name: string;
  message: Maybe<string>;
  amount: number;
  accountId: number;
  account: DonationAccount;
  status: DonationStatus;
  approvedById: Maybe<number>;
  approvedBy: Maybe<User>;
  createdAt: undefined;
  updatedAt: undefined;
}

export interface DonationAccount {
  id: number;
  name: string;
  accountNumber: string;
  bankName: string;
  logoUrl: string;
  donations: Donation[];
  _count: DonationAccountCountOutputType;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  news: News[];
  _count: CategoryCountOutputType;
}

export interface News {
  id: number;
  published: boolean;
  title: string;
  author: Maybe<User>;
  authorId: Maybe<number>;
  slug: string;
  categories: Category[];
  createdAt: undefined;
  updatedAt: undefined;
  views: number;
  potrait: Maybe<string>;
  wide: Maybe<string>;
  content: string;
  description: Maybe<string>;
  _count: NewsCountOutputType;
}

export interface User {
  id: number;
  email: string;
  name: Maybe<string>;
  profilePicture: Maybe<string>;
  password: string;
  news: News[];
  approvedDonations: Donation[];
  showOnHomepage: boolean;
  roles: Roles;
  createdAt: undefined;
  updatedAt: undefined;
  _count: UserCountOutputType;
}

export interface BatchPayload {
  count: number;
}

export enum UserScalarFieldEnum {
  Id = 'id',
  Email = 'email',
  Name = 'name',
  Profilepicture = 'profilePicture',
  Password = 'password',
  Showonhomepage = 'showOnHomepage',
  Roles = 'roles',
  Createdat = 'createdAt',
  Updatedat = 'updatedAt',
}
export enum MemberScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Role = 'role',
  Description = 'description',
  Image = 'image',
  Createdat = 'createdAt',
  Updatedat = 'updatedAt',
}
export enum ImageGalleryScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Description = 'description',
  Image = 'image',
  Createdat = 'createdAt',
  Updatedat = 'updatedAt',
}
export enum NewsScalarFieldEnum {
  Id = 'id',
  Published = 'published',
  Title = 'title',
  Authorid = 'authorId',
  Slug = 'slug',
  Createdat = 'createdAt',
  Updatedat = 'updatedAt',
  Views = 'views',
  Potrait = 'potrait',
  Wide = 'wide',
  Content = 'content',
  Description = 'description',
}
export enum CategoryScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Slug = 'slug',
}
export enum DonationAccountScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Accountnumber = 'accountNumber',
  Bankname = 'bankName',
  Logourl = 'logoUrl',
}
export enum DonationScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Message = 'message',
  Amount = 'amount',
  Accountid = 'accountId',
  Status = 'status',
  Approvedbyid = 'approvedById',
  Createdat = 'createdAt',
  Updatedat = 'updatedAt',
}
export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}
export enum Roles {
  Master_admin = 'MASTER_ADMIN',
  Admin = 'ADMIN',
  Editor = 'EDITOR',
  User = 'USER',
}
export enum DonationStatus {
  Pending = 'PENDING',
  Approved = 'APPROVED',
  Rejected = 'REJECTED',
}
export interface UserWhereInput {
  AND?: UserWhereInput[];
  OR?: UserWhereInput[];
  NOT?: UserWhereInput[];
  id?: IntFilter;
  email?: StringFilter;
  name?: StringNullableFilter;
  profilePicture?: StringNullableFilter;
  news?: NewsListRelationFilter;
  approvedDonations?: DonationListRelationFilter;
  showOnHomepage?: BoolFilter;
  roles?: EnumRolesFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}

export interface UserOrderByWithRelationInput {
  id?: SortOrder;
  email?: SortOrder;
  name?: SortOrder;
  profilePicture?: SortOrder;
  news?: NewsOrderByRelationAggregateInput;
  approvedDonations?: DonationOrderByRelationAggregateInput;
  showOnHomepage?: SortOrder;
  roles?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface UserWhereUniqueInput {
  id?: number;
  email?: string;
}

export interface UserOrderByWithAggregationInput {
  id?: SortOrder;
  email?: SortOrder;
  name?: SortOrder;
  profilePicture?: SortOrder;
  showOnHomepage?: SortOrder;
  roles?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  _count?: UserCountOrderByAggregateInput;
  _avg?: UserAvgOrderByAggregateInput;
  _max?: UserMaxOrderByAggregateInput;
  _min?: UserMinOrderByAggregateInput;
  _sum?: UserSumOrderByAggregateInput;
}

export interface UserScalarWhereWithAggregatesInput {
  AND?: UserScalarWhereWithAggregatesInput[];
  OR?: UserScalarWhereWithAggregatesInput[];
  NOT?: UserScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  email?: StringWithAggregatesFilter;
  name?: StringNullableWithAggregatesFilter;
  profilePicture?: StringNullableWithAggregatesFilter;
  showOnHomepage?: BoolWithAggregatesFilter;
  roles?: EnumRolesWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
}

export interface MemberWhereInput {
  AND?: MemberWhereInput[];
  OR?: MemberWhereInput[];
  NOT?: MemberWhereInput[];
  id?: IntFilter;
  name?: StringFilter;
  role?: StringFilter;
  description?: StringNullableFilter;
  image?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}

export interface MemberOrderByWithRelationInput {
  id?: SortOrder;
  name?: SortOrder;
  role?: SortOrder;
  description?: SortOrder;
  image?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface MemberWhereUniqueInput {
  id?: number;
}

export interface MemberOrderByWithAggregationInput {
  id?: SortOrder;
  name?: SortOrder;
  role?: SortOrder;
  description?: SortOrder;
  image?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  _count?: MemberCountOrderByAggregateInput;
  _avg?: MemberAvgOrderByAggregateInput;
  _max?: MemberMaxOrderByAggregateInput;
  _min?: MemberMinOrderByAggregateInput;
  _sum?: MemberSumOrderByAggregateInput;
}

export interface MemberScalarWhereWithAggregatesInput {
  AND?: MemberScalarWhereWithAggregatesInput[];
  OR?: MemberScalarWhereWithAggregatesInput[];
  NOT?: MemberScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  name?: StringWithAggregatesFilter;
  role?: StringWithAggregatesFilter;
  description?: StringNullableWithAggregatesFilter;
  image?: StringNullableWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
}

export interface ImageGalleryWhereInput {
  AND?: ImageGalleryWhereInput[];
  OR?: ImageGalleryWhereInput[];
  NOT?: ImageGalleryWhereInput[];
  id?: IntFilter;
  name?: StringFilter;
  description?: StringNullableFilter;
  image?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}

export interface ImageGalleryOrderByWithRelationInput {
  id?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  image?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ImageGalleryWhereUniqueInput {
  id?: number;
}

export interface ImageGalleryOrderByWithAggregationInput {
  id?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  image?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  _count?: ImageGalleryCountOrderByAggregateInput;
  _avg?: ImageGalleryAvgOrderByAggregateInput;
  _max?: ImageGalleryMaxOrderByAggregateInput;
  _min?: ImageGalleryMinOrderByAggregateInput;
  _sum?: ImageGallerySumOrderByAggregateInput;
}

export interface ImageGalleryScalarWhereWithAggregatesInput {
  AND?: ImageGalleryScalarWhereWithAggregatesInput[];
  OR?: ImageGalleryScalarWhereWithAggregatesInput[];
  NOT?: ImageGalleryScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  name?: StringWithAggregatesFilter;
  description?: StringNullableWithAggregatesFilter;
  image?: StringNullableWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
}

export interface NewsWhereInput {
  AND?: NewsWhereInput[];
  OR?: NewsWhereInput[];
  NOT?: NewsWhereInput[];
  id?: IntFilter;
  published?: BoolFilter;
  title?: StringFilter;
  author?: UserWhereInput;
  authorId?: IntNullableFilter;
  slug?: StringFilter;
  categories?: CategoryListRelationFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  views?: IntFilter;
  potrait?: StringNullableFilter;
  wide?: StringNullableFilter;
  content?: StringFilter;
  description?: StringNullableFilter;
}

export interface NewsOrderByWithRelationInput {
  id?: SortOrder;
  published?: SortOrder;
  title?: SortOrder;
  author?: UserOrderByWithRelationInput;
  authorId?: SortOrder;
  slug?: SortOrder;
  categories?: CategoryOrderByRelationAggregateInput;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  views?: SortOrder;
  potrait?: SortOrder;
  wide?: SortOrder;
  content?: SortOrder;
  description?: SortOrder;
}

export interface NewsWhereUniqueInput {
  id?: number;
  slug?: string;
}

export interface NewsOrderByWithAggregationInput {
  id?: SortOrder;
  published?: SortOrder;
  title?: SortOrder;
  authorId?: SortOrder;
  slug?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  views?: SortOrder;
  potrait?: SortOrder;
  wide?: SortOrder;
  content?: SortOrder;
  description?: SortOrder;
  _count?: NewsCountOrderByAggregateInput;
  _avg?: NewsAvgOrderByAggregateInput;
  _max?: NewsMaxOrderByAggregateInput;
  _min?: NewsMinOrderByAggregateInput;
  _sum?: NewsSumOrderByAggregateInput;
}

export interface NewsScalarWhereWithAggregatesInput {
  AND?: NewsScalarWhereWithAggregatesInput[];
  OR?: NewsScalarWhereWithAggregatesInput[];
  NOT?: NewsScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  published?: BoolWithAggregatesFilter;
  title?: StringWithAggregatesFilter;
  authorId?: IntNullableWithAggregatesFilter;
  slug?: StringWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
  views?: IntWithAggregatesFilter;
  potrait?: StringNullableWithAggregatesFilter;
  wide?: StringNullableWithAggregatesFilter;
  content?: StringWithAggregatesFilter;
  description?: StringNullableWithAggregatesFilter;
}

export interface CategoryWhereInput {
  AND?: CategoryWhereInput[];
  OR?: CategoryWhereInput[];
  NOT?: CategoryWhereInput[];
  id?: IntFilter;
  name?: StringFilter;
  slug?: StringFilter;
  news?: NewsListRelationFilter;
}

export interface CategoryOrderByWithRelationInput {
  id?: SortOrder;
  name?: SortOrder;
  slug?: SortOrder;
  news?: NewsOrderByRelationAggregateInput;
}

export interface CategoryWhereUniqueInput {
  id?: number;
  slug?: string;
}

export interface CategoryOrderByWithAggregationInput {
  id?: SortOrder;
  name?: SortOrder;
  slug?: SortOrder;
  _count?: CategoryCountOrderByAggregateInput;
  _avg?: CategoryAvgOrderByAggregateInput;
  _max?: CategoryMaxOrderByAggregateInput;
  _min?: CategoryMinOrderByAggregateInput;
  _sum?: CategorySumOrderByAggregateInput;
}

export interface CategoryScalarWhereWithAggregatesInput {
  AND?: CategoryScalarWhereWithAggregatesInput[];
  OR?: CategoryScalarWhereWithAggregatesInput[];
  NOT?: CategoryScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  name?: StringWithAggregatesFilter;
  slug?: StringWithAggregatesFilter;
}

export interface DonationAccountWhereInput {
  AND?: DonationAccountWhereInput[];
  OR?: DonationAccountWhereInput[];
  NOT?: DonationAccountWhereInput[];
  id?: IntFilter;
  name?: StringFilter;
  accountNumber?: StringFilter;
  bankName?: StringFilter;
  logoUrl?: StringFilter;
  donations?: DonationListRelationFilter;
}

export interface DonationAccountOrderByWithRelationInput {
  id?: SortOrder;
  name?: SortOrder;
  accountNumber?: SortOrder;
  bankName?: SortOrder;
  logoUrl?: SortOrder;
  donations?: DonationOrderByRelationAggregateInput;
}

export interface DonationAccountWhereUniqueInput {
  id?: number;
}

export interface DonationAccountOrderByWithAggregationInput {
  id?: SortOrder;
  name?: SortOrder;
  accountNumber?: SortOrder;
  bankName?: SortOrder;
  logoUrl?: SortOrder;
  _count?: DonationAccountCountOrderByAggregateInput;
  _avg?: DonationAccountAvgOrderByAggregateInput;
  _max?: DonationAccountMaxOrderByAggregateInput;
  _min?: DonationAccountMinOrderByAggregateInput;
  _sum?: DonationAccountSumOrderByAggregateInput;
}

export interface DonationAccountScalarWhereWithAggregatesInput {
  AND?: DonationAccountScalarWhereWithAggregatesInput[];
  OR?: DonationAccountScalarWhereWithAggregatesInput[];
  NOT?: DonationAccountScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  name?: StringWithAggregatesFilter;
  accountNumber?: StringWithAggregatesFilter;
  bankName?: StringWithAggregatesFilter;
  logoUrl?: StringWithAggregatesFilter;
}

export interface DonationWhereInput {
  AND?: DonationWhereInput[];
  OR?: DonationWhereInput[];
  NOT?: DonationWhereInput[];
  id?: IntFilter;
  name?: StringFilter;
  message?: StringNullableFilter;
  amount?: FloatFilter;
  accountId?: IntFilter;
  account?: DonationAccountWhereInput;
  status?: EnumDonationStatusFilter;
  approvedById?: IntNullableFilter;
  approvedBy?: UserWhereInput;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}

export interface DonationOrderByWithRelationInput {
  id?: SortOrder;
  name?: SortOrder;
  message?: SortOrder;
  amount?: SortOrder;
  accountId?: SortOrder;
  account?: DonationAccountOrderByWithRelationInput;
  status?: SortOrder;
  approvedById?: SortOrder;
  approvedBy?: UserOrderByWithRelationInput;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface DonationWhereUniqueInput {
  id?: number;
}

export interface DonationOrderByWithAggregationInput {
  id?: SortOrder;
  name?: SortOrder;
  message?: SortOrder;
  amount?: SortOrder;
  accountId?: SortOrder;
  status?: SortOrder;
  approvedById?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  _count?: DonationCountOrderByAggregateInput;
  _avg?: DonationAvgOrderByAggregateInput;
  _max?: DonationMaxOrderByAggregateInput;
  _min?: DonationMinOrderByAggregateInput;
  _sum?: DonationSumOrderByAggregateInput;
}

export interface DonationScalarWhereWithAggregatesInput {
  AND?: DonationScalarWhereWithAggregatesInput[];
  OR?: DonationScalarWhereWithAggregatesInput[];
  NOT?: DonationScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  name?: StringWithAggregatesFilter;
  message?: StringNullableWithAggregatesFilter;
  amount?: FloatWithAggregatesFilter;
  accountId?: IntWithAggregatesFilter;
  status?: EnumDonationStatusWithAggregatesFilter;
  approvedById?: IntNullableWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
}

export interface UserCreateInput {
  email: string;
  name?: string;
  profilePicture?: string;
  news?: NewsCreateNestedManyWithoutAuthorInput;
  approvedDonations?: DonationCreateNestedManyWithoutApprovedByInput;
  showOnHomepage?: boolean;
  roles: Roles;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface UserUncheckedCreateInput {
  id?: number;
  email: string;
  name?: string;
  profilePicture?: string;
  news?: NewsUncheckedCreateNestedManyWithoutAuthorInput;
  approvedDonations?: DonationUncheckedCreateNestedManyWithoutApprovedByInput;
  showOnHomepage?: boolean;
  roles: Roles;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface UserUpdateInput {
  email?: StringFieldUpdateOperationsInput;
  name?: NullableStringFieldUpdateOperationsInput;
  profilePicture?: NullableStringFieldUpdateOperationsInput;
  news?: NewsUpdateManyWithoutAuthorInput;
  approvedDonations?: DonationUpdateManyWithoutApprovedByInput;
  showOnHomepage?: BoolFieldUpdateOperationsInput;
  roles?: EnumRolesFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface UserUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  name?: NullableStringFieldUpdateOperationsInput;
  profilePicture?: NullableStringFieldUpdateOperationsInput;
  news?: NewsUncheckedUpdateManyWithoutAuthorInput;
  approvedDonations?: DonationUncheckedUpdateManyWithoutApprovedByInput;
  showOnHomepage?: BoolFieldUpdateOperationsInput;
  roles?: EnumRolesFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface UserCreateManyInput {
  id?: number;
  email: string;
  name?: string;
  profilePicture?: string;
  showOnHomepage?: boolean;
  roles: Roles;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface UserUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  name?: NullableStringFieldUpdateOperationsInput;
  profilePicture?: NullableStringFieldUpdateOperationsInput;
  showOnHomepage?: BoolFieldUpdateOperationsInput;
  roles?: EnumRolesFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface MemberCreateInput {
  name: string;
  role: string;
  description?: string;
  image?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface MemberUncheckedCreateInput {
  id?: number;
  name: string;
  role: string;
  description?: string;
  image?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface MemberUpdateInput {
  name?: StringFieldUpdateOperationsInput;
  role?: StringFieldUpdateOperationsInput;
  description?: NullableStringFieldUpdateOperationsInput;
  image?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface MemberUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  role?: StringFieldUpdateOperationsInput;
  description?: NullableStringFieldUpdateOperationsInput;
  image?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface MemberCreateManyInput {
  id?: number;
  name: string;
  role: string;
  description?: string;
  image?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface MemberUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  role?: StringFieldUpdateOperationsInput;
  description?: NullableStringFieldUpdateOperationsInput;
  image?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ImageGalleryCreateInput {
  name: string;
  description?: string;
  image?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ImageGalleryUncheckedCreateInput {
  id?: number;
  name: string;
  description?: string;
  image?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ImageGalleryUpdateInput {
  name?: StringFieldUpdateOperationsInput;
  description?: NullableStringFieldUpdateOperationsInput;
  image?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ImageGalleryUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  description?: NullableStringFieldUpdateOperationsInput;
  image?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ImageGalleryCreateManyInput {
  id?: number;
  name: string;
  description?: string;
  image?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ImageGalleryUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  description?: NullableStringFieldUpdateOperationsInput;
  image?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface NewsCreateInput {
  published?: boolean;
  title: string;
  author?: UserCreateNestedOneWithoutNewsInput;
  slug: string;
  categories?: CategoryCreateNestedManyWithoutNewsInput;
  createdAt?: undefined;
  updatedAt?: undefined;
  views?: number;
  potrait?: string;
  wide?: string;
  content: string;
  description?: string;
}

export interface NewsUncheckedCreateInput {
  id?: number;
  published?: boolean;
  title: string;
  authorId?: number;
  slug: string;
  categories?: CategoryUncheckedCreateNestedManyWithoutNewsInput;
  createdAt?: undefined;
  updatedAt?: undefined;
  views?: number;
  potrait?: string;
  wide?: string;
  content: string;
  description?: string;
}

export interface NewsUpdateInput {
  published?: BoolFieldUpdateOperationsInput;
  title?: StringFieldUpdateOperationsInput;
  author?: UserUpdateOneWithoutNewsInput;
  slug?: StringFieldUpdateOperationsInput;
  categories?: CategoryUpdateManyWithoutNewsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  views?: IntFieldUpdateOperationsInput;
  potrait?: NullableStringFieldUpdateOperationsInput;
  wide?: NullableStringFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  description?: NullableStringFieldUpdateOperationsInput;
}

export interface NewsUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput;
  published?: BoolFieldUpdateOperationsInput;
  title?: StringFieldUpdateOperationsInput;
  authorId?: NullableIntFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
  categories?: CategoryUncheckedUpdateManyWithoutNewsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  views?: IntFieldUpdateOperationsInput;
  potrait?: NullableStringFieldUpdateOperationsInput;
  wide?: NullableStringFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  description?: NullableStringFieldUpdateOperationsInput;
}

export interface NewsCreateManyInput {
  id?: number;
  published?: boolean;
  title: string;
  authorId?: number;
  slug: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  views?: number;
  potrait?: string;
  wide?: string;
  content: string;
  description?: string;
}

export interface NewsUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput;
  published?: BoolFieldUpdateOperationsInput;
  title?: StringFieldUpdateOperationsInput;
  authorId?: NullableIntFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  views?: IntFieldUpdateOperationsInput;
  potrait?: NullableStringFieldUpdateOperationsInput;
  wide?: NullableStringFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  description?: NullableStringFieldUpdateOperationsInput;
}

export interface CategoryCreateInput {
  name: string;
  slug: string;
  news?: NewsCreateNestedManyWithoutCategoriesInput;
}

export interface CategoryUncheckedCreateInput {
  id?: number;
  name: string;
  slug: string;
  news?: NewsUncheckedCreateNestedManyWithoutCategoriesInput;
}

export interface CategoryUpdateInput {
  name?: StringFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
  news?: NewsUpdateManyWithoutCategoriesInput;
}

export interface CategoryUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
  news?: NewsUncheckedUpdateManyWithoutCategoriesInput;
}

export interface CategoryCreateManyInput {
  id?: number;
  name: string;
  slug: string;
}

export interface CategoryUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
}

export interface DonationAccountCreateInput {
  name: string;
  accountNumber: string;
  bankName: string;
  logoUrl: string;
  donations?: DonationCreateNestedManyWithoutAccountInput;
}

export interface DonationAccountUncheckedCreateInput {
  id?: number;
  name: string;
  accountNumber: string;
  bankName: string;
  logoUrl: string;
  donations?: DonationUncheckedCreateNestedManyWithoutAccountInput;
}

export interface DonationAccountUpdateInput {
  name?: StringFieldUpdateOperationsInput;
  accountNumber?: StringFieldUpdateOperationsInput;
  bankName?: StringFieldUpdateOperationsInput;
  logoUrl?: StringFieldUpdateOperationsInput;
  donations?: DonationUpdateManyWithoutAccountInput;
}

export interface DonationAccountUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  accountNumber?: StringFieldUpdateOperationsInput;
  bankName?: StringFieldUpdateOperationsInput;
  logoUrl?: StringFieldUpdateOperationsInput;
  donations?: DonationUncheckedUpdateManyWithoutAccountInput;
}

export interface DonationAccountCreateManyInput {
  id?: number;
  name: string;
  accountNumber: string;
  bankName: string;
  logoUrl: string;
}

export interface DonationAccountUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  accountNumber?: StringFieldUpdateOperationsInput;
  bankName?: StringFieldUpdateOperationsInput;
  logoUrl?: StringFieldUpdateOperationsInput;
}

export interface DonationCreateInput {
  name: string;
  message?: string;
  amount: number;
  account: DonationAccountCreateNestedOneWithoutDonationsInput;
  status: DonationStatus;
  approvedBy?: UserCreateNestedOneWithoutApprovedDonationsInput;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface DonationUncheckedCreateInput {
  id?: number;
  name: string;
  message?: string;
  amount: number;
  accountId: number;
  status: DonationStatus;
  approvedById?: number;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface DonationUpdateInput {
  name?: StringFieldUpdateOperationsInput;
  message?: NullableStringFieldUpdateOperationsInput;
  amount?: FloatFieldUpdateOperationsInput;
  account?: DonationAccountUpdateOneRequiredWithoutDonationsInput;
  status?: EnumDonationStatusFieldUpdateOperationsInput;
  approvedBy?: UserUpdateOneWithoutApprovedDonationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface DonationUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  message?: NullableStringFieldUpdateOperationsInput;
  amount?: FloatFieldUpdateOperationsInput;
  accountId?: IntFieldUpdateOperationsInput;
  status?: EnumDonationStatusFieldUpdateOperationsInput;
  approvedById?: NullableIntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface DonationCreateManyInput {
  id?: number;
  name: string;
  message?: string;
  amount: number;
  accountId: number;
  status: DonationStatus;
  approvedById?: number;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface DonationUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  message?: NullableStringFieldUpdateOperationsInput;
  amount?: FloatFieldUpdateOperationsInput;
  accountId?: IntFieldUpdateOperationsInput;
  status?: EnumDonationStatusFieldUpdateOperationsInput;
  approvedById?: NullableIntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface IntFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntFilter;
}

export interface StringFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringFilter;
}

export interface StringNullableFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringNullableFilter;
}

export interface NewsListRelationFilter {
  every?: NewsWhereInput;
  some?: NewsWhereInput;
  none?: NewsWhereInput;
}

export interface DonationListRelationFilter {
  every?: DonationWhereInput;
  some?: DonationWhereInput;
  none?: DonationWhereInput;
}

export interface BoolFilter {
  equals?: boolean;
  not?: NestedBoolFilter;
}

export interface EnumRolesFilter {
  equals?: Roles;
  in?: Roles[];
  notIn?: Roles[];
  not?: NestedEnumRolesFilter;
}

export interface DateTimeFilter {
  equals?: undefined;
  in?: undefined[];
  notIn?: undefined[];
  lt?: undefined;
  lte?: undefined;
  gt?: undefined;
  gte?: undefined;
  not?: NestedDateTimeFilter;
}

export interface NewsOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface DonationOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface UserCountOrderByAggregateInput {
  id?: SortOrder;
  email?: SortOrder;
  name?: SortOrder;
  profilePicture?: SortOrder;
  showOnHomepage?: SortOrder;
  roles?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface UserAvgOrderByAggregateInput {
  id?: SortOrder;
}

export interface UserMaxOrderByAggregateInput {
  id?: SortOrder;
  email?: SortOrder;
  name?: SortOrder;
  profilePicture?: SortOrder;
  showOnHomepage?: SortOrder;
  roles?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface UserMinOrderByAggregateInput {
  id?: SortOrder;
  email?: SortOrder;
  name?: SortOrder;
  profilePicture?: SortOrder;
  showOnHomepage?: SortOrder;
  roles?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface UserSumOrderByAggregateInput {
  id?: SortOrder;
}

export interface IntWithAggregatesFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntWithAggregatesFilter;
  _count?: NestedIntFilter;
  _avg?: NestedFloatFilter;
  _sum?: NestedIntFilter;
  _min?: NestedIntFilter;
  _max?: NestedIntFilter;
}

export interface StringWithAggregatesFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedStringFilter;
  _max?: NestedStringFilter;
}

export interface StringNullableWithAggregatesFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringNullableWithAggregatesFilter;
  _count?: NestedIntNullableFilter;
  _min?: NestedStringNullableFilter;
  _max?: NestedStringNullableFilter;
}

export interface BoolWithAggregatesFilter {
  equals?: boolean;
  not?: NestedBoolWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedBoolFilter;
  _max?: NestedBoolFilter;
}

export interface EnumRolesWithAggregatesFilter {
  equals?: Roles;
  in?: Roles[];
  notIn?: Roles[];
  not?: NestedEnumRolesWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedEnumRolesFilter;
  _max?: NestedEnumRolesFilter;
}

export interface DateTimeWithAggregatesFilter {
  equals?: undefined;
  in?: undefined[];
  notIn?: undefined[];
  lt?: undefined;
  lte?: undefined;
  gt?: undefined;
  gte?: undefined;
  not?: NestedDateTimeWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedDateTimeFilter;
  _max?: NestedDateTimeFilter;
}

export interface MemberCountOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  role?: SortOrder;
  description?: SortOrder;
  image?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface MemberAvgOrderByAggregateInput {
  id?: SortOrder;
}

export interface MemberMaxOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  role?: SortOrder;
  description?: SortOrder;
  image?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface MemberMinOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  role?: SortOrder;
  description?: SortOrder;
  image?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface MemberSumOrderByAggregateInput {
  id?: SortOrder;
}

export interface ImageGalleryCountOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  image?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ImageGalleryAvgOrderByAggregateInput {
  id?: SortOrder;
}

export interface ImageGalleryMaxOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  image?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ImageGalleryMinOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  image?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ImageGallerySumOrderByAggregateInput {
  id?: SortOrder;
}

export interface UserRelationFilter {
  is?: UserWhereInput;
  isNot?: UserWhereInput;
}

export interface IntNullableFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntNullableFilter;
}

export interface CategoryListRelationFilter {
  every?: CategoryWhereInput;
  some?: CategoryWhereInput;
  none?: CategoryWhereInput;
}

export interface CategoryOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface NewsCountOrderByAggregateInput {
  id?: SortOrder;
  published?: SortOrder;
  title?: SortOrder;
  authorId?: SortOrder;
  slug?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  views?: SortOrder;
  potrait?: SortOrder;
  wide?: SortOrder;
  content?: SortOrder;
  description?: SortOrder;
}

export interface NewsAvgOrderByAggregateInput {
  id?: SortOrder;
  authorId?: SortOrder;
  views?: SortOrder;
}

export interface NewsMaxOrderByAggregateInput {
  id?: SortOrder;
  published?: SortOrder;
  title?: SortOrder;
  authorId?: SortOrder;
  slug?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  views?: SortOrder;
  potrait?: SortOrder;
  wide?: SortOrder;
  content?: SortOrder;
  description?: SortOrder;
}

export interface NewsMinOrderByAggregateInput {
  id?: SortOrder;
  published?: SortOrder;
  title?: SortOrder;
  authorId?: SortOrder;
  slug?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  views?: SortOrder;
  potrait?: SortOrder;
  wide?: SortOrder;
  content?: SortOrder;
  description?: SortOrder;
}

export interface NewsSumOrderByAggregateInput {
  id?: SortOrder;
  authorId?: SortOrder;
  views?: SortOrder;
}

export interface IntNullableWithAggregatesFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntNullableWithAggregatesFilter;
  _count?: NestedIntNullableFilter;
  _avg?: NestedFloatNullableFilter;
  _sum?: NestedIntNullableFilter;
  _min?: NestedIntNullableFilter;
  _max?: NestedIntNullableFilter;
}

export interface CategoryCountOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  slug?: SortOrder;
}

export interface CategoryAvgOrderByAggregateInput {
  id?: SortOrder;
}

export interface CategoryMaxOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  slug?: SortOrder;
}

export interface CategoryMinOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  slug?: SortOrder;
}

export interface CategorySumOrderByAggregateInput {
  id?: SortOrder;
}

export interface DonationAccountCountOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  accountNumber?: SortOrder;
  bankName?: SortOrder;
  logoUrl?: SortOrder;
}

export interface DonationAccountAvgOrderByAggregateInput {
  id?: SortOrder;
}

export interface DonationAccountMaxOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  accountNumber?: SortOrder;
  bankName?: SortOrder;
  logoUrl?: SortOrder;
}

export interface DonationAccountMinOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  accountNumber?: SortOrder;
  bankName?: SortOrder;
  logoUrl?: SortOrder;
}

export interface DonationAccountSumOrderByAggregateInput {
  id?: SortOrder;
}

export interface FloatFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedFloatFilter;
}

export interface DonationAccountRelationFilter {
  is?: DonationAccountWhereInput;
  isNot?: DonationAccountWhereInput;
}

export interface EnumDonationStatusFilter {
  equals?: DonationStatus;
  in?: DonationStatus[];
  notIn?: DonationStatus[];
  not?: NestedEnumDonationStatusFilter;
}

export interface DonationCountOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  message?: SortOrder;
  amount?: SortOrder;
  accountId?: SortOrder;
  status?: SortOrder;
  approvedById?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface DonationAvgOrderByAggregateInput {
  id?: SortOrder;
  amount?: SortOrder;
  accountId?: SortOrder;
  approvedById?: SortOrder;
}

export interface DonationMaxOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  message?: SortOrder;
  amount?: SortOrder;
  accountId?: SortOrder;
  status?: SortOrder;
  approvedById?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface DonationMinOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  message?: SortOrder;
  amount?: SortOrder;
  accountId?: SortOrder;
  status?: SortOrder;
  approvedById?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface DonationSumOrderByAggregateInput {
  id?: SortOrder;
  amount?: SortOrder;
  accountId?: SortOrder;
  approvedById?: SortOrder;
}

export interface FloatWithAggregatesFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedFloatWithAggregatesFilter;
  _count?: NestedIntFilter;
  _avg?: NestedFloatFilter;
  _sum?: NestedFloatFilter;
  _min?: NestedFloatFilter;
  _max?: NestedFloatFilter;
}

export interface EnumDonationStatusWithAggregatesFilter {
  equals?: DonationStatus;
  in?: DonationStatus[];
  notIn?: DonationStatus[];
  not?: NestedEnumDonationStatusWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedEnumDonationStatusFilter;
  _max?: NestedEnumDonationStatusFilter;
}

export interface NewsCreateNestedManyWithoutAuthorInput {
  create?: NewsCreateWithoutAuthorInput[];
  connectOrCreate?: NewsCreateOrConnectWithoutAuthorInput[];
  createMany?: NewsCreateManyAuthorInputEnvelope;
  connect?: NewsWhereUniqueInput[];
}

export interface DonationCreateNestedManyWithoutApprovedByInput {
  create?: DonationCreateWithoutApprovedByInput[];
  connectOrCreate?: DonationCreateOrConnectWithoutApprovedByInput[];
  createMany?: DonationCreateManyApprovedByInputEnvelope;
  connect?: DonationWhereUniqueInput[];
}

export interface NewsUncheckedCreateNestedManyWithoutAuthorInput {
  create?: NewsCreateWithoutAuthorInput[];
  connectOrCreate?: NewsCreateOrConnectWithoutAuthorInput[];
  createMany?: NewsCreateManyAuthorInputEnvelope;
  connect?: NewsWhereUniqueInput[];
}

export interface DonationUncheckedCreateNestedManyWithoutApprovedByInput {
  create?: DonationCreateWithoutApprovedByInput[];
  connectOrCreate?: DonationCreateOrConnectWithoutApprovedByInput[];
  createMany?: DonationCreateManyApprovedByInputEnvelope;
  connect?: DonationWhereUniqueInput[];
}

export interface StringFieldUpdateOperationsInput {
  set?: string;
}

export interface NullableStringFieldUpdateOperationsInput {
  set?: string;
}

export interface NewsUpdateManyWithoutAuthorInput {
  create?: NewsCreateWithoutAuthorInput[];
  connectOrCreate?: NewsCreateOrConnectWithoutAuthorInput[];
  upsert?: NewsUpsertWithWhereUniqueWithoutAuthorInput[];
  createMany?: NewsCreateManyAuthorInputEnvelope;
  set?: NewsWhereUniqueInput[];
  disconnect?: NewsWhereUniqueInput[];
  delete?: NewsWhereUniqueInput[];
  connect?: NewsWhereUniqueInput[];
  update?: NewsUpdateWithWhereUniqueWithoutAuthorInput[];
  updateMany?: NewsUpdateManyWithWhereWithoutAuthorInput[];
  deleteMany?: NewsScalarWhereInput[];
}

export interface DonationUpdateManyWithoutApprovedByInput {
  create?: DonationCreateWithoutApprovedByInput[];
  connectOrCreate?: DonationCreateOrConnectWithoutApprovedByInput[];
  upsert?: DonationUpsertWithWhereUniqueWithoutApprovedByInput[];
  createMany?: DonationCreateManyApprovedByInputEnvelope;
  set?: DonationWhereUniqueInput[];
  disconnect?: DonationWhereUniqueInput[];
  delete?: DonationWhereUniqueInput[];
  connect?: DonationWhereUniqueInput[];
  update?: DonationUpdateWithWhereUniqueWithoutApprovedByInput[];
  updateMany?: DonationUpdateManyWithWhereWithoutApprovedByInput[];
  deleteMany?: DonationScalarWhereInput[];
}

export interface BoolFieldUpdateOperationsInput {
  set?: boolean;
}

export interface EnumRolesFieldUpdateOperationsInput {
  set?: Roles;
}

export interface DateTimeFieldUpdateOperationsInput {
  set?: undefined;
}

export interface IntFieldUpdateOperationsInput {
  set?: number;
  increment?: number;
  decrement?: number;
  multiply?: number;
  divide?: number;
}

export interface NewsUncheckedUpdateManyWithoutAuthorInput {
  create?: NewsCreateWithoutAuthorInput[];
  connectOrCreate?: NewsCreateOrConnectWithoutAuthorInput[];
  upsert?: NewsUpsertWithWhereUniqueWithoutAuthorInput[];
  createMany?: NewsCreateManyAuthorInputEnvelope;
  set?: NewsWhereUniqueInput[];
  disconnect?: NewsWhereUniqueInput[];
  delete?: NewsWhereUniqueInput[];
  connect?: NewsWhereUniqueInput[];
  update?: NewsUpdateWithWhereUniqueWithoutAuthorInput[];
  updateMany?: NewsUpdateManyWithWhereWithoutAuthorInput[];
  deleteMany?: NewsScalarWhereInput[];
}

export interface DonationUncheckedUpdateManyWithoutApprovedByInput {
  create?: DonationCreateWithoutApprovedByInput[];
  connectOrCreate?: DonationCreateOrConnectWithoutApprovedByInput[];
  upsert?: DonationUpsertWithWhereUniqueWithoutApprovedByInput[];
  createMany?: DonationCreateManyApprovedByInputEnvelope;
  set?: DonationWhereUniqueInput[];
  disconnect?: DonationWhereUniqueInput[];
  delete?: DonationWhereUniqueInput[];
  connect?: DonationWhereUniqueInput[];
  update?: DonationUpdateWithWhereUniqueWithoutApprovedByInput[];
  updateMany?: DonationUpdateManyWithWhereWithoutApprovedByInput[];
  deleteMany?: DonationScalarWhereInput[];
}

export interface UserCreateNestedOneWithoutNewsInput {
  create?: UserUncheckedCreateWithoutNewsInput;
  connectOrCreate?: UserCreateOrConnectWithoutNewsInput;
  connect?: UserWhereUniqueInput;
}

export interface CategoryCreateNestedManyWithoutNewsInput {
  create?: CategoryCreateWithoutNewsInput[];
  connectOrCreate?: CategoryCreateOrConnectWithoutNewsInput[];
  connect?: CategoryWhereUniqueInput[];
}

export interface CategoryUncheckedCreateNestedManyWithoutNewsInput {
  create?: CategoryCreateWithoutNewsInput[];
  connectOrCreate?: CategoryCreateOrConnectWithoutNewsInput[];
  connect?: CategoryWhereUniqueInput[];
}

export interface UserUpdateOneWithoutNewsInput {
  create?: UserUncheckedCreateWithoutNewsInput;
  connectOrCreate?: UserCreateOrConnectWithoutNewsInput;
  upsert?: UserUpsertWithoutNewsInput;
  disconnect?: boolean;
  delete?: boolean;
  connect?: UserWhereUniqueInput;
  update?: UserUncheckedUpdateWithoutNewsInput;
}

export interface CategoryUpdateManyWithoutNewsInput {
  create?: CategoryCreateWithoutNewsInput[];
  connectOrCreate?: CategoryCreateOrConnectWithoutNewsInput[];
  upsert?: CategoryUpsertWithWhereUniqueWithoutNewsInput[];
  set?: CategoryWhereUniqueInput[];
  disconnect?: CategoryWhereUniqueInput[];
  delete?: CategoryWhereUniqueInput[];
  connect?: CategoryWhereUniqueInput[];
  update?: CategoryUpdateWithWhereUniqueWithoutNewsInput[];
  updateMany?: CategoryUpdateManyWithWhereWithoutNewsInput[];
  deleteMany?: CategoryScalarWhereInput[];
}

export interface NullableIntFieldUpdateOperationsInput {
  set?: number;
  increment?: number;
  decrement?: number;
  multiply?: number;
  divide?: number;
}

export interface CategoryUncheckedUpdateManyWithoutNewsInput {
  create?: CategoryCreateWithoutNewsInput[];
  connectOrCreate?: CategoryCreateOrConnectWithoutNewsInput[];
  upsert?: CategoryUpsertWithWhereUniqueWithoutNewsInput[];
  set?: CategoryWhereUniqueInput[];
  disconnect?: CategoryWhereUniqueInput[];
  delete?: CategoryWhereUniqueInput[];
  connect?: CategoryWhereUniqueInput[];
  update?: CategoryUpdateWithWhereUniqueWithoutNewsInput[];
  updateMany?: CategoryUpdateManyWithWhereWithoutNewsInput[];
  deleteMany?: CategoryScalarWhereInput[];
}

export interface NewsCreateNestedManyWithoutCategoriesInput {
  create?: NewsCreateWithoutCategoriesInput[];
  connectOrCreate?: NewsCreateOrConnectWithoutCategoriesInput[];
  connect?: NewsWhereUniqueInput[];
}

export interface NewsUncheckedCreateNestedManyWithoutCategoriesInput {
  create?: NewsCreateWithoutCategoriesInput[];
  connectOrCreate?: NewsCreateOrConnectWithoutCategoriesInput[];
  connect?: NewsWhereUniqueInput[];
}

export interface NewsUpdateManyWithoutCategoriesInput {
  create?: NewsCreateWithoutCategoriesInput[];
  connectOrCreate?: NewsCreateOrConnectWithoutCategoriesInput[];
  upsert?: NewsUpsertWithWhereUniqueWithoutCategoriesInput[];
  set?: NewsWhereUniqueInput[];
  disconnect?: NewsWhereUniqueInput[];
  delete?: NewsWhereUniqueInput[];
  connect?: NewsWhereUniqueInput[];
  update?: NewsUpdateWithWhereUniqueWithoutCategoriesInput[];
  updateMany?: NewsUpdateManyWithWhereWithoutCategoriesInput[];
  deleteMany?: NewsScalarWhereInput[];
}

export interface NewsUncheckedUpdateManyWithoutCategoriesInput {
  create?: NewsCreateWithoutCategoriesInput[];
  connectOrCreate?: NewsCreateOrConnectWithoutCategoriesInput[];
  upsert?: NewsUpsertWithWhereUniqueWithoutCategoriesInput[];
  set?: NewsWhereUniqueInput[];
  disconnect?: NewsWhereUniqueInput[];
  delete?: NewsWhereUniqueInput[];
  connect?: NewsWhereUniqueInput[];
  update?: NewsUpdateWithWhereUniqueWithoutCategoriesInput[];
  updateMany?: NewsUpdateManyWithWhereWithoutCategoriesInput[];
  deleteMany?: NewsScalarWhereInput[];
}

export interface DonationCreateNestedManyWithoutAccountInput {
  create?: DonationCreateWithoutAccountInput[];
  connectOrCreate?: DonationCreateOrConnectWithoutAccountInput[];
  createMany?: DonationCreateManyAccountInputEnvelope;
  connect?: DonationWhereUniqueInput[];
}

export interface DonationUncheckedCreateNestedManyWithoutAccountInput {
  create?: DonationCreateWithoutAccountInput[];
  connectOrCreate?: DonationCreateOrConnectWithoutAccountInput[];
  createMany?: DonationCreateManyAccountInputEnvelope;
  connect?: DonationWhereUniqueInput[];
}

export interface DonationUpdateManyWithoutAccountInput {
  create?: DonationCreateWithoutAccountInput[];
  connectOrCreate?: DonationCreateOrConnectWithoutAccountInput[];
  upsert?: DonationUpsertWithWhereUniqueWithoutAccountInput[];
  createMany?: DonationCreateManyAccountInputEnvelope;
  set?: DonationWhereUniqueInput[];
  disconnect?: DonationWhereUniqueInput[];
  delete?: DonationWhereUniqueInput[];
  connect?: DonationWhereUniqueInput[];
  update?: DonationUpdateWithWhereUniqueWithoutAccountInput[];
  updateMany?: DonationUpdateManyWithWhereWithoutAccountInput[];
  deleteMany?: DonationScalarWhereInput[];
}

export interface DonationUncheckedUpdateManyWithoutAccountInput {
  create?: DonationCreateWithoutAccountInput[];
  connectOrCreate?: DonationCreateOrConnectWithoutAccountInput[];
  upsert?: DonationUpsertWithWhereUniqueWithoutAccountInput[];
  createMany?: DonationCreateManyAccountInputEnvelope;
  set?: DonationWhereUniqueInput[];
  disconnect?: DonationWhereUniqueInput[];
  delete?: DonationWhereUniqueInput[];
  connect?: DonationWhereUniqueInput[];
  update?: DonationUpdateWithWhereUniqueWithoutAccountInput[];
  updateMany?: DonationUpdateManyWithWhereWithoutAccountInput[];
  deleteMany?: DonationScalarWhereInput[];
}

export interface DonationAccountCreateNestedOneWithoutDonationsInput {
  create?: DonationAccountUncheckedCreateWithoutDonationsInput;
  connectOrCreate?: DonationAccountCreateOrConnectWithoutDonationsInput;
  connect?: DonationAccountWhereUniqueInput;
}

export interface UserCreateNestedOneWithoutApprovedDonationsInput {
  create?: UserUncheckedCreateWithoutApprovedDonationsInput;
  connectOrCreate?: UserCreateOrConnectWithoutApprovedDonationsInput;
  connect?: UserWhereUniqueInput;
}

export interface FloatFieldUpdateOperationsInput {
  set?: number;
  increment?: number;
  decrement?: number;
  multiply?: number;
  divide?: number;
}

export interface DonationAccountUpdateOneRequiredWithoutDonationsInput {
  create?: DonationAccountUncheckedCreateWithoutDonationsInput;
  connectOrCreate?: DonationAccountCreateOrConnectWithoutDonationsInput;
  upsert?: DonationAccountUpsertWithoutDonationsInput;
  connect?: DonationAccountWhereUniqueInput;
  update?: DonationAccountUncheckedUpdateWithoutDonationsInput;
}

export interface EnumDonationStatusFieldUpdateOperationsInput {
  set?: DonationStatus;
}

export interface UserUpdateOneWithoutApprovedDonationsInput {
  create?: UserUncheckedCreateWithoutApprovedDonationsInput;
  connectOrCreate?: UserCreateOrConnectWithoutApprovedDonationsInput;
  upsert?: UserUpsertWithoutApprovedDonationsInput;
  disconnect?: boolean;
  delete?: boolean;
  connect?: UserWhereUniqueInput;
  update?: UserUncheckedUpdateWithoutApprovedDonationsInput;
}

export interface NestedIntFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntFilter;
}

export interface NestedStringFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringFilter;
}

export interface NestedStringNullableFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringNullableFilter;
}

export interface NestedBoolFilter {
  equals?: boolean;
  not?: NestedBoolFilter;
}

export interface NestedEnumRolesFilter {
  equals?: Roles;
  in?: Roles[];
  notIn?: Roles[];
  not?: NestedEnumRolesFilter;
}

export interface NestedDateTimeFilter {
  equals?: undefined;
  in?: undefined[];
  notIn?: undefined[];
  lt?: undefined;
  lte?: undefined;
  gt?: undefined;
  gte?: undefined;
  not?: NestedDateTimeFilter;
}

export interface NestedIntWithAggregatesFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntWithAggregatesFilter;
  _count?: NestedIntFilter;
  _avg?: NestedFloatFilter;
  _sum?: NestedIntFilter;
  _min?: NestedIntFilter;
  _max?: NestedIntFilter;
}

export interface NestedFloatFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedFloatFilter;
}

export interface NestedStringWithAggregatesFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedStringFilter;
  _max?: NestedStringFilter;
}

export interface NestedStringNullableWithAggregatesFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringNullableWithAggregatesFilter;
  _count?: NestedIntNullableFilter;
  _min?: NestedStringNullableFilter;
  _max?: NestedStringNullableFilter;
}

export interface NestedIntNullableFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntNullableFilter;
}

export interface NestedBoolWithAggregatesFilter {
  equals?: boolean;
  not?: NestedBoolWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedBoolFilter;
  _max?: NestedBoolFilter;
}

export interface NestedEnumRolesWithAggregatesFilter {
  equals?: Roles;
  in?: Roles[];
  notIn?: Roles[];
  not?: NestedEnumRolesWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedEnumRolesFilter;
  _max?: NestedEnumRolesFilter;
}

export interface NestedDateTimeWithAggregatesFilter {
  equals?: undefined;
  in?: undefined[];
  notIn?: undefined[];
  lt?: undefined;
  lte?: undefined;
  gt?: undefined;
  gte?: undefined;
  not?: NestedDateTimeWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedDateTimeFilter;
  _max?: NestedDateTimeFilter;
}

export interface NestedIntNullableWithAggregatesFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntNullableWithAggregatesFilter;
  _count?: NestedIntNullableFilter;
  _avg?: NestedFloatNullableFilter;
  _sum?: NestedIntNullableFilter;
  _min?: NestedIntNullableFilter;
  _max?: NestedIntNullableFilter;
}

export interface NestedFloatNullableFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedFloatNullableFilter;
}

export interface NestedEnumDonationStatusFilter {
  equals?: DonationStatus;
  in?: DonationStatus[];
  notIn?: DonationStatus[];
  not?: NestedEnumDonationStatusFilter;
}

export interface NestedFloatWithAggregatesFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedFloatWithAggregatesFilter;
  _count?: NestedIntFilter;
  _avg?: NestedFloatFilter;
  _sum?: NestedFloatFilter;
  _min?: NestedFloatFilter;
  _max?: NestedFloatFilter;
}

export interface NestedEnumDonationStatusWithAggregatesFilter {
  equals?: DonationStatus;
  in?: DonationStatus[];
  notIn?: DonationStatus[];
  not?: NestedEnumDonationStatusWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedEnumDonationStatusFilter;
  _max?: NestedEnumDonationStatusFilter;
}

export interface NewsCreateWithoutAuthorInput {
  published?: boolean;
  title: string;
  slug: string;
  categories?: CategoryCreateNestedManyWithoutNewsInput;
  createdAt?: undefined;
  updatedAt?: undefined;
  views?: number;
  potrait?: string;
  wide?: string;
  content: string;
  description?: string;
}

export interface NewsUncheckedCreateWithoutAuthorInput {
  id?: number;
  published?: boolean;
  title: string;
  slug: string;
  categories?: CategoryUncheckedCreateNestedManyWithoutNewsInput;
  createdAt?: undefined;
  updatedAt?: undefined;
  views?: number;
  potrait?: string;
  wide?: string;
  content: string;
  description?: string;
}

export interface NewsCreateOrConnectWithoutAuthorInput {
  where: NewsWhereUniqueInput;
  create: NewsUncheckedCreateWithoutAuthorInput;
}

export interface NewsCreateManyAuthorInputEnvelope {
  data: NewsCreateManyAuthorInput;
  skipDuplicates?: boolean;
}

export interface DonationCreateWithoutApprovedByInput {
  name: string;
  message?: string;
  amount: number;
  account: DonationAccountCreateNestedOneWithoutDonationsInput;
  status: DonationStatus;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface DonationUncheckedCreateWithoutApprovedByInput {
  id?: number;
  name: string;
  message?: string;
  amount: number;
  accountId: number;
  status: DonationStatus;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface DonationCreateOrConnectWithoutApprovedByInput {
  where: DonationWhereUniqueInput;
  create: DonationUncheckedCreateWithoutApprovedByInput;
}

export interface DonationCreateManyApprovedByInputEnvelope {
  data: DonationCreateManyApprovedByInput;
  skipDuplicates?: boolean;
}

export interface NewsUpsertWithWhereUniqueWithoutAuthorInput {
  where: NewsWhereUniqueInput;
  update: NewsUncheckedUpdateWithoutAuthorInput;
  create: NewsUncheckedCreateWithoutAuthorInput;
}

export interface NewsUpdateWithWhereUniqueWithoutAuthorInput {
  where: NewsWhereUniqueInput;
  data: NewsUncheckedUpdateWithoutAuthorInput;
}

export interface NewsUpdateManyWithWhereWithoutAuthorInput {
  where: NewsScalarWhereInput;
  data: NewsUncheckedUpdateManyWithoutNewsInput;
}

export interface NewsScalarWhereInput {
  AND?: NewsScalarWhereInput[];
  OR?: NewsScalarWhereInput[];
  NOT?: NewsScalarWhereInput[];
  id?: IntFilter;
  published?: BoolFilter;
  title?: StringFilter;
  authorId?: IntNullableFilter;
  slug?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  views?: IntFilter;
  potrait?: StringNullableFilter;
  wide?: StringNullableFilter;
  content?: StringFilter;
  description?: StringNullableFilter;
}

export interface DonationUpsertWithWhereUniqueWithoutApprovedByInput {
  where: DonationWhereUniqueInput;
  update: DonationUncheckedUpdateWithoutApprovedByInput;
  create: DonationUncheckedCreateWithoutApprovedByInput;
}

export interface DonationUpdateWithWhereUniqueWithoutApprovedByInput {
  where: DonationWhereUniqueInput;
  data: DonationUncheckedUpdateWithoutApprovedByInput;
}

export interface DonationUpdateManyWithWhereWithoutApprovedByInput {
  where: DonationScalarWhereInput;
  data: DonationUncheckedUpdateManyWithoutApprovedDonationsInput;
}

export interface DonationScalarWhereInput {
  AND?: DonationScalarWhereInput[];
  OR?: DonationScalarWhereInput[];
  NOT?: DonationScalarWhereInput[];
  id?: IntFilter;
  name?: StringFilter;
  message?: StringNullableFilter;
  amount?: FloatFilter;
  accountId?: IntFilter;
  status?: EnumDonationStatusFilter;
  approvedById?: IntNullableFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}

export interface UserCreateWithoutNewsInput {
  email: string;
  name?: string;
  profilePicture?: string;
  approvedDonations?: DonationCreateNestedManyWithoutApprovedByInput;
  showOnHomepage?: boolean;
  roles: Roles;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface UserUncheckedCreateWithoutNewsInput {
  id?: number;
  email: string;
  name?: string;
  profilePicture?: string;
  approvedDonations?: DonationUncheckedCreateNestedManyWithoutApprovedByInput;
  showOnHomepage?: boolean;
  roles: Roles;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface UserCreateOrConnectWithoutNewsInput {
  where: UserWhereUniqueInput;
  create: UserUncheckedCreateWithoutNewsInput;
}

export interface CategoryCreateWithoutNewsInput {
  name: string;
  slug: string;
}

export interface CategoryUncheckedCreateWithoutNewsInput {
  id?: number;
  name: string;
  slug: string;
}

export interface CategoryCreateOrConnectWithoutNewsInput {
  where: CategoryWhereUniqueInput;
  create: CategoryUncheckedCreateWithoutNewsInput;
}

export interface UserUpsertWithoutNewsInput {
  update: UserUncheckedUpdateWithoutNewsInput;
  create: UserUncheckedCreateWithoutNewsInput;
}

export interface UserUpdateWithoutNewsInput {
  email?: StringFieldUpdateOperationsInput;
  name?: NullableStringFieldUpdateOperationsInput;
  profilePicture?: NullableStringFieldUpdateOperationsInput;
  approvedDonations?: DonationUpdateManyWithoutApprovedByInput;
  showOnHomepage?: BoolFieldUpdateOperationsInput;
  roles?: EnumRolesFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface UserUncheckedUpdateWithoutNewsInput {
  id?: IntFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  name?: NullableStringFieldUpdateOperationsInput;
  profilePicture?: NullableStringFieldUpdateOperationsInput;
  approvedDonations?: DonationUncheckedUpdateManyWithoutApprovedByInput;
  showOnHomepage?: BoolFieldUpdateOperationsInput;
  roles?: EnumRolesFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface CategoryUpsertWithWhereUniqueWithoutNewsInput {
  where: CategoryWhereUniqueInput;
  update: CategoryUncheckedUpdateWithoutNewsInput;
  create: CategoryUncheckedCreateWithoutNewsInput;
}

export interface CategoryUpdateWithWhereUniqueWithoutNewsInput {
  where: CategoryWhereUniqueInput;
  data: CategoryUncheckedUpdateWithoutNewsInput;
}

export interface CategoryUpdateManyWithWhereWithoutNewsInput {
  where: CategoryScalarWhereInput;
  data: CategoryUncheckedUpdateManyWithoutCategoriesInput;
}

export interface CategoryScalarWhereInput {
  AND?: CategoryScalarWhereInput[];
  OR?: CategoryScalarWhereInput[];
  NOT?: CategoryScalarWhereInput[];
  id?: IntFilter;
  name?: StringFilter;
  slug?: StringFilter;
}

export interface NewsCreateWithoutCategoriesInput {
  published?: boolean;
  title: string;
  author?: UserCreateNestedOneWithoutNewsInput;
  slug: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  views?: number;
  potrait?: string;
  wide?: string;
  content: string;
  description?: string;
}

export interface NewsUncheckedCreateWithoutCategoriesInput {
  id?: number;
  published?: boolean;
  title: string;
  authorId?: number;
  slug: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  views?: number;
  potrait?: string;
  wide?: string;
  content: string;
  description?: string;
}

export interface NewsCreateOrConnectWithoutCategoriesInput {
  where: NewsWhereUniqueInput;
  create: NewsUncheckedCreateWithoutCategoriesInput;
}

export interface NewsUpsertWithWhereUniqueWithoutCategoriesInput {
  where: NewsWhereUniqueInput;
  update: NewsUncheckedUpdateWithoutCategoriesInput;
  create: NewsUncheckedCreateWithoutCategoriesInput;
}

export interface NewsUpdateWithWhereUniqueWithoutCategoriesInput {
  where: NewsWhereUniqueInput;
  data: NewsUncheckedUpdateWithoutCategoriesInput;
}

export interface NewsUpdateManyWithWhereWithoutCategoriesInput {
  where: NewsScalarWhereInput;
  data: NewsUncheckedUpdateManyWithoutNewsInput;
}

export interface DonationCreateWithoutAccountInput {
  name: string;
  message?: string;
  amount: number;
  status: DonationStatus;
  approvedBy?: UserCreateNestedOneWithoutApprovedDonationsInput;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface DonationUncheckedCreateWithoutAccountInput {
  id?: number;
  name: string;
  message?: string;
  amount: number;
  status: DonationStatus;
  approvedById?: number;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface DonationCreateOrConnectWithoutAccountInput {
  where: DonationWhereUniqueInput;
  create: DonationUncheckedCreateWithoutAccountInput;
}

export interface DonationCreateManyAccountInputEnvelope {
  data: DonationCreateManyAccountInput;
  skipDuplicates?: boolean;
}

export interface DonationUpsertWithWhereUniqueWithoutAccountInput {
  where: DonationWhereUniqueInput;
  update: DonationUncheckedUpdateWithoutAccountInput;
  create: DonationUncheckedCreateWithoutAccountInput;
}

export interface DonationUpdateWithWhereUniqueWithoutAccountInput {
  where: DonationWhereUniqueInput;
  data: DonationUncheckedUpdateWithoutAccountInput;
}

export interface DonationUpdateManyWithWhereWithoutAccountInput {
  where: DonationScalarWhereInput;
  data: DonationUncheckedUpdateManyWithoutDonationsInput;
}

export interface DonationAccountCreateWithoutDonationsInput {
  name: string;
  accountNumber: string;
  bankName: string;
  logoUrl: string;
}

export interface DonationAccountUncheckedCreateWithoutDonationsInput {
  id?: number;
  name: string;
  accountNumber: string;
  bankName: string;
  logoUrl: string;
}

export interface DonationAccountCreateOrConnectWithoutDonationsInput {
  where: DonationAccountWhereUniqueInput;
  create: DonationAccountUncheckedCreateWithoutDonationsInput;
}

export interface UserCreateWithoutApprovedDonationsInput {
  email: string;
  name?: string;
  profilePicture?: string;
  news?: NewsCreateNestedManyWithoutAuthorInput;
  showOnHomepage?: boolean;
  roles: Roles;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface UserUncheckedCreateWithoutApprovedDonationsInput {
  id?: number;
  email: string;
  name?: string;
  profilePicture?: string;
  news?: NewsUncheckedCreateNestedManyWithoutAuthorInput;
  showOnHomepage?: boolean;
  roles: Roles;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface UserCreateOrConnectWithoutApprovedDonationsInput {
  where: UserWhereUniqueInput;
  create: UserUncheckedCreateWithoutApprovedDonationsInput;
}

export interface DonationAccountUpsertWithoutDonationsInput {
  update: DonationAccountUncheckedUpdateWithoutDonationsInput;
  create: DonationAccountUncheckedCreateWithoutDonationsInput;
}

export interface DonationAccountUpdateWithoutDonationsInput {
  name?: StringFieldUpdateOperationsInput;
  accountNumber?: StringFieldUpdateOperationsInput;
  bankName?: StringFieldUpdateOperationsInput;
  logoUrl?: StringFieldUpdateOperationsInput;
}

export interface DonationAccountUncheckedUpdateWithoutDonationsInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  accountNumber?: StringFieldUpdateOperationsInput;
  bankName?: StringFieldUpdateOperationsInput;
  logoUrl?: StringFieldUpdateOperationsInput;
}

export interface UserUpsertWithoutApprovedDonationsInput {
  update: UserUncheckedUpdateWithoutApprovedDonationsInput;
  create: UserUncheckedCreateWithoutApprovedDonationsInput;
}

export interface UserUpdateWithoutApprovedDonationsInput {
  email?: StringFieldUpdateOperationsInput;
  name?: NullableStringFieldUpdateOperationsInput;
  profilePicture?: NullableStringFieldUpdateOperationsInput;
  news?: NewsUpdateManyWithoutAuthorInput;
  showOnHomepage?: BoolFieldUpdateOperationsInput;
  roles?: EnumRolesFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface UserUncheckedUpdateWithoutApprovedDonationsInput {
  id?: IntFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  name?: NullableStringFieldUpdateOperationsInput;
  profilePicture?: NullableStringFieldUpdateOperationsInput;
  news?: NewsUncheckedUpdateManyWithoutAuthorInput;
  showOnHomepage?: BoolFieldUpdateOperationsInput;
  roles?: EnumRolesFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface NewsCreateManyAuthorInput {
  id?: number;
  published?: boolean;
  title: string;
  slug: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  views?: number;
  potrait?: string;
  wide?: string;
  content: string;
  description?: string;
}

export interface DonationCreateManyApprovedByInput {
  id?: number;
  name: string;
  message?: string;
  amount: number;
  accountId: number;
  status: DonationStatus;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface NewsUpdateWithoutAuthorInput {
  published?: BoolFieldUpdateOperationsInput;
  title?: StringFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
  categories?: CategoryUpdateManyWithoutNewsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  views?: IntFieldUpdateOperationsInput;
  potrait?: NullableStringFieldUpdateOperationsInput;
  wide?: NullableStringFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  description?: NullableStringFieldUpdateOperationsInput;
}

export interface NewsUncheckedUpdateWithoutAuthorInput {
  id?: IntFieldUpdateOperationsInput;
  published?: BoolFieldUpdateOperationsInput;
  title?: StringFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
  categories?: CategoryUncheckedUpdateManyWithoutNewsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  views?: IntFieldUpdateOperationsInput;
  potrait?: NullableStringFieldUpdateOperationsInput;
  wide?: NullableStringFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  description?: NullableStringFieldUpdateOperationsInput;
}

export interface NewsUncheckedUpdateManyWithoutNewsInput {
  id?: IntFieldUpdateOperationsInput;
  published?: BoolFieldUpdateOperationsInput;
  title?: StringFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  views?: IntFieldUpdateOperationsInput;
  potrait?: NullableStringFieldUpdateOperationsInput;
  wide?: NullableStringFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  description?: NullableStringFieldUpdateOperationsInput;
}

export interface DonationUpdateWithoutApprovedByInput {
  name?: StringFieldUpdateOperationsInput;
  message?: NullableStringFieldUpdateOperationsInput;
  amount?: FloatFieldUpdateOperationsInput;
  account?: DonationAccountUpdateOneRequiredWithoutDonationsInput;
  status?: EnumDonationStatusFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface DonationUncheckedUpdateWithoutApprovedByInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  message?: NullableStringFieldUpdateOperationsInput;
  amount?: FloatFieldUpdateOperationsInput;
  accountId?: IntFieldUpdateOperationsInput;
  status?: EnumDonationStatusFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface DonationUncheckedUpdateManyWithoutApprovedDonationsInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  message?: NullableStringFieldUpdateOperationsInput;
  amount?: FloatFieldUpdateOperationsInput;
  accountId?: IntFieldUpdateOperationsInput;
  status?: EnumDonationStatusFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface CategoryUpdateWithoutNewsInput {
  name?: StringFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
}

export interface CategoryUncheckedUpdateWithoutNewsInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
}

export interface CategoryUncheckedUpdateManyWithoutCategoriesInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
}

export interface NewsUpdateWithoutCategoriesInput {
  published?: BoolFieldUpdateOperationsInput;
  title?: StringFieldUpdateOperationsInput;
  author?: UserUpdateOneWithoutNewsInput;
  slug?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  views?: IntFieldUpdateOperationsInput;
  potrait?: NullableStringFieldUpdateOperationsInput;
  wide?: NullableStringFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  description?: NullableStringFieldUpdateOperationsInput;
}

export interface NewsUncheckedUpdateWithoutCategoriesInput {
  id?: IntFieldUpdateOperationsInput;
  published?: BoolFieldUpdateOperationsInput;
  title?: StringFieldUpdateOperationsInput;
  authorId?: NullableIntFieldUpdateOperationsInput;
  slug?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  views?: IntFieldUpdateOperationsInput;
  potrait?: NullableStringFieldUpdateOperationsInput;
  wide?: NullableStringFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  description?: NullableStringFieldUpdateOperationsInput;
}

export interface DonationCreateManyAccountInput {
  id?: number;
  name: string;
  message?: string;
  amount: number;
  status: DonationStatus;
  approvedById?: number;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface DonationUpdateWithoutAccountInput {
  name?: StringFieldUpdateOperationsInput;
  message?: NullableStringFieldUpdateOperationsInput;
  amount?: FloatFieldUpdateOperationsInput;
  status?: EnumDonationStatusFieldUpdateOperationsInput;
  approvedBy?: UserUpdateOneWithoutApprovedDonationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface DonationUncheckedUpdateWithoutAccountInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  message?: NullableStringFieldUpdateOperationsInput;
  amount?: FloatFieldUpdateOperationsInput;
  status?: EnumDonationStatusFieldUpdateOperationsInput;
  approvedById?: NullableIntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface DonationUncheckedUpdateManyWithoutDonationsInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  message?: NullableStringFieldUpdateOperationsInput;
  amount?: FloatFieldUpdateOperationsInput;
  status?: EnumDonationStatusFieldUpdateOperationsInput;
  approvedById?: NullableIntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface AggregateUser {
  _count: Maybe<UserCountAggregateOutputType>;
  _avg: Maybe<UserAvgAggregateOutputType>;
  _sum: Maybe<UserSumAggregateOutputType>;
  _min: Maybe<UserMinAggregateOutputType>;
  _max: Maybe<UserMaxAggregateOutputType>;
}

export interface AggregateMember {
  _count: Maybe<MemberCountAggregateOutputType>;
  _avg: Maybe<MemberAvgAggregateOutputType>;
  _sum: Maybe<MemberSumAggregateOutputType>;
  _min: Maybe<MemberMinAggregateOutputType>;
  _max: Maybe<MemberMaxAggregateOutputType>;
}

export interface AggregateImageGallery {
  _count: Maybe<ImageGalleryCountAggregateOutputType>;
  _avg: Maybe<ImageGalleryAvgAggregateOutputType>;
  _sum: Maybe<ImageGallerySumAggregateOutputType>;
  _min: Maybe<ImageGalleryMinAggregateOutputType>;
  _max: Maybe<ImageGalleryMaxAggregateOutputType>;
}

export interface AggregateNews {
  _count: Maybe<NewsCountAggregateOutputType>;
  _avg: Maybe<NewsAvgAggregateOutputType>;
  _sum: Maybe<NewsSumAggregateOutputType>;
  _min: Maybe<NewsMinAggregateOutputType>;
  _max: Maybe<NewsMaxAggregateOutputType>;
}

export interface AggregateCategory {
  _count: Maybe<CategoryCountAggregateOutputType>;
  _avg: Maybe<CategoryAvgAggregateOutputType>;
  _sum: Maybe<CategorySumAggregateOutputType>;
  _min: Maybe<CategoryMinAggregateOutputType>;
  _max: Maybe<CategoryMaxAggregateOutputType>;
}

export interface AggregateDonationAccount {
  _count: Maybe<DonationAccountCountAggregateOutputType>;
  _avg: Maybe<DonationAccountAvgAggregateOutputType>;
  _sum: Maybe<DonationAccountSumAggregateOutputType>;
  _min: Maybe<DonationAccountMinAggregateOutputType>;
  _max: Maybe<DonationAccountMaxAggregateOutputType>;
}

export interface AggregateDonation {
  _count: Maybe<DonationCountAggregateOutputType>;
  _avg: Maybe<DonationAvgAggregateOutputType>;
  _sum: Maybe<DonationSumAggregateOutputType>;
  _min: Maybe<DonationMinAggregateOutputType>;
  _max: Maybe<DonationMaxAggregateOutputType>;
}

export interface UserCountOutputType {
  news: number;
  approvedDonations: number;
}

export interface UserCountAggregateOutputType {
  id: number;
  email: number;
  name: number;
  profilePicture: number;
  showOnHomepage: number;
  roles: number;
  createdAt: number;
  updatedAt: number;
  _all: number;
}

export interface UserAvgAggregateOutputType {
  id: Maybe<number>;
}

export interface UserSumAggregateOutputType {
  id: Maybe<number>;
}

export interface UserMinAggregateOutputType {
  id: Maybe<number>;
  email: Maybe<string>;
  name: Maybe<string>;
  profilePicture: Maybe<string>;
  showOnHomepage: Maybe<boolean>;
  roles: Maybe<Roles>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface UserMaxAggregateOutputType {
  id: Maybe<number>;
  email: Maybe<string>;
  name: Maybe<string>;
  profilePicture: Maybe<string>;
  showOnHomepage: Maybe<boolean>;
  roles: Maybe<Roles>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface MemberCountAggregateOutputType {
  id: number;
  name: number;
  role: number;
  description: number;
  image: number;
  createdAt: number;
  updatedAt: number;
  _all: number;
}

export interface MemberAvgAggregateOutputType {
  id: Maybe<number>;
}

export interface MemberSumAggregateOutputType {
  id: Maybe<number>;
}

export interface MemberMinAggregateOutputType {
  id: Maybe<number>;
  name: Maybe<string>;
  role: Maybe<string>;
  description: Maybe<string>;
  image: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface MemberMaxAggregateOutputType {
  id: Maybe<number>;
  name: Maybe<string>;
  role: Maybe<string>;
  description: Maybe<string>;
  image: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface ImageGalleryCountAggregateOutputType {
  id: number;
  name: number;
  description: number;
  image: number;
  createdAt: number;
  updatedAt: number;
  _all: number;
}

export interface ImageGalleryAvgAggregateOutputType {
  id: Maybe<number>;
}

export interface ImageGallerySumAggregateOutputType {
  id: Maybe<number>;
}

export interface ImageGalleryMinAggregateOutputType {
  id: Maybe<number>;
  name: Maybe<string>;
  description: Maybe<string>;
  image: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface ImageGalleryMaxAggregateOutputType {
  id: Maybe<number>;
  name: Maybe<string>;
  description: Maybe<string>;
  image: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface NewsCountOutputType {
  categories: number;
}

export interface NewsCountAggregateOutputType {
  id: number;
  published: number;
  title: number;
  authorId: number;
  slug: number;
  createdAt: number;
  updatedAt: number;
  views: number;
  potrait: number;
  wide: number;
  content: number;
  description: number;
  _all: number;
}

export interface NewsAvgAggregateOutputType {
  id: Maybe<number>;
  authorId: Maybe<number>;
  views: Maybe<number>;
}

export interface NewsSumAggregateOutputType {
  id: Maybe<number>;
  authorId: Maybe<number>;
  views: Maybe<number>;
}

export interface NewsMinAggregateOutputType {
  id: Maybe<number>;
  published: Maybe<boolean>;
  title: Maybe<string>;
  authorId: Maybe<number>;
  slug: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
  views: Maybe<number>;
  potrait: Maybe<string>;
  wide: Maybe<string>;
  content: Maybe<string>;
  description: Maybe<string>;
}

export interface NewsMaxAggregateOutputType {
  id: Maybe<number>;
  published: Maybe<boolean>;
  title: Maybe<string>;
  authorId: Maybe<number>;
  slug: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
  views: Maybe<number>;
  potrait: Maybe<string>;
  wide: Maybe<string>;
  content: Maybe<string>;
  description: Maybe<string>;
}

export interface CategoryCountOutputType {
  news: number;
}

export interface CategoryCountAggregateOutputType {
  id: number;
  name: number;
  slug: number;
  _all: number;
}

export interface CategoryAvgAggregateOutputType {
  id: Maybe<number>;
}

export interface CategorySumAggregateOutputType {
  id: Maybe<number>;
}

export interface CategoryMinAggregateOutputType {
  id: Maybe<number>;
  name: Maybe<string>;
  slug: Maybe<string>;
}

export interface CategoryMaxAggregateOutputType {
  id: Maybe<number>;
  name: Maybe<string>;
  slug: Maybe<string>;
}

export interface DonationAccountCountOutputType {
  donations: number;
}

export interface DonationAccountCountAggregateOutputType {
  id: number;
  name: number;
  accountNumber: number;
  bankName: number;
  logoUrl: number;
  _all: number;
}

export interface DonationAccountAvgAggregateOutputType {
  id: Maybe<number>;
}

export interface DonationAccountSumAggregateOutputType {
  id: Maybe<number>;
}

export interface DonationAccountMinAggregateOutputType {
  id: Maybe<number>;
  name: Maybe<string>;
  accountNumber: Maybe<string>;
  bankName: Maybe<string>;
  logoUrl: Maybe<string>;
}

export interface DonationAccountMaxAggregateOutputType {
  id: Maybe<number>;
  name: Maybe<string>;
  accountNumber: Maybe<string>;
  bankName: Maybe<string>;
  logoUrl: Maybe<string>;
}

export interface DonationCountAggregateOutputType {
  id: number;
  name: number;
  message: number;
  amount: number;
  accountId: number;
  status: number;
  approvedById: number;
  createdAt: number;
  updatedAt: number;
  _all: number;
}

export interface DonationAvgAggregateOutputType {
  id: Maybe<number>;
  amount: Maybe<number>;
  accountId: Maybe<number>;
  approvedById: Maybe<number>;
}

export interface DonationSumAggregateOutputType {
  id: Maybe<number>;
  amount: Maybe<number>;
  accountId: Maybe<number>;
  approvedById: Maybe<number>;
}

export interface DonationMinAggregateOutputType {
  id: Maybe<number>;
  name: Maybe<string>;
  message: Maybe<string>;
  amount: Maybe<number>;
  accountId: Maybe<number>;
  status: Maybe<DonationStatus>;
  approvedById: Maybe<number>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface DonationMaxAggregateOutputType {
  id: Maybe<number>;
  name: Maybe<string>;
  message: Maybe<string>;
  amount: Maybe<number>;
  accountId: Maybe<number>;
  status: Maybe<DonationStatus>;
  approvedById: Maybe<number>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface findUniqueImageGalleryArgs {
  where: ImageGalleryWhereUniqueInput;
}

export interface findFirstImageGalleryArgs {
  where?: ImageGalleryWhereInput;
  orderBy?: ImageGalleryOrderByWithRelationInput[];
  cursor?: ImageGalleryWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ImageGalleryScalarFieldEnum[];
}

export interface findManyImageGalleryArgs {
  where?: ImageGalleryWhereInput;
  orderBy?: ImageGalleryOrderByWithRelationInput[];
  cursor?: ImageGalleryWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ImageGalleryScalarFieldEnum[];
}

export interface findManyImageGalleryCountArgs {
  where?: ImageGalleryWhereInput;
  orderBy?: ImageGalleryOrderByWithRelationInput[];
  cursor?: ImageGalleryWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ImageGalleryScalarFieldEnum[];
}

export interface aggregateImageGalleryArgs {
  where?: ImageGalleryWhereInput;
  orderBy?: ImageGalleryOrderByWithRelationInput[];
  cursor?: ImageGalleryWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueMemberArgs {
  where: MemberWhereUniqueInput;
}

export interface findFirstMemberArgs {
  where?: MemberWhereInput;
  orderBy?: MemberOrderByWithRelationInput[];
  cursor?: MemberWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: MemberScalarFieldEnum[];
}

export interface findManyMemberArgs {
  where?: MemberWhereInput;
  orderBy?: MemberOrderByWithRelationInput[];
  cursor?: MemberWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: MemberScalarFieldEnum[];
}

export interface findManyMemberCountArgs {
  where?: MemberWhereInput;
  orderBy?: MemberOrderByWithRelationInput[];
  cursor?: MemberWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: MemberScalarFieldEnum[];
}

export interface aggregateMemberArgs {
  where?: MemberWhereInput;
  orderBy?: MemberOrderByWithRelationInput[];
  cursor?: MemberWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueDonationArgs {
  where: DonationWhereUniqueInput;
}

export interface findFirstDonationArgs {
  where?: DonationWhereInput;
  orderBy?: DonationOrderByWithRelationInput[];
  cursor?: DonationWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: DonationScalarFieldEnum[];
}

export interface findManyDonationArgs {
  where?: DonationWhereInput;
  orderBy?: DonationOrderByWithRelationInput[];
  cursor?: DonationWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: DonationScalarFieldEnum[];
}

export interface findManyDonationCountArgs {
  where?: DonationWhereInput;
  orderBy?: DonationOrderByWithRelationInput[];
  cursor?: DonationWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: DonationScalarFieldEnum[];
}

export interface aggregateDonationArgs {
  where?: DonationWhereInput;
  orderBy?: DonationOrderByWithRelationInput[];
  cursor?: DonationWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueDonationAccountArgs {
  where: DonationAccountWhereUniqueInput;
}

export interface findFirstDonationAccountArgs {
  where?: DonationAccountWhereInput;
  orderBy?: DonationAccountOrderByWithRelationInput[];
  cursor?: DonationAccountWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: DonationAccountScalarFieldEnum[];
}

export interface findManyDonationAccountArgs {
  where?: DonationAccountWhereInput;
  orderBy?: DonationAccountOrderByWithRelationInput[];
  cursor?: DonationAccountWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: DonationAccountScalarFieldEnum[];
}

export interface findManyDonationAccountCountArgs {
  where?: DonationAccountWhereInput;
  orderBy?: DonationAccountOrderByWithRelationInput[];
  cursor?: DonationAccountWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: DonationAccountScalarFieldEnum[];
}

export interface aggregateDonationAccountArgs {
  where?: DonationAccountWhereInput;
  orderBy?: DonationAccountOrderByWithRelationInput[];
  cursor?: DonationAccountWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueCategoryArgs {
  where: CategoryWhereUniqueInput;
}

export interface findFirstCategoryArgs {
  where?: CategoryWhereInput;
  orderBy?: CategoryOrderByWithRelationInput[];
  cursor?: CategoryWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: CategoryScalarFieldEnum[];
}

export interface findManyCategoryArgs {
  where?: CategoryWhereInput;
  orderBy?: CategoryOrderByWithRelationInput[];
  cursor?: CategoryWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: CategoryScalarFieldEnum[];
}

export interface findManyCategoryCountArgs {
  where?: CategoryWhereInput;
  orderBy?: CategoryOrderByWithRelationInput[];
  cursor?: CategoryWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: CategoryScalarFieldEnum[];
}

export interface aggregateCategoryArgs {
  where?: CategoryWhereInput;
  orderBy?: CategoryOrderByWithRelationInput[];
  cursor?: CategoryWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueNewsArgs {
  where: NewsWhereUniqueInput;
}

export interface findFirstNewsArgs {
  where?: NewsWhereInput;
  orderBy?: NewsOrderByWithRelationInput[];
  cursor?: NewsWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: NewsScalarFieldEnum[];
}

export interface findManyNewsArgs {
  where?: NewsWhereInput;
  orderBy?: NewsOrderByWithRelationInput[];
  cursor?: NewsWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: NewsScalarFieldEnum[];
}

export interface findManyNewsCountArgs {
  where?: NewsWhereInput;
  orderBy?: NewsOrderByWithRelationInput[];
  cursor?: NewsWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: NewsScalarFieldEnum[];
}

export interface aggregateNewsArgs {
  where?: NewsWhereInput;
  orderBy?: NewsOrderByWithRelationInput[];
  cursor?: NewsWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueUserArgs {
  where: UserWhereUniqueInput;
}

export interface findFirstUserArgs {
  where?: UserWhereInput;
  orderBy?: UserOrderByWithRelationInput[];
  cursor?: UserWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: UserScalarFieldEnum[];
}

export interface findManyUserArgs {
  where?: UserWhereInput;
  orderBy?: UserOrderByWithRelationInput[];
  cursor?: UserWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: UserScalarFieldEnum[];
}

export interface findManyUserCountArgs {
  where?: UserWhereInput;
  orderBy?: UserOrderByWithRelationInput[];
  cursor?: UserWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: UserScalarFieldEnum[];
}

export interface aggregateUserArgs {
  where?: UserWhereInput;
  orderBy?: UserOrderByWithRelationInput[];
  cursor?: UserWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface createOneImageGalleryArgs {
  data: ImageGalleryCreateInput;
}

export interface updateOneImageGalleryArgs {
  data: ImageGalleryUpdateInput;
  where: ImageGalleryWhereUniqueInput;
}

export interface upsertOneImageGalleryArgs {
  where: ImageGalleryWhereUniqueInput;
  create: ImageGalleryCreateInput;
  update: ImageGalleryUpdateInput;
}

export interface deleteOneImageGalleryArgs {
  where: ImageGalleryWhereUniqueInput;
}

export interface updateManyImageGalleryArgs {
  data: ImageGalleryUpdateManyMutationInput;
  where?: ImageGalleryWhereInput;
}

export interface deleteManyImageGalleryArgs {
  where?: ImageGalleryWhereInput;
}

export interface createOneMemberArgs {
  data: MemberCreateInput;
}

export interface updateOneMemberArgs {
  data: MemberUpdateInput;
  where: MemberWhereUniqueInput;
}

export interface upsertOneMemberArgs {
  where: MemberWhereUniqueInput;
  create: MemberCreateInput;
  update: MemberUpdateInput;
}

export interface deleteOneMemberArgs {
  where: MemberWhereUniqueInput;
}

export interface updateManyMemberArgs {
  data: MemberUpdateManyMutationInput;
  where?: MemberWhereInput;
}

export interface deleteManyMemberArgs {
  where?: MemberWhereInput;
}

export interface createOneDonationArgs {
  data: DonationCreateInput;
}

export interface updateOneDonationArgs {
  data: DonationUpdateInput;
  where: DonationWhereUniqueInput;
}

export interface upsertOneDonationArgs {
  where: DonationWhereUniqueInput;
  create: DonationCreateInput;
  update: DonationUpdateInput;
}

export interface deleteOneDonationArgs {
  where: DonationWhereUniqueInput;
}

export interface updateManyDonationArgs {
  data: DonationUpdateManyMutationInput;
  where?: DonationWhereInput;
}

export interface deleteManyDonationArgs {
  where?: DonationWhereInput;
}

export interface createOneDonationAccountArgs {
  data: DonationAccountCreateInput;
}

export interface updateOneDonationAccountArgs {
  data: DonationAccountUpdateInput;
  where: DonationAccountWhereUniqueInput;
}

export interface upsertOneDonationAccountArgs {
  where: DonationAccountWhereUniqueInput;
  create: DonationAccountCreateInput;
  update: DonationAccountUpdateInput;
}

export interface deleteOneDonationAccountArgs {
  where: DonationAccountWhereUniqueInput;
}

export interface updateManyDonationAccountArgs {
  data: DonationAccountUpdateManyMutationInput;
  where?: DonationAccountWhereInput;
}

export interface deleteManyDonationAccountArgs {
  where?: DonationAccountWhereInput;
}

export interface createOneCategoryArgs {
  data: CategoryCreateInput;
}

export interface updateOneCategoryArgs {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
}

export interface upsertOneCategoryArgs {
  where: CategoryWhereUniqueInput;
  create: CategoryCreateInput;
  update: CategoryUpdateInput;
}

export interface deleteOneCategoryArgs {
  where: CategoryWhereUniqueInput;
}

export interface updateManyCategoryArgs {
  data: CategoryUpdateManyMutationInput;
  where?: CategoryWhereInput;
}

export interface deleteManyCategoryArgs {
  where?: CategoryWhereInput;
}

export interface createOneNewsArgs {
  data: NewsCreateInput;
}

export interface updateOneNewsArgs {
  data: NewsUpdateInput;
  where: NewsWhereUniqueInput;
}

export interface upsertOneNewsArgs {
  where: NewsWhereUniqueInput;
  create: NewsCreateInput;
  update: NewsUpdateInput;
}

export interface deleteOneNewsArgs {
  where: NewsWhereUniqueInput;
}

export interface updateManyNewsArgs {
  data: NewsUpdateManyMutationInput;
  where?: NewsWhereInput;
}

export interface deleteManyNewsArgs {
  where?: NewsWhereInput;
}

export interface createOneUserArgs {
  data: UserCreateInput;
}

export interface updateOneUserArgs {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
}

export interface upsertOneUserArgs {
  where: UserWhereUniqueInput;
  create: UserCreateInput;
  update: UserUpdateInput;
}

export interface deleteOneUserArgs {
  where: UserWhereUniqueInput;
}

export interface updateManyUserArgs {
  data: UserUpdateManyMutationInput;
  where?: UserWhereInput;
}

export interface deleteManyUserArgs {
  where?: UserWhereInput;
}
