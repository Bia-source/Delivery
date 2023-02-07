import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Clients = {
  __typename?: 'Clients';
  Deliveries?: Maybe<Array<Maybe<Deliveries>>>;
  adm?: Maybe<Scalars['Boolean']>;
  adress?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type Deliveries = {
  __typename?: 'Deliveries';
  client?: Maybe<Clients>;
  created_at?: Maybe<Scalars['Date']>;
  deliveryman?: Maybe<Deliveryman>;
  end_at?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  id_client?: Maybe<Scalars['String']>;
  id_deliveryman?: Maybe<Scalars['String']>;
  item_name?: Maybe<Array<Maybe<Itens_Info_Product>>>;
  status?: Maybe<Status>;
};

export type DeliveryInfo = {
  __typename?: 'DeliveryInfo';
  created_at?: Maybe<Scalars['Date']>;
  end_at?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  id_deliveryman?: Maybe<Scalars['String']>;
  itens?: Maybe<Array<Maybe<ItensDelivery>>>;
  status?: Maybe<Scalars['String']>;
};

export type Deliveryman = {
  __typename?: 'Deliveryman';
  Deliveries?: Maybe<Array<Maybe<Deliveries>>>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type ItensDelivery = {
  __typename?: 'ItensDelivery';
  id: Scalars['ID'];
  id_delivery?: Maybe<Scalars['String']>;
  id_product?: Maybe<Scalars['String']>;
  productInfo?: Maybe<ProductInfoDelivery>;
  quantity?: Maybe<Scalars['Int']>;
};

export type Itens_Info_Product = {
  __typename?: 'Itens_Info_Product';
  delivery?: Maybe<Deliveries>;
  id?: Maybe<Scalars['String']>;
  id_delivery?: Maybe<Scalars['String']>;
  id_product?: Maybe<Scalars['String']>;
  produto?: Maybe<Product>;
  quantity?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createProduct?: Maybe<Product>;
  deleteProduct?: Maybe<Product>;
};


export type MutationCreateProductArgs = {
  discount: Scalars['Int'];
  product_category: Scalars['String'];
  product_name: Scalars['String'];
  quantity_stock: Scalars['Int'];
  status_adm: Scalars['Boolean'];
  value: Scalars['Int'];
};


export type MutationDeleteProductArgs = {
  id_product: Scalars['String'];
  status_adm: Scalars['Boolean'];
};

export type Product = {
  __typename?: 'Product';
  discount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  itens_info_product?: Maybe<Array<Maybe<Itens_Info_Product>>>;
  product_category?: Maybe<Scalars['String']>;
  product_name?: Maybe<Scalars['String']>;
  quantity_stock?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

export type ProductInfoDelivery = {
  __typename?: 'ProductInfoDelivery';
  category?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  getAllDeliveries?: Maybe<Array<Maybe<ReturnDeliveries>>>;
  getAllProducts?: Maybe<Array<Maybe<Product>>>;
  getDeliveryStatus?: Maybe<Array<Maybe<ReturnDeliveries>>>;
  getProductById?: Maybe<Product>;
  getProductByName?: Maybe<Product>;
};


export type QueryGetAllDeliveriesArgs = {
  id_user: Scalars['String'];
};


export type QueryGetDeliveryStatusArgs = {
  status: Status;
};


export type QueryGetProductByIdArgs = {
  id_product: Scalars['String'];
};


export type QueryGetProductByNameArgs = {
  product_name: Scalars['String'];
};

export type ReturnDeliveries = {
  __typename?: 'ReturnDeliveries';
  deliveryInfo?: Maybe<DeliveryInfo>;
  userInfo?: Maybe<UserInfo>;
};

export enum Status {
  Aguardando = 'AGUARDANDO',
  Entregue = 'ENTREGUE',
  Transito = 'TRANSITO'
}

export type UserInfo = {
  __typename?: 'UserInfo';
  id_client?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
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
  Clients: ResolverTypeWrapper<Clients>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Deliveries: ResolverTypeWrapper<Deliveries>;
  DeliveryInfo: ResolverTypeWrapper<DeliveryInfo>;
  Deliveryman: ResolverTypeWrapper<Deliveryman>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  ItensDelivery: ResolverTypeWrapper<ItensDelivery>;
  Itens_Info_Product: ResolverTypeWrapper<Itens_Info_Product>;
  Mutation: ResolverTypeWrapper<{}>;
  Product: ResolverTypeWrapper<Product>;
  ProductInfoDelivery: ResolverTypeWrapper<ProductInfoDelivery>;
  Query: ResolverTypeWrapper<{}>;
  ReturnDeliveries: ResolverTypeWrapper<ReturnDeliveries>;
  Status: Status;
  String: ResolverTypeWrapper<Scalars['String']>;
  UserInfo: ResolverTypeWrapper<UserInfo>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Clients: Clients;
  Date: Scalars['Date'];
  Deliveries: Deliveries;
  DeliveryInfo: DeliveryInfo;
  Deliveryman: Deliveryman;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  ItensDelivery: ItensDelivery;
  Itens_Info_Product: Itens_Info_Product;
  Mutation: {};
  Product: Product;
  ProductInfoDelivery: ProductInfoDelivery;
  Query: {};
  ReturnDeliveries: ReturnDeliveries;
  String: Scalars['String'];
  UserInfo: UserInfo;
};

export type ClientsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Clients'] = ResolversParentTypes['Clients']> = {
  Deliveries?: Resolver<Maybe<Array<Maybe<ResolversTypes['Deliveries']>>>, ParentType, ContextType>;
  adm?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  adress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type DeliveriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Deliveries'] = ResolversParentTypes['Deliveries']> = {
  client?: Resolver<Maybe<ResolversTypes['Clients']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  deliveryman?: Resolver<Maybe<ResolversTypes['Deliveryman']>, ParentType, ContextType>;
  end_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id_client?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id_deliveryman?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  item_name?: Resolver<Maybe<Array<Maybe<ResolversTypes['Itens_Info_Product']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Status']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeliveryInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeliveryInfo'] = ResolversParentTypes['DeliveryInfo']> = {
  created_at?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  end_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id_deliveryman?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  itens?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItensDelivery']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeliverymanResolvers<ContextType = any, ParentType extends ResolversParentTypes['Deliveryman'] = ResolversParentTypes['Deliveryman']> = {
  Deliveries?: Resolver<Maybe<Array<Maybe<ResolversTypes['Deliveries']>>>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItensDeliveryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItensDelivery'] = ResolversParentTypes['ItensDelivery']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id_delivery?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id_product?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productInfo?: Resolver<Maybe<ResolversTypes['ProductInfoDelivery']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Itens_Info_ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Itens_Info_Product'] = ResolversParentTypes['Itens_Info_Product']> = {
  delivery?: Resolver<Maybe<ResolversTypes['Deliveries']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id_delivery?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id_product?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  produto?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'discount' | 'product_category' | 'product_name' | 'quantity_stock' | 'status_adm' | 'value'>>;
  deleteProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationDeleteProductArgs, 'id_product' | 'status_adm'>>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  discount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  itens_info_product?: Resolver<Maybe<Array<Maybe<ResolversTypes['Itens_Info_Product']>>>, ParentType, ContextType>;
  product_category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity_stock?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductInfoDeliveryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductInfoDelivery'] = ResolversParentTypes['ProductInfoDelivery']> = {
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAllDeliveries?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReturnDeliveries']>>>, ParentType, ContextType, RequireFields<QueryGetAllDeliveriesArgs, 'id_user'>>;
  getAllProducts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  getDeliveryStatus?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReturnDeliveries']>>>, ParentType, ContextType, RequireFields<QueryGetDeliveryStatusArgs, 'status'>>;
  getProductById?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryGetProductByIdArgs, 'id_product'>>;
  getProductByName?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryGetProductByNameArgs, 'product_name'>>;
};

export type ReturnDeliveriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReturnDeliveries'] = ResolversParentTypes['ReturnDeliveries']> = {
  deliveryInfo?: Resolver<Maybe<ResolversTypes['DeliveryInfo']>, ParentType, ContextType>;
  userInfo?: Resolver<Maybe<ResolversTypes['UserInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserInfo'] = ResolversParentTypes['UserInfo']> = {
  id_client?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Clients?: ClientsResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Deliveries?: DeliveriesResolvers<ContextType>;
  DeliveryInfo?: DeliveryInfoResolvers<ContextType>;
  Deliveryman?: DeliverymanResolvers<ContextType>;
  ItensDelivery?: ItensDeliveryResolvers<ContextType>;
  Itens_Info_Product?: Itens_Info_ProductResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductInfoDelivery?: ProductInfoDeliveryResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ReturnDeliveries?: ReturnDeliveriesResolvers<ContextType>;
  UserInfo?: UserInfoResolvers<ContextType>;
};

