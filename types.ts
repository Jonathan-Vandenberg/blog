import { GraphQLResolveInfo } from 'graphql';
import { UserMessage as UserMessageModel } from '@prisma/client';
import { GraphQLContext } from './pages/api/index';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  addUserMessage: UserMessage;
};


export type MutationAddUserMessageArgs = {
  input: UserMessageInput;
};

export type Query = {
  __typename?: 'Query';
  userMessages: Array<Maybe<UserMessage>>;
};

export type UserMessage = {
  __typename?: 'UserMessage';
  email: Scalars['String'];
  id: Scalars['ID'];
  message: Scalars['String'];
  name: Scalars['String'];
};

export type UserMessageInput = {
  email: Scalars['String'];
  id: Scalars['ID'];
  message: Scalars['String'];
  name: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  UserMessage: ResolverTypeWrapper<UserMessageModel>;
  UserMessageInput: UserMessageInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  Mutation: {};
  Query: {};
  String: Scalars['String'];
  UserMessage: UserMessageModel;
  UserMessageInput: UserMessageInput;
};

export type MutationResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addUserMessage?: Resolver<ResolversTypes['UserMessage'], ParentType, ContextType, RequireFields<MutationAddUserMessageArgs, 'input'>>;
};

export type QueryResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  userMessages?: Resolver<Array<Maybe<ResolversTypes['UserMessage']>>, ParentType, ContextType>;
};

export type UserMessageResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['UserMessage'] = ResolversParentTypes['UserMessage']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = GraphQLContext> = {
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UserMessage?: UserMessageResolvers<ContextType>;
};


export const UserMessageFragmentDoc = gql`
    fragment UserMessage on UserMessage {
  email
  name
  id
  message
}
    `;
export const AddUserMessageDocument = gql`
    mutation AddUserMessage($input: UserMessageInput!) {
  addUserMessage(input: $input) {
    ...UserMessage
  }
}
    ${UserMessageFragmentDoc}`;
export type AddUserMessageMutationFn = Apollo.MutationFunction<AddUserMessageMutation, AddUserMessageMutationVariables>;

/**
 * __useAddUserMessageMutation__
 *
 * To run a mutation, you first call `useAddUserMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMessageMutation, { data, loading, error }] = useAddUserMessageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddUserMessageMutation(baseOptions?: Apollo.MutationHookOptions<AddUserMessageMutation, AddUserMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUserMessageMutation, AddUserMessageMutationVariables>(AddUserMessageDocument, options);
      }
export type AddUserMessageMutationHookResult = ReturnType<typeof useAddUserMessageMutation>;
export type AddUserMessageMutationResult = Apollo.MutationResult<AddUserMessageMutation>;
export type AddUserMessageMutationOptions = Apollo.BaseMutationOptions<AddUserMessageMutation, AddUserMessageMutationVariables>;
export const UserMessagesDocument = gql`
    query UserMessages {
  userMessages {
    ...UserMessage
  }
}
    ${UserMessageFragmentDoc}`;

/**
 * __useUserMessagesQuery__
 *
 * To run a query within a React component, call `useUserMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserMessagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserMessagesQuery(baseOptions?: Apollo.QueryHookOptions<UserMessagesQuery, UserMessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserMessagesQuery, UserMessagesQueryVariables>(UserMessagesDocument, options);
      }
export function useUserMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserMessagesQuery, UserMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserMessagesQuery, UserMessagesQueryVariables>(UserMessagesDocument, options);
        }
export type UserMessagesQueryHookResult = ReturnType<typeof useUserMessagesQuery>;
export type UserMessagesLazyQueryHookResult = ReturnType<typeof useUserMessagesLazyQuery>;
export type UserMessagesQueryResult = Apollo.QueryResult<UserMessagesQuery, UserMessagesQueryVariables>;
export type AddUserMessageMutationVariables = Exact<{
  input: UserMessageInput;
}>;


export type AddUserMessageMutation = { __typename?: 'Mutation', addUserMessage: { __typename?: 'UserMessage', email: string, name: string, id: string, message: string } };

export type UserMessageFragment = { __typename?: 'UserMessage', email: string, name: string, id: string, message: string };

export type UserMessagesQueryVariables = Exact<{ [key: string]: never; }>;


export type UserMessagesQuery = { __typename?: 'Query', userMessages: Array<{ __typename?: 'UserMessage', email: string, name: string, id: string, message: string } | null> };
