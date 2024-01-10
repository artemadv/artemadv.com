import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Email: { input: any; output: any; }
  Html: { input: any; output: any; }
  PhoneNumber: { input: any; output: any; }
  Time: { input: any; output: any; }
  TimeZone: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
  UntypedStructuredData: { input: any; output: any; }
  UtcOffset: { input: any; output: any; }
};

/** A DateTime object. */
export type DateTime = {
  __typename?: 'DateTime';
  /** A string that will have a value of format ±hh:mm */
  offset: Scalars['UtcOffset']['output'];
  /** RFC 3339 compliant time string. */
  time: Scalars['Time']['output'];
  /** Type represents date and time as number of milliseconds from start of the UNIX epoch. */
  timestamp: Scalars['Timestamp']['output'];
  /** A field whose value exists in the standard IANA Time Zone Database. */
  timezone: Scalars['TimeZone']['output'];
};

/** A file object to represent an managed file. */
export type File = {
  __typename?: 'File';
  /** The description of the file. */
  description?: Maybe<Scalars['String']['output']>;
  /** The mime type of the file. */
  mime?: Maybe<Scalars['String']['output']>;
  /** The name of the file. */
  name?: Maybe<Scalars['String']['output']>;
  /** The size of the file in bytes. */
  size: Scalars['Int']['output'];
  /** The URL of the file. */
  url: Scalars['String']['output'];
};

/** A image object to represent an managed file. */
export type Image = {
  __typename?: 'Image';
  /** The alt text of the image. */
  alt?: Maybe<Scalars['String']['output']>;
  /** The height of the image. */
  height: Scalars['Int']['output'];
  /** The mime type of the image. */
  mime?: Maybe<Scalars['String']['output']>;
  /** The size of the image in bytes. */
  size: Scalars['Int']['output'];
  /** The title text of the image. */
  title?: Maybe<Scalars['String']['output']>;
  /** The URL of the image. */
  url: Scalars['String']['output'];
  /** The width of the image. */
  width: Scalars['Int']['output'];
};

/** Generic untyped input for key-value pairs. */
export type KeyValueInput = {
  key: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

/** A language definition provided by the CMS. */
export type Language = {
  __typename?: 'Language';
  /** The language direction. */
  direction?: Maybe<Scalars['String']['output']>;
  /** The language code. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language name. */
  name?: Maybe<Scalars['String']['output']>;
};

/** A link. */
export type Link = {
  __typename?: 'Link';
  /** Whether the link is internal to this website. */
  internal: Scalars['Boolean']['output'];
  /** The title of the link. */
  title?: Maybe<Scalars['String']['output']>;
  /** The URL of the link. */
  url?: Maybe<Scalars['String']['output']>;
};

/** Entity type menu. */
export type Menu = MenuInterface & {
  __typename?: 'Menu';
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The menu items. */
  items: Array<MenuItem>;
  /** The menu name. */
  name: Scalars['String']['output'];
};

/** List of menus available to load. */
export enum MenuAvailable {
  /** Header menu */
  HeaderMenu = 'HEADER_MENU'
}

/** Entity type menu. */
export type MenuInterface = {
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The menu items. */
  items: Array<MenuItem>;
  /** The menu name. */
  name: Scalars['String']['output'];
};

/** A menu item defined in the CMS. */
export type MenuItem = {
  __typename?: 'MenuItem';
  /** Attributes of this menu item. */
  attributes: MenuItemAttributes;
  /** Child menu items of this menu item. */
  children: Array<MenuItem>;
  /** The description of the menu item. */
  description?: Maybe<Scalars['String']['output']>;
  /** Whether this menu item is intended to be expanded. */
  expanded: Scalars['Boolean']['output'];
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** Whether this menu item links to an internal route. */
  internal: Scalars['Boolean']['output'];
  /** The route this menu item uses. Route loading can be disabled per menu type. */
  route?: Maybe<RouteUnion>;
  /** The title of the menu item. */
  title: Scalars['String']['output'];
  /** The URL of the menu item. */
  url?: Maybe<Scalars['String']['output']>;
};

/** Menu item options set within the CMS. */
export type MenuItemAttributes = {
  __typename?: 'MenuItemAttributes';
  class?: Maybe<Scalars['String']['output']>;
};

/** Entity type menu. */
export type MenuUnion = Menu;

/** A GraphQL mutation is a request that changes data on the server. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Placeholder field to enable schema mutation extension. */
  _: Scalars['Boolean']['output'];
};

/** Config for page */
export type NodeConfig = NodeInterface & {
  __typename?: 'NodeConfig';
  /** The time that the node was last edited. */
  changed: DateTime;
  /** The time that the node was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** Language */
  langcode: Language;
  /** URL alias */
  path: Scalars['String']['output'];
  /** Promoted to front page */
  promote: Scalars['Boolean']['output'];
  /** Sections Group */
  sectionsGroup?: Maybe<Array<NodeUnion>>;
  /** Published */
  status: Scalars['Boolean']['output'];
  /** Sticky at top of lists */
  sticky: Scalars['Boolean']['output'];
  /** Title */
  title: Scalars['String']['output'];
};

/** Entity type node. */
export type NodeInterface = {
  /** The time that the node was last edited. */
  changed: DateTime;
  /** The time that the node was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** Language */
  langcode: Language;
  /** URL alias */
  path: Scalars['String']['output'];
  /** Promoted to front page */
  promote: Scalars['Boolean']['output'];
  /** Published */
  status: Scalars['Boolean']['output'];
  /** Sticky at top of lists */
  sticky: Scalars['Boolean']['output'];
  /** Title */
  title: Scalars['String']['output'];
};

/** Basic presentation of content on the site */
export type NodeNode = NodeInterface & {
  __typename?: 'NodeNode';
  /** Action Title */
  actionTitle?: Maybe<Array<Scalars['String']['output']>>;
  /** Action Url */
  actionUrl?: Maybe<Array<Scalars['String']['output']>>;
  /** The time that the node was last edited. */
  changed: DateTime;
  /** The time that the node was created. */
  created: DateTime;
  /** Description */
  description?: Maybe<TextSummary>;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** Image */
  image?: Maybe<Image>;
  /** Label */
  labels?: Maybe<Array<Scalars['String']['output']>>;
  /** Language */
  langcode: Language;
  /** URL alias */
  path: Scalars['String']['output'];
  /** Promoted to front page */
  promote: Scalars['Boolean']['output'];
  /** Special */
  special?: Maybe<Scalars['String']['output']>;
  /** Published */
  status: Scalars['Boolean']['output'];
  /** Sticky at top of lists */
  sticky: Scalars['Boolean']['output'];
  /** Style Background */
  styleBackground?: Maybe<Scalars['String']['output']>;
  /** Style Color */
  styleColor?: Maybe<Scalars['String']['output']>;
  /** Style Padding */
  stylePadding?: Maybe<Scalars['String']['output']>;
  /** Subtitle */
  subtitle?: Maybe<Scalars['String']['output']>;
  /** Title */
  title: Scalars['String']['output'];
  /** Title As */
  titleAs?: Maybe<Scalars['String']['output']>;
  /** Title Text */
  titleText?: Maybe<Scalars['String']['output']>;
};

/** Group of nodes */
export type NodeSection = NodeInterface & {
  __typename?: 'NodeSection';
  /** The time that the node was last edited. */
  changed: DateTime;
  /** The time that the node was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** Language */
  langcode: Language;
  /** Nodes */
  nodes?: Maybe<Array<NodeUnion>>;
  /** URL alias */
  path: Scalars['String']['output'];
  /** Promoted to front page */
  promote: Scalars['Boolean']['output'];
  /** Section Name */
  sectionName: Scalars['String']['output'];
  /** Section Type */
  sectionType?: Maybe<Scalars['String']['output']>;
  /** Published */
  status: Scalars['Boolean']['output'];
  /** Sticky at top of lists */
  sticky: Scalars['Boolean']['output'];
  /** Style Background */
  styleBackground?: Maybe<Scalars['String']['output']>;
  /** Style Padding */
  stylePadding?: Maybe<Scalars['String']['output']>;
  /** Title */
  title: Scalars['String']['output'];
};

/** Group of sections */
export type NodeSectionGroup = NodeInterface & {
  __typename?: 'NodeSectionGroup';
  /** The time that the node was last edited. */
  changed: DateTime;
  /** The time that the node was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** Language */
  langcode: Language;
  /** URL alias */
  path: Scalars['String']['output'];
  /** Promoted to front page */
  promote: Scalars['Boolean']['output'];
  /** Sections */
  sections?: Maybe<Array<NodeUnion>>;
  /** Published */
  status: Scalars['Boolean']['output'];
  /** Sticky at top of lists */
  sticky: Scalars['Boolean']['output'];
  /** Title */
  title: Scalars['String']['output'];
};

/** Entity type node. */
export type NodeUnion = NodeConfig | NodeNode | NodeSection | NodeSectionGroup;

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type Query = {
  __typename?: 'Query';
  /** Schema information. */
  info: SchemaInformation;
  /** Load a Menu by name. */
  menu?: Maybe<Menu>;
  /** Load a Route by path. */
  route?: Maybe<RouteUnion>;
};


/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type QueryMenuArgs = {
  langcode?: InputMaybe<Scalars['String']['input']>;
  name: MenuAvailable;
};


/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type QueryRouteArgs = {
  langcode?: InputMaybe<Scalars['String']['input']>;
  path: Scalars['String']['input'];
};

/** Routes represent incoming requests that resolve to content. */
export type Route = {
  /** Whether this route is internal or external. */
  internal: Scalars['Boolean']['output'];
  /** URL of this route. */
  url: Scalars['String']['output'];
};

/** A list of possible entities that can be returned by URL. */
export type RouteEntityUnion = NodeConfig | NodeNode | NodeSection | NodeSectionGroup;

/** Route outside of this website. */
export type RouteExternal = Route & {
  __typename?: 'RouteExternal';
  /** Whether this route is internal or external. */
  internal: Scalars['Boolean']['output'];
  /** URL of this route. */
  url: Scalars['String']['output'];
};

/** Route within this website. */
export type RouteInternal = Route & {
  __typename?: 'RouteInternal';
  /** Breadcrumb links for this route. */
  breadcrumbs?: Maybe<Array<Link>>;
  /** Content assigned to this route. */
  entity?: Maybe<RouteEntityUnion>;
  /** Whether this route is internal or external. */
  internal: Scalars['Boolean']['output'];
  /** URL of this route. */
  url: Scalars['String']['output'];
};

/** Redirect to another URL with status. */
export type RouteRedirect = Route & {
  __typename?: 'RouteRedirect';
  /** Whether this route is internal or external. */
  internal: Scalars['Boolean']['output'];
  /** Utility prop. Always true for redirects. */
  redirect: Scalars['Boolean']['output'];
  /** Suggested status for redirect. Eg 301. */
  status: Scalars['Int']['output'];
  /** URL of this route. */
  url: Scalars['String']['output'];
};

/** Route types that can exist in the system. */
export type RouteUnion = RouteExternal | RouteInternal;

/** Schema information provided by the system. */
export type SchemaInformation = {
  __typename?: 'SchemaInformation';
  /** The schema description. */
  description?: Maybe<Scalars['String']['output']>;
  /** The internal path to the front page. */
  home?: Maybe<Scalars['String']['output']>;
  /** The schema version. */
  version?: Maybe<Scalars['String']['output']>;
};

/** Sort direction. */
export enum SortDirection {
  /** Ascending */
  Asc = 'ASC',
  /** Descending */
  Desc = 'DESC'
}

/** A processed text format defined by the CMS. */
export type Text = {
  __typename?: 'Text';
  /** The text format used to process the text value. */
  format?: Maybe<Scalars['String']['output']>;
  /** The processed text value. */
  processed?: Maybe<Scalars['Html']['output']>;
  /** The raw text value. */
  value?: Maybe<Scalars['String']['output']>;
};

/** A processed text format with summary defined by the CMS. */
export type TextSummary = {
  __typename?: 'TextSummary';
  /** The text format used to process the text value. */
  format?: Maybe<Scalars['String']['output']>;
  /** The processed text value. */
  processed?: Maybe<Scalars['Html']['output']>;
  /** The processed text summary. */
  summary?: Maybe<Scalars['Html']['output']>;
  /** The raw text value. */
  value?: Maybe<Scalars['String']['output']>;
};

/**
 * Unsupported entity or field type in the schema.
 * This entity may not have been enabled in the schema yet and is being referenced via entity reference.
 */
export type UnsupportedType = {
  __typename?: 'UnsupportedType';
  /** Unsupported type, always TRUE. */
  unsupported?: Maybe<Scalars['Boolean']['output']>;
};

export type NodeFragment = { __typename?: 'NodeNode', id: string, actionTitle?: Array<string> | null, actionUrl?: Array<string> | null, styleBackground?: string | null, styleColor?: string | null, stylePadding?: string | null, subtitle?: string | null, titleAs?: string | null, titleText?: string | null, labels?: Array<string> | null, special?: string | null, image?: { __typename?: 'Image', url: string, alt?: string | null } | null, description?: { __typename?: 'TextSummary', value?: string | null } | null };

export type SectionFragment = { __typename?: 'NodeSection', id: string, sectionName: string, sectionType?: string | null, styleBackground?: string | null, stylePadding?: string | null, nodes?: Array<{ __typename?: 'NodeConfig' } | { __typename?: 'NodeNode', id: string, actionTitle?: Array<string> | null, actionUrl?: Array<string> | null, styleBackground?: string | null, styleColor?: string | null, stylePadding?: string | null, subtitle?: string | null, titleAs?: string | null, titleText?: string | null, labels?: Array<string> | null, special?: string | null, image?: { __typename?: 'Image', url: string, alt?: string | null } | null, description?: { __typename?: 'TextSummary', value?: string | null } | null } | { __typename?: 'NodeSection' } | { __typename?: 'NodeSectionGroup' }> | null };

export type SectionGroupFragment = { __typename?: 'NodeSectionGroup', id: string, sections?: Array<{ __typename?: 'NodeConfig' } | { __typename?: 'NodeNode' } | { __typename?: 'NodeSection', id: string, sectionName: string, sectionType?: string | null, styleBackground?: string | null, stylePadding?: string | null, nodes?: Array<{ __typename?: 'NodeConfig' } | { __typename?: 'NodeNode', id: string, actionTitle?: Array<string> | null, actionUrl?: Array<string> | null, styleBackground?: string | null, styleColor?: string | null, stylePadding?: string | null, subtitle?: string | null, titleAs?: string | null, titleText?: string | null, labels?: Array<string> | null, special?: string | null, image?: { __typename?: 'Image', url: string, alt?: string | null } | null, description?: { __typename?: 'TextSummary', value?: string | null } | null } | { __typename?: 'NodeSection' } | { __typename?: 'NodeSectionGroup' }> | null } | { __typename?: 'NodeSectionGroup' }> | null };

export type GetNavigationQueryVariables = Exact<{
  name: MenuAvailable;
}>;


export type GetNavigationQuery = { __typename?: 'Query', menu?: { __typename?: 'Menu', items: Array<{ __typename?: 'MenuItem', id: string, title: string, url?: string | null }> } | null };

export type GetPageConfigQueryVariables = Exact<{
  path: Scalars['String']['input'];
}>;


export type GetPageConfigQuery = { __typename?: 'Query', route?: { __typename?: 'RouteExternal' } | { __typename?: 'RouteInternal', entity?: { __typename?: 'NodeConfig', id: string, sectionsGroup?: Array<{ __typename?: 'NodeConfig' } | { __typename?: 'NodeNode' } | { __typename?: 'NodeSection' } | { __typename?: 'NodeSectionGroup', id: string, sections?: Array<{ __typename?: 'NodeConfig' } | { __typename?: 'NodeNode' } | { __typename?: 'NodeSection', id: string, sectionName: string, sectionType?: string | null, styleBackground?: string | null, stylePadding?: string | null, nodes?: Array<{ __typename?: 'NodeConfig' } | { __typename?: 'NodeNode', id: string, actionTitle?: Array<string> | null, actionUrl?: Array<string> | null, styleBackground?: string | null, styleColor?: string | null, stylePadding?: string | null, subtitle?: string | null, titleAs?: string | null, titleText?: string | null, labels?: Array<string> | null, special?: string | null, image?: { __typename?: 'Image', url: string, alt?: string | null } | null, description?: { __typename?: 'TextSummary', value?: string | null } | null } | { __typename?: 'NodeSection' } | { __typename?: 'NodeSectionGroup' }> | null } | { __typename?: 'NodeSectionGroup' }> | null }> | null } | { __typename?: 'NodeNode' } | { __typename?: 'NodeSection' } | { __typename?: 'NodeSectionGroup' } | null } | null };

export type GetSectionsGroupQueryVariables = Exact<{
  path: Scalars['String']['input'];
}>;


export type GetSectionsGroupQuery = { __typename?: 'Query', route?: { __typename?: 'RouteExternal' } | { __typename?: 'RouteInternal', entity?: { __typename?: 'NodeConfig' } | { __typename?: 'NodeNode' } | { __typename?: 'NodeSection' } | { __typename?: 'NodeSectionGroup', id: string, sections?: Array<{ __typename?: 'NodeConfig' } | { __typename?: 'NodeNode' } | { __typename?: 'NodeSection', id: string, sectionName: string, sectionType?: string | null, styleBackground?: string | null, stylePadding?: string | null, nodes?: Array<{ __typename?: 'NodeConfig' } | { __typename?: 'NodeNode', id: string, actionTitle?: Array<string> | null, actionUrl?: Array<string> | null, styleBackground?: string | null, styleColor?: string | null, stylePadding?: string | null, subtitle?: string | null, titleAs?: string | null, titleText?: string | null, labels?: Array<string> | null, special?: string | null, image?: { __typename?: 'Image', url: string, alt?: string | null } | null, description?: { __typename?: 'TextSummary', value?: string | null } | null } | { __typename?: 'NodeSection' } | { __typename?: 'NodeSectionGroup' }> | null } | { __typename?: 'NodeSectionGroup' }> | null } | null } | null };

export const NodeFragmentDoc = gql`
    fragment Node on NodeNode {
  id
  actionTitle
  actionUrl
  image {
    url
    alt
  }
  description {
    value
  }
  styleBackground
  styleColor
  stylePadding
  subtitle
  titleAs
  titleText
  labels
  special
}
    `;
export const SectionFragmentDoc = gql`
    fragment Section on NodeSection {
  id
  nodes {
    ...Node
  }
  sectionName
  sectionType
  styleBackground
  stylePadding
}
    ${NodeFragmentDoc}`;
export const SectionGroupFragmentDoc = gql`
    fragment SectionGroup on NodeSectionGroup {
  id
  sections {
    ...Section
  }
}
    ${SectionFragmentDoc}`;
export const GetNavigationDocument = gql`
    query GetNavigation($name: MenuAvailable!) {
  menu(name: $name) {
    items {
      id
      title
      url
    }
  }
}
    `;

/**
 * __useGetNavigationQuery__
 *
 * To run a query within a React component, call `useGetNavigationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNavigationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNavigationQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetNavigationQuery(baseOptions: Apollo.QueryHookOptions<GetNavigationQuery, GetNavigationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNavigationQuery, GetNavigationQueryVariables>(GetNavigationDocument, options);
      }
export function useGetNavigationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNavigationQuery, GetNavigationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNavigationQuery, GetNavigationQueryVariables>(GetNavigationDocument, options);
        }
export function useGetNavigationSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetNavigationQuery, GetNavigationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetNavigationQuery, GetNavigationQueryVariables>(GetNavigationDocument, options);
        }
export type GetNavigationQueryHookResult = ReturnType<typeof useGetNavigationQuery>;
export type GetNavigationLazyQueryHookResult = ReturnType<typeof useGetNavigationLazyQuery>;
export type GetNavigationSuspenseQueryHookResult = ReturnType<typeof useGetNavigationSuspenseQuery>;
export type GetNavigationQueryResult = Apollo.QueryResult<GetNavigationQuery, GetNavigationQueryVariables>;
export const GetPageConfigDocument = gql`
    query GetPageConfig($path: String!) {
  route(path: $path) {
    ... on RouteInternal {
      entity {
        ... on NodeConfig {
          id
          sectionsGroup {
            ... on NodeSectionGroup {
              ...SectionGroup
            }
          }
        }
      }
    }
  }
}
    ${SectionGroupFragmentDoc}`;

/**
 * __useGetPageConfigQuery__
 *
 * To run a query within a React component, call `useGetPageConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPageConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPageConfigQuery({
 *   variables: {
 *      path: // value for 'path'
 *   },
 * });
 */
export function useGetPageConfigQuery(baseOptions: Apollo.QueryHookOptions<GetPageConfigQuery, GetPageConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPageConfigQuery, GetPageConfigQueryVariables>(GetPageConfigDocument, options);
      }
export function useGetPageConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPageConfigQuery, GetPageConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPageConfigQuery, GetPageConfigQueryVariables>(GetPageConfigDocument, options);
        }
export function useGetPageConfigSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPageConfigQuery, GetPageConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPageConfigQuery, GetPageConfigQueryVariables>(GetPageConfigDocument, options);
        }
export type GetPageConfigQueryHookResult = ReturnType<typeof useGetPageConfigQuery>;
export type GetPageConfigLazyQueryHookResult = ReturnType<typeof useGetPageConfigLazyQuery>;
export type GetPageConfigSuspenseQueryHookResult = ReturnType<typeof useGetPageConfigSuspenseQuery>;
export type GetPageConfigQueryResult = Apollo.QueryResult<GetPageConfigQuery, GetPageConfigQueryVariables>;
export const GetSectionsGroupDocument = gql`
    query GetSectionsGroup($path: String!) {
  route(path: $path) {
    ... on RouteInternal {
      entity {
        ...SectionGroup
      }
    }
  }
}
    ${SectionGroupFragmentDoc}`;

/**
 * __useGetSectionsGroupQuery__
 *
 * To run a query within a React component, call `useGetSectionsGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSectionsGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSectionsGroupQuery({
 *   variables: {
 *      path: // value for 'path'
 *   },
 * });
 */
export function useGetSectionsGroupQuery(baseOptions: Apollo.QueryHookOptions<GetSectionsGroupQuery, GetSectionsGroupQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSectionsGroupQuery, GetSectionsGroupQueryVariables>(GetSectionsGroupDocument, options);
      }
export function useGetSectionsGroupLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSectionsGroupQuery, GetSectionsGroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSectionsGroupQuery, GetSectionsGroupQueryVariables>(GetSectionsGroupDocument, options);
        }
export function useGetSectionsGroupSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetSectionsGroupQuery, GetSectionsGroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSectionsGroupQuery, GetSectionsGroupQueryVariables>(GetSectionsGroupDocument, options);
        }
export type GetSectionsGroupQueryHookResult = ReturnType<typeof useGetSectionsGroupQuery>;
export type GetSectionsGroupLazyQueryHookResult = ReturnType<typeof useGetSectionsGroupLazyQuery>;
export type GetSectionsGroupSuspenseQueryHookResult = ReturnType<typeof useGetSectionsGroupSuspenseQuery>;
export type GetSectionsGroupQueryResult = Apollo.QueryResult<GetSectionsGroupQuery, GetSectionsGroupQueryVariables>;