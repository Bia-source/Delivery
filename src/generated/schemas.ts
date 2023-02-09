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
  status?: Maybe<Scalars['String']>;
};

export type DeliveryClientInfoReturnCreateDelivery = {
  __typename?: 'DeliveryClientInfoReturnCreateDelivery';
  adress?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type DeliveryDeliverymanInfoReturnCreateDelivery = {
  __typename?: 'DeliveryDeliverymanInfoReturnCreateDelivery';
  username?: Maybe<Scalars['String']>;
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

export type DeliveryInfoReturnCreateDelivery = {
  __typename?: 'DeliveryInfoReturnCreateDelivery';
  client?: Maybe<DeliveryClientInfoReturnCreateDelivery>;
  created_at?: Maybe<Scalars['Date']>;
  deliveryman?: Maybe<DeliveryDeliverymanInfoReturnCreateDelivery>;
  end_at?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type DeliveryProductInfoReturnCreateDelivery = {
  __typename?: 'DeliveryProductInfoReturnCreateDelivery';
  discount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  product_category?: Maybe<Scalars['String']>;
  product_name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
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

export type ItensReturnCreateDelivery = {
  __typename?: 'ItensReturnCreateDelivery';
  delivery?: Maybe<Deliveries>;
  produto?: Maybe<Product>;
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
  authenticateClient?: Maybe<ReturnAuthenticate>;
  authenticateDeliveryman?: Maybe<ReturnAuthenticate>;
  createClient?: Maybe<ReturnClient>;
  createDelivery?: Maybe<ReturnCreateDelivery>;
  createDeliveryman?: Maybe<ReturnDeliveryman>;
  createProduct?: Maybe<Product>;
  deleteClient?: Maybe<ReturnClient>;
  deleteDelivery?: Maybe<ReturnDeleteDelivery>;
  deleteProduct?: Maybe<Product>;
  insertDeliveryman?: Maybe<ReturnInsertDeliverymanInOrder>;
  updateProductAdm?: Maybe<Product>;
  updateRegisterClient?: Maybe<ReturnClient>;
  updateRegisterDeliveryman?: Maybe<ReturnDeliveryman>;
};


export type MutationAuthenticateClientArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationAuthenticateDeliverymanArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationCreateClientArgs = {
  adm?: InputMaybe<Scalars['Boolean']>;
  adress: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationCreateDeliveryArgs = {
  id_client: Scalars['String'];
  name: Scalars['String'];
  quantity: Scalars['Int'];
  username: Scalars['String'];
};


export type MutationCreateDeliverymanArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationCreateProductArgs = {
  discount: Scalars['Int'];
  product_category: Scalars['String'];
  product_name: Scalars['String'];
  quantity_stock: Scalars['Int'];
  status_adm: Scalars['Boolean'];
  value: Scalars['Int'];
};


export type MutationDeleteClientArgs = {
  id_client: Scalars['String'];
};


export type MutationDeleteDeliveryArgs = {
  id_client: Scalars['String'];
  id_delivery: Scalars['String'];
};


export type MutationDeleteProductArgs = {
  id_product: Scalars['String'];
  status_adm: Scalars['Boolean'];
};


export type MutationInsertDeliverymanArgs = {
  email: Scalars['String'];
  id_delivery: Scalars['String'];
  id_deliveryman: Scalars['String'];
  username: Scalars['String'];
};


export type MutationUpdateProductAdmArgs = {
  discount?: InputMaybe<Scalars['Int']>;
  id_product: Scalars['String'];
  product_category?: InputMaybe<Scalars['String']>;
  product_name?: InputMaybe<Scalars['String']>;
  quantity_stock?: InputMaybe<Scalars['Int']>;
  status_adm: Scalars['Boolean'];
  value?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateRegisterClientArgs = {
  email?: InputMaybe<Scalars['String']>;
  id_client: Scalars['String'];
  username?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateRegisterDeliverymanArgs = {
  email?: InputMaybe<Scalars['String']>;
  id_deliveryman: Scalars['String'];
  username?: InputMaybe<Scalars['String']>;
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
  getClientById?: Maybe<Clients>;
  getDeliveryByCreated?: Maybe<Array<Maybe<ReturnDeliveryByCreated>>>;
  getDeliveryByEnd?: Maybe<Array<Maybe<ReturnDeliveryByCreated>>>;
  getDeliveryById?: Maybe<ReturnDeliveryById>;
  getDeliveryByIdClient?: Maybe<Array<Maybe<ReturnDeliveryById>>>;
  getDeliveryByIdDeliveryman?: Maybe<Array<Maybe<ReturnDeliveryById>>>;
  getDeliveryStatus?: Maybe<Array<Maybe<ReturnDeliveries>>>;
  getProductById?: Maybe<Product>;
  getProductByName?: Maybe<Product>;
};


export type QueryGetAllDeliveriesArgs = {
  id_user: Scalars['String'];
};


export type QueryGetClientByIdArgs = {
  id_client: Scalars['String'];
};


export type QueryGetDeliveryByCreatedArgs = {
  findDateEnd: Scalars['String'];
  findDateInitial: Scalars['String'];
};


export type QueryGetDeliveryByEndArgs = {
  findDateEnd: Scalars['String'];
  findDateInitial: Scalars['String'];
};


export type QueryGetDeliveryByIdArgs = {
  id_delivery: Scalars['String'];
};


export type QueryGetDeliveryByIdClientArgs = {
  id_client: Scalars['String'];
};


export type QueryGetDeliveryByIdDeliverymanArgs = {
  id_deliveryman: Scalars['String'];
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

export type ReturnAuthenticate = {
  __typename?: 'ReturnAuthenticate';
  client?: Maybe<ReturnInfoUser>;
  token?: Maybe<Scalars['String']>;
};

export type ReturnClient = {
  __typename?: 'ReturnClient';
  Deliveries?: Maybe<Array<Maybe<Deliveries>>>;
  adm?: Maybe<Scalars['Boolean']>;
  adress?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type ReturnCreateDelivery = {
  __typename?: 'ReturnCreateDelivery';
  order?: Maybe<Array<Maybe<ReturnOrderCreateDelivery>>>;
  user?: Maybe<Scalars['String']>;
};

export type ReturnDeleteDelivery = {
  __typename?: 'ReturnDeleteDelivery';
  created_at?: Maybe<Scalars['Date']>;
  end_at?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  id_client?: Maybe<Scalars['String']>;
  id_deliveryman?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type ReturnDeliveries = {
  __typename?: 'ReturnDeliveries';
  deliveryInfo?: Maybe<DeliveryInfo>;
  userInfo?: Maybe<UserInfo>;
};

export type ReturnDeliveryByCreated = {
  __typename?: 'ReturnDeliveryByCreated';
  created_at?: Maybe<Scalars['Date']>;
  end_at?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  id_client?: Maybe<Scalars['String']>;
  id_deliveryman?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type ReturnDeliveryById = {
  __typename?: 'ReturnDeliveryById';
  client?: Maybe<DeliveryClientInfoReturnCreateDelivery>;
  created_at?: Maybe<Scalars['Date']>;
  end_at?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  id_client?: Maybe<Scalars['String']>;
  id_deliveryman?: Maybe<Scalars['String']>;
  item_name?: Maybe<Array<Maybe<ReturnItemNameInfoByIdClient>>>;
  status?: Maybe<Scalars['String']>;
};

export type ReturnDeliveryman = {
  __typename?: 'ReturnDeliveryman';
  Deliveries?: Maybe<Array<Maybe<Deliveries>>>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type ReturnInfoUser = {
  __typename?: 'ReturnInfoUser';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type ReturnInsertDeliverymanInOrder = {
  __typename?: 'ReturnInsertDeliverymanInOrder';
  data?: Maybe<Deliveries>;
  user?: Maybe<Scalars['String']>;
};

export type ReturnItemNameInfoByIdClient = {
  __typename?: 'ReturnItemNameInfoByIdClient';
  id?: Maybe<Scalars['String']>;
  id_delivery?: Maybe<Scalars['String']>;
  id_product?: Maybe<Scalars['String']>;
  produto?: Maybe<ReturnProductItemName>;
  quantity?: Maybe<Scalars['Int']>;
};

export type ReturnOrderCreateDelivery = {
  __typename?: 'ReturnOrderCreateDelivery';
  delivery?: Maybe<DeliveryInfoReturnCreateDelivery>;
  id_delivery?: Maybe<Scalars['String']>;
  id_product?: Maybe<Scalars['String']>;
  produto?: Maybe<DeliveryProductInfoReturnCreateDelivery>;
  quantity?: Maybe<Scalars['Int']>;
};

export type ReturnProductItemName = {
  __typename?: 'ReturnProductItemName';
  discount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  product_category?: Maybe<Scalars['String']>;
  product_name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
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
  DeliveryClientInfoReturnCreateDelivery: ResolverTypeWrapper<DeliveryClientInfoReturnCreateDelivery>;
  DeliveryDeliverymanInfoReturnCreateDelivery: ResolverTypeWrapper<DeliveryDeliverymanInfoReturnCreateDelivery>;
  DeliveryInfo: ResolverTypeWrapper<DeliveryInfo>;
  DeliveryInfoReturnCreateDelivery: ResolverTypeWrapper<DeliveryInfoReturnCreateDelivery>;
  DeliveryProductInfoReturnCreateDelivery: ResolverTypeWrapper<DeliveryProductInfoReturnCreateDelivery>;
  Deliveryman: ResolverTypeWrapper<Deliveryman>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  ItensDelivery: ResolverTypeWrapper<ItensDelivery>;
  ItensReturnCreateDelivery: ResolverTypeWrapper<ItensReturnCreateDelivery>;
  Itens_Info_Product: ResolverTypeWrapper<Itens_Info_Product>;
  Mutation: ResolverTypeWrapper<{}>;
  Product: ResolverTypeWrapper<Product>;
  ProductInfoDelivery: ResolverTypeWrapper<ProductInfoDelivery>;
  Query: ResolverTypeWrapper<{}>;
  ReturnAuthenticate: ResolverTypeWrapper<ReturnAuthenticate>;
  ReturnClient: ResolverTypeWrapper<ReturnClient>;
  ReturnCreateDelivery: ResolverTypeWrapper<ReturnCreateDelivery>;
  ReturnDeleteDelivery: ResolverTypeWrapper<ReturnDeleteDelivery>;
  ReturnDeliveries: ResolverTypeWrapper<ReturnDeliveries>;
  ReturnDeliveryByCreated: ResolverTypeWrapper<ReturnDeliveryByCreated>;
  ReturnDeliveryById: ResolverTypeWrapper<ReturnDeliveryById>;
  ReturnDeliveryman: ResolverTypeWrapper<ReturnDeliveryman>;
  ReturnInfoUser: ResolverTypeWrapper<ReturnInfoUser>;
  ReturnInsertDeliverymanInOrder: ResolverTypeWrapper<ReturnInsertDeliverymanInOrder>;
  ReturnItemNameInfoByIdClient: ResolverTypeWrapper<ReturnItemNameInfoByIdClient>;
  ReturnOrderCreateDelivery: ResolverTypeWrapper<ReturnOrderCreateDelivery>;
  ReturnProductItemName: ResolverTypeWrapper<ReturnProductItemName>;
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
  DeliveryClientInfoReturnCreateDelivery: DeliveryClientInfoReturnCreateDelivery;
  DeliveryDeliverymanInfoReturnCreateDelivery: DeliveryDeliverymanInfoReturnCreateDelivery;
  DeliveryInfo: DeliveryInfo;
  DeliveryInfoReturnCreateDelivery: DeliveryInfoReturnCreateDelivery;
  DeliveryProductInfoReturnCreateDelivery: DeliveryProductInfoReturnCreateDelivery;
  Deliveryman: Deliveryman;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  ItensDelivery: ItensDelivery;
  ItensReturnCreateDelivery: ItensReturnCreateDelivery;
  Itens_Info_Product: Itens_Info_Product;
  Mutation: {};
  Product: Product;
  ProductInfoDelivery: ProductInfoDelivery;
  Query: {};
  ReturnAuthenticate: ReturnAuthenticate;
  ReturnClient: ReturnClient;
  ReturnCreateDelivery: ReturnCreateDelivery;
  ReturnDeleteDelivery: ReturnDeleteDelivery;
  ReturnDeliveries: ReturnDeliveries;
  ReturnDeliveryByCreated: ReturnDeliveryByCreated;
  ReturnDeliveryById: ReturnDeliveryById;
  ReturnDeliveryman: ReturnDeliveryman;
  ReturnInfoUser: ReturnInfoUser;
  ReturnInsertDeliverymanInOrder: ReturnInsertDeliverymanInOrder;
  ReturnItemNameInfoByIdClient: ReturnItemNameInfoByIdClient;
  ReturnOrderCreateDelivery: ReturnOrderCreateDelivery;
  ReturnProductItemName: ReturnProductItemName;
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
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeliveryClientInfoReturnCreateDeliveryResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeliveryClientInfoReturnCreateDelivery'] = ResolversParentTypes['DeliveryClientInfoReturnCreateDelivery']> = {
  adress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeliveryDeliverymanInfoReturnCreateDeliveryResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeliveryDeliverymanInfoReturnCreateDelivery'] = ResolversParentTypes['DeliveryDeliverymanInfoReturnCreateDelivery']> = {
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type DeliveryInfoReturnCreateDeliveryResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeliveryInfoReturnCreateDelivery'] = ResolversParentTypes['DeliveryInfoReturnCreateDelivery']> = {
  client?: Resolver<Maybe<ResolversTypes['DeliveryClientInfoReturnCreateDelivery']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  deliveryman?: Resolver<Maybe<ResolversTypes['DeliveryDeliverymanInfoReturnCreateDelivery']>, ParentType, ContextType>;
  end_at?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeliveryProductInfoReturnCreateDeliveryResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeliveryProductInfoReturnCreateDelivery'] = ResolversParentTypes['DeliveryProductInfoReturnCreateDelivery']> = {
  discount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
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

export type ItensReturnCreateDeliveryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItensReturnCreateDelivery'] = ResolversParentTypes['ItensReturnCreateDelivery']> = {
  delivery?: Resolver<Maybe<ResolversTypes['Deliveries']>, ParentType, ContextType>;
  produto?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
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
  authenticateClient?: Resolver<Maybe<ResolversTypes['ReturnAuthenticate']>, ParentType, ContextType, RequireFields<MutationAuthenticateClientArgs, 'password' | 'username'>>;
  authenticateDeliveryman?: Resolver<Maybe<ResolversTypes['ReturnAuthenticate']>, ParentType, ContextType, RequireFields<MutationAuthenticateDeliverymanArgs, 'password' | 'username'>>;
  createClient?: Resolver<Maybe<ResolversTypes['ReturnClient']>, ParentType, ContextType, RequireFields<MutationCreateClientArgs, 'adress' | 'email' | 'password' | 'username'>>;
  createDelivery?: Resolver<Maybe<ResolversTypes['ReturnCreateDelivery']>, ParentType, ContextType, RequireFields<MutationCreateDeliveryArgs, 'id_client' | 'name' | 'quantity' | 'username'>>;
  createDeliveryman?: Resolver<Maybe<ResolversTypes['ReturnDeliveryman']>, ParentType, ContextType, RequireFields<MutationCreateDeliverymanArgs, 'email' | 'password' | 'username'>>;
  createProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'discount' | 'product_category' | 'product_name' | 'quantity_stock' | 'status_adm' | 'value'>>;
  deleteClient?: Resolver<Maybe<ResolversTypes['ReturnClient']>, ParentType, ContextType, RequireFields<MutationDeleteClientArgs, 'id_client'>>;
  deleteDelivery?: Resolver<Maybe<ResolversTypes['ReturnDeleteDelivery']>, ParentType, ContextType, RequireFields<MutationDeleteDeliveryArgs, 'id_client' | 'id_delivery'>>;
  deleteProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationDeleteProductArgs, 'id_product' | 'status_adm'>>;
  insertDeliveryman?: Resolver<Maybe<ResolversTypes['ReturnInsertDeliverymanInOrder']>, ParentType, ContextType, RequireFields<MutationInsertDeliverymanArgs, 'email' | 'id_delivery' | 'id_deliveryman' | 'username'>>;
  updateProductAdm?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationUpdateProductAdmArgs, 'id_product' | 'status_adm'>>;
  updateRegisterClient?: Resolver<Maybe<ResolversTypes['ReturnClient']>, ParentType, ContextType, RequireFields<MutationUpdateRegisterClientArgs, 'id_client'>>;
  updateRegisterDeliveryman?: Resolver<Maybe<ResolversTypes['ReturnDeliveryman']>, ParentType, ContextType, RequireFields<MutationUpdateRegisterDeliverymanArgs, 'id_deliveryman'>>;
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
  getClientById?: Resolver<Maybe<ResolversTypes['Clients']>, ParentType, ContextType, RequireFields<QueryGetClientByIdArgs, 'id_client'>>;
  getDeliveryByCreated?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReturnDeliveryByCreated']>>>, ParentType, ContextType, RequireFields<QueryGetDeliveryByCreatedArgs, 'findDateEnd' | 'findDateInitial'>>;
  getDeliveryByEnd?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReturnDeliveryByCreated']>>>, ParentType, ContextType, RequireFields<QueryGetDeliveryByEndArgs, 'findDateEnd' | 'findDateInitial'>>;
  getDeliveryById?: Resolver<Maybe<ResolversTypes['ReturnDeliveryById']>, ParentType, ContextType, RequireFields<QueryGetDeliveryByIdArgs, 'id_delivery'>>;
  getDeliveryByIdClient?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReturnDeliveryById']>>>, ParentType, ContextType, RequireFields<QueryGetDeliveryByIdClientArgs, 'id_client'>>;
  getDeliveryByIdDeliveryman?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReturnDeliveryById']>>>, ParentType, ContextType, RequireFields<QueryGetDeliveryByIdDeliverymanArgs, 'id_deliveryman'>>;
  getDeliveryStatus?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReturnDeliveries']>>>, ParentType, ContextType, RequireFields<QueryGetDeliveryStatusArgs, 'status'>>;
  getProductById?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryGetProductByIdArgs, 'id_product'>>;
  getProductByName?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryGetProductByNameArgs, 'product_name'>>;
};

export type ReturnAuthenticateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReturnAuthenticate'] = ResolversParentTypes['ReturnAuthenticate']> = {
  client?: Resolver<Maybe<ResolversTypes['ReturnInfoUser']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReturnClientResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReturnClient'] = ResolversParentTypes['ReturnClient']> = {
  Deliveries?: Resolver<Maybe<Array<Maybe<ResolversTypes['Deliveries']>>>, ParentType, ContextType>;
  adm?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  adress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReturnCreateDeliveryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReturnCreateDelivery'] = ResolversParentTypes['ReturnCreateDelivery']> = {
  order?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReturnOrderCreateDelivery']>>>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReturnDeleteDeliveryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReturnDeleteDelivery'] = ResolversParentTypes['ReturnDeleteDelivery']> = {
  created_at?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  end_at?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id_client?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id_deliveryman?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReturnDeliveriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReturnDeliveries'] = ResolversParentTypes['ReturnDeliveries']> = {
  deliveryInfo?: Resolver<Maybe<ResolversTypes['DeliveryInfo']>, ParentType, ContextType>;
  userInfo?: Resolver<Maybe<ResolversTypes['UserInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReturnDeliveryByCreatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReturnDeliveryByCreated'] = ResolversParentTypes['ReturnDeliveryByCreated']> = {
  created_at?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  end_at?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id_client?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id_deliveryman?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReturnDeliveryByIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReturnDeliveryById'] = ResolversParentTypes['ReturnDeliveryById']> = {
  client?: Resolver<Maybe<ResolversTypes['DeliveryClientInfoReturnCreateDelivery']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  end_at?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id_client?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id_deliveryman?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  item_name?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReturnItemNameInfoByIdClient']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReturnDeliverymanResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReturnDeliveryman'] = ResolversParentTypes['ReturnDeliveryman']> = {
  Deliveries?: Resolver<Maybe<Array<Maybe<ResolversTypes['Deliveries']>>>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReturnInfoUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReturnInfoUser'] = ResolversParentTypes['ReturnInfoUser']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReturnInsertDeliverymanInOrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReturnInsertDeliverymanInOrder'] = ResolversParentTypes['ReturnInsertDeliverymanInOrder']> = {
  data?: Resolver<Maybe<ResolversTypes['Deliveries']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReturnItemNameInfoByIdClientResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReturnItemNameInfoByIdClient'] = ResolversParentTypes['ReturnItemNameInfoByIdClient']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id_delivery?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id_product?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  produto?: Resolver<Maybe<ResolversTypes['ReturnProductItemName']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReturnOrderCreateDeliveryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReturnOrderCreateDelivery'] = ResolversParentTypes['ReturnOrderCreateDelivery']> = {
  delivery?: Resolver<Maybe<ResolversTypes['DeliveryInfoReturnCreateDelivery']>, ParentType, ContextType>;
  id_delivery?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id_product?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  produto?: Resolver<Maybe<ResolversTypes['DeliveryProductInfoReturnCreateDelivery']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReturnProductItemNameResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReturnProductItemName'] = ResolversParentTypes['ReturnProductItemName']> = {
  discount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
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
  DeliveryClientInfoReturnCreateDelivery?: DeliveryClientInfoReturnCreateDeliveryResolvers<ContextType>;
  DeliveryDeliverymanInfoReturnCreateDelivery?: DeliveryDeliverymanInfoReturnCreateDeliveryResolvers<ContextType>;
  DeliveryInfo?: DeliveryInfoResolvers<ContextType>;
  DeliveryInfoReturnCreateDelivery?: DeliveryInfoReturnCreateDeliveryResolvers<ContextType>;
  DeliveryProductInfoReturnCreateDelivery?: DeliveryProductInfoReturnCreateDeliveryResolvers<ContextType>;
  Deliveryman?: DeliverymanResolvers<ContextType>;
  ItensDelivery?: ItensDeliveryResolvers<ContextType>;
  ItensReturnCreateDelivery?: ItensReturnCreateDeliveryResolvers<ContextType>;
  Itens_Info_Product?: Itens_Info_ProductResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductInfoDelivery?: ProductInfoDeliveryResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ReturnAuthenticate?: ReturnAuthenticateResolvers<ContextType>;
  ReturnClient?: ReturnClientResolvers<ContextType>;
  ReturnCreateDelivery?: ReturnCreateDeliveryResolvers<ContextType>;
  ReturnDeleteDelivery?: ReturnDeleteDeliveryResolvers<ContextType>;
  ReturnDeliveries?: ReturnDeliveriesResolvers<ContextType>;
  ReturnDeliveryByCreated?: ReturnDeliveryByCreatedResolvers<ContextType>;
  ReturnDeliveryById?: ReturnDeliveryByIdResolvers<ContextType>;
  ReturnDeliveryman?: ReturnDeliverymanResolvers<ContextType>;
  ReturnInfoUser?: ReturnInfoUserResolvers<ContextType>;
  ReturnInsertDeliverymanInOrder?: ReturnInsertDeliverymanInOrderResolvers<ContextType>;
  ReturnItemNameInfoByIdClient?: ReturnItemNameInfoByIdClientResolvers<ContextType>;
  ReturnOrderCreateDelivery?: ReturnOrderCreateDeliveryResolvers<ContextType>;
  ReturnProductItemName?: ReturnProductItemNameResolvers<ContextType>;
  UserInfo?: UserInfoResolvers<ContextType>;
};

