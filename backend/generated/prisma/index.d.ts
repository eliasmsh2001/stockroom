
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model department
 * 
 */
export type department = $Result.DefaultSelection<Prisma.$departmentPayload>
/**
 * Model providor
 * 
 */
export type providor = $Result.DefaultSelection<Prisma.$providorPayload>
/**
 * Model itemParent
 * 
 */
export type itemParent = $Result.DefaultSelection<Prisma.$itemParentPayload>
/**
 * Model item
 * 
 */
export type item = $Result.DefaultSelection<Prisma.$itemPayload>
/**
 * Model receipt
 * 
 */
export type receipt = $Result.DefaultSelection<Prisma.$receiptPayload>
/**
 * Model receiptItems
 * 
 */
export type receiptItems = $Result.DefaultSelection<Prisma.$receiptItemsPayload>
/**
 * Model receiptCart
 * 
 */
export type receiptCart = $Result.DefaultSelection<Prisma.$receiptCartPayload>
/**
 * Model receiptCartItems
 * 
 */
export type receiptCartItems = $Result.DefaultSelection<Prisma.$receiptCartItemsPayload>
/**
 * Model withdrawal
 * 
 */
export type withdrawal = $Result.DefaultSelection<Prisma.$withdrawalPayload>
/**
 * Model withdrawalItems
 * 
 */
export type withdrawalItems = $Result.DefaultSelection<Prisma.$withdrawalItemsPayload>
/**
 * Model withdrawalCart
 * 
 */
export type withdrawalCart = $Result.DefaultSelection<Prisma.$withdrawalCartPayload>
/**
 * Model withdrawalCartItems
 * 
 */
export type withdrawalCartItems = $Result.DefaultSelection<Prisma.$withdrawalCartItemsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.departmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.providor`: Exposes CRUD operations for the **providor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Providors
    * const providors = await prisma.providor.findMany()
    * ```
    */
  get providor(): Prisma.providorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemParent`: Exposes CRUD operations for the **itemParent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemParents
    * const itemParents = await prisma.itemParent.findMany()
    * ```
    */
  get itemParent(): Prisma.itemParentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.itemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receipt`: Exposes CRUD operations for the **receipt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Receipts
    * const receipts = await prisma.receipt.findMany()
    * ```
    */
  get receipt(): Prisma.receiptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receiptItems`: Exposes CRUD operations for the **receiptItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReceiptItems
    * const receiptItems = await prisma.receiptItems.findMany()
    * ```
    */
  get receiptItems(): Prisma.receiptItemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receiptCart`: Exposes CRUD operations for the **receiptCart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReceiptCarts
    * const receiptCarts = await prisma.receiptCart.findMany()
    * ```
    */
  get receiptCart(): Prisma.receiptCartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receiptCartItems`: Exposes CRUD operations for the **receiptCartItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReceiptCartItems
    * const receiptCartItems = await prisma.receiptCartItems.findMany()
    * ```
    */
  get receiptCartItems(): Prisma.receiptCartItemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.withdrawal`: Exposes CRUD operations for the **withdrawal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Withdrawals
    * const withdrawals = await prisma.withdrawal.findMany()
    * ```
    */
  get withdrawal(): Prisma.withdrawalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.withdrawalItems`: Exposes CRUD operations for the **withdrawalItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WithdrawalItems
    * const withdrawalItems = await prisma.withdrawalItems.findMany()
    * ```
    */
  get withdrawalItems(): Prisma.withdrawalItemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.withdrawalCart`: Exposes CRUD operations for the **withdrawalCart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WithdrawalCarts
    * const withdrawalCarts = await prisma.withdrawalCart.findMany()
    * ```
    */
  get withdrawalCart(): Prisma.withdrawalCartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.withdrawalCartItems`: Exposes CRUD operations for the **withdrawalCartItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WithdrawalCartItems
    * const withdrawalCartItems = await prisma.withdrawalCartItems.findMany()
    * ```
    */
  get withdrawalCartItems(): Prisma.withdrawalCartItemsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    department: 'department',
    providor: 'providor',
    itemParent: 'itemParent',
    item: 'item',
    receipt: 'receipt',
    receiptItems: 'receiptItems',
    receiptCart: 'receiptCart',
    receiptCartItems: 'receiptCartItems',
    withdrawal: 'withdrawal',
    withdrawalItems: 'withdrawalItems',
    withdrawalCart: 'withdrawalCart',
    withdrawalCartItems: 'withdrawalCartItems'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "department" | "providor" | "itemParent" | "item" | "receipt" | "receiptItems" | "receiptCart" | "receiptCartItems" | "withdrawal" | "withdrawalItems" | "withdrawalCart" | "withdrawalCartItems"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      department: {
        payload: Prisma.$departmentPayload<ExtArgs>
        fields: Prisma.departmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.departmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.departmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          findFirst: {
            args: Prisma.departmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.departmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          findMany: {
            args: Prisma.departmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>[]
          }
          create: {
            args: Prisma.departmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          createMany: {
            args: Prisma.departmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.departmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          update: {
            args: Prisma.departmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          deleteMany: {
            args: Prisma.departmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.departmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.departmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.departmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.departmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      providor: {
        payload: Prisma.$providorPayload<ExtArgs>
        fields: Prisma.providorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.providorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.providorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providorPayload>
          }
          findFirst: {
            args: Prisma.providorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.providorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providorPayload>
          }
          findMany: {
            args: Prisma.providorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providorPayload>[]
          }
          create: {
            args: Prisma.providorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providorPayload>
          }
          createMany: {
            args: Prisma.providorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.providorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providorPayload>
          }
          update: {
            args: Prisma.providorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providorPayload>
          }
          deleteMany: {
            args: Prisma.providorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.providorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.providorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providorPayload>
          }
          aggregate: {
            args: Prisma.ProvidorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProvidor>
          }
          groupBy: {
            args: Prisma.providorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProvidorGroupByOutputType>[]
          }
          count: {
            args: Prisma.providorCountArgs<ExtArgs>
            result: $Utils.Optional<ProvidorCountAggregateOutputType> | number
          }
        }
      }
      itemParent: {
        payload: Prisma.$itemParentPayload<ExtArgs>
        fields: Prisma.itemParentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.itemParentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemParentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.itemParentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemParentPayload>
          }
          findFirst: {
            args: Prisma.itemParentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemParentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.itemParentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemParentPayload>
          }
          findMany: {
            args: Prisma.itemParentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemParentPayload>[]
          }
          create: {
            args: Prisma.itemParentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemParentPayload>
          }
          createMany: {
            args: Prisma.itemParentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.itemParentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemParentPayload>
          }
          update: {
            args: Prisma.itemParentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemParentPayload>
          }
          deleteMany: {
            args: Prisma.itemParentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.itemParentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.itemParentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemParentPayload>
          }
          aggregate: {
            args: Prisma.ItemParentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemParent>
          }
          groupBy: {
            args: Prisma.itemParentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemParentGroupByOutputType>[]
          }
          count: {
            args: Prisma.itemParentCountArgs<ExtArgs>
            result: $Utils.Optional<ItemParentCountAggregateOutputType> | number
          }
        }
      }
      item: {
        payload: Prisma.$itemPayload<ExtArgs>
        fields: Prisma.itemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.itemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.itemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          findFirst: {
            args: Prisma.itemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.itemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          findMany: {
            args: Prisma.itemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>[]
          }
          create: {
            args: Prisma.itemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          createMany: {
            args: Prisma.itemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.itemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          update: {
            args: Prisma.itemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          deleteMany: {
            args: Prisma.itemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.itemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.itemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.itemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.itemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      receipt: {
        payload: Prisma.$receiptPayload<ExtArgs>
        fields: Prisma.receiptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.receiptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.receiptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptPayload>
          }
          findFirst: {
            args: Prisma.receiptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.receiptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptPayload>
          }
          findMany: {
            args: Prisma.receiptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptPayload>[]
          }
          create: {
            args: Prisma.receiptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptPayload>
          }
          createMany: {
            args: Prisma.receiptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.receiptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptPayload>
          }
          update: {
            args: Prisma.receiptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptPayload>
          }
          deleteMany: {
            args: Prisma.receiptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.receiptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.receiptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptPayload>
          }
          aggregate: {
            args: Prisma.ReceiptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceipt>
          }
          groupBy: {
            args: Prisma.receiptGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceiptGroupByOutputType>[]
          }
          count: {
            args: Prisma.receiptCountArgs<ExtArgs>
            result: $Utils.Optional<ReceiptCountAggregateOutputType> | number
          }
        }
      }
      receiptItems: {
        payload: Prisma.$receiptItemsPayload<ExtArgs>
        fields: Prisma.receiptItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.receiptItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.receiptItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptItemsPayload>
          }
          findFirst: {
            args: Prisma.receiptItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.receiptItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptItemsPayload>
          }
          findMany: {
            args: Prisma.receiptItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptItemsPayload>[]
          }
          create: {
            args: Prisma.receiptItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptItemsPayload>
          }
          createMany: {
            args: Prisma.receiptItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.receiptItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptItemsPayload>
          }
          update: {
            args: Prisma.receiptItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptItemsPayload>
          }
          deleteMany: {
            args: Prisma.receiptItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.receiptItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.receiptItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptItemsPayload>
          }
          aggregate: {
            args: Prisma.ReceiptItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceiptItems>
          }
          groupBy: {
            args: Prisma.receiptItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceiptItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.receiptItemsCountArgs<ExtArgs>
            result: $Utils.Optional<ReceiptItemsCountAggregateOutputType> | number
          }
        }
      }
      receiptCart: {
        payload: Prisma.$receiptCartPayload<ExtArgs>
        fields: Prisma.receiptCartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.receiptCartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptCartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.receiptCartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptCartPayload>
          }
          findFirst: {
            args: Prisma.receiptCartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptCartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.receiptCartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptCartPayload>
          }
          findMany: {
            args: Prisma.receiptCartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptCartPayload>[]
          }
          create: {
            args: Prisma.receiptCartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptCartPayload>
          }
          createMany: {
            args: Prisma.receiptCartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.receiptCartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptCartPayload>
          }
          update: {
            args: Prisma.receiptCartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptCartPayload>
          }
          deleteMany: {
            args: Prisma.receiptCartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.receiptCartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.receiptCartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptCartPayload>
          }
          aggregate: {
            args: Prisma.ReceiptCartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceiptCart>
          }
          groupBy: {
            args: Prisma.receiptCartGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceiptCartGroupByOutputType>[]
          }
          count: {
            args: Prisma.receiptCartCountArgs<ExtArgs>
            result: $Utils.Optional<ReceiptCartCountAggregateOutputType> | number
          }
        }
      }
      receiptCartItems: {
        payload: Prisma.$receiptCartItemsPayload<ExtArgs>
        fields: Prisma.receiptCartItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.receiptCartItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptCartItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.receiptCartItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptCartItemsPayload>
          }
          findFirst: {
            args: Prisma.receiptCartItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptCartItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.receiptCartItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptCartItemsPayload>
          }
          findMany: {
            args: Prisma.receiptCartItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptCartItemsPayload>[]
          }
          create: {
            args: Prisma.receiptCartItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptCartItemsPayload>
          }
          createMany: {
            args: Prisma.receiptCartItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.receiptCartItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptCartItemsPayload>
          }
          update: {
            args: Prisma.receiptCartItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptCartItemsPayload>
          }
          deleteMany: {
            args: Prisma.receiptCartItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.receiptCartItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.receiptCartItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptCartItemsPayload>
          }
          aggregate: {
            args: Prisma.ReceiptCartItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceiptCartItems>
          }
          groupBy: {
            args: Prisma.receiptCartItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceiptCartItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.receiptCartItemsCountArgs<ExtArgs>
            result: $Utils.Optional<ReceiptCartItemsCountAggregateOutputType> | number
          }
        }
      }
      withdrawal: {
        payload: Prisma.$withdrawalPayload<ExtArgs>
        fields: Prisma.withdrawalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.withdrawalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.withdrawalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalPayload>
          }
          findFirst: {
            args: Prisma.withdrawalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.withdrawalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalPayload>
          }
          findMany: {
            args: Prisma.withdrawalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalPayload>[]
          }
          create: {
            args: Prisma.withdrawalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalPayload>
          }
          createMany: {
            args: Prisma.withdrawalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.withdrawalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalPayload>
          }
          update: {
            args: Prisma.withdrawalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalPayload>
          }
          deleteMany: {
            args: Prisma.withdrawalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.withdrawalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.withdrawalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalPayload>
          }
          aggregate: {
            args: Prisma.WithdrawalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWithdrawal>
          }
          groupBy: {
            args: Prisma.withdrawalGroupByArgs<ExtArgs>
            result: $Utils.Optional<WithdrawalGroupByOutputType>[]
          }
          count: {
            args: Prisma.withdrawalCountArgs<ExtArgs>
            result: $Utils.Optional<WithdrawalCountAggregateOutputType> | number
          }
        }
      }
      withdrawalItems: {
        payload: Prisma.$withdrawalItemsPayload<ExtArgs>
        fields: Prisma.withdrawalItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.withdrawalItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.withdrawalItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalItemsPayload>
          }
          findFirst: {
            args: Prisma.withdrawalItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.withdrawalItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalItemsPayload>
          }
          findMany: {
            args: Prisma.withdrawalItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalItemsPayload>[]
          }
          create: {
            args: Prisma.withdrawalItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalItemsPayload>
          }
          createMany: {
            args: Prisma.withdrawalItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.withdrawalItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalItemsPayload>
          }
          update: {
            args: Prisma.withdrawalItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalItemsPayload>
          }
          deleteMany: {
            args: Prisma.withdrawalItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.withdrawalItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.withdrawalItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalItemsPayload>
          }
          aggregate: {
            args: Prisma.WithdrawalItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWithdrawalItems>
          }
          groupBy: {
            args: Prisma.withdrawalItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<WithdrawalItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.withdrawalItemsCountArgs<ExtArgs>
            result: $Utils.Optional<WithdrawalItemsCountAggregateOutputType> | number
          }
        }
      }
      withdrawalCart: {
        payload: Prisma.$withdrawalCartPayload<ExtArgs>
        fields: Prisma.withdrawalCartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.withdrawalCartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalCartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.withdrawalCartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalCartPayload>
          }
          findFirst: {
            args: Prisma.withdrawalCartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalCartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.withdrawalCartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalCartPayload>
          }
          findMany: {
            args: Prisma.withdrawalCartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalCartPayload>[]
          }
          create: {
            args: Prisma.withdrawalCartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalCartPayload>
          }
          createMany: {
            args: Prisma.withdrawalCartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.withdrawalCartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalCartPayload>
          }
          update: {
            args: Prisma.withdrawalCartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalCartPayload>
          }
          deleteMany: {
            args: Prisma.withdrawalCartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.withdrawalCartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.withdrawalCartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalCartPayload>
          }
          aggregate: {
            args: Prisma.WithdrawalCartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWithdrawalCart>
          }
          groupBy: {
            args: Prisma.withdrawalCartGroupByArgs<ExtArgs>
            result: $Utils.Optional<WithdrawalCartGroupByOutputType>[]
          }
          count: {
            args: Prisma.withdrawalCartCountArgs<ExtArgs>
            result: $Utils.Optional<WithdrawalCartCountAggregateOutputType> | number
          }
        }
      }
      withdrawalCartItems: {
        payload: Prisma.$withdrawalCartItemsPayload<ExtArgs>
        fields: Prisma.withdrawalCartItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.withdrawalCartItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalCartItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.withdrawalCartItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalCartItemsPayload>
          }
          findFirst: {
            args: Prisma.withdrawalCartItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalCartItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.withdrawalCartItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalCartItemsPayload>
          }
          findMany: {
            args: Prisma.withdrawalCartItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalCartItemsPayload>[]
          }
          create: {
            args: Prisma.withdrawalCartItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalCartItemsPayload>
          }
          createMany: {
            args: Prisma.withdrawalCartItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.withdrawalCartItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalCartItemsPayload>
          }
          update: {
            args: Prisma.withdrawalCartItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalCartItemsPayload>
          }
          deleteMany: {
            args: Prisma.withdrawalCartItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.withdrawalCartItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.withdrawalCartItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalCartItemsPayload>
          }
          aggregate: {
            args: Prisma.WithdrawalCartItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWithdrawalCartItems>
          }
          groupBy: {
            args: Prisma.withdrawalCartItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<WithdrawalCartItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.withdrawalCartItemsCountArgs<ExtArgs>
            result: $Utils.Optional<WithdrawalCartItemsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    department?: departmentOmit
    providor?: providorOmit
    itemParent?: itemParentOmit
    item?: itemOmit
    receipt?: receiptOmit
    receiptItems?: receiptItemsOmit
    receiptCart?: receiptCartOmit
    receiptCartItems?: receiptCartItemsOmit
    withdrawal?: withdrawalOmit
    withdrawalItems?: withdrawalItemsOmit
    withdrawalCart?: withdrawalCartOmit
    withdrawalCartItems?: withdrawalCartItemsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    items: number
    withdrawals: number
    withdrawalItems: number
    withdrawalCart: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | UserCountOutputTypeCountItemsArgs
    withdrawals?: boolean | UserCountOutputTypeCountWithdrawalsArgs
    withdrawalItems?: boolean | UserCountOutputTypeCountWithdrawalItemsArgs
    withdrawalCart?: boolean | UserCountOutputTypeCountWithdrawalCartArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWithdrawalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: withdrawalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWithdrawalItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: withdrawalItemsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWithdrawalCartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: withdrawalCartWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    withdrawals: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    withdrawals?: boolean | DepartmentCountOutputTypeCountWithdrawalsArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountWithdrawalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: withdrawalWhereInput
  }


  /**
   * Count Type ProvidorCountOutputType
   */

  export type ProvidorCountOutputType = {
    receipts: number
  }

  export type ProvidorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipts?: boolean | ProvidorCountOutputTypeCountReceiptsArgs
  }

  // Custom InputTypes
  /**
   * ProvidorCountOutputType without action
   */
  export type ProvidorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvidorCountOutputType
     */
    select?: ProvidorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProvidorCountOutputType without action
   */
  export type ProvidorCountOutputTypeCountReceiptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: receiptWhereInput
  }


  /**
   * Count Type ItemParentCountOutputType
   */

  export type ItemParentCountOutputType = {
    items: number
    withdrawals: number
  }

  export type ItemParentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ItemParentCountOutputTypeCountItemsArgs
    withdrawals?: boolean | ItemParentCountOutputTypeCountWithdrawalsArgs
  }

  // Custom InputTypes
  /**
   * ItemParentCountOutputType without action
   */
  export type ItemParentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemParentCountOutputType
     */
    select?: ItemParentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemParentCountOutputType without action
   */
  export type ItemParentCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemWhereInput
  }

  /**
   * ItemParentCountOutputType without action
   */
  export type ItemParentCountOutputTypeCountWithdrawalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: withdrawalItemsWhereInput
  }


  /**
   * Count Type ReceiptCountOutputType
   */

  export type ReceiptCountOutputType = {
    items: number
    stockItmes: number
  }

  export type ReceiptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ReceiptCountOutputTypeCountItemsArgs
    stockItmes?: boolean | ReceiptCountOutputTypeCountStockItmesArgs
  }

  // Custom InputTypes
  /**
   * ReceiptCountOutputType without action
   */
  export type ReceiptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptCountOutputType
     */
    select?: ReceiptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReceiptCountOutputType without action
   */
  export type ReceiptCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: receiptItemsWhereInput
  }

  /**
   * ReceiptCountOutputType without action
   */
  export type ReceiptCountOutputTypeCountStockItmesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemWhereInput
  }


  /**
   * Count Type ReceiptCartCountOutputType
   */

  export type ReceiptCartCountOutputType = {
    items: number
  }

  export type ReceiptCartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ReceiptCartCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * ReceiptCartCountOutputType without action
   */
  export type ReceiptCartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptCartCountOutputType
     */
    select?: ReceiptCartCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReceiptCartCountOutputType without action
   */
  export type ReceiptCartCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: receiptCartItemsWhereInput
  }


  /**
   * Count Type WithdrawalCountOutputType
   */

  export type WithdrawalCountOutputType = {
    items: number
    stockItmes: number
  }

  export type WithdrawalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | WithdrawalCountOutputTypeCountItemsArgs
    stockItmes?: boolean | WithdrawalCountOutputTypeCountStockItmesArgs
  }

  // Custom InputTypes
  /**
   * WithdrawalCountOutputType without action
   */
  export type WithdrawalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawalCountOutputType
     */
    select?: WithdrawalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WithdrawalCountOutputType without action
   */
  export type WithdrawalCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: withdrawalItemsWhereInput
  }

  /**
   * WithdrawalCountOutputType without action
   */
  export type WithdrawalCountOutputTypeCountStockItmesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemWhereInput
  }


  /**
   * Count Type WithdrawalCartCountOutputType
   */

  export type WithdrawalCartCountOutputType = {
    items: number
  }

  export type WithdrawalCartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | WithdrawalCartCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * WithdrawalCartCountOutputType without action
   */
  export type WithdrawalCartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawalCartCountOutputType
     */
    select?: WithdrawalCartCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WithdrawalCartCountOutputType without action
   */
  export type WithdrawalCartCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: withdrawalCartItemsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    usersecret: string | null
    authority: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    usersecret: string | null
    authority: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    usersecret: number
    authority: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    usersecret?: true
    authority?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    usersecret?: true
    authority?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    usersecret?: true
    authority?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    usersecret: string
    authority: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    usersecret?: boolean
    authority?: boolean
    items?: boolean | user$itemsArgs<ExtArgs>
    withdrawals?: boolean | user$withdrawalsArgs<ExtArgs>
    withdrawalItems?: boolean | user$withdrawalItemsArgs<ExtArgs>
    withdrawalCart?: boolean | user$withdrawalCartArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    username?: boolean
    usersecret?: boolean
    authority?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "usersecret" | "authority", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | user$itemsArgs<ExtArgs>
    withdrawals?: boolean | user$withdrawalsArgs<ExtArgs>
    withdrawalItems?: boolean | user$withdrawalItemsArgs<ExtArgs>
    withdrawalCart?: boolean | user$withdrawalCartArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      items: Prisma.$itemPayload<ExtArgs>[]
      withdrawals: Prisma.$withdrawalPayload<ExtArgs>[]
      withdrawalItems: Prisma.$withdrawalItemsPayload<ExtArgs>[]
      withdrawalCart: Prisma.$withdrawalCartPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      usersecret: string
      authority: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends user$itemsArgs<ExtArgs> = {}>(args?: Subset<T, user$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    withdrawals<T extends user$withdrawalsArgs<ExtArgs> = {}>(args?: Subset<T, user$withdrawalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$withdrawalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    withdrawalItems<T extends user$withdrawalItemsArgs<ExtArgs> = {}>(args?: Subset<T, user$withdrawalItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$withdrawalItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    withdrawalCart<T extends user$withdrawalCartArgs<ExtArgs> = {}>(args?: Subset<T, user$withdrawalCartArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$withdrawalCartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly username: FieldRef<"user", 'String'>
    readonly usersecret: FieldRef<"user", 'String'>
    readonly authority: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.items
   */
  export type user$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    where?: itemWhereInput
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    cursor?: itemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * user.withdrawals
   */
  export type user$withdrawalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawal
     */
    select?: withdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawal
     */
    omit?: withdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalInclude<ExtArgs> | null
    where?: withdrawalWhereInput
    orderBy?: withdrawalOrderByWithRelationInput | withdrawalOrderByWithRelationInput[]
    cursor?: withdrawalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WithdrawalScalarFieldEnum | WithdrawalScalarFieldEnum[]
  }

  /**
   * user.withdrawalItems
   */
  export type user$withdrawalItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalItems
     */
    select?: withdrawalItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalItems
     */
    omit?: withdrawalItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalItemsInclude<ExtArgs> | null
    where?: withdrawalItemsWhereInput
    orderBy?: withdrawalItemsOrderByWithRelationInput | withdrawalItemsOrderByWithRelationInput[]
    cursor?: withdrawalItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WithdrawalItemsScalarFieldEnum | WithdrawalItemsScalarFieldEnum[]
  }

  /**
   * user.withdrawalCart
   */
  export type user$withdrawalCartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalCart
     */
    select?: withdrawalCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalCart
     */
    omit?: withdrawalCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalCartInclude<ExtArgs> | null
    where?: withdrawalCartWhereInput
    orderBy?: withdrawalCartOrderByWithRelationInput | withdrawalCartOrderByWithRelationInput[]
    cursor?: withdrawalCartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WithdrawalCartScalarFieldEnum | WithdrawalCartScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type DepartmentMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which department to aggregate.
     */
    where?: departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type departmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: departmentWhereInput
    orderBy?: departmentOrderByWithAggregationInput | departmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: departmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: string
    name: string
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends departmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type departmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    withdrawals?: boolean | department$withdrawalsArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>



  export type departmentSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type departmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["department"]>
  export type departmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    withdrawals?: boolean | department$withdrawalsArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $departmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "department"
    objects: {
      withdrawals: Prisma.$withdrawalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type departmentGetPayload<S extends boolean | null | undefined | departmentDefaultArgs> = $Result.GetResult<Prisma.$departmentPayload, S>

  type departmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<departmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface departmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['department'], meta: { name: 'department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {departmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends departmentFindUniqueArgs>(args: SelectSubset<T, departmentFindUniqueArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {departmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends departmentFindUniqueOrThrowArgs>(args: SelectSubset<T, departmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends departmentFindFirstArgs>(args?: SelectSubset<T, departmentFindFirstArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends departmentFindFirstOrThrowArgs>(args?: SelectSubset<T, departmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends departmentFindManyArgs>(args?: SelectSubset<T, departmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {departmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends departmentCreateArgs>(args: SelectSubset<T, departmentCreateArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {departmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends departmentCreateManyArgs>(args?: SelectSubset<T, departmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Department.
     * @param {departmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends departmentDeleteArgs>(args: SelectSubset<T, departmentDeleteArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {departmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends departmentUpdateArgs>(args: SelectSubset<T, departmentUpdateArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {departmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends departmentDeleteManyArgs>(args?: SelectSubset<T, departmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends departmentUpdateManyArgs>(args: SelectSubset<T, departmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Department.
     * @param {departmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends departmentUpsertArgs>(args: SelectSubset<T, departmentUpsertArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends departmentCountArgs>(
      args?: Subset<T, departmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends departmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: departmentGroupByArgs['orderBy'] }
        : { orderBy?: departmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, departmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the department model
   */
  readonly fields: departmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__departmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    withdrawals<T extends department$withdrawalsArgs<ExtArgs> = {}>(args?: Subset<T, department$withdrawalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$withdrawalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the department model
   */
  interface departmentFieldRefs {
    readonly id: FieldRef<"department", 'String'>
    readonly name: FieldRef<"department", 'String'>
  }
    

  // Custom InputTypes
  /**
   * department findUnique
   */
  export type departmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter, which department to fetch.
     */
    where: departmentWhereUniqueInput
  }

  /**
   * department findUniqueOrThrow
   */
  export type departmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter, which department to fetch.
     */
    where: departmentWhereUniqueInput
  }

  /**
   * department findFirst
   */
  export type departmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter, which department to fetch.
     */
    where?: departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for departments.
     */
    cursor?: departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * department findFirstOrThrow
   */
  export type departmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter, which department to fetch.
     */
    where?: departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for departments.
     */
    cursor?: departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * department findMany
   */
  export type departmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter, which departments to fetch.
     */
    where?: departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing departments.
     */
    cursor?: departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * department create
   */
  export type departmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * The data needed to create a department.
     */
    data: XOR<departmentCreateInput, departmentUncheckedCreateInput>
  }

  /**
   * department createMany
   */
  export type departmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many departments.
     */
    data: departmentCreateManyInput | departmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * department update
   */
  export type departmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * The data needed to update a department.
     */
    data: XOR<departmentUpdateInput, departmentUncheckedUpdateInput>
    /**
     * Choose, which department to update.
     */
    where: departmentWhereUniqueInput
  }

  /**
   * department updateMany
   */
  export type departmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update departments.
     */
    data: XOR<departmentUpdateManyMutationInput, departmentUncheckedUpdateManyInput>
    /**
     * Filter which departments to update
     */
    where?: departmentWhereInput
    /**
     * Limit how many departments to update.
     */
    limit?: number
  }

  /**
   * department upsert
   */
  export type departmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * The filter to search for the department to update in case it exists.
     */
    where: departmentWhereUniqueInput
    /**
     * In case the department found by the `where` argument doesn't exist, create a new department with this data.
     */
    create: XOR<departmentCreateInput, departmentUncheckedCreateInput>
    /**
     * In case the department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<departmentUpdateInput, departmentUncheckedUpdateInput>
  }

  /**
   * department delete
   */
  export type departmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter which department to delete.
     */
    where: departmentWhereUniqueInput
  }

  /**
   * department deleteMany
   */
  export type departmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which departments to delete
     */
    where?: departmentWhereInput
    /**
     * Limit how many departments to delete.
     */
    limit?: number
  }

  /**
   * department.withdrawals
   */
  export type department$withdrawalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawal
     */
    select?: withdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawal
     */
    omit?: withdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalInclude<ExtArgs> | null
    where?: withdrawalWhereInput
    orderBy?: withdrawalOrderByWithRelationInput | withdrawalOrderByWithRelationInput[]
    cursor?: withdrawalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WithdrawalScalarFieldEnum | WithdrawalScalarFieldEnum[]
  }

  /**
   * department without action
   */
  export type departmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
  }


  /**
   * Model providor
   */

  export type AggregateProvidor = {
    _count: ProvidorCountAggregateOutputType | null
    _min: ProvidorMinAggregateOutputType | null
    _max: ProvidorMaxAggregateOutputType | null
  }

  export type ProvidorMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type ProvidorMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type ProvidorCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ProvidorMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ProvidorMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ProvidorCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ProvidorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which providor to aggregate.
     */
    where?: providorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of providors to fetch.
     */
    orderBy?: providorOrderByWithRelationInput | providorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: providorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` providors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` providors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned providors
    **/
    _count?: true | ProvidorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProvidorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProvidorMaxAggregateInputType
  }

  export type GetProvidorAggregateType<T extends ProvidorAggregateArgs> = {
        [P in keyof T & keyof AggregateProvidor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvidor[P]>
      : GetScalarType<T[P], AggregateProvidor[P]>
  }




  export type providorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: providorWhereInput
    orderBy?: providorOrderByWithAggregationInput | providorOrderByWithAggregationInput[]
    by: ProvidorScalarFieldEnum[] | ProvidorScalarFieldEnum
    having?: providorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProvidorCountAggregateInputType | true
    _min?: ProvidorMinAggregateInputType
    _max?: ProvidorMaxAggregateInputType
  }

  export type ProvidorGroupByOutputType = {
    id: string
    name: string
    _count: ProvidorCountAggregateOutputType | null
    _min: ProvidorMinAggregateOutputType | null
    _max: ProvidorMaxAggregateOutputType | null
  }

  type GetProvidorGroupByPayload<T extends providorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProvidorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProvidorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProvidorGroupByOutputType[P]>
            : GetScalarType<T[P], ProvidorGroupByOutputType[P]>
        }
      >
    >


  export type providorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    receipts?: boolean | providor$receiptsArgs<ExtArgs>
    _count?: boolean | ProvidorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providor"]>



  export type providorSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type providorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["providor"]>
  export type providorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipts?: boolean | providor$receiptsArgs<ExtArgs>
    _count?: boolean | ProvidorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $providorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "providor"
    objects: {
      receipts: Prisma.$receiptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["providor"]>
    composites: {}
  }

  type providorGetPayload<S extends boolean | null | undefined | providorDefaultArgs> = $Result.GetResult<Prisma.$providorPayload, S>

  type providorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<providorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProvidorCountAggregateInputType | true
    }

  export interface providorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['providor'], meta: { name: 'providor' } }
    /**
     * Find zero or one Providor that matches the filter.
     * @param {providorFindUniqueArgs} args - Arguments to find a Providor
     * @example
     * // Get one Providor
     * const providor = await prisma.providor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends providorFindUniqueArgs>(args: SelectSubset<T, providorFindUniqueArgs<ExtArgs>>): Prisma__providorClient<$Result.GetResult<Prisma.$providorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Providor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {providorFindUniqueOrThrowArgs} args - Arguments to find a Providor
     * @example
     * // Get one Providor
     * const providor = await prisma.providor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends providorFindUniqueOrThrowArgs>(args: SelectSubset<T, providorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__providorClient<$Result.GetResult<Prisma.$providorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Providor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providorFindFirstArgs} args - Arguments to find a Providor
     * @example
     * // Get one Providor
     * const providor = await prisma.providor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends providorFindFirstArgs>(args?: SelectSubset<T, providorFindFirstArgs<ExtArgs>>): Prisma__providorClient<$Result.GetResult<Prisma.$providorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Providor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providorFindFirstOrThrowArgs} args - Arguments to find a Providor
     * @example
     * // Get one Providor
     * const providor = await prisma.providor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends providorFindFirstOrThrowArgs>(args?: SelectSubset<T, providorFindFirstOrThrowArgs<ExtArgs>>): Prisma__providorClient<$Result.GetResult<Prisma.$providorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Providors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Providors
     * const providors = await prisma.providor.findMany()
     * 
     * // Get first 10 Providors
     * const providors = await prisma.providor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providorWithIdOnly = await prisma.providor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends providorFindManyArgs>(args?: SelectSubset<T, providorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$providorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Providor.
     * @param {providorCreateArgs} args - Arguments to create a Providor.
     * @example
     * // Create one Providor
     * const Providor = await prisma.providor.create({
     *   data: {
     *     // ... data to create a Providor
     *   }
     * })
     * 
     */
    create<T extends providorCreateArgs>(args: SelectSubset<T, providorCreateArgs<ExtArgs>>): Prisma__providorClient<$Result.GetResult<Prisma.$providorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Providors.
     * @param {providorCreateManyArgs} args - Arguments to create many Providors.
     * @example
     * // Create many Providors
     * const providor = await prisma.providor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends providorCreateManyArgs>(args?: SelectSubset<T, providorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Providor.
     * @param {providorDeleteArgs} args - Arguments to delete one Providor.
     * @example
     * // Delete one Providor
     * const Providor = await prisma.providor.delete({
     *   where: {
     *     // ... filter to delete one Providor
     *   }
     * })
     * 
     */
    delete<T extends providorDeleteArgs>(args: SelectSubset<T, providorDeleteArgs<ExtArgs>>): Prisma__providorClient<$Result.GetResult<Prisma.$providorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Providor.
     * @param {providorUpdateArgs} args - Arguments to update one Providor.
     * @example
     * // Update one Providor
     * const providor = await prisma.providor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends providorUpdateArgs>(args: SelectSubset<T, providorUpdateArgs<ExtArgs>>): Prisma__providorClient<$Result.GetResult<Prisma.$providorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Providors.
     * @param {providorDeleteManyArgs} args - Arguments to filter Providors to delete.
     * @example
     * // Delete a few Providors
     * const { count } = await prisma.providor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends providorDeleteManyArgs>(args?: SelectSubset<T, providorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Providors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Providors
     * const providor = await prisma.providor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends providorUpdateManyArgs>(args: SelectSubset<T, providorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Providor.
     * @param {providorUpsertArgs} args - Arguments to update or create a Providor.
     * @example
     * // Update or create a Providor
     * const providor = await prisma.providor.upsert({
     *   create: {
     *     // ... data to create a Providor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Providor we want to update
     *   }
     * })
     */
    upsert<T extends providorUpsertArgs>(args: SelectSubset<T, providorUpsertArgs<ExtArgs>>): Prisma__providorClient<$Result.GetResult<Prisma.$providorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Providors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providorCountArgs} args - Arguments to filter Providors to count.
     * @example
     * // Count the number of Providors
     * const count = await prisma.providor.count({
     *   where: {
     *     // ... the filter for the Providors we want to count
     *   }
     * })
    **/
    count<T extends providorCountArgs>(
      args?: Subset<T, providorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProvidorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Providor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvidorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProvidorAggregateArgs>(args: Subset<T, ProvidorAggregateArgs>): Prisma.PrismaPromise<GetProvidorAggregateType<T>>

    /**
     * Group by Providor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends providorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: providorGroupByArgs['orderBy'] }
        : { orderBy?: providorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, providorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvidorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the providor model
   */
  readonly fields: providorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for providor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__providorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receipts<T extends providor$receiptsArgs<ExtArgs> = {}>(args?: Subset<T, providor$receiptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the providor model
   */
  interface providorFieldRefs {
    readonly id: FieldRef<"providor", 'String'>
    readonly name: FieldRef<"providor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * providor findUnique
   */
  export type providorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providor
     */
    select?: providorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providor
     */
    omit?: providorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providorInclude<ExtArgs> | null
    /**
     * Filter, which providor to fetch.
     */
    where: providorWhereUniqueInput
  }

  /**
   * providor findUniqueOrThrow
   */
  export type providorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providor
     */
    select?: providorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providor
     */
    omit?: providorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providorInclude<ExtArgs> | null
    /**
     * Filter, which providor to fetch.
     */
    where: providorWhereUniqueInput
  }

  /**
   * providor findFirst
   */
  export type providorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providor
     */
    select?: providorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providor
     */
    omit?: providorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providorInclude<ExtArgs> | null
    /**
     * Filter, which providor to fetch.
     */
    where?: providorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of providors to fetch.
     */
    orderBy?: providorOrderByWithRelationInput | providorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for providors.
     */
    cursor?: providorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` providors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` providors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of providors.
     */
    distinct?: ProvidorScalarFieldEnum | ProvidorScalarFieldEnum[]
  }

  /**
   * providor findFirstOrThrow
   */
  export type providorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providor
     */
    select?: providorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providor
     */
    omit?: providorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providorInclude<ExtArgs> | null
    /**
     * Filter, which providor to fetch.
     */
    where?: providorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of providors to fetch.
     */
    orderBy?: providorOrderByWithRelationInput | providorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for providors.
     */
    cursor?: providorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` providors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` providors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of providors.
     */
    distinct?: ProvidorScalarFieldEnum | ProvidorScalarFieldEnum[]
  }

  /**
   * providor findMany
   */
  export type providorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providor
     */
    select?: providorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providor
     */
    omit?: providorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providorInclude<ExtArgs> | null
    /**
     * Filter, which providors to fetch.
     */
    where?: providorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of providors to fetch.
     */
    orderBy?: providorOrderByWithRelationInput | providorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing providors.
     */
    cursor?: providorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` providors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` providors.
     */
    skip?: number
    distinct?: ProvidorScalarFieldEnum | ProvidorScalarFieldEnum[]
  }

  /**
   * providor create
   */
  export type providorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providor
     */
    select?: providorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providor
     */
    omit?: providorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providorInclude<ExtArgs> | null
    /**
     * The data needed to create a providor.
     */
    data: XOR<providorCreateInput, providorUncheckedCreateInput>
  }

  /**
   * providor createMany
   */
  export type providorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many providors.
     */
    data: providorCreateManyInput | providorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * providor update
   */
  export type providorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providor
     */
    select?: providorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providor
     */
    omit?: providorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providorInclude<ExtArgs> | null
    /**
     * The data needed to update a providor.
     */
    data: XOR<providorUpdateInput, providorUncheckedUpdateInput>
    /**
     * Choose, which providor to update.
     */
    where: providorWhereUniqueInput
  }

  /**
   * providor updateMany
   */
  export type providorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update providors.
     */
    data: XOR<providorUpdateManyMutationInput, providorUncheckedUpdateManyInput>
    /**
     * Filter which providors to update
     */
    where?: providorWhereInput
    /**
     * Limit how many providors to update.
     */
    limit?: number
  }

  /**
   * providor upsert
   */
  export type providorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providor
     */
    select?: providorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providor
     */
    omit?: providorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providorInclude<ExtArgs> | null
    /**
     * The filter to search for the providor to update in case it exists.
     */
    where: providorWhereUniqueInput
    /**
     * In case the providor found by the `where` argument doesn't exist, create a new providor with this data.
     */
    create: XOR<providorCreateInput, providorUncheckedCreateInput>
    /**
     * In case the providor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<providorUpdateInput, providorUncheckedUpdateInput>
  }

  /**
   * providor delete
   */
  export type providorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providor
     */
    select?: providorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providor
     */
    omit?: providorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providorInclude<ExtArgs> | null
    /**
     * Filter which providor to delete.
     */
    where: providorWhereUniqueInput
  }

  /**
   * providor deleteMany
   */
  export type providorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which providors to delete
     */
    where?: providorWhereInput
    /**
     * Limit how many providors to delete.
     */
    limit?: number
  }

  /**
   * providor.receipts
   */
  export type providor$receiptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt
     */
    omit?: receiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptInclude<ExtArgs> | null
    where?: receiptWhereInput
    orderBy?: receiptOrderByWithRelationInput | receiptOrderByWithRelationInput[]
    cursor?: receiptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceiptScalarFieldEnum | ReceiptScalarFieldEnum[]
  }

  /**
   * providor without action
   */
  export type providorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providor
     */
    select?: providorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providor
     */
    omit?: providorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providorInclude<ExtArgs> | null
  }


  /**
   * Model itemParent
   */

  export type AggregateItemParent = {
    _count: ItemParentCountAggregateOutputType | null
    _min: ItemParentMinAggregateOutputType | null
    _max: ItemParentMaxAggregateOutputType | null
  }

  export type ItemParentMinAggregateOutputType = {
    id: string | null
    genericName: string | null
    category: string | null
    unit: string | null
    latestWithdrawal: string | null
    latestReceive: string | null
    mainStockSpecific: boolean | null
  }

  export type ItemParentMaxAggregateOutputType = {
    id: string | null
    genericName: string | null
    category: string | null
    unit: string | null
    latestWithdrawal: string | null
    latestReceive: string | null
    mainStockSpecific: boolean | null
  }

  export type ItemParentCountAggregateOutputType = {
    id: number
    genericName: number
    category: number
    unit: number
    latestWithdrawal: number
    latestReceive: number
    mainStockSpecific: number
    _all: number
  }


  export type ItemParentMinAggregateInputType = {
    id?: true
    genericName?: true
    category?: true
    unit?: true
    latestWithdrawal?: true
    latestReceive?: true
    mainStockSpecific?: true
  }

  export type ItemParentMaxAggregateInputType = {
    id?: true
    genericName?: true
    category?: true
    unit?: true
    latestWithdrawal?: true
    latestReceive?: true
    mainStockSpecific?: true
  }

  export type ItemParentCountAggregateInputType = {
    id?: true
    genericName?: true
    category?: true
    unit?: true
    latestWithdrawal?: true
    latestReceive?: true
    mainStockSpecific?: true
    _all?: true
  }

  export type ItemParentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which itemParent to aggregate.
     */
    where?: itemParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itemParents to fetch.
     */
    orderBy?: itemParentOrderByWithRelationInput | itemParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: itemParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itemParents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itemParents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned itemParents
    **/
    _count?: true | ItemParentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemParentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemParentMaxAggregateInputType
  }

  export type GetItemParentAggregateType<T extends ItemParentAggregateArgs> = {
        [P in keyof T & keyof AggregateItemParent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemParent[P]>
      : GetScalarType<T[P], AggregateItemParent[P]>
  }




  export type itemParentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemParentWhereInput
    orderBy?: itemParentOrderByWithAggregationInput | itemParentOrderByWithAggregationInput[]
    by: ItemParentScalarFieldEnum[] | ItemParentScalarFieldEnum
    having?: itemParentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemParentCountAggregateInputType | true
    _min?: ItemParentMinAggregateInputType
    _max?: ItemParentMaxAggregateInputType
  }

  export type ItemParentGroupByOutputType = {
    id: string
    genericName: string
    category: string
    unit: string
    latestWithdrawal: string | null
    latestReceive: string | null
    mainStockSpecific: boolean
    _count: ItemParentCountAggregateOutputType | null
    _min: ItemParentMinAggregateOutputType | null
    _max: ItemParentMaxAggregateOutputType | null
  }

  type GetItemParentGroupByPayload<T extends itemParentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemParentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemParentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemParentGroupByOutputType[P]>
            : GetScalarType<T[P], ItemParentGroupByOutputType[P]>
        }
      >
    >


  export type itemParentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    genericName?: boolean
    category?: boolean
    unit?: boolean
    latestWithdrawal?: boolean
    latestReceive?: boolean
    mainStockSpecific?: boolean
    items?: boolean | itemParent$itemsArgs<ExtArgs>
    withdrawals?: boolean | itemParent$withdrawalsArgs<ExtArgs>
    _count?: boolean | ItemParentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemParent"]>



  export type itemParentSelectScalar = {
    id?: boolean
    genericName?: boolean
    category?: boolean
    unit?: boolean
    latestWithdrawal?: boolean
    latestReceive?: boolean
    mainStockSpecific?: boolean
  }

  export type itemParentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "genericName" | "category" | "unit" | "latestWithdrawal" | "latestReceive" | "mainStockSpecific", ExtArgs["result"]["itemParent"]>
  export type itemParentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | itemParent$itemsArgs<ExtArgs>
    withdrawals?: boolean | itemParent$withdrawalsArgs<ExtArgs>
    _count?: boolean | ItemParentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $itemParentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "itemParent"
    objects: {
      items: Prisma.$itemPayload<ExtArgs>[]
      withdrawals: Prisma.$withdrawalItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      genericName: string
      category: string
      unit: string
      latestWithdrawal: string | null
      latestReceive: string | null
      mainStockSpecific: boolean
    }, ExtArgs["result"]["itemParent"]>
    composites: {}
  }

  type itemParentGetPayload<S extends boolean | null | undefined | itemParentDefaultArgs> = $Result.GetResult<Prisma.$itemParentPayload, S>

  type itemParentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<itemParentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemParentCountAggregateInputType | true
    }

  export interface itemParentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['itemParent'], meta: { name: 'itemParent' } }
    /**
     * Find zero or one ItemParent that matches the filter.
     * @param {itemParentFindUniqueArgs} args - Arguments to find a ItemParent
     * @example
     * // Get one ItemParent
     * const itemParent = await prisma.itemParent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends itemParentFindUniqueArgs>(args: SelectSubset<T, itemParentFindUniqueArgs<ExtArgs>>): Prisma__itemParentClient<$Result.GetResult<Prisma.$itemParentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemParent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {itemParentFindUniqueOrThrowArgs} args - Arguments to find a ItemParent
     * @example
     * // Get one ItemParent
     * const itemParent = await prisma.itemParent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends itemParentFindUniqueOrThrowArgs>(args: SelectSubset<T, itemParentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__itemParentClient<$Result.GetResult<Prisma.$itemParentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemParent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemParentFindFirstArgs} args - Arguments to find a ItemParent
     * @example
     * // Get one ItemParent
     * const itemParent = await prisma.itemParent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends itemParentFindFirstArgs>(args?: SelectSubset<T, itemParentFindFirstArgs<ExtArgs>>): Prisma__itemParentClient<$Result.GetResult<Prisma.$itemParentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemParent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemParentFindFirstOrThrowArgs} args - Arguments to find a ItemParent
     * @example
     * // Get one ItemParent
     * const itemParent = await prisma.itemParent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends itemParentFindFirstOrThrowArgs>(args?: SelectSubset<T, itemParentFindFirstOrThrowArgs<ExtArgs>>): Prisma__itemParentClient<$Result.GetResult<Prisma.$itemParentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemParents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemParentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemParents
     * const itemParents = await prisma.itemParent.findMany()
     * 
     * // Get first 10 ItemParents
     * const itemParents = await prisma.itemParent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemParentWithIdOnly = await prisma.itemParent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends itemParentFindManyArgs>(args?: SelectSubset<T, itemParentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemParentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemParent.
     * @param {itemParentCreateArgs} args - Arguments to create a ItemParent.
     * @example
     * // Create one ItemParent
     * const ItemParent = await prisma.itemParent.create({
     *   data: {
     *     // ... data to create a ItemParent
     *   }
     * })
     * 
     */
    create<T extends itemParentCreateArgs>(args: SelectSubset<T, itemParentCreateArgs<ExtArgs>>): Prisma__itemParentClient<$Result.GetResult<Prisma.$itemParentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemParents.
     * @param {itemParentCreateManyArgs} args - Arguments to create many ItemParents.
     * @example
     * // Create many ItemParents
     * const itemParent = await prisma.itemParent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends itemParentCreateManyArgs>(args?: SelectSubset<T, itemParentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ItemParent.
     * @param {itemParentDeleteArgs} args - Arguments to delete one ItemParent.
     * @example
     * // Delete one ItemParent
     * const ItemParent = await prisma.itemParent.delete({
     *   where: {
     *     // ... filter to delete one ItemParent
     *   }
     * })
     * 
     */
    delete<T extends itemParentDeleteArgs>(args: SelectSubset<T, itemParentDeleteArgs<ExtArgs>>): Prisma__itemParentClient<$Result.GetResult<Prisma.$itemParentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemParent.
     * @param {itemParentUpdateArgs} args - Arguments to update one ItemParent.
     * @example
     * // Update one ItemParent
     * const itemParent = await prisma.itemParent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends itemParentUpdateArgs>(args: SelectSubset<T, itemParentUpdateArgs<ExtArgs>>): Prisma__itemParentClient<$Result.GetResult<Prisma.$itemParentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemParents.
     * @param {itemParentDeleteManyArgs} args - Arguments to filter ItemParents to delete.
     * @example
     * // Delete a few ItemParents
     * const { count } = await prisma.itemParent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends itemParentDeleteManyArgs>(args?: SelectSubset<T, itemParentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemParents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemParentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemParents
     * const itemParent = await prisma.itemParent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends itemParentUpdateManyArgs>(args: SelectSubset<T, itemParentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ItemParent.
     * @param {itemParentUpsertArgs} args - Arguments to update or create a ItemParent.
     * @example
     * // Update or create a ItemParent
     * const itemParent = await prisma.itemParent.upsert({
     *   create: {
     *     // ... data to create a ItemParent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemParent we want to update
     *   }
     * })
     */
    upsert<T extends itemParentUpsertArgs>(args: SelectSubset<T, itemParentUpsertArgs<ExtArgs>>): Prisma__itemParentClient<$Result.GetResult<Prisma.$itemParentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemParents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemParentCountArgs} args - Arguments to filter ItemParents to count.
     * @example
     * // Count the number of ItemParents
     * const count = await prisma.itemParent.count({
     *   where: {
     *     // ... the filter for the ItemParents we want to count
     *   }
     * })
    **/
    count<T extends itemParentCountArgs>(
      args?: Subset<T, itemParentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemParentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemParent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemParentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemParentAggregateArgs>(args: Subset<T, ItemParentAggregateArgs>): Prisma.PrismaPromise<GetItemParentAggregateType<T>>

    /**
     * Group by ItemParent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemParentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends itemParentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: itemParentGroupByArgs['orderBy'] }
        : { orderBy?: itemParentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, itemParentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemParentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the itemParent model
   */
  readonly fields: itemParentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for itemParent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__itemParentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends itemParent$itemsArgs<ExtArgs> = {}>(args?: Subset<T, itemParent$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    withdrawals<T extends itemParent$withdrawalsArgs<ExtArgs> = {}>(args?: Subset<T, itemParent$withdrawalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$withdrawalItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the itemParent model
   */
  interface itemParentFieldRefs {
    readonly id: FieldRef<"itemParent", 'String'>
    readonly genericName: FieldRef<"itemParent", 'String'>
    readonly category: FieldRef<"itemParent", 'String'>
    readonly unit: FieldRef<"itemParent", 'String'>
    readonly latestWithdrawal: FieldRef<"itemParent", 'String'>
    readonly latestReceive: FieldRef<"itemParent", 'String'>
    readonly mainStockSpecific: FieldRef<"itemParent", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * itemParent findUnique
   */
  export type itemParentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemParent
     */
    select?: itemParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itemParent
     */
    omit?: itemParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemParentInclude<ExtArgs> | null
    /**
     * Filter, which itemParent to fetch.
     */
    where: itemParentWhereUniqueInput
  }

  /**
   * itemParent findUniqueOrThrow
   */
  export type itemParentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemParent
     */
    select?: itemParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itemParent
     */
    omit?: itemParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemParentInclude<ExtArgs> | null
    /**
     * Filter, which itemParent to fetch.
     */
    where: itemParentWhereUniqueInput
  }

  /**
   * itemParent findFirst
   */
  export type itemParentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemParent
     */
    select?: itemParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itemParent
     */
    omit?: itemParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemParentInclude<ExtArgs> | null
    /**
     * Filter, which itemParent to fetch.
     */
    where?: itemParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itemParents to fetch.
     */
    orderBy?: itemParentOrderByWithRelationInput | itemParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for itemParents.
     */
    cursor?: itemParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itemParents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itemParents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of itemParents.
     */
    distinct?: ItemParentScalarFieldEnum | ItemParentScalarFieldEnum[]
  }

  /**
   * itemParent findFirstOrThrow
   */
  export type itemParentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemParent
     */
    select?: itemParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itemParent
     */
    omit?: itemParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemParentInclude<ExtArgs> | null
    /**
     * Filter, which itemParent to fetch.
     */
    where?: itemParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itemParents to fetch.
     */
    orderBy?: itemParentOrderByWithRelationInput | itemParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for itemParents.
     */
    cursor?: itemParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itemParents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itemParents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of itemParents.
     */
    distinct?: ItemParentScalarFieldEnum | ItemParentScalarFieldEnum[]
  }

  /**
   * itemParent findMany
   */
  export type itemParentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemParent
     */
    select?: itemParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itemParent
     */
    omit?: itemParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemParentInclude<ExtArgs> | null
    /**
     * Filter, which itemParents to fetch.
     */
    where?: itemParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itemParents to fetch.
     */
    orderBy?: itemParentOrderByWithRelationInput | itemParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing itemParents.
     */
    cursor?: itemParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itemParents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itemParents.
     */
    skip?: number
    distinct?: ItemParentScalarFieldEnum | ItemParentScalarFieldEnum[]
  }

  /**
   * itemParent create
   */
  export type itemParentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemParent
     */
    select?: itemParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itemParent
     */
    omit?: itemParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemParentInclude<ExtArgs> | null
    /**
     * The data needed to create a itemParent.
     */
    data: XOR<itemParentCreateInput, itemParentUncheckedCreateInput>
  }

  /**
   * itemParent createMany
   */
  export type itemParentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many itemParents.
     */
    data: itemParentCreateManyInput | itemParentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * itemParent update
   */
  export type itemParentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemParent
     */
    select?: itemParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itemParent
     */
    omit?: itemParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemParentInclude<ExtArgs> | null
    /**
     * The data needed to update a itemParent.
     */
    data: XOR<itemParentUpdateInput, itemParentUncheckedUpdateInput>
    /**
     * Choose, which itemParent to update.
     */
    where: itemParentWhereUniqueInput
  }

  /**
   * itemParent updateMany
   */
  export type itemParentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update itemParents.
     */
    data: XOR<itemParentUpdateManyMutationInput, itemParentUncheckedUpdateManyInput>
    /**
     * Filter which itemParents to update
     */
    where?: itemParentWhereInput
    /**
     * Limit how many itemParents to update.
     */
    limit?: number
  }

  /**
   * itemParent upsert
   */
  export type itemParentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemParent
     */
    select?: itemParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itemParent
     */
    omit?: itemParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemParentInclude<ExtArgs> | null
    /**
     * The filter to search for the itemParent to update in case it exists.
     */
    where: itemParentWhereUniqueInput
    /**
     * In case the itemParent found by the `where` argument doesn't exist, create a new itemParent with this data.
     */
    create: XOR<itemParentCreateInput, itemParentUncheckedCreateInput>
    /**
     * In case the itemParent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<itemParentUpdateInput, itemParentUncheckedUpdateInput>
  }

  /**
   * itemParent delete
   */
  export type itemParentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemParent
     */
    select?: itemParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itemParent
     */
    omit?: itemParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemParentInclude<ExtArgs> | null
    /**
     * Filter which itemParent to delete.
     */
    where: itemParentWhereUniqueInput
  }

  /**
   * itemParent deleteMany
   */
  export type itemParentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which itemParents to delete
     */
    where?: itemParentWhereInput
    /**
     * Limit how many itemParents to delete.
     */
    limit?: number
  }

  /**
   * itemParent.items
   */
  export type itemParent$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    where?: itemWhereInput
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    cursor?: itemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * itemParent.withdrawals
   */
  export type itemParent$withdrawalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalItems
     */
    select?: withdrawalItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalItems
     */
    omit?: withdrawalItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalItemsInclude<ExtArgs> | null
    where?: withdrawalItemsWhereInput
    orderBy?: withdrawalItemsOrderByWithRelationInput | withdrawalItemsOrderByWithRelationInput[]
    cursor?: withdrawalItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WithdrawalItemsScalarFieldEnum | WithdrawalItemsScalarFieldEnum[]
  }

  /**
   * itemParent without action
   */
  export type itemParentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemParent
     */
    select?: itemParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itemParent
     */
    omit?: itemParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemParentInclude<ExtArgs> | null
  }


  /**
   * Model item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    id: number | null
    itemId: number | null
    quantity: number | null
    stockId: number | null
    receiptId: number | null
    withdrawalId: number | null
  }

  export type ItemSumAggregateOutputType = {
    id: number | null
    itemId: number | null
    quantity: number | null
    stockId: number | null
    receiptId: number | null
    withdrawalId: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: number | null
    itemId: number | null
    genericName: string | null
    unitInfo: string | null
    unit: string | null
    category: string | null
    quantity: number | null
    expireDate: string | null
    providor: string | null
    receiveDate: string | null
    itemParentId: string | null
    stockId: number | null
    receiptId: number | null
    withdrawalId: number | null
  }

  export type ItemMaxAggregateOutputType = {
    id: number | null
    itemId: number | null
    genericName: string | null
    unitInfo: string | null
    unit: string | null
    category: string | null
    quantity: number | null
    expireDate: string | null
    providor: string | null
    receiveDate: string | null
    itemParentId: string | null
    stockId: number | null
    receiptId: number | null
    withdrawalId: number | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    itemId: number
    genericName: number
    unitInfo: number
    unit: number
    category: number
    quantity: number
    expireDate: number
    providor: number
    receiveDate: number
    itemParentId: number
    stockId: number
    receiptId: number
    withdrawalId: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    id?: true
    itemId?: true
    quantity?: true
    stockId?: true
    receiptId?: true
    withdrawalId?: true
  }

  export type ItemSumAggregateInputType = {
    id?: true
    itemId?: true
    quantity?: true
    stockId?: true
    receiptId?: true
    withdrawalId?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    itemId?: true
    genericName?: true
    unitInfo?: true
    unit?: true
    category?: true
    quantity?: true
    expireDate?: true
    providor?: true
    receiveDate?: true
    itemParentId?: true
    stockId?: true
    receiptId?: true
    withdrawalId?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    itemId?: true
    genericName?: true
    unitInfo?: true
    unit?: true
    category?: true
    quantity?: true
    expireDate?: true
    providor?: true
    receiveDate?: true
    itemParentId?: true
    stockId?: true
    receiptId?: true
    withdrawalId?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    itemId?: true
    genericName?: true
    unitInfo?: true
    unit?: true
    category?: true
    quantity?: true
    expireDate?: true
    providor?: true
    receiveDate?: true
    itemParentId?: true
    stockId?: true
    receiptId?: true
    withdrawalId?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which item to aggregate.
     */
    where?: itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type itemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemWhereInput
    orderBy?: itemOrderByWithAggregationInput | itemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: itemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: number
    itemId: number | null
    genericName: string
    unitInfo: string
    unit: string
    category: string
    quantity: number
    expireDate: string | null
    providor: string
    receiveDate: string
    itemParentId: string
    stockId: number
    receiptId: number | null
    withdrawalId: number | null
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends itemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type itemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemId?: boolean
    genericName?: boolean
    unitInfo?: boolean
    unit?: boolean
    category?: boolean
    quantity?: boolean
    expireDate?: boolean
    providor?: boolean
    receiveDate?: boolean
    itemParentId?: boolean
    stockId?: boolean
    receiptId?: boolean
    withdrawalId?: boolean
    withdrawal?: boolean | item$withdrawalArgs<ExtArgs>
    stock?: boolean | userDefaultArgs<ExtArgs>
    itemParent?: boolean | itemParentDefaultArgs<ExtArgs>
    receipt?: boolean | item$receiptArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>



  export type itemSelectScalar = {
    id?: boolean
    itemId?: boolean
    genericName?: boolean
    unitInfo?: boolean
    unit?: boolean
    category?: boolean
    quantity?: boolean
    expireDate?: boolean
    providor?: boolean
    receiveDate?: boolean
    itemParentId?: boolean
    stockId?: boolean
    receiptId?: boolean
    withdrawalId?: boolean
  }

  export type itemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "itemId" | "genericName" | "unitInfo" | "unit" | "category" | "quantity" | "expireDate" | "providor" | "receiveDate" | "itemParentId" | "stockId" | "receiptId" | "withdrawalId", ExtArgs["result"]["item"]>
  export type itemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    withdrawal?: boolean | item$withdrawalArgs<ExtArgs>
    stock?: boolean | userDefaultArgs<ExtArgs>
    itemParent?: boolean | itemParentDefaultArgs<ExtArgs>
    receipt?: boolean | item$receiptArgs<ExtArgs>
  }

  export type $itemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "item"
    objects: {
      withdrawal: Prisma.$withdrawalPayload<ExtArgs> | null
      stock: Prisma.$userPayload<ExtArgs>
      itemParent: Prisma.$itemParentPayload<ExtArgs>
      receipt: Prisma.$receiptPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      itemId: number | null
      genericName: string
      unitInfo: string
      unit: string
      category: string
      quantity: number
      expireDate: string | null
      providor: string
      receiveDate: string
      itemParentId: string
      stockId: number
      receiptId: number | null
      withdrawalId: number | null
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type itemGetPayload<S extends boolean | null | undefined | itemDefaultArgs> = $Result.GetResult<Prisma.$itemPayload, S>

  type itemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<itemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface itemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['item'], meta: { name: 'item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {itemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends itemFindUniqueArgs>(args: SelectSubset<T, itemFindUniqueArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {itemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends itemFindUniqueOrThrowArgs>(args: SelectSubset<T, itemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends itemFindFirstArgs>(args?: SelectSubset<T, itemFindFirstArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends itemFindFirstOrThrowArgs>(args?: SelectSubset<T, itemFindFirstOrThrowArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends itemFindManyArgs>(args?: SelectSubset<T, itemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {itemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends itemCreateArgs>(args: SelectSubset<T, itemCreateArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {itemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends itemCreateManyArgs>(args?: SelectSubset<T, itemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Item.
     * @param {itemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends itemDeleteArgs>(args: SelectSubset<T, itemDeleteArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {itemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends itemUpdateArgs>(args: SelectSubset<T, itemUpdateArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {itemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends itemDeleteManyArgs>(args?: SelectSubset<T, itemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends itemUpdateManyArgs>(args: SelectSubset<T, itemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Item.
     * @param {itemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends itemUpsertArgs>(args: SelectSubset<T, itemUpsertArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends itemCountArgs>(
      args?: Subset<T, itemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends itemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: itemGroupByArgs['orderBy'] }
        : { orderBy?: itemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, itemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the item model
   */
  readonly fields: itemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__itemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    withdrawal<T extends item$withdrawalArgs<ExtArgs> = {}>(args?: Subset<T, item$withdrawalArgs<ExtArgs>>): Prisma__withdrawalClient<$Result.GetResult<Prisma.$withdrawalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    stock<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itemParent<T extends itemParentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, itemParentDefaultArgs<ExtArgs>>): Prisma__itemParentClient<$Result.GetResult<Prisma.$itemParentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receipt<T extends item$receiptArgs<ExtArgs> = {}>(args?: Subset<T, item$receiptArgs<ExtArgs>>): Prisma__receiptClient<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the item model
   */
  interface itemFieldRefs {
    readonly id: FieldRef<"item", 'Int'>
    readonly itemId: FieldRef<"item", 'Int'>
    readonly genericName: FieldRef<"item", 'String'>
    readonly unitInfo: FieldRef<"item", 'String'>
    readonly unit: FieldRef<"item", 'String'>
    readonly category: FieldRef<"item", 'String'>
    readonly quantity: FieldRef<"item", 'Int'>
    readonly expireDate: FieldRef<"item", 'String'>
    readonly providor: FieldRef<"item", 'String'>
    readonly receiveDate: FieldRef<"item", 'String'>
    readonly itemParentId: FieldRef<"item", 'String'>
    readonly stockId: FieldRef<"item", 'Int'>
    readonly receiptId: FieldRef<"item", 'Int'>
    readonly withdrawalId: FieldRef<"item", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * item findUnique
   */
  export type itemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter, which item to fetch.
     */
    where: itemWhereUniqueInput
  }

  /**
   * item findUniqueOrThrow
   */
  export type itemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter, which item to fetch.
     */
    where: itemWhereUniqueInput
  }

  /**
   * item findFirst
   */
  export type itemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter, which item to fetch.
     */
    where?: itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for items.
     */
    cursor?: itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * item findFirstOrThrow
   */
  export type itemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter, which item to fetch.
     */
    where?: itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for items.
     */
    cursor?: itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * item findMany
   */
  export type itemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter, which items to fetch.
     */
    where?: itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing items.
     */
    cursor?: itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * item create
   */
  export type itemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * The data needed to create a item.
     */
    data: XOR<itemCreateInput, itemUncheckedCreateInput>
  }

  /**
   * item createMany
   */
  export type itemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many items.
     */
    data: itemCreateManyInput | itemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * item update
   */
  export type itemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * The data needed to update a item.
     */
    data: XOR<itemUpdateInput, itemUncheckedUpdateInput>
    /**
     * Choose, which item to update.
     */
    where: itemWhereUniqueInput
  }

  /**
   * item updateMany
   */
  export type itemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update items.
     */
    data: XOR<itemUpdateManyMutationInput, itemUncheckedUpdateManyInput>
    /**
     * Filter which items to update
     */
    where?: itemWhereInput
    /**
     * Limit how many items to update.
     */
    limit?: number
  }

  /**
   * item upsert
   */
  export type itemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * The filter to search for the item to update in case it exists.
     */
    where: itemWhereUniqueInput
    /**
     * In case the item found by the `where` argument doesn't exist, create a new item with this data.
     */
    create: XOR<itemCreateInput, itemUncheckedCreateInput>
    /**
     * In case the item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<itemUpdateInput, itemUncheckedUpdateInput>
  }

  /**
   * item delete
   */
  export type itemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter which item to delete.
     */
    where: itemWhereUniqueInput
  }

  /**
   * item deleteMany
   */
  export type itemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which items to delete
     */
    where?: itemWhereInput
    /**
     * Limit how many items to delete.
     */
    limit?: number
  }

  /**
   * item.withdrawal
   */
  export type item$withdrawalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawal
     */
    select?: withdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawal
     */
    omit?: withdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalInclude<ExtArgs> | null
    where?: withdrawalWhereInput
  }

  /**
   * item.receipt
   */
  export type item$receiptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt
     */
    omit?: receiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptInclude<ExtArgs> | null
    where?: receiptWhereInput
  }

  /**
   * item without action
   */
  export type itemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
  }


  /**
   * Model receipt
   */

  export type AggregateReceipt = {
    _count: ReceiptCountAggregateOutputType | null
    _avg: ReceiptAvgAggregateOutputType | null
    _sum: ReceiptSumAggregateOutputType | null
    _min: ReceiptMinAggregateOutputType | null
    _max: ReceiptMaxAggregateOutputType | null
  }

  export type ReceiptAvgAggregateOutputType = {
    id: number | null
  }

  export type ReceiptSumAggregateOutputType = {
    id: number | null
  }

  export type ReceiptMinAggregateOutputType = {
    id: number | null
    date: string | null
    providorName: string | null
    providorId: string | null
  }

  export type ReceiptMaxAggregateOutputType = {
    id: number | null
    date: string | null
    providorName: string | null
    providorId: string | null
  }

  export type ReceiptCountAggregateOutputType = {
    id: number
    date: number
    providorName: number
    providorId: number
    _all: number
  }


  export type ReceiptAvgAggregateInputType = {
    id?: true
  }

  export type ReceiptSumAggregateInputType = {
    id?: true
  }

  export type ReceiptMinAggregateInputType = {
    id?: true
    date?: true
    providorName?: true
    providorId?: true
  }

  export type ReceiptMaxAggregateInputType = {
    id?: true
    date?: true
    providorName?: true
    providorId?: true
  }

  export type ReceiptCountAggregateInputType = {
    id?: true
    date?: true
    providorName?: true
    providorId?: true
    _all?: true
  }

  export type ReceiptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which receipt to aggregate.
     */
    where?: receiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receipts to fetch.
     */
    orderBy?: receiptOrderByWithRelationInput | receiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: receiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned receipts
    **/
    _count?: true | ReceiptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReceiptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReceiptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceiptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceiptMaxAggregateInputType
  }

  export type GetReceiptAggregateType<T extends ReceiptAggregateArgs> = {
        [P in keyof T & keyof AggregateReceipt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceipt[P]>
      : GetScalarType<T[P], AggregateReceipt[P]>
  }




  export type receiptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: receiptWhereInput
    orderBy?: receiptOrderByWithAggregationInput | receiptOrderByWithAggregationInput[]
    by: ReceiptScalarFieldEnum[] | ReceiptScalarFieldEnum
    having?: receiptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceiptCountAggregateInputType | true
    _avg?: ReceiptAvgAggregateInputType
    _sum?: ReceiptSumAggregateInputType
    _min?: ReceiptMinAggregateInputType
    _max?: ReceiptMaxAggregateInputType
  }

  export type ReceiptGroupByOutputType = {
    id: number
    date: string
    providorName: string
    providorId: string
    _count: ReceiptCountAggregateOutputType | null
    _avg: ReceiptAvgAggregateOutputType | null
    _sum: ReceiptSumAggregateOutputType | null
    _min: ReceiptMinAggregateOutputType | null
    _max: ReceiptMaxAggregateOutputType | null
  }

  type GetReceiptGroupByPayload<T extends receiptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceiptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceiptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceiptGroupByOutputType[P]>
            : GetScalarType<T[P], ReceiptGroupByOutputType[P]>
        }
      >
    >


  export type receiptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    providorName?: boolean
    providorId?: boolean
    items?: boolean | receipt$itemsArgs<ExtArgs>
    stockItmes?: boolean | receipt$stockItmesArgs<ExtArgs>
    providor?: boolean | providorDefaultArgs<ExtArgs>
    _count?: boolean | ReceiptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receipt"]>



  export type receiptSelectScalar = {
    id?: boolean
    date?: boolean
    providorName?: boolean
    providorId?: boolean
  }

  export type receiptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "providorName" | "providorId", ExtArgs["result"]["receipt"]>
  export type receiptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | receipt$itemsArgs<ExtArgs>
    stockItmes?: boolean | receipt$stockItmesArgs<ExtArgs>
    providor?: boolean | providorDefaultArgs<ExtArgs>
    _count?: boolean | ReceiptCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $receiptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "receipt"
    objects: {
      items: Prisma.$receiptItemsPayload<ExtArgs>[]
      stockItmes: Prisma.$itemPayload<ExtArgs>[]
      providor: Prisma.$providorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: string
      providorName: string
      providorId: string
    }, ExtArgs["result"]["receipt"]>
    composites: {}
  }

  type receiptGetPayload<S extends boolean | null | undefined | receiptDefaultArgs> = $Result.GetResult<Prisma.$receiptPayload, S>

  type receiptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<receiptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReceiptCountAggregateInputType | true
    }

  export interface receiptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['receipt'], meta: { name: 'receipt' } }
    /**
     * Find zero or one Receipt that matches the filter.
     * @param {receiptFindUniqueArgs} args - Arguments to find a Receipt
     * @example
     * // Get one Receipt
     * const receipt = await prisma.receipt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends receiptFindUniqueArgs>(args: SelectSubset<T, receiptFindUniqueArgs<ExtArgs>>): Prisma__receiptClient<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Receipt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {receiptFindUniqueOrThrowArgs} args - Arguments to find a Receipt
     * @example
     * // Get one Receipt
     * const receipt = await prisma.receipt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends receiptFindUniqueOrThrowArgs>(args: SelectSubset<T, receiptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__receiptClient<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receipt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptFindFirstArgs} args - Arguments to find a Receipt
     * @example
     * // Get one Receipt
     * const receipt = await prisma.receipt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends receiptFindFirstArgs>(args?: SelectSubset<T, receiptFindFirstArgs<ExtArgs>>): Prisma__receiptClient<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receipt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptFindFirstOrThrowArgs} args - Arguments to find a Receipt
     * @example
     * // Get one Receipt
     * const receipt = await prisma.receipt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends receiptFindFirstOrThrowArgs>(args?: SelectSubset<T, receiptFindFirstOrThrowArgs<ExtArgs>>): Prisma__receiptClient<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Receipts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Receipts
     * const receipts = await prisma.receipt.findMany()
     * 
     * // Get first 10 Receipts
     * const receipts = await prisma.receipt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const receiptWithIdOnly = await prisma.receipt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends receiptFindManyArgs>(args?: SelectSubset<T, receiptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Receipt.
     * @param {receiptCreateArgs} args - Arguments to create a Receipt.
     * @example
     * // Create one Receipt
     * const Receipt = await prisma.receipt.create({
     *   data: {
     *     // ... data to create a Receipt
     *   }
     * })
     * 
     */
    create<T extends receiptCreateArgs>(args: SelectSubset<T, receiptCreateArgs<ExtArgs>>): Prisma__receiptClient<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Receipts.
     * @param {receiptCreateManyArgs} args - Arguments to create many Receipts.
     * @example
     * // Create many Receipts
     * const receipt = await prisma.receipt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends receiptCreateManyArgs>(args?: SelectSubset<T, receiptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Receipt.
     * @param {receiptDeleteArgs} args - Arguments to delete one Receipt.
     * @example
     * // Delete one Receipt
     * const Receipt = await prisma.receipt.delete({
     *   where: {
     *     // ... filter to delete one Receipt
     *   }
     * })
     * 
     */
    delete<T extends receiptDeleteArgs>(args: SelectSubset<T, receiptDeleteArgs<ExtArgs>>): Prisma__receiptClient<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Receipt.
     * @param {receiptUpdateArgs} args - Arguments to update one Receipt.
     * @example
     * // Update one Receipt
     * const receipt = await prisma.receipt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends receiptUpdateArgs>(args: SelectSubset<T, receiptUpdateArgs<ExtArgs>>): Prisma__receiptClient<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Receipts.
     * @param {receiptDeleteManyArgs} args - Arguments to filter Receipts to delete.
     * @example
     * // Delete a few Receipts
     * const { count } = await prisma.receipt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends receiptDeleteManyArgs>(args?: SelectSubset<T, receiptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Receipts
     * const receipt = await prisma.receipt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends receiptUpdateManyArgs>(args: SelectSubset<T, receiptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Receipt.
     * @param {receiptUpsertArgs} args - Arguments to update or create a Receipt.
     * @example
     * // Update or create a Receipt
     * const receipt = await prisma.receipt.upsert({
     *   create: {
     *     // ... data to create a Receipt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Receipt we want to update
     *   }
     * })
     */
    upsert<T extends receiptUpsertArgs>(args: SelectSubset<T, receiptUpsertArgs<ExtArgs>>): Prisma__receiptClient<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Receipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptCountArgs} args - Arguments to filter Receipts to count.
     * @example
     * // Count the number of Receipts
     * const count = await prisma.receipt.count({
     *   where: {
     *     // ... the filter for the Receipts we want to count
     *   }
     * })
    **/
    count<T extends receiptCountArgs>(
      args?: Subset<T, receiptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceiptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Receipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReceiptAggregateArgs>(args: Subset<T, ReceiptAggregateArgs>): Prisma.PrismaPromise<GetReceiptAggregateType<T>>

    /**
     * Group by Receipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends receiptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: receiptGroupByArgs['orderBy'] }
        : { orderBy?: receiptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, receiptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceiptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the receipt model
   */
  readonly fields: receiptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for receipt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__receiptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends receipt$itemsArgs<ExtArgs> = {}>(args?: Subset<T, receipt$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receiptItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stockItmes<T extends receipt$stockItmesArgs<ExtArgs> = {}>(args?: Subset<T, receipt$stockItmesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    providor<T extends providorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, providorDefaultArgs<ExtArgs>>): Prisma__providorClient<$Result.GetResult<Prisma.$providorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the receipt model
   */
  interface receiptFieldRefs {
    readonly id: FieldRef<"receipt", 'Int'>
    readonly date: FieldRef<"receipt", 'String'>
    readonly providorName: FieldRef<"receipt", 'String'>
    readonly providorId: FieldRef<"receipt", 'String'>
  }
    

  // Custom InputTypes
  /**
   * receipt findUnique
   */
  export type receiptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt
     */
    omit?: receiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptInclude<ExtArgs> | null
    /**
     * Filter, which receipt to fetch.
     */
    where: receiptWhereUniqueInput
  }

  /**
   * receipt findUniqueOrThrow
   */
  export type receiptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt
     */
    omit?: receiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptInclude<ExtArgs> | null
    /**
     * Filter, which receipt to fetch.
     */
    where: receiptWhereUniqueInput
  }

  /**
   * receipt findFirst
   */
  export type receiptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt
     */
    omit?: receiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptInclude<ExtArgs> | null
    /**
     * Filter, which receipt to fetch.
     */
    where?: receiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receipts to fetch.
     */
    orderBy?: receiptOrderByWithRelationInput | receiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for receipts.
     */
    cursor?: receiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of receipts.
     */
    distinct?: ReceiptScalarFieldEnum | ReceiptScalarFieldEnum[]
  }

  /**
   * receipt findFirstOrThrow
   */
  export type receiptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt
     */
    omit?: receiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptInclude<ExtArgs> | null
    /**
     * Filter, which receipt to fetch.
     */
    where?: receiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receipts to fetch.
     */
    orderBy?: receiptOrderByWithRelationInput | receiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for receipts.
     */
    cursor?: receiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of receipts.
     */
    distinct?: ReceiptScalarFieldEnum | ReceiptScalarFieldEnum[]
  }

  /**
   * receipt findMany
   */
  export type receiptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt
     */
    omit?: receiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptInclude<ExtArgs> | null
    /**
     * Filter, which receipts to fetch.
     */
    where?: receiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receipts to fetch.
     */
    orderBy?: receiptOrderByWithRelationInput | receiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing receipts.
     */
    cursor?: receiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receipts.
     */
    skip?: number
    distinct?: ReceiptScalarFieldEnum | ReceiptScalarFieldEnum[]
  }

  /**
   * receipt create
   */
  export type receiptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt
     */
    omit?: receiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptInclude<ExtArgs> | null
    /**
     * The data needed to create a receipt.
     */
    data: XOR<receiptCreateInput, receiptUncheckedCreateInput>
  }

  /**
   * receipt createMany
   */
  export type receiptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many receipts.
     */
    data: receiptCreateManyInput | receiptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * receipt update
   */
  export type receiptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt
     */
    omit?: receiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptInclude<ExtArgs> | null
    /**
     * The data needed to update a receipt.
     */
    data: XOR<receiptUpdateInput, receiptUncheckedUpdateInput>
    /**
     * Choose, which receipt to update.
     */
    where: receiptWhereUniqueInput
  }

  /**
   * receipt updateMany
   */
  export type receiptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update receipts.
     */
    data: XOR<receiptUpdateManyMutationInput, receiptUncheckedUpdateManyInput>
    /**
     * Filter which receipts to update
     */
    where?: receiptWhereInput
    /**
     * Limit how many receipts to update.
     */
    limit?: number
  }

  /**
   * receipt upsert
   */
  export type receiptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt
     */
    omit?: receiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptInclude<ExtArgs> | null
    /**
     * The filter to search for the receipt to update in case it exists.
     */
    where: receiptWhereUniqueInput
    /**
     * In case the receipt found by the `where` argument doesn't exist, create a new receipt with this data.
     */
    create: XOR<receiptCreateInput, receiptUncheckedCreateInput>
    /**
     * In case the receipt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<receiptUpdateInput, receiptUncheckedUpdateInput>
  }

  /**
   * receipt delete
   */
  export type receiptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt
     */
    omit?: receiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptInclude<ExtArgs> | null
    /**
     * Filter which receipt to delete.
     */
    where: receiptWhereUniqueInput
  }

  /**
   * receipt deleteMany
   */
  export type receiptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which receipts to delete
     */
    where?: receiptWhereInput
    /**
     * Limit how many receipts to delete.
     */
    limit?: number
  }

  /**
   * receipt.items
   */
  export type receipt$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptItems
     */
    select?: receiptItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptItems
     */
    omit?: receiptItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptItemsInclude<ExtArgs> | null
    where?: receiptItemsWhereInput
    orderBy?: receiptItemsOrderByWithRelationInput | receiptItemsOrderByWithRelationInput[]
    cursor?: receiptItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceiptItemsScalarFieldEnum | ReceiptItemsScalarFieldEnum[]
  }

  /**
   * receipt.stockItmes
   */
  export type receipt$stockItmesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    where?: itemWhereInput
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    cursor?: itemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * receipt without action
   */
  export type receiptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt
     */
    omit?: receiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptInclude<ExtArgs> | null
  }


  /**
   * Model receiptItems
   */

  export type AggregateReceiptItems = {
    _count: ReceiptItemsCountAggregateOutputType | null
    _avg: ReceiptItemsAvgAggregateOutputType | null
    _sum: ReceiptItemsSumAggregateOutputType | null
    _min: ReceiptItemsMinAggregateOutputType | null
    _max: ReceiptItemsMaxAggregateOutputType | null
  }

  export type ReceiptItemsAvgAggregateOutputType = {
    quantity: number | null
    receiptId: number | null
  }

  export type ReceiptItemsSumAggregateOutputType = {
    quantity: number | null
    receiptId: number | null
  }

  export type ReceiptItemsMinAggregateOutputType = {
    id: string | null
    genericName: string | null
    unit: string | null
    unitInfo: string | null
    category: string | null
    quantity: number | null
    expireDate: string | null
    receiptId: number | null
  }

  export type ReceiptItemsMaxAggregateOutputType = {
    id: string | null
    genericName: string | null
    unit: string | null
    unitInfo: string | null
    category: string | null
    quantity: number | null
    expireDate: string | null
    receiptId: number | null
  }

  export type ReceiptItemsCountAggregateOutputType = {
    id: number
    genericName: number
    unit: number
    unitInfo: number
    category: number
    quantity: number
    expireDate: number
    receiptId: number
    _all: number
  }


  export type ReceiptItemsAvgAggregateInputType = {
    quantity?: true
    receiptId?: true
  }

  export type ReceiptItemsSumAggregateInputType = {
    quantity?: true
    receiptId?: true
  }

  export type ReceiptItemsMinAggregateInputType = {
    id?: true
    genericName?: true
    unit?: true
    unitInfo?: true
    category?: true
    quantity?: true
    expireDate?: true
    receiptId?: true
  }

  export type ReceiptItemsMaxAggregateInputType = {
    id?: true
    genericName?: true
    unit?: true
    unitInfo?: true
    category?: true
    quantity?: true
    expireDate?: true
    receiptId?: true
  }

  export type ReceiptItemsCountAggregateInputType = {
    id?: true
    genericName?: true
    unit?: true
    unitInfo?: true
    category?: true
    quantity?: true
    expireDate?: true
    receiptId?: true
    _all?: true
  }

  export type ReceiptItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which receiptItems to aggregate.
     */
    where?: receiptItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receiptItems to fetch.
     */
    orderBy?: receiptItemsOrderByWithRelationInput | receiptItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: receiptItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receiptItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receiptItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned receiptItems
    **/
    _count?: true | ReceiptItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReceiptItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReceiptItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceiptItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceiptItemsMaxAggregateInputType
  }

  export type GetReceiptItemsAggregateType<T extends ReceiptItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateReceiptItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceiptItems[P]>
      : GetScalarType<T[P], AggregateReceiptItems[P]>
  }




  export type receiptItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: receiptItemsWhereInput
    orderBy?: receiptItemsOrderByWithAggregationInput | receiptItemsOrderByWithAggregationInput[]
    by: ReceiptItemsScalarFieldEnum[] | ReceiptItemsScalarFieldEnum
    having?: receiptItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceiptItemsCountAggregateInputType | true
    _avg?: ReceiptItemsAvgAggregateInputType
    _sum?: ReceiptItemsSumAggregateInputType
    _min?: ReceiptItemsMinAggregateInputType
    _max?: ReceiptItemsMaxAggregateInputType
  }

  export type ReceiptItemsGroupByOutputType = {
    id: string
    genericName: string
    unit: string
    unitInfo: string
    category: string
    quantity: number
    expireDate: string | null
    receiptId: number
    _count: ReceiptItemsCountAggregateOutputType | null
    _avg: ReceiptItemsAvgAggregateOutputType | null
    _sum: ReceiptItemsSumAggregateOutputType | null
    _min: ReceiptItemsMinAggregateOutputType | null
    _max: ReceiptItemsMaxAggregateOutputType | null
  }

  type GetReceiptItemsGroupByPayload<T extends receiptItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceiptItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceiptItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceiptItemsGroupByOutputType[P]>
            : GetScalarType<T[P], ReceiptItemsGroupByOutputType[P]>
        }
      >
    >


  export type receiptItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    genericName?: boolean
    unit?: boolean
    unitInfo?: boolean
    category?: boolean
    quantity?: boolean
    expireDate?: boolean
    receiptId?: boolean
    receipt?: boolean | receiptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receiptItems"]>



  export type receiptItemsSelectScalar = {
    id?: boolean
    genericName?: boolean
    unit?: boolean
    unitInfo?: boolean
    category?: boolean
    quantity?: boolean
    expireDate?: boolean
    receiptId?: boolean
  }

  export type receiptItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "genericName" | "unit" | "unitInfo" | "category" | "quantity" | "expireDate" | "receiptId", ExtArgs["result"]["receiptItems"]>
  export type receiptItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipt?: boolean | receiptDefaultArgs<ExtArgs>
  }

  export type $receiptItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "receiptItems"
    objects: {
      receipt: Prisma.$receiptPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      genericName: string
      unit: string
      unitInfo: string
      category: string
      quantity: number
      expireDate: string | null
      receiptId: number
    }, ExtArgs["result"]["receiptItems"]>
    composites: {}
  }

  type receiptItemsGetPayload<S extends boolean | null | undefined | receiptItemsDefaultArgs> = $Result.GetResult<Prisma.$receiptItemsPayload, S>

  type receiptItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<receiptItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReceiptItemsCountAggregateInputType | true
    }

  export interface receiptItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['receiptItems'], meta: { name: 'receiptItems' } }
    /**
     * Find zero or one ReceiptItems that matches the filter.
     * @param {receiptItemsFindUniqueArgs} args - Arguments to find a ReceiptItems
     * @example
     * // Get one ReceiptItems
     * const receiptItems = await prisma.receiptItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends receiptItemsFindUniqueArgs>(args: SelectSubset<T, receiptItemsFindUniqueArgs<ExtArgs>>): Prisma__receiptItemsClient<$Result.GetResult<Prisma.$receiptItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReceiptItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {receiptItemsFindUniqueOrThrowArgs} args - Arguments to find a ReceiptItems
     * @example
     * // Get one ReceiptItems
     * const receiptItems = await prisma.receiptItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends receiptItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, receiptItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__receiptItemsClient<$Result.GetResult<Prisma.$receiptItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceiptItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptItemsFindFirstArgs} args - Arguments to find a ReceiptItems
     * @example
     * // Get one ReceiptItems
     * const receiptItems = await prisma.receiptItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends receiptItemsFindFirstArgs>(args?: SelectSubset<T, receiptItemsFindFirstArgs<ExtArgs>>): Prisma__receiptItemsClient<$Result.GetResult<Prisma.$receiptItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceiptItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptItemsFindFirstOrThrowArgs} args - Arguments to find a ReceiptItems
     * @example
     * // Get one ReceiptItems
     * const receiptItems = await prisma.receiptItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends receiptItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, receiptItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__receiptItemsClient<$Result.GetResult<Prisma.$receiptItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReceiptItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReceiptItems
     * const receiptItems = await prisma.receiptItems.findMany()
     * 
     * // Get first 10 ReceiptItems
     * const receiptItems = await prisma.receiptItems.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const receiptItemsWithIdOnly = await prisma.receiptItems.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends receiptItemsFindManyArgs>(args?: SelectSubset<T, receiptItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receiptItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReceiptItems.
     * @param {receiptItemsCreateArgs} args - Arguments to create a ReceiptItems.
     * @example
     * // Create one ReceiptItems
     * const ReceiptItems = await prisma.receiptItems.create({
     *   data: {
     *     // ... data to create a ReceiptItems
     *   }
     * })
     * 
     */
    create<T extends receiptItemsCreateArgs>(args: SelectSubset<T, receiptItemsCreateArgs<ExtArgs>>): Prisma__receiptItemsClient<$Result.GetResult<Prisma.$receiptItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReceiptItems.
     * @param {receiptItemsCreateManyArgs} args - Arguments to create many ReceiptItems.
     * @example
     * // Create many ReceiptItems
     * const receiptItems = await prisma.receiptItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends receiptItemsCreateManyArgs>(args?: SelectSubset<T, receiptItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReceiptItems.
     * @param {receiptItemsDeleteArgs} args - Arguments to delete one ReceiptItems.
     * @example
     * // Delete one ReceiptItems
     * const ReceiptItems = await prisma.receiptItems.delete({
     *   where: {
     *     // ... filter to delete one ReceiptItems
     *   }
     * })
     * 
     */
    delete<T extends receiptItemsDeleteArgs>(args: SelectSubset<T, receiptItemsDeleteArgs<ExtArgs>>): Prisma__receiptItemsClient<$Result.GetResult<Prisma.$receiptItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReceiptItems.
     * @param {receiptItemsUpdateArgs} args - Arguments to update one ReceiptItems.
     * @example
     * // Update one ReceiptItems
     * const receiptItems = await prisma.receiptItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends receiptItemsUpdateArgs>(args: SelectSubset<T, receiptItemsUpdateArgs<ExtArgs>>): Prisma__receiptItemsClient<$Result.GetResult<Prisma.$receiptItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReceiptItems.
     * @param {receiptItemsDeleteManyArgs} args - Arguments to filter ReceiptItems to delete.
     * @example
     * // Delete a few ReceiptItems
     * const { count } = await prisma.receiptItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends receiptItemsDeleteManyArgs>(args?: SelectSubset<T, receiptItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReceiptItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReceiptItems
     * const receiptItems = await prisma.receiptItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends receiptItemsUpdateManyArgs>(args: SelectSubset<T, receiptItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReceiptItems.
     * @param {receiptItemsUpsertArgs} args - Arguments to update or create a ReceiptItems.
     * @example
     * // Update or create a ReceiptItems
     * const receiptItems = await prisma.receiptItems.upsert({
     *   create: {
     *     // ... data to create a ReceiptItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReceiptItems we want to update
     *   }
     * })
     */
    upsert<T extends receiptItemsUpsertArgs>(args: SelectSubset<T, receiptItemsUpsertArgs<ExtArgs>>): Prisma__receiptItemsClient<$Result.GetResult<Prisma.$receiptItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReceiptItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptItemsCountArgs} args - Arguments to filter ReceiptItems to count.
     * @example
     * // Count the number of ReceiptItems
     * const count = await prisma.receiptItems.count({
     *   where: {
     *     // ... the filter for the ReceiptItems we want to count
     *   }
     * })
    **/
    count<T extends receiptItemsCountArgs>(
      args?: Subset<T, receiptItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceiptItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReceiptItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReceiptItemsAggregateArgs>(args: Subset<T, ReceiptItemsAggregateArgs>): Prisma.PrismaPromise<GetReceiptItemsAggregateType<T>>

    /**
     * Group by ReceiptItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends receiptItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: receiptItemsGroupByArgs['orderBy'] }
        : { orderBy?: receiptItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, receiptItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceiptItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the receiptItems model
   */
  readonly fields: receiptItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for receiptItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__receiptItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receipt<T extends receiptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, receiptDefaultArgs<ExtArgs>>): Prisma__receiptClient<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the receiptItems model
   */
  interface receiptItemsFieldRefs {
    readonly id: FieldRef<"receiptItems", 'String'>
    readonly genericName: FieldRef<"receiptItems", 'String'>
    readonly unit: FieldRef<"receiptItems", 'String'>
    readonly unitInfo: FieldRef<"receiptItems", 'String'>
    readonly category: FieldRef<"receiptItems", 'String'>
    readonly quantity: FieldRef<"receiptItems", 'Int'>
    readonly expireDate: FieldRef<"receiptItems", 'String'>
    readonly receiptId: FieldRef<"receiptItems", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * receiptItems findUnique
   */
  export type receiptItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptItems
     */
    select?: receiptItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptItems
     */
    omit?: receiptItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptItemsInclude<ExtArgs> | null
    /**
     * Filter, which receiptItems to fetch.
     */
    where: receiptItemsWhereUniqueInput
  }

  /**
   * receiptItems findUniqueOrThrow
   */
  export type receiptItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptItems
     */
    select?: receiptItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptItems
     */
    omit?: receiptItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptItemsInclude<ExtArgs> | null
    /**
     * Filter, which receiptItems to fetch.
     */
    where: receiptItemsWhereUniqueInput
  }

  /**
   * receiptItems findFirst
   */
  export type receiptItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptItems
     */
    select?: receiptItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptItems
     */
    omit?: receiptItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptItemsInclude<ExtArgs> | null
    /**
     * Filter, which receiptItems to fetch.
     */
    where?: receiptItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receiptItems to fetch.
     */
    orderBy?: receiptItemsOrderByWithRelationInput | receiptItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for receiptItems.
     */
    cursor?: receiptItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receiptItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receiptItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of receiptItems.
     */
    distinct?: ReceiptItemsScalarFieldEnum | ReceiptItemsScalarFieldEnum[]
  }

  /**
   * receiptItems findFirstOrThrow
   */
  export type receiptItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptItems
     */
    select?: receiptItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptItems
     */
    omit?: receiptItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptItemsInclude<ExtArgs> | null
    /**
     * Filter, which receiptItems to fetch.
     */
    where?: receiptItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receiptItems to fetch.
     */
    orderBy?: receiptItemsOrderByWithRelationInput | receiptItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for receiptItems.
     */
    cursor?: receiptItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receiptItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receiptItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of receiptItems.
     */
    distinct?: ReceiptItemsScalarFieldEnum | ReceiptItemsScalarFieldEnum[]
  }

  /**
   * receiptItems findMany
   */
  export type receiptItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptItems
     */
    select?: receiptItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptItems
     */
    omit?: receiptItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptItemsInclude<ExtArgs> | null
    /**
     * Filter, which receiptItems to fetch.
     */
    where?: receiptItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receiptItems to fetch.
     */
    orderBy?: receiptItemsOrderByWithRelationInput | receiptItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing receiptItems.
     */
    cursor?: receiptItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receiptItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receiptItems.
     */
    skip?: number
    distinct?: ReceiptItemsScalarFieldEnum | ReceiptItemsScalarFieldEnum[]
  }

  /**
   * receiptItems create
   */
  export type receiptItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptItems
     */
    select?: receiptItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptItems
     */
    omit?: receiptItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a receiptItems.
     */
    data: XOR<receiptItemsCreateInput, receiptItemsUncheckedCreateInput>
  }

  /**
   * receiptItems createMany
   */
  export type receiptItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many receiptItems.
     */
    data: receiptItemsCreateManyInput | receiptItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * receiptItems update
   */
  export type receiptItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptItems
     */
    select?: receiptItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptItems
     */
    omit?: receiptItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a receiptItems.
     */
    data: XOR<receiptItemsUpdateInput, receiptItemsUncheckedUpdateInput>
    /**
     * Choose, which receiptItems to update.
     */
    where: receiptItemsWhereUniqueInput
  }

  /**
   * receiptItems updateMany
   */
  export type receiptItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update receiptItems.
     */
    data: XOR<receiptItemsUpdateManyMutationInput, receiptItemsUncheckedUpdateManyInput>
    /**
     * Filter which receiptItems to update
     */
    where?: receiptItemsWhereInput
    /**
     * Limit how many receiptItems to update.
     */
    limit?: number
  }

  /**
   * receiptItems upsert
   */
  export type receiptItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptItems
     */
    select?: receiptItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptItems
     */
    omit?: receiptItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the receiptItems to update in case it exists.
     */
    where: receiptItemsWhereUniqueInput
    /**
     * In case the receiptItems found by the `where` argument doesn't exist, create a new receiptItems with this data.
     */
    create: XOR<receiptItemsCreateInput, receiptItemsUncheckedCreateInput>
    /**
     * In case the receiptItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<receiptItemsUpdateInput, receiptItemsUncheckedUpdateInput>
  }

  /**
   * receiptItems delete
   */
  export type receiptItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptItems
     */
    select?: receiptItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptItems
     */
    omit?: receiptItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptItemsInclude<ExtArgs> | null
    /**
     * Filter which receiptItems to delete.
     */
    where: receiptItemsWhereUniqueInput
  }

  /**
   * receiptItems deleteMany
   */
  export type receiptItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which receiptItems to delete
     */
    where?: receiptItemsWhereInput
    /**
     * Limit how many receiptItems to delete.
     */
    limit?: number
  }

  /**
   * receiptItems without action
   */
  export type receiptItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptItems
     */
    select?: receiptItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptItems
     */
    omit?: receiptItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptItemsInclude<ExtArgs> | null
  }


  /**
   * Model receiptCart
   */

  export type AggregateReceiptCart = {
    _count: ReceiptCartCountAggregateOutputType | null
    _avg: ReceiptCartAvgAggregateOutputType | null
    _sum: ReceiptCartSumAggregateOutputType | null
    _min: ReceiptCartMinAggregateOutputType | null
    _max: ReceiptCartMaxAggregateOutputType | null
  }

  export type ReceiptCartAvgAggregateOutputType = {
    id: number | null
  }

  export type ReceiptCartSumAggregateOutputType = {
    id: number | null
  }

  export type ReceiptCartMinAggregateOutputType = {
    id: number | null
    date: string | null
    providorName: string | null
  }

  export type ReceiptCartMaxAggregateOutputType = {
    id: number | null
    date: string | null
    providorName: string | null
  }

  export type ReceiptCartCountAggregateOutputType = {
    id: number
    date: number
    providorName: number
    _all: number
  }


  export type ReceiptCartAvgAggregateInputType = {
    id?: true
  }

  export type ReceiptCartSumAggregateInputType = {
    id?: true
  }

  export type ReceiptCartMinAggregateInputType = {
    id?: true
    date?: true
    providorName?: true
  }

  export type ReceiptCartMaxAggregateInputType = {
    id?: true
    date?: true
    providorName?: true
  }

  export type ReceiptCartCountAggregateInputType = {
    id?: true
    date?: true
    providorName?: true
    _all?: true
  }

  export type ReceiptCartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which receiptCart to aggregate.
     */
    where?: receiptCartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receiptCarts to fetch.
     */
    orderBy?: receiptCartOrderByWithRelationInput | receiptCartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: receiptCartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receiptCarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receiptCarts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned receiptCarts
    **/
    _count?: true | ReceiptCartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReceiptCartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReceiptCartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceiptCartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceiptCartMaxAggregateInputType
  }

  export type GetReceiptCartAggregateType<T extends ReceiptCartAggregateArgs> = {
        [P in keyof T & keyof AggregateReceiptCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceiptCart[P]>
      : GetScalarType<T[P], AggregateReceiptCart[P]>
  }




  export type receiptCartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: receiptCartWhereInput
    orderBy?: receiptCartOrderByWithAggregationInput | receiptCartOrderByWithAggregationInput[]
    by: ReceiptCartScalarFieldEnum[] | ReceiptCartScalarFieldEnum
    having?: receiptCartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceiptCartCountAggregateInputType | true
    _avg?: ReceiptCartAvgAggregateInputType
    _sum?: ReceiptCartSumAggregateInputType
    _min?: ReceiptCartMinAggregateInputType
    _max?: ReceiptCartMaxAggregateInputType
  }

  export type ReceiptCartGroupByOutputType = {
    id: number
    date: string | null
    providorName: string | null
    _count: ReceiptCartCountAggregateOutputType | null
    _avg: ReceiptCartAvgAggregateOutputType | null
    _sum: ReceiptCartSumAggregateOutputType | null
    _min: ReceiptCartMinAggregateOutputType | null
    _max: ReceiptCartMaxAggregateOutputType | null
  }

  type GetReceiptCartGroupByPayload<T extends receiptCartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceiptCartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceiptCartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceiptCartGroupByOutputType[P]>
            : GetScalarType<T[P], ReceiptCartGroupByOutputType[P]>
        }
      >
    >


  export type receiptCartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    providorName?: boolean
    items?: boolean | receiptCart$itemsArgs<ExtArgs>
    _count?: boolean | ReceiptCartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receiptCart"]>



  export type receiptCartSelectScalar = {
    id?: boolean
    date?: boolean
    providorName?: boolean
  }

  export type receiptCartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "providorName", ExtArgs["result"]["receiptCart"]>
  export type receiptCartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | receiptCart$itemsArgs<ExtArgs>
    _count?: boolean | ReceiptCartCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $receiptCartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "receiptCart"
    objects: {
      items: Prisma.$receiptCartItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: string | null
      providorName: string | null
    }, ExtArgs["result"]["receiptCart"]>
    composites: {}
  }

  type receiptCartGetPayload<S extends boolean | null | undefined | receiptCartDefaultArgs> = $Result.GetResult<Prisma.$receiptCartPayload, S>

  type receiptCartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<receiptCartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReceiptCartCountAggregateInputType | true
    }

  export interface receiptCartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['receiptCart'], meta: { name: 'receiptCart' } }
    /**
     * Find zero or one ReceiptCart that matches the filter.
     * @param {receiptCartFindUniqueArgs} args - Arguments to find a ReceiptCart
     * @example
     * // Get one ReceiptCart
     * const receiptCart = await prisma.receiptCart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends receiptCartFindUniqueArgs>(args: SelectSubset<T, receiptCartFindUniqueArgs<ExtArgs>>): Prisma__receiptCartClient<$Result.GetResult<Prisma.$receiptCartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReceiptCart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {receiptCartFindUniqueOrThrowArgs} args - Arguments to find a ReceiptCart
     * @example
     * // Get one ReceiptCart
     * const receiptCart = await prisma.receiptCart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends receiptCartFindUniqueOrThrowArgs>(args: SelectSubset<T, receiptCartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__receiptCartClient<$Result.GetResult<Prisma.$receiptCartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceiptCart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptCartFindFirstArgs} args - Arguments to find a ReceiptCart
     * @example
     * // Get one ReceiptCart
     * const receiptCart = await prisma.receiptCart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends receiptCartFindFirstArgs>(args?: SelectSubset<T, receiptCartFindFirstArgs<ExtArgs>>): Prisma__receiptCartClient<$Result.GetResult<Prisma.$receiptCartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceiptCart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptCartFindFirstOrThrowArgs} args - Arguments to find a ReceiptCart
     * @example
     * // Get one ReceiptCart
     * const receiptCart = await prisma.receiptCart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends receiptCartFindFirstOrThrowArgs>(args?: SelectSubset<T, receiptCartFindFirstOrThrowArgs<ExtArgs>>): Prisma__receiptCartClient<$Result.GetResult<Prisma.$receiptCartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReceiptCarts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptCartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReceiptCarts
     * const receiptCarts = await prisma.receiptCart.findMany()
     * 
     * // Get first 10 ReceiptCarts
     * const receiptCarts = await prisma.receiptCart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const receiptCartWithIdOnly = await prisma.receiptCart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends receiptCartFindManyArgs>(args?: SelectSubset<T, receiptCartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receiptCartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReceiptCart.
     * @param {receiptCartCreateArgs} args - Arguments to create a ReceiptCart.
     * @example
     * // Create one ReceiptCart
     * const ReceiptCart = await prisma.receiptCart.create({
     *   data: {
     *     // ... data to create a ReceiptCart
     *   }
     * })
     * 
     */
    create<T extends receiptCartCreateArgs>(args: SelectSubset<T, receiptCartCreateArgs<ExtArgs>>): Prisma__receiptCartClient<$Result.GetResult<Prisma.$receiptCartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReceiptCarts.
     * @param {receiptCartCreateManyArgs} args - Arguments to create many ReceiptCarts.
     * @example
     * // Create many ReceiptCarts
     * const receiptCart = await prisma.receiptCart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends receiptCartCreateManyArgs>(args?: SelectSubset<T, receiptCartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReceiptCart.
     * @param {receiptCartDeleteArgs} args - Arguments to delete one ReceiptCart.
     * @example
     * // Delete one ReceiptCart
     * const ReceiptCart = await prisma.receiptCart.delete({
     *   where: {
     *     // ... filter to delete one ReceiptCart
     *   }
     * })
     * 
     */
    delete<T extends receiptCartDeleteArgs>(args: SelectSubset<T, receiptCartDeleteArgs<ExtArgs>>): Prisma__receiptCartClient<$Result.GetResult<Prisma.$receiptCartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReceiptCart.
     * @param {receiptCartUpdateArgs} args - Arguments to update one ReceiptCart.
     * @example
     * // Update one ReceiptCart
     * const receiptCart = await prisma.receiptCart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends receiptCartUpdateArgs>(args: SelectSubset<T, receiptCartUpdateArgs<ExtArgs>>): Prisma__receiptCartClient<$Result.GetResult<Prisma.$receiptCartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReceiptCarts.
     * @param {receiptCartDeleteManyArgs} args - Arguments to filter ReceiptCarts to delete.
     * @example
     * // Delete a few ReceiptCarts
     * const { count } = await prisma.receiptCart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends receiptCartDeleteManyArgs>(args?: SelectSubset<T, receiptCartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReceiptCarts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptCartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReceiptCarts
     * const receiptCart = await prisma.receiptCart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends receiptCartUpdateManyArgs>(args: SelectSubset<T, receiptCartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReceiptCart.
     * @param {receiptCartUpsertArgs} args - Arguments to update or create a ReceiptCart.
     * @example
     * // Update or create a ReceiptCart
     * const receiptCart = await prisma.receiptCart.upsert({
     *   create: {
     *     // ... data to create a ReceiptCart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReceiptCart we want to update
     *   }
     * })
     */
    upsert<T extends receiptCartUpsertArgs>(args: SelectSubset<T, receiptCartUpsertArgs<ExtArgs>>): Prisma__receiptCartClient<$Result.GetResult<Prisma.$receiptCartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReceiptCarts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptCartCountArgs} args - Arguments to filter ReceiptCarts to count.
     * @example
     * // Count the number of ReceiptCarts
     * const count = await prisma.receiptCart.count({
     *   where: {
     *     // ... the filter for the ReceiptCarts we want to count
     *   }
     * })
    **/
    count<T extends receiptCartCountArgs>(
      args?: Subset<T, receiptCartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceiptCartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReceiptCart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptCartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReceiptCartAggregateArgs>(args: Subset<T, ReceiptCartAggregateArgs>): Prisma.PrismaPromise<GetReceiptCartAggregateType<T>>

    /**
     * Group by ReceiptCart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptCartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends receiptCartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: receiptCartGroupByArgs['orderBy'] }
        : { orderBy?: receiptCartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, receiptCartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceiptCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the receiptCart model
   */
  readonly fields: receiptCartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for receiptCart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__receiptCartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends receiptCart$itemsArgs<ExtArgs> = {}>(args?: Subset<T, receiptCart$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receiptCartItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the receiptCart model
   */
  interface receiptCartFieldRefs {
    readonly id: FieldRef<"receiptCart", 'Int'>
    readonly date: FieldRef<"receiptCart", 'String'>
    readonly providorName: FieldRef<"receiptCart", 'String'>
  }
    

  // Custom InputTypes
  /**
   * receiptCart findUnique
   */
  export type receiptCartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptCart
     */
    select?: receiptCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptCart
     */
    omit?: receiptCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptCartInclude<ExtArgs> | null
    /**
     * Filter, which receiptCart to fetch.
     */
    where: receiptCartWhereUniqueInput
  }

  /**
   * receiptCart findUniqueOrThrow
   */
  export type receiptCartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptCart
     */
    select?: receiptCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptCart
     */
    omit?: receiptCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptCartInclude<ExtArgs> | null
    /**
     * Filter, which receiptCart to fetch.
     */
    where: receiptCartWhereUniqueInput
  }

  /**
   * receiptCart findFirst
   */
  export type receiptCartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptCart
     */
    select?: receiptCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptCart
     */
    omit?: receiptCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptCartInclude<ExtArgs> | null
    /**
     * Filter, which receiptCart to fetch.
     */
    where?: receiptCartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receiptCarts to fetch.
     */
    orderBy?: receiptCartOrderByWithRelationInput | receiptCartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for receiptCarts.
     */
    cursor?: receiptCartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receiptCarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receiptCarts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of receiptCarts.
     */
    distinct?: ReceiptCartScalarFieldEnum | ReceiptCartScalarFieldEnum[]
  }

  /**
   * receiptCart findFirstOrThrow
   */
  export type receiptCartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptCart
     */
    select?: receiptCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptCart
     */
    omit?: receiptCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptCartInclude<ExtArgs> | null
    /**
     * Filter, which receiptCart to fetch.
     */
    where?: receiptCartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receiptCarts to fetch.
     */
    orderBy?: receiptCartOrderByWithRelationInput | receiptCartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for receiptCarts.
     */
    cursor?: receiptCartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receiptCarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receiptCarts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of receiptCarts.
     */
    distinct?: ReceiptCartScalarFieldEnum | ReceiptCartScalarFieldEnum[]
  }

  /**
   * receiptCart findMany
   */
  export type receiptCartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptCart
     */
    select?: receiptCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptCart
     */
    omit?: receiptCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptCartInclude<ExtArgs> | null
    /**
     * Filter, which receiptCarts to fetch.
     */
    where?: receiptCartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receiptCarts to fetch.
     */
    orderBy?: receiptCartOrderByWithRelationInput | receiptCartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing receiptCarts.
     */
    cursor?: receiptCartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receiptCarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receiptCarts.
     */
    skip?: number
    distinct?: ReceiptCartScalarFieldEnum | ReceiptCartScalarFieldEnum[]
  }

  /**
   * receiptCart create
   */
  export type receiptCartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptCart
     */
    select?: receiptCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptCart
     */
    omit?: receiptCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptCartInclude<ExtArgs> | null
    /**
     * The data needed to create a receiptCart.
     */
    data?: XOR<receiptCartCreateInput, receiptCartUncheckedCreateInput>
  }

  /**
   * receiptCart createMany
   */
  export type receiptCartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many receiptCarts.
     */
    data: receiptCartCreateManyInput | receiptCartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * receiptCart update
   */
  export type receiptCartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptCart
     */
    select?: receiptCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptCart
     */
    omit?: receiptCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptCartInclude<ExtArgs> | null
    /**
     * The data needed to update a receiptCart.
     */
    data: XOR<receiptCartUpdateInput, receiptCartUncheckedUpdateInput>
    /**
     * Choose, which receiptCart to update.
     */
    where: receiptCartWhereUniqueInput
  }

  /**
   * receiptCart updateMany
   */
  export type receiptCartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update receiptCarts.
     */
    data: XOR<receiptCartUpdateManyMutationInput, receiptCartUncheckedUpdateManyInput>
    /**
     * Filter which receiptCarts to update
     */
    where?: receiptCartWhereInput
    /**
     * Limit how many receiptCarts to update.
     */
    limit?: number
  }

  /**
   * receiptCart upsert
   */
  export type receiptCartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptCart
     */
    select?: receiptCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptCart
     */
    omit?: receiptCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptCartInclude<ExtArgs> | null
    /**
     * The filter to search for the receiptCart to update in case it exists.
     */
    where: receiptCartWhereUniqueInput
    /**
     * In case the receiptCart found by the `where` argument doesn't exist, create a new receiptCart with this data.
     */
    create: XOR<receiptCartCreateInput, receiptCartUncheckedCreateInput>
    /**
     * In case the receiptCart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<receiptCartUpdateInput, receiptCartUncheckedUpdateInput>
  }

  /**
   * receiptCart delete
   */
  export type receiptCartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptCart
     */
    select?: receiptCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptCart
     */
    omit?: receiptCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptCartInclude<ExtArgs> | null
    /**
     * Filter which receiptCart to delete.
     */
    where: receiptCartWhereUniqueInput
  }

  /**
   * receiptCart deleteMany
   */
  export type receiptCartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which receiptCarts to delete
     */
    where?: receiptCartWhereInput
    /**
     * Limit how many receiptCarts to delete.
     */
    limit?: number
  }

  /**
   * receiptCart.items
   */
  export type receiptCart$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptCartItems
     */
    select?: receiptCartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptCartItems
     */
    omit?: receiptCartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptCartItemsInclude<ExtArgs> | null
    where?: receiptCartItemsWhereInput
    orderBy?: receiptCartItemsOrderByWithRelationInput | receiptCartItemsOrderByWithRelationInput[]
    cursor?: receiptCartItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceiptCartItemsScalarFieldEnum | ReceiptCartItemsScalarFieldEnum[]
  }

  /**
   * receiptCart without action
   */
  export type receiptCartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptCart
     */
    select?: receiptCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptCart
     */
    omit?: receiptCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptCartInclude<ExtArgs> | null
  }


  /**
   * Model receiptCartItems
   */

  export type AggregateReceiptCartItems = {
    _count: ReceiptCartItemsCountAggregateOutputType | null
    _avg: ReceiptCartItemsAvgAggregateOutputType | null
    _sum: ReceiptCartItemsSumAggregateOutputType | null
    _min: ReceiptCartItemsMinAggregateOutputType | null
    _max: ReceiptCartItemsMaxAggregateOutputType | null
  }

  export type ReceiptCartItemsAvgAggregateOutputType = {
    quantity: number | null
    cartId: number | null
  }

  export type ReceiptCartItemsSumAggregateOutputType = {
    quantity: number | null
    cartId: number | null
  }

  export type ReceiptCartItemsMinAggregateOutputType = {
    id: string | null
    genericName: string | null
    unit: string | null
    unitInfo: string | null
    category: string | null
    quantity: number | null
    expireDate: string | null
    cartId: number | null
  }

  export type ReceiptCartItemsMaxAggregateOutputType = {
    id: string | null
    genericName: string | null
    unit: string | null
    unitInfo: string | null
    category: string | null
    quantity: number | null
    expireDate: string | null
    cartId: number | null
  }

  export type ReceiptCartItemsCountAggregateOutputType = {
    id: number
    genericName: number
    unit: number
    unitInfo: number
    category: number
    quantity: number
    expireDate: number
    cartId: number
    _all: number
  }


  export type ReceiptCartItemsAvgAggregateInputType = {
    quantity?: true
    cartId?: true
  }

  export type ReceiptCartItemsSumAggregateInputType = {
    quantity?: true
    cartId?: true
  }

  export type ReceiptCartItemsMinAggregateInputType = {
    id?: true
    genericName?: true
    unit?: true
    unitInfo?: true
    category?: true
    quantity?: true
    expireDate?: true
    cartId?: true
  }

  export type ReceiptCartItemsMaxAggregateInputType = {
    id?: true
    genericName?: true
    unit?: true
    unitInfo?: true
    category?: true
    quantity?: true
    expireDate?: true
    cartId?: true
  }

  export type ReceiptCartItemsCountAggregateInputType = {
    id?: true
    genericName?: true
    unit?: true
    unitInfo?: true
    category?: true
    quantity?: true
    expireDate?: true
    cartId?: true
    _all?: true
  }

  export type ReceiptCartItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which receiptCartItems to aggregate.
     */
    where?: receiptCartItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receiptCartItems to fetch.
     */
    orderBy?: receiptCartItemsOrderByWithRelationInput | receiptCartItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: receiptCartItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receiptCartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receiptCartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned receiptCartItems
    **/
    _count?: true | ReceiptCartItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReceiptCartItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReceiptCartItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceiptCartItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceiptCartItemsMaxAggregateInputType
  }

  export type GetReceiptCartItemsAggregateType<T extends ReceiptCartItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateReceiptCartItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceiptCartItems[P]>
      : GetScalarType<T[P], AggregateReceiptCartItems[P]>
  }




  export type receiptCartItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: receiptCartItemsWhereInput
    orderBy?: receiptCartItemsOrderByWithAggregationInput | receiptCartItemsOrderByWithAggregationInput[]
    by: ReceiptCartItemsScalarFieldEnum[] | ReceiptCartItemsScalarFieldEnum
    having?: receiptCartItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceiptCartItemsCountAggregateInputType | true
    _avg?: ReceiptCartItemsAvgAggregateInputType
    _sum?: ReceiptCartItemsSumAggregateInputType
    _min?: ReceiptCartItemsMinAggregateInputType
    _max?: ReceiptCartItemsMaxAggregateInputType
  }

  export type ReceiptCartItemsGroupByOutputType = {
    id: string
    genericName: string
    unit: string
    unitInfo: string
    category: string | null
    quantity: number
    expireDate: string | null
    cartId: number
    _count: ReceiptCartItemsCountAggregateOutputType | null
    _avg: ReceiptCartItemsAvgAggregateOutputType | null
    _sum: ReceiptCartItemsSumAggregateOutputType | null
    _min: ReceiptCartItemsMinAggregateOutputType | null
    _max: ReceiptCartItemsMaxAggregateOutputType | null
  }

  type GetReceiptCartItemsGroupByPayload<T extends receiptCartItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceiptCartItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceiptCartItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceiptCartItemsGroupByOutputType[P]>
            : GetScalarType<T[P], ReceiptCartItemsGroupByOutputType[P]>
        }
      >
    >


  export type receiptCartItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    genericName?: boolean
    unit?: boolean
    unitInfo?: boolean
    category?: boolean
    quantity?: boolean
    expireDate?: boolean
    cartId?: boolean
    cart?: boolean | receiptCartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receiptCartItems"]>



  export type receiptCartItemsSelectScalar = {
    id?: boolean
    genericName?: boolean
    unit?: boolean
    unitInfo?: boolean
    category?: boolean
    quantity?: boolean
    expireDate?: boolean
    cartId?: boolean
  }

  export type receiptCartItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "genericName" | "unit" | "unitInfo" | "category" | "quantity" | "expireDate" | "cartId", ExtArgs["result"]["receiptCartItems"]>
  export type receiptCartItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | receiptCartDefaultArgs<ExtArgs>
  }

  export type $receiptCartItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "receiptCartItems"
    objects: {
      cart: Prisma.$receiptCartPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      genericName: string
      unit: string
      unitInfo: string
      category: string | null
      quantity: number
      expireDate: string | null
      cartId: number
    }, ExtArgs["result"]["receiptCartItems"]>
    composites: {}
  }

  type receiptCartItemsGetPayload<S extends boolean | null | undefined | receiptCartItemsDefaultArgs> = $Result.GetResult<Prisma.$receiptCartItemsPayload, S>

  type receiptCartItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<receiptCartItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReceiptCartItemsCountAggregateInputType | true
    }

  export interface receiptCartItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['receiptCartItems'], meta: { name: 'receiptCartItems' } }
    /**
     * Find zero or one ReceiptCartItems that matches the filter.
     * @param {receiptCartItemsFindUniqueArgs} args - Arguments to find a ReceiptCartItems
     * @example
     * // Get one ReceiptCartItems
     * const receiptCartItems = await prisma.receiptCartItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends receiptCartItemsFindUniqueArgs>(args: SelectSubset<T, receiptCartItemsFindUniqueArgs<ExtArgs>>): Prisma__receiptCartItemsClient<$Result.GetResult<Prisma.$receiptCartItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReceiptCartItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {receiptCartItemsFindUniqueOrThrowArgs} args - Arguments to find a ReceiptCartItems
     * @example
     * // Get one ReceiptCartItems
     * const receiptCartItems = await prisma.receiptCartItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends receiptCartItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, receiptCartItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__receiptCartItemsClient<$Result.GetResult<Prisma.$receiptCartItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceiptCartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptCartItemsFindFirstArgs} args - Arguments to find a ReceiptCartItems
     * @example
     * // Get one ReceiptCartItems
     * const receiptCartItems = await prisma.receiptCartItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends receiptCartItemsFindFirstArgs>(args?: SelectSubset<T, receiptCartItemsFindFirstArgs<ExtArgs>>): Prisma__receiptCartItemsClient<$Result.GetResult<Prisma.$receiptCartItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceiptCartItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptCartItemsFindFirstOrThrowArgs} args - Arguments to find a ReceiptCartItems
     * @example
     * // Get one ReceiptCartItems
     * const receiptCartItems = await prisma.receiptCartItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends receiptCartItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, receiptCartItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__receiptCartItemsClient<$Result.GetResult<Prisma.$receiptCartItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReceiptCartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptCartItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReceiptCartItems
     * const receiptCartItems = await prisma.receiptCartItems.findMany()
     * 
     * // Get first 10 ReceiptCartItems
     * const receiptCartItems = await prisma.receiptCartItems.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const receiptCartItemsWithIdOnly = await prisma.receiptCartItems.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends receiptCartItemsFindManyArgs>(args?: SelectSubset<T, receiptCartItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receiptCartItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReceiptCartItems.
     * @param {receiptCartItemsCreateArgs} args - Arguments to create a ReceiptCartItems.
     * @example
     * // Create one ReceiptCartItems
     * const ReceiptCartItems = await prisma.receiptCartItems.create({
     *   data: {
     *     // ... data to create a ReceiptCartItems
     *   }
     * })
     * 
     */
    create<T extends receiptCartItemsCreateArgs>(args: SelectSubset<T, receiptCartItemsCreateArgs<ExtArgs>>): Prisma__receiptCartItemsClient<$Result.GetResult<Prisma.$receiptCartItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReceiptCartItems.
     * @param {receiptCartItemsCreateManyArgs} args - Arguments to create many ReceiptCartItems.
     * @example
     * // Create many ReceiptCartItems
     * const receiptCartItems = await prisma.receiptCartItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends receiptCartItemsCreateManyArgs>(args?: SelectSubset<T, receiptCartItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReceiptCartItems.
     * @param {receiptCartItemsDeleteArgs} args - Arguments to delete one ReceiptCartItems.
     * @example
     * // Delete one ReceiptCartItems
     * const ReceiptCartItems = await prisma.receiptCartItems.delete({
     *   where: {
     *     // ... filter to delete one ReceiptCartItems
     *   }
     * })
     * 
     */
    delete<T extends receiptCartItemsDeleteArgs>(args: SelectSubset<T, receiptCartItemsDeleteArgs<ExtArgs>>): Prisma__receiptCartItemsClient<$Result.GetResult<Prisma.$receiptCartItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReceiptCartItems.
     * @param {receiptCartItemsUpdateArgs} args - Arguments to update one ReceiptCartItems.
     * @example
     * // Update one ReceiptCartItems
     * const receiptCartItems = await prisma.receiptCartItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends receiptCartItemsUpdateArgs>(args: SelectSubset<T, receiptCartItemsUpdateArgs<ExtArgs>>): Prisma__receiptCartItemsClient<$Result.GetResult<Prisma.$receiptCartItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReceiptCartItems.
     * @param {receiptCartItemsDeleteManyArgs} args - Arguments to filter ReceiptCartItems to delete.
     * @example
     * // Delete a few ReceiptCartItems
     * const { count } = await prisma.receiptCartItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends receiptCartItemsDeleteManyArgs>(args?: SelectSubset<T, receiptCartItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReceiptCartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptCartItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReceiptCartItems
     * const receiptCartItems = await prisma.receiptCartItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends receiptCartItemsUpdateManyArgs>(args: SelectSubset<T, receiptCartItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReceiptCartItems.
     * @param {receiptCartItemsUpsertArgs} args - Arguments to update or create a ReceiptCartItems.
     * @example
     * // Update or create a ReceiptCartItems
     * const receiptCartItems = await prisma.receiptCartItems.upsert({
     *   create: {
     *     // ... data to create a ReceiptCartItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReceiptCartItems we want to update
     *   }
     * })
     */
    upsert<T extends receiptCartItemsUpsertArgs>(args: SelectSubset<T, receiptCartItemsUpsertArgs<ExtArgs>>): Prisma__receiptCartItemsClient<$Result.GetResult<Prisma.$receiptCartItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReceiptCartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptCartItemsCountArgs} args - Arguments to filter ReceiptCartItems to count.
     * @example
     * // Count the number of ReceiptCartItems
     * const count = await prisma.receiptCartItems.count({
     *   where: {
     *     // ... the filter for the ReceiptCartItems we want to count
     *   }
     * })
    **/
    count<T extends receiptCartItemsCountArgs>(
      args?: Subset<T, receiptCartItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceiptCartItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReceiptCartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptCartItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReceiptCartItemsAggregateArgs>(args: Subset<T, ReceiptCartItemsAggregateArgs>): Prisma.PrismaPromise<GetReceiptCartItemsAggregateType<T>>

    /**
     * Group by ReceiptCartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptCartItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends receiptCartItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: receiptCartItemsGroupByArgs['orderBy'] }
        : { orderBy?: receiptCartItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, receiptCartItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceiptCartItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the receiptCartItems model
   */
  readonly fields: receiptCartItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for receiptCartItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__receiptCartItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart<T extends receiptCartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, receiptCartDefaultArgs<ExtArgs>>): Prisma__receiptCartClient<$Result.GetResult<Prisma.$receiptCartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the receiptCartItems model
   */
  interface receiptCartItemsFieldRefs {
    readonly id: FieldRef<"receiptCartItems", 'String'>
    readonly genericName: FieldRef<"receiptCartItems", 'String'>
    readonly unit: FieldRef<"receiptCartItems", 'String'>
    readonly unitInfo: FieldRef<"receiptCartItems", 'String'>
    readonly category: FieldRef<"receiptCartItems", 'String'>
    readonly quantity: FieldRef<"receiptCartItems", 'Int'>
    readonly expireDate: FieldRef<"receiptCartItems", 'String'>
    readonly cartId: FieldRef<"receiptCartItems", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * receiptCartItems findUnique
   */
  export type receiptCartItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptCartItems
     */
    select?: receiptCartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptCartItems
     */
    omit?: receiptCartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptCartItemsInclude<ExtArgs> | null
    /**
     * Filter, which receiptCartItems to fetch.
     */
    where: receiptCartItemsWhereUniqueInput
  }

  /**
   * receiptCartItems findUniqueOrThrow
   */
  export type receiptCartItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptCartItems
     */
    select?: receiptCartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptCartItems
     */
    omit?: receiptCartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptCartItemsInclude<ExtArgs> | null
    /**
     * Filter, which receiptCartItems to fetch.
     */
    where: receiptCartItemsWhereUniqueInput
  }

  /**
   * receiptCartItems findFirst
   */
  export type receiptCartItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptCartItems
     */
    select?: receiptCartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptCartItems
     */
    omit?: receiptCartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptCartItemsInclude<ExtArgs> | null
    /**
     * Filter, which receiptCartItems to fetch.
     */
    where?: receiptCartItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receiptCartItems to fetch.
     */
    orderBy?: receiptCartItemsOrderByWithRelationInput | receiptCartItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for receiptCartItems.
     */
    cursor?: receiptCartItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receiptCartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receiptCartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of receiptCartItems.
     */
    distinct?: ReceiptCartItemsScalarFieldEnum | ReceiptCartItemsScalarFieldEnum[]
  }

  /**
   * receiptCartItems findFirstOrThrow
   */
  export type receiptCartItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptCartItems
     */
    select?: receiptCartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptCartItems
     */
    omit?: receiptCartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptCartItemsInclude<ExtArgs> | null
    /**
     * Filter, which receiptCartItems to fetch.
     */
    where?: receiptCartItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receiptCartItems to fetch.
     */
    orderBy?: receiptCartItemsOrderByWithRelationInput | receiptCartItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for receiptCartItems.
     */
    cursor?: receiptCartItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receiptCartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receiptCartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of receiptCartItems.
     */
    distinct?: ReceiptCartItemsScalarFieldEnum | ReceiptCartItemsScalarFieldEnum[]
  }

  /**
   * receiptCartItems findMany
   */
  export type receiptCartItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptCartItems
     */
    select?: receiptCartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptCartItems
     */
    omit?: receiptCartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptCartItemsInclude<ExtArgs> | null
    /**
     * Filter, which receiptCartItems to fetch.
     */
    where?: receiptCartItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receiptCartItems to fetch.
     */
    orderBy?: receiptCartItemsOrderByWithRelationInput | receiptCartItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing receiptCartItems.
     */
    cursor?: receiptCartItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receiptCartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receiptCartItems.
     */
    skip?: number
    distinct?: ReceiptCartItemsScalarFieldEnum | ReceiptCartItemsScalarFieldEnum[]
  }

  /**
   * receiptCartItems create
   */
  export type receiptCartItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptCartItems
     */
    select?: receiptCartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptCartItems
     */
    omit?: receiptCartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptCartItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a receiptCartItems.
     */
    data: XOR<receiptCartItemsCreateInput, receiptCartItemsUncheckedCreateInput>
  }

  /**
   * receiptCartItems createMany
   */
  export type receiptCartItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many receiptCartItems.
     */
    data: receiptCartItemsCreateManyInput | receiptCartItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * receiptCartItems update
   */
  export type receiptCartItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptCartItems
     */
    select?: receiptCartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptCartItems
     */
    omit?: receiptCartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptCartItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a receiptCartItems.
     */
    data: XOR<receiptCartItemsUpdateInput, receiptCartItemsUncheckedUpdateInput>
    /**
     * Choose, which receiptCartItems to update.
     */
    where: receiptCartItemsWhereUniqueInput
  }

  /**
   * receiptCartItems updateMany
   */
  export type receiptCartItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update receiptCartItems.
     */
    data: XOR<receiptCartItemsUpdateManyMutationInput, receiptCartItemsUncheckedUpdateManyInput>
    /**
     * Filter which receiptCartItems to update
     */
    where?: receiptCartItemsWhereInput
    /**
     * Limit how many receiptCartItems to update.
     */
    limit?: number
  }

  /**
   * receiptCartItems upsert
   */
  export type receiptCartItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptCartItems
     */
    select?: receiptCartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptCartItems
     */
    omit?: receiptCartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptCartItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the receiptCartItems to update in case it exists.
     */
    where: receiptCartItemsWhereUniqueInput
    /**
     * In case the receiptCartItems found by the `where` argument doesn't exist, create a new receiptCartItems with this data.
     */
    create: XOR<receiptCartItemsCreateInput, receiptCartItemsUncheckedCreateInput>
    /**
     * In case the receiptCartItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<receiptCartItemsUpdateInput, receiptCartItemsUncheckedUpdateInput>
  }

  /**
   * receiptCartItems delete
   */
  export type receiptCartItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptCartItems
     */
    select?: receiptCartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptCartItems
     */
    omit?: receiptCartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptCartItemsInclude<ExtArgs> | null
    /**
     * Filter which receiptCartItems to delete.
     */
    where: receiptCartItemsWhereUniqueInput
  }

  /**
   * receiptCartItems deleteMany
   */
  export type receiptCartItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which receiptCartItems to delete
     */
    where?: receiptCartItemsWhereInput
    /**
     * Limit how many receiptCartItems to delete.
     */
    limit?: number
  }

  /**
   * receiptCartItems without action
   */
  export type receiptCartItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptCartItems
     */
    select?: receiptCartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptCartItems
     */
    omit?: receiptCartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptCartItemsInclude<ExtArgs> | null
  }


  /**
   * Model withdrawal
   */

  export type AggregateWithdrawal = {
    _count: WithdrawalCountAggregateOutputType | null
    _avg: WithdrawalAvgAggregateOutputType | null
    _sum: WithdrawalSumAggregateOutputType | null
    _min: WithdrawalMinAggregateOutputType | null
    _max: WithdrawalMaxAggregateOutputType | null
  }

  export type WithdrawalAvgAggregateOutputType = {
    id: number | null
    stockId: number | null
  }

  export type WithdrawalSumAggregateOutputType = {
    id: number | null
    stockId: number | null
  }

  export type WithdrawalMinAggregateOutputType = {
    id: number | null
    departmentName: string | null
    date: string | null
    departmentId: string | null
    stockId: number | null
  }

  export type WithdrawalMaxAggregateOutputType = {
    id: number | null
    departmentName: string | null
    date: string | null
    departmentId: string | null
    stockId: number | null
  }

  export type WithdrawalCountAggregateOutputType = {
    id: number
    departmentName: number
    date: number
    departmentId: number
    stockId: number
    _all: number
  }


  export type WithdrawalAvgAggregateInputType = {
    id?: true
    stockId?: true
  }

  export type WithdrawalSumAggregateInputType = {
    id?: true
    stockId?: true
  }

  export type WithdrawalMinAggregateInputType = {
    id?: true
    departmentName?: true
    date?: true
    departmentId?: true
    stockId?: true
  }

  export type WithdrawalMaxAggregateInputType = {
    id?: true
    departmentName?: true
    date?: true
    departmentId?: true
    stockId?: true
  }

  export type WithdrawalCountAggregateInputType = {
    id?: true
    departmentName?: true
    date?: true
    departmentId?: true
    stockId?: true
    _all?: true
  }

  export type WithdrawalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which withdrawal to aggregate.
     */
    where?: withdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of withdrawals to fetch.
     */
    orderBy?: withdrawalOrderByWithRelationInput | withdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: withdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned withdrawals
    **/
    _count?: true | WithdrawalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WithdrawalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WithdrawalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WithdrawalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WithdrawalMaxAggregateInputType
  }

  export type GetWithdrawalAggregateType<T extends WithdrawalAggregateArgs> = {
        [P in keyof T & keyof AggregateWithdrawal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWithdrawal[P]>
      : GetScalarType<T[P], AggregateWithdrawal[P]>
  }




  export type withdrawalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: withdrawalWhereInput
    orderBy?: withdrawalOrderByWithAggregationInput | withdrawalOrderByWithAggregationInput[]
    by: WithdrawalScalarFieldEnum[] | WithdrawalScalarFieldEnum
    having?: withdrawalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WithdrawalCountAggregateInputType | true
    _avg?: WithdrawalAvgAggregateInputType
    _sum?: WithdrawalSumAggregateInputType
    _min?: WithdrawalMinAggregateInputType
    _max?: WithdrawalMaxAggregateInputType
  }

  export type WithdrawalGroupByOutputType = {
    id: number
    departmentName: string
    date: string
    departmentId: string
    stockId: number
    _count: WithdrawalCountAggregateOutputType | null
    _avg: WithdrawalAvgAggregateOutputType | null
    _sum: WithdrawalSumAggregateOutputType | null
    _min: WithdrawalMinAggregateOutputType | null
    _max: WithdrawalMaxAggregateOutputType | null
  }

  type GetWithdrawalGroupByPayload<T extends withdrawalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WithdrawalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WithdrawalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WithdrawalGroupByOutputType[P]>
            : GetScalarType<T[P], WithdrawalGroupByOutputType[P]>
        }
      >
    >


  export type withdrawalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    departmentName?: boolean
    date?: boolean
    departmentId?: boolean
    stockId?: boolean
    department?: boolean | departmentDefaultArgs<ExtArgs>
    items?: boolean | withdrawal$itemsArgs<ExtArgs>
    stock?: boolean | userDefaultArgs<ExtArgs>
    stockItmes?: boolean | withdrawal$stockItmesArgs<ExtArgs>
    _count?: boolean | WithdrawalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawal"]>



  export type withdrawalSelectScalar = {
    id?: boolean
    departmentName?: boolean
    date?: boolean
    departmentId?: boolean
    stockId?: boolean
  }

  export type withdrawalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "departmentName" | "date" | "departmentId" | "stockId", ExtArgs["result"]["withdrawal"]>
  export type withdrawalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | departmentDefaultArgs<ExtArgs>
    items?: boolean | withdrawal$itemsArgs<ExtArgs>
    stock?: boolean | userDefaultArgs<ExtArgs>
    stockItmes?: boolean | withdrawal$stockItmesArgs<ExtArgs>
    _count?: boolean | WithdrawalCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $withdrawalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "withdrawal"
    objects: {
      department: Prisma.$departmentPayload<ExtArgs>
      items: Prisma.$withdrawalItemsPayload<ExtArgs>[]
      stock: Prisma.$userPayload<ExtArgs>
      stockItmes: Prisma.$itemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      departmentName: string
      date: string
      departmentId: string
      stockId: number
    }, ExtArgs["result"]["withdrawal"]>
    composites: {}
  }

  type withdrawalGetPayload<S extends boolean | null | undefined | withdrawalDefaultArgs> = $Result.GetResult<Prisma.$withdrawalPayload, S>

  type withdrawalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<withdrawalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WithdrawalCountAggregateInputType | true
    }

  export interface withdrawalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['withdrawal'], meta: { name: 'withdrawal' } }
    /**
     * Find zero or one Withdrawal that matches the filter.
     * @param {withdrawalFindUniqueArgs} args - Arguments to find a Withdrawal
     * @example
     * // Get one Withdrawal
     * const withdrawal = await prisma.withdrawal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends withdrawalFindUniqueArgs>(args: SelectSubset<T, withdrawalFindUniqueArgs<ExtArgs>>): Prisma__withdrawalClient<$Result.GetResult<Prisma.$withdrawalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Withdrawal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {withdrawalFindUniqueOrThrowArgs} args - Arguments to find a Withdrawal
     * @example
     * // Get one Withdrawal
     * const withdrawal = await prisma.withdrawal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends withdrawalFindUniqueOrThrowArgs>(args: SelectSubset<T, withdrawalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__withdrawalClient<$Result.GetResult<Prisma.$withdrawalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Withdrawal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalFindFirstArgs} args - Arguments to find a Withdrawal
     * @example
     * // Get one Withdrawal
     * const withdrawal = await prisma.withdrawal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends withdrawalFindFirstArgs>(args?: SelectSubset<T, withdrawalFindFirstArgs<ExtArgs>>): Prisma__withdrawalClient<$Result.GetResult<Prisma.$withdrawalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Withdrawal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalFindFirstOrThrowArgs} args - Arguments to find a Withdrawal
     * @example
     * // Get one Withdrawal
     * const withdrawal = await prisma.withdrawal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends withdrawalFindFirstOrThrowArgs>(args?: SelectSubset<T, withdrawalFindFirstOrThrowArgs<ExtArgs>>): Prisma__withdrawalClient<$Result.GetResult<Prisma.$withdrawalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Withdrawals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Withdrawals
     * const withdrawals = await prisma.withdrawal.findMany()
     * 
     * // Get first 10 Withdrawals
     * const withdrawals = await prisma.withdrawal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const withdrawalWithIdOnly = await prisma.withdrawal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends withdrawalFindManyArgs>(args?: SelectSubset<T, withdrawalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$withdrawalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Withdrawal.
     * @param {withdrawalCreateArgs} args - Arguments to create a Withdrawal.
     * @example
     * // Create one Withdrawal
     * const Withdrawal = await prisma.withdrawal.create({
     *   data: {
     *     // ... data to create a Withdrawal
     *   }
     * })
     * 
     */
    create<T extends withdrawalCreateArgs>(args: SelectSubset<T, withdrawalCreateArgs<ExtArgs>>): Prisma__withdrawalClient<$Result.GetResult<Prisma.$withdrawalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Withdrawals.
     * @param {withdrawalCreateManyArgs} args - Arguments to create many Withdrawals.
     * @example
     * // Create many Withdrawals
     * const withdrawal = await prisma.withdrawal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends withdrawalCreateManyArgs>(args?: SelectSubset<T, withdrawalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Withdrawal.
     * @param {withdrawalDeleteArgs} args - Arguments to delete one Withdrawal.
     * @example
     * // Delete one Withdrawal
     * const Withdrawal = await prisma.withdrawal.delete({
     *   where: {
     *     // ... filter to delete one Withdrawal
     *   }
     * })
     * 
     */
    delete<T extends withdrawalDeleteArgs>(args: SelectSubset<T, withdrawalDeleteArgs<ExtArgs>>): Prisma__withdrawalClient<$Result.GetResult<Prisma.$withdrawalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Withdrawal.
     * @param {withdrawalUpdateArgs} args - Arguments to update one Withdrawal.
     * @example
     * // Update one Withdrawal
     * const withdrawal = await prisma.withdrawal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends withdrawalUpdateArgs>(args: SelectSubset<T, withdrawalUpdateArgs<ExtArgs>>): Prisma__withdrawalClient<$Result.GetResult<Prisma.$withdrawalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Withdrawals.
     * @param {withdrawalDeleteManyArgs} args - Arguments to filter Withdrawals to delete.
     * @example
     * // Delete a few Withdrawals
     * const { count } = await prisma.withdrawal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends withdrawalDeleteManyArgs>(args?: SelectSubset<T, withdrawalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Withdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Withdrawals
     * const withdrawal = await prisma.withdrawal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends withdrawalUpdateManyArgs>(args: SelectSubset<T, withdrawalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Withdrawal.
     * @param {withdrawalUpsertArgs} args - Arguments to update or create a Withdrawal.
     * @example
     * // Update or create a Withdrawal
     * const withdrawal = await prisma.withdrawal.upsert({
     *   create: {
     *     // ... data to create a Withdrawal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Withdrawal we want to update
     *   }
     * })
     */
    upsert<T extends withdrawalUpsertArgs>(args: SelectSubset<T, withdrawalUpsertArgs<ExtArgs>>): Prisma__withdrawalClient<$Result.GetResult<Prisma.$withdrawalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Withdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalCountArgs} args - Arguments to filter Withdrawals to count.
     * @example
     * // Count the number of Withdrawals
     * const count = await prisma.withdrawal.count({
     *   where: {
     *     // ... the filter for the Withdrawals we want to count
     *   }
     * })
    **/
    count<T extends withdrawalCountArgs>(
      args?: Subset<T, withdrawalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WithdrawalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Withdrawal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WithdrawalAggregateArgs>(args: Subset<T, WithdrawalAggregateArgs>): Prisma.PrismaPromise<GetWithdrawalAggregateType<T>>

    /**
     * Group by Withdrawal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends withdrawalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: withdrawalGroupByArgs['orderBy'] }
        : { orderBy?: withdrawalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, withdrawalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWithdrawalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the withdrawal model
   */
  readonly fields: withdrawalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for withdrawal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__withdrawalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends departmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, departmentDefaultArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends withdrawal$itemsArgs<ExtArgs> = {}>(args?: Subset<T, withdrawal$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$withdrawalItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stock<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stockItmes<T extends withdrawal$stockItmesArgs<ExtArgs> = {}>(args?: Subset<T, withdrawal$stockItmesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the withdrawal model
   */
  interface withdrawalFieldRefs {
    readonly id: FieldRef<"withdrawal", 'Int'>
    readonly departmentName: FieldRef<"withdrawal", 'String'>
    readonly date: FieldRef<"withdrawal", 'String'>
    readonly departmentId: FieldRef<"withdrawal", 'String'>
    readonly stockId: FieldRef<"withdrawal", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * withdrawal findUnique
   */
  export type withdrawalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawal
     */
    select?: withdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawal
     */
    omit?: withdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalInclude<ExtArgs> | null
    /**
     * Filter, which withdrawal to fetch.
     */
    where: withdrawalWhereUniqueInput
  }

  /**
   * withdrawal findUniqueOrThrow
   */
  export type withdrawalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawal
     */
    select?: withdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawal
     */
    omit?: withdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalInclude<ExtArgs> | null
    /**
     * Filter, which withdrawal to fetch.
     */
    where: withdrawalWhereUniqueInput
  }

  /**
   * withdrawal findFirst
   */
  export type withdrawalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawal
     */
    select?: withdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawal
     */
    omit?: withdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalInclude<ExtArgs> | null
    /**
     * Filter, which withdrawal to fetch.
     */
    where?: withdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of withdrawals to fetch.
     */
    orderBy?: withdrawalOrderByWithRelationInput | withdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for withdrawals.
     */
    cursor?: withdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of withdrawals.
     */
    distinct?: WithdrawalScalarFieldEnum | WithdrawalScalarFieldEnum[]
  }

  /**
   * withdrawal findFirstOrThrow
   */
  export type withdrawalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawal
     */
    select?: withdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawal
     */
    omit?: withdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalInclude<ExtArgs> | null
    /**
     * Filter, which withdrawal to fetch.
     */
    where?: withdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of withdrawals to fetch.
     */
    orderBy?: withdrawalOrderByWithRelationInput | withdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for withdrawals.
     */
    cursor?: withdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of withdrawals.
     */
    distinct?: WithdrawalScalarFieldEnum | WithdrawalScalarFieldEnum[]
  }

  /**
   * withdrawal findMany
   */
  export type withdrawalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawal
     */
    select?: withdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawal
     */
    omit?: withdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalInclude<ExtArgs> | null
    /**
     * Filter, which withdrawals to fetch.
     */
    where?: withdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of withdrawals to fetch.
     */
    orderBy?: withdrawalOrderByWithRelationInput | withdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing withdrawals.
     */
    cursor?: withdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` withdrawals.
     */
    skip?: number
    distinct?: WithdrawalScalarFieldEnum | WithdrawalScalarFieldEnum[]
  }

  /**
   * withdrawal create
   */
  export type withdrawalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawal
     */
    select?: withdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawal
     */
    omit?: withdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalInclude<ExtArgs> | null
    /**
     * The data needed to create a withdrawal.
     */
    data: XOR<withdrawalCreateInput, withdrawalUncheckedCreateInput>
  }

  /**
   * withdrawal createMany
   */
  export type withdrawalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many withdrawals.
     */
    data: withdrawalCreateManyInput | withdrawalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * withdrawal update
   */
  export type withdrawalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawal
     */
    select?: withdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawal
     */
    omit?: withdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalInclude<ExtArgs> | null
    /**
     * The data needed to update a withdrawal.
     */
    data: XOR<withdrawalUpdateInput, withdrawalUncheckedUpdateInput>
    /**
     * Choose, which withdrawal to update.
     */
    where: withdrawalWhereUniqueInput
  }

  /**
   * withdrawal updateMany
   */
  export type withdrawalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update withdrawals.
     */
    data: XOR<withdrawalUpdateManyMutationInput, withdrawalUncheckedUpdateManyInput>
    /**
     * Filter which withdrawals to update
     */
    where?: withdrawalWhereInput
    /**
     * Limit how many withdrawals to update.
     */
    limit?: number
  }

  /**
   * withdrawal upsert
   */
  export type withdrawalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawal
     */
    select?: withdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawal
     */
    omit?: withdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalInclude<ExtArgs> | null
    /**
     * The filter to search for the withdrawal to update in case it exists.
     */
    where: withdrawalWhereUniqueInput
    /**
     * In case the withdrawal found by the `where` argument doesn't exist, create a new withdrawal with this data.
     */
    create: XOR<withdrawalCreateInput, withdrawalUncheckedCreateInput>
    /**
     * In case the withdrawal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<withdrawalUpdateInput, withdrawalUncheckedUpdateInput>
  }

  /**
   * withdrawal delete
   */
  export type withdrawalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawal
     */
    select?: withdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawal
     */
    omit?: withdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalInclude<ExtArgs> | null
    /**
     * Filter which withdrawal to delete.
     */
    where: withdrawalWhereUniqueInput
  }

  /**
   * withdrawal deleteMany
   */
  export type withdrawalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which withdrawals to delete
     */
    where?: withdrawalWhereInput
    /**
     * Limit how many withdrawals to delete.
     */
    limit?: number
  }

  /**
   * withdrawal.items
   */
  export type withdrawal$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalItems
     */
    select?: withdrawalItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalItems
     */
    omit?: withdrawalItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalItemsInclude<ExtArgs> | null
    where?: withdrawalItemsWhereInput
    orderBy?: withdrawalItemsOrderByWithRelationInput | withdrawalItemsOrderByWithRelationInput[]
    cursor?: withdrawalItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WithdrawalItemsScalarFieldEnum | WithdrawalItemsScalarFieldEnum[]
  }

  /**
   * withdrawal.stockItmes
   */
  export type withdrawal$stockItmesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    where?: itemWhereInput
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    cursor?: itemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * withdrawal without action
   */
  export type withdrawalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawal
     */
    select?: withdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawal
     */
    omit?: withdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalInclude<ExtArgs> | null
  }


  /**
   * Model withdrawalItems
   */

  export type AggregateWithdrawalItems = {
    _count: WithdrawalItemsCountAggregateOutputType | null
    _avg: WithdrawalItemsAvgAggregateOutputType | null
    _sum: WithdrawalItemsSumAggregateOutputType | null
    _min: WithdrawalItemsMinAggregateOutputType | null
    _max: WithdrawalItemsMaxAggregateOutputType | null
  }

  export type WithdrawalItemsAvgAggregateOutputType = {
    itemId: number | null
    quantity: number | null
    withdrawalId: number | null
    stockId: number | null
  }

  export type WithdrawalItemsSumAggregateOutputType = {
    itemId: number | null
    quantity: number | null
    withdrawalId: number | null
    stockId: number | null
  }

  export type WithdrawalItemsMinAggregateOutputType = {
    id: string | null
    itemId: number | null
    genericName: string | null
    unit: string | null
    category: string | null
    quantity: number | null
    expireDate: string | null
    withdrawalId: number | null
    itemParentId: string | null
    withdrawDate: string | null
    stockId: number | null
  }

  export type WithdrawalItemsMaxAggregateOutputType = {
    id: string | null
    itemId: number | null
    genericName: string | null
    unit: string | null
    category: string | null
    quantity: number | null
    expireDate: string | null
    withdrawalId: number | null
    itemParentId: string | null
    withdrawDate: string | null
    stockId: number | null
  }

  export type WithdrawalItemsCountAggregateOutputType = {
    id: number
    itemId: number
    genericName: number
    unit: number
    category: number
    quantity: number
    expireDate: number
    withdrawalId: number
    itemParentId: number
    withdrawDate: number
    stockId: number
    _all: number
  }


  export type WithdrawalItemsAvgAggregateInputType = {
    itemId?: true
    quantity?: true
    withdrawalId?: true
    stockId?: true
  }

  export type WithdrawalItemsSumAggregateInputType = {
    itemId?: true
    quantity?: true
    withdrawalId?: true
    stockId?: true
  }

  export type WithdrawalItemsMinAggregateInputType = {
    id?: true
    itemId?: true
    genericName?: true
    unit?: true
    category?: true
    quantity?: true
    expireDate?: true
    withdrawalId?: true
    itemParentId?: true
    withdrawDate?: true
    stockId?: true
  }

  export type WithdrawalItemsMaxAggregateInputType = {
    id?: true
    itemId?: true
    genericName?: true
    unit?: true
    category?: true
    quantity?: true
    expireDate?: true
    withdrawalId?: true
    itemParentId?: true
    withdrawDate?: true
    stockId?: true
  }

  export type WithdrawalItemsCountAggregateInputType = {
    id?: true
    itemId?: true
    genericName?: true
    unit?: true
    category?: true
    quantity?: true
    expireDate?: true
    withdrawalId?: true
    itemParentId?: true
    withdrawDate?: true
    stockId?: true
    _all?: true
  }

  export type WithdrawalItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which withdrawalItems to aggregate.
     */
    where?: withdrawalItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of withdrawalItems to fetch.
     */
    orderBy?: withdrawalItemsOrderByWithRelationInput | withdrawalItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: withdrawalItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` withdrawalItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` withdrawalItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned withdrawalItems
    **/
    _count?: true | WithdrawalItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WithdrawalItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WithdrawalItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WithdrawalItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WithdrawalItemsMaxAggregateInputType
  }

  export type GetWithdrawalItemsAggregateType<T extends WithdrawalItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateWithdrawalItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWithdrawalItems[P]>
      : GetScalarType<T[P], AggregateWithdrawalItems[P]>
  }




  export type withdrawalItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: withdrawalItemsWhereInput
    orderBy?: withdrawalItemsOrderByWithAggregationInput | withdrawalItemsOrderByWithAggregationInput[]
    by: WithdrawalItemsScalarFieldEnum[] | WithdrawalItemsScalarFieldEnum
    having?: withdrawalItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WithdrawalItemsCountAggregateInputType | true
    _avg?: WithdrawalItemsAvgAggregateInputType
    _sum?: WithdrawalItemsSumAggregateInputType
    _min?: WithdrawalItemsMinAggregateInputType
    _max?: WithdrawalItemsMaxAggregateInputType
  }

  export type WithdrawalItemsGroupByOutputType = {
    id: string
    itemId: number
    genericName: string
    unit: string
    category: string | null
    quantity: number
    expireDate: string | null
    withdrawalId: number
    itemParentId: string
    withdrawDate: string | null
    stockId: number | null
    _count: WithdrawalItemsCountAggregateOutputType | null
    _avg: WithdrawalItemsAvgAggregateOutputType | null
    _sum: WithdrawalItemsSumAggregateOutputType | null
    _min: WithdrawalItemsMinAggregateOutputType | null
    _max: WithdrawalItemsMaxAggregateOutputType | null
  }

  type GetWithdrawalItemsGroupByPayload<T extends withdrawalItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WithdrawalItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WithdrawalItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WithdrawalItemsGroupByOutputType[P]>
            : GetScalarType<T[P], WithdrawalItemsGroupByOutputType[P]>
        }
      >
    >


  export type withdrawalItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemId?: boolean
    genericName?: boolean
    unit?: boolean
    category?: boolean
    quantity?: boolean
    expireDate?: boolean
    withdrawalId?: boolean
    itemParentId?: boolean
    withdrawDate?: boolean
    stockId?: boolean
    withdrawal?: boolean | withdrawalDefaultArgs<ExtArgs>
    itemParent?: boolean | itemParentDefaultArgs<ExtArgs>
    stock?: boolean | withdrawalItems$stockArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawalItems"]>



  export type withdrawalItemsSelectScalar = {
    id?: boolean
    itemId?: boolean
    genericName?: boolean
    unit?: boolean
    category?: boolean
    quantity?: boolean
    expireDate?: boolean
    withdrawalId?: boolean
    itemParentId?: boolean
    withdrawDate?: boolean
    stockId?: boolean
  }

  export type withdrawalItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "itemId" | "genericName" | "unit" | "category" | "quantity" | "expireDate" | "withdrawalId" | "itemParentId" | "withdrawDate" | "stockId", ExtArgs["result"]["withdrawalItems"]>
  export type withdrawalItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    withdrawal?: boolean | withdrawalDefaultArgs<ExtArgs>
    itemParent?: boolean | itemParentDefaultArgs<ExtArgs>
    stock?: boolean | withdrawalItems$stockArgs<ExtArgs>
  }

  export type $withdrawalItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "withdrawalItems"
    objects: {
      withdrawal: Prisma.$withdrawalPayload<ExtArgs>
      itemParent: Prisma.$itemParentPayload<ExtArgs>
      stock: Prisma.$userPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      itemId: number
      genericName: string
      unit: string
      category: string | null
      quantity: number
      expireDate: string | null
      withdrawalId: number
      itemParentId: string
      withdrawDate: string | null
      stockId: number | null
    }, ExtArgs["result"]["withdrawalItems"]>
    composites: {}
  }

  type withdrawalItemsGetPayload<S extends boolean | null | undefined | withdrawalItemsDefaultArgs> = $Result.GetResult<Prisma.$withdrawalItemsPayload, S>

  type withdrawalItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<withdrawalItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WithdrawalItemsCountAggregateInputType | true
    }

  export interface withdrawalItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['withdrawalItems'], meta: { name: 'withdrawalItems' } }
    /**
     * Find zero or one WithdrawalItems that matches the filter.
     * @param {withdrawalItemsFindUniqueArgs} args - Arguments to find a WithdrawalItems
     * @example
     * // Get one WithdrawalItems
     * const withdrawalItems = await prisma.withdrawalItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends withdrawalItemsFindUniqueArgs>(args: SelectSubset<T, withdrawalItemsFindUniqueArgs<ExtArgs>>): Prisma__withdrawalItemsClient<$Result.GetResult<Prisma.$withdrawalItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WithdrawalItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {withdrawalItemsFindUniqueOrThrowArgs} args - Arguments to find a WithdrawalItems
     * @example
     * // Get one WithdrawalItems
     * const withdrawalItems = await prisma.withdrawalItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends withdrawalItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, withdrawalItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__withdrawalItemsClient<$Result.GetResult<Prisma.$withdrawalItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WithdrawalItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalItemsFindFirstArgs} args - Arguments to find a WithdrawalItems
     * @example
     * // Get one WithdrawalItems
     * const withdrawalItems = await prisma.withdrawalItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends withdrawalItemsFindFirstArgs>(args?: SelectSubset<T, withdrawalItemsFindFirstArgs<ExtArgs>>): Prisma__withdrawalItemsClient<$Result.GetResult<Prisma.$withdrawalItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WithdrawalItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalItemsFindFirstOrThrowArgs} args - Arguments to find a WithdrawalItems
     * @example
     * // Get one WithdrawalItems
     * const withdrawalItems = await prisma.withdrawalItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends withdrawalItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, withdrawalItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__withdrawalItemsClient<$Result.GetResult<Prisma.$withdrawalItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WithdrawalItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WithdrawalItems
     * const withdrawalItems = await prisma.withdrawalItems.findMany()
     * 
     * // Get first 10 WithdrawalItems
     * const withdrawalItems = await prisma.withdrawalItems.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const withdrawalItemsWithIdOnly = await prisma.withdrawalItems.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends withdrawalItemsFindManyArgs>(args?: SelectSubset<T, withdrawalItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$withdrawalItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WithdrawalItems.
     * @param {withdrawalItemsCreateArgs} args - Arguments to create a WithdrawalItems.
     * @example
     * // Create one WithdrawalItems
     * const WithdrawalItems = await prisma.withdrawalItems.create({
     *   data: {
     *     // ... data to create a WithdrawalItems
     *   }
     * })
     * 
     */
    create<T extends withdrawalItemsCreateArgs>(args: SelectSubset<T, withdrawalItemsCreateArgs<ExtArgs>>): Prisma__withdrawalItemsClient<$Result.GetResult<Prisma.$withdrawalItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WithdrawalItems.
     * @param {withdrawalItemsCreateManyArgs} args - Arguments to create many WithdrawalItems.
     * @example
     * // Create many WithdrawalItems
     * const withdrawalItems = await prisma.withdrawalItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends withdrawalItemsCreateManyArgs>(args?: SelectSubset<T, withdrawalItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WithdrawalItems.
     * @param {withdrawalItemsDeleteArgs} args - Arguments to delete one WithdrawalItems.
     * @example
     * // Delete one WithdrawalItems
     * const WithdrawalItems = await prisma.withdrawalItems.delete({
     *   where: {
     *     // ... filter to delete one WithdrawalItems
     *   }
     * })
     * 
     */
    delete<T extends withdrawalItemsDeleteArgs>(args: SelectSubset<T, withdrawalItemsDeleteArgs<ExtArgs>>): Prisma__withdrawalItemsClient<$Result.GetResult<Prisma.$withdrawalItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WithdrawalItems.
     * @param {withdrawalItemsUpdateArgs} args - Arguments to update one WithdrawalItems.
     * @example
     * // Update one WithdrawalItems
     * const withdrawalItems = await prisma.withdrawalItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends withdrawalItemsUpdateArgs>(args: SelectSubset<T, withdrawalItemsUpdateArgs<ExtArgs>>): Prisma__withdrawalItemsClient<$Result.GetResult<Prisma.$withdrawalItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WithdrawalItems.
     * @param {withdrawalItemsDeleteManyArgs} args - Arguments to filter WithdrawalItems to delete.
     * @example
     * // Delete a few WithdrawalItems
     * const { count } = await prisma.withdrawalItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends withdrawalItemsDeleteManyArgs>(args?: SelectSubset<T, withdrawalItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WithdrawalItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WithdrawalItems
     * const withdrawalItems = await prisma.withdrawalItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends withdrawalItemsUpdateManyArgs>(args: SelectSubset<T, withdrawalItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WithdrawalItems.
     * @param {withdrawalItemsUpsertArgs} args - Arguments to update or create a WithdrawalItems.
     * @example
     * // Update or create a WithdrawalItems
     * const withdrawalItems = await prisma.withdrawalItems.upsert({
     *   create: {
     *     // ... data to create a WithdrawalItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WithdrawalItems we want to update
     *   }
     * })
     */
    upsert<T extends withdrawalItemsUpsertArgs>(args: SelectSubset<T, withdrawalItemsUpsertArgs<ExtArgs>>): Prisma__withdrawalItemsClient<$Result.GetResult<Prisma.$withdrawalItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WithdrawalItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalItemsCountArgs} args - Arguments to filter WithdrawalItems to count.
     * @example
     * // Count the number of WithdrawalItems
     * const count = await prisma.withdrawalItems.count({
     *   where: {
     *     // ... the filter for the WithdrawalItems we want to count
     *   }
     * })
    **/
    count<T extends withdrawalItemsCountArgs>(
      args?: Subset<T, withdrawalItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WithdrawalItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WithdrawalItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WithdrawalItemsAggregateArgs>(args: Subset<T, WithdrawalItemsAggregateArgs>): Prisma.PrismaPromise<GetWithdrawalItemsAggregateType<T>>

    /**
     * Group by WithdrawalItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends withdrawalItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: withdrawalItemsGroupByArgs['orderBy'] }
        : { orderBy?: withdrawalItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, withdrawalItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWithdrawalItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the withdrawalItems model
   */
  readonly fields: withdrawalItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for withdrawalItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__withdrawalItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    withdrawal<T extends withdrawalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, withdrawalDefaultArgs<ExtArgs>>): Prisma__withdrawalClient<$Result.GetResult<Prisma.$withdrawalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itemParent<T extends itemParentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, itemParentDefaultArgs<ExtArgs>>): Prisma__itemParentClient<$Result.GetResult<Prisma.$itemParentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stock<T extends withdrawalItems$stockArgs<ExtArgs> = {}>(args?: Subset<T, withdrawalItems$stockArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the withdrawalItems model
   */
  interface withdrawalItemsFieldRefs {
    readonly id: FieldRef<"withdrawalItems", 'String'>
    readonly itemId: FieldRef<"withdrawalItems", 'Int'>
    readonly genericName: FieldRef<"withdrawalItems", 'String'>
    readonly unit: FieldRef<"withdrawalItems", 'String'>
    readonly category: FieldRef<"withdrawalItems", 'String'>
    readonly quantity: FieldRef<"withdrawalItems", 'Int'>
    readonly expireDate: FieldRef<"withdrawalItems", 'String'>
    readonly withdrawalId: FieldRef<"withdrawalItems", 'Int'>
    readonly itemParentId: FieldRef<"withdrawalItems", 'String'>
    readonly withdrawDate: FieldRef<"withdrawalItems", 'String'>
    readonly stockId: FieldRef<"withdrawalItems", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * withdrawalItems findUnique
   */
  export type withdrawalItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalItems
     */
    select?: withdrawalItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalItems
     */
    omit?: withdrawalItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalItemsInclude<ExtArgs> | null
    /**
     * Filter, which withdrawalItems to fetch.
     */
    where: withdrawalItemsWhereUniqueInput
  }

  /**
   * withdrawalItems findUniqueOrThrow
   */
  export type withdrawalItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalItems
     */
    select?: withdrawalItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalItems
     */
    omit?: withdrawalItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalItemsInclude<ExtArgs> | null
    /**
     * Filter, which withdrawalItems to fetch.
     */
    where: withdrawalItemsWhereUniqueInput
  }

  /**
   * withdrawalItems findFirst
   */
  export type withdrawalItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalItems
     */
    select?: withdrawalItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalItems
     */
    omit?: withdrawalItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalItemsInclude<ExtArgs> | null
    /**
     * Filter, which withdrawalItems to fetch.
     */
    where?: withdrawalItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of withdrawalItems to fetch.
     */
    orderBy?: withdrawalItemsOrderByWithRelationInput | withdrawalItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for withdrawalItems.
     */
    cursor?: withdrawalItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` withdrawalItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` withdrawalItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of withdrawalItems.
     */
    distinct?: WithdrawalItemsScalarFieldEnum | WithdrawalItemsScalarFieldEnum[]
  }

  /**
   * withdrawalItems findFirstOrThrow
   */
  export type withdrawalItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalItems
     */
    select?: withdrawalItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalItems
     */
    omit?: withdrawalItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalItemsInclude<ExtArgs> | null
    /**
     * Filter, which withdrawalItems to fetch.
     */
    where?: withdrawalItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of withdrawalItems to fetch.
     */
    orderBy?: withdrawalItemsOrderByWithRelationInput | withdrawalItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for withdrawalItems.
     */
    cursor?: withdrawalItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` withdrawalItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` withdrawalItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of withdrawalItems.
     */
    distinct?: WithdrawalItemsScalarFieldEnum | WithdrawalItemsScalarFieldEnum[]
  }

  /**
   * withdrawalItems findMany
   */
  export type withdrawalItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalItems
     */
    select?: withdrawalItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalItems
     */
    omit?: withdrawalItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalItemsInclude<ExtArgs> | null
    /**
     * Filter, which withdrawalItems to fetch.
     */
    where?: withdrawalItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of withdrawalItems to fetch.
     */
    orderBy?: withdrawalItemsOrderByWithRelationInput | withdrawalItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing withdrawalItems.
     */
    cursor?: withdrawalItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` withdrawalItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` withdrawalItems.
     */
    skip?: number
    distinct?: WithdrawalItemsScalarFieldEnum | WithdrawalItemsScalarFieldEnum[]
  }

  /**
   * withdrawalItems create
   */
  export type withdrawalItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalItems
     */
    select?: withdrawalItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalItems
     */
    omit?: withdrawalItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a withdrawalItems.
     */
    data: XOR<withdrawalItemsCreateInput, withdrawalItemsUncheckedCreateInput>
  }

  /**
   * withdrawalItems createMany
   */
  export type withdrawalItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many withdrawalItems.
     */
    data: withdrawalItemsCreateManyInput | withdrawalItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * withdrawalItems update
   */
  export type withdrawalItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalItems
     */
    select?: withdrawalItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalItems
     */
    omit?: withdrawalItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a withdrawalItems.
     */
    data: XOR<withdrawalItemsUpdateInput, withdrawalItemsUncheckedUpdateInput>
    /**
     * Choose, which withdrawalItems to update.
     */
    where: withdrawalItemsWhereUniqueInput
  }

  /**
   * withdrawalItems updateMany
   */
  export type withdrawalItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update withdrawalItems.
     */
    data: XOR<withdrawalItemsUpdateManyMutationInput, withdrawalItemsUncheckedUpdateManyInput>
    /**
     * Filter which withdrawalItems to update
     */
    where?: withdrawalItemsWhereInput
    /**
     * Limit how many withdrawalItems to update.
     */
    limit?: number
  }

  /**
   * withdrawalItems upsert
   */
  export type withdrawalItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalItems
     */
    select?: withdrawalItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalItems
     */
    omit?: withdrawalItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the withdrawalItems to update in case it exists.
     */
    where: withdrawalItemsWhereUniqueInput
    /**
     * In case the withdrawalItems found by the `where` argument doesn't exist, create a new withdrawalItems with this data.
     */
    create: XOR<withdrawalItemsCreateInput, withdrawalItemsUncheckedCreateInput>
    /**
     * In case the withdrawalItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<withdrawalItemsUpdateInput, withdrawalItemsUncheckedUpdateInput>
  }

  /**
   * withdrawalItems delete
   */
  export type withdrawalItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalItems
     */
    select?: withdrawalItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalItems
     */
    omit?: withdrawalItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalItemsInclude<ExtArgs> | null
    /**
     * Filter which withdrawalItems to delete.
     */
    where: withdrawalItemsWhereUniqueInput
  }

  /**
   * withdrawalItems deleteMany
   */
  export type withdrawalItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which withdrawalItems to delete
     */
    where?: withdrawalItemsWhereInput
    /**
     * Limit how many withdrawalItems to delete.
     */
    limit?: number
  }

  /**
   * withdrawalItems.stock
   */
  export type withdrawalItems$stockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * withdrawalItems without action
   */
  export type withdrawalItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalItems
     */
    select?: withdrawalItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalItems
     */
    omit?: withdrawalItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalItemsInclude<ExtArgs> | null
  }


  /**
   * Model withdrawalCart
   */

  export type AggregateWithdrawalCart = {
    _count: WithdrawalCartCountAggregateOutputType | null
    _avg: WithdrawalCartAvgAggregateOutputType | null
    _sum: WithdrawalCartSumAggregateOutputType | null
    _min: WithdrawalCartMinAggregateOutputType | null
    _max: WithdrawalCartMaxAggregateOutputType | null
  }

  export type WithdrawalCartAvgAggregateOutputType = {
    id: number | null
    stockId: number | null
  }

  export type WithdrawalCartSumAggregateOutputType = {
    id: number | null
    stockId: number | null
  }

  export type WithdrawalCartMinAggregateOutputType = {
    id: number | null
    date: string | null
    departmentName: string | null
    stockId: number | null
  }

  export type WithdrawalCartMaxAggregateOutputType = {
    id: number | null
    date: string | null
    departmentName: string | null
    stockId: number | null
  }

  export type WithdrawalCartCountAggregateOutputType = {
    id: number
    date: number
    departmentName: number
    stockId: number
    _all: number
  }


  export type WithdrawalCartAvgAggregateInputType = {
    id?: true
    stockId?: true
  }

  export type WithdrawalCartSumAggregateInputType = {
    id?: true
    stockId?: true
  }

  export type WithdrawalCartMinAggregateInputType = {
    id?: true
    date?: true
    departmentName?: true
    stockId?: true
  }

  export type WithdrawalCartMaxAggregateInputType = {
    id?: true
    date?: true
    departmentName?: true
    stockId?: true
  }

  export type WithdrawalCartCountAggregateInputType = {
    id?: true
    date?: true
    departmentName?: true
    stockId?: true
    _all?: true
  }

  export type WithdrawalCartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which withdrawalCart to aggregate.
     */
    where?: withdrawalCartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of withdrawalCarts to fetch.
     */
    orderBy?: withdrawalCartOrderByWithRelationInput | withdrawalCartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: withdrawalCartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` withdrawalCarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` withdrawalCarts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned withdrawalCarts
    **/
    _count?: true | WithdrawalCartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WithdrawalCartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WithdrawalCartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WithdrawalCartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WithdrawalCartMaxAggregateInputType
  }

  export type GetWithdrawalCartAggregateType<T extends WithdrawalCartAggregateArgs> = {
        [P in keyof T & keyof AggregateWithdrawalCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWithdrawalCart[P]>
      : GetScalarType<T[P], AggregateWithdrawalCart[P]>
  }




  export type withdrawalCartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: withdrawalCartWhereInput
    orderBy?: withdrawalCartOrderByWithAggregationInput | withdrawalCartOrderByWithAggregationInput[]
    by: WithdrawalCartScalarFieldEnum[] | WithdrawalCartScalarFieldEnum
    having?: withdrawalCartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WithdrawalCartCountAggregateInputType | true
    _avg?: WithdrawalCartAvgAggregateInputType
    _sum?: WithdrawalCartSumAggregateInputType
    _min?: WithdrawalCartMinAggregateInputType
    _max?: WithdrawalCartMaxAggregateInputType
  }

  export type WithdrawalCartGroupByOutputType = {
    id: number
    date: string | null
    departmentName: string | null
    stockId: number
    _count: WithdrawalCartCountAggregateOutputType | null
    _avg: WithdrawalCartAvgAggregateOutputType | null
    _sum: WithdrawalCartSumAggregateOutputType | null
    _min: WithdrawalCartMinAggregateOutputType | null
    _max: WithdrawalCartMaxAggregateOutputType | null
  }

  type GetWithdrawalCartGroupByPayload<T extends withdrawalCartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WithdrawalCartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WithdrawalCartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WithdrawalCartGroupByOutputType[P]>
            : GetScalarType<T[P], WithdrawalCartGroupByOutputType[P]>
        }
      >
    >


  export type withdrawalCartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    departmentName?: boolean
    stockId?: boolean
    stock?: boolean | userDefaultArgs<ExtArgs>
    items?: boolean | withdrawalCart$itemsArgs<ExtArgs>
    _count?: boolean | WithdrawalCartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawalCart"]>



  export type withdrawalCartSelectScalar = {
    id?: boolean
    date?: boolean
    departmentName?: boolean
    stockId?: boolean
  }

  export type withdrawalCartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "departmentName" | "stockId", ExtArgs["result"]["withdrawalCart"]>
  export type withdrawalCartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock?: boolean | userDefaultArgs<ExtArgs>
    items?: boolean | withdrawalCart$itemsArgs<ExtArgs>
    _count?: boolean | WithdrawalCartCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $withdrawalCartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "withdrawalCart"
    objects: {
      stock: Prisma.$userPayload<ExtArgs>
      items: Prisma.$withdrawalCartItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: string | null
      departmentName: string | null
      stockId: number
    }, ExtArgs["result"]["withdrawalCart"]>
    composites: {}
  }

  type withdrawalCartGetPayload<S extends boolean | null | undefined | withdrawalCartDefaultArgs> = $Result.GetResult<Prisma.$withdrawalCartPayload, S>

  type withdrawalCartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<withdrawalCartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WithdrawalCartCountAggregateInputType | true
    }

  export interface withdrawalCartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['withdrawalCart'], meta: { name: 'withdrawalCart' } }
    /**
     * Find zero or one WithdrawalCart that matches the filter.
     * @param {withdrawalCartFindUniqueArgs} args - Arguments to find a WithdrawalCart
     * @example
     * // Get one WithdrawalCart
     * const withdrawalCart = await prisma.withdrawalCart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends withdrawalCartFindUniqueArgs>(args: SelectSubset<T, withdrawalCartFindUniqueArgs<ExtArgs>>): Prisma__withdrawalCartClient<$Result.GetResult<Prisma.$withdrawalCartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WithdrawalCart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {withdrawalCartFindUniqueOrThrowArgs} args - Arguments to find a WithdrawalCart
     * @example
     * // Get one WithdrawalCart
     * const withdrawalCart = await prisma.withdrawalCart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends withdrawalCartFindUniqueOrThrowArgs>(args: SelectSubset<T, withdrawalCartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__withdrawalCartClient<$Result.GetResult<Prisma.$withdrawalCartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WithdrawalCart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalCartFindFirstArgs} args - Arguments to find a WithdrawalCart
     * @example
     * // Get one WithdrawalCart
     * const withdrawalCart = await prisma.withdrawalCart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends withdrawalCartFindFirstArgs>(args?: SelectSubset<T, withdrawalCartFindFirstArgs<ExtArgs>>): Prisma__withdrawalCartClient<$Result.GetResult<Prisma.$withdrawalCartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WithdrawalCart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalCartFindFirstOrThrowArgs} args - Arguments to find a WithdrawalCart
     * @example
     * // Get one WithdrawalCart
     * const withdrawalCart = await prisma.withdrawalCart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends withdrawalCartFindFirstOrThrowArgs>(args?: SelectSubset<T, withdrawalCartFindFirstOrThrowArgs<ExtArgs>>): Prisma__withdrawalCartClient<$Result.GetResult<Prisma.$withdrawalCartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WithdrawalCarts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalCartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WithdrawalCarts
     * const withdrawalCarts = await prisma.withdrawalCart.findMany()
     * 
     * // Get first 10 WithdrawalCarts
     * const withdrawalCarts = await prisma.withdrawalCart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const withdrawalCartWithIdOnly = await prisma.withdrawalCart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends withdrawalCartFindManyArgs>(args?: SelectSubset<T, withdrawalCartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$withdrawalCartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WithdrawalCart.
     * @param {withdrawalCartCreateArgs} args - Arguments to create a WithdrawalCart.
     * @example
     * // Create one WithdrawalCart
     * const WithdrawalCart = await prisma.withdrawalCart.create({
     *   data: {
     *     // ... data to create a WithdrawalCart
     *   }
     * })
     * 
     */
    create<T extends withdrawalCartCreateArgs>(args: SelectSubset<T, withdrawalCartCreateArgs<ExtArgs>>): Prisma__withdrawalCartClient<$Result.GetResult<Prisma.$withdrawalCartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WithdrawalCarts.
     * @param {withdrawalCartCreateManyArgs} args - Arguments to create many WithdrawalCarts.
     * @example
     * // Create many WithdrawalCarts
     * const withdrawalCart = await prisma.withdrawalCart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends withdrawalCartCreateManyArgs>(args?: SelectSubset<T, withdrawalCartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WithdrawalCart.
     * @param {withdrawalCartDeleteArgs} args - Arguments to delete one WithdrawalCart.
     * @example
     * // Delete one WithdrawalCart
     * const WithdrawalCart = await prisma.withdrawalCart.delete({
     *   where: {
     *     // ... filter to delete one WithdrawalCart
     *   }
     * })
     * 
     */
    delete<T extends withdrawalCartDeleteArgs>(args: SelectSubset<T, withdrawalCartDeleteArgs<ExtArgs>>): Prisma__withdrawalCartClient<$Result.GetResult<Prisma.$withdrawalCartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WithdrawalCart.
     * @param {withdrawalCartUpdateArgs} args - Arguments to update one WithdrawalCart.
     * @example
     * // Update one WithdrawalCart
     * const withdrawalCart = await prisma.withdrawalCart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends withdrawalCartUpdateArgs>(args: SelectSubset<T, withdrawalCartUpdateArgs<ExtArgs>>): Prisma__withdrawalCartClient<$Result.GetResult<Prisma.$withdrawalCartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WithdrawalCarts.
     * @param {withdrawalCartDeleteManyArgs} args - Arguments to filter WithdrawalCarts to delete.
     * @example
     * // Delete a few WithdrawalCarts
     * const { count } = await prisma.withdrawalCart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends withdrawalCartDeleteManyArgs>(args?: SelectSubset<T, withdrawalCartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WithdrawalCarts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalCartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WithdrawalCarts
     * const withdrawalCart = await prisma.withdrawalCart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends withdrawalCartUpdateManyArgs>(args: SelectSubset<T, withdrawalCartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WithdrawalCart.
     * @param {withdrawalCartUpsertArgs} args - Arguments to update or create a WithdrawalCart.
     * @example
     * // Update or create a WithdrawalCart
     * const withdrawalCart = await prisma.withdrawalCart.upsert({
     *   create: {
     *     // ... data to create a WithdrawalCart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WithdrawalCart we want to update
     *   }
     * })
     */
    upsert<T extends withdrawalCartUpsertArgs>(args: SelectSubset<T, withdrawalCartUpsertArgs<ExtArgs>>): Prisma__withdrawalCartClient<$Result.GetResult<Prisma.$withdrawalCartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WithdrawalCarts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalCartCountArgs} args - Arguments to filter WithdrawalCarts to count.
     * @example
     * // Count the number of WithdrawalCarts
     * const count = await prisma.withdrawalCart.count({
     *   where: {
     *     // ... the filter for the WithdrawalCarts we want to count
     *   }
     * })
    **/
    count<T extends withdrawalCartCountArgs>(
      args?: Subset<T, withdrawalCartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WithdrawalCartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WithdrawalCart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalCartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WithdrawalCartAggregateArgs>(args: Subset<T, WithdrawalCartAggregateArgs>): Prisma.PrismaPromise<GetWithdrawalCartAggregateType<T>>

    /**
     * Group by WithdrawalCart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalCartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends withdrawalCartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: withdrawalCartGroupByArgs['orderBy'] }
        : { orderBy?: withdrawalCartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, withdrawalCartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWithdrawalCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the withdrawalCart model
   */
  readonly fields: withdrawalCartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for withdrawalCart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__withdrawalCartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stock<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends withdrawalCart$itemsArgs<ExtArgs> = {}>(args?: Subset<T, withdrawalCart$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$withdrawalCartItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the withdrawalCart model
   */
  interface withdrawalCartFieldRefs {
    readonly id: FieldRef<"withdrawalCart", 'Int'>
    readonly date: FieldRef<"withdrawalCart", 'String'>
    readonly departmentName: FieldRef<"withdrawalCart", 'String'>
    readonly stockId: FieldRef<"withdrawalCart", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * withdrawalCart findUnique
   */
  export type withdrawalCartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalCart
     */
    select?: withdrawalCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalCart
     */
    omit?: withdrawalCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalCartInclude<ExtArgs> | null
    /**
     * Filter, which withdrawalCart to fetch.
     */
    where: withdrawalCartWhereUniqueInput
  }

  /**
   * withdrawalCart findUniqueOrThrow
   */
  export type withdrawalCartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalCart
     */
    select?: withdrawalCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalCart
     */
    omit?: withdrawalCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalCartInclude<ExtArgs> | null
    /**
     * Filter, which withdrawalCart to fetch.
     */
    where: withdrawalCartWhereUniqueInput
  }

  /**
   * withdrawalCart findFirst
   */
  export type withdrawalCartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalCart
     */
    select?: withdrawalCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalCart
     */
    omit?: withdrawalCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalCartInclude<ExtArgs> | null
    /**
     * Filter, which withdrawalCart to fetch.
     */
    where?: withdrawalCartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of withdrawalCarts to fetch.
     */
    orderBy?: withdrawalCartOrderByWithRelationInput | withdrawalCartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for withdrawalCarts.
     */
    cursor?: withdrawalCartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` withdrawalCarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` withdrawalCarts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of withdrawalCarts.
     */
    distinct?: WithdrawalCartScalarFieldEnum | WithdrawalCartScalarFieldEnum[]
  }

  /**
   * withdrawalCart findFirstOrThrow
   */
  export type withdrawalCartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalCart
     */
    select?: withdrawalCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalCart
     */
    omit?: withdrawalCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalCartInclude<ExtArgs> | null
    /**
     * Filter, which withdrawalCart to fetch.
     */
    where?: withdrawalCartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of withdrawalCarts to fetch.
     */
    orderBy?: withdrawalCartOrderByWithRelationInput | withdrawalCartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for withdrawalCarts.
     */
    cursor?: withdrawalCartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` withdrawalCarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` withdrawalCarts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of withdrawalCarts.
     */
    distinct?: WithdrawalCartScalarFieldEnum | WithdrawalCartScalarFieldEnum[]
  }

  /**
   * withdrawalCart findMany
   */
  export type withdrawalCartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalCart
     */
    select?: withdrawalCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalCart
     */
    omit?: withdrawalCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalCartInclude<ExtArgs> | null
    /**
     * Filter, which withdrawalCarts to fetch.
     */
    where?: withdrawalCartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of withdrawalCarts to fetch.
     */
    orderBy?: withdrawalCartOrderByWithRelationInput | withdrawalCartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing withdrawalCarts.
     */
    cursor?: withdrawalCartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` withdrawalCarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` withdrawalCarts.
     */
    skip?: number
    distinct?: WithdrawalCartScalarFieldEnum | WithdrawalCartScalarFieldEnum[]
  }

  /**
   * withdrawalCart create
   */
  export type withdrawalCartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalCart
     */
    select?: withdrawalCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalCart
     */
    omit?: withdrawalCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalCartInclude<ExtArgs> | null
    /**
     * The data needed to create a withdrawalCart.
     */
    data: XOR<withdrawalCartCreateInput, withdrawalCartUncheckedCreateInput>
  }

  /**
   * withdrawalCart createMany
   */
  export type withdrawalCartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many withdrawalCarts.
     */
    data: withdrawalCartCreateManyInput | withdrawalCartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * withdrawalCart update
   */
  export type withdrawalCartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalCart
     */
    select?: withdrawalCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalCart
     */
    omit?: withdrawalCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalCartInclude<ExtArgs> | null
    /**
     * The data needed to update a withdrawalCart.
     */
    data: XOR<withdrawalCartUpdateInput, withdrawalCartUncheckedUpdateInput>
    /**
     * Choose, which withdrawalCart to update.
     */
    where: withdrawalCartWhereUniqueInput
  }

  /**
   * withdrawalCart updateMany
   */
  export type withdrawalCartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update withdrawalCarts.
     */
    data: XOR<withdrawalCartUpdateManyMutationInput, withdrawalCartUncheckedUpdateManyInput>
    /**
     * Filter which withdrawalCarts to update
     */
    where?: withdrawalCartWhereInput
    /**
     * Limit how many withdrawalCarts to update.
     */
    limit?: number
  }

  /**
   * withdrawalCart upsert
   */
  export type withdrawalCartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalCart
     */
    select?: withdrawalCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalCart
     */
    omit?: withdrawalCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalCartInclude<ExtArgs> | null
    /**
     * The filter to search for the withdrawalCart to update in case it exists.
     */
    where: withdrawalCartWhereUniqueInput
    /**
     * In case the withdrawalCart found by the `where` argument doesn't exist, create a new withdrawalCart with this data.
     */
    create: XOR<withdrawalCartCreateInput, withdrawalCartUncheckedCreateInput>
    /**
     * In case the withdrawalCart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<withdrawalCartUpdateInput, withdrawalCartUncheckedUpdateInput>
  }

  /**
   * withdrawalCart delete
   */
  export type withdrawalCartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalCart
     */
    select?: withdrawalCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalCart
     */
    omit?: withdrawalCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalCartInclude<ExtArgs> | null
    /**
     * Filter which withdrawalCart to delete.
     */
    where: withdrawalCartWhereUniqueInput
  }

  /**
   * withdrawalCart deleteMany
   */
  export type withdrawalCartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which withdrawalCarts to delete
     */
    where?: withdrawalCartWhereInput
    /**
     * Limit how many withdrawalCarts to delete.
     */
    limit?: number
  }

  /**
   * withdrawalCart.items
   */
  export type withdrawalCart$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalCartItems
     */
    select?: withdrawalCartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalCartItems
     */
    omit?: withdrawalCartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalCartItemsInclude<ExtArgs> | null
    where?: withdrawalCartItemsWhereInput
    orderBy?: withdrawalCartItemsOrderByWithRelationInput | withdrawalCartItemsOrderByWithRelationInput[]
    cursor?: withdrawalCartItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WithdrawalCartItemsScalarFieldEnum | WithdrawalCartItemsScalarFieldEnum[]
  }

  /**
   * withdrawalCart without action
   */
  export type withdrawalCartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalCart
     */
    select?: withdrawalCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalCart
     */
    omit?: withdrawalCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalCartInclude<ExtArgs> | null
  }


  /**
   * Model withdrawalCartItems
   */

  export type AggregateWithdrawalCartItems = {
    _count: WithdrawalCartItemsCountAggregateOutputType | null
    _avg: WithdrawalCartItemsAvgAggregateOutputType | null
    _sum: WithdrawalCartItemsSumAggregateOutputType | null
    _min: WithdrawalCartItemsMinAggregateOutputType | null
    _max: WithdrawalCartItemsMaxAggregateOutputType | null
  }

  export type WithdrawalCartItemsAvgAggregateOutputType = {
    id: number | null
    itemId: number | null
    quantity: number | null
    cartId: number | null
    maxQuantity: number | null
  }

  export type WithdrawalCartItemsSumAggregateOutputType = {
    id: number | null
    itemId: number | null
    quantity: number | null
    cartId: number | null
    maxQuantity: number | null
  }

  export type WithdrawalCartItemsMinAggregateOutputType = {
    id: number | null
    itemId: number | null
    genericName: string | null
    unit: string | null
    category: string | null
    quantity: number | null
    expireDate: string | null
    cartId: number | null
    maxQuantity: number | null
    itemParentId: string | null
  }

  export type WithdrawalCartItemsMaxAggregateOutputType = {
    id: number | null
    itemId: number | null
    genericName: string | null
    unit: string | null
    category: string | null
    quantity: number | null
    expireDate: string | null
    cartId: number | null
    maxQuantity: number | null
    itemParentId: string | null
  }

  export type WithdrawalCartItemsCountAggregateOutputType = {
    id: number
    itemId: number
    genericName: number
    unit: number
    category: number
    quantity: number
    expireDate: number
    cartId: number
    maxQuantity: number
    itemParentId: number
    _all: number
  }


  export type WithdrawalCartItemsAvgAggregateInputType = {
    id?: true
    itemId?: true
    quantity?: true
    cartId?: true
    maxQuantity?: true
  }

  export type WithdrawalCartItemsSumAggregateInputType = {
    id?: true
    itemId?: true
    quantity?: true
    cartId?: true
    maxQuantity?: true
  }

  export type WithdrawalCartItemsMinAggregateInputType = {
    id?: true
    itemId?: true
    genericName?: true
    unit?: true
    category?: true
    quantity?: true
    expireDate?: true
    cartId?: true
    maxQuantity?: true
    itemParentId?: true
  }

  export type WithdrawalCartItemsMaxAggregateInputType = {
    id?: true
    itemId?: true
    genericName?: true
    unit?: true
    category?: true
    quantity?: true
    expireDate?: true
    cartId?: true
    maxQuantity?: true
    itemParentId?: true
  }

  export type WithdrawalCartItemsCountAggregateInputType = {
    id?: true
    itemId?: true
    genericName?: true
    unit?: true
    category?: true
    quantity?: true
    expireDate?: true
    cartId?: true
    maxQuantity?: true
    itemParentId?: true
    _all?: true
  }

  export type WithdrawalCartItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which withdrawalCartItems to aggregate.
     */
    where?: withdrawalCartItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of withdrawalCartItems to fetch.
     */
    orderBy?: withdrawalCartItemsOrderByWithRelationInput | withdrawalCartItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: withdrawalCartItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` withdrawalCartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` withdrawalCartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned withdrawalCartItems
    **/
    _count?: true | WithdrawalCartItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WithdrawalCartItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WithdrawalCartItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WithdrawalCartItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WithdrawalCartItemsMaxAggregateInputType
  }

  export type GetWithdrawalCartItemsAggregateType<T extends WithdrawalCartItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateWithdrawalCartItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWithdrawalCartItems[P]>
      : GetScalarType<T[P], AggregateWithdrawalCartItems[P]>
  }




  export type withdrawalCartItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: withdrawalCartItemsWhereInput
    orderBy?: withdrawalCartItemsOrderByWithAggregationInput | withdrawalCartItemsOrderByWithAggregationInput[]
    by: WithdrawalCartItemsScalarFieldEnum[] | WithdrawalCartItemsScalarFieldEnum
    having?: withdrawalCartItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WithdrawalCartItemsCountAggregateInputType | true
    _avg?: WithdrawalCartItemsAvgAggregateInputType
    _sum?: WithdrawalCartItemsSumAggregateInputType
    _min?: WithdrawalCartItemsMinAggregateInputType
    _max?: WithdrawalCartItemsMaxAggregateInputType
  }

  export type WithdrawalCartItemsGroupByOutputType = {
    id: number
    itemId: number | null
    genericName: string
    unit: string
    category: string | null
    quantity: number
    expireDate: string | null
    cartId: number
    maxQuantity: number | null
    itemParentId: string
    _count: WithdrawalCartItemsCountAggregateOutputType | null
    _avg: WithdrawalCartItemsAvgAggregateOutputType | null
    _sum: WithdrawalCartItemsSumAggregateOutputType | null
    _min: WithdrawalCartItemsMinAggregateOutputType | null
    _max: WithdrawalCartItemsMaxAggregateOutputType | null
  }

  type GetWithdrawalCartItemsGroupByPayload<T extends withdrawalCartItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WithdrawalCartItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WithdrawalCartItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WithdrawalCartItemsGroupByOutputType[P]>
            : GetScalarType<T[P], WithdrawalCartItemsGroupByOutputType[P]>
        }
      >
    >


  export type withdrawalCartItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemId?: boolean
    genericName?: boolean
    unit?: boolean
    category?: boolean
    quantity?: boolean
    expireDate?: boolean
    cartId?: boolean
    maxQuantity?: boolean
    itemParentId?: boolean
    cart?: boolean | withdrawalCartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawalCartItems"]>



  export type withdrawalCartItemsSelectScalar = {
    id?: boolean
    itemId?: boolean
    genericName?: boolean
    unit?: boolean
    category?: boolean
    quantity?: boolean
    expireDate?: boolean
    cartId?: boolean
    maxQuantity?: boolean
    itemParentId?: boolean
  }

  export type withdrawalCartItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "itemId" | "genericName" | "unit" | "category" | "quantity" | "expireDate" | "cartId" | "maxQuantity" | "itemParentId", ExtArgs["result"]["withdrawalCartItems"]>
  export type withdrawalCartItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | withdrawalCartDefaultArgs<ExtArgs>
  }

  export type $withdrawalCartItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "withdrawalCartItems"
    objects: {
      cart: Prisma.$withdrawalCartPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      itemId: number | null
      genericName: string
      unit: string
      category: string | null
      quantity: number
      expireDate: string | null
      cartId: number
      maxQuantity: number | null
      itemParentId: string
    }, ExtArgs["result"]["withdrawalCartItems"]>
    composites: {}
  }

  type withdrawalCartItemsGetPayload<S extends boolean | null | undefined | withdrawalCartItemsDefaultArgs> = $Result.GetResult<Prisma.$withdrawalCartItemsPayload, S>

  type withdrawalCartItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<withdrawalCartItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WithdrawalCartItemsCountAggregateInputType | true
    }

  export interface withdrawalCartItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['withdrawalCartItems'], meta: { name: 'withdrawalCartItems' } }
    /**
     * Find zero or one WithdrawalCartItems that matches the filter.
     * @param {withdrawalCartItemsFindUniqueArgs} args - Arguments to find a WithdrawalCartItems
     * @example
     * // Get one WithdrawalCartItems
     * const withdrawalCartItems = await prisma.withdrawalCartItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends withdrawalCartItemsFindUniqueArgs>(args: SelectSubset<T, withdrawalCartItemsFindUniqueArgs<ExtArgs>>): Prisma__withdrawalCartItemsClient<$Result.GetResult<Prisma.$withdrawalCartItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WithdrawalCartItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {withdrawalCartItemsFindUniqueOrThrowArgs} args - Arguments to find a WithdrawalCartItems
     * @example
     * // Get one WithdrawalCartItems
     * const withdrawalCartItems = await prisma.withdrawalCartItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends withdrawalCartItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, withdrawalCartItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__withdrawalCartItemsClient<$Result.GetResult<Prisma.$withdrawalCartItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WithdrawalCartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalCartItemsFindFirstArgs} args - Arguments to find a WithdrawalCartItems
     * @example
     * // Get one WithdrawalCartItems
     * const withdrawalCartItems = await prisma.withdrawalCartItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends withdrawalCartItemsFindFirstArgs>(args?: SelectSubset<T, withdrawalCartItemsFindFirstArgs<ExtArgs>>): Prisma__withdrawalCartItemsClient<$Result.GetResult<Prisma.$withdrawalCartItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WithdrawalCartItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalCartItemsFindFirstOrThrowArgs} args - Arguments to find a WithdrawalCartItems
     * @example
     * // Get one WithdrawalCartItems
     * const withdrawalCartItems = await prisma.withdrawalCartItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends withdrawalCartItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, withdrawalCartItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__withdrawalCartItemsClient<$Result.GetResult<Prisma.$withdrawalCartItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WithdrawalCartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalCartItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WithdrawalCartItems
     * const withdrawalCartItems = await prisma.withdrawalCartItems.findMany()
     * 
     * // Get first 10 WithdrawalCartItems
     * const withdrawalCartItems = await prisma.withdrawalCartItems.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const withdrawalCartItemsWithIdOnly = await prisma.withdrawalCartItems.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends withdrawalCartItemsFindManyArgs>(args?: SelectSubset<T, withdrawalCartItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$withdrawalCartItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WithdrawalCartItems.
     * @param {withdrawalCartItemsCreateArgs} args - Arguments to create a WithdrawalCartItems.
     * @example
     * // Create one WithdrawalCartItems
     * const WithdrawalCartItems = await prisma.withdrawalCartItems.create({
     *   data: {
     *     // ... data to create a WithdrawalCartItems
     *   }
     * })
     * 
     */
    create<T extends withdrawalCartItemsCreateArgs>(args: SelectSubset<T, withdrawalCartItemsCreateArgs<ExtArgs>>): Prisma__withdrawalCartItemsClient<$Result.GetResult<Prisma.$withdrawalCartItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WithdrawalCartItems.
     * @param {withdrawalCartItemsCreateManyArgs} args - Arguments to create many WithdrawalCartItems.
     * @example
     * // Create many WithdrawalCartItems
     * const withdrawalCartItems = await prisma.withdrawalCartItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends withdrawalCartItemsCreateManyArgs>(args?: SelectSubset<T, withdrawalCartItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WithdrawalCartItems.
     * @param {withdrawalCartItemsDeleteArgs} args - Arguments to delete one WithdrawalCartItems.
     * @example
     * // Delete one WithdrawalCartItems
     * const WithdrawalCartItems = await prisma.withdrawalCartItems.delete({
     *   where: {
     *     // ... filter to delete one WithdrawalCartItems
     *   }
     * })
     * 
     */
    delete<T extends withdrawalCartItemsDeleteArgs>(args: SelectSubset<T, withdrawalCartItemsDeleteArgs<ExtArgs>>): Prisma__withdrawalCartItemsClient<$Result.GetResult<Prisma.$withdrawalCartItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WithdrawalCartItems.
     * @param {withdrawalCartItemsUpdateArgs} args - Arguments to update one WithdrawalCartItems.
     * @example
     * // Update one WithdrawalCartItems
     * const withdrawalCartItems = await prisma.withdrawalCartItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends withdrawalCartItemsUpdateArgs>(args: SelectSubset<T, withdrawalCartItemsUpdateArgs<ExtArgs>>): Prisma__withdrawalCartItemsClient<$Result.GetResult<Prisma.$withdrawalCartItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WithdrawalCartItems.
     * @param {withdrawalCartItemsDeleteManyArgs} args - Arguments to filter WithdrawalCartItems to delete.
     * @example
     * // Delete a few WithdrawalCartItems
     * const { count } = await prisma.withdrawalCartItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends withdrawalCartItemsDeleteManyArgs>(args?: SelectSubset<T, withdrawalCartItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WithdrawalCartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalCartItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WithdrawalCartItems
     * const withdrawalCartItems = await prisma.withdrawalCartItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends withdrawalCartItemsUpdateManyArgs>(args: SelectSubset<T, withdrawalCartItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WithdrawalCartItems.
     * @param {withdrawalCartItemsUpsertArgs} args - Arguments to update or create a WithdrawalCartItems.
     * @example
     * // Update or create a WithdrawalCartItems
     * const withdrawalCartItems = await prisma.withdrawalCartItems.upsert({
     *   create: {
     *     // ... data to create a WithdrawalCartItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WithdrawalCartItems we want to update
     *   }
     * })
     */
    upsert<T extends withdrawalCartItemsUpsertArgs>(args: SelectSubset<T, withdrawalCartItemsUpsertArgs<ExtArgs>>): Prisma__withdrawalCartItemsClient<$Result.GetResult<Prisma.$withdrawalCartItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WithdrawalCartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalCartItemsCountArgs} args - Arguments to filter WithdrawalCartItems to count.
     * @example
     * // Count the number of WithdrawalCartItems
     * const count = await prisma.withdrawalCartItems.count({
     *   where: {
     *     // ... the filter for the WithdrawalCartItems we want to count
     *   }
     * })
    **/
    count<T extends withdrawalCartItemsCountArgs>(
      args?: Subset<T, withdrawalCartItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WithdrawalCartItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WithdrawalCartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalCartItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WithdrawalCartItemsAggregateArgs>(args: Subset<T, WithdrawalCartItemsAggregateArgs>): Prisma.PrismaPromise<GetWithdrawalCartItemsAggregateType<T>>

    /**
     * Group by WithdrawalCartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalCartItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends withdrawalCartItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: withdrawalCartItemsGroupByArgs['orderBy'] }
        : { orderBy?: withdrawalCartItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, withdrawalCartItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWithdrawalCartItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the withdrawalCartItems model
   */
  readonly fields: withdrawalCartItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for withdrawalCartItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__withdrawalCartItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart<T extends withdrawalCartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, withdrawalCartDefaultArgs<ExtArgs>>): Prisma__withdrawalCartClient<$Result.GetResult<Prisma.$withdrawalCartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the withdrawalCartItems model
   */
  interface withdrawalCartItemsFieldRefs {
    readonly id: FieldRef<"withdrawalCartItems", 'Int'>
    readonly itemId: FieldRef<"withdrawalCartItems", 'Int'>
    readonly genericName: FieldRef<"withdrawalCartItems", 'String'>
    readonly unit: FieldRef<"withdrawalCartItems", 'String'>
    readonly category: FieldRef<"withdrawalCartItems", 'String'>
    readonly quantity: FieldRef<"withdrawalCartItems", 'Int'>
    readonly expireDate: FieldRef<"withdrawalCartItems", 'String'>
    readonly cartId: FieldRef<"withdrawalCartItems", 'Int'>
    readonly maxQuantity: FieldRef<"withdrawalCartItems", 'Int'>
    readonly itemParentId: FieldRef<"withdrawalCartItems", 'String'>
  }
    

  // Custom InputTypes
  /**
   * withdrawalCartItems findUnique
   */
  export type withdrawalCartItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalCartItems
     */
    select?: withdrawalCartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalCartItems
     */
    omit?: withdrawalCartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalCartItemsInclude<ExtArgs> | null
    /**
     * Filter, which withdrawalCartItems to fetch.
     */
    where: withdrawalCartItemsWhereUniqueInput
  }

  /**
   * withdrawalCartItems findUniqueOrThrow
   */
  export type withdrawalCartItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalCartItems
     */
    select?: withdrawalCartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalCartItems
     */
    omit?: withdrawalCartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalCartItemsInclude<ExtArgs> | null
    /**
     * Filter, which withdrawalCartItems to fetch.
     */
    where: withdrawalCartItemsWhereUniqueInput
  }

  /**
   * withdrawalCartItems findFirst
   */
  export type withdrawalCartItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalCartItems
     */
    select?: withdrawalCartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalCartItems
     */
    omit?: withdrawalCartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalCartItemsInclude<ExtArgs> | null
    /**
     * Filter, which withdrawalCartItems to fetch.
     */
    where?: withdrawalCartItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of withdrawalCartItems to fetch.
     */
    orderBy?: withdrawalCartItemsOrderByWithRelationInput | withdrawalCartItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for withdrawalCartItems.
     */
    cursor?: withdrawalCartItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` withdrawalCartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` withdrawalCartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of withdrawalCartItems.
     */
    distinct?: WithdrawalCartItemsScalarFieldEnum | WithdrawalCartItemsScalarFieldEnum[]
  }

  /**
   * withdrawalCartItems findFirstOrThrow
   */
  export type withdrawalCartItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalCartItems
     */
    select?: withdrawalCartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalCartItems
     */
    omit?: withdrawalCartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalCartItemsInclude<ExtArgs> | null
    /**
     * Filter, which withdrawalCartItems to fetch.
     */
    where?: withdrawalCartItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of withdrawalCartItems to fetch.
     */
    orderBy?: withdrawalCartItemsOrderByWithRelationInput | withdrawalCartItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for withdrawalCartItems.
     */
    cursor?: withdrawalCartItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` withdrawalCartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` withdrawalCartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of withdrawalCartItems.
     */
    distinct?: WithdrawalCartItemsScalarFieldEnum | WithdrawalCartItemsScalarFieldEnum[]
  }

  /**
   * withdrawalCartItems findMany
   */
  export type withdrawalCartItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalCartItems
     */
    select?: withdrawalCartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalCartItems
     */
    omit?: withdrawalCartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalCartItemsInclude<ExtArgs> | null
    /**
     * Filter, which withdrawalCartItems to fetch.
     */
    where?: withdrawalCartItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of withdrawalCartItems to fetch.
     */
    orderBy?: withdrawalCartItemsOrderByWithRelationInput | withdrawalCartItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing withdrawalCartItems.
     */
    cursor?: withdrawalCartItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` withdrawalCartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` withdrawalCartItems.
     */
    skip?: number
    distinct?: WithdrawalCartItemsScalarFieldEnum | WithdrawalCartItemsScalarFieldEnum[]
  }

  /**
   * withdrawalCartItems create
   */
  export type withdrawalCartItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalCartItems
     */
    select?: withdrawalCartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalCartItems
     */
    omit?: withdrawalCartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalCartItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a withdrawalCartItems.
     */
    data: XOR<withdrawalCartItemsCreateInput, withdrawalCartItemsUncheckedCreateInput>
  }

  /**
   * withdrawalCartItems createMany
   */
  export type withdrawalCartItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many withdrawalCartItems.
     */
    data: withdrawalCartItemsCreateManyInput | withdrawalCartItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * withdrawalCartItems update
   */
  export type withdrawalCartItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalCartItems
     */
    select?: withdrawalCartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalCartItems
     */
    omit?: withdrawalCartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalCartItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a withdrawalCartItems.
     */
    data: XOR<withdrawalCartItemsUpdateInput, withdrawalCartItemsUncheckedUpdateInput>
    /**
     * Choose, which withdrawalCartItems to update.
     */
    where: withdrawalCartItemsWhereUniqueInput
  }

  /**
   * withdrawalCartItems updateMany
   */
  export type withdrawalCartItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update withdrawalCartItems.
     */
    data: XOR<withdrawalCartItemsUpdateManyMutationInput, withdrawalCartItemsUncheckedUpdateManyInput>
    /**
     * Filter which withdrawalCartItems to update
     */
    where?: withdrawalCartItemsWhereInput
    /**
     * Limit how many withdrawalCartItems to update.
     */
    limit?: number
  }

  /**
   * withdrawalCartItems upsert
   */
  export type withdrawalCartItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalCartItems
     */
    select?: withdrawalCartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalCartItems
     */
    omit?: withdrawalCartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalCartItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the withdrawalCartItems to update in case it exists.
     */
    where: withdrawalCartItemsWhereUniqueInput
    /**
     * In case the withdrawalCartItems found by the `where` argument doesn't exist, create a new withdrawalCartItems with this data.
     */
    create: XOR<withdrawalCartItemsCreateInput, withdrawalCartItemsUncheckedCreateInput>
    /**
     * In case the withdrawalCartItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<withdrawalCartItemsUpdateInput, withdrawalCartItemsUncheckedUpdateInput>
  }

  /**
   * withdrawalCartItems delete
   */
  export type withdrawalCartItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalCartItems
     */
    select?: withdrawalCartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalCartItems
     */
    omit?: withdrawalCartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalCartItemsInclude<ExtArgs> | null
    /**
     * Filter which withdrawalCartItems to delete.
     */
    where: withdrawalCartItemsWhereUniqueInput
  }

  /**
   * withdrawalCartItems deleteMany
   */
  export type withdrawalCartItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which withdrawalCartItems to delete
     */
    where?: withdrawalCartItemsWhereInput
    /**
     * Limit how many withdrawalCartItems to delete.
     */
    limit?: number
  }

  /**
   * withdrawalCartItems without action
   */
  export type withdrawalCartItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawalCartItems
     */
    select?: withdrawalCartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawalCartItems
     */
    omit?: withdrawalCartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalCartItemsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    usersecret: 'usersecret',
    authority: 'authority'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const ProvidorScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ProvidorScalarFieldEnum = (typeof ProvidorScalarFieldEnum)[keyof typeof ProvidorScalarFieldEnum]


  export const ItemParentScalarFieldEnum: {
    id: 'id',
    genericName: 'genericName',
    category: 'category',
    unit: 'unit',
    latestWithdrawal: 'latestWithdrawal',
    latestReceive: 'latestReceive',
    mainStockSpecific: 'mainStockSpecific'
  };

  export type ItemParentScalarFieldEnum = (typeof ItemParentScalarFieldEnum)[keyof typeof ItemParentScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    itemId: 'itemId',
    genericName: 'genericName',
    unitInfo: 'unitInfo',
    unit: 'unit',
    category: 'category',
    quantity: 'quantity',
    expireDate: 'expireDate',
    providor: 'providor',
    receiveDate: 'receiveDate',
    itemParentId: 'itemParentId',
    stockId: 'stockId',
    receiptId: 'receiptId',
    withdrawalId: 'withdrawalId'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const ReceiptScalarFieldEnum: {
    id: 'id',
    date: 'date',
    providorName: 'providorName',
    providorId: 'providorId'
  };

  export type ReceiptScalarFieldEnum = (typeof ReceiptScalarFieldEnum)[keyof typeof ReceiptScalarFieldEnum]


  export const ReceiptItemsScalarFieldEnum: {
    id: 'id',
    genericName: 'genericName',
    unit: 'unit',
    unitInfo: 'unitInfo',
    category: 'category',
    quantity: 'quantity',
    expireDate: 'expireDate',
    receiptId: 'receiptId'
  };

  export type ReceiptItemsScalarFieldEnum = (typeof ReceiptItemsScalarFieldEnum)[keyof typeof ReceiptItemsScalarFieldEnum]


  export const ReceiptCartScalarFieldEnum: {
    id: 'id',
    date: 'date',
    providorName: 'providorName'
  };

  export type ReceiptCartScalarFieldEnum = (typeof ReceiptCartScalarFieldEnum)[keyof typeof ReceiptCartScalarFieldEnum]


  export const ReceiptCartItemsScalarFieldEnum: {
    id: 'id',
    genericName: 'genericName',
    unit: 'unit',
    unitInfo: 'unitInfo',
    category: 'category',
    quantity: 'quantity',
    expireDate: 'expireDate',
    cartId: 'cartId'
  };

  export type ReceiptCartItemsScalarFieldEnum = (typeof ReceiptCartItemsScalarFieldEnum)[keyof typeof ReceiptCartItemsScalarFieldEnum]


  export const WithdrawalScalarFieldEnum: {
    id: 'id',
    departmentName: 'departmentName',
    date: 'date',
    departmentId: 'departmentId',
    stockId: 'stockId'
  };

  export type WithdrawalScalarFieldEnum = (typeof WithdrawalScalarFieldEnum)[keyof typeof WithdrawalScalarFieldEnum]


  export const WithdrawalItemsScalarFieldEnum: {
    id: 'id',
    itemId: 'itemId',
    genericName: 'genericName',
    unit: 'unit',
    category: 'category',
    quantity: 'quantity',
    expireDate: 'expireDate',
    withdrawalId: 'withdrawalId',
    itemParentId: 'itemParentId',
    withdrawDate: 'withdrawDate',
    stockId: 'stockId'
  };

  export type WithdrawalItemsScalarFieldEnum = (typeof WithdrawalItemsScalarFieldEnum)[keyof typeof WithdrawalItemsScalarFieldEnum]


  export const WithdrawalCartScalarFieldEnum: {
    id: 'id',
    date: 'date',
    departmentName: 'departmentName',
    stockId: 'stockId'
  };

  export type WithdrawalCartScalarFieldEnum = (typeof WithdrawalCartScalarFieldEnum)[keyof typeof WithdrawalCartScalarFieldEnum]


  export const WithdrawalCartItemsScalarFieldEnum: {
    id: 'id',
    itemId: 'itemId',
    genericName: 'genericName',
    unit: 'unit',
    category: 'category',
    quantity: 'quantity',
    expireDate: 'expireDate',
    cartId: 'cartId',
    maxQuantity: 'maxQuantity',
    itemParentId: 'itemParentId'
  };

  export type WithdrawalCartItemsScalarFieldEnum = (typeof WithdrawalCartItemsScalarFieldEnum)[keyof typeof WithdrawalCartItemsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const userOrderByRelevanceFieldEnum: {
    username: 'username',
    usersecret: 'usersecret',
    authority: 'authority'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  export const departmentOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type departmentOrderByRelevanceFieldEnum = (typeof departmentOrderByRelevanceFieldEnum)[keyof typeof departmentOrderByRelevanceFieldEnum]


  export const providorOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type providorOrderByRelevanceFieldEnum = (typeof providorOrderByRelevanceFieldEnum)[keyof typeof providorOrderByRelevanceFieldEnum]


  export const itemParentOrderByRelevanceFieldEnum: {
    id: 'id',
    genericName: 'genericName',
    category: 'category',
    unit: 'unit',
    latestWithdrawal: 'latestWithdrawal',
    latestReceive: 'latestReceive'
  };

  export type itemParentOrderByRelevanceFieldEnum = (typeof itemParentOrderByRelevanceFieldEnum)[keyof typeof itemParentOrderByRelevanceFieldEnum]


  export const itemOrderByRelevanceFieldEnum: {
    genericName: 'genericName',
    unitInfo: 'unitInfo',
    unit: 'unit',
    category: 'category',
    expireDate: 'expireDate',
    providor: 'providor',
    receiveDate: 'receiveDate',
    itemParentId: 'itemParentId'
  };

  export type itemOrderByRelevanceFieldEnum = (typeof itemOrderByRelevanceFieldEnum)[keyof typeof itemOrderByRelevanceFieldEnum]


  export const receiptOrderByRelevanceFieldEnum: {
    date: 'date',
    providorName: 'providorName',
    providorId: 'providorId'
  };

  export type receiptOrderByRelevanceFieldEnum = (typeof receiptOrderByRelevanceFieldEnum)[keyof typeof receiptOrderByRelevanceFieldEnum]


  export const receiptItemsOrderByRelevanceFieldEnum: {
    id: 'id',
    genericName: 'genericName',
    unit: 'unit',
    unitInfo: 'unitInfo',
    category: 'category',
    expireDate: 'expireDate'
  };

  export type receiptItemsOrderByRelevanceFieldEnum = (typeof receiptItemsOrderByRelevanceFieldEnum)[keyof typeof receiptItemsOrderByRelevanceFieldEnum]


  export const receiptCartOrderByRelevanceFieldEnum: {
    date: 'date',
    providorName: 'providorName'
  };

  export type receiptCartOrderByRelevanceFieldEnum = (typeof receiptCartOrderByRelevanceFieldEnum)[keyof typeof receiptCartOrderByRelevanceFieldEnum]


  export const receiptCartItemsOrderByRelevanceFieldEnum: {
    id: 'id',
    genericName: 'genericName',
    unit: 'unit',
    unitInfo: 'unitInfo',
    category: 'category',
    expireDate: 'expireDate'
  };

  export type receiptCartItemsOrderByRelevanceFieldEnum = (typeof receiptCartItemsOrderByRelevanceFieldEnum)[keyof typeof receiptCartItemsOrderByRelevanceFieldEnum]


  export const withdrawalOrderByRelevanceFieldEnum: {
    departmentName: 'departmentName',
    date: 'date',
    departmentId: 'departmentId'
  };

  export type withdrawalOrderByRelevanceFieldEnum = (typeof withdrawalOrderByRelevanceFieldEnum)[keyof typeof withdrawalOrderByRelevanceFieldEnum]


  export const withdrawalItemsOrderByRelevanceFieldEnum: {
    id: 'id',
    genericName: 'genericName',
    unit: 'unit',
    category: 'category',
    expireDate: 'expireDate',
    itemParentId: 'itemParentId',
    withdrawDate: 'withdrawDate'
  };

  export type withdrawalItemsOrderByRelevanceFieldEnum = (typeof withdrawalItemsOrderByRelevanceFieldEnum)[keyof typeof withdrawalItemsOrderByRelevanceFieldEnum]


  export const withdrawalCartOrderByRelevanceFieldEnum: {
    date: 'date',
    departmentName: 'departmentName'
  };

  export type withdrawalCartOrderByRelevanceFieldEnum = (typeof withdrawalCartOrderByRelevanceFieldEnum)[keyof typeof withdrawalCartOrderByRelevanceFieldEnum]


  export const withdrawalCartItemsOrderByRelevanceFieldEnum: {
    genericName: 'genericName',
    unit: 'unit',
    category: 'category',
    expireDate: 'expireDate',
    itemParentId: 'itemParentId'
  };

  export type withdrawalCartItemsOrderByRelevanceFieldEnum = (typeof withdrawalCartItemsOrderByRelevanceFieldEnum)[keyof typeof withdrawalCartItemsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    username?: StringFilter<"user"> | string
    usersecret?: StringFilter<"user"> | string
    authority?: StringNullableFilter<"user"> | string | null
    items?: ItemListRelationFilter
    withdrawals?: WithdrawalListRelationFilter
    withdrawalItems?: WithdrawalItemsListRelationFilter
    withdrawalCart?: WithdrawalCartListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    usersecret?: SortOrder
    authority?: SortOrderInput | SortOrder
    items?: itemOrderByRelationAggregateInput
    withdrawals?: withdrawalOrderByRelationAggregateInput
    withdrawalItems?: withdrawalItemsOrderByRelationAggregateInput
    withdrawalCart?: withdrawalCartOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    username?: StringFilter<"user"> | string
    usersecret?: StringFilter<"user"> | string
    authority?: StringNullableFilter<"user"> | string | null
    items?: ItemListRelationFilter
    withdrawals?: WithdrawalListRelationFilter
    withdrawalItems?: WithdrawalItemsListRelationFilter
    withdrawalCart?: WithdrawalCartListRelationFilter
  }, "id">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    usersecret?: SortOrder
    authority?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    username?: StringWithAggregatesFilter<"user"> | string
    usersecret?: StringWithAggregatesFilter<"user"> | string
    authority?: StringNullableWithAggregatesFilter<"user"> | string | null
  }

  export type departmentWhereInput = {
    AND?: departmentWhereInput | departmentWhereInput[]
    OR?: departmentWhereInput[]
    NOT?: departmentWhereInput | departmentWhereInput[]
    id?: StringFilter<"department"> | string
    name?: StringFilter<"department"> | string
    withdrawals?: WithdrawalListRelationFilter
  }

  export type departmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    withdrawals?: withdrawalOrderByRelationAggregateInput
    _relevance?: departmentOrderByRelevanceInput
  }

  export type departmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: departmentWhereInput | departmentWhereInput[]
    OR?: departmentWhereInput[]
    NOT?: departmentWhereInput | departmentWhereInput[]
    withdrawals?: WithdrawalListRelationFilter
  }, "id" | "id" | "name">

  export type departmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: departmentCountOrderByAggregateInput
    _max?: departmentMaxOrderByAggregateInput
    _min?: departmentMinOrderByAggregateInput
  }

  export type departmentScalarWhereWithAggregatesInput = {
    AND?: departmentScalarWhereWithAggregatesInput | departmentScalarWhereWithAggregatesInput[]
    OR?: departmentScalarWhereWithAggregatesInput[]
    NOT?: departmentScalarWhereWithAggregatesInput | departmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"department"> | string
    name?: StringWithAggregatesFilter<"department"> | string
  }

  export type providorWhereInput = {
    AND?: providorWhereInput | providorWhereInput[]
    OR?: providorWhereInput[]
    NOT?: providorWhereInput | providorWhereInput[]
    id?: StringFilter<"providor"> | string
    name?: StringFilter<"providor"> | string
    receipts?: ReceiptListRelationFilter
  }

  export type providorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    receipts?: receiptOrderByRelationAggregateInput
    _relevance?: providorOrderByRelevanceInput
  }

  export type providorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: providorWhereInput | providorWhereInput[]
    OR?: providorWhereInput[]
    NOT?: providorWhereInput | providorWhereInput[]
    receipts?: ReceiptListRelationFilter
  }, "id" | "id" | "name">

  export type providorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: providorCountOrderByAggregateInput
    _max?: providorMaxOrderByAggregateInput
    _min?: providorMinOrderByAggregateInput
  }

  export type providorScalarWhereWithAggregatesInput = {
    AND?: providorScalarWhereWithAggregatesInput | providorScalarWhereWithAggregatesInput[]
    OR?: providorScalarWhereWithAggregatesInput[]
    NOT?: providorScalarWhereWithAggregatesInput | providorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"providor"> | string
    name?: StringWithAggregatesFilter<"providor"> | string
  }

  export type itemParentWhereInput = {
    AND?: itemParentWhereInput | itemParentWhereInput[]
    OR?: itemParentWhereInput[]
    NOT?: itemParentWhereInput | itemParentWhereInput[]
    id?: StringFilter<"itemParent"> | string
    genericName?: StringFilter<"itemParent"> | string
    category?: StringFilter<"itemParent"> | string
    unit?: StringFilter<"itemParent"> | string
    latestWithdrawal?: StringNullableFilter<"itemParent"> | string | null
    latestReceive?: StringNullableFilter<"itemParent"> | string | null
    mainStockSpecific?: BoolFilter<"itemParent"> | boolean
    items?: ItemListRelationFilter
    withdrawals?: WithdrawalItemsListRelationFilter
  }

  export type itemParentOrderByWithRelationInput = {
    id?: SortOrder
    genericName?: SortOrder
    category?: SortOrder
    unit?: SortOrder
    latestWithdrawal?: SortOrderInput | SortOrder
    latestReceive?: SortOrderInput | SortOrder
    mainStockSpecific?: SortOrder
    items?: itemOrderByRelationAggregateInput
    withdrawals?: withdrawalItemsOrderByRelationAggregateInput
    _relevance?: itemParentOrderByRelevanceInput
  }

  export type itemParentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    genericName?: string
    AND?: itemParentWhereInput | itemParentWhereInput[]
    OR?: itemParentWhereInput[]
    NOT?: itemParentWhereInput | itemParentWhereInput[]
    category?: StringFilter<"itemParent"> | string
    unit?: StringFilter<"itemParent"> | string
    latestWithdrawal?: StringNullableFilter<"itemParent"> | string | null
    latestReceive?: StringNullableFilter<"itemParent"> | string | null
    mainStockSpecific?: BoolFilter<"itemParent"> | boolean
    items?: ItemListRelationFilter
    withdrawals?: WithdrawalItemsListRelationFilter
  }, "id" | "id" | "genericName">

  export type itemParentOrderByWithAggregationInput = {
    id?: SortOrder
    genericName?: SortOrder
    category?: SortOrder
    unit?: SortOrder
    latestWithdrawal?: SortOrderInput | SortOrder
    latestReceive?: SortOrderInput | SortOrder
    mainStockSpecific?: SortOrder
    _count?: itemParentCountOrderByAggregateInput
    _max?: itemParentMaxOrderByAggregateInput
    _min?: itemParentMinOrderByAggregateInput
  }

  export type itemParentScalarWhereWithAggregatesInput = {
    AND?: itemParentScalarWhereWithAggregatesInput | itemParentScalarWhereWithAggregatesInput[]
    OR?: itemParentScalarWhereWithAggregatesInput[]
    NOT?: itemParentScalarWhereWithAggregatesInput | itemParentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"itemParent"> | string
    genericName?: StringWithAggregatesFilter<"itemParent"> | string
    category?: StringWithAggregatesFilter<"itemParent"> | string
    unit?: StringWithAggregatesFilter<"itemParent"> | string
    latestWithdrawal?: StringNullableWithAggregatesFilter<"itemParent"> | string | null
    latestReceive?: StringNullableWithAggregatesFilter<"itemParent"> | string | null
    mainStockSpecific?: BoolWithAggregatesFilter<"itemParent"> | boolean
  }

  export type itemWhereInput = {
    AND?: itemWhereInput | itemWhereInput[]
    OR?: itemWhereInput[]
    NOT?: itemWhereInput | itemWhereInput[]
    id?: IntFilter<"item"> | number
    itemId?: IntNullableFilter<"item"> | number | null
    genericName?: StringFilter<"item"> | string
    unitInfo?: StringFilter<"item"> | string
    unit?: StringFilter<"item"> | string
    category?: StringFilter<"item"> | string
    quantity?: IntFilter<"item"> | number
    expireDate?: StringNullableFilter<"item"> | string | null
    providor?: StringFilter<"item"> | string
    receiveDate?: StringFilter<"item"> | string
    itemParentId?: StringFilter<"item"> | string
    stockId?: IntFilter<"item"> | number
    receiptId?: IntNullableFilter<"item"> | number | null
    withdrawalId?: IntNullableFilter<"item"> | number | null
    withdrawal?: XOR<WithdrawalNullableScalarRelationFilter, withdrawalWhereInput> | null
    stock?: XOR<UserScalarRelationFilter, userWhereInput>
    itemParent?: XOR<ItemParentScalarRelationFilter, itemParentWhereInput>
    receipt?: XOR<ReceiptNullableScalarRelationFilter, receiptWhereInput> | null
  }

  export type itemOrderByWithRelationInput = {
    id?: SortOrder
    itemId?: SortOrderInput | SortOrder
    genericName?: SortOrder
    unitInfo?: SortOrder
    unit?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    expireDate?: SortOrderInput | SortOrder
    providor?: SortOrder
    receiveDate?: SortOrder
    itemParentId?: SortOrder
    stockId?: SortOrder
    receiptId?: SortOrderInput | SortOrder
    withdrawalId?: SortOrderInput | SortOrder
    withdrawal?: withdrawalOrderByWithRelationInput
    stock?: userOrderByWithRelationInput
    itemParent?: itemParentOrderByWithRelationInput
    receipt?: receiptOrderByWithRelationInput
    _relevance?: itemOrderByRelevanceInput
  }

  export type itemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: itemWhereInput | itemWhereInput[]
    OR?: itemWhereInput[]
    NOT?: itemWhereInput | itemWhereInput[]
    itemId?: IntNullableFilter<"item"> | number | null
    genericName?: StringFilter<"item"> | string
    unitInfo?: StringFilter<"item"> | string
    unit?: StringFilter<"item"> | string
    category?: StringFilter<"item"> | string
    quantity?: IntFilter<"item"> | number
    expireDate?: StringNullableFilter<"item"> | string | null
    providor?: StringFilter<"item"> | string
    receiveDate?: StringFilter<"item"> | string
    itemParentId?: StringFilter<"item"> | string
    stockId?: IntFilter<"item"> | number
    receiptId?: IntNullableFilter<"item"> | number | null
    withdrawalId?: IntNullableFilter<"item"> | number | null
    withdrawal?: XOR<WithdrawalNullableScalarRelationFilter, withdrawalWhereInput> | null
    stock?: XOR<UserScalarRelationFilter, userWhereInput>
    itemParent?: XOR<ItemParentScalarRelationFilter, itemParentWhereInput>
    receipt?: XOR<ReceiptNullableScalarRelationFilter, receiptWhereInput> | null
  }, "id">

  export type itemOrderByWithAggregationInput = {
    id?: SortOrder
    itemId?: SortOrderInput | SortOrder
    genericName?: SortOrder
    unitInfo?: SortOrder
    unit?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    expireDate?: SortOrderInput | SortOrder
    providor?: SortOrder
    receiveDate?: SortOrder
    itemParentId?: SortOrder
    stockId?: SortOrder
    receiptId?: SortOrderInput | SortOrder
    withdrawalId?: SortOrderInput | SortOrder
    _count?: itemCountOrderByAggregateInput
    _avg?: itemAvgOrderByAggregateInput
    _max?: itemMaxOrderByAggregateInput
    _min?: itemMinOrderByAggregateInput
    _sum?: itemSumOrderByAggregateInput
  }

  export type itemScalarWhereWithAggregatesInput = {
    AND?: itemScalarWhereWithAggregatesInput | itemScalarWhereWithAggregatesInput[]
    OR?: itemScalarWhereWithAggregatesInput[]
    NOT?: itemScalarWhereWithAggregatesInput | itemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"item"> | number
    itemId?: IntNullableWithAggregatesFilter<"item"> | number | null
    genericName?: StringWithAggregatesFilter<"item"> | string
    unitInfo?: StringWithAggregatesFilter<"item"> | string
    unit?: StringWithAggregatesFilter<"item"> | string
    category?: StringWithAggregatesFilter<"item"> | string
    quantity?: IntWithAggregatesFilter<"item"> | number
    expireDate?: StringNullableWithAggregatesFilter<"item"> | string | null
    providor?: StringWithAggregatesFilter<"item"> | string
    receiveDate?: StringWithAggregatesFilter<"item"> | string
    itemParentId?: StringWithAggregatesFilter<"item"> | string
    stockId?: IntWithAggregatesFilter<"item"> | number
    receiptId?: IntNullableWithAggregatesFilter<"item"> | number | null
    withdrawalId?: IntNullableWithAggregatesFilter<"item"> | number | null
  }

  export type receiptWhereInput = {
    AND?: receiptWhereInput | receiptWhereInput[]
    OR?: receiptWhereInput[]
    NOT?: receiptWhereInput | receiptWhereInput[]
    id?: IntFilter<"receipt"> | number
    date?: StringFilter<"receipt"> | string
    providorName?: StringFilter<"receipt"> | string
    providorId?: StringFilter<"receipt"> | string
    items?: ReceiptItemsListRelationFilter
    stockItmes?: ItemListRelationFilter
    providor?: XOR<ProvidorScalarRelationFilter, providorWhereInput>
  }

  export type receiptOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    providorName?: SortOrder
    providorId?: SortOrder
    items?: receiptItemsOrderByRelationAggregateInput
    stockItmes?: itemOrderByRelationAggregateInput
    providor?: providorOrderByWithRelationInput
    _relevance?: receiptOrderByRelevanceInput
  }

  export type receiptWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: receiptWhereInput | receiptWhereInput[]
    OR?: receiptWhereInput[]
    NOT?: receiptWhereInput | receiptWhereInput[]
    date?: StringFilter<"receipt"> | string
    providorName?: StringFilter<"receipt"> | string
    providorId?: StringFilter<"receipt"> | string
    items?: ReceiptItemsListRelationFilter
    stockItmes?: ItemListRelationFilter
    providor?: XOR<ProvidorScalarRelationFilter, providorWhereInput>
  }, "id" | "id">

  export type receiptOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    providorName?: SortOrder
    providorId?: SortOrder
    _count?: receiptCountOrderByAggregateInput
    _avg?: receiptAvgOrderByAggregateInput
    _max?: receiptMaxOrderByAggregateInput
    _min?: receiptMinOrderByAggregateInput
    _sum?: receiptSumOrderByAggregateInput
  }

  export type receiptScalarWhereWithAggregatesInput = {
    AND?: receiptScalarWhereWithAggregatesInput | receiptScalarWhereWithAggregatesInput[]
    OR?: receiptScalarWhereWithAggregatesInput[]
    NOT?: receiptScalarWhereWithAggregatesInput | receiptScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"receipt"> | number
    date?: StringWithAggregatesFilter<"receipt"> | string
    providorName?: StringWithAggregatesFilter<"receipt"> | string
    providorId?: StringWithAggregatesFilter<"receipt"> | string
  }

  export type receiptItemsWhereInput = {
    AND?: receiptItemsWhereInput | receiptItemsWhereInput[]
    OR?: receiptItemsWhereInput[]
    NOT?: receiptItemsWhereInput | receiptItemsWhereInput[]
    id?: StringFilter<"receiptItems"> | string
    genericName?: StringFilter<"receiptItems"> | string
    unit?: StringFilter<"receiptItems"> | string
    unitInfo?: StringFilter<"receiptItems"> | string
    category?: StringFilter<"receiptItems"> | string
    quantity?: IntFilter<"receiptItems"> | number
    expireDate?: StringNullableFilter<"receiptItems"> | string | null
    receiptId?: IntFilter<"receiptItems"> | number
    receipt?: XOR<ReceiptScalarRelationFilter, receiptWhereInput>
  }

  export type receiptItemsOrderByWithRelationInput = {
    id?: SortOrder
    genericName?: SortOrder
    unit?: SortOrder
    unitInfo?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    expireDate?: SortOrderInput | SortOrder
    receiptId?: SortOrder
    receipt?: receiptOrderByWithRelationInput
    _relevance?: receiptItemsOrderByRelevanceInput
  }

  export type receiptItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: receiptItemsWhereInput | receiptItemsWhereInput[]
    OR?: receiptItemsWhereInput[]
    NOT?: receiptItemsWhereInput | receiptItemsWhereInput[]
    genericName?: StringFilter<"receiptItems"> | string
    unit?: StringFilter<"receiptItems"> | string
    unitInfo?: StringFilter<"receiptItems"> | string
    category?: StringFilter<"receiptItems"> | string
    quantity?: IntFilter<"receiptItems"> | number
    expireDate?: StringNullableFilter<"receiptItems"> | string | null
    receiptId?: IntFilter<"receiptItems"> | number
    receipt?: XOR<ReceiptScalarRelationFilter, receiptWhereInput>
  }, "id" | "id">

  export type receiptItemsOrderByWithAggregationInput = {
    id?: SortOrder
    genericName?: SortOrder
    unit?: SortOrder
    unitInfo?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    expireDate?: SortOrderInput | SortOrder
    receiptId?: SortOrder
    _count?: receiptItemsCountOrderByAggregateInput
    _avg?: receiptItemsAvgOrderByAggregateInput
    _max?: receiptItemsMaxOrderByAggregateInput
    _min?: receiptItemsMinOrderByAggregateInput
    _sum?: receiptItemsSumOrderByAggregateInput
  }

  export type receiptItemsScalarWhereWithAggregatesInput = {
    AND?: receiptItemsScalarWhereWithAggregatesInput | receiptItemsScalarWhereWithAggregatesInput[]
    OR?: receiptItemsScalarWhereWithAggregatesInput[]
    NOT?: receiptItemsScalarWhereWithAggregatesInput | receiptItemsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"receiptItems"> | string
    genericName?: StringWithAggregatesFilter<"receiptItems"> | string
    unit?: StringWithAggregatesFilter<"receiptItems"> | string
    unitInfo?: StringWithAggregatesFilter<"receiptItems"> | string
    category?: StringWithAggregatesFilter<"receiptItems"> | string
    quantity?: IntWithAggregatesFilter<"receiptItems"> | number
    expireDate?: StringNullableWithAggregatesFilter<"receiptItems"> | string | null
    receiptId?: IntWithAggregatesFilter<"receiptItems"> | number
  }

  export type receiptCartWhereInput = {
    AND?: receiptCartWhereInput | receiptCartWhereInput[]
    OR?: receiptCartWhereInput[]
    NOT?: receiptCartWhereInput | receiptCartWhereInput[]
    id?: IntFilter<"receiptCart"> | number
    date?: StringNullableFilter<"receiptCart"> | string | null
    providorName?: StringNullableFilter<"receiptCart"> | string | null
    items?: ReceiptCartItemsListRelationFilter
  }

  export type receiptCartOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrderInput | SortOrder
    providorName?: SortOrderInput | SortOrder
    items?: receiptCartItemsOrderByRelationAggregateInput
    _relevance?: receiptCartOrderByRelevanceInput
  }

  export type receiptCartWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: receiptCartWhereInput | receiptCartWhereInput[]
    OR?: receiptCartWhereInput[]
    NOT?: receiptCartWhereInput | receiptCartWhereInput[]
    date?: StringNullableFilter<"receiptCart"> | string | null
    providorName?: StringNullableFilter<"receiptCart"> | string | null
    items?: ReceiptCartItemsListRelationFilter
  }, "id" | "id">

  export type receiptCartOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrderInput | SortOrder
    providorName?: SortOrderInput | SortOrder
    _count?: receiptCartCountOrderByAggregateInput
    _avg?: receiptCartAvgOrderByAggregateInput
    _max?: receiptCartMaxOrderByAggregateInput
    _min?: receiptCartMinOrderByAggregateInput
    _sum?: receiptCartSumOrderByAggregateInput
  }

  export type receiptCartScalarWhereWithAggregatesInput = {
    AND?: receiptCartScalarWhereWithAggregatesInput | receiptCartScalarWhereWithAggregatesInput[]
    OR?: receiptCartScalarWhereWithAggregatesInput[]
    NOT?: receiptCartScalarWhereWithAggregatesInput | receiptCartScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"receiptCart"> | number
    date?: StringNullableWithAggregatesFilter<"receiptCart"> | string | null
    providorName?: StringNullableWithAggregatesFilter<"receiptCart"> | string | null
  }

  export type receiptCartItemsWhereInput = {
    AND?: receiptCartItemsWhereInput | receiptCartItemsWhereInput[]
    OR?: receiptCartItemsWhereInput[]
    NOT?: receiptCartItemsWhereInput | receiptCartItemsWhereInput[]
    id?: StringFilter<"receiptCartItems"> | string
    genericName?: StringFilter<"receiptCartItems"> | string
    unit?: StringFilter<"receiptCartItems"> | string
    unitInfo?: StringFilter<"receiptCartItems"> | string
    category?: StringNullableFilter<"receiptCartItems"> | string | null
    quantity?: IntFilter<"receiptCartItems"> | number
    expireDate?: StringNullableFilter<"receiptCartItems"> | string | null
    cartId?: IntFilter<"receiptCartItems"> | number
    cart?: XOR<ReceiptCartScalarRelationFilter, receiptCartWhereInput>
  }

  export type receiptCartItemsOrderByWithRelationInput = {
    id?: SortOrder
    genericName?: SortOrder
    unit?: SortOrder
    unitInfo?: SortOrder
    category?: SortOrderInput | SortOrder
    quantity?: SortOrder
    expireDate?: SortOrderInput | SortOrder
    cartId?: SortOrder
    cart?: receiptCartOrderByWithRelationInput
    _relevance?: receiptCartItemsOrderByRelevanceInput
  }

  export type receiptCartItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: receiptCartItemsWhereInput | receiptCartItemsWhereInput[]
    OR?: receiptCartItemsWhereInput[]
    NOT?: receiptCartItemsWhereInput | receiptCartItemsWhereInput[]
    genericName?: StringFilter<"receiptCartItems"> | string
    unit?: StringFilter<"receiptCartItems"> | string
    unitInfo?: StringFilter<"receiptCartItems"> | string
    category?: StringNullableFilter<"receiptCartItems"> | string | null
    quantity?: IntFilter<"receiptCartItems"> | number
    expireDate?: StringNullableFilter<"receiptCartItems"> | string | null
    cartId?: IntFilter<"receiptCartItems"> | number
    cart?: XOR<ReceiptCartScalarRelationFilter, receiptCartWhereInput>
  }, "id" | "id">

  export type receiptCartItemsOrderByWithAggregationInput = {
    id?: SortOrder
    genericName?: SortOrder
    unit?: SortOrder
    unitInfo?: SortOrder
    category?: SortOrderInput | SortOrder
    quantity?: SortOrder
    expireDate?: SortOrderInput | SortOrder
    cartId?: SortOrder
    _count?: receiptCartItemsCountOrderByAggregateInput
    _avg?: receiptCartItemsAvgOrderByAggregateInput
    _max?: receiptCartItemsMaxOrderByAggregateInput
    _min?: receiptCartItemsMinOrderByAggregateInput
    _sum?: receiptCartItemsSumOrderByAggregateInput
  }

  export type receiptCartItemsScalarWhereWithAggregatesInput = {
    AND?: receiptCartItemsScalarWhereWithAggregatesInput | receiptCartItemsScalarWhereWithAggregatesInput[]
    OR?: receiptCartItemsScalarWhereWithAggregatesInput[]
    NOT?: receiptCartItemsScalarWhereWithAggregatesInput | receiptCartItemsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"receiptCartItems"> | string
    genericName?: StringWithAggregatesFilter<"receiptCartItems"> | string
    unit?: StringWithAggregatesFilter<"receiptCartItems"> | string
    unitInfo?: StringWithAggregatesFilter<"receiptCartItems"> | string
    category?: StringNullableWithAggregatesFilter<"receiptCartItems"> | string | null
    quantity?: IntWithAggregatesFilter<"receiptCartItems"> | number
    expireDate?: StringNullableWithAggregatesFilter<"receiptCartItems"> | string | null
    cartId?: IntWithAggregatesFilter<"receiptCartItems"> | number
  }

  export type withdrawalWhereInput = {
    AND?: withdrawalWhereInput | withdrawalWhereInput[]
    OR?: withdrawalWhereInput[]
    NOT?: withdrawalWhereInput | withdrawalWhereInput[]
    id?: IntFilter<"withdrawal"> | number
    departmentName?: StringFilter<"withdrawal"> | string
    date?: StringFilter<"withdrawal"> | string
    departmentId?: StringFilter<"withdrawal"> | string
    stockId?: IntFilter<"withdrawal"> | number
    department?: XOR<DepartmentScalarRelationFilter, departmentWhereInput>
    items?: WithdrawalItemsListRelationFilter
    stock?: XOR<UserScalarRelationFilter, userWhereInput>
    stockItmes?: ItemListRelationFilter
  }

  export type withdrawalOrderByWithRelationInput = {
    id?: SortOrder
    departmentName?: SortOrder
    date?: SortOrder
    departmentId?: SortOrder
    stockId?: SortOrder
    department?: departmentOrderByWithRelationInput
    items?: withdrawalItemsOrderByRelationAggregateInput
    stock?: userOrderByWithRelationInput
    stockItmes?: itemOrderByRelationAggregateInput
    _relevance?: withdrawalOrderByRelevanceInput
  }

  export type withdrawalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: withdrawalWhereInput | withdrawalWhereInput[]
    OR?: withdrawalWhereInput[]
    NOT?: withdrawalWhereInput | withdrawalWhereInput[]
    departmentName?: StringFilter<"withdrawal"> | string
    date?: StringFilter<"withdrawal"> | string
    departmentId?: StringFilter<"withdrawal"> | string
    stockId?: IntFilter<"withdrawal"> | number
    department?: XOR<DepartmentScalarRelationFilter, departmentWhereInput>
    items?: WithdrawalItemsListRelationFilter
    stock?: XOR<UserScalarRelationFilter, userWhereInput>
    stockItmes?: ItemListRelationFilter
  }, "id" | "id">

  export type withdrawalOrderByWithAggregationInput = {
    id?: SortOrder
    departmentName?: SortOrder
    date?: SortOrder
    departmentId?: SortOrder
    stockId?: SortOrder
    _count?: withdrawalCountOrderByAggregateInput
    _avg?: withdrawalAvgOrderByAggregateInput
    _max?: withdrawalMaxOrderByAggregateInput
    _min?: withdrawalMinOrderByAggregateInput
    _sum?: withdrawalSumOrderByAggregateInput
  }

  export type withdrawalScalarWhereWithAggregatesInput = {
    AND?: withdrawalScalarWhereWithAggregatesInput | withdrawalScalarWhereWithAggregatesInput[]
    OR?: withdrawalScalarWhereWithAggregatesInput[]
    NOT?: withdrawalScalarWhereWithAggregatesInput | withdrawalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"withdrawal"> | number
    departmentName?: StringWithAggregatesFilter<"withdrawal"> | string
    date?: StringWithAggregatesFilter<"withdrawal"> | string
    departmentId?: StringWithAggregatesFilter<"withdrawal"> | string
    stockId?: IntWithAggregatesFilter<"withdrawal"> | number
  }

  export type withdrawalItemsWhereInput = {
    AND?: withdrawalItemsWhereInput | withdrawalItemsWhereInput[]
    OR?: withdrawalItemsWhereInput[]
    NOT?: withdrawalItemsWhereInput | withdrawalItemsWhereInput[]
    id?: StringFilter<"withdrawalItems"> | string
    itemId?: IntFilter<"withdrawalItems"> | number
    genericName?: StringFilter<"withdrawalItems"> | string
    unit?: StringFilter<"withdrawalItems"> | string
    category?: StringNullableFilter<"withdrawalItems"> | string | null
    quantity?: IntFilter<"withdrawalItems"> | number
    expireDate?: StringNullableFilter<"withdrawalItems"> | string | null
    withdrawalId?: IntFilter<"withdrawalItems"> | number
    itemParentId?: StringFilter<"withdrawalItems"> | string
    withdrawDate?: StringNullableFilter<"withdrawalItems"> | string | null
    stockId?: IntNullableFilter<"withdrawalItems"> | number | null
    withdrawal?: XOR<WithdrawalScalarRelationFilter, withdrawalWhereInput>
    itemParent?: XOR<ItemParentScalarRelationFilter, itemParentWhereInput>
    stock?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }

  export type withdrawalItemsOrderByWithRelationInput = {
    id?: SortOrder
    itemId?: SortOrder
    genericName?: SortOrder
    unit?: SortOrder
    category?: SortOrderInput | SortOrder
    quantity?: SortOrder
    expireDate?: SortOrderInput | SortOrder
    withdrawalId?: SortOrder
    itemParentId?: SortOrder
    withdrawDate?: SortOrderInput | SortOrder
    stockId?: SortOrderInput | SortOrder
    withdrawal?: withdrawalOrderByWithRelationInput
    itemParent?: itemParentOrderByWithRelationInput
    stock?: userOrderByWithRelationInput
    _relevance?: withdrawalItemsOrderByRelevanceInput
  }

  export type withdrawalItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: withdrawalItemsWhereInput | withdrawalItemsWhereInput[]
    OR?: withdrawalItemsWhereInput[]
    NOT?: withdrawalItemsWhereInput | withdrawalItemsWhereInput[]
    itemId?: IntFilter<"withdrawalItems"> | number
    genericName?: StringFilter<"withdrawalItems"> | string
    unit?: StringFilter<"withdrawalItems"> | string
    category?: StringNullableFilter<"withdrawalItems"> | string | null
    quantity?: IntFilter<"withdrawalItems"> | number
    expireDate?: StringNullableFilter<"withdrawalItems"> | string | null
    withdrawalId?: IntFilter<"withdrawalItems"> | number
    itemParentId?: StringFilter<"withdrawalItems"> | string
    withdrawDate?: StringNullableFilter<"withdrawalItems"> | string | null
    stockId?: IntNullableFilter<"withdrawalItems"> | number | null
    withdrawal?: XOR<WithdrawalScalarRelationFilter, withdrawalWhereInput>
    itemParent?: XOR<ItemParentScalarRelationFilter, itemParentWhereInput>
    stock?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }, "id" | "id">

  export type withdrawalItemsOrderByWithAggregationInput = {
    id?: SortOrder
    itemId?: SortOrder
    genericName?: SortOrder
    unit?: SortOrder
    category?: SortOrderInput | SortOrder
    quantity?: SortOrder
    expireDate?: SortOrderInput | SortOrder
    withdrawalId?: SortOrder
    itemParentId?: SortOrder
    withdrawDate?: SortOrderInput | SortOrder
    stockId?: SortOrderInput | SortOrder
    _count?: withdrawalItemsCountOrderByAggregateInput
    _avg?: withdrawalItemsAvgOrderByAggregateInput
    _max?: withdrawalItemsMaxOrderByAggregateInput
    _min?: withdrawalItemsMinOrderByAggregateInput
    _sum?: withdrawalItemsSumOrderByAggregateInput
  }

  export type withdrawalItemsScalarWhereWithAggregatesInput = {
    AND?: withdrawalItemsScalarWhereWithAggregatesInput | withdrawalItemsScalarWhereWithAggregatesInput[]
    OR?: withdrawalItemsScalarWhereWithAggregatesInput[]
    NOT?: withdrawalItemsScalarWhereWithAggregatesInput | withdrawalItemsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"withdrawalItems"> | string
    itemId?: IntWithAggregatesFilter<"withdrawalItems"> | number
    genericName?: StringWithAggregatesFilter<"withdrawalItems"> | string
    unit?: StringWithAggregatesFilter<"withdrawalItems"> | string
    category?: StringNullableWithAggregatesFilter<"withdrawalItems"> | string | null
    quantity?: IntWithAggregatesFilter<"withdrawalItems"> | number
    expireDate?: StringNullableWithAggregatesFilter<"withdrawalItems"> | string | null
    withdrawalId?: IntWithAggregatesFilter<"withdrawalItems"> | number
    itemParentId?: StringWithAggregatesFilter<"withdrawalItems"> | string
    withdrawDate?: StringNullableWithAggregatesFilter<"withdrawalItems"> | string | null
    stockId?: IntNullableWithAggregatesFilter<"withdrawalItems"> | number | null
  }

  export type withdrawalCartWhereInput = {
    AND?: withdrawalCartWhereInput | withdrawalCartWhereInput[]
    OR?: withdrawalCartWhereInput[]
    NOT?: withdrawalCartWhereInput | withdrawalCartWhereInput[]
    id?: IntFilter<"withdrawalCart"> | number
    date?: StringNullableFilter<"withdrawalCart"> | string | null
    departmentName?: StringNullableFilter<"withdrawalCart"> | string | null
    stockId?: IntFilter<"withdrawalCart"> | number
    stock?: XOR<UserScalarRelationFilter, userWhereInput>
    items?: WithdrawalCartItemsListRelationFilter
  }

  export type withdrawalCartOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrderInput | SortOrder
    departmentName?: SortOrderInput | SortOrder
    stockId?: SortOrder
    stock?: userOrderByWithRelationInput
    items?: withdrawalCartItemsOrderByRelationAggregateInput
    _relevance?: withdrawalCartOrderByRelevanceInput
  }

  export type withdrawalCartWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: withdrawalCartWhereInput | withdrawalCartWhereInput[]
    OR?: withdrawalCartWhereInput[]
    NOT?: withdrawalCartWhereInput | withdrawalCartWhereInput[]
    date?: StringNullableFilter<"withdrawalCart"> | string | null
    departmentName?: StringNullableFilter<"withdrawalCart"> | string | null
    stockId?: IntFilter<"withdrawalCart"> | number
    stock?: XOR<UserScalarRelationFilter, userWhereInput>
    items?: WithdrawalCartItemsListRelationFilter
  }, "id" | "id">

  export type withdrawalCartOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrderInput | SortOrder
    departmentName?: SortOrderInput | SortOrder
    stockId?: SortOrder
    _count?: withdrawalCartCountOrderByAggregateInput
    _avg?: withdrawalCartAvgOrderByAggregateInput
    _max?: withdrawalCartMaxOrderByAggregateInput
    _min?: withdrawalCartMinOrderByAggregateInput
    _sum?: withdrawalCartSumOrderByAggregateInput
  }

  export type withdrawalCartScalarWhereWithAggregatesInput = {
    AND?: withdrawalCartScalarWhereWithAggregatesInput | withdrawalCartScalarWhereWithAggregatesInput[]
    OR?: withdrawalCartScalarWhereWithAggregatesInput[]
    NOT?: withdrawalCartScalarWhereWithAggregatesInput | withdrawalCartScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"withdrawalCart"> | number
    date?: StringNullableWithAggregatesFilter<"withdrawalCart"> | string | null
    departmentName?: StringNullableWithAggregatesFilter<"withdrawalCart"> | string | null
    stockId?: IntWithAggregatesFilter<"withdrawalCart"> | number
  }

  export type withdrawalCartItemsWhereInput = {
    AND?: withdrawalCartItemsWhereInput | withdrawalCartItemsWhereInput[]
    OR?: withdrawalCartItemsWhereInput[]
    NOT?: withdrawalCartItemsWhereInput | withdrawalCartItemsWhereInput[]
    id?: IntFilter<"withdrawalCartItems"> | number
    itemId?: IntNullableFilter<"withdrawalCartItems"> | number | null
    genericName?: StringFilter<"withdrawalCartItems"> | string
    unit?: StringFilter<"withdrawalCartItems"> | string
    category?: StringNullableFilter<"withdrawalCartItems"> | string | null
    quantity?: IntFilter<"withdrawalCartItems"> | number
    expireDate?: StringNullableFilter<"withdrawalCartItems"> | string | null
    cartId?: IntFilter<"withdrawalCartItems"> | number
    maxQuantity?: IntNullableFilter<"withdrawalCartItems"> | number | null
    itemParentId?: StringFilter<"withdrawalCartItems"> | string
    cart?: XOR<WithdrawalCartScalarRelationFilter, withdrawalCartWhereInput>
  }

  export type withdrawalCartItemsOrderByWithRelationInput = {
    id?: SortOrder
    itemId?: SortOrderInput | SortOrder
    genericName?: SortOrder
    unit?: SortOrder
    category?: SortOrderInput | SortOrder
    quantity?: SortOrder
    expireDate?: SortOrderInput | SortOrder
    cartId?: SortOrder
    maxQuantity?: SortOrderInput | SortOrder
    itemParentId?: SortOrder
    cart?: withdrawalCartOrderByWithRelationInput
    _relevance?: withdrawalCartItemsOrderByRelevanceInput
  }

  export type withdrawalCartItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: withdrawalCartItemsWhereInput | withdrawalCartItemsWhereInput[]
    OR?: withdrawalCartItemsWhereInput[]
    NOT?: withdrawalCartItemsWhereInput | withdrawalCartItemsWhereInput[]
    itemId?: IntNullableFilter<"withdrawalCartItems"> | number | null
    genericName?: StringFilter<"withdrawalCartItems"> | string
    unit?: StringFilter<"withdrawalCartItems"> | string
    category?: StringNullableFilter<"withdrawalCartItems"> | string | null
    quantity?: IntFilter<"withdrawalCartItems"> | number
    expireDate?: StringNullableFilter<"withdrawalCartItems"> | string | null
    cartId?: IntFilter<"withdrawalCartItems"> | number
    maxQuantity?: IntNullableFilter<"withdrawalCartItems"> | number | null
    itemParentId?: StringFilter<"withdrawalCartItems"> | string
    cart?: XOR<WithdrawalCartScalarRelationFilter, withdrawalCartWhereInput>
  }, "id" | "id">

  export type withdrawalCartItemsOrderByWithAggregationInput = {
    id?: SortOrder
    itemId?: SortOrderInput | SortOrder
    genericName?: SortOrder
    unit?: SortOrder
    category?: SortOrderInput | SortOrder
    quantity?: SortOrder
    expireDate?: SortOrderInput | SortOrder
    cartId?: SortOrder
    maxQuantity?: SortOrderInput | SortOrder
    itemParentId?: SortOrder
    _count?: withdrawalCartItemsCountOrderByAggregateInput
    _avg?: withdrawalCartItemsAvgOrderByAggregateInput
    _max?: withdrawalCartItemsMaxOrderByAggregateInput
    _min?: withdrawalCartItemsMinOrderByAggregateInput
    _sum?: withdrawalCartItemsSumOrderByAggregateInput
  }

  export type withdrawalCartItemsScalarWhereWithAggregatesInput = {
    AND?: withdrawalCartItemsScalarWhereWithAggregatesInput | withdrawalCartItemsScalarWhereWithAggregatesInput[]
    OR?: withdrawalCartItemsScalarWhereWithAggregatesInput[]
    NOT?: withdrawalCartItemsScalarWhereWithAggregatesInput | withdrawalCartItemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"withdrawalCartItems"> | number
    itemId?: IntNullableWithAggregatesFilter<"withdrawalCartItems"> | number | null
    genericName?: StringWithAggregatesFilter<"withdrawalCartItems"> | string
    unit?: StringWithAggregatesFilter<"withdrawalCartItems"> | string
    category?: StringNullableWithAggregatesFilter<"withdrawalCartItems"> | string | null
    quantity?: IntWithAggregatesFilter<"withdrawalCartItems"> | number
    expireDate?: StringNullableWithAggregatesFilter<"withdrawalCartItems"> | string | null
    cartId?: IntWithAggregatesFilter<"withdrawalCartItems"> | number
    maxQuantity?: IntNullableWithAggregatesFilter<"withdrawalCartItems"> | number | null
    itemParentId?: StringWithAggregatesFilter<"withdrawalCartItems"> | string
  }

  export type userCreateInput = {
    username: string
    usersecret: string
    authority?: string | null
    items?: itemCreateNestedManyWithoutStockInput
    withdrawals?: withdrawalCreateNestedManyWithoutStockInput
    withdrawalItems?: withdrawalItemsCreateNestedManyWithoutStockInput
    withdrawalCart?: withdrawalCartCreateNestedManyWithoutStockInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    username: string
    usersecret: string
    authority?: string | null
    items?: itemUncheckedCreateNestedManyWithoutStockInput
    withdrawals?: withdrawalUncheckedCreateNestedManyWithoutStockInput
    withdrawalItems?: withdrawalItemsUncheckedCreateNestedManyWithoutStockInput
    withdrawalCart?: withdrawalCartUncheckedCreateNestedManyWithoutStockInput
  }

  export type userUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    usersecret?: StringFieldUpdateOperationsInput | string
    authority?: NullableStringFieldUpdateOperationsInput | string | null
    items?: itemUpdateManyWithoutStockNestedInput
    withdrawals?: withdrawalUpdateManyWithoutStockNestedInput
    withdrawalItems?: withdrawalItemsUpdateManyWithoutStockNestedInput
    withdrawalCart?: withdrawalCartUpdateManyWithoutStockNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    usersecret?: StringFieldUpdateOperationsInput | string
    authority?: NullableStringFieldUpdateOperationsInput | string | null
    items?: itemUncheckedUpdateManyWithoutStockNestedInput
    withdrawals?: withdrawalUncheckedUpdateManyWithoutStockNestedInput
    withdrawalItems?: withdrawalItemsUncheckedUpdateManyWithoutStockNestedInput
    withdrawalCart?: withdrawalCartUncheckedUpdateManyWithoutStockNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    username: string
    usersecret: string
    authority?: string | null
  }

  export type userUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    usersecret?: StringFieldUpdateOperationsInput | string
    authority?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    usersecret?: StringFieldUpdateOperationsInput | string
    authority?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type departmentCreateInput = {
    id?: string
    name: string
    withdrawals?: withdrawalCreateNestedManyWithoutDepartmentInput
  }

  export type departmentUncheckedCreateInput = {
    id?: string
    name: string
    withdrawals?: withdrawalUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type departmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    withdrawals?: withdrawalUpdateManyWithoutDepartmentNestedInput
  }

  export type departmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    withdrawals?: withdrawalUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type departmentCreateManyInput = {
    id?: string
    name: string
  }

  export type departmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type departmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type providorCreateInput = {
    id?: string
    name: string
    receipts?: receiptCreateNestedManyWithoutProvidorInput
  }

  export type providorUncheckedCreateInput = {
    id?: string
    name: string
    receipts?: receiptUncheckedCreateNestedManyWithoutProvidorInput
  }

  export type providorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    receipts?: receiptUpdateManyWithoutProvidorNestedInput
  }

  export type providorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    receipts?: receiptUncheckedUpdateManyWithoutProvidorNestedInput
  }

  export type providorCreateManyInput = {
    id?: string
    name: string
  }

  export type providorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type providorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type itemParentCreateInput = {
    id?: string
    genericName: string
    category: string
    unit: string
    latestWithdrawal?: string | null
    latestReceive?: string | null
    mainStockSpecific: boolean
    items?: itemCreateNestedManyWithoutItemParentInput
    withdrawals?: withdrawalItemsCreateNestedManyWithoutItemParentInput
  }

  export type itemParentUncheckedCreateInput = {
    id?: string
    genericName: string
    category: string
    unit: string
    latestWithdrawal?: string | null
    latestReceive?: string | null
    mainStockSpecific: boolean
    items?: itemUncheckedCreateNestedManyWithoutItemParentInput
    withdrawals?: withdrawalItemsUncheckedCreateNestedManyWithoutItemParentInput
  }

  export type itemParentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    latestWithdrawal?: NullableStringFieldUpdateOperationsInput | string | null
    latestReceive?: NullableStringFieldUpdateOperationsInput | string | null
    mainStockSpecific?: BoolFieldUpdateOperationsInput | boolean
    items?: itemUpdateManyWithoutItemParentNestedInput
    withdrawals?: withdrawalItemsUpdateManyWithoutItemParentNestedInput
  }

  export type itemParentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    latestWithdrawal?: NullableStringFieldUpdateOperationsInput | string | null
    latestReceive?: NullableStringFieldUpdateOperationsInput | string | null
    mainStockSpecific?: BoolFieldUpdateOperationsInput | boolean
    items?: itemUncheckedUpdateManyWithoutItemParentNestedInput
    withdrawals?: withdrawalItemsUncheckedUpdateManyWithoutItemParentNestedInput
  }

  export type itemParentCreateManyInput = {
    id?: string
    genericName: string
    category: string
    unit: string
    latestWithdrawal?: string | null
    latestReceive?: string | null
    mainStockSpecific: boolean
  }

  export type itemParentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    latestWithdrawal?: NullableStringFieldUpdateOperationsInput | string | null
    latestReceive?: NullableStringFieldUpdateOperationsInput | string | null
    mainStockSpecific?: BoolFieldUpdateOperationsInput | boolean
  }

  export type itemParentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    latestWithdrawal?: NullableStringFieldUpdateOperationsInput | string | null
    latestReceive?: NullableStringFieldUpdateOperationsInput | string | null
    mainStockSpecific?: BoolFieldUpdateOperationsInput | boolean
  }

  export type itemCreateInput = {
    itemId?: number | null
    genericName: string
    unitInfo: string
    unit: string
    category: string
    quantity: number
    expireDate?: string | null
    providor: string
    receiveDate: string
    withdrawal?: withdrawalCreateNestedOneWithoutStockItmesInput
    stock: userCreateNestedOneWithoutItemsInput
    itemParent: itemParentCreateNestedOneWithoutItemsInput
    receipt?: receiptCreateNestedOneWithoutStockItmesInput
  }

  export type itemUncheckedCreateInput = {
    id?: number
    itemId?: number | null
    genericName: string
    unitInfo: string
    unit: string
    category: string
    quantity: number
    expireDate?: string | null
    providor: string
    receiveDate: string
    itemParentId: string
    stockId: number
    receiptId?: number | null
    withdrawalId?: number | null
  }

  export type itemUpdateInput = {
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
    genericName?: StringFieldUpdateOperationsInput | string
    unitInfo?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    providor?: StringFieldUpdateOperationsInput | string
    receiveDate?: StringFieldUpdateOperationsInput | string
    withdrawal?: withdrawalUpdateOneWithoutStockItmesNestedInput
    stock?: userUpdateOneRequiredWithoutItemsNestedInput
    itemParent?: itemParentUpdateOneRequiredWithoutItemsNestedInput
    receipt?: receiptUpdateOneWithoutStockItmesNestedInput
  }

  export type itemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
    genericName?: StringFieldUpdateOperationsInput | string
    unitInfo?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    providor?: StringFieldUpdateOperationsInput | string
    receiveDate?: StringFieldUpdateOperationsInput | string
    itemParentId?: StringFieldUpdateOperationsInput | string
    stockId?: IntFieldUpdateOperationsInput | number
    receiptId?: NullableIntFieldUpdateOperationsInput | number | null
    withdrawalId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type itemCreateManyInput = {
    id?: number
    itemId?: number | null
    genericName: string
    unitInfo: string
    unit: string
    category: string
    quantity: number
    expireDate?: string | null
    providor: string
    receiveDate: string
    itemParentId: string
    stockId: number
    receiptId?: number | null
    withdrawalId?: number | null
  }

  export type itemUpdateManyMutationInput = {
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
    genericName?: StringFieldUpdateOperationsInput | string
    unitInfo?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    providor?: StringFieldUpdateOperationsInput | string
    receiveDate?: StringFieldUpdateOperationsInput | string
  }

  export type itemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
    genericName?: StringFieldUpdateOperationsInput | string
    unitInfo?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    providor?: StringFieldUpdateOperationsInput | string
    receiveDate?: StringFieldUpdateOperationsInput | string
    itemParentId?: StringFieldUpdateOperationsInput | string
    stockId?: IntFieldUpdateOperationsInput | number
    receiptId?: NullableIntFieldUpdateOperationsInput | number | null
    withdrawalId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type receiptCreateInput = {
    date: string
    providorName: string
    items?: receiptItemsCreateNestedManyWithoutReceiptInput
    stockItmes?: itemCreateNestedManyWithoutReceiptInput
    providor: providorCreateNestedOneWithoutReceiptsInput
  }

  export type receiptUncheckedCreateInput = {
    id?: number
    date: string
    providorName: string
    providorId: string
    items?: receiptItemsUncheckedCreateNestedManyWithoutReceiptInput
    stockItmes?: itemUncheckedCreateNestedManyWithoutReceiptInput
  }

  export type receiptUpdateInput = {
    date?: StringFieldUpdateOperationsInput | string
    providorName?: StringFieldUpdateOperationsInput | string
    items?: receiptItemsUpdateManyWithoutReceiptNestedInput
    stockItmes?: itemUpdateManyWithoutReceiptNestedInput
    providor?: providorUpdateOneRequiredWithoutReceiptsNestedInput
  }

  export type receiptUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    providorName?: StringFieldUpdateOperationsInput | string
    providorId?: StringFieldUpdateOperationsInput | string
    items?: receiptItemsUncheckedUpdateManyWithoutReceiptNestedInput
    stockItmes?: itemUncheckedUpdateManyWithoutReceiptNestedInput
  }

  export type receiptCreateManyInput = {
    id?: number
    date: string
    providorName: string
    providorId: string
  }

  export type receiptUpdateManyMutationInput = {
    date?: StringFieldUpdateOperationsInput | string
    providorName?: StringFieldUpdateOperationsInput | string
  }

  export type receiptUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    providorName?: StringFieldUpdateOperationsInput | string
    providorId?: StringFieldUpdateOperationsInput | string
  }

  export type receiptItemsCreateInput = {
    id?: string
    genericName: string
    unit: string
    unitInfo: string
    category: string
    quantity: number
    expireDate?: string | null
    receipt: receiptCreateNestedOneWithoutItemsInput
  }

  export type receiptItemsUncheckedCreateInput = {
    id?: string
    genericName: string
    unit: string
    unitInfo: string
    category: string
    quantity: number
    expireDate?: string | null
    receiptId: number
  }

  export type receiptItemsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    unitInfo?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    receipt?: receiptUpdateOneRequiredWithoutItemsNestedInput
  }

  export type receiptItemsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    unitInfo?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    receiptId?: IntFieldUpdateOperationsInput | number
  }

  export type receiptItemsCreateManyInput = {
    id?: string
    genericName: string
    unit: string
    unitInfo: string
    category: string
    quantity: number
    expireDate?: string | null
    receiptId: number
  }

  export type receiptItemsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    unitInfo?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type receiptItemsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    unitInfo?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    receiptId?: IntFieldUpdateOperationsInput | number
  }

  export type receiptCartCreateInput = {
    date?: string | null
    providorName?: string | null
    items?: receiptCartItemsCreateNestedManyWithoutCartInput
  }

  export type receiptCartUncheckedCreateInput = {
    id?: number
    date?: string | null
    providorName?: string | null
    items?: receiptCartItemsUncheckedCreateNestedManyWithoutCartInput
  }

  export type receiptCartUpdateInput = {
    date?: NullableStringFieldUpdateOperationsInput | string | null
    providorName?: NullableStringFieldUpdateOperationsInput | string | null
    items?: receiptCartItemsUpdateManyWithoutCartNestedInput
  }

  export type receiptCartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableStringFieldUpdateOperationsInput | string | null
    providorName?: NullableStringFieldUpdateOperationsInput | string | null
    items?: receiptCartItemsUncheckedUpdateManyWithoutCartNestedInput
  }

  export type receiptCartCreateManyInput = {
    id?: number
    date?: string | null
    providorName?: string | null
  }

  export type receiptCartUpdateManyMutationInput = {
    date?: NullableStringFieldUpdateOperationsInput | string | null
    providorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type receiptCartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableStringFieldUpdateOperationsInput | string | null
    providorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type receiptCartItemsCreateInput = {
    id?: string
    genericName: string
    unit: string
    unitInfo: string
    category?: string | null
    quantity: number
    expireDate?: string | null
    cart: receiptCartCreateNestedOneWithoutItemsInput
  }

  export type receiptCartItemsUncheckedCreateInput = {
    id?: string
    genericName: string
    unit: string
    unitInfo: string
    category?: string | null
    quantity: number
    expireDate?: string | null
    cartId: number
  }

  export type receiptCartItemsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    unitInfo?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    cart?: receiptCartUpdateOneRequiredWithoutItemsNestedInput
  }

  export type receiptCartItemsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    unitInfo?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    cartId?: IntFieldUpdateOperationsInput | number
  }

  export type receiptCartItemsCreateManyInput = {
    id?: string
    genericName: string
    unit: string
    unitInfo: string
    category?: string | null
    quantity: number
    expireDate?: string | null
    cartId: number
  }

  export type receiptCartItemsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    unitInfo?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type receiptCartItemsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    unitInfo?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    cartId?: IntFieldUpdateOperationsInput | number
  }

  export type withdrawalCreateInput = {
    departmentName: string
    date: string
    department: departmentCreateNestedOneWithoutWithdrawalsInput
    items?: withdrawalItemsCreateNestedManyWithoutWithdrawalInput
    stock: userCreateNestedOneWithoutWithdrawalsInput
    stockItmes?: itemCreateNestedManyWithoutWithdrawalInput
  }

  export type withdrawalUncheckedCreateInput = {
    id?: number
    departmentName: string
    date: string
    departmentId: string
    stockId: number
    items?: withdrawalItemsUncheckedCreateNestedManyWithoutWithdrawalInput
    stockItmes?: itemUncheckedCreateNestedManyWithoutWithdrawalInput
  }

  export type withdrawalUpdateInput = {
    departmentName?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    department?: departmentUpdateOneRequiredWithoutWithdrawalsNestedInput
    items?: withdrawalItemsUpdateManyWithoutWithdrawalNestedInput
    stock?: userUpdateOneRequiredWithoutWithdrawalsNestedInput
    stockItmes?: itemUpdateManyWithoutWithdrawalNestedInput
  }

  export type withdrawalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    departmentName?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    stockId?: IntFieldUpdateOperationsInput | number
    items?: withdrawalItemsUncheckedUpdateManyWithoutWithdrawalNestedInput
    stockItmes?: itemUncheckedUpdateManyWithoutWithdrawalNestedInput
  }

  export type withdrawalCreateManyInput = {
    id?: number
    departmentName: string
    date: string
    departmentId: string
    stockId: number
  }

  export type withdrawalUpdateManyMutationInput = {
    departmentName?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
  }

  export type withdrawalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    departmentName?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    stockId?: IntFieldUpdateOperationsInput | number
  }

  export type withdrawalItemsCreateInput = {
    id?: string
    itemId: number
    genericName: string
    unit: string
    category?: string | null
    quantity: number
    expireDate?: string | null
    withdrawDate?: string | null
    withdrawal: withdrawalCreateNestedOneWithoutItemsInput
    itemParent: itemParentCreateNestedOneWithoutWithdrawalsInput
    stock?: userCreateNestedOneWithoutWithdrawalItemsInput
  }

  export type withdrawalItemsUncheckedCreateInput = {
    id?: string
    itemId: number
    genericName: string
    unit: string
    category?: string | null
    quantity: number
    expireDate?: string | null
    withdrawalId: number
    itemParentId: string
    withdrawDate?: string | null
    stockId?: number | null
  }

  export type withdrawalItemsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: IntFieldUpdateOperationsInput | number
    genericName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    withdrawDate?: NullableStringFieldUpdateOperationsInput | string | null
    withdrawal?: withdrawalUpdateOneRequiredWithoutItemsNestedInput
    itemParent?: itemParentUpdateOneRequiredWithoutWithdrawalsNestedInput
    stock?: userUpdateOneWithoutWithdrawalItemsNestedInput
  }

  export type withdrawalItemsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: IntFieldUpdateOperationsInput | number
    genericName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    withdrawalId?: IntFieldUpdateOperationsInput | number
    itemParentId?: StringFieldUpdateOperationsInput | string
    withdrawDate?: NullableStringFieldUpdateOperationsInput | string | null
    stockId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type withdrawalItemsCreateManyInput = {
    id?: string
    itemId: number
    genericName: string
    unit: string
    category?: string | null
    quantity: number
    expireDate?: string | null
    withdrawalId: number
    itemParentId: string
    withdrawDate?: string | null
    stockId?: number | null
  }

  export type withdrawalItemsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: IntFieldUpdateOperationsInput | number
    genericName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    withdrawDate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type withdrawalItemsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: IntFieldUpdateOperationsInput | number
    genericName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    withdrawalId?: IntFieldUpdateOperationsInput | number
    itemParentId?: StringFieldUpdateOperationsInput | string
    withdrawDate?: NullableStringFieldUpdateOperationsInput | string | null
    stockId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type withdrawalCartCreateInput = {
    date?: string | null
    departmentName?: string | null
    stock: userCreateNestedOneWithoutWithdrawalCartInput
    items?: withdrawalCartItemsCreateNestedManyWithoutCartInput
  }

  export type withdrawalCartUncheckedCreateInput = {
    id?: number
    date?: string | null
    departmentName?: string | null
    stockId: number
    items?: withdrawalCartItemsUncheckedCreateNestedManyWithoutCartInput
  }

  export type withdrawalCartUpdateInput = {
    date?: NullableStringFieldUpdateOperationsInput | string | null
    departmentName?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: userUpdateOneRequiredWithoutWithdrawalCartNestedInput
    items?: withdrawalCartItemsUpdateManyWithoutCartNestedInput
  }

  export type withdrawalCartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableStringFieldUpdateOperationsInput | string | null
    departmentName?: NullableStringFieldUpdateOperationsInput | string | null
    stockId?: IntFieldUpdateOperationsInput | number
    items?: withdrawalCartItemsUncheckedUpdateManyWithoutCartNestedInput
  }

  export type withdrawalCartCreateManyInput = {
    id?: number
    date?: string | null
    departmentName?: string | null
    stockId: number
  }

  export type withdrawalCartUpdateManyMutationInput = {
    date?: NullableStringFieldUpdateOperationsInput | string | null
    departmentName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type withdrawalCartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableStringFieldUpdateOperationsInput | string | null
    departmentName?: NullableStringFieldUpdateOperationsInput | string | null
    stockId?: IntFieldUpdateOperationsInput | number
  }

  export type withdrawalCartItemsCreateInput = {
    itemId?: number | null
    genericName: string
    unit: string
    category?: string | null
    quantity: number
    expireDate?: string | null
    maxQuantity?: number | null
    itemParentId: string
    cart: withdrawalCartCreateNestedOneWithoutItemsInput
  }

  export type withdrawalCartItemsUncheckedCreateInput = {
    id?: number
    itemId?: number | null
    genericName: string
    unit: string
    category?: string | null
    quantity: number
    expireDate?: string | null
    cartId: number
    maxQuantity?: number | null
    itemParentId: string
  }

  export type withdrawalCartItemsUpdateInput = {
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
    genericName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    maxQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    itemParentId?: StringFieldUpdateOperationsInput | string
    cart?: withdrawalCartUpdateOneRequiredWithoutItemsNestedInput
  }

  export type withdrawalCartItemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
    genericName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    cartId?: IntFieldUpdateOperationsInput | number
    maxQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    itemParentId?: StringFieldUpdateOperationsInput | string
  }

  export type withdrawalCartItemsCreateManyInput = {
    id?: number
    itemId?: number | null
    genericName: string
    unit: string
    category?: string | null
    quantity: number
    expireDate?: string | null
    cartId: number
    maxQuantity?: number | null
    itemParentId: string
  }

  export type withdrawalCartItemsUpdateManyMutationInput = {
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
    genericName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    maxQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    itemParentId?: StringFieldUpdateOperationsInput | string
  }

  export type withdrawalCartItemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
    genericName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    cartId?: IntFieldUpdateOperationsInput | number
    maxQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    itemParentId?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ItemListRelationFilter = {
    every?: itemWhereInput
    some?: itemWhereInput
    none?: itemWhereInput
  }

  export type WithdrawalListRelationFilter = {
    every?: withdrawalWhereInput
    some?: withdrawalWhereInput
    none?: withdrawalWhereInput
  }

  export type WithdrawalItemsListRelationFilter = {
    every?: withdrawalItemsWhereInput
    some?: withdrawalItemsWhereInput
    none?: withdrawalItemsWhereInput
  }

  export type WithdrawalCartListRelationFilter = {
    every?: withdrawalCartWhereInput
    some?: withdrawalCartWhereInput
    none?: withdrawalCartWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type itemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type withdrawalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type withdrawalItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type withdrawalCartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    usersecret?: SortOrder
    authority?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    usersecret?: SortOrder
    authority?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    usersecret?: SortOrder
    authority?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type departmentOrderByRelevanceInput = {
    fields: departmentOrderByRelevanceFieldEnum | departmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type departmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type departmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type departmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ReceiptListRelationFilter = {
    every?: receiptWhereInput
    some?: receiptWhereInput
    none?: receiptWhereInput
  }

  export type receiptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type providorOrderByRelevanceInput = {
    fields: providorOrderByRelevanceFieldEnum | providorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type providorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type providorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type providorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type itemParentOrderByRelevanceInput = {
    fields: itemParentOrderByRelevanceFieldEnum | itemParentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type itemParentCountOrderByAggregateInput = {
    id?: SortOrder
    genericName?: SortOrder
    category?: SortOrder
    unit?: SortOrder
    latestWithdrawal?: SortOrder
    latestReceive?: SortOrder
    mainStockSpecific?: SortOrder
  }

  export type itemParentMaxOrderByAggregateInput = {
    id?: SortOrder
    genericName?: SortOrder
    category?: SortOrder
    unit?: SortOrder
    latestWithdrawal?: SortOrder
    latestReceive?: SortOrder
    mainStockSpecific?: SortOrder
  }

  export type itemParentMinOrderByAggregateInput = {
    id?: SortOrder
    genericName?: SortOrder
    category?: SortOrder
    unit?: SortOrder
    latestWithdrawal?: SortOrder
    latestReceive?: SortOrder
    mainStockSpecific?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type WithdrawalNullableScalarRelationFilter = {
    is?: withdrawalWhereInput | null
    isNot?: withdrawalWhereInput | null
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type ItemParentScalarRelationFilter = {
    is?: itemParentWhereInput
    isNot?: itemParentWhereInput
  }

  export type ReceiptNullableScalarRelationFilter = {
    is?: receiptWhereInput | null
    isNot?: receiptWhereInput | null
  }

  export type itemOrderByRelevanceInput = {
    fields: itemOrderByRelevanceFieldEnum | itemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type itemCountOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    genericName?: SortOrder
    unitInfo?: SortOrder
    unit?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    expireDate?: SortOrder
    providor?: SortOrder
    receiveDate?: SortOrder
    itemParentId?: SortOrder
    stockId?: SortOrder
    receiptId?: SortOrder
    withdrawalId?: SortOrder
  }

  export type itemAvgOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    stockId?: SortOrder
    receiptId?: SortOrder
    withdrawalId?: SortOrder
  }

  export type itemMaxOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    genericName?: SortOrder
    unitInfo?: SortOrder
    unit?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    expireDate?: SortOrder
    providor?: SortOrder
    receiveDate?: SortOrder
    itemParentId?: SortOrder
    stockId?: SortOrder
    receiptId?: SortOrder
    withdrawalId?: SortOrder
  }

  export type itemMinOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    genericName?: SortOrder
    unitInfo?: SortOrder
    unit?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    expireDate?: SortOrder
    providor?: SortOrder
    receiveDate?: SortOrder
    itemParentId?: SortOrder
    stockId?: SortOrder
    receiptId?: SortOrder
    withdrawalId?: SortOrder
  }

  export type itemSumOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    stockId?: SortOrder
    receiptId?: SortOrder
    withdrawalId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ReceiptItemsListRelationFilter = {
    every?: receiptItemsWhereInput
    some?: receiptItemsWhereInput
    none?: receiptItemsWhereInput
  }

  export type ProvidorScalarRelationFilter = {
    is?: providorWhereInput
    isNot?: providorWhereInput
  }

  export type receiptItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type receiptOrderByRelevanceInput = {
    fields: receiptOrderByRelevanceFieldEnum | receiptOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type receiptCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    providorName?: SortOrder
    providorId?: SortOrder
  }

  export type receiptAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type receiptMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    providorName?: SortOrder
    providorId?: SortOrder
  }

  export type receiptMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    providorName?: SortOrder
    providorId?: SortOrder
  }

  export type receiptSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ReceiptScalarRelationFilter = {
    is?: receiptWhereInput
    isNot?: receiptWhereInput
  }

  export type receiptItemsOrderByRelevanceInput = {
    fields: receiptItemsOrderByRelevanceFieldEnum | receiptItemsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type receiptItemsCountOrderByAggregateInput = {
    id?: SortOrder
    genericName?: SortOrder
    unit?: SortOrder
    unitInfo?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    expireDate?: SortOrder
    receiptId?: SortOrder
  }

  export type receiptItemsAvgOrderByAggregateInput = {
    quantity?: SortOrder
    receiptId?: SortOrder
  }

  export type receiptItemsMaxOrderByAggregateInput = {
    id?: SortOrder
    genericName?: SortOrder
    unit?: SortOrder
    unitInfo?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    expireDate?: SortOrder
    receiptId?: SortOrder
  }

  export type receiptItemsMinOrderByAggregateInput = {
    id?: SortOrder
    genericName?: SortOrder
    unit?: SortOrder
    unitInfo?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    expireDate?: SortOrder
    receiptId?: SortOrder
  }

  export type receiptItemsSumOrderByAggregateInput = {
    quantity?: SortOrder
    receiptId?: SortOrder
  }

  export type ReceiptCartItemsListRelationFilter = {
    every?: receiptCartItemsWhereInput
    some?: receiptCartItemsWhereInput
    none?: receiptCartItemsWhereInput
  }

  export type receiptCartItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type receiptCartOrderByRelevanceInput = {
    fields: receiptCartOrderByRelevanceFieldEnum | receiptCartOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type receiptCartCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    providorName?: SortOrder
  }

  export type receiptCartAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type receiptCartMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    providorName?: SortOrder
  }

  export type receiptCartMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    providorName?: SortOrder
  }

  export type receiptCartSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ReceiptCartScalarRelationFilter = {
    is?: receiptCartWhereInput
    isNot?: receiptCartWhereInput
  }

  export type receiptCartItemsOrderByRelevanceInput = {
    fields: receiptCartItemsOrderByRelevanceFieldEnum | receiptCartItemsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type receiptCartItemsCountOrderByAggregateInput = {
    id?: SortOrder
    genericName?: SortOrder
    unit?: SortOrder
    unitInfo?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    expireDate?: SortOrder
    cartId?: SortOrder
  }

  export type receiptCartItemsAvgOrderByAggregateInput = {
    quantity?: SortOrder
    cartId?: SortOrder
  }

  export type receiptCartItemsMaxOrderByAggregateInput = {
    id?: SortOrder
    genericName?: SortOrder
    unit?: SortOrder
    unitInfo?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    expireDate?: SortOrder
    cartId?: SortOrder
  }

  export type receiptCartItemsMinOrderByAggregateInput = {
    id?: SortOrder
    genericName?: SortOrder
    unit?: SortOrder
    unitInfo?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    expireDate?: SortOrder
    cartId?: SortOrder
  }

  export type receiptCartItemsSumOrderByAggregateInput = {
    quantity?: SortOrder
    cartId?: SortOrder
  }

  export type DepartmentScalarRelationFilter = {
    is?: departmentWhereInput
    isNot?: departmentWhereInput
  }

  export type withdrawalOrderByRelevanceInput = {
    fields: withdrawalOrderByRelevanceFieldEnum | withdrawalOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type withdrawalCountOrderByAggregateInput = {
    id?: SortOrder
    departmentName?: SortOrder
    date?: SortOrder
    departmentId?: SortOrder
    stockId?: SortOrder
  }

  export type withdrawalAvgOrderByAggregateInput = {
    id?: SortOrder
    stockId?: SortOrder
  }

  export type withdrawalMaxOrderByAggregateInput = {
    id?: SortOrder
    departmentName?: SortOrder
    date?: SortOrder
    departmentId?: SortOrder
    stockId?: SortOrder
  }

  export type withdrawalMinOrderByAggregateInput = {
    id?: SortOrder
    departmentName?: SortOrder
    date?: SortOrder
    departmentId?: SortOrder
    stockId?: SortOrder
  }

  export type withdrawalSumOrderByAggregateInput = {
    id?: SortOrder
    stockId?: SortOrder
  }

  export type WithdrawalScalarRelationFilter = {
    is?: withdrawalWhereInput
    isNot?: withdrawalWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type withdrawalItemsOrderByRelevanceInput = {
    fields: withdrawalItemsOrderByRelevanceFieldEnum | withdrawalItemsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type withdrawalItemsCountOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    genericName?: SortOrder
    unit?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    expireDate?: SortOrder
    withdrawalId?: SortOrder
    itemParentId?: SortOrder
    withdrawDate?: SortOrder
    stockId?: SortOrder
  }

  export type withdrawalItemsAvgOrderByAggregateInput = {
    itemId?: SortOrder
    quantity?: SortOrder
    withdrawalId?: SortOrder
    stockId?: SortOrder
  }

  export type withdrawalItemsMaxOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    genericName?: SortOrder
    unit?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    expireDate?: SortOrder
    withdrawalId?: SortOrder
    itemParentId?: SortOrder
    withdrawDate?: SortOrder
    stockId?: SortOrder
  }

  export type withdrawalItemsMinOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    genericName?: SortOrder
    unit?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    expireDate?: SortOrder
    withdrawalId?: SortOrder
    itemParentId?: SortOrder
    withdrawDate?: SortOrder
    stockId?: SortOrder
  }

  export type withdrawalItemsSumOrderByAggregateInput = {
    itemId?: SortOrder
    quantity?: SortOrder
    withdrawalId?: SortOrder
    stockId?: SortOrder
  }

  export type WithdrawalCartItemsListRelationFilter = {
    every?: withdrawalCartItemsWhereInput
    some?: withdrawalCartItemsWhereInput
    none?: withdrawalCartItemsWhereInput
  }

  export type withdrawalCartItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type withdrawalCartOrderByRelevanceInput = {
    fields: withdrawalCartOrderByRelevanceFieldEnum | withdrawalCartOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type withdrawalCartCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    departmentName?: SortOrder
    stockId?: SortOrder
  }

  export type withdrawalCartAvgOrderByAggregateInput = {
    id?: SortOrder
    stockId?: SortOrder
  }

  export type withdrawalCartMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    departmentName?: SortOrder
    stockId?: SortOrder
  }

  export type withdrawalCartMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    departmentName?: SortOrder
    stockId?: SortOrder
  }

  export type withdrawalCartSumOrderByAggregateInput = {
    id?: SortOrder
    stockId?: SortOrder
  }

  export type WithdrawalCartScalarRelationFilter = {
    is?: withdrawalCartWhereInput
    isNot?: withdrawalCartWhereInput
  }

  export type withdrawalCartItemsOrderByRelevanceInput = {
    fields: withdrawalCartItemsOrderByRelevanceFieldEnum | withdrawalCartItemsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type withdrawalCartItemsCountOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    genericName?: SortOrder
    unit?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    expireDate?: SortOrder
    cartId?: SortOrder
    maxQuantity?: SortOrder
    itemParentId?: SortOrder
  }

  export type withdrawalCartItemsAvgOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    cartId?: SortOrder
    maxQuantity?: SortOrder
  }

  export type withdrawalCartItemsMaxOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    genericName?: SortOrder
    unit?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    expireDate?: SortOrder
    cartId?: SortOrder
    maxQuantity?: SortOrder
    itemParentId?: SortOrder
  }

  export type withdrawalCartItemsMinOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    genericName?: SortOrder
    unit?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    expireDate?: SortOrder
    cartId?: SortOrder
    maxQuantity?: SortOrder
    itemParentId?: SortOrder
  }

  export type withdrawalCartItemsSumOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    cartId?: SortOrder
    maxQuantity?: SortOrder
  }

  export type itemCreateNestedManyWithoutStockInput = {
    create?: XOR<itemCreateWithoutStockInput, itemUncheckedCreateWithoutStockInput> | itemCreateWithoutStockInput[] | itemUncheckedCreateWithoutStockInput[]
    connectOrCreate?: itemCreateOrConnectWithoutStockInput | itemCreateOrConnectWithoutStockInput[]
    createMany?: itemCreateManyStockInputEnvelope
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
  }

  export type withdrawalCreateNestedManyWithoutStockInput = {
    create?: XOR<withdrawalCreateWithoutStockInput, withdrawalUncheckedCreateWithoutStockInput> | withdrawalCreateWithoutStockInput[] | withdrawalUncheckedCreateWithoutStockInput[]
    connectOrCreate?: withdrawalCreateOrConnectWithoutStockInput | withdrawalCreateOrConnectWithoutStockInput[]
    createMany?: withdrawalCreateManyStockInputEnvelope
    connect?: withdrawalWhereUniqueInput | withdrawalWhereUniqueInput[]
  }

  export type withdrawalItemsCreateNestedManyWithoutStockInput = {
    create?: XOR<withdrawalItemsCreateWithoutStockInput, withdrawalItemsUncheckedCreateWithoutStockInput> | withdrawalItemsCreateWithoutStockInput[] | withdrawalItemsUncheckedCreateWithoutStockInput[]
    connectOrCreate?: withdrawalItemsCreateOrConnectWithoutStockInput | withdrawalItemsCreateOrConnectWithoutStockInput[]
    createMany?: withdrawalItemsCreateManyStockInputEnvelope
    connect?: withdrawalItemsWhereUniqueInput | withdrawalItemsWhereUniqueInput[]
  }

  export type withdrawalCartCreateNestedManyWithoutStockInput = {
    create?: XOR<withdrawalCartCreateWithoutStockInput, withdrawalCartUncheckedCreateWithoutStockInput> | withdrawalCartCreateWithoutStockInput[] | withdrawalCartUncheckedCreateWithoutStockInput[]
    connectOrCreate?: withdrawalCartCreateOrConnectWithoutStockInput | withdrawalCartCreateOrConnectWithoutStockInput[]
    createMany?: withdrawalCartCreateManyStockInputEnvelope
    connect?: withdrawalCartWhereUniqueInput | withdrawalCartWhereUniqueInput[]
  }

  export type itemUncheckedCreateNestedManyWithoutStockInput = {
    create?: XOR<itemCreateWithoutStockInput, itemUncheckedCreateWithoutStockInput> | itemCreateWithoutStockInput[] | itemUncheckedCreateWithoutStockInput[]
    connectOrCreate?: itemCreateOrConnectWithoutStockInput | itemCreateOrConnectWithoutStockInput[]
    createMany?: itemCreateManyStockInputEnvelope
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
  }

  export type withdrawalUncheckedCreateNestedManyWithoutStockInput = {
    create?: XOR<withdrawalCreateWithoutStockInput, withdrawalUncheckedCreateWithoutStockInput> | withdrawalCreateWithoutStockInput[] | withdrawalUncheckedCreateWithoutStockInput[]
    connectOrCreate?: withdrawalCreateOrConnectWithoutStockInput | withdrawalCreateOrConnectWithoutStockInput[]
    createMany?: withdrawalCreateManyStockInputEnvelope
    connect?: withdrawalWhereUniqueInput | withdrawalWhereUniqueInput[]
  }

  export type withdrawalItemsUncheckedCreateNestedManyWithoutStockInput = {
    create?: XOR<withdrawalItemsCreateWithoutStockInput, withdrawalItemsUncheckedCreateWithoutStockInput> | withdrawalItemsCreateWithoutStockInput[] | withdrawalItemsUncheckedCreateWithoutStockInput[]
    connectOrCreate?: withdrawalItemsCreateOrConnectWithoutStockInput | withdrawalItemsCreateOrConnectWithoutStockInput[]
    createMany?: withdrawalItemsCreateManyStockInputEnvelope
    connect?: withdrawalItemsWhereUniqueInput | withdrawalItemsWhereUniqueInput[]
  }

  export type withdrawalCartUncheckedCreateNestedManyWithoutStockInput = {
    create?: XOR<withdrawalCartCreateWithoutStockInput, withdrawalCartUncheckedCreateWithoutStockInput> | withdrawalCartCreateWithoutStockInput[] | withdrawalCartUncheckedCreateWithoutStockInput[]
    connectOrCreate?: withdrawalCartCreateOrConnectWithoutStockInput | withdrawalCartCreateOrConnectWithoutStockInput[]
    createMany?: withdrawalCartCreateManyStockInputEnvelope
    connect?: withdrawalCartWhereUniqueInput | withdrawalCartWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type itemUpdateManyWithoutStockNestedInput = {
    create?: XOR<itemCreateWithoutStockInput, itemUncheckedCreateWithoutStockInput> | itemCreateWithoutStockInput[] | itemUncheckedCreateWithoutStockInput[]
    connectOrCreate?: itemCreateOrConnectWithoutStockInput | itemCreateOrConnectWithoutStockInput[]
    upsert?: itemUpsertWithWhereUniqueWithoutStockInput | itemUpsertWithWhereUniqueWithoutStockInput[]
    createMany?: itemCreateManyStockInputEnvelope
    set?: itemWhereUniqueInput | itemWhereUniqueInput[]
    disconnect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    delete?: itemWhereUniqueInput | itemWhereUniqueInput[]
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    update?: itemUpdateWithWhereUniqueWithoutStockInput | itemUpdateWithWhereUniqueWithoutStockInput[]
    updateMany?: itemUpdateManyWithWhereWithoutStockInput | itemUpdateManyWithWhereWithoutStockInput[]
    deleteMany?: itemScalarWhereInput | itemScalarWhereInput[]
  }

  export type withdrawalUpdateManyWithoutStockNestedInput = {
    create?: XOR<withdrawalCreateWithoutStockInput, withdrawalUncheckedCreateWithoutStockInput> | withdrawalCreateWithoutStockInput[] | withdrawalUncheckedCreateWithoutStockInput[]
    connectOrCreate?: withdrawalCreateOrConnectWithoutStockInput | withdrawalCreateOrConnectWithoutStockInput[]
    upsert?: withdrawalUpsertWithWhereUniqueWithoutStockInput | withdrawalUpsertWithWhereUniqueWithoutStockInput[]
    createMany?: withdrawalCreateManyStockInputEnvelope
    set?: withdrawalWhereUniqueInput | withdrawalWhereUniqueInput[]
    disconnect?: withdrawalWhereUniqueInput | withdrawalWhereUniqueInput[]
    delete?: withdrawalWhereUniqueInput | withdrawalWhereUniqueInput[]
    connect?: withdrawalWhereUniqueInput | withdrawalWhereUniqueInput[]
    update?: withdrawalUpdateWithWhereUniqueWithoutStockInput | withdrawalUpdateWithWhereUniqueWithoutStockInput[]
    updateMany?: withdrawalUpdateManyWithWhereWithoutStockInput | withdrawalUpdateManyWithWhereWithoutStockInput[]
    deleteMany?: withdrawalScalarWhereInput | withdrawalScalarWhereInput[]
  }

  export type withdrawalItemsUpdateManyWithoutStockNestedInput = {
    create?: XOR<withdrawalItemsCreateWithoutStockInput, withdrawalItemsUncheckedCreateWithoutStockInput> | withdrawalItemsCreateWithoutStockInput[] | withdrawalItemsUncheckedCreateWithoutStockInput[]
    connectOrCreate?: withdrawalItemsCreateOrConnectWithoutStockInput | withdrawalItemsCreateOrConnectWithoutStockInput[]
    upsert?: withdrawalItemsUpsertWithWhereUniqueWithoutStockInput | withdrawalItemsUpsertWithWhereUniqueWithoutStockInput[]
    createMany?: withdrawalItemsCreateManyStockInputEnvelope
    set?: withdrawalItemsWhereUniqueInput | withdrawalItemsWhereUniqueInput[]
    disconnect?: withdrawalItemsWhereUniqueInput | withdrawalItemsWhereUniqueInput[]
    delete?: withdrawalItemsWhereUniqueInput | withdrawalItemsWhereUniqueInput[]
    connect?: withdrawalItemsWhereUniqueInput | withdrawalItemsWhereUniqueInput[]
    update?: withdrawalItemsUpdateWithWhereUniqueWithoutStockInput | withdrawalItemsUpdateWithWhereUniqueWithoutStockInput[]
    updateMany?: withdrawalItemsUpdateManyWithWhereWithoutStockInput | withdrawalItemsUpdateManyWithWhereWithoutStockInput[]
    deleteMany?: withdrawalItemsScalarWhereInput | withdrawalItemsScalarWhereInput[]
  }

  export type withdrawalCartUpdateManyWithoutStockNestedInput = {
    create?: XOR<withdrawalCartCreateWithoutStockInput, withdrawalCartUncheckedCreateWithoutStockInput> | withdrawalCartCreateWithoutStockInput[] | withdrawalCartUncheckedCreateWithoutStockInput[]
    connectOrCreate?: withdrawalCartCreateOrConnectWithoutStockInput | withdrawalCartCreateOrConnectWithoutStockInput[]
    upsert?: withdrawalCartUpsertWithWhereUniqueWithoutStockInput | withdrawalCartUpsertWithWhereUniqueWithoutStockInput[]
    createMany?: withdrawalCartCreateManyStockInputEnvelope
    set?: withdrawalCartWhereUniqueInput | withdrawalCartWhereUniqueInput[]
    disconnect?: withdrawalCartWhereUniqueInput | withdrawalCartWhereUniqueInput[]
    delete?: withdrawalCartWhereUniqueInput | withdrawalCartWhereUniqueInput[]
    connect?: withdrawalCartWhereUniqueInput | withdrawalCartWhereUniqueInput[]
    update?: withdrawalCartUpdateWithWhereUniqueWithoutStockInput | withdrawalCartUpdateWithWhereUniqueWithoutStockInput[]
    updateMany?: withdrawalCartUpdateManyWithWhereWithoutStockInput | withdrawalCartUpdateManyWithWhereWithoutStockInput[]
    deleteMany?: withdrawalCartScalarWhereInput | withdrawalCartScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type itemUncheckedUpdateManyWithoutStockNestedInput = {
    create?: XOR<itemCreateWithoutStockInput, itemUncheckedCreateWithoutStockInput> | itemCreateWithoutStockInput[] | itemUncheckedCreateWithoutStockInput[]
    connectOrCreate?: itemCreateOrConnectWithoutStockInput | itemCreateOrConnectWithoutStockInput[]
    upsert?: itemUpsertWithWhereUniqueWithoutStockInput | itemUpsertWithWhereUniqueWithoutStockInput[]
    createMany?: itemCreateManyStockInputEnvelope
    set?: itemWhereUniqueInput | itemWhereUniqueInput[]
    disconnect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    delete?: itemWhereUniqueInput | itemWhereUniqueInput[]
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    update?: itemUpdateWithWhereUniqueWithoutStockInput | itemUpdateWithWhereUniqueWithoutStockInput[]
    updateMany?: itemUpdateManyWithWhereWithoutStockInput | itemUpdateManyWithWhereWithoutStockInput[]
    deleteMany?: itemScalarWhereInput | itemScalarWhereInput[]
  }

  export type withdrawalUncheckedUpdateManyWithoutStockNestedInput = {
    create?: XOR<withdrawalCreateWithoutStockInput, withdrawalUncheckedCreateWithoutStockInput> | withdrawalCreateWithoutStockInput[] | withdrawalUncheckedCreateWithoutStockInput[]
    connectOrCreate?: withdrawalCreateOrConnectWithoutStockInput | withdrawalCreateOrConnectWithoutStockInput[]
    upsert?: withdrawalUpsertWithWhereUniqueWithoutStockInput | withdrawalUpsertWithWhereUniqueWithoutStockInput[]
    createMany?: withdrawalCreateManyStockInputEnvelope
    set?: withdrawalWhereUniqueInput | withdrawalWhereUniqueInput[]
    disconnect?: withdrawalWhereUniqueInput | withdrawalWhereUniqueInput[]
    delete?: withdrawalWhereUniqueInput | withdrawalWhereUniqueInput[]
    connect?: withdrawalWhereUniqueInput | withdrawalWhereUniqueInput[]
    update?: withdrawalUpdateWithWhereUniqueWithoutStockInput | withdrawalUpdateWithWhereUniqueWithoutStockInput[]
    updateMany?: withdrawalUpdateManyWithWhereWithoutStockInput | withdrawalUpdateManyWithWhereWithoutStockInput[]
    deleteMany?: withdrawalScalarWhereInput | withdrawalScalarWhereInput[]
  }

  export type withdrawalItemsUncheckedUpdateManyWithoutStockNestedInput = {
    create?: XOR<withdrawalItemsCreateWithoutStockInput, withdrawalItemsUncheckedCreateWithoutStockInput> | withdrawalItemsCreateWithoutStockInput[] | withdrawalItemsUncheckedCreateWithoutStockInput[]
    connectOrCreate?: withdrawalItemsCreateOrConnectWithoutStockInput | withdrawalItemsCreateOrConnectWithoutStockInput[]
    upsert?: withdrawalItemsUpsertWithWhereUniqueWithoutStockInput | withdrawalItemsUpsertWithWhereUniqueWithoutStockInput[]
    createMany?: withdrawalItemsCreateManyStockInputEnvelope
    set?: withdrawalItemsWhereUniqueInput | withdrawalItemsWhereUniqueInput[]
    disconnect?: withdrawalItemsWhereUniqueInput | withdrawalItemsWhereUniqueInput[]
    delete?: withdrawalItemsWhereUniqueInput | withdrawalItemsWhereUniqueInput[]
    connect?: withdrawalItemsWhereUniqueInput | withdrawalItemsWhereUniqueInput[]
    update?: withdrawalItemsUpdateWithWhereUniqueWithoutStockInput | withdrawalItemsUpdateWithWhereUniqueWithoutStockInput[]
    updateMany?: withdrawalItemsUpdateManyWithWhereWithoutStockInput | withdrawalItemsUpdateManyWithWhereWithoutStockInput[]
    deleteMany?: withdrawalItemsScalarWhereInput | withdrawalItemsScalarWhereInput[]
  }

  export type withdrawalCartUncheckedUpdateManyWithoutStockNestedInput = {
    create?: XOR<withdrawalCartCreateWithoutStockInput, withdrawalCartUncheckedCreateWithoutStockInput> | withdrawalCartCreateWithoutStockInput[] | withdrawalCartUncheckedCreateWithoutStockInput[]
    connectOrCreate?: withdrawalCartCreateOrConnectWithoutStockInput | withdrawalCartCreateOrConnectWithoutStockInput[]
    upsert?: withdrawalCartUpsertWithWhereUniqueWithoutStockInput | withdrawalCartUpsertWithWhereUniqueWithoutStockInput[]
    createMany?: withdrawalCartCreateManyStockInputEnvelope
    set?: withdrawalCartWhereUniqueInput | withdrawalCartWhereUniqueInput[]
    disconnect?: withdrawalCartWhereUniqueInput | withdrawalCartWhereUniqueInput[]
    delete?: withdrawalCartWhereUniqueInput | withdrawalCartWhereUniqueInput[]
    connect?: withdrawalCartWhereUniqueInput | withdrawalCartWhereUniqueInput[]
    update?: withdrawalCartUpdateWithWhereUniqueWithoutStockInput | withdrawalCartUpdateWithWhereUniqueWithoutStockInput[]
    updateMany?: withdrawalCartUpdateManyWithWhereWithoutStockInput | withdrawalCartUpdateManyWithWhereWithoutStockInput[]
    deleteMany?: withdrawalCartScalarWhereInput | withdrawalCartScalarWhereInput[]
  }

  export type withdrawalCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<withdrawalCreateWithoutDepartmentInput, withdrawalUncheckedCreateWithoutDepartmentInput> | withdrawalCreateWithoutDepartmentInput[] | withdrawalUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: withdrawalCreateOrConnectWithoutDepartmentInput | withdrawalCreateOrConnectWithoutDepartmentInput[]
    createMany?: withdrawalCreateManyDepartmentInputEnvelope
    connect?: withdrawalWhereUniqueInput | withdrawalWhereUniqueInput[]
  }

  export type withdrawalUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<withdrawalCreateWithoutDepartmentInput, withdrawalUncheckedCreateWithoutDepartmentInput> | withdrawalCreateWithoutDepartmentInput[] | withdrawalUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: withdrawalCreateOrConnectWithoutDepartmentInput | withdrawalCreateOrConnectWithoutDepartmentInput[]
    createMany?: withdrawalCreateManyDepartmentInputEnvelope
    connect?: withdrawalWhereUniqueInput | withdrawalWhereUniqueInput[]
  }

  export type withdrawalUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<withdrawalCreateWithoutDepartmentInput, withdrawalUncheckedCreateWithoutDepartmentInput> | withdrawalCreateWithoutDepartmentInput[] | withdrawalUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: withdrawalCreateOrConnectWithoutDepartmentInput | withdrawalCreateOrConnectWithoutDepartmentInput[]
    upsert?: withdrawalUpsertWithWhereUniqueWithoutDepartmentInput | withdrawalUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: withdrawalCreateManyDepartmentInputEnvelope
    set?: withdrawalWhereUniqueInput | withdrawalWhereUniqueInput[]
    disconnect?: withdrawalWhereUniqueInput | withdrawalWhereUniqueInput[]
    delete?: withdrawalWhereUniqueInput | withdrawalWhereUniqueInput[]
    connect?: withdrawalWhereUniqueInput | withdrawalWhereUniqueInput[]
    update?: withdrawalUpdateWithWhereUniqueWithoutDepartmentInput | withdrawalUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: withdrawalUpdateManyWithWhereWithoutDepartmentInput | withdrawalUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: withdrawalScalarWhereInput | withdrawalScalarWhereInput[]
  }

  export type withdrawalUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<withdrawalCreateWithoutDepartmentInput, withdrawalUncheckedCreateWithoutDepartmentInput> | withdrawalCreateWithoutDepartmentInput[] | withdrawalUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: withdrawalCreateOrConnectWithoutDepartmentInput | withdrawalCreateOrConnectWithoutDepartmentInput[]
    upsert?: withdrawalUpsertWithWhereUniqueWithoutDepartmentInput | withdrawalUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: withdrawalCreateManyDepartmentInputEnvelope
    set?: withdrawalWhereUniqueInput | withdrawalWhereUniqueInput[]
    disconnect?: withdrawalWhereUniqueInput | withdrawalWhereUniqueInput[]
    delete?: withdrawalWhereUniqueInput | withdrawalWhereUniqueInput[]
    connect?: withdrawalWhereUniqueInput | withdrawalWhereUniqueInput[]
    update?: withdrawalUpdateWithWhereUniqueWithoutDepartmentInput | withdrawalUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: withdrawalUpdateManyWithWhereWithoutDepartmentInput | withdrawalUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: withdrawalScalarWhereInput | withdrawalScalarWhereInput[]
  }

  export type receiptCreateNestedManyWithoutProvidorInput = {
    create?: XOR<receiptCreateWithoutProvidorInput, receiptUncheckedCreateWithoutProvidorInput> | receiptCreateWithoutProvidorInput[] | receiptUncheckedCreateWithoutProvidorInput[]
    connectOrCreate?: receiptCreateOrConnectWithoutProvidorInput | receiptCreateOrConnectWithoutProvidorInput[]
    createMany?: receiptCreateManyProvidorInputEnvelope
    connect?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
  }

  export type receiptUncheckedCreateNestedManyWithoutProvidorInput = {
    create?: XOR<receiptCreateWithoutProvidorInput, receiptUncheckedCreateWithoutProvidorInput> | receiptCreateWithoutProvidorInput[] | receiptUncheckedCreateWithoutProvidorInput[]
    connectOrCreate?: receiptCreateOrConnectWithoutProvidorInput | receiptCreateOrConnectWithoutProvidorInput[]
    createMany?: receiptCreateManyProvidorInputEnvelope
    connect?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
  }

  export type receiptUpdateManyWithoutProvidorNestedInput = {
    create?: XOR<receiptCreateWithoutProvidorInput, receiptUncheckedCreateWithoutProvidorInput> | receiptCreateWithoutProvidorInput[] | receiptUncheckedCreateWithoutProvidorInput[]
    connectOrCreate?: receiptCreateOrConnectWithoutProvidorInput | receiptCreateOrConnectWithoutProvidorInput[]
    upsert?: receiptUpsertWithWhereUniqueWithoutProvidorInput | receiptUpsertWithWhereUniqueWithoutProvidorInput[]
    createMany?: receiptCreateManyProvidorInputEnvelope
    set?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
    disconnect?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
    delete?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
    connect?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
    update?: receiptUpdateWithWhereUniqueWithoutProvidorInput | receiptUpdateWithWhereUniqueWithoutProvidorInput[]
    updateMany?: receiptUpdateManyWithWhereWithoutProvidorInput | receiptUpdateManyWithWhereWithoutProvidorInput[]
    deleteMany?: receiptScalarWhereInput | receiptScalarWhereInput[]
  }

  export type receiptUncheckedUpdateManyWithoutProvidorNestedInput = {
    create?: XOR<receiptCreateWithoutProvidorInput, receiptUncheckedCreateWithoutProvidorInput> | receiptCreateWithoutProvidorInput[] | receiptUncheckedCreateWithoutProvidorInput[]
    connectOrCreate?: receiptCreateOrConnectWithoutProvidorInput | receiptCreateOrConnectWithoutProvidorInput[]
    upsert?: receiptUpsertWithWhereUniqueWithoutProvidorInput | receiptUpsertWithWhereUniqueWithoutProvidorInput[]
    createMany?: receiptCreateManyProvidorInputEnvelope
    set?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
    disconnect?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
    delete?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
    connect?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
    update?: receiptUpdateWithWhereUniqueWithoutProvidorInput | receiptUpdateWithWhereUniqueWithoutProvidorInput[]
    updateMany?: receiptUpdateManyWithWhereWithoutProvidorInput | receiptUpdateManyWithWhereWithoutProvidorInput[]
    deleteMany?: receiptScalarWhereInput | receiptScalarWhereInput[]
  }

  export type itemCreateNestedManyWithoutItemParentInput = {
    create?: XOR<itemCreateWithoutItemParentInput, itemUncheckedCreateWithoutItemParentInput> | itemCreateWithoutItemParentInput[] | itemUncheckedCreateWithoutItemParentInput[]
    connectOrCreate?: itemCreateOrConnectWithoutItemParentInput | itemCreateOrConnectWithoutItemParentInput[]
    createMany?: itemCreateManyItemParentInputEnvelope
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
  }

  export type withdrawalItemsCreateNestedManyWithoutItemParentInput = {
    create?: XOR<withdrawalItemsCreateWithoutItemParentInput, withdrawalItemsUncheckedCreateWithoutItemParentInput> | withdrawalItemsCreateWithoutItemParentInput[] | withdrawalItemsUncheckedCreateWithoutItemParentInput[]
    connectOrCreate?: withdrawalItemsCreateOrConnectWithoutItemParentInput | withdrawalItemsCreateOrConnectWithoutItemParentInput[]
    createMany?: withdrawalItemsCreateManyItemParentInputEnvelope
    connect?: withdrawalItemsWhereUniqueInput | withdrawalItemsWhereUniqueInput[]
  }

  export type itemUncheckedCreateNestedManyWithoutItemParentInput = {
    create?: XOR<itemCreateWithoutItemParentInput, itemUncheckedCreateWithoutItemParentInput> | itemCreateWithoutItemParentInput[] | itemUncheckedCreateWithoutItemParentInput[]
    connectOrCreate?: itemCreateOrConnectWithoutItemParentInput | itemCreateOrConnectWithoutItemParentInput[]
    createMany?: itemCreateManyItemParentInputEnvelope
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
  }

  export type withdrawalItemsUncheckedCreateNestedManyWithoutItemParentInput = {
    create?: XOR<withdrawalItemsCreateWithoutItemParentInput, withdrawalItemsUncheckedCreateWithoutItemParentInput> | withdrawalItemsCreateWithoutItemParentInput[] | withdrawalItemsUncheckedCreateWithoutItemParentInput[]
    connectOrCreate?: withdrawalItemsCreateOrConnectWithoutItemParentInput | withdrawalItemsCreateOrConnectWithoutItemParentInput[]
    createMany?: withdrawalItemsCreateManyItemParentInputEnvelope
    connect?: withdrawalItemsWhereUniqueInput | withdrawalItemsWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type itemUpdateManyWithoutItemParentNestedInput = {
    create?: XOR<itemCreateWithoutItemParentInput, itemUncheckedCreateWithoutItemParentInput> | itemCreateWithoutItemParentInput[] | itemUncheckedCreateWithoutItemParentInput[]
    connectOrCreate?: itemCreateOrConnectWithoutItemParentInput | itemCreateOrConnectWithoutItemParentInput[]
    upsert?: itemUpsertWithWhereUniqueWithoutItemParentInput | itemUpsertWithWhereUniqueWithoutItemParentInput[]
    createMany?: itemCreateManyItemParentInputEnvelope
    set?: itemWhereUniqueInput | itemWhereUniqueInput[]
    disconnect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    delete?: itemWhereUniqueInput | itemWhereUniqueInput[]
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    update?: itemUpdateWithWhereUniqueWithoutItemParentInput | itemUpdateWithWhereUniqueWithoutItemParentInput[]
    updateMany?: itemUpdateManyWithWhereWithoutItemParentInput | itemUpdateManyWithWhereWithoutItemParentInput[]
    deleteMany?: itemScalarWhereInput | itemScalarWhereInput[]
  }

  export type withdrawalItemsUpdateManyWithoutItemParentNestedInput = {
    create?: XOR<withdrawalItemsCreateWithoutItemParentInput, withdrawalItemsUncheckedCreateWithoutItemParentInput> | withdrawalItemsCreateWithoutItemParentInput[] | withdrawalItemsUncheckedCreateWithoutItemParentInput[]
    connectOrCreate?: withdrawalItemsCreateOrConnectWithoutItemParentInput | withdrawalItemsCreateOrConnectWithoutItemParentInput[]
    upsert?: withdrawalItemsUpsertWithWhereUniqueWithoutItemParentInput | withdrawalItemsUpsertWithWhereUniqueWithoutItemParentInput[]
    createMany?: withdrawalItemsCreateManyItemParentInputEnvelope
    set?: withdrawalItemsWhereUniqueInput | withdrawalItemsWhereUniqueInput[]
    disconnect?: withdrawalItemsWhereUniqueInput | withdrawalItemsWhereUniqueInput[]
    delete?: withdrawalItemsWhereUniqueInput | withdrawalItemsWhereUniqueInput[]
    connect?: withdrawalItemsWhereUniqueInput | withdrawalItemsWhereUniqueInput[]
    update?: withdrawalItemsUpdateWithWhereUniqueWithoutItemParentInput | withdrawalItemsUpdateWithWhereUniqueWithoutItemParentInput[]
    updateMany?: withdrawalItemsUpdateManyWithWhereWithoutItemParentInput | withdrawalItemsUpdateManyWithWhereWithoutItemParentInput[]
    deleteMany?: withdrawalItemsScalarWhereInput | withdrawalItemsScalarWhereInput[]
  }

  export type itemUncheckedUpdateManyWithoutItemParentNestedInput = {
    create?: XOR<itemCreateWithoutItemParentInput, itemUncheckedCreateWithoutItemParentInput> | itemCreateWithoutItemParentInput[] | itemUncheckedCreateWithoutItemParentInput[]
    connectOrCreate?: itemCreateOrConnectWithoutItemParentInput | itemCreateOrConnectWithoutItemParentInput[]
    upsert?: itemUpsertWithWhereUniqueWithoutItemParentInput | itemUpsertWithWhereUniqueWithoutItemParentInput[]
    createMany?: itemCreateManyItemParentInputEnvelope
    set?: itemWhereUniqueInput | itemWhereUniqueInput[]
    disconnect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    delete?: itemWhereUniqueInput | itemWhereUniqueInput[]
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    update?: itemUpdateWithWhereUniqueWithoutItemParentInput | itemUpdateWithWhereUniqueWithoutItemParentInput[]
    updateMany?: itemUpdateManyWithWhereWithoutItemParentInput | itemUpdateManyWithWhereWithoutItemParentInput[]
    deleteMany?: itemScalarWhereInput | itemScalarWhereInput[]
  }

  export type withdrawalItemsUncheckedUpdateManyWithoutItemParentNestedInput = {
    create?: XOR<withdrawalItemsCreateWithoutItemParentInput, withdrawalItemsUncheckedCreateWithoutItemParentInput> | withdrawalItemsCreateWithoutItemParentInput[] | withdrawalItemsUncheckedCreateWithoutItemParentInput[]
    connectOrCreate?: withdrawalItemsCreateOrConnectWithoutItemParentInput | withdrawalItemsCreateOrConnectWithoutItemParentInput[]
    upsert?: withdrawalItemsUpsertWithWhereUniqueWithoutItemParentInput | withdrawalItemsUpsertWithWhereUniqueWithoutItemParentInput[]
    createMany?: withdrawalItemsCreateManyItemParentInputEnvelope
    set?: withdrawalItemsWhereUniqueInput | withdrawalItemsWhereUniqueInput[]
    disconnect?: withdrawalItemsWhereUniqueInput | withdrawalItemsWhereUniqueInput[]
    delete?: withdrawalItemsWhereUniqueInput | withdrawalItemsWhereUniqueInput[]
    connect?: withdrawalItemsWhereUniqueInput | withdrawalItemsWhereUniqueInput[]
    update?: withdrawalItemsUpdateWithWhereUniqueWithoutItemParentInput | withdrawalItemsUpdateWithWhereUniqueWithoutItemParentInput[]
    updateMany?: withdrawalItemsUpdateManyWithWhereWithoutItemParentInput | withdrawalItemsUpdateManyWithWhereWithoutItemParentInput[]
    deleteMany?: withdrawalItemsScalarWhereInput | withdrawalItemsScalarWhereInput[]
  }

  export type withdrawalCreateNestedOneWithoutStockItmesInput = {
    create?: XOR<withdrawalCreateWithoutStockItmesInput, withdrawalUncheckedCreateWithoutStockItmesInput>
    connectOrCreate?: withdrawalCreateOrConnectWithoutStockItmesInput
    connect?: withdrawalWhereUniqueInput
  }

  export type userCreateNestedOneWithoutItemsInput = {
    create?: XOR<userCreateWithoutItemsInput, userUncheckedCreateWithoutItemsInput>
    connectOrCreate?: userCreateOrConnectWithoutItemsInput
    connect?: userWhereUniqueInput
  }

  export type itemParentCreateNestedOneWithoutItemsInput = {
    create?: XOR<itemParentCreateWithoutItemsInput, itemParentUncheckedCreateWithoutItemsInput>
    connectOrCreate?: itemParentCreateOrConnectWithoutItemsInput
    connect?: itemParentWhereUniqueInput
  }

  export type receiptCreateNestedOneWithoutStockItmesInput = {
    create?: XOR<receiptCreateWithoutStockItmesInput, receiptUncheckedCreateWithoutStockItmesInput>
    connectOrCreate?: receiptCreateOrConnectWithoutStockItmesInput
    connect?: receiptWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type withdrawalUpdateOneWithoutStockItmesNestedInput = {
    create?: XOR<withdrawalCreateWithoutStockItmesInput, withdrawalUncheckedCreateWithoutStockItmesInput>
    connectOrCreate?: withdrawalCreateOrConnectWithoutStockItmesInput
    upsert?: withdrawalUpsertWithoutStockItmesInput
    disconnect?: withdrawalWhereInput | boolean
    delete?: withdrawalWhereInput | boolean
    connect?: withdrawalWhereUniqueInput
    update?: XOR<XOR<withdrawalUpdateToOneWithWhereWithoutStockItmesInput, withdrawalUpdateWithoutStockItmesInput>, withdrawalUncheckedUpdateWithoutStockItmesInput>
  }

  export type userUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<userCreateWithoutItemsInput, userUncheckedCreateWithoutItemsInput>
    connectOrCreate?: userCreateOrConnectWithoutItemsInput
    upsert?: userUpsertWithoutItemsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutItemsInput, userUpdateWithoutItemsInput>, userUncheckedUpdateWithoutItemsInput>
  }

  export type itemParentUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<itemParentCreateWithoutItemsInput, itemParentUncheckedCreateWithoutItemsInput>
    connectOrCreate?: itemParentCreateOrConnectWithoutItemsInput
    upsert?: itemParentUpsertWithoutItemsInput
    connect?: itemParentWhereUniqueInput
    update?: XOR<XOR<itemParentUpdateToOneWithWhereWithoutItemsInput, itemParentUpdateWithoutItemsInput>, itemParentUncheckedUpdateWithoutItemsInput>
  }

  export type receiptUpdateOneWithoutStockItmesNestedInput = {
    create?: XOR<receiptCreateWithoutStockItmesInput, receiptUncheckedCreateWithoutStockItmesInput>
    connectOrCreate?: receiptCreateOrConnectWithoutStockItmesInput
    upsert?: receiptUpsertWithoutStockItmesInput
    disconnect?: receiptWhereInput | boolean
    delete?: receiptWhereInput | boolean
    connect?: receiptWhereUniqueInput
    update?: XOR<XOR<receiptUpdateToOneWithWhereWithoutStockItmesInput, receiptUpdateWithoutStockItmesInput>, receiptUncheckedUpdateWithoutStockItmesInput>
  }

  export type receiptItemsCreateNestedManyWithoutReceiptInput = {
    create?: XOR<receiptItemsCreateWithoutReceiptInput, receiptItemsUncheckedCreateWithoutReceiptInput> | receiptItemsCreateWithoutReceiptInput[] | receiptItemsUncheckedCreateWithoutReceiptInput[]
    connectOrCreate?: receiptItemsCreateOrConnectWithoutReceiptInput | receiptItemsCreateOrConnectWithoutReceiptInput[]
    createMany?: receiptItemsCreateManyReceiptInputEnvelope
    connect?: receiptItemsWhereUniqueInput | receiptItemsWhereUniqueInput[]
  }

  export type itemCreateNestedManyWithoutReceiptInput = {
    create?: XOR<itemCreateWithoutReceiptInput, itemUncheckedCreateWithoutReceiptInput> | itemCreateWithoutReceiptInput[] | itemUncheckedCreateWithoutReceiptInput[]
    connectOrCreate?: itemCreateOrConnectWithoutReceiptInput | itemCreateOrConnectWithoutReceiptInput[]
    createMany?: itemCreateManyReceiptInputEnvelope
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
  }

  export type providorCreateNestedOneWithoutReceiptsInput = {
    create?: XOR<providorCreateWithoutReceiptsInput, providorUncheckedCreateWithoutReceiptsInput>
    connectOrCreate?: providorCreateOrConnectWithoutReceiptsInput
    connect?: providorWhereUniqueInput
  }

  export type receiptItemsUncheckedCreateNestedManyWithoutReceiptInput = {
    create?: XOR<receiptItemsCreateWithoutReceiptInput, receiptItemsUncheckedCreateWithoutReceiptInput> | receiptItemsCreateWithoutReceiptInput[] | receiptItemsUncheckedCreateWithoutReceiptInput[]
    connectOrCreate?: receiptItemsCreateOrConnectWithoutReceiptInput | receiptItemsCreateOrConnectWithoutReceiptInput[]
    createMany?: receiptItemsCreateManyReceiptInputEnvelope
    connect?: receiptItemsWhereUniqueInput | receiptItemsWhereUniqueInput[]
  }

  export type itemUncheckedCreateNestedManyWithoutReceiptInput = {
    create?: XOR<itemCreateWithoutReceiptInput, itemUncheckedCreateWithoutReceiptInput> | itemCreateWithoutReceiptInput[] | itemUncheckedCreateWithoutReceiptInput[]
    connectOrCreate?: itemCreateOrConnectWithoutReceiptInput | itemCreateOrConnectWithoutReceiptInput[]
    createMany?: itemCreateManyReceiptInputEnvelope
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
  }

  export type receiptItemsUpdateManyWithoutReceiptNestedInput = {
    create?: XOR<receiptItemsCreateWithoutReceiptInput, receiptItemsUncheckedCreateWithoutReceiptInput> | receiptItemsCreateWithoutReceiptInput[] | receiptItemsUncheckedCreateWithoutReceiptInput[]
    connectOrCreate?: receiptItemsCreateOrConnectWithoutReceiptInput | receiptItemsCreateOrConnectWithoutReceiptInput[]
    upsert?: receiptItemsUpsertWithWhereUniqueWithoutReceiptInput | receiptItemsUpsertWithWhereUniqueWithoutReceiptInput[]
    createMany?: receiptItemsCreateManyReceiptInputEnvelope
    set?: receiptItemsWhereUniqueInput | receiptItemsWhereUniqueInput[]
    disconnect?: receiptItemsWhereUniqueInput | receiptItemsWhereUniqueInput[]
    delete?: receiptItemsWhereUniqueInput | receiptItemsWhereUniqueInput[]
    connect?: receiptItemsWhereUniqueInput | receiptItemsWhereUniqueInput[]
    update?: receiptItemsUpdateWithWhereUniqueWithoutReceiptInput | receiptItemsUpdateWithWhereUniqueWithoutReceiptInput[]
    updateMany?: receiptItemsUpdateManyWithWhereWithoutReceiptInput | receiptItemsUpdateManyWithWhereWithoutReceiptInput[]
    deleteMany?: receiptItemsScalarWhereInput | receiptItemsScalarWhereInput[]
  }

  export type itemUpdateManyWithoutReceiptNestedInput = {
    create?: XOR<itemCreateWithoutReceiptInput, itemUncheckedCreateWithoutReceiptInput> | itemCreateWithoutReceiptInput[] | itemUncheckedCreateWithoutReceiptInput[]
    connectOrCreate?: itemCreateOrConnectWithoutReceiptInput | itemCreateOrConnectWithoutReceiptInput[]
    upsert?: itemUpsertWithWhereUniqueWithoutReceiptInput | itemUpsertWithWhereUniqueWithoutReceiptInput[]
    createMany?: itemCreateManyReceiptInputEnvelope
    set?: itemWhereUniqueInput | itemWhereUniqueInput[]
    disconnect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    delete?: itemWhereUniqueInput | itemWhereUniqueInput[]
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    update?: itemUpdateWithWhereUniqueWithoutReceiptInput | itemUpdateWithWhereUniqueWithoutReceiptInput[]
    updateMany?: itemUpdateManyWithWhereWithoutReceiptInput | itemUpdateManyWithWhereWithoutReceiptInput[]
    deleteMany?: itemScalarWhereInput | itemScalarWhereInput[]
  }

  export type providorUpdateOneRequiredWithoutReceiptsNestedInput = {
    create?: XOR<providorCreateWithoutReceiptsInput, providorUncheckedCreateWithoutReceiptsInput>
    connectOrCreate?: providorCreateOrConnectWithoutReceiptsInput
    upsert?: providorUpsertWithoutReceiptsInput
    connect?: providorWhereUniqueInput
    update?: XOR<XOR<providorUpdateToOneWithWhereWithoutReceiptsInput, providorUpdateWithoutReceiptsInput>, providorUncheckedUpdateWithoutReceiptsInput>
  }

  export type receiptItemsUncheckedUpdateManyWithoutReceiptNestedInput = {
    create?: XOR<receiptItemsCreateWithoutReceiptInput, receiptItemsUncheckedCreateWithoutReceiptInput> | receiptItemsCreateWithoutReceiptInput[] | receiptItemsUncheckedCreateWithoutReceiptInput[]
    connectOrCreate?: receiptItemsCreateOrConnectWithoutReceiptInput | receiptItemsCreateOrConnectWithoutReceiptInput[]
    upsert?: receiptItemsUpsertWithWhereUniqueWithoutReceiptInput | receiptItemsUpsertWithWhereUniqueWithoutReceiptInput[]
    createMany?: receiptItemsCreateManyReceiptInputEnvelope
    set?: receiptItemsWhereUniqueInput | receiptItemsWhereUniqueInput[]
    disconnect?: receiptItemsWhereUniqueInput | receiptItemsWhereUniqueInput[]
    delete?: receiptItemsWhereUniqueInput | receiptItemsWhereUniqueInput[]
    connect?: receiptItemsWhereUniqueInput | receiptItemsWhereUniqueInput[]
    update?: receiptItemsUpdateWithWhereUniqueWithoutReceiptInput | receiptItemsUpdateWithWhereUniqueWithoutReceiptInput[]
    updateMany?: receiptItemsUpdateManyWithWhereWithoutReceiptInput | receiptItemsUpdateManyWithWhereWithoutReceiptInput[]
    deleteMany?: receiptItemsScalarWhereInput | receiptItemsScalarWhereInput[]
  }

  export type itemUncheckedUpdateManyWithoutReceiptNestedInput = {
    create?: XOR<itemCreateWithoutReceiptInput, itemUncheckedCreateWithoutReceiptInput> | itemCreateWithoutReceiptInput[] | itemUncheckedCreateWithoutReceiptInput[]
    connectOrCreate?: itemCreateOrConnectWithoutReceiptInput | itemCreateOrConnectWithoutReceiptInput[]
    upsert?: itemUpsertWithWhereUniqueWithoutReceiptInput | itemUpsertWithWhereUniqueWithoutReceiptInput[]
    createMany?: itemCreateManyReceiptInputEnvelope
    set?: itemWhereUniqueInput | itemWhereUniqueInput[]
    disconnect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    delete?: itemWhereUniqueInput | itemWhereUniqueInput[]
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    update?: itemUpdateWithWhereUniqueWithoutReceiptInput | itemUpdateWithWhereUniqueWithoutReceiptInput[]
    updateMany?: itemUpdateManyWithWhereWithoutReceiptInput | itemUpdateManyWithWhereWithoutReceiptInput[]
    deleteMany?: itemScalarWhereInput | itemScalarWhereInput[]
  }

  export type receiptCreateNestedOneWithoutItemsInput = {
    create?: XOR<receiptCreateWithoutItemsInput, receiptUncheckedCreateWithoutItemsInput>
    connectOrCreate?: receiptCreateOrConnectWithoutItemsInput
    connect?: receiptWhereUniqueInput
  }

  export type receiptUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<receiptCreateWithoutItemsInput, receiptUncheckedCreateWithoutItemsInput>
    connectOrCreate?: receiptCreateOrConnectWithoutItemsInput
    upsert?: receiptUpsertWithoutItemsInput
    connect?: receiptWhereUniqueInput
    update?: XOR<XOR<receiptUpdateToOneWithWhereWithoutItemsInput, receiptUpdateWithoutItemsInput>, receiptUncheckedUpdateWithoutItemsInput>
  }

  export type receiptCartItemsCreateNestedManyWithoutCartInput = {
    create?: XOR<receiptCartItemsCreateWithoutCartInput, receiptCartItemsUncheckedCreateWithoutCartInput> | receiptCartItemsCreateWithoutCartInput[] | receiptCartItemsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: receiptCartItemsCreateOrConnectWithoutCartInput | receiptCartItemsCreateOrConnectWithoutCartInput[]
    createMany?: receiptCartItemsCreateManyCartInputEnvelope
    connect?: receiptCartItemsWhereUniqueInput | receiptCartItemsWhereUniqueInput[]
  }

  export type receiptCartItemsUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<receiptCartItemsCreateWithoutCartInput, receiptCartItemsUncheckedCreateWithoutCartInput> | receiptCartItemsCreateWithoutCartInput[] | receiptCartItemsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: receiptCartItemsCreateOrConnectWithoutCartInput | receiptCartItemsCreateOrConnectWithoutCartInput[]
    createMany?: receiptCartItemsCreateManyCartInputEnvelope
    connect?: receiptCartItemsWhereUniqueInput | receiptCartItemsWhereUniqueInput[]
  }

  export type receiptCartItemsUpdateManyWithoutCartNestedInput = {
    create?: XOR<receiptCartItemsCreateWithoutCartInput, receiptCartItemsUncheckedCreateWithoutCartInput> | receiptCartItemsCreateWithoutCartInput[] | receiptCartItemsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: receiptCartItemsCreateOrConnectWithoutCartInput | receiptCartItemsCreateOrConnectWithoutCartInput[]
    upsert?: receiptCartItemsUpsertWithWhereUniqueWithoutCartInput | receiptCartItemsUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: receiptCartItemsCreateManyCartInputEnvelope
    set?: receiptCartItemsWhereUniqueInput | receiptCartItemsWhereUniqueInput[]
    disconnect?: receiptCartItemsWhereUniqueInput | receiptCartItemsWhereUniqueInput[]
    delete?: receiptCartItemsWhereUniqueInput | receiptCartItemsWhereUniqueInput[]
    connect?: receiptCartItemsWhereUniqueInput | receiptCartItemsWhereUniqueInput[]
    update?: receiptCartItemsUpdateWithWhereUniqueWithoutCartInput | receiptCartItemsUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: receiptCartItemsUpdateManyWithWhereWithoutCartInput | receiptCartItemsUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: receiptCartItemsScalarWhereInput | receiptCartItemsScalarWhereInput[]
  }

  export type receiptCartItemsUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<receiptCartItemsCreateWithoutCartInput, receiptCartItemsUncheckedCreateWithoutCartInput> | receiptCartItemsCreateWithoutCartInput[] | receiptCartItemsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: receiptCartItemsCreateOrConnectWithoutCartInput | receiptCartItemsCreateOrConnectWithoutCartInput[]
    upsert?: receiptCartItemsUpsertWithWhereUniqueWithoutCartInput | receiptCartItemsUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: receiptCartItemsCreateManyCartInputEnvelope
    set?: receiptCartItemsWhereUniqueInput | receiptCartItemsWhereUniqueInput[]
    disconnect?: receiptCartItemsWhereUniqueInput | receiptCartItemsWhereUniqueInput[]
    delete?: receiptCartItemsWhereUniqueInput | receiptCartItemsWhereUniqueInput[]
    connect?: receiptCartItemsWhereUniqueInput | receiptCartItemsWhereUniqueInput[]
    update?: receiptCartItemsUpdateWithWhereUniqueWithoutCartInput | receiptCartItemsUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: receiptCartItemsUpdateManyWithWhereWithoutCartInput | receiptCartItemsUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: receiptCartItemsScalarWhereInput | receiptCartItemsScalarWhereInput[]
  }

  export type receiptCartCreateNestedOneWithoutItemsInput = {
    create?: XOR<receiptCartCreateWithoutItemsInput, receiptCartUncheckedCreateWithoutItemsInput>
    connectOrCreate?: receiptCartCreateOrConnectWithoutItemsInput
    connect?: receiptCartWhereUniqueInput
  }

  export type receiptCartUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<receiptCartCreateWithoutItemsInput, receiptCartUncheckedCreateWithoutItemsInput>
    connectOrCreate?: receiptCartCreateOrConnectWithoutItemsInput
    upsert?: receiptCartUpsertWithoutItemsInput
    connect?: receiptCartWhereUniqueInput
    update?: XOR<XOR<receiptCartUpdateToOneWithWhereWithoutItemsInput, receiptCartUpdateWithoutItemsInput>, receiptCartUncheckedUpdateWithoutItemsInput>
  }

  export type departmentCreateNestedOneWithoutWithdrawalsInput = {
    create?: XOR<departmentCreateWithoutWithdrawalsInput, departmentUncheckedCreateWithoutWithdrawalsInput>
    connectOrCreate?: departmentCreateOrConnectWithoutWithdrawalsInput
    connect?: departmentWhereUniqueInput
  }

  export type withdrawalItemsCreateNestedManyWithoutWithdrawalInput = {
    create?: XOR<withdrawalItemsCreateWithoutWithdrawalInput, withdrawalItemsUncheckedCreateWithoutWithdrawalInput> | withdrawalItemsCreateWithoutWithdrawalInput[] | withdrawalItemsUncheckedCreateWithoutWithdrawalInput[]
    connectOrCreate?: withdrawalItemsCreateOrConnectWithoutWithdrawalInput | withdrawalItemsCreateOrConnectWithoutWithdrawalInput[]
    createMany?: withdrawalItemsCreateManyWithdrawalInputEnvelope
    connect?: withdrawalItemsWhereUniqueInput | withdrawalItemsWhereUniqueInput[]
  }

  export type userCreateNestedOneWithoutWithdrawalsInput = {
    create?: XOR<userCreateWithoutWithdrawalsInput, userUncheckedCreateWithoutWithdrawalsInput>
    connectOrCreate?: userCreateOrConnectWithoutWithdrawalsInput
    connect?: userWhereUniqueInput
  }

  export type itemCreateNestedManyWithoutWithdrawalInput = {
    create?: XOR<itemCreateWithoutWithdrawalInput, itemUncheckedCreateWithoutWithdrawalInput> | itemCreateWithoutWithdrawalInput[] | itemUncheckedCreateWithoutWithdrawalInput[]
    connectOrCreate?: itemCreateOrConnectWithoutWithdrawalInput | itemCreateOrConnectWithoutWithdrawalInput[]
    createMany?: itemCreateManyWithdrawalInputEnvelope
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
  }

  export type withdrawalItemsUncheckedCreateNestedManyWithoutWithdrawalInput = {
    create?: XOR<withdrawalItemsCreateWithoutWithdrawalInput, withdrawalItemsUncheckedCreateWithoutWithdrawalInput> | withdrawalItemsCreateWithoutWithdrawalInput[] | withdrawalItemsUncheckedCreateWithoutWithdrawalInput[]
    connectOrCreate?: withdrawalItemsCreateOrConnectWithoutWithdrawalInput | withdrawalItemsCreateOrConnectWithoutWithdrawalInput[]
    createMany?: withdrawalItemsCreateManyWithdrawalInputEnvelope
    connect?: withdrawalItemsWhereUniqueInput | withdrawalItemsWhereUniqueInput[]
  }

  export type itemUncheckedCreateNestedManyWithoutWithdrawalInput = {
    create?: XOR<itemCreateWithoutWithdrawalInput, itemUncheckedCreateWithoutWithdrawalInput> | itemCreateWithoutWithdrawalInput[] | itemUncheckedCreateWithoutWithdrawalInput[]
    connectOrCreate?: itemCreateOrConnectWithoutWithdrawalInput | itemCreateOrConnectWithoutWithdrawalInput[]
    createMany?: itemCreateManyWithdrawalInputEnvelope
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
  }

  export type departmentUpdateOneRequiredWithoutWithdrawalsNestedInput = {
    create?: XOR<departmentCreateWithoutWithdrawalsInput, departmentUncheckedCreateWithoutWithdrawalsInput>
    connectOrCreate?: departmentCreateOrConnectWithoutWithdrawalsInput
    upsert?: departmentUpsertWithoutWithdrawalsInput
    connect?: departmentWhereUniqueInput
    update?: XOR<XOR<departmentUpdateToOneWithWhereWithoutWithdrawalsInput, departmentUpdateWithoutWithdrawalsInput>, departmentUncheckedUpdateWithoutWithdrawalsInput>
  }

  export type withdrawalItemsUpdateManyWithoutWithdrawalNestedInput = {
    create?: XOR<withdrawalItemsCreateWithoutWithdrawalInput, withdrawalItemsUncheckedCreateWithoutWithdrawalInput> | withdrawalItemsCreateWithoutWithdrawalInput[] | withdrawalItemsUncheckedCreateWithoutWithdrawalInput[]
    connectOrCreate?: withdrawalItemsCreateOrConnectWithoutWithdrawalInput | withdrawalItemsCreateOrConnectWithoutWithdrawalInput[]
    upsert?: withdrawalItemsUpsertWithWhereUniqueWithoutWithdrawalInput | withdrawalItemsUpsertWithWhereUniqueWithoutWithdrawalInput[]
    createMany?: withdrawalItemsCreateManyWithdrawalInputEnvelope
    set?: withdrawalItemsWhereUniqueInput | withdrawalItemsWhereUniqueInput[]
    disconnect?: withdrawalItemsWhereUniqueInput | withdrawalItemsWhereUniqueInput[]
    delete?: withdrawalItemsWhereUniqueInput | withdrawalItemsWhereUniqueInput[]
    connect?: withdrawalItemsWhereUniqueInput | withdrawalItemsWhereUniqueInput[]
    update?: withdrawalItemsUpdateWithWhereUniqueWithoutWithdrawalInput | withdrawalItemsUpdateWithWhereUniqueWithoutWithdrawalInput[]
    updateMany?: withdrawalItemsUpdateManyWithWhereWithoutWithdrawalInput | withdrawalItemsUpdateManyWithWhereWithoutWithdrawalInput[]
    deleteMany?: withdrawalItemsScalarWhereInput | withdrawalItemsScalarWhereInput[]
  }

  export type userUpdateOneRequiredWithoutWithdrawalsNestedInput = {
    create?: XOR<userCreateWithoutWithdrawalsInput, userUncheckedCreateWithoutWithdrawalsInput>
    connectOrCreate?: userCreateOrConnectWithoutWithdrawalsInput
    upsert?: userUpsertWithoutWithdrawalsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutWithdrawalsInput, userUpdateWithoutWithdrawalsInput>, userUncheckedUpdateWithoutWithdrawalsInput>
  }

  export type itemUpdateManyWithoutWithdrawalNestedInput = {
    create?: XOR<itemCreateWithoutWithdrawalInput, itemUncheckedCreateWithoutWithdrawalInput> | itemCreateWithoutWithdrawalInput[] | itemUncheckedCreateWithoutWithdrawalInput[]
    connectOrCreate?: itemCreateOrConnectWithoutWithdrawalInput | itemCreateOrConnectWithoutWithdrawalInput[]
    upsert?: itemUpsertWithWhereUniqueWithoutWithdrawalInput | itemUpsertWithWhereUniqueWithoutWithdrawalInput[]
    createMany?: itemCreateManyWithdrawalInputEnvelope
    set?: itemWhereUniqueInput | itemWhereUniqueInput[]
    disconnect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    delete?: itemWhereUniqueInput | itemWhereUniqueInput[]
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    update?: itemUpdateWithWhereUniqueWithoutWithdrawalInput | itemUpdateWithWhereUniqueWithoutWithdrawalInput[]
    updateMany?: itemUpdateManyWithWhereWithoutWithdrawalInput | itemUpdateManyWithWhereWithoutWithdrawalInput[]
    deleteMany?: itemScalarWhereInput | itemScalarWhereInput[]
  }

  export type withdrawalItemsUncheckedUpdateManyWithoutWithdrawalNestedInput = {
    create?: XOR<withdrawalItemsCreateWithoutWithdrawalInput, withdrawalItemsUncheckedCreateWithoutWithdrawalInput> | withdrawalItemsCreateWithoutWithdrawalInput[] | withdrawalItemsUncheckedCreateWithoutWithdrawalInput[]
    connectOrCreate?: withdrawalItemsCreateOrConnectWithoutWithdrawalInput | withdrawalItemsCreateOrConnectWithoutWithdrawalInput[]
    upsert?: withdrawalItemsUpsertWithWhereUniqueWithoutWithdrawalInput | withdrawalItemsUpsertWithWhereUniqueWithoutWithdrawalInput[]
    createMany?: withdrawalItemsCreateManyWithdrawalInputEnvelope
    set?: withdrawalItemsWhereUniqueInput | withdrawalItemsWhereUniqueInput[]
    disconnect?: withdrawalItemsWhereUniqueInput | withdrawalItemsWhereUniqueInput[]
    delete?: withdrawalItemsWhereUniqueInput | withdrawalItemsWhereUniqueInput[]
    connect?: withdrawalItemsWhereUniqueInput | withdrawalItemsWhereUniqueInput[]
    update?: withdrawalItemsUpdateWithWhereUniqueWithoutWithdrawalInput | withdrawalItemsUpdateWithWhereUniqueWithoutWithdrawalInput[]
    updateMany?: withdrawalItemsUpdateManyWithWhereWithoutWithdrawalInput | withdrawalItemsUpdateManyWithWhereWithoutWithdrawalInput[]
    deleteMany?: withdrawalItemsScalarWhereInput | withdrawalItemsScalarWhereInput[]
  }

  export type itemUncheckedUpdateManyWithoutWithdrawalNestedInput = {
    create?: XOR<itemCreateWithoutWithdrawalInput, itemUncheckedCreateWithoutWithdrawalInput> | itemCreateWithoutWithdrawalInput[] | itemUncheckedCreateWithoutWithdrawalInput[]
    connectOrCreate?: itemCreateOrConnectWithoutWithdrawalInput | itemCreateOrConnectWithoutWithdrawalInput[]
    upsert?: itemUpsertWithWhereUniqueWithoutWithdrawalInput | itemUpsertWithWhereUniqueWithoutWithdrawalInput[]
    createMany?: itemCreateManyWithdrawalInputEnvelope
    set?: itemWhereUniqueInput | itemWhereUniqueInput[]
    disconnect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    delete?: itemWhereUniqueInput | itemWhereUniqueInput[]
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    update?: itemUpdateWithWhereUniqueWithoutWithdrawalInput | itemUpdateWithWhereUniqueWithoutWithdrawalInput[]
    updateMany?: itemUpdateManyWithWhereWithoutWithdrawalInput | itemUpdateManyWithWhereWithoutWithdrawalInput[]
    deleteMany?: itemScalarWhereInput | itemScalarWhereInput[]
  }

  export type withdrawalCreateNestedOneWithoutItemsInput = {
    create?: XOR<withdrawalCreateWithoutItemsInput, withdrawalUncheckedCreateWithoutItemsInput>
    connectOrCreate?: withdrawalCreateOrConnectWithoutItemsInput
    connect?: withdrawalWhereUniqueInput
  }

  export type itemParentCreateNestedOneWithoutWithdrawalsInput = {
    create?: XOR<itemParentCreateWithoutWithdrawalsInput, itemParentUncheckedCreateWithoutWithdrawalsInput>
    connectOrCreate?: itemParentCreateOrConnectWithoutWithdrawalsInput
    connect?: itemParentWhereUniqueInput
  }

  export type userCreateNestedOneWithoutWithdrawalItemsInput = {
    create?: XOR<userCreateWithoutWithdrawalItemsInput, userUncheckedCreateWithoutWithdrawalItemsInput>
    connectOrCreate?: userCreateOrConnectWithoutWithdrawalItemsInput
    connect?: userWhereUniqueInput
  }

  export type withdrawalUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<withdrawalCreateWithoutItemsInput, withdrawalUncheckedCreateWithoutItemsInput>
    connectOrCreate?: withdrawalCreateOrConnectWithoutItemsInput
    upsert?: withdrawalUpsertWithoutItemsInput
    connect?: withdrawalWhereUniqueInput
    update?: XOR<XOR<withdrawalUpdateToOneWithWhereWithoutItemsInput, withdrawalUpdateWithoutItemsInput>, withdrawalUncheckedUpdateWithoutItemsInput>
  }

  export type itemParentUpdateOneRequiredWithoutWithdrawalsNestedInput = {
    create?: XOR<itemParentCreateWithoutWithdrawalsInput, itemParentUncheckedCreateWithoutWithdrawalsInput>
    connectOrCreate?: itemParentCreateOrConnectWithoutWithdrawalsInput
    upsert?: itemParentUpsertWithoutWithdrawalsInput
    connect?: itemParentWhereUniqueInput
    update?: XOR<XOR<itemParentUpdateToOneWithWhereWithoutWithdrawalsInput, itemParentUpdateWithoutWithdrawalsInput>, itemParentUncheckedUpdateWithoutWithdrawalsInput>
  }

  export type userUpdateOneWithoutWithdrawalItemsNestedInput = {
    create?: XOR<userCreateWithoutWithdrawalItemsInput, userUncheckedCreateWithoutWithdrawalItemsInput>
    connectOrCreate?: userCreateOrConnectWithoutWithdrawalItemsInput
    upsert?: userUpsertWithoutWithdrawalItemsInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutWithdrawalItemsInput, userUpdateWithoutWithdrawalItemsInput>, userUncheckedUpdateWithoutWithdrawalItemsInput>
  }

  export type userCreateNestedOneWithoutWithdrawalCartInput = {
    create?: XOR<userCreateWithoutWithdrawalCartInput, userUncheckedCreateWithoutWithdrawalCartInput>
    connectOrCreate?: userCreateOrConnectWithoutWithdrawalCartInput
    connect?: userWhereUniqueInput
  }

  export type withdrawalCartItemsCreateNestedManyWithoutCartInput = {
    create?: XOR<withdrawalCartItemsCreateWithoutCartInput, withdrawalCartItemsUncheckedCreateWithoutCartInput> | withdrawalCartItemsCreateWithoutCartInput[] | withdrawalCartItemsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: withdrawalCartItemsCreateOrConnectWithoutCartInput | withdrawalCartItemsCreateOrConnectWithoutCartInput[]
    createMany?: withdrawalCartItemsCreateManyCartInputEnvelope
    connect?: withdrawalCartItemsWhereUniqueInput | withdrawalCartItemsWhereUniqueInput[]
  }

  export type withdrawalCartItemsUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<withdrawalCartItemsCreateWithoutCartInput, withdrawalCartItemsUncheckedCreateWithoutCartInput> | withdrawalCartItemsCreateWithoutCartInput[] | withdrawalCartItemsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: withdrawalCartItemsCreateOrConnectWithoutCartInput | withdrawalCartItemsCreateOrConnectWithoutCartInput[]
    createMany?: withdrawalCartItemsCreateManyCartInputEnvelope
    connect?: withdrawalCartItemsWhereUniqueInput | withdrawalCartItemsWhereUniqueInput[]
  }

  export type userUpdateOneRequiredWithoutWithdrawalCartNestedInput = {
    create?: XOR<userCreateWithoutWithdrawalCartInput, userUncheckedCreateWithoutWithdrawalCartInput>
    connectOrCreate?: userCreateOrConnectWithoutWithdrawalCartInput
    upsert?: userUpsertWithoutWithdrawalCartInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutWithdrawalCartInput, userUpdateWithoutWithdrawalCartInput>, userUncheckedUpdateWithoutWithdrawalCartInput>
  }

  export type withdrawalCartItemsUpdateManyWithoutCartNestedInput = {
    create?: XOR<withdrawalCartItemsCreateWithoutCartInput, withdrawalCartItemsUncheckedCreateWithoutCartInput> | withdrawalCartItemsCreateWithoutCartInput[] | withdrawalCartItemsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: withdrawalCartItemsCreateOrConnectWithoutCartInput | withdrawalCartItemsCreateOrConnectWithoutCartInput[]
    upsert?: withdrawalCartItemsUpsertWithWhereUniqueWithoutCartInput | withdrawalCartItemsUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: withdrawalCartItemsCreateManyCartInputEnvelope
    set?: withdrawalCartItemsWhereUniqueInput | withdrawalCartItemsWhereUniqueInput[]
    disconnect?: withdrawalCartItemsWhereUniqueInput | withdrawalCartItemsWhereUniqueInput[]
    delete?: withdrawalCartItemsWhereUniqueInput | withdrawalCartItemsWhereUniqueInput[]
    connect?: withdrawalCartItemsWhereUniqueInput | withdrawalCartItemsWhereUniqueInput[]
    update?: withdrawalCartItemsUpdateWithWhereUniqueWithoutCartInput | withdrawalCartItemsUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: withdrawalCartItemsUpdateManyWithWhereWithoutCartInput | withdrawalCartItemsUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: withdrawalCartItemsScalarWhereInput | withdrawalCartItemsScalarWhereInput[]
  }

  export type withdrawalCartItemsUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<withdrawalCartItemsCreateWithoutCartInput, withdrawalCartItemsUncheckedCreateWithoutCartInput> | withdrawalCartItemsCreateWithoutCartInput[] | withdrawalCartItemsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: withdrawalCartItemsCreateOrConnectWithoutCartInput | withdrawalCartItemsCreateOrConnectWithoutCartInput[]
    upsert?: withdrawalCartItemsUpsertWithWhereUniqueWithoutCartInput | withdrawalCartItemsUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: withdrawalCartItemsCreateManyCartInputEnvelope
    set?: withdrawalCartItemsWhereUniqueInput | withdrawalCartItemsWhereUniqueInput[]
    disconnect?: withdrawalCartItemsWhereUniqueInput | withdrawalCartItemsWhereUniqueInput[]
    delete?: withdrawalCartItemsWhereUniqueInput | withdrawalCartItemsWhereUniqueInput[]
    connect?: withdrawalCartItemsWhereUniqueInput | withdrawalCartItemsWhereUniqueInput[]
    update?: withdrawalCartItemsUpdateWithWhereUniqueWithoutCartInput | withdrawalCartItemsUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: withdrawalCartItemsUpdateManyWithWhereWithoutCartInput | withdrawalCartItemsUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: withdrawalCartItemsScalarWhereInput | withdrawalCartItemsScalarWhereInput[]
  }

  export type withdrawalCartCreateNestedOneWithoutItemsInput = {
    create?: XOR<withdrawalCartCreateWithoutItemsInput, withdrawalCartUncheckedCreateWithoutItemsInput>
    connectOrCreate?: withdrawalCartCreateOrConnectWithoutItemsInput
    connect?: withdrawalCartWhereUniqueInput
  }

  export type withdrawalCartUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<withdrawalCartCreateWithoutItemsInput, withdrawalCartUncheckedCreateWithoutItemsInput>
    connectOrCreate?: withdrawalCartCreateOrConnectWithoutItemsInput
    upsert?: withdrawalCartUpsertWithoutItemsInput
    connect?: withdrawalCartWhereUniqueInput
    update?: XOR<XOR<withdrawalCartUpdateToOneWithWhereWithoutItemsInput, withdrawalCartUpdateWithoutItemsInput>, withdrawalCartUncheckedUpdateWithoutItemsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type itemCreateWithoutStockInput = {
    itemId?: number | null
    genericName: string
    unitInfo: string
    unit: string
    category: string
    quantity: number
    expireDate?: string | null
    providor: string
    receiveDate: string
    withdrawal?: withdrawalCreateNestedOneWithoutStockItmesInput
    itemParent: itemParentCreateNestedOneWithoutItemsInput
    receipt?: receiptCreateNestedOneWithoutStockItmesInput
  }

  export type itemUncheckedCreateWithoutStockInput = {
    id?: number
    itemId?: number | null
    genericName: string
    unitInfo: string
    unit: string
    category: string
    quantity: number
    expireDate?: string | null
    providor: string
    receiveDate: string
    itemParentId: string
    receiptId?: number | null
    withdrawalId?: number | null
  }

  export type itemCreateOrConnectWithoutStockInput = {
    where: itemWhereUniqueInput
    create: XOR<itemCreateWithoutStockInput, itemUncheckedCreateWithoutStockInput>
  }

  export type itemCreateManyStockInputEnvelope = {
    data: itemCreateManyStockInput | itemCreateManyStockInput[]
    skipDuplicates?: boolean
  }

  export type withdrawalCreateWithoutStockInput = {
    departmentName: string
    date: string
    department: departmentCreateNestedOneWithoutWithdrawalsInput
    items?: withdrawalItemsCreateNestedManyWithoutWithdrawalInput
    stockItmes?: itemCreateNestedManyWithoutWithdrawalInput
  }

  export type withdrawalUncheckedCreateWithoutStockInput = {
    id?: number
    departmentName: string
    date: string
    departmentId: string
    items?: withdrawalItemsUncheckedCreateNestedManyWithoutWithdrawalInput
    stockItmes?: itemUncheckedCreateNestedManyWithoutWithdrawalInput
  }

  export type withdrawalCreateOrConnectWithoutStockInput = {
    where: withdrawalWhereUniqueInput
    create: XOR<withdrawalCreateWithoutStockInput, withdrawalUncheckedCreateWithoutStockInput>
  }

  export type withdrawalCreateManyStockInputEnvelope = {
    data: withdrawalCreateManyStockInput | withdrawalCreateManyStockInput[]
    skipDuplicates?: boolean
  }

  export type withdrawalItemsCreateWithoutStockInput = {
    id?: string
    itemId: number
    genericName: string
    unit: string
    category?: string | null
    quantity: number
    expireDate?: string | null
    withdrawDate?: string | null
    withdrawal: withdrawalCreateNestedOneWithoutItemsInput
    itemParent: itemParentCreateNestedOneWithoutWithdrawalsInput
  }

  export type withdrawalItemsUncheckedCreateWithoutStockInput = {
    id?: string
    itemId: number
    genericName: string
    unit: string
    category?: string | null
    quantity: number
    expireDate?: string | null
    withdrawalId: number
    itemParentId: string
    withdrawDate?: string | null
  }

  export type withdrawalItemsCreateOrConnectWithoutStockInput = {
    where: withdrawalItemsWhereUniqueInput
    create: XOR<withdrawalItemsCreateWithoutStockInput, withdrawalItemsUncheckedCreateWithoutStockInput>
  }

  export type withdrawalItemsCreateManyStockInputEnvelope = {
    data: withdrawalItemsCreateManyStockInput | withdrawalItemsCreateManyStockInput[]
    skipDuplicates?: boolean
  }

  export type withdrawalCartCreateWithoutStockInput = {
    date?: string | null
    departmentName?: string | null
    items?: withdrawalCartItemsCreateNestedManyWithoutCartInput
  }

  export type withdrawalCartUncheckedCreateWithoutStockInput = {
    id?: number
    date?: string | null
    departmentName?: string | null
    items?: withdrawalCartItemsUncheckedCreateNestedManyWithoutCartInput
  }

  export type withdrawalCartCreateOrConnectWithoutStockInput = {
    where: withdrawalCartWhereUniqueInput
    create: XOR<withdrawalCartCreateWithoutStockInput, withdrawalCartUncheckedCreateWithoutStockInput>
  }

  export type withdrawalCartCreateManyStockInputEnvelope = {
    data: withdrawalCartCreateManyStockInput | withdrawalCartCreateManyStockInput[]
    skipDuplicates?: boolean
  }

  export type itemUpsertWithWhereUniqueWithoutStockInput = {
    where: itemWhereUniqueInput
    update: XOR<itemUpdateWithoutStockInput, itemUncheckedUpdateWithoutStockInput>
    create: XOR<itemCreateWithoutStockInput, itemUncheckedCreateWithoutStockInput>
  }

  export type itemUpdateWithWhereUniqueWithoutStockInput = {
    where: itemWhereUniqueInput
    data: XOR<itemUpdateWithoutStockInput, itemUncheckedUpdateWithoutStockInput>
  }

  export type itemUpdateManyWithWhereWithoutStockInput = {
    where: itemScalarWhereInput
    data: XOR<itemUpdateManyMutationInput, itemUncheckedUpdateManyWithoutStockInput>
  }

  export type itemScalarWhereInput = {
    AND?: itemScalarWhereInput | itemScalarWhereInput[]
    OR?: itemScalarWhereInput[]
    NOT?: itemScalarWhereInput | itemScalarWhereInput[]
    id?: IntFilter<"item"> | number
    itemId?: IntNullableFilter<"item"> | number | null
    genericName?: StringFilter<"item"> | string
    unitInfo?: StringFilter<"item"> | string
    unit?: StringFilter<"item"> | string
    category?: StringFilter<"item"> | string
    quantity?: IntFilter<"item"> | number
    expireDate?: StringNullableFilter<"item"> | string | null
    providor?: StringFilter<"item"> | string
    receiveDate?: StringFilter<"item"> | string
    itemParentId?: StringFilter<"item"> | string
    stockId?: IntFilter<"item"> | number
    receiptId?: IntNullableFilter<"item"> | number | null
    withdrawalId?: IntNullableFilter<"item"> | number | null
  }

  export type withdrawalUpsertWithWhereUniqueWithoutStockInput = {
    where: withdrawalWhereUniqueInput
    update: XOR<withdrawalUpdateWithoutStockInput, withdrawalUncheckedUpdateWithoutStockInput>
    create: XOR<withdrawalCreateWithoutStockInput, withdrawalUncheckedCreateWithoutStockInput>
  }

  export type withdrawalUpdateWithWhereUniqueWithoutStockInput = {
    where: withdrawalWhereUniqueInput
    data: XOR<withdrawalUpdateWithoutStockInput, withdrawalUncheckedUpdateWithoutStockInput>
  }

  export type withdrawalUpdateManyWithWhereWithoutStockInput = {
    where: withdrawalScalarWhereInput
    data: XOR<withdrawalUpdateManyMutationInput, withdrawalUncheckedUpdateManyWithoutStockInput>
  }

  export type withdrawalScalarWhereInput = {
    AND?: withdrawalScalarWhereInput | withdrawalScalarWhereInput[]
    OR?: withdrawalScalarWhereInput[]
    NOT?: withdrawalScalarWhereInput | withdrawalScalarWhereInput[]
    id?: IntFilter<"withdrawal"> | number
    departmentName?: StringFilter<"withdrawal"> | string
    date?: StringFilter<"withdrawal"> | string
    departmentId?: StringFilter<"withdrawal"> | string
    stockId?: IntFilter<"withdrawal"> | number
  }

  export type withdrawalItemsUpsertWithWhereUniqueWithoutStockInput = {
    where: withdrawalItemsWhereUniqueInput
    update: XOR<withdrawalItemsUpdateWithoutStockInput, withdrawalItemsUncheckedUpdateWithoutStockInput>
    create: XOR<withdrawalItemsCreateWithoutStockInput, withdrawalItemsUncheckedCreateWithoutStockInput>
  }

  export type withdrawalItemsUpdateWithWhereUniqueWithoutStockInput = {
    where: withdrawalItemsWhereUniqueInput
    data: XOR<withdrawalItemsUpdateWithoutStockInput, withdrawalItemsUncheckedUpdateWithoutStockInput>
  }

  export type withdrawalItemsUpdateManyWithWhereWithoutStockInput = {
    where: withdrawalItemsScalarWhereInput
    data: XOR<withdrawalItemsUpdateManyMutationInput, withdrawalItemsUncheckedUpdateManyWithoutStockInput>
  }

  export type withdrawalItemsScalarWhereInput = {
    AND?: withdrawalItemsScalarWhereInput | withdrawalItemsScalarWhereInput[]
    OR?: withdrawalItemsScalarWhereInput[]
    NOT?: withdrawalItemsScalarWhereInput | withdrawalItemsScalarWhereInput[]
    id?: StringFilter<"withdrawalItems"> | string
    itemId?: IntFilter<"withdrawalItems"> | number
    genericName?: StringFilter<"withdrawalItems"> | string
    unit?: StringFilter<"withdrawalItems"> | string
    category?: StringNullableFilter<"withdrawalItems"> | string | null
    quantity?: IntFilter<"withdrawalItems"> | number
    expireDate?: StringNullableFilter<"withdrawalItems"> | string | null
    withdrawalId?: IntFilter<"withdrawalItems"> | number
    itemParentId?: StringFilter<"withdrawalItems"> | string
    withdrawDate?: StringNullableFilter<"withdrawalItems"> | string | null
    stockId?: IntNullableFilter<"withdrawalItems"> | number | null
  }

  export type withdrawalCartUpsertWithWhereUniqueWithoutStockInput = {
    where: withdrawalCartWhereUniqueInput
    update: XOR<withdrawalCartUpdateWithoutStockInput, withdrawalCartUncheckedUpdateWithoutStockInput>
    create: XOR<withdrawalCartCreateWithoutStockInput, withdrawalCartUncheckedCreateWithoutStockInput>
  }

  export type withdrawalCartUpdateWithWhereUniqueWithoutStockInput = {
    where: withdrawalCartWhereUniqueInput
    data: XOR<withdrawalCartUpdateWithoutStockInput, withdrawalCartUncheckedUpdateWithoutStockInput>
  }

  export type withdrawalCartUpdateManyWithWhereWithoutStockInput = {
    where: withdrawalCartScalarWhereInput
    data: XOR<withdrawalCartUpdateManyMutationInput, withdrawalCartUncheckedUpdateManyWithoutStockInput>
  }

  export type withdrawalCartScalarWhereInput = {
    AND?: withdrawalCartScalarWhereInput | withdrawalCartScalarWhereInput[]
    OR?: withdrawalCartScalarWhereInput[]
    NOT?: withdrawalCartScalarWhereInput | withdrawalCartScalarWhereInput[]
    id?: IntFilter<"withdrawalCart"> | number
    date?: StringNullableFilter<"withdrawalCart"> | string | null
    departmentName?: StringNullableFilter<"withdrawalCart"> | string | null
    stockId?: IntFilter<"withdrawalCart"> | number
  }

  export type withdrawalCreateWithoutDepartmentInput = {
    departmentName: string
    date: string
    items?: withdrawalItemsCreateNestedManyWithoutWithdrawalInput
    stock: userCreateNestedOneWithoutWithdrawalsInput
    stockItmes?: itemCreateNestedManyWithoutWithdrawalInput
  }

  export type withdrawalUncheckedCreateWithoutDepartmentInput = {
    id?: number
    departmentName: string
    date: string
    stockId: number
    items?: withdrawalItemsUncheckedCreateNestedManyWithoutWithdrawalInput
    stockItmes?: itemUncheckedCreateNestedManyWithoutWithdrawalInput
  }

  export type withdrawalCreateOrConnectWithoutDepartmentInput = {
    where: withdrawalWhereUniqueInput
    create: XOR<withdrawalCreateWithoutDepartmentInput, withdrawalUncheckedCreateWithoutDepartmentInput>
  }

  export type withdrawalCreateManyDepartmentInputEnvelope = {
    data: withdrawalCreateManyDepartmentInput | withdrawalCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type withdrawalUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: withdrawalWhereUniqueInput
    update: XOR<withdrawalUpdateWithoutDepartmentInput, withdrawalUncheckedUpdateWithoutDepartmentInput>
    create: XOR<withdrawalCreateWithoutDepartmentInput, withdrawalUncheckedCreateWithoutDepartmentInput>
  }

  export type withdrawalUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: withdrawalWhereUniqueInput
    data: XOR<withdrawalUpdateWithoutDepartmentInput, withdrawalUncheckedUpdateWithoutDepartmentInput>
  }

  export type withdrawalUpdateManyWithWhereWithoutDepartmentInput = {
    where: withdrawalScalarWhereInput
    data: XOR<withdrawalUpdateManyMutationInput, withdrawalUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type receiptCreateWithoutProvidorInput = {
    date: string
    providorName: string
    items?: receiptItemsCreateNestedManyWithoutReceiptInput
    stockItmes?: itemCreateNestedManyWithoutReceiptInput
  }

  export type receiptUncheckedCreateWithoutProvidorInput = {
    id?: number
    date: string
    providorName: string
    items?: receiptItemsUncheckedCreateNestedManyWithoutReceiptInput
    stockItmes?: itemUncheckedCreateNestedManyWithoutReceiptInput
  }

  export type receiptCreateOrConnectWithoutProvidorInput = {
    where: receiptWhereUniqueInput
    create: XOR<receiptCreateWithoutProvidorInput, receiptUncheckedCreateWithoutProvidorInput>
  }

  export type receiptCreateManyProvidorInputEnvelope = {
    data: receiptCreateManyProvidorInput | receiptCreateManyProvidorInput[]
    skipDuplicates?: boolean
  }

  export type receiptUpsertWithWhereUniqueWithoutProvidorInput = {
    where: receiptWhereUniqueInput
    update: XOR<receiptUpdateWithoutProvidorInput, receiptUncheckedUpdateWithoutProvidorInput>
    create: XOR<receiptCreateWithoutProvidorInput, receiptUncheckedCreateWithoutProvidorInput>
  }

  export type receiptUpdateWithWhereUniqueWithoutProvidorInput = {
    where: receiptWhereUniqueInput
    data: XOR<receiptUpdateWithoutProvidorInput, receiptUncheckedUpdateWithoutProvidorInput>
  }

  export type receiptUpdateManyWithWhereWithoutProvidorInput = {
    where: receiptScalarWhereInput
    data: XOR<receiptUpdateManyMutationInput, receiptUncheckedUpdateManyWithoutProvidorInput>
  }

  export type receiptScalarWhereInput = {
    AND?: receiptScalarWhereInput | receiptScalarWhereInput[]
    OR?: receiptScalarWhereInput[]
    NOT?: receiptScalarWhereInput | receiptScalarWhereInput[]
    id?: IntFilter<"receipt"> | number
    date?: StringFilter<"receipt"> | string
    providorName?: StringFilter<"receipt"> | string
    providorId?: StringFilter<"receipt"> | string
  }

  export type itemCreateWithoutItemParentInput = {
    itemId?: number | null
    genericName: string
    unitInfo: string
    unit: string
    category: string
    quantity: number
    expireDate?: string | null
    providor: string
    receiveDate: string
    withdrawal?: withdrawalCreateNestedOneWithoutStockItmesInput
    stock: userCreateNestedOneWithoutItemsInput
    receipt?: receiptCreateNestedOneWithoutStockItmesInput
  }

  export type itemUncheckedCreateWithoutItemParentInput = {
    id?: number
    itemId?: number | null
    genericName: string
    unitInfo: string
    unit: string
    category: string
    quantity: number
    expireDate?: string | null
    providor: string
    receiveDate: string
    stockId: number
    receiptId?: number | null
    withdrawalId?: number | null
  }

  export type itemCreateOrConnectWithoutItemParentInput = {
    where: itemWhereUniqueInput
    create: XOR<itemCreateWithoutItemParentInput, itemUncheckedCreateWithoutItemParentInput>
  }

  export type itemCreateManyItemParentInputEnvelope = {
    data: itemCreateManyItemParentInput | itemCreateManyItemParentInput[]
    skipDuplicates?: boolean
  }

  export type withdrawalItemsCreateWithoutItemParentInput = {
    id?: string
    itemId: number
    genericName: string
    unit: string
    category?: string | null
    quantity: number
    expireDate?: string | null
    withdrawDate?: string | null
    withdrawal: withdrawalCreateNestedOneWithoutItemsInput
    stock?: userCreateNestedOneWithoutWithdrawalItemsInput
  }

  export type withdrawalItemsUncheckedCreateWithoutItemParentInput = {
    id?: string
    itemId: number
    genericName: string
    unit: string
    category?: string | null
    quantity: number
    expireDate?: string | null
    withdrawalId: number
    withdrawDate?: string | null
    stockId?: number | null
  }

  export type withdrawalItemsCreateOrConnectWithoutItemParentInput = {
    where: withdrawalItemsWhereUniqueInput
    create: XOR<withdrawalItemsCreateWithoutItemParentInput, withdrawalItemsUncheckedCreateWithoutItemParentInput>
  }

  export type withdrawalItemsCreateManyItemParentInputEnvelope = {
    data: withdrawalItemsCreateManyItemParentInput | withdrawalItemsCreateManyItemParentInput[]
    skipDuplicates?: boolean
  }

  export type itemUpsertWithWhereUniqueWithoutItemParentInput = {
    where: itemWhereUniqueInput
    update: XOR<itemUpdateWithoutItemParentInput, itemUncheckedUpdateWithoutItemParentInput>
    create: XOR<itemCreateWithoutItemParentInput, itemUncheckedCreateWithoutItemParentInput>
  }

  export type itemUpdateWithWhereUniqueWithoutItemParentInput = {
    where: itemWhereUniqueInput
    data: XOR<itemUpdateWithoutItemParentInput, itemUncheckedUpdateWithoutItemParentInput>
  }

  export type itemUpdateManyWithWhereWithoutItemParentInput = {
    where: itemScalarWhereInput
    data: XOR<itemUpdateManyMutationInput, itemUncheckedUpdateManyWithoutItemParentInput>
  }

  export type withdrawalItemsUpsertWithWhereUniqueWithoutItemParentInput = {
    where: withdrawalItemsWhereUniqueInput
    update: XOR<withdrawalItemsUpdateWithoutItemParentInput, withdrawalItemsUncheckedUpdateWithoutItemParentInput>
    create: XOR<withdrawalItemsCreateWithoutItemParentInput, withdrawalItemsUncheckedCreateWithoutItemParentInput>
  }

  export type withdrawalItemsUpdateWithWhereUniqueWithoutItemParentInput = {
    where: withdrawalItemsWhereUniqueInput
    data: XOR<withdrawalItemsUpdateWithoutItemParentInput, withdrawalItemsUncheckedUpdateWithoutItemParentInput>
  }

  export type withdrawalItemsUpdateManyWithWhereWithoutItemParentInput = {
    where: withdrawalItemsScalarWhereInput
    data: XOR<withdrawalItemsUpdateManyMutationInput, withdrawalItemsUncheckedUpdateManyWithoutItemParentInput>
  }

  export type withdrawalCreateWithoutStockItmesInput = {
    departmentName: string
    date: string
    department: departmentCreateNestedOneWithoutWithdrawalsInput
    items?: withdrawalItemsCreateNestedManyWithoutWithdrawalInput
    stock: userCreateNestedOneWithoutWithdrawalsInput
  }

  export type withdrawalUncheckedCreateWithoutStockItmesInput = {
    id?: number
    departmentName: string
    date: string
    departmentId: string
    stockId: number
    items?: withdrawalItemsUncheckedCreateNestedManyWithoutWithdrawalInput
  }

  export type withdrawalCreateOrConnectWithoutStockItmesInput = {
    where: withdrawalWhereUniqueInput
    create: XOR<withdrawalCreateWithoutStockItmesInput, withdrawalUncheckedCreateWithoutStockItmesInput>
  }

  export type userCreateWithoutItemsInput = {
    username: string
    usersecret: string
    authority?: string | null
    withdrawals?: withdrawalCreateNestedManyWithoutStockInput
    withdrawalItems?: withdrawalItemsCreateNestedManyWithoutStockInput
    withdrawalCart?: withdrawalCartCreateNestedManyWithoutStockInput
  }

  export type userUncheckedCreateWithoutItemsInput = {
    id?: number
    username: string
    usersecret: string
    authority?: string | null
    withdrawals?: withdrawalUncheckedCreateNestedManyWithoutStockInput
    withdrawalItems?: withdrawalItemsUncheckedCreateNestedManyWithoutStockInput
    withdrawalCart?: withdrawalCartUncheckedCreateNestedManyWithoutStockInput
  }

  export type userCreateOrConnectWithoutItemsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutItemsInput, userUncheckedCreateWithoutItemsInput>
  }

  export type itemParentCreateWithoutItemsInput = {
    id?: string
    genericName: string
    category: string
    unit: string
    latestWithdrawal?: string | null
    latestReceive?: string | null
    mainStockSpecific: boolean
    withdrawals?: withdrawalItemsCreateNestedManyWithoutItemParentInput
  }

  export type itemParentUncheckedCreateWithoutItemsInput = {
    id?: string
    genericName: string
    category: string
    unit: string
    latestWithdrawal?: string | null
    latestReceive?: string | null
    mainStockSpecific: boolean
    withdrawals?: withdrawalItemsUncheckedCreateNestedManyWithoutItemParentInput
  }

  export type itemParentCreateOrConnectWithoutItemsInput = {
    where: itemParentWhereUniqueInput
    create: XOR<itemParentCreateWithoutItemsInput, itemParentUncheckedCreateWithoutItemsInput>
  }

  export type receiptCreateWithoutStockItmesInput = {
    date: string
    providorName: string
    items?: receiptItemsCreateNestedManyWithoutReceiptInput
    providor: providorCreateNestedOneWithoutReceiptsInput
  }

  export type receiptUncheckedCreateWithoutStockItmesInput = {
    id?: number
    date: string
    providorName: string
    providorId: string
    items?: receiptItemsUncheckedCreateNestedManyWithoutReceiptInput
  }

  export type receiptCreateOrConnectWithoutStockItmesInput = {
    where: receiptWhereUniqueInput
    create: XOR<receiptCreateWithoutStockItmesInput, receiptUncheckedCreateWithoutStockItmesInput>
  }

  export type withdrawalUpsertWithoutStockItmesInput = {
    update: XOR<withdrawalUpdateWithoutStockItmesInput, withdrawalUncheckedUpdateWithoutStockItmesInput>
    create: XOR<withdrawalCreateWithoutStockItmesInput, withdrawalUncheckedCreateWithoutStockItmesInput>
    where?: withdrawalWhereInput
  }

  export type withdrawalUpdateToOneWithWhereWithoutStockItmesInput = {
    where?: withdrawalWhereInput
    data: XOR<withdrawalUpdateWithoutStockItmesInput, withdrawalUncheckedUpdateWithoutStockItmesInput>
  }

  export type withdrawalUpdateWithoutStockItmesInput = {
    departmentName?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    department?: departmentUpdateOneRequiredWithoutWithdrawalsNestedInput
    items?: withdrawalItemsUpdateManyWithoutWithdrawalNestedInput
    stock?: userUpdateOneRequiredWithoutWithdrawalsNestedInput
  }

  export type withdrawalUncheckedUpdateWithoutStockItmesInput = {
    id?: IntFieldUpdateOperationsInput | number
    departmentName?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    stockId?: IntFieldUpdateOperationsInput | number
    items?: withdrawalItemsUncheckedUpdateManyWithoutWithdrawalNestedInput
  }

  export type userUpsertWithoutItemsInput = {
    update: XOR<userUpdateWithoutItemsInput, userUncheckedUpdateWithoutItemsInput>
    create: XOR<userCreateWithoutItemsInput, userUncheckedCreateWithoutItemsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutItemsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutItemsInput, userUncheckedUpdateWithoutItemsInput>
  }

  export type userUpdateWithoutItemsInput = {
    username?: StringFieldUpdateOperationsInput | string
    usersecret?: StringFieldUpdateOperationsInput | string
    authority?: NullableStringFieldUpdateOperationsInput | string | null
    withdrawals?: withdrawalUpdateManyWithoutStockNestedInput
    withdrawalItems?: withdrawalItemsUpdateManyWithoutStockNestedInput
    withdrawalCart?: withdrawalCartUpdateManyWithoutStockNestedInput
  }

  export type userUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    usersecret?: StringFieldUpdateOperationsInput | string
    authority?: NullableStringFieldUpdateOperationsInput | string | null
    withdrawals?: withdrawalUncheckedUpdateManyWithoutStockNestedInput
    withdrawalItems?: withdrawalItemsUncheckedUpdateManyWithoutStockNestedInput
    withdrawalCart?: withdrawalCartUncheckedUpdateManyWithoutStockNestedInput
  }

  export type itemParentUpsertWithoutItemsInput = {
    update: XOR<itemParentUpdateWithoutItemsInput, itemParentUncheckedUpdateWithoutItemsInput>
    create: XOR<itemParentCreateWithoutItemsInput, itemParentUncheckedCreateWithoutItemsInput>
    where?: itemParentWhereInput
  }

  export type itemParentUpdateToOneWithWhereWithoutItemsInput = {
    where?: itemParentWhereInput
    data: XOR<itemParentUpdateWithoutItemsInput, itemParentUncheckedUpdateWithoutItemsInput>
  }

  export type itemParentUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    latestWithdrawal?: NullableStringFieldUpdateOperationsInput | string | null
    latestReceive?: NullableStringFieldUpdateOperationsInput | string | null
    mainStockSpecific?: BoolFieldUpdateOperationsInput | boolean
    withdrawals?: withdrawalItemsUpdateManyWithoutItemParentNestedInput
  }

  export type itemParentUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    latestWithdrawal?: NullableStringFieldUpdateOperationsInput | string | null
    latestReceive?: NullableStringFieldUpdateOperationsInput | string | null
    mainStockSpecific?: BoolFieldUpdateOperationsInput | boolean
    withdrawals?: withdrawalItemsUncheckedUpdateManyWithoutItemParentNestedInput
  }

  export type receiptUpsertWithoutStockItmesInput = {
    update: XOR<receiptUpdateWithoutStockItmesInput, receiptUncheckedUpdateWithoutStockItmesInput>
    create: XOR<receiptCreateWithoutStockItmesInput, receiptUncheckedCreateWithoutStockItmesInput>
    where?: receiptWhereInput
  }

  export type receiptUpdateToOneWithWhereWithoutStockItmesInput = {
    where?: receiptWhereInput
    data: XOR<receiptUpdateWithoutStockItmesInput, receiptUncheckedUpdateWithoutStockItmesInput>
  }

  export type receiptUpdateWithoutStockItmesInput = {
    date?: StringFieldUpdateOperationsInput | string
    providorName?: StringFieldUpdateOperationsInput | string
    items?: receiptItemsUpdateManyWithoutReceiptNestedInput
    providor?: providorUpdateOneRequiredWithoutReceiptsNestedInput
  }

  export type receiptUncheckedUpdateWithoutStockItmesInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    providorName?: StringFieldUpdateOperationsInput | string
    providorId?: StringFieldUpdateOperationsInput | string
    items?: receiptItemsUncheckedUpdateManyWithoutReceiptNestedInput
  }

  export type receiptItemsCreateWithoutReceiptInput = {
    id?: string
    genericName: string
    unit: string
    unitInfo: string
    category: string
    quantity: number
    expireDate?: string | null
  }

  export type receiptItemsUncheckedCreateWithoutReceiptInput = {
    id?: string
    genericName: string
    unit: string
    unitInfo: string
    category: string
    quantity: number
    expireDate?: string | null
  }

  export type receiptItemsCreateOrConnectWithoutReceiptInput = {
    where: receiptItemsWhereUniqueInput
    create: XOR<receiptItemsCreateWithoutReceiptInput, receiptItemsUncheckedCreateWithoutReceiptInput>
  }

  export type receiptItemsCreateManyReceiptInputEnvelope = {
    data: receiptItemsCreateManyReceiptInput | receiptItemsCreateManyReceiptInput[]
    skipDuplicates?: boolean
  }

  export type itemCreateWithoutReceiptInput = {
    itemId?: number | null
    genericName: string
    unitInfo: string
    unit: string
    category: string
    quantity: number
    expireDate?: string | null
    providor: string
    receiveDate: string
    withdrawal?: withdrawalCreateNestedOneWithoutStockItmesInput
    stock: userCreateNestedOneWithoutItemsInput
    itemParent: itemParentCreateNestedOneWithoutItemsInput
  }

  export type itemUncheckedCreateWithoutReceiptInput = {
    id?: number
    itemId?: number | null
    genericName: string
    unitInfo: string
    unit: string
    category: string
    quantity: number
    expireDate?: string | null
    providor: string
    receiveDate: string
    itemParentId: string
    stockId: number
    withdrawalId?: number | null
  }

  export type itemCreateOrConnectWithoutReceiptInput = {
    where: itemWhereUniqueInput
    create: XOR<itemCreateWithoutReceiptInput, itemUncheckedCreateWithoutReceiptInput>
  }

  export type itemCreateManyReceiptInputEnvelope = {
    data: itemCreateManyReceiptInput | itemCreateManyReceiptInput[]
    skipDuplicates?: boolean
  }

  export type providorCreateWithoutReceiptsInput = {
    id?: string
    name: string
  }

  export type providorUncheckedCreateWithoutReceiptsInput = {
    id?: string
    name: string
  }

  export type providorCreateOrConnectWithoutReceiptsInput = {
    where: providorWhereUniqueInput
    create: XOR<providorCreateWithoutReceiptsInput, providorUncheckedCreateWithoutReceiptsInput>
  }

  export type receiptItemsUpsertWithWhereUniqueWithoutReceiptInput = {
    where: receiptItemsWhereUniqueInput
    update: XOR<receiptItemsUpdateWithoutReceiptInput, receiptItemsUncheckedUpdateWithoutReceiptInput>
    create: XOR<receiptItemsCreateWithoutReceiptInput, receiptItemsUncheckedCreateWithoutReceiptInput>
  }

  export type receiptItemsUpdateWithWhereUniqueWithoutReceiptInput = {
    where: receiptItemsWhereUniqueInput
    data: XOR<receiptItemsUpdateWithoutReceiptInput, receiptItemsUncheckedUpdateWithoutReceiptInput>
  }

  export type receiptItemsUpdateManyWithWhereWithoutReceiptInput = {
    where: receiptItemsScalarWhereInput
    data: XOR<receiptItemsUpdateManyMutationInput, receiptItemsUncheckedUpdateManyWithoutReceiptInput>
  }

  export type receiptItemsScalarWhereInput = {
    AND?: receiptItemsScalarWhereInput | receiptItemsScalarWhereInput[]
    OR?: receiptItemsScalarWhereInput[]
    NOT?: receiptItemsScalarWhereInput | receiptItemsScalarWhereInput[]
    id?: StringFilter<"receiptItems"> | string
    genericName?: StringFilter<"receiptItems"> | string
    unit?: StringFilter<"receiptItems"> | string
    unitInfo?: StringFilter<"receiptItems"> | string
    category?: StringFilter<"receiptItems"> | string
    quantity?: IntFilter<"receiptItems"> | number
    expireDate?: StringNullableFilter<"receiptItems"> | string | null
    receiptId?: IntFilter<"receiptItems"> | number
  }

  export type itemUpsertWithWhereUniqueWithoutReceiptInput = {
    where: itemWhereUniqueInput
    update: XOR<itemUpdateWithoutReceiptInput, itemUncheckedUpdateWithoutReceiptInput>
    create: XOR<itemCreateWithoutReceiptInput, itemUncheckedCreateWithoutReceiptInput>
  }

  export type itemUpdateWithWhereUniqueWithoutReceiptInput = {
    where: itemWhereUniqueInput
    data: XOR<itemUpdateWithoutReceiptInput, itemUncheckedUpdateWithoutReceiptInput>
  }

  export type itemUpdateManyWithWhereWithoutReceiptInput = {
    where: itemScalarWhereInput
    data: XOR<itemUpdateManyMutationInput, itemUncheckedUpdateManyWithoutReceiptInput>
  }

  export type providorUpsertWithoutReceiptsInput = {
    update: XOR<providorUpdateWithoutReceiptsInput, providorUncheckedUpdateWithoutReceiptsInput>
    create: XOR<providorCreateWithoutReceiptsInput, providorUncheckedCreateWithoutReceiptsInput>
    where?: providorWhereInput
  }

  export type providorUpdateToOneWithWhereWithoutReceiptsInput = {
    where?: providorWhereInput
    data: XOR<providorUpdateWithoutReceiptsInput, providorUncheckedUpdateWithoutReceiptsInput>
  }

  export type providorUpdateWithoutReceiptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type providorUncheckedUpdateWithoutReceiptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type receiptCreateWithoutItemsInput = {
    date: string
    providorName: string
    stockItmes?: itemCreateNestedManyWithoutReceiptInput
    providor: providorCreateNestedOneWithoutReceiptsInput
  }

  export type receiptUncheckedCreateWithoutItemsInput = {
    id?: number
    date: string
    providorName: string
    providorId: string
    stockItmes?: itemUncheckedCreateNestedManyWithoutReceiptInput
  }

  export type receiptCreateOrConnectWithoutItemsInput = {
    where: receiptWhereUniqueInput
    create: XOR<receiptCreateWithoutItemsInput, receiptUncheckedCreateWithoutItemsInput>
  }

  export type receiptUpsertWithoutItemsInput = {
    update: XOR<receiptUpdateWithoutItemsInput, receiptUncheckedUpdateWithoutItemsInput>
    create: XOR<receiptCreateWithoutItemsInput, receiptUncheckedCreateWithoutItemsInput>
    where?: receiptWhereInput
  }

  export type receiptUpdateToOneWithWhereWithoutItemsInput = {
    where?: receiptWhereInput
    data: XOR<receiptUpdateWithoutItemsInput, receiptUncheckedUpdateWithoutItemsInput>
  }

  export type receiptUpdateWithoutItemsInput = {
    date?: StringFieldUpdateOperationsInput | string
    providorName?: StringFieldUpdateOperationsInput | string
    stockItmes?: itemUpdateManyWithoutReceiptNestedInput
    providor?: providorUpdateOneRequiredWithoutReceiptsNestedInput
  }

  export type receiptUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    providorName?: StringFieldUpdateOperationsInput | string
    providorId?: StringFieldUpdateOperationsInput | string
    stockItmes?: itemUncheckedUpdateManyWithoutReceiptNestedInput
  }

  export type receiptCartItemsCreateWithoutCartInput = {
    id?: string
    genericName: string
    unit: string
    unitInfo: string
    category?: string | null
    quantity: number
    expireDate?: string | null
  }

  export type receiptCartItemsUncheckedCreateWithoutCartInput = {
    id?: string
    genericName: string
    unit: string
    unitInfo: string
    category?: string | null
    quantity: number
    expireDate?: string | null
  }

  export type receiptCartItemsCreateOrConnectWithoutCartInput = {
    where: receiptCartItemsWhereUniqueInput
    create: XOR<receiptCartItemsCreateWithoutCartInput, receiptCartItemsUncheckedCreateWithoutCartInput>
  }

  export type receiptCartItemsCreateManyCartInputEnvelope = {
    data: receiptCartItemsCreateManyCartInput | receiptCartItemsCreateManyCartInput[]
    skipDuplicates?: boolean
  }

  export type receiptCartItemsUpsertWithWhereUniqueWithoutCartInput = {
    where: receiptCartItemsWhereUniqueInput
    update: XOR<receiptCartItemsUpdateWithoutCartInput, receiptCartItemsUncheckedUpdateWithoutCartInput>
    create: XOR<receiptCartItemsCreateWithoutCartInput, receiptCartItemsUncheckedCreateWithoutCartInput>
  }

  export type receiptCartItemsUpdateWithWhereUniqueWithoutCartInput = {
    where: receiptCartItemsWhereUniqueInput
    data: XOR<receiptCartItemsUpdateWithoutCartInput, receiptCartItemsUncheckedUpdateWithoutCartInput>
  }

  export type receiptCartItemsUpdateManyWithWhereWithoutCartInput = {
    where: receiptCartItemsScalarWhereInput
    data: XOR<receiptCartItemsUpdateManyMutationInput, receiptCartItemsUncheckedUpdateManyWithoutCartInput>
  }

  export type receiptCartItemsScalarWhereInput = {
    AND?: receiptCartItemsScalarWhereInput | receiptCartItemsScalarWhereInput[]
    OR?: receiptCartItemsScalarWhereInput[]
    NOT?: receiptCartItemsScalarWhereInput | receiptCartItemsScalarWhereInput[]
    id?: StringFilter<"receiptCartItems"> | string
    genericName?: StringFilter<"receiptCartItems"> | string
    unit?: StringFilter<"receiptCartItems"> | string
    unitInfo?: StringFilter<"receiptCartItems"> | string
    category?: StringNullableFilter<"receiptCartItems"> | string | null
    quantity?: IntFilter<"receiptCartItems"> | number
    expireDate?: StringNullableFilter<"receiptCartItems"> | string | null
    cartId?: IntFilter<"receiptCartItems"> | number
  }

  export type receiptCartCreateWithoutItemsInput = {
    date?: string | null
    providorName?: string | null
  }

  export type receiptCartUncheckedCreateWithoutItemsInput = {
    id?: number
    date?: string | null
    providorName?: string | null
  }

  export type receiptCartCreateOrConnectWithoutItemsInput = {
    where: receiptCartWhereUniqueInput
    create: XOR<receiptCartCreateWithoutItemsInput, receiptCartUncheckedCreateWithoutItemsInput>
  }

  export type receiptCartUpsertWithoutItemsInput = {
    update: XOR<receiptCartUpdateWithoutItemsInput, receiptCartUncheckedUpdateWithoutItemsInput>
    create: XOR<receiptCartCreateWithoutItemsInput, receiptCartUncheckedCreateWithoutItemsInput>
    where?: receiptCartWhereInput
  }

  export type receiptCartUpdateToOneWithWhereWithoutItemsInput = {
    where?: receiptCartWhereInput
    data: XOR<receiptCartUpdateWithoutItemsInput, receiptCartUncheckedUpdateWithoutItemsInput>
  }

  export type receiptCartUpdateWithoutItemsInput = {
    date?: NullableStringFieldUpdateOperationsInput | string | null
    providorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type receiptCartUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableStringFieldUpdateOperationsInput | string | null
    providorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type departmentCreateWithoutWithdrawalsInput = {
    id?: string
    name: string
  }

  export type departmentUncheckedCreateWithoutWithdrawalsInput = {
    id?: string
    name: string
  }

  export type departmentCreateOrConnectWithoutWithdrawalsInput = {
    where: departmentWhereUniqueInput
    create: XOR<departmentCreateWithoutWithdrawalsInput, departmentUncheckedCreateWithoutWithdrawalsInput>
  }

  export type withdrawalItemsCreateWithoutWithdrawalInput = {
    id?: string
    itemId: number
    genericName: string
    unit: string
    category?: string | null
    quantity: number
    expireDate?: string | null
    withdrawDate?: string | null
    itemParent: itemParentCreateNestedOneWithoutWithdrawalsInput
    stock?: userCreateNestedOneWithoutWithdrawalItemsInput
  }

  export type withdrawalItemsUncheckedCreateWithoutWithdrawalInput = {
    id?: string
    itemId: number
    genericName: string
    unit: string
    category?: string | null
    quantity: number
    expireDate?: string | null
    itemParentId: string
    withdrawDate?: string | null
    stockId?: number | null
  }

  export type withdrawalItemsCreateOrConnectWithoutWithdrawalInput = {
    where: withdrawalItemsWhereUniqueInput
    create: XOR<withdrawalItemsCreateWithoutWithdrawalInput, withdrawalItemsUncheckedCreateWithoutWithdrawalInput>
  }

  export type withdrawalItemsCreateManyWithdrawalInputEnvelope = {
    data: withdrawalItemsCreateManyWithdrawalInput | withdrawalItemsCreateManyWithdrawalInput[]
    skipDuplicates?: boolean
  }

  export type userCreateWithoutWithdrawalsInput = {
    username: string
    usersecret: string
    authority?: string | null
    items?: itemCreateNestedManyWithoutStockInput
    withdrawalItems?: withdrawalItemsCreateNestedManyWithoutStockInput
    withdrawalCart?: withdrawalCartCreateNestedManyWithoutStockInput
  }

  export type userUncheckedCreateWithoutWithdrawalsInput = {
    id?: number
    username: string
    usersecret: string
    authority?: string | null
    items?: itemUncheckedCreateNestedManyWithoutStockInput
    withdrawalItems?: withdrawalItemsUncheckedCreateNestedManyWithoutStockInput
    withdrawalCart?: withdrawalCartUncheckedCreateNestedManyWithoutStockInput
  }

  export type userCreateOrConnectWithoutWithdrawalsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutWithdrawalsInput, userUncheckedCreateWithoutWithdrawalsInput>
  }

  export type itemCreateWithoutWithdrawalInput = {
    itemId?: number | null
    genericName: string
    unitInfo: string
    unit: string
    category: string
    quantity: number
    expireDate?: string | null
    providor: string
    receiveDate: string
    stock: userCreateNestedOneWithoutItemsInput
    itemParent: itemParentCreateNestedOneWithoutItemsInput
    receipt?: receiptCreateNestedOneWithoutStockItmesInput
  }

  export type itemUncheckedCreateWithoutWithdrawalInput = {
    id?: number
    itemId?: number | null
    genericName: string
    unitInfo: string
    unit: string
    category: string
    quantity: number
    expireDate?: string | null
    providor: string
    receiveDate: string
    itemParentId: string
    stockId: number
    receiptId?: number | null
  }

  export type itemCreateOrConnectWithoutWithdrawalInput = {
    where: itemWhereUniqueInput
    create: XOR<itemCreateWithoutWithdrawalInput, itemUncheckedCreateWithoutWithdrawalInput>
  }

  export type itemCreateManyWithdrawalInputEnvelope = {
    data: itemCreateManyWithdrawalInput | itemCreateManyWithdrawalInput[]
    skipDuplicates?: boolean
  }

  export type departmentUpsertWithoutWithdrawalsInput = {
    update: XOR<departmentUpdateWithoutWithdrawalsInput, departmentUncheckedUpdateWithoutWithdrawalsInput>
    create: XOR<departmentCreateWithoutWithdrawalsInput, departmentUncheckedCreateWithoutWithdrawalsInput>
    where?: departmentWhereInput
  }

  export type departmentUpdateToOneWithWhereWithoutWithdrawalsInput = {
    where?: departmentWhereInput
    data: XOR<departmentUpdateWithoutWithdrawalsInput, departmentUncheckedUpdateWithoutWithdrawalsInput>
  }

  export type departmentUpdateWithoutWithdrawalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type departmentUncheckedUpdateWithoutWithdrawalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type withdrawalItemsUpsertWithWhereUniqueWithoutWithdrawalInput = {
    where: withdrawalItemsWhereUniqueInput
    update: XOR<withdrawalItemsUpdateWithoutWithdrawalInput, withdrawalItemsUncheckedUpdateWithoutWithdrawalInput>
    create: XOR<withdrawalItemsCreateWithoutWithdrawalInput, withdrawalItemsUncheckedCreateWithoutWithdrawalInput>
  }

  export type withdrawalItemsUpdateWithWhereUniqueWithoutWithdrawalInput = {
    where: withdrawalItemsWhereUniqueInput
    data: XOR<withdrawalItemsUpdateWithoutWithdrawalInput, withdrawalItemsUncheckedUpdateWithoutWithdrawalInput>
  }

  export type withdrawalItemsUpdateManyWithWhereWithoutWithdrawalInput = {
    where: withdrawalItemsScalarWhereInput
    data: XOR<withdrawalItemsUpdateManyMutationInput, withdrawalItemsUncheckedUpdateManyWithoutWithdrawalInput>
  }

  export type userUpsertWithoutWithdrawalsInput = {
    update: XOR<userUpdateWithoutWithdrawalsInput, userUncheckedUpdateWithoutWithdrawalsInput>
    create: XOR<userCreateWithoutWithdrawalsInput, userUncheckedCreateWithoutWithdrawalsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutWithdrawalsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutWithdrawalsInput, userUncheckedUpdateWithoutWithdrawalsInput>
  }

  export type userUpdateWithoutWithdrawalsInput = {
    username?: StringFieldUpdateOperationsInput | string
    usersecret?: StringFieldUpdateOperationsInput | string
    authority?: NullableStringFieldUpdateOperationsInput | string | null
    items?: itemUpdateManyWithoutStockNestedInput
    withdrawalItems?: withdrawalItemsUpdateManyWithoutStockNestedInput
    withdrawalCart?: withdrawalCartUpdateManyWithoutStockNestedInput
  }

  export type userUncheckedUpdateWithoutWithdrawalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    usersecret?: StringFieldUpdateOperationsInput | string
    authority?: NullableStringFieldUpdateOperationsInput | string | null
    items?: itemUncheckedUpdateManyWithoutStockNestedInput
    withdrawalItems?: withdrawalItemsUncheckedUpdateManyWithoutStockNestedInput
    withdrawalCart?: withdrawalCartUncheckedUpdateManyWithoutStockNestedInput
  }

  export type itemUpsertWithWhereUniqueWithoutWithdrawalInput = {
    where: itemWhereUniqueInput
    update: XOR<itemUpdateWithoutWithdrawalInput, itemUncheckedUpdateWithoutWithdrawalInput>
    create: XOR<itemCreateWithoutWithdrawalInput, itemUncheckedCreateWithoutWithdrawalInput>
  }

  export type itemUpdateWithWhereUniqueWithoutWithdrawalInput = {
    where: itemWhereUniqueInput
    data: XOR<itemUpdateWithoutWithdrawalInput, itemUncheckedUpdateWithoutWithdrawalInput>
  }

  export type itemUpdateManyWithWhereWithoutWithdrawalInput = {
    where: itemScalarWhereInput
    data: XOR<itemUpdateManyMutationInput, itemUncheckedUpdateManyWithoutWithdrawalInput>
  }

  export type withdrawalCreateWithoutItemsInput = {
    departmentName: string
    date: string
    department: departmentCreateNestedOneWithoutWithdrawalsInput
    stock: userCreateNestedOneWithoutWithdrawalsInput
    stockItmes?: itemCreateNestedManyWithoutWithdrawalInput
  }

  export type withdrawalUncheckedCreateWithoutItemsInput = {
    id?: number
    departmentName: string
    date: string
    departmentId: string
    stockId: number
    stockItmes?: itemUncheckedCreateNestedManyWithoutWithdrawalInput
  }

  export type withdrawalCreateOrConnectWithoutItemsInput = {
    where: withdrawalWhereUniqueInput
    create: XOR<withdrawalCreateWithoutItemsInput, withdrawalUncheckedCreateWithoutItemsInput>
  }

  export type itemParentCreateWithoutWithdrawalsInput = {
    id?: string
    genericName: string
    category: string
    unit: string
    latestWithdrawal?: string | null
    latestReceive?: string | null
    mainStockSpecific: boolean
    items?: itemCreateNestedManyWithoutItemParentInput
  }

  export type itemParentUncheckedCreateWithoutWithdrawalsInput = {
    id?: string
    genericName: string
    category: string
    unit: string
    latestWithdrawal?: string | null
    latestReceive?: string | null
    mainStockSpecific: boolean
    items?: itemUncheckedCreateNestedManyWithoutItemParentInput
  }

  export type itemParentCreateOrConnectWithoutWithdrawalsInput = {
    where: itemParentWhereUniqueInput
    create: XOR<itemParentCreateWithoutWithdrawalsInput, itemParentUncheckedCreateWithoutWithdrawalsInput>
  }

  export type userCreateWithoutWithdrawalItemsInput = {
    username: string
    usersecret: string
    authority?: string | null
    items?: itemCreateNestedManyWithoutStockInput
    withdrawals?: withdrawalCreateNestedManyWithoutStockInput
    withdrawalCart?: withdrawalCartCreateNestedManyWithoutStockInput
  }

  export type userUncheckedCreateWithoutWithdrawalItemsInput = {
    id?: number
    username: string
    usersecret: string
    authority?: string | null
    items?: itemUncheckedCreateNestedManyWithoutStockInput
    withdrawals?: withdrawalUncheckedCreateNestedManyWithoutStockInput
    withdrawalCart?: withdrawalCartUncheckedCreateNestedManyWithoutStockInput
  }

  export type userCreateOrConnectWithoutWithdrawalItemsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutWithdrawalItemsInput, userUncheckedCreateWithoutWithdrawalItemsInput>
  }

  export type withdrawalUpsertWithoutItemsInput = {
    update: XOR<withdrawalUpdateWithoutItemsInput, withdrawalUncheckedUpdateWithoutItemsInput>
    create: XOR<withdrawalCreateWithoutItemsInput, withdrawalUncheckedCreateWithoutItemsInput>
    where?: withdrawalWhereInput
  }

  export type withdrawalUpdateToOneWithWhereWithoutItemsInput = {
    where?: withdrawalWhereInput
    data: XOR<withdrawalUpdateWithoutItemsInput, withdrawalUncheckedUpdateWithoutItemsInput>
  }

  export type withdrawalUpdateWithoutItemsInput = {
    departmentName?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    department?: departmentUpdateOneRequiredWithoutWithdrawalsNestedInput
    stock?: userUpdateOneRequiredWithoutWithdrawalsNestedInput
    stockItmes?: itemUpdateManyWithoutWithdrawalNestedInput
  }

  export type withdrawalUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    departmentName?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    stockId?: IntFieldUpdateOperationsInput | number
    stockItmes?: itemUncheckedUpdateManyWithoutWithdrawalNestedInput
  }

  export type itemParentUpsertWithoutWithdrawalsInput = {
    update: XOR<itemParentUpdateWithoutWithdrawalsInput, itemParentUncheckedUpdateWithoutWithdrawalsInput>
    create: XOR<itemParentCreateWithoutWithdrawalsInput, itemParentUncheckedCreateWithoutWithdrawalsInput>
    where?: itemParentWhereInput
  }

  export type itemParentUpdateToOneWithWhereWithoutWithdrawalsInput = {
    where?: itemParentWhereInput
    data: XOR<itemParentUpdateWithoutWithdrawalsInput, itemParentUncheckedUpdateWithoutWithdrawalsInput>
  }

  export type itemParentUpdateWithoutWithdrawalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    latestWithdrawal?: NullableStringFieldUpdateOperationsInput | string | null
    latestReceive?: NullableStringFieldUpdateOperationsInput | string | null
    mainStockSpecific?: BoolFieldUpdateOperationsInput | boolean
    items?: itemUpdateManyWithoutItemParentNestedInput
  }

  export type itemParentUncheckedUpdateWithoutWithdrawalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    latestWithdrawal?: NullableStringFieldUpdateOperationsInput | string | null
    latestReceive?: NullableStringFieldUpdateOperationsInput | string | null
    mainStockSpecific?: BoolFieldUpdateOperationsInput | boolean
    items?: itemUncheckedUpdateManyWithoutItemParentNestedInput
  }

  export type userUpsertWithoutWithdrawalItemsInput = {
    update: XOR<userUpdateWithoutWithdrawalItemsInput, userUncheckedUpdateWithoutWithdrawalItemsInput>
    create: XOR<userCreateWithoutWithdrawalItemsInput, userUncheckedCreateWithoutWithdrawalItemsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutWithdrawalItemsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutWithdrawalItemsInput, userUncheckedUpdateWithoutWithdrawalItemsInput>
  }

  export type userUpdateWithoutWithdrawalItemsInput = {
    username?: StringFieldUpdateOperationsInput | string
    usersecret?: StringFieldUpdateOperationsInput | string
    authority?: NullableStringFieldUpdateOperationsInput | string | null
    items?: itemUpdateManyWithoutStockNestedInput
    withdrawals?: withdrawalUpdateManyWithoutStockNestedInput
    withdrawalCart?: withdrawalCartUpdateManyWithoutStockNestedInput
  }

  export type userUncheckedUpdateWithoutWithdrawalItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    usersecret?: StringFieldUpdateOperationsInput | string
    authority?: NullableStringFieldUpdateOperationsInput | string | null
    items?: itemUncheckedUpdateManyWithoutStockNestedInput
    withdrawals?: withdrawalUncheckedUpdateManyWithoutStockNestedInput
    withdrawalCart?: withdrawalCartUncheckedUpdateManyWithoutStockNestedInput
  }

  export type userCreateWithoutWithdrawalCartInput = {
    username: string
    usersecret: string
    authority?: string | null
    items?: itemCreateNestedManyWithoutStockInput
    withdrawals?: withdrawalCreateNestedManyWithoutStockInput
    withdrawalItems?: withdrawalItemsCreateNestedManyWithoutStockInput
  }

  export type userUncheckedCreateWithoutWithdrawalCartInput = {
    id?: number
    username: string
    usersecret: string
    authority?: string | null
    items?: itemUncheckedCreateNestedManyWithoutStockInput
    withdrawals?: withdrawalUncheckedCreateNestedManyWithoutStockInput
    withdrawalItems?: withdrawalItemsUncheckedCreateNestedManyWithoutStockInput
  }

  export type userCreateOrConnectWithoutWithdrawalCartInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutWithdrawalCartInput, userUncheckedCreateWithoutWithdrawalCartInput>
  }

  export type withdrawalCartItemsCreateWithoutCartInput = {
    itemId?: number | null
    genericName: string
    unit: string
    category?: string | null
    quantity: number
    expireDate?: string | null
    maxQuantity?: number | null
    itemParentId: string
  }

  export type withdrawalCartItemsUncheckedCreateWithoutCartInput = {
    id?: number
    itemId?: number | null
    genericName: string
    unit: string
    category?: string | null
    quantity: number
    expireDate?: string | null
    maxQuantity?: number | null
    itemParentId: string
  }

  export type withdrawalCartItemsCreateOrConnectWithoutCartInput = {
    where: withdrawalCartItemsWhereUniqueInput
    create: XOR<withdrawalCartItemsCreateWithoutCartInput, withdrawalCartItemsUncheckedCreateWithoutCartInput>
  }

  export type withdrawalCartItemsCreateManyCartInputEnvelope = {
    data: withdrawalCartItemsCreateManyCartInput | withdrawalCartItemsCreateManyCartInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutWithdrawalCartInput = {
    update: XOR<userUpdateWithoutWithdrawalCartInput, userUncheckedUpdateWithoutWithdrawalCartInput>
    create: XOR<userCreateWithoutWithdrawalCartInput, userUncheckedCreateWithoutWithdrawalCartInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutWithdrawalCartInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutWithdrawalCartInput, userUncheckedUpdateWithoutWithdrawalCartInput>
  }

  export type userUpdateWithoutWithdrawalCartInput = {
    username?: StringFieldUpdateOperationsInput | string
    usersecret?: StringFieldUpdateOperationsInput | string
    authority?: NullableStringFieldUpdateOperationsInput | string | null
    items?: itemUpdateManyWithoutStockNestedInput
    withdrawals?: withdrawalUpdateManyWithoutStockNestedInput
    withdrawalItems?: withdrawalItemsUpdateManyWithoutStockNestedInput
  }

  export type userUncheckedUpdateWithoutWithdrawalCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    usersecret?: StringFieldUpdateOperationsInput | string
    authority?: NullableStringFieldUpdateOperationsInput | string | null
    items?: itemUncheckedUpdateManyWithoutStockNestedInput
    withdrawals?: withdrawalUncheckedUpdateManyWithoutStockNestedInput
    withdrawalItems?: withdrawalItemsUncheckedUpdateManyWithoutStockNestedInput
  }

  export type withdrawalCartItemsUpsertWithWhereUniqueWithoutCartInput = {
    where: withdrawalCartItemsWhereUniqueInput
    update: XOR<withdrawalCartItemsUpdateWithoutCartInput, withdrawalCartItemsUncheckedUpdateWithoutCartInput>
    create: XOR<withdrawalCartItemsCreateWithoutCartInput, withdrawalCartItemsUncheckedCreateWithoutCartInput>
  }

  export type withdrawalCartItemsUpdateWithWhereUniqueWithoutCartInput = {
    where: withdrawalCartItemsWhereUniqueInput
    data: XOR<withdrawalCartItemsUpdateWithoutCartInput, withdrawalCartItemsUncheckedUpdateWithoutCartInput>
  }

  export type withdrawalCartItemsUpdateManyWithWhereWithoutCartInput = {
    where: withdrawalCartItemsScalarWhereInput
    data: XOR<withdrawalCartItemsUpdateManyMutationInput, withdrawalCartItemsUncheckedUpdateManyWithoutCartInput>
  }

  export type withdrawalCartItemsScalarWhereInput = {
    AND?: withdrawalCartItemsScalarWhereInput | withdrawalCartItemsScalarWhereInput[]
    OR?: withdrawalCartItemsScalarWhereInput[]
    NOT?: withdrawalCartItemsScalarWhereInput | withdrawalCartItemsScalarWhereInput[]
    id?: IntFilter<"withdrawalCartItems"> | number
    itemId?: IntNullableFilter<"withdrawalCartItems"> | number | null
    genericName?: StringFilter<"withdrawalCartItems"> | string
    unit?: StringFilter<"withdrawalCartItems"> | string
    category?: StringNullableFilter<"withdrawalCartItems"> | string | null
    quantity?: IntFilter<"withdrawalCartItems"> | number
    expireDate?: StringNullableFilter<"withdrawalCartItems"> | string | null
    cartId?: IntFilter<"withdrawalCartItems"> | number
    maxQuantity?: IntNullableFilter<"withdrawalCartItems"> | number | null
    itemParentId?: StringFilter<"withdrawalCartItems"> | string
  }

  export type withdrawalCartCreateWithoutItemsInput = {
    date?: string | null
    departmentName?: string | null
    stock: userCreateNestedOneWithoutWithdrawalCartInput
  }

  export type withdrawalCartUncheckedCreateWithoutItemsInput = {
    id?: number
    date?: string | null
    departmentName?: string | null
    stockId: number
  }

  export type withdrawalCartCreateOrConnectWithoutItemsInput = {
    where: withdrawalCartWhereUniqueInput
    create: XOR<withdrawalCartCreateWithoutItemsInput, withdrawalCartUncheckedCreateWithoutItemsInput>
  }

  export type withdrawalCartUpsertWithoutItemsInput = {
    update: XOR<withdrawalCartUpdateWithoutItemsInput, withdrawalCartUncheckedUpdateWithoutItemsInput>
    create: XOR<withdrawalCartCreateWithoutItemsInput, withdrawalCartUncheckedCreateWithoutItemsInput>
    where?: withdrawalCartWhereInput
  }

  export type withdrawalCartUpdateToOneWithWhereWithoutItemsInput = {
    where?: withdrawalCartWhereInput
    data: XOR<withdrawalCartUpdateWithoutItemsInput, withdrawalCartUncheckedUpdateWithoutItemsInput>
  }

  export type withdrawalCartUpdateWithoutItemsInput = {
    date?: NullableStringFieldUpdateOperationsInput | string | null
    departmentName?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: userUpdateOneRequiredWithoutWithdrawalCartNestedInput
  }

  export type withdrawalCartUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableStringFieldUpdateOperationsInput | string | null
    departmentName?: NullableStringFieldUpdateOperationsInput | string | null
    stockId?: IntFieldUpdateOperationsInput | number
  }

  export type itemCreateManyStockInput = {
    id?: number
    itemId?: number | null
    genericName: string
    unitInfo: string
    unit: string
    category: string
    quantity: number
    expireDate?: string | null
    providor: string
    receiveDate: string
    itemParentId: string
    receiptId?: number | null
    withdrawalId?: number | null
  }

  export type withdrawalCreateManyStockInput = {
    id?: number
    departmentName: string
    date: string
    departmentId: string
  }

  export type withdrawalItemsCreateManyStockInput = {
    id?: string
    itemId: number
    genericName: string
    unit: string
    category?: string | null
    quantity: number
    expireDate?: string | null
    withdrawalId: number
    itemParentId: string
    withdrawDate?: string | null
  }

  export type withdrawalCartCreateManyStockInput = {
    id?: number
    date?: string | null
    departmentName?: string | null
  }

  export type itemUpdateWithoutStockInput = {
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
    genericName?: StringFieldUpdateOperationsInput | string
    unitInfo?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    providor?: StringFieldUpdateOperationsInput | string
    receiveDate?: StringFieldUpdateOperationsInput | string
    withdrawal?: withdrawalUpdateOneWithoutStockItmesNestedInput
    itemParent?: itemParentUpdateOneRequiredWithoutItemsNestedInput
    receipt?: receiptUpdateOneWithoutStockItmesNestedInput
  }

  export type itemUncheckedUpdateWithoutStockInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
    genericName?: StringFieldUpdateOperationsInput | string
    unitInfo?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    providor?: StringFieldUpdateOperationsInput | string
    receiveDate?: StringFieldUpdateOperationsInput | string
    itemParentId?: StringFieldUpdateOperationsInput | string
    receiptId?: NullableIntFieldUpdateOperationsInput | number | null
    withdrawalId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type itemUncheckedUpdateManyWithoutStockInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
    genericName?: StringFieldUpdateOperationsInput | string
    unitInfo?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    providor?: StringFieldUpdateOperationsInput | string
    receiveDate?: StringFieldUpdateOperationsInput | string
    itemParentId?: StringFieldUpdateOperationsInput | string
    receiptId?: NullableIntFieldUpdateOperationsInput | number | null
    withdrawalId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type withdrawalUpdateWithoutStockInput = {
    departmentName?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    department?: departmentUpdateOneRequiredWithoutWithdrawalsNestedInput
    items?: withdrawalItemsUpdateManyWithoutWithdrawalNestedInput
    stockItmes?: itemUpdateManyWithoutWithdrawalNestedInput
  }

  export type withdrawalUncheckedUpdateWithoutStockInput = {
    id?: IntFieldUpdateOperationsInput | number
    departmentName?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    items?: withdrawalItemsUncheckedUpdateManyWithoutWithdrawalNestedInput
    stockItmes?: itemUncheckedUpdateManyWithoutWithdrawalNestedInput
  }

  export type withdrawalUncheckedUpdateManyWithoutStockInput = {
    id?: IntFieldUpdateOperationsInput | number
    departmentName?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
  }

  export type withdrawalItemsUpdateWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: IntFieldUpdateOperationsInput | number
    genericName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    withdrawDate?: NullableStringFieldUpdateOperationsInput | string | null
    withdrawal?: withdrawalUpdateOneRequiredWithoutItemsNestedInput
    itemParent?: itemParentUpdateOneRequiredWithoutWithdrawalsNestedInput
  }

  export type withdrawalItemsUncheckedUpdateWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: IntFieldUpdateOperationsInput | number
    genericName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    withdrawalId?: IntFieldUpdateOperationsInput | number
    itemParentId?: StringFieldUpdateOperationsInput | string
    withdrawDate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type withdrawalItemsUncheckedUpdateManyWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: IntFieldUpdateOperationsInput | number
    genericName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    withdrawalId?: IntFieldUpdateOperationsInput | number
    itemParentId?: StringFieldUpdateOperationsInput | string
    withdrawDate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type withdrawalCartUpdateWithoutStockInput = {
    date?: NullableStringFieldUpdateOperationsInput | string | null
    departmentName?: NullableStringFieldUpdateOperationsInput | string | null
    items?: withdrawalCartItemsUpdateManyWithoutCartNestedInput
  }

  export type withdrawalCartUncheckedUpdateWithoutStockInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableStringFieldUpdateOperationsInput | string | null
    departmentName?: NullableStringFieldUpdateOperationsInput | string | null
    items?: withdrawalCartItemsUncheckedUpdateManyWithoutCartNestedInput
  }

  export type withdrawalCartUncheckedUpdateManyWithoutStockInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableStringFieldUpdateOperationsInput | string | null
    departmentName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type withdrawalCreateManyDepartmentInput = {
    id?: number
    departmentName: string
    date: string
    stockId: number
  }

  export type withdrawalUpdateWithoutDepartmentInput = {
    departmentName?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    items?: withdrawalItemsUpdateManyWithoutWithdrawalNestedInput
    stock?: userUpdateOneRequiredWithoutWithdrawalsNestedInput
    stockItmes?: itemUpdateManyWithoutWithdrawalNestedInput
  }

  export type withdrawalUncheckedUpdateWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    departmentName?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    stockId?: IntFieldUpdateOperationsInput | number
    items?: withdrawalItemsUncheckedUpdateManyWithoutWithdrawalNestedInput
    stockItmes?: itemUncheckedUpdateManyWithoutWithdrawalNestedInput
  }

  export type withdrawalUncheckedUpdateManyWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    departmentName?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    stockId?: IntFieldUpdateOperationsInput | number
  }

  export type receiptCreateManyProvidorInput = {
    id?: number
    date: string
    providorName: string
  }

  export type receiptUpdateWithoutProvidorInput = {
    date?: StringFieldUpdateOperationsInput | string
    providorName?: StringFieldUpdateOperationsInput | string
    items?: receiptItemsUpdateManyWithoutReceiptNestedInput
    stockItmes?: itemUpdateManyWithoutReceiptNestedInput
  }

  export type receiptUncheckedUpdateWithoutProvidorInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    providorName?: StringFieldUpdateOperationsInput | string
    items?: receiptItemsUncheckedUpdateManyWithoutReceiptNestedInput
    stockItmes?: itemUncheckedUpdateManyWithoutReceiptNestedInput
  }

  export type receiptUncheckedUpdateManyWithoutProvidorInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    providorName?: StringFieldUpdateOperationsInput | string
  }

  export type itemCreateManyItemParentInput = {
    id?: number
    itemId?: number | null
    genericName: string
    unitInfo: string
    unit: string
    category: string
    quantity: number
    expireDate?: string | null
    providor: string
    receiveDate: string
    stockId: number
    receiptId?: number | null
    withdrawalId?: number | null
  }

  export type withdrawalItemsCreateManyItemParentInput = {
    id?: string
    itemId: number
    genericName: string
    unit: string
    category?: string | null
    quantity: number
    expireDate?: string | null
    withdrawalId: number
    withdrawDate?: string | null
    stockId?: number | null
  }

  export type itemUpdateWithoutItemParentInput = {
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
    genericName?: StringFieldUpdateOperationsInput | string
    unitInfo?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    providor?: StringFieldUpdateOperationsInput | string
    receiveDate?: StringFieldUpdateOperationsInput | string
    withdrawal?: withdrawalUpdateOneWithoutStockItmesNestedInput
    stock?: userUpdateOneRequiredWithoutItemsNestedInput
    receipt?: receiptUpdateOneWithoutStockItmesNestedInput
  }

  export type itemUncheckedUpdateWithoutItemParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
    genericName?: StringFieldUpdateOperationsInput | string
    unitInfo?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    providor?: StringFieldUpdateOperationsInput | string
    receiveDate?: StringFieldUpdateOperationsInput | string
    stockId?: IntFieldUpdateOperationsInput | number
    receiptId?: NullableIntFieldUpdateOperationsInput | number | null
    withdrawalId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type itemUncheckedUpdateManyWithoutItemParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
    genericName?: StringFieldUpdateOperationsInput | string
    unitInfo?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    providor?: StringFieldUpdateOperationsInput | string
    receiveDate?: StringFieldUpdateOperationsInput | string
    stockId?: IntFieldUpdateOperationsInput | number
    receiptId?: NullableIntFieldUpdateOperationsInput | number | null
    withdrawalId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type withdrawalItemsUpdateWithoutItemParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: IntFieldUpdateOperationsInput | number
    genericName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    withdrawDate?: NullableStringFieldUpdateOperationsInput | string | null
    withdrawal?: withdrawalUpdateOneRequiredWithoutItemsNestedInput
    stock?: userUpdateOneWithoutWithdrawalItemsNestedInput
  }

  export type withdrawalItemsUncheckedUpdateWithoutItemParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: IntFieldUpdateOperationsInput | number
    genericName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    withdrawalId?: IntFieldUpdateOperationsInput | number
    withdrawDate?: NullableStringFieldUpdateOperationsInput | string | null
    stockId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type withdrawalItemsUncheckedUpdateManyWithoutItemParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: IntFieldUpdateOperationsInput | number
    genericName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    withdrawalId?: IntFieldUpdateOperationsInput | number
    withdrawDate?: NullableStringFieldUpdateOperationsInput | string | null
    stockId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type receiptItemsCreateManyReceiptInput = {
    id?: string
    genericName: string
    unit: string
    unitInfo: string
    category: string
    quantity: number
    expireDate?: string | null
  }

  export type itemCreateManyReceiptInput = {
    id?: number
    itemId?: number | null
    genericName: string
    unitInfo: string
    unit: string
    category: string
    quantity: number
    expireDate?: string | null
    providor: string
    receiveDate: string
    itemParentId: string
    stockId: number
    withdrawalId?: number | null
  }

  export type receiptItemsUpdateWithoutReceiptInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    unitInfo?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type receiptItemsUncheckedUpdateWithoutReceiptInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    unitInfo?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type receiptItemsUncheckedUpdateManyWithoutReceiptInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    unitInfo?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type itemUpdateWithoutReceiptInput = {
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
    genericName?: StringFieldUpdateOperationsInput | string
    unitInfo?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    providor?: StringFieldUpdateOperationsInput | string
    receiveDate?: StringFieldUpdateOperationsInput | string
    withdrawal?: withdrawalUpdateOneWithoutStockItmesNestedInput
    stock?: userUpdateOneRequiredWithoutItemsNestedInput
    itemParent?: itemParentUpdateOneRequiredWithoutItemsNestedInput
  }

  export type itemUncheckedUpdateWithoutReceiptInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
    genericName?: StringFieldUpdateOperationsInput | string
    unitInfo?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    providor?: StringFieldUpdateOperationsInput | string
    receiveDate?: StringFieldUpdateOperationsInput | string
    itemParentId?: StringFieldUpdateOperationsInput | string
    stockId?: IntFieldUpdateOperationsInput | number
    withdrawalId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type itemUncheckedUpdateManyWithoutReceiptInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
    genericName?: StringFieldUpdateOperationsInput | string
    unitInfo?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    providor?: StringFieldUpdateOperationsInput | string
    receiveDate?: StringFieldUpdateOperationsInput | string
    itemParentId?: StringFieldUpdateOperationsInput | string
    stockId?: IntFieldUpdateOperationsInput | number
    withdrawalId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type receiptCartItemsCreateManyCartInput = {
    id?: string
    genericName: string
    unit: string
    unitInfo: string
    category?: string | null
    quantity: number
    expireDate?: string | null
  }

  export type receiptCartItemsUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    unitInfo?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type receiptCartItemsUncheckedUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    unitInfo?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type receiptCartItemsUncheckedUpdateManyWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    unitInfo?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type withdrawalItemsCreateManyWithdrawalInput = {
    id?: string
    itemId: number
    genericName: string
    unit: string
    category?: string | null
    quantity: number
    expireDate?: string | null
    itemParentId: string
    withdrawDate?: string | null
    stockId?: number | null
  }

  export type itemCreateManyWithdrawalInput = {
    id?: number
    itemId?: number | null
    genericName: string
    unitInfo: string
    unit: string
    category: string
    quantity: number
    expireDate?: string | null
    providor: string
    receiveDate: string
    itemParentId: string
    stockId: number
    receiptId?: number | null
  }

  export type withdrawalItemsUpdateWithoutWithdrawalInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: IntFieldUpdateOperationsInput | number
    genericName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    withdrawDate?: NullableStringFieldUpdateOperationsInput | string | null
    itemParent?: itemParentUpdateOneRequiredWithoutWithdrawalsNestedInput
    stock?: userUpdateOneWithoutWithdrawalItemsNestedInput
  }

  export type withdrawalItemsUncheckedUpdateWithoutWithdrawalInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: IntFieldUpdateOperationsInput | number
    genericName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    itemParentId?: StringFieldUpdateOperationsInput | string
    withdrawDate?: NullableStringFieldUpdateOperationsInput | string | null
    stockId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type withdrawalItemsUncheckedUpdateManyWithoutWithdrawalInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: IntFieldUpdateOperationsInput | number
    genericName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    itemParentId?: StringFieldUpdateOperationsInput | string
    withdrawDate?: NullableStringFieldUpdateOperationsInput | string | null
    stockId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type itemUpdateWithoutWithdrawalInput = {
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
    genericName?: StringFieldUpdateOperationsInput | string
    unitInfo?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    providor?: StringFieldUpdateOperationsInput | string
    receiveDate?: StringFieldUpdateOperationsInput | string
    stock?: userUpdateOneRequiredWithoutItemsNestedInput
    itemParent?: itemParentUpdateOneRequiredWithoutItemsNestedInput
    receipt?: receiptUpdateOneWithoutStockItmesNestedInput
  }

  export type itemUncheckedUpdateWithoutWithdrawalInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
    genericName?: StringFieldUpdateOperationsInput | string
    unitInfo?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    providor?: StringFieldUpdateOperationsInput | string
    receiveDate?: StringFieldUpdateOperationsInput | string
    itemParentId?: StringFieldUpdateOperationsInput | string
    stockId?: IntFieldUpdateOperationsInput | number
    receiptId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type itemUncheckedUpdateManyWithoutWithdrawalInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
    genericName?: StringFieldUpdateOperationsInput | string
    unitInfo?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    providor?: StringFieldUpdateOperationsInput | string
    receiveDate?: StringFieldUpdateOperationsInput | string
    itemParentId?: StringFieldUpdateOperationsInput | string
    stockId?: IntFieldUpdateOperationsInput | number
    receiptId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type withdrawalCartItemsCreateManyCartInput = {
    id?: number
    itemId?: number | null
    genericName: string
    unit: string
    category?: string | null
    quantity: number
    expireDate?: string | null
    maxQuantity?: number | null
    itemParentId: string
  }

  export type withdrawalCartItemsUpdateWithoutCartInput = {
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
    genericName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    maxQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    itemParentId?: StringFieldUpdateOperationsInput | string
  }

  export type withdrawalCartItemsUncheckedUpdateWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
    genericName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    maxQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    itemParentId?: StringFieldUpdateOperationsInput | string
  }

  export type withdrawalCartItemsUncheckedUpdateManyWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
    genericName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    expireDate?: NullableStringFieldUpdateOperationsInput | string | null
    maxQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    itemParentId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}