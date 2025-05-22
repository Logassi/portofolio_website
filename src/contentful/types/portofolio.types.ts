import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypePortofolio__websiteFields {
  title: EntryFieldTypes.Symbol;
  slug?: EntryFieldTypes.Symbol;
  description?: EntryFieldTypes.Symbol;
  images?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;

  //   images?: IAsset[];

  link?: EntryFieldTypes.Symbol;
  github?: EntryFieldTypes.Symbol;
  technologies?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  features?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
}

export interface IAsset {
  sys: { id: string };
  fields: {
    file: {
      url: string;
      details?: any;
      fileName?: string;
      contentType?: string;
    };
  };
}

export type TypePortofolio__websiteSkeleton = EntrySkeletonType<
  TypePortofolio__websiteFields,
  "portofolio-website"
>;
export type TypePortofolio__website<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypePortofolio__websiteSkeleton, Modifiers, Locales>;
