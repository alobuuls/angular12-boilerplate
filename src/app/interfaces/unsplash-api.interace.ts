export interface IPhotoServiceRes {
  data: IRespUnsplashApi[];
  loading: boolean;
  msgError: Error | null;
}

export interface IPhotoDetailServiceRes {
  data: IRespUnsplashApi | null;
  loading: boolean;
  msgError: Error | null;
}

export interface IRespUnsplashSearchApi {
  total:       number;
  total_pages: number;
  results:     IRespUnsplashApi[];
}

export interface IRespUnsplashApi {
  alt_description:          string;
  alternative_slugs:        AlternativeSlugs;
  asset_type:               AssetType;
  blur_hash:                string;
  bookmarked:               boolean;
  breadcrumbs:              any[];
  color:                    string;
  created_at:               Date;
  current_user_collections: any[];
  description:              null | string;
  height:                   number;
  id:                       string;
  liked_by_user:            boolean;
  likes:                    number;
  links:                    ResultLinks;
  promoted_at:              Date | null;
  slug:                     string;
  sponsorship:              null;
  topic_submissions:        TopicSubmissions;
  updated_at:               Date;
  urls:                     Urls;
  user:                     User;
  width:                    number;
}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface AlternativeSlugs {
  en: string;
  es: string;
  ja: string;
  fr: string;
  it: string;
  ko: string;
  de: string;
  pt: string;
  id: string;
}

export enum AssetType {
  Photo = "photo",
}

export interface ResultLinks {
  self:              string;
  html:              string;
  download:          string;
  download_location: string;
}

export interface TopicSubmissions {
  wallpapers?: Wallpapers;
}

export interface Wallpapers {
  status:      string;
  approved_on: Date;
}

export interface Urls {
  raw:      string;
  full:     string;
  regular:  string;
  small:    string;
  thumb:    string;
  small_s3: string;
}

export interface User {
  id:                           string;
  updated_at:                   Date;
  username:                     string;
  name:                         string;
  first_name:                   string;
  last_name:                    null | string;
  twitter_username:             null | string;
  portfolio_url:                null | string;
  bio:                          null | string;
  location:                     null | string;
  links:                        UserLinks;
  profile_image:                ProfileImage;
  instagram_username:           string;
  total_collections:            number;
  total_likes:                  number;
  total_photos:                 number;
  total_free_photos:            number;
  total_promoted_photos:        number;
  total_illustrations:          number;
  total_free_illustrations:     number;
  total_promoted_illustrations: number;
  accepted_tos:                 boolean;
  for_hire:                     boolean;
  social:                       Social;
}

export interface UserLinks {
  self:      string;
  html:      string;
  photos:    string;
  likes:     string;
  portfolio: string;
}

export interface ProfileImage {
  small:  string;
  medium: string;
  large:  string;
}

export interface Social {
  instagram_username: string;
  portfolio_url:      null | string;
  twitter_username:   null | string;
  paypal_email:       null;
}
