
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
 * Model Hotels
 * 
 */
export type Hotels = $Result.DefaultSelection<Prisma.$HotelsPayload>
/**
 * Model Rooms
 * 
 */
export type Rooms = $Result.DefaultSelection<Prisma.$RoomsPayload>
/**
 * Model RoomNumber
 * 
 */
export type RoomNumber = $Result.DefaultSelection<Prisma.$RoomNumberPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Bookings
 * 
 */
export type Bookings = $Result.DefaultSelection<Prisma.$BookingsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Hotels
 * const hotels = await prisma.hotels.findMany()
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
   * // Fetch zero or more Hotels
   * const hotels = await prisma.hotels.findMany()
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
   * `prisma.hotels`: Exposes CRUD operations for the **Hotels** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hotels
    * const hotels = await prisma.hotels.findMany()
    * ```
    */
  get hotels(): Prisma.HotelsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rooms`: Exposes CRUD operations for the **Rooms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.rooms.findMany()
    * ```
    */
  get rooms(): Prisma.RoomsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomNumber`: Exposes CRUD operations for the **RoomNumber** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomNumbers
    * const roomNumbers = await prisma.roomNumber.findMany()
    * ```
    */
  get roomNumber(): Prisma.RoomNumberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookings`: Exposes CRUD operations for the **Bookings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.bookings.findMany()
    * ```
    */
  get bookings(): Prisma.BookingsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Hotels: 'Hotels',
    Rooms: 'Rooms',
    RoomNumber: 'RoomNumber',
    Users: 'Users',
    Bookings: 'Bookings'
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
      modelProps: "hotels" | "rooms" | "roomNumber" | "users" | "bookings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Hotels: {
        payload: Prisma.$HotelsPayload<ExtArgs>
        fields: Prisma.HotelsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HotelsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HotelsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsPayload>
          }
          findFirst: {
            args: Prisma.HotelsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HotelsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsPayload>
          }
          findMany: {
            args: Prisma.HotelsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsPayload>[]
          }
          create: {
            args: Prisma.HotelsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsPayload>
          }
          createMany: {
            args: Prisma.HotelsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HotelsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsPayload>[]
          }
          delete: {
            args: Prisma.HotelsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsPayload>
          }
          update: {
            args: Prisma.HotelsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsPayload>
          }
          deleteMany: {
            args: Prisma.HotelsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HotelsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HotelsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsPayload>[]
          }
          upsert: {
            args: Prisma.HotelsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsPayload>
          }
          aggregate: {
            args: Prisma.HotelsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHotels>
          }
          groupBy: {
            args: Prisma.HotelsGroupByArgs<ExtArgs>
            result: $Utils.Optional<HotelsGroupByOutputType>[]
          }
          count: {
            args: Prisma.HotelsCountArgs<ExtArgs>
            result: $Utils.Optional<HotelsCountAggregateOutputType> | number
          }
        }
      }
      Rooms: {
        payload: Prisma.$RoomsPayload<ExtArgs>
        fields: Prisma.RoomsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload>
          }
          findFirst: {
            args: Prisma.RoomsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload>
          }
          findMany: {
            args: Prisma.RoomsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload>[]
          }
          create: {
            args: Prisma.RoomsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload>
          }
          createMany: {
            args: Prisma.RoomsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload>[]
          }
          delete: {
            args: Prisma.RoomsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload>
          }
          update: {
            args: Prisma.RoomsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload>
          }
          deleteMany: {
            args: Prisma.RoomsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload>[]
          }
          upsert: {
            args: Prisma.RoomsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload>
          }
          aggregate: {
            args: Prisma.RoomsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRooms>
          }
          groupBy: {
            args: Prisma.RoomsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomsGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomsCountArgs<ExtArgs>
            result: $Utils.Optional<RoomsCountAggregateOutputType> | number
          }
        }
      }
      RoomNumber: {
        payload: Prisma.$RoomNumberPayload<ExtArgs>
        fields: Prisma.RoomNumberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomNumberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomNumberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomNumberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomNumberPayload>
          }
          findFirst: {
            args: Prisma.RoomNumberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomNumberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomNumberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomNumberPayload>
          }
          findMany: {
            args: Prisma.RoomNumberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomNumberPayload>[]
          }
          create: {
            args: Prisma.RoomNumberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomNumberPayload>
          }
          createMany: {
            args: Prisma.RoomNumberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomNumberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomNumberPayload>[]
          }
          delete: {
            args: Prisma.RoomNumberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomNumberPayload>
          }
          update: {
            args: Prisma.RoomNumberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomNumberPayload>
          }
          deleteMany: {
            args: Prisma.RoomNumberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomNumberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomNumberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomNumberPayload>[]
          }
          upsert: {
            args: Prisma.RoomNumberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomNumberPayload>
          }
          aggregate: {
            args: Prisma.RoomNumberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomNumber>
          }
          groupBy: {
            args: Prisma.RoomNumberGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomNumberGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomNumberCountArgs<ExtArgs>
            result: $Utils.Optional<RoomNumberCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Bookings: {
        payload: Prisma.$BookingsPayload<ExtArgs>
        fields: Prisma.BookingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          findFirst: {
            args: Prisma.BookingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          findMany: {
            args: Prisma.BookingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>[]
          }
          create: {
            args: Prisma.BookingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          createMany: {
            args: Prisma.BookingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>[]
          }
          delete: {
            args: Prisma.BookingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          update: {
            args: Prisma.BookingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          deleteMany: {
            args: Prisma.BookingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>[]
          }
          upsert: {
            args: Prisma.BookingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          aggregate: {
            args: Prisma.BookingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookings>
          }
          groupBy: {
            args: Prisma.BookingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingsCountArgs<ExtArgs>
            result: $Utils.Optional<BookingsCountAggregateOutputType> | number
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
    hotels?: HotelsOmit
    rooms?: RoomsOmit
    roomNumber?: RoomNumberOmit
    users?: UsersOmit
    bookings?: BookingsOmit
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
   * Count Type HotelsCountOutputType
   */

  export type HotelsCountOutputType = {
    rooms: number
  }

  export type HotelsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | HotelsCountOutputTypeCountRoomsArgs
  }

  // Custom InputTypes
  /**
   * HotelsCountOutputType without action
   */
  export type HotelsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelsCountOutputType
     */
    select?: HotelsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HotelsCountOutputType without action
   */
  export type HotelsCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomsWhereInput
  }


  /**
   * Count Type RoomsCountOutputType
   */

  export type RoomsCountOutputType = {
    roomNumbers: number
    bookings: number
  }

  export type RoomsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roomNumbers?: boolean | RoomsCountOutputTypeCountRoomNumbersArgs
    bookings?: boolean | RoomsCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * RoomsCountOutputType without action
   */
  export type RoomsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomsCountOutputType
     */
    select?: RoomsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomsCountOutputType without action
   */
  export type RoomsCountOutputTypeCountRoomNumbersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomNumberWhereInput
  }

  /**
   * RoomsCountOutputType without action
   */
  export type RoomsCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    bookings: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | UsersCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Hotels
   */

  export type AggregateHotels = {
    _count: HotelsCountAggregateOutputType | null
    _avg: HotelsAvgAggregateOutputType | null
    _sum: HotelsSumAggregateOutputType | null
    _min: HotelsMinAggregateOutputType | null
    _max: HotelsMaxAggregateOutputType | null
  }

  export type HotelsAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    cheapestPrice: number | null
  }

  export type HotelsSumAggregateOutputType = {
    id: number | null
    rating: number | null
    cheapestPrice: number | null
  }

  export type HotelsMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    city: string | null
    address: string | null
    distance: string | null
    title: string | null
    desc: string | null
    rating: number | null
    cheapestPrice: number | null
    featured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HotelsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    city: string | null
    address: string | null
    distance: string | null
    title: string | null
    desc: string | null
    rating: number | null
    cheapestPrice: number | null
    featured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HotelsCountAggregateOutputType = {
    id: number
    name: number
    type: number
    city: number
    address: number
    distance: number
    photos: number
    title: number
    desc: number
    rating: number
    cheapestPrice: number
    featured: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HotelsAvgAggregateInputType = {
    id?: true
    rating?: true
    cheapestPrice?: true
  }

  export type HotelsSumAggregateInputType = {
    id?: true
    rating?: true
    cheapestPrice?: true
  }

  export type HotelsMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    city?: true
    address?: true
    distance?: true
    title?: true
    desc?: true
    rating?: true
    cheapestPrice?: true
    featured?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HotelsMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    city?: true
    address?: true
    distance?: true
    title?: true
    desc?: true
    rating?: true
    cheapestPrice?: true
    featured?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HotelsCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    city?: true
    address?: true
    distance?: true
    photos?: true
    title?: true
    desc?: true
    rating?: true
    cheapestPrice?: true
    featured?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HotelsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hotels to aggregate.
     */
    where?: HotelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelsOrderByWithRelationInput | HotelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HotelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hotels
    **/
    _count?: true | HotelsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HotelsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HotelsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HotelsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HotelsMaxAggregateInputType
  }

  export type GetHotelsAggregateType<T extends HotelsAggregateArgs> = {
        [P in keyof T & keyof AggregateHotels]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHotels[P]>
      : GetScalarType<T[P], AggregateHotels[P]>
  }




  export type HotelsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelsWhereInput
    orderBy?: HotelsOrderByWithAggregationInput | HotelsOrderByWithAggregationInput[]
    by: HotelsScalarFieldEnum[] | HotelsScalarFieldEnum
    having?: HotelsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HotelsCountAggregateInputType | true
    _avg?: HotelsAvgAggregateInputType
    _sum?: HotelsSumAggregateInputType
    _min?: HotelsMinAggregateInputType
    _max?: HotelsMaxAggregateInputType
  }

  export type HotelsGroupByOutputType = {
    id: number
    name: string
    type: string
    city: string
    address: string
    distance: string
    photos: string[]
    title: string | null
    desc: string | null
    rating: number | null
    cheapestPrice: number
    featured: boolean | null
    createdAt: Date
    updatedAt: Date
    _count: HotelsCountAggregateOutputType | null
    _avg: HotelsAvgAggregateOutputType | null
    _sum: HotelsSumAggregateOutputType | null
    _min: HotelsMinAggregateOutputType | null
    _max: HotelsMaxAggregateOutputType | null
  }

  type GetHotelsGroupByPayload<T extends HotelsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HotelsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HotelsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HotelsGroupByOutputType[P]>
            : GetScalarType<T[P], HotelsGroupByOutputType[P]>
        }
      >
    >


  export type HotelsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    city?: boolean
    address?: boolean
    distance?: boolean
    photos?: boolean
    title?: boolean
    desc?: boolean
    rating?: boolean
    cheapestPrice?: boolean
    featured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rooms?: boolean | Hotels$roomsArgs<ExtArgs>
    _count?: boolean | HotelsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotels"]>

  export type HotelsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    city?: boolean
    address?: boolean
    distance?: boolean
    photos?: boolean
    title?: boolean
    desc?: boolean
    rating?: boolean
    cheapestPrice?: boolean
    featured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hotels"]>

  export type HotelsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    city?: boolean
    address?: boolean
    distance?: boolean
    photos?: boolean
    title?: boolean
    desc?: boolean
    rating?: boolean
    cheapestPrice?: boolean
    featured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hotels"]>

  export type HotelsSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    city?: boolean
    address?: boolean
    distance?: boolean
    photos?: boolean
    title?: boolean
    desc?: boolean
    rating?: boolean
    cheapestPrice?: boolean
    featured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HotelsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "city" | "address" | "distance" | "photos" | "title" | "desc" | "rating" | "cheapestPrice" | "featured" | "createdAt" | "updatedAt", ExtArgs["result"]["hotels"]>
  export type HotelsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | Hotels$roomsArgs<ExtArgs>
    _count?: boolean | HotelsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HotelsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HotelsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HotelsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hotels"
    objects: {
      rooms: Prisma.$RoomsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: string
      city: string
      address: string
      distance: string
      photos: string[]
      title: string | null
      desc: string | null
      rating: number | null
      cheapestPrice: number
      featured: boolean | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["hotels"]>
    composites: {}
  }

  type HotelsGetPayload<S extends boolean | null | undefined | HotelsDefaultArgs> = $Result.GetResult<Prisma.$HotelsPayload, S>

  type HotelsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HotelsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HotelsCountAggregateInputType | true
    }

  export interface HotelsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hotels'], meta: { name: 'Hotels' } }
    /**
     * Find zero or one Hotels that matches the filter.
     * @param {HotelsFindUniqueArgs} args - Arguments to find a Hotels
     * @example
     * // Get one Hotels
     * const hotels = await prisma.hotels.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HotelsFindUniqueArgs>(args: SelectSubset<T, HotelsFindUniqueArgs<ExtArgs>>): Prisma__HotelsClient<$Result.GetResult<Prisma.$HotelsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hotels that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HotelsFindUniqueOrThrowArgs} args - Arguments to find a Hotels
     * @example
     * // Get one Hotels
     * const hotels = await prisma.hotels.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HotelsFindUniqueOrThrowArgs>(args: SelectSubset<T, HotelsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HotelsClient<$Result.GetResult<Prisma.$HotelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hotels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelsFindFirstArgs} args - Arguments to find a Hotels
     * @example
     * // Get one Hotels
     * const hotels = await prisma.hotels.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HotelsFindFirstArgs>(args?: SelectSubset<T, HotelsFindFirstArgs<ExtArgs>>): Prisma__HotelsClient<$Result.GetResult<Prisma.$HotelsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hotels that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelsFindFirstOrThrowArgs} args - Arguments to find a Hotels
     * @example
     * // Get one Hotels
     * const hotels = await prisma.hotels.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HotelsFindFirstOrThrowArgs>(args?: SelectSubset<T, HotelsFindFirstOrThrowArgs<ExtArgs>>): Prisma__HotelsClient<$Result.GetResult<Prisma.$HotelsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hotels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hotels
     * const hotels = await prisma.hotels.findMany()
     * 
     * // Get first 10 Hotels
     * const hotels = await prisma.hotels.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hotelsWithIdOnly = await prisma.hotels.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HotelsFindManyArgs>(args?: SelectSubset<T, HotelsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hotels.
     * @param {HotelsCreateArgs} args - Arguments to create a Hotels.
     * @example
     * // Create one Hotels
     * const Hotels = await prisma.hotels.create({
     *   data: {
     *     // ... data to create a Hotels
     *   }
     * })
     * 
     */
    create<T extends HotelsCreateArgs>(args: SelectSubset<T, HotelsCreateArgs<ExtArgs>>): Prisma__HotelsClient<$Result.GetResult<Prisma.$HotelsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hotels.
     * @param {HotelsCreateManyArgs} args - Arguments to create many Hotels.
     * @example
     * // Create many Hotels
     * const hotels = await prisma.hotels.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HotelsCreateManyArgs>(args?: SelectSubset<T, HotelsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hotels and returns the data saved in the database.
     * @param {HotelsCreateManyAndReturnArgs} args - Arguments to create many Hotels.
     * @example
     * // Create many Hotels
     * const hotels = await prisma.hotels.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hotels and only return the `id`
     * const hotelsWithIdOnly = await prisma.hotels.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HotelsCreateManyAndReturnArgs>(args?: SelectSubset<T, HotelsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hotels.
     * @param {HotelsDeleteArgs} args - Arguments to delete one Hotels.
     * @example
     * // Delete one Hotels
     * const Hotels = await prisma.hotels.delete({
     *   where: {
     *     // ... filter to delete one Hotels
     *   }
     * })
     * 
     */
    delete<T extends HotelsDeleteArgs>(args: SelectSubset<T, HotelsDeleteArgs<ExtArgs>>): Prisma__HotelsClient<$Result.GetResult<Prisma.$HotelsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hotels.
     * @param {HotelsUpdateArgs} args - Arguments to update one Hotels.
     * @example
     * // Update one Hotels
     * const hotels = await prisma.hotels.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HotelsUpdateArgs>(args: SelectSubset<T, HotelsUpdateArgs<ExtArgs>>): Prisma__HotelsClient<$Result.GetResult<Prisma.$HotelsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hotels.
     * @param {HotelsDeleteManyArgs} args - Arguments to filter Hotels to delete.
     * @example
     * // Delete a few Hotels
     * const { count } = await prisma.hotels.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HotelsDeleteManyArgs>(args?: SelectSubset<T, HotelsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hotels
     * const hotels = await prisma.hotels.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HotelsUpdateManyArgs>(args: SelectSubset<T, HotelsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hotels and returns the data updated in the database.
     * @param {HotelsUpdateManyAndReturnArgs} args - Arguments to update many Hotels.
     * @example
     * // Update many Hotels
     * const hotels = await prisma.hotels.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hotels and only return the `id`
     * const hotelsWithIdOnly = await prisma.hotels.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HotelsUpdateManyAndReturnArgs>(args: SelectSubset<T, HotelsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hotels.
     * @param {HotelsUpsertArgs} args - Arguments to update or create a Hotels.
     * @example
     * // Update or create a Hotels
     * const hotels = await prisma.hotels.upsert({
     *   create: {
     *     // ... data to create a Hotels
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hotels we want to update
     *   }
     * })
     */
    upsert<T extends HotelsUpsertArgs>(args: SelectSubset<T, HotelsUpsertArgs<ExtArgs>>): Prisma__HotelsClient<$Result.GetResult<Prisma.$HotelsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelsCountArgs} args - Arguments to filter Hotels to count.
     * @example
     * // Count the number of Hotels
     * const count = await prisma.hotels.count({
     *   where: {
     *     // ... the filter for the Hotels we want to count
     *   }
     * })
    **/
    count<T extends HotelsCountArgs>(
      args?: Subset<T, HotelsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HotelsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HotelsAggregateArgs>(args: Subset<T, HotelsAggregateArgs>): Prisma.PrismaPromise<GetHotelsAggregateType<T>>

    /**
     * Group by Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelsGroupByArgs} args - Group by arguments.
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
      T extends HotelsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HotelsGroupByArgs['orderBy'] }
        : { orderBy?: HotelsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HotelsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHotelsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hotels model
   */
  readonly fields: HotelsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hotels.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HotelsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rooms<T extends Hotels$roomsArgs<ExtArgs> = {}>(args?: Subset<T, Hotels$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Hotels model
   */
  interface HotelsFieldRefs {
    readonly id: FieldRef<"Hotels", 'Int'>
    readonly name: FieldRef<"Hotels", 'String'>
    readonly type: FieldRef<"Hotels", 'String'>
    readonly city: FieldRef<"Hotels", 'String'>
    readonly address: FieldRef<"Hotels", 'String'>
    readonly distance: FieldRef<"Hotels", 'String'>
    readonly photos: FieldRef<"Hotels", 'String[]'>
    readonly title: FieldRef<"Hotels", 'String'>
    readonly desc: FieldRef<"Hotels", 'String'>
    readonly rating: FieldRef<"Hotels", 'Int'>
    readonly cheapestPrice: FieldRef<"Hotels", 'Int'>
    readonly featured: FieldRef<"Hotels", 'Boolean'>
    readonly createdAt: FieldRef<"Hotels", 'DateTime'>
    readonly updatedAt: FieldRef<"Hotels", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Hotels findUnique
   */
  export type HotelsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotels
     */
    select?: HotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotels
     */
    omit?: HotelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelsInclude<ExtArgs> | null
    /**
     * Filter, which Hotels to fetch.
     */
    where: HotelsWhereUniqueInput
  }

  /**
   * Hotels findUniqueOrThrow
   */
  export type HotelsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotels
     */
    select?: HotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotels
     */
    omit?: HotelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelsInclude<ExtArgs> | null
    /**
     * Filter, which Hotels to fetch.
     */
    where: HotelsWhereUniqueInput
  }

  /**
   * Hotels findFirst
   */
  export type HotelsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotels
     */
    select?: HotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotels
     */
    omit?: HotelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelsInclude<ExtArgs> | null
    /**
     * Filter, which Hotels to fetch.
     */
    where?: HotelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelsOrderByWithRelationInput | HotelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hotels.
     */
    cursor?: HotelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hotels.
     */
    distinct?: HotelsScalarFieldEnum | HotelsScalarFieldEnum[]
  }

  /**
   * Hotels findFirstOrThrow
   */
  export type HotelsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotels
     */
    select?: HotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotels
     */
    omit?: HotelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelsInclude<ExtArgs> | null
    /**
     * Filter, which Hotels to fetch.
     */
    where?: HotelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelsOrderByWithRelationInput | HotelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hotels.
     */
    cursor?: HotelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hotels.
     */
    distinct?: HotelsScalarFieldEnum | HotelsScalarFieldEnum[]
  }

  /**
   * Hotels findMany
   */
  export type HotelsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotels
     */
    select?: HotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotels
     */
    omit?: HotelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelsInclude<ExtArgs> | null
    /**
     * Filter, which Hotels to fetch.
     */
    where?: HotelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelsOrderByWithRelationInput | HotelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hotels.
     */
    cursor?: HotelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    distinct?: HotelsScalarFieldEnum | HotelsScalarFieldEnum[]
  }

  /**
   * Hotels create
   */
  export type HotelsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotels
     */
    select?: HotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotels
     */
    omit?: HotelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelsInclude<ExtArgs> | null
    /**
     * The data needed to create a Hotels.
     */
    data: XOR<HotelsCreateInput, HotelsUncheckedCreateInput>
  }

  /**
   * Hotels createMany
   */
  export type HotelsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hotels.
     */
    data: HotelsCreateManyInput | HotelsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hotels createManyAndReturn
   */
  export type HotelsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotels
     */
    select?: HotelsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hotels
     */
    omit?: HotelsOmit<ExtArgs> | null
    /**
     * The data used to create many Hotels.
     */
    data: HotelsCreateManyInput | HotelsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hotels update
   */
  export type HotelsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotels
     */
    select?: HotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotels
     */
    omit?: HotelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelsInclude<ExtArgs> | null
    /**
     * The data needed to update a Hotels.
     */
    data: XOR<HotelsUpdateInput, HotelsUncheckedUpdateInput>
    /**
     * Choose, which Hotels to update.
     */
    where: HotelsWhereUniqueInput
  }

  /**
   * Hotels updateMany
   */
  export type HotelsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hotels.
     */
    data: XOR<HotelsUpdateManyMutationInput, HotelsUncheckedUpdateManyInput>
    /**
     * Filter which Hotels to update
     */
    where?: HotelsWhereInput
    /**
     * Limit how many Hotels to update.
     */
    limit?: number
  }

  /**
   * Hotels updateManyAndReturn
   */
  export type HotelsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotels
     */
    select?: HotelsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hotels
     */
    omit?: HotelsOmit<ExtArgs> | null
    /**
     * The data used to update Hotels.
     */
    data: XOR<HotelsUpdateManyMutationInput, HotelsUncheckedUpdateManyInput>
    /**
     * Filter which Hotels to update
     */
    where?: HotelsWhereInput
    /**
     * Limit how many Hotels to update.
     */
    limit?: number
  }

  /**
   * Hotels upsert
   */
  export type HotelsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotels
     */
    select?: HotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotels
     */
    omit?: HotelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelsInclude<ExtArgs> | null
    /**
     * The filter to search for the Hotels to update in case it exists.
     */
    where: HotelsWhereUniqueInput
    /**
     * In case the Hotels found by the `where` argument doesn't exist, create a new Hotels with this data.
     */
    create: XOR<HotelsCreateInput, HotelsUncheckedCreateInput>
    /**
     * In case the Hotels was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HotelsUpdateInput, HotelsUncheckedUpdateInput>
  }

  /**
   * Hotels delete
   */
  export type HotelsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotels
     */
    select?: HotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotels
     */
    omit?: HotelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelsInclude<ExtArgs> | null
    /**
     * Filter which Hotels to delete.
     */
    where: HotelsWhereUniqueInput
  }

  /**
   * Hotels deleteMany
   */
  export type HotelsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hotels to delete
     */
    where?: HotelsWhereInput
    /**
     * Limit how many Hotels to delete.
     */
    limit?: number
  }

  /**
   * Hotels.rooms
   */
  export type Hotels$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rooms
     */
    omit?: RoomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsInclude<ExtArgs> | null
    where?: RoomsWhereInput
    orderBy?: RoomsOrderByWithRelationInput | RoomsOrderByWithRelationInput[]
    cursor?: RoomsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomsScalarFieldEnum | RoomsScalarFieldEnum[]
  }

  /**
   * Hotels without action
   */
  export type HotelsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotels
     */
    select?: HotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotels
     */
    omit?: HotelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelsInclude<ExtArgs> | null
  }


  /**
   * Model Rooms
   */

  export type AggregateRooms = {
    _count: RoomsCountAggregateOutputType | null
    _avg: RoomsAvgAggregateOutputType | null
    _sum: RoomsSumAggregateOutputType | null
    _min: RoomsMinAggregateOutputType | null
    _max: RoomsMaxAggregateOutputType | null
  }

  export type RoomsAvgAggregateOutputType = {
    id: number | null
    price: number | null
    maxPeople: number | null
    hotelId: number | null
  }

  export type RoomsSumAggregateOutputType = {
    id: number | null
    price: number | null
    maxPeople: number | null
    hotelId: number | null
  }

  export type RoomsMinAggregateOutputType = {
    id: number | null
    title: string | null
    price: number | null
    maxPeople: number | null
    desc: string | null
    createdAt: Date | null
    updatedAt: Date | null
    hotelId: number | null
  }

  export type RoomsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    price: number | null
    maxPeople: number | null
    desc: string | null
    createdAt: Date | null
    updatedAt: Date | null
    hotelId: number | null
  }

  export type RoomsCountAggregateOutputType = {
    id: number
    title: number
    price: number
    maxPeople: number
    desc: number
    createdAt: number
    updatedAt: number
    hotelId: number
    _all: number
  }


  export type RoomsAvgAggregateInputType = {
    id?: true
    price?: true
    maxPeople?: true
    hotelId?: true
  }

  export type RoomsSumAggregateInputType = {
    id?: true
    price?: true
    maxPeople?: true
    hotelId?: true
  }

  export type RoomsMinAggregateInputType = {
    id?: true
    title?: true
    price?: true
    maxPeople?: true
    desc?: true
    createdAt?: true
    updatedAt?: true
    hotelId?: true
  }

  export type RoomsMaxAggregateInputType = {
    id?: true
    title?: true
    price?: true
    maxPeople?: true
    desc?: true
    createdAt?: true
    updatedAt?: true
    hotelId?: true
  }

  export type RoomsCountAggregateInputType = {
    id?: true
    title?: true
    price?: true
    maxPeople?: true
    desc?: true
    createdAt?: true
    updatedAt?: true
    hotelId?: true
    _all?: true
  }

  export type RoomsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to aggregate.
     */
    where?: RoomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomsOrderByWithRelationInput | RoomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomsMaxAggregateInputType
  }

  export type GetRoomsAggregateType<T extends RoomsAggregateArgs> = {
        [P in keyof T & keyof AggregateRooms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRooms[P]>
      : GetScalarType<T[P], AggregateRooms[P]>
  }




  export type RoomsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomsWhereInput
    orderBy?: RoomsOrderByWithAggregationInput | RoomsOrderByWithAggregationInput[]
    by: RoomsScalarFieldEnum[] | RoomsScalarFieldEnum
    having?: RoomsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomsCountAggregateInputType | true
    _avg?: RoomsAvgAggregateInputType
    _sum?: RoomsSumAggregateInputType
    _min?: RoomsMinAggregateInputType
    _max?: RoomsMaxAggregateInputType
  }

  export type RoomsGroupByOutputType = {
    id: number
    title: string
    price: number
    maxPeople: number
    desc: string
    createdAt: Date
    updatedAt: Date
    hotelId: number
    _count: RoomsCountAggregateOutputType | null
    _avg: RoomsAvgAggregateOutputType | null
    _sum: RoomsSumAggregateOutputType | null
    _min: RoomsMinAggregateOutputType | null
    _max: RoomsMaxAggregateOutputType | null
  }

  type GetRoomsGroupByPayload<T extends RoomsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomsGroupByOutputType[P]>
            : GetScalarType<T[P], RoomsGroupByOutputType[P]>
        }
      >
    >


  export type RoomsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    price?: boolean
    maxPeople?: boolean
    desc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hotelId?: boolean
    roomNumbers?: boolean | Rooms$roomNumbersArgs<ExtArgs>
    hotel?: boolean | HotelsDefaultArgs<ExtArgs>
    bookings?: boolean | Rooms$bookingsArgs<ExtArgs>
    _count?: boolean | RoomsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rooms"]>

  export type RoomsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    price?: boolean
    maxPeople?: boolean
    desc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hotelId?: boolean
    hotel?: boolean | HotelsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rooms"]>

  export type RoomsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    price?: boolean
    maxPeople?: boolean
    desc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hotelId?: boolean
    hotel?: boolean | HotelsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rooms"]>

  export type RoomsSelectScalar = {
    id?: boolean
    title?: boolean
    price?: boolean
    maxPeople?: boolean
    desc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hotelId?: boolean
  }

  export type RoomsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "price" | "maxPeople" | "desc" | "createdAt" | "updatedAt" | "hotelId", ExtArgs["result"]["rooms"]>
  export type RoomsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roomNumbers?: boolean | Rooms$roomNumbersArgs<ExtArgs>
    hotel?: boolean | HotelsDefaultArgs<ExtArgs>
    bookings?: boolean | Rooms$bookingsArgs<ExtArgs>
    _count?: boolean | RoomsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelsDefaultArgs<ExtArgs>
  }
  export type RoomsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelsDefaultArgs<ExtArgs>
  }

  export type $RoomsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rooms"
    objects: {
      roomNumbers: Prisma.$RoomNumberPayload<ExtArgs>[]
      hotel: Prisma.$HotelsPayload<ExtArgs>
      bookings: Prisma.$BookingsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      price: number
      maxPeople: number
      desc: string
      createdAt: Date
      updatedAt: Date
      hotelId: number
    }, ExtArgs["result"]["rooms"]>
    composites: {}
  }

  type RoomsGetPayload<S extends boolean | null | undefined | RoomsDefaultArgs> = $Result.GetResult<Prisma.$RoomsPayload, S>

  type RoomsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomsCountAggregateInputType | true
    }

  export interface RoomsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rooms'], meta: { name: 'Rooms' } }
    /**
     * Find zero or one Rooms that matches the filter.
     * @param {RoomsFindUniqueArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomsFindUniqueArgs>(args: SelectSubset<T, RoomsFindUniqueArgs<ExtArgs>>): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rooms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomsFindUniqueOrThrowArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomsFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsFindFirstArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomsFindFirstArgs>(args?: SelectSubset<T, RoomsFindFirstArgs<ExtArgs>>): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rooms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsFindFirstOrThrowArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomsFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomsFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.rooms.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.rooms.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomsWithIdOnly = await prisma.rooms.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomsFindManyArgs>(args?: SelectSubset<T, RoomsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rooms.
     * @param {RoomsCreateArgs} args - Arguments to create a Rooms.
     * @example
     * // Create one Rooms
     * const Rooms = await prisma.rooms.create({
     *   data: {
     *     // ... data to create a Rooms
     *   }
     * })
     * 
     */
    create<T extends RoomsCreateArgs>(args: SelectSubset<T, RoomsCreateArgs<ExtArgs>>): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomsCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const rooms = await prisma.rooms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomsCreateManyArgs>(args?: SelectSubset<T, RoomsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomsCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const rooms = await prisma.rooms.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomsWithIdOnly = await prisma.rooms.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomsCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rooms.
     * @param {RoomsDeleteArgs} args - Arguments to delete one Rooms.
     * @example
     * // Delete one Rooms
     * const Rooms = await prisma.rooms.delete({
     *   where: {
     *     // ... filter to delete one Rooms
     *   }
     * })
     * 
     */
    delete<T extends RoomsDeleteArgs>(args: SelectSubset<T, RoomsDeleteArgs<ExtArgs>>): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rooms.
     * @param {RoomsUpdateArgs} args - Arguments to update one Rooms.
     * @example
     * // Update one Rooms
     * const rooms = await prisma.rooms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomsUpdateArgs>(args: SelectSubset<T, RoomsUpdateArgs<ExtArgs>>): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomsDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.rooms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomsDeleteManyArgs>(args?: SelectSubset<T, RoomsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const rooms = await prisma.rooms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomsUpdateManyArgs>(args: SelectSubset<T, RoomsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomsUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const rooms = await prisma.rooms.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomsWithIdOnly = await prisma.rooms.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomsUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rooms.
     * @param {RoomsUpsertArgs} args - Arguments to update or create a Rooms.
     * @example
     * // Update or create a Rooms
     * const rooms = await prisma.rooms.upsert({
     *   create: {
     *     // ... data to create a Rooms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rooms we want to update
     *   }
     * })
     */
    upsert<T extends RoomsUpsertArgs>(args: SelectSubset<T, RoomsUpsertArgs<ExtArgs>>): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.rooms.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomsCountArgs>(
      args?: Subset<T, RoomsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomsAggregateArgs>(args: Subset<T, RoomsAggregateArgs>): Prisma.PrismaPromise<GetRoomsAggregateType<T>>

    /**
     * Group by Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsGroupByArgs} args - Group by arguments.
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
      T extends RoomsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomsGroupByArgs['orderBy'] }
        : { orderBy?: RoomsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rooms model
   */
  readonly fields: RoomsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rooms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roomNumbers<T extends Rooms$roomNumbersArgs<ExtArgs> = {}>(args?: Subset<T, Rooms$roomNumbersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomNumberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hotel<T extends HotelsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HotelsDefaultArgs<ExtArgs>>): Prisma__HotelsClient<$Result.GetResult<Prisma.$HotelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends Rooms$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Rooms$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Rooms model
   */
  interface RoomsFieldRefs {
    readonly id: FieldRef<"Rooms", 'Int'>
    readonly title: FieldRef<"Rooms", 'String'>
    readonly price: FieldRef<"Rooms", 'Int'>
    readonly maxPeople: FieldRef<"Rooms", 'Int'>
    readonly desc: FieldRef<"Rooms", 'String'>
    readonly createdAt: FieldRef<"Rooms", 'DateTime'>
    readonly updatedAt: FieldRef<"Rooms", 'DateTime'>
    readonly hotelId: FieldRef<"Rooms", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Rooms findUnique
   */
  export type RoomsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rooms
     */
    omit?: RoomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where: RoomsWhereUniqueInput
  }

  /**
   * Rooms findUniqueOrThrow
   */
  export type RoomsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rooms
     */
    omit?: RoomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where: RoomsWhereUniqueInput
  }

  /**
   * Rooms findFirst
   */
  export type RoomsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rooms
     */
    omit?: RoomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomsOrderByWithRelationInput | RoomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomsScalarFieldEnum | RoomsScalarFieldEnum[]
  }

  /**
   * Rooms findFirstOrThrow
   */
  export type RoomsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rooms
     */
    omit?: RoomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomsOrderByWithRelationInput | RoomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomsScalarFieldEnum | RoomsScalarFieldEnum[]
  }

  /**
   * Rooms findMany
   */
  export type RoomsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rooms
     */
    omit?: RoomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomsOrderByWithRelationInput | RoomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomsScalarFieldEnum | RoomsScalarFieldEnum[]
  }

  /**
   * Rooms create
   */
  export type RoomsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rooms
     */
    omit?: RoomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * The data needed to create a Rooms.
     */
    data: XOR<RoomsCreateInput, RoomsUncheckedCreateInput>
  }

  /**
   * Rooms createMany
   */
  export type RoomsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomsCreateManyInput | RoomsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rooms createManyAndReturn
   */
  export type RoomsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rooms
     */
    omit?: RoomsOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomsCreateManyInput | RoomsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rooms update
   */
  export type RoomsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rooms
     */
    omit?: RoomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * The data needed to update a Rooms.
     */
    data: XOR<RoomsUpdateInput, RoomsUncheckedUpdateInput>
    /**
     * Choose, which Rooms to update.
     */
    where: RoomsWhereUniqueInput
  }

  /**
   * Rooms updateMany
   */
  export type RoomsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomsUpdateManyMutationInput, RoomsUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomsWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Rooms updateManyAndReturn
   */
  export type RoomsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rooms
     */
    omit?: RoomsOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomsUpdateManyMutationInput, RoomsUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomsWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rooms upsert
   */
  export type RoomsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rooms
     */
    omit?: RoomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * The filter to search for the Rooms to update in case it exists.
     */
    where: RoomsWhereUniqueInput
    /**
     * In case the Rooms found by the `where` argument doesn't exist, create a new Rooms with this data.
     */
    create: XOR<RoomsCreateInput, RoomsUncheckedCreateInput>
    /**
     * In case the Rooms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomsUpdateInput, RoomsUncheckedUpdateInput>
  }

  /**
   * Rooms delete
   */
  export type RoomsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rooms
     */
    omit?: RoomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * Filter which Rooms to delete.
     */
    where: RoomsWhereUniqueInput
  }

  /**
   * Rooms deleteMany
   */
  export type RoomsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomsWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Rooms.roomNumbers
   */
  export type Rooms$roomNumbersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomNumber
     */
    select?: RoomNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomNumber
     */
    omit?: RoomNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomNumberInclude<ExtArgs> | null
    where?: RoomNumberWhereInput
    orderBy?: RoomNumberOrderByWithRelationInput | RoomNumberOrderByWithRelationInput[]
    cursor?: RoomNumberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomNumberScalarFieldEnum | RoomNumberScalarFieldEnum[]
  }

  /**
   * Rooms.bookings
   */
  export type Rooms$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    where?: BookingsWhereInput
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    cursor?: BookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Rooms without action
   */
  export type RoomsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rooms
     */
    omit?: RoomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsInclude<ExtArgs> | null
  }


  /**
   * Model RoomNumber
   */

  export type AggregateRoomNumber = {
    _count: RoomNumberCountAggregateOutputType | null
    _avg: RoomNumberAvgAggregateOutputType | null
    _sum: RoomNumberSumAggregateOutputType | null
    _min: RoomNumberMinAggregateOutputType | null
    _max: RoomNumberMaxAggregateOutputType | null
  }

  export type RoomNumberAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
  }

  export type RoomNumberSumAggregateOutputType = {
    id: number | null
    roomId: number | null
  }

  export type RoomNumberMinAggregateOutputType = {
    id: number | null
    number: string | null
    roomId: number | null
  }

  export type RoomNumberMaxAggregateOutputType = {
    id: number | null
    number: string | null
    roomId: number | null
  }

  export type RoomNumberCountAggregateOutputType = {
    id: number
    number: number
    roomId: number
    _all: number
  }


  export type RoomNumberAvgAggregateInputType = {
    id?: true
    roomId?: true
  }

  export type RoomNumberSumAggregateInputType = {
    id?: true
    roomId?: true
  }

  export type RoomNumberMinAggregateInputType = {
    id?: true
    number?: true
    roomId?: true
  }

  export type RoomNumberMaxAggregateInputType = {
    id?: true
    number?: true
    roomId?: true
  }

  export type RoomNumberCountAggregateInputType = {
    id?: true
    number?: true
    roomId?: true
    _all?: true
  }

  export type RoomNumberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomNumber to aggregate.
     */
    where?: RoomNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomNumbers to fetch.
     */
    orderBy?: RoomNumberOrderByWithRelationInput | RoomNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomNumbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomNumbers
    **/
    _count?: true | RoomNumberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomNumberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomNumberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomNumberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomNumberMaxAggregateInputType
  }

  export type GetRoomNumberAggregateType<T extends RoomNumberAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomNumber]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomNumber[P]>
      : GetScalarType<T[P], AggregateRoomNumber[P]>
  }




  export type RoomNumberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomNumberWhereInput
    orderBy?: RoomNumberOrderByWithAggregationInput | RoomNumberOrderByWithAggregationInput[]
    by: RoomNumberScalarFieldEnum[] | RoomNumberScalarFieldEnum
    having?: RoomNumberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomNumberCountAggregateInputType | true
    _avg?: RoomNumberAvgAggregateInputType
    _sum?: RoomNumberSumAggregateInputType
    _min?: RoomNumberMinAggregateInputType
    _max?: RoomNumberMaxAggregateInputType
  }

  export type RoomNumberGroupByOutputType = {
    id: number
    number: string
    roomId: number
    _count: RoomNumberCountAggregateOutputType | null
    _avg: RoomNumberAvgAggregateOutputType | null
    _sum: RoomNumberSumAggregateOutputType | null
    _min: RoomNumberMinAggregateOutputType | null
    _max: RoomNumberMaxAggregateOutputType | null
  }

  type GetRoomNumberGroupByPayload<T extends RoomNumberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomNumberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomNumberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomNumberGroupByOutputType[P]>
            : GetScalarType<T[P], RoomNumberGroupByOutputType[P]>
        }
      >
    >


  export type RoomNumberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    roomId?: boolean
    room?: boolean | RoomsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomNumber"]>

  export type RoomNumberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    roomId?: boolean
    room?: boolean | RoomsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomNumber"]>

  export type RoomNumberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    roomId?: boolean
    room?: boolean | RoomsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomNumber"]>

  export type RoomNumberSelectScalar = {
    id?: boolean
    number?: boolean
    roomId?: boolean
  }

  export type RoomNumberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "number" | "roomId", ExtArgs["result"]["roomNumber"]>
  export type RoomNumberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomsDefaultArgs<ExtArgs>
  }
  export type RoomNumberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomsDefaultArgs<ExtArgs>
  }
  export type RoomNumberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomsDefaultArgs<ExtArgs>
  }

  export type $RoomNumberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomNumber"
    objects: {
      room: Prisma.$RoomsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      number: string
      roomId: number
    }, ExtArgs["result"]["roomNumber"]>
    composites: {}
  }

  type RoomNumberGetPayload<S extends boolean | null | undefined | RoomNumberDefaultArgs> = $Result.GetResult<Prisma.$RoomNumberPayload, S>

  type RoomNumberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomNumberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomNumberCountAggregateInputType | true
    }

  export interface RoomNumberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomNumber'], meta: { name: 'RoomNumber' } }
    /**
     * Find zero or one RoomNumber that matches the filter.
     * @param {RoomNumberFindUniqueArgs} args - Arguments to find a RoomNumber
     * @example
     * // Get one RoomNumber
     * const roomNumber = await prisma.roomNumber.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomNumberFindUniqueArgs>(args: SelectSubset<T, RoomNumberFindUniqueArgs<ExtArgs>>): Prisma__RoomNumberClient<$Result.GetResult<Prisma.$RoomNumberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomNumber that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomNumberFindUniqueOrThrowArgs} args - Arguments to find a RoomNumber
     * @example
     * // Get one RoomNumber
     * const roomNumber = await prisma.roomNumber.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomNumberFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomNumberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomNumberClient<$Result.GetResult<Prisma.$RoomNumberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomNumber that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomNumberFindFirstArgs} args - Arguments to find a RoomNumber
     * @example
     * // Get one RoomNumber
     * const roomNumber = await prisma.roomNumber.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomNumberFindFirstArgs>(args?: SelectSubset<T, RoomNumberFindFirstArgs<ExtArgs>>): Prisma__RoomNumberClient<$Result.GetResult<Prisma.$RoomNumberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomNumber that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomNumberFindFirstOrThrowArgs} args - Arguments to find a RoomNumber
     * @example
     * // Get one RoomNumber
     * const roomNumber = await prisma.roomNumber.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomNumberFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomNumberFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomNumberClient<$Result.GetResult<Prisma.$RoomNumberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomNumbers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomNumberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomNumbers
     * const roomNumbers = await prisma.roomNumber.findMany()
     * 
     * // Get first 10 RoomNumbers
     * const roomNumbers = await prisma.roomNumber.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomNumberWithIdOnly = await prisma.roomNumber.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomNumberFindManyArgs>(args?: SelectSubset<T, RoomNumberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomNumberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomNumber.
     * @param {RoomNumberCreateArgs} args - Arguments to create a RoomNumber.
     * @example
     * // Create one RoomNumber
     * const RoomNumber = await prisma.roomNumber.create({
     *   data: {
     *     // ... data to create a RoomNumber
     *   }
     * })
     * 
     */
    create<T extends RoomNumberCreateArgs>(args: SelectSubset<T, RoomNumberCreateArgs<ExtArgs>>): Prisma__RoomNumberClient<$Result.GetResult<Prisma.$RoomNumberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomNumbers.
     * @param {RoomNumberCreateManyArgs} args - Arguments to create many RoomNumbers.
     * @example
     * // Create many RoomNumbers
     * const roomNumber = await prisma.roomNumber.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomNumberCreateManyArgs>(args?: SelectSubset<T, RoomNumberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomNumbers and returns the data saved in the database.
     * @param {RoomNumberCreateManyAndReturnArgs} args - Arguments to create many RoomNumbers.
     * @example
     * // Create many RoomNumbers
     * const roomNumber = await prisma.roomNumber.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomNumbers and only return the `id`
     * const roomNumberWithIdOnly = await prisma.roomNumber.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomNumberCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomNumberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomNumberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoomNumber.
     * @param {RoomNumberDeleteArgs} args - Arguments to delete one RoomNumber.
     * @example
     * // Delete one RoomNumber
     * const RoomNumber = await prisma.roomNumber.delete({
     *   where: {
     *     // ... filter to delete one RoomNumber
     *   }
     * })
     * 
     */
    delete<T extends RoomNumberDeleteArgs>(args: SelectSubset<T, RoomNumberDeleteArgs<ExtArgs>>): Prisma__RoomNumberClient<$Result.GetResult<Prisma.$RoomNumberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomNumber.
     * @param {RoomNumberUpdateArgs} args - Arguments to update one RoomNumber.
     * @example
     * // Update one RoomNumber
     * const roomNumber = await prisma.roomNumber.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomNumberUpdateArgs>(args: SelectSubset<T, RoomNumberUpdateArgs<ExtArgs>>): Prisma__RoomNumberClient<$Result.GetResult<Prisma.$RoomNumberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomNumbers.
     * @param {RoomNumberDeleteManyArgs} args - Arguments to filter RoomNumbers to delete.
     * @example
     * // Delete a few RoomNumbers
     * const { count } = await prisma.roomNumber.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomNumberDeleteManyArgs>(args?: SelectSubset<T, RoomNumberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomNumbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomNumberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomNumbers
     * const roomNumber = await prisma.roomNumber.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomNumberUpdateManyArgs>(args: SelectSubset<T, RoomNumberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomNumbers and returns the data updated in the database.
     * @param {RoomNumberUpdateManyAndReturnArgs} args - Arguments to update many RoomNumbers.
     * @example
     * // Update many RoomNumbers
     * const roomNumber = await prisma.roomNumber.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoomNumbers and only return the `id`
     * const roomNumberWithIdOnly = await prisma.roomNumber.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomNumberUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomNumberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomNumberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoomNumber.
     * @param {RoomNumberUpsertArgs} args - Arguments to update or create a RoomNumber.
     * @example
     * // Update or create a RoomNumber
     * const roomNumber = await prisma.roomNumber.upsert({
     *   create: {
     *     // ... data to create a RoomNumber
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomNumber we want to update
     *   }
     * })
     */
    upsert<T extends RoomNumberUpsertArgs>(args: SelectSubset<T, RoomNumberUpsertArgs<ExtArgs>>): Prisma__RoomNumberClient<$Result.GetResult<Prisma.$RoomNumberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomNumbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomNumberCountArgs} args - Arguments to filter RoomNumbers to count.
     * @example
     * // Count the number of RoomNumbers
     * const count = await prisma.roomNumber.count({
     *   where: {
     *     // ... the filter for the RoomNumbers we want to count
     *   }
     * })
    **/
    count<T extends RoomNumberCountArgs>(
      args?: Subset<T, RoomNumberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomNumberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomNumber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomNumberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomNumberAggregateArgs>(args: Subset<T, RoomNumberAggregateArgs>): Prisma.PrismaPromise<GetRoomNumberAggregateType<T>>

    /**
     * Group by RoomNumber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomNumberGroupByArgs} args - Group by arguments.
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
      T extends RoomNumberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomNumberGroupByArgs['orderBy'] }
        : { orderBy?: RoomNumberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomNumberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomNumberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomNumber model
   */
  readonly fields: RoomNumberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomNumber.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomNumberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomsDefaultArgs<ExtArgs>>): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RoomNumber model
   */
  interface RoomNumberFieldRefs {
    readonly id: FieldRef<"RoomNumber", 'Int'>
    readonly number: FieldRef<"RoomNumber", 'String'>
    readonly roomId: FieldRef<"RoomNumber", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RoomNumber findUnique
   */
  export type RoomNumberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomNumber
     */
    select?: RoomNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomNumber
     */
    omit?: RoomNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomNumberInclude<ExtArgs> | null
    /**
     * Filter, which RoomNumber to fetch.
     */
    where: RoomNumberWhereUniqueInput
  }

  /**
   * RoomNumber findUniqueOrThrow
   */
  export type RoomNumberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomNumber
     */
    select?: RoomNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomNumber
     */
    omit?: RoomNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomNumberInclude<ExtArgs> | null
    /**
     * Filter, which RoomNumber to fetch.
     */
    where: RoomNumberWhereUniqueInput
  }

  /**
   * RoomNumber findFirst
   */
  export type RoomNumberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomNumber
     */
    select?: RoomNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomNumber
     */
    omit?: RoomNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomNumberInclude<ExtArgs> | null
    /**
     * Filter, which RoomNumber to fetch.
     */
    where?: RoomNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomNumbers to fetch.
     */
    orderBy?: RoomNumberOrderByWithRelationInput | RoomNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomNumbers.
     */
    cursor?: RoomNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomNumbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomNumbers.
     */
    distinct?: RoomNumberScalarFieldEnum | RoomNumberScalarFieldEnum[]
  }

  /**
   * RoomNumber findFirstOrThrow
   */
  export type RoomNumberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomNumber
     */
    select?: RoomNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomNumber
     */
    omit?: RoomNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomNumberInclude<ExtArgs> | null
    /**
     * Filter, which RoomNumber to fetch.
     */
    where?: RoomNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomNumbers to fetch.
     */
    orderBy?: RoomNumberOrderByWithRelationInput | RoomNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomNumbers.
     */
    cursor?: RoomNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomNumbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomNumbers.
     */
    distinct?: RoomNumberScalarFieldEnum | RoomNumberScalarFieldEnum[]
  }

  /**
   * RoomNumber findMany
   */
  export type RoomNumberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomNumber
     */
    select?: RoomNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomNumber
     */
    omit?: RoomNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomNumberInclude<ExtArgs> | null
    /**
     * Filter, which RoomNumbers to fetch.
     */
    where?: RoomNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomNumbers to fetch.
     */
    orderBy?: RoomNumberOrderByWithRelationInput | RoomNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomNumbers.
     */
    cursor?: RoomNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomNumbers.
     */
    skip?: number
    distinct?: RoomNumberScalarFieldEnum | RoomNumberScalarFieldEnum[]
  }

  /**
   * RoomNumber create
   */
  export type RoomNumberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomNumber
     */
    select?: RoomNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomNumber
     */
    omit?: RoomNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomNumberInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomNumber.
     */
    data: XOR<RoomNumberCreateInput, RoomNumberUncheckedCreateInput>
  }

  /**
   * RoomNumber createMany
   */
  export type RoomNumberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomNumbers.
     */
    data: RoomNumberCreateManyInput | RoomNumberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomNumber createManyAndReturn
   */
  export type RoomNumberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomNumber
     */
    select?: RoomNumberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomNumber
     */
    omit?: RoomNumberOmit<ExtArgs> | null
    /**
     * The data used to create many RoomNumbers.
     */
    data: RoomNumberCreateManyInput | RoomNumberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomNumberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomNumber update
   */
  export type RoomNumberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomNumber
     */
    select?: RoomNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomNumber
     */
    omit?: RoomNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomNumberInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomNumber.
     */
    data: XOR<RoomNumberUpdateInput, RoomNumberUncheckedUpdateInput>
    /**
     * Choose, which RoomNumber to update.
     */
    where: RoomNumberWhereUniqueInput
  }

  /**
   * RoomNumber updateMany
   */
  export type RoomNumberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomNumbers.
     */
    data: XOR<RoomNumberUpdateManyMutationInput, RoomNumberUncheckedUpdateManyInput>
    /**
     * Filter which RoomNumbers to update
     */
    where?: RoomNumberWhereInput
    /**
     * Limit how many RoomNumbers to update.
     */
    limit?: number
  }

  /**
   * RoomNumber updateManyAndReturn
   */
  export type RoomNumberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomNumber
     */
    select?: RoomNumberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomNumber
     */
    omit?: RoomNumberOmit<ExtArgs> | null
    /**
     * The data used to update RoomNumbers.
     */
    data: XOR<RoomNumberUpdateManyMutationInput, RoomNumberUncheckedUpdateManyInput>
    /**
     * Filter which RoomNumbers to update
     */
    where?: RoomNumberWhereInput
    /**
     * Limit how many RoomNumbers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomNumberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomNumber upsert
   */
  export type RoomNumberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomNumber
     */
    select?: RoomNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomNumber
     */
    omit?: RoomNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomNumberInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomNumber to update in case it exists.
     */
    where: RoomNumberWhereUniqueInput
    /**
     * In case the RoomNumber found by the `where` argument doesn't exist, create a new RoomNumber with this data.
     */
    create: XOR<RoomNumberCreateInput, RoomNumberUncheckedCreateInput>
    /**
     * In case the RoomNumber was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomNumberUpdateInput, RoomNumberUncheckedUpdateInput>
  }

  /**
   * RoomNumber delete
   */
  export type RoomNumberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomNumber
     */
    select?: RoomNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomNumber
     */
    omit?: RoomNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomNumberInclude<ExtArgs> | null
    /**
     * Filter which RoomNumber to delete.
     */
    where: RoomNumberWhereUniqueInput
  }

  /**
   * RoomNumber deleteMany
   */
  export type RoomNumberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomNumbers to delete
     */
    where?: RoomNumberWhereInput
    /**
     * Limit how many RoomNumbers to delete.
     */
    limit?: number
  }

  /**
   * RoomNumber without action
   */
  export type RoomNumberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomNumber
     */
    select?: RoomNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomNumber
     */
    omit?: RoomNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomNumberInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    isAdmin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    isAdmin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    isAdmin: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    isAdmin: boolean | null
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookings?: boolean | Users$bookingsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "isAdmin" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | Users$bookingsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      bookings: Prisma.$BookingsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      isAdmin: boolean | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends Users$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Users$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly username: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly isAdmin: FieldRef<"Users", 'Boolean'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.bookings
   */
  export type Users$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    where?: BookingsWhereInput
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    cursor?: BookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Bookings
   */

  export type AggregateBookings = {
    _count: BookingsCountAggregateOutputType | null
    _avg: BookingsAvgAggregateOutputType | null
    _sum: BookingsSumAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  export type BookingsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    roomId: number | null
    price: number | null
  }

  export type BookingsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    roomId: number | null
    price: number | null
  }

  export type BookingsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    roomId: number | null
    startDate: Date | null
    endDate: Date | null
    price: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    roomId: number | null
    startDate: Date | null
    endDate: Date | null
    price: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingsCountAggregateOutputType = {
    id: number
    userId: number
    roomId: number
    startDate: number
    endDate: number
    price: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingsAvgAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
    price?: true
  }

  export type BookingsSumAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
    price?: true
  }

  export type BookingsMinAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
    startDate?: true
    endDate?: true
    price?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingsMaxAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
    startDate?: true
    endDate?: true
    price?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingsCountAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
    startDate?: true
    endDate?: true
    price?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to aggregate.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingsMaxAggregateInputType
  }

  export type GetBookingsAggregateType<T extends BookingsAggregateArgs> = {
        [P in keyof T & keyof AggregateBookings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookings[P]>
      : GetScalarType<T[P], AggregateBookings[P]>
  }




  export type BookingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingsWhereInput
    orderBy?: BookingsOrderByWithAggregationInput | BookingsOrderByWithAggregationInput[]
    by: BookingsScalarFieldEnum[] | BookingsScalarFieldEnum
    having?: BookingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingsCountAggregateInputType | true
    _avg?: BookingsAvgAggregateInputType
    _sum?: BookingsSumAggregateInputType
    _min?: BookingsMinAggregateInputType
    _max?: BookingsMaxAggregateInputType
  }

  export type BookingsGroupByOutputType = {
    id: number
    userId: number
    roomId: number
    startDate: Date
    endDate: Date
    price: number
    status: string
    createdAt: Date
    updatedAt: Date
    _count: BookingsCountAggregateOutputType | null
    _avg: BookingsAvgAggregateOutputType | null
    _sum: BookingsSumAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  type GetBookingsGroupByPayload<T extends BookingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingsGroupByOutputType[P]>
            : GetScalarType<T[P], BookingsGroupByOutputType[P]>
        }
      >
    >


  export type BookingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roomId?: boolean
    startDate?: boolean
    endDate?: boolean
    price?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    room?: boolean | RoomsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type BookingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roomId?: boolean
    startDate?: boolean
    endDate?: boolean
    price?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    room?: boolean | RoomsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type BookingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roomId?: boolean
    startDate?: boolean
    endDate?: boolean
    price?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    room?: boolean | RoomsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type BookingsSelectScalar = {
    id?: boolean
    userId?: boolean
    roomId?: boolean
    startDate?: boolean
    endDate?: boolean
    price?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "roomId" | "startDate" | "endDate" | "price" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["bookings"]>
  export type BookingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    room?: boolean | RoomsDefaultArgs<ExtArgs>
  }
  export type BookingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    room?: boolean | RoomsDefaultArgs<ExtArgs>
  }
  export type BookingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    room?: boolean | RoomsDefaultArgs<ExtArgs>
  }

  export type $BookingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bookings"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      room: Prisma.$RoomsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      roomId: number
      startDate: Date
      endDate: Date
      price: number
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bookings"]>
    composites: {}
  }

  type BookingsGetPayload<S extends boolean | null | undefined | BookingsDefaultArgs> = $Result.GetResult<Prisma.$BookingsPayload, S>

  type BookingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingsCountAggregateInputType | true
    }

  export interface BookingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bookings'], meta: { name: 'Bookings' } }
    /**
     * Find zero or one Bookings that matches the filter.
     * @param {BookingsFindUniqueArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingsFindUniqueArgs>(args: SelectSubset<T, BookingsFindUniqueArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bookings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingsFindUniqueOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingsFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsFindFirstArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingsFindFirstArgs>(args?: SelectSubset<T, BookingsFindFirstArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsFindFirstOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingsFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.bookings.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.bookings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingsWithIdOnly = await prisma.bookings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingsFindManyArgs>(args?: SelectSubset<T, BookingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bookings.
     * @param {BookingsCreateArgs} args - Arguments to create a Bookings.
     * @example
     * // Create one Bookings
     * const Bookings = await prisma.bookings.create({
     *   data: {
     *     // ... data to create a Bookings
     *   }
     * })
     * 
     */
    create<T extends BookingsCreateArgs>(args: SelectSubset<T, BookingsCreateArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingsCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const bookings = await prisma.bookings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingsCreateManyArgs>(args?: SelectSubset<T, BookingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingsCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const bookings = await prisma.bookings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingsWithIdOnly = await prisma.bookings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingsCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bookings.
     * @param {BookingsDeleteArgs} args - Arguments to delete one Bookings.
     * @example
     * // Delete one Bookings
     * const Bookings = await prisma.bookings.delete({
     *   where: {
     *     // ... filter to delete one Bookings
     *   }
     * })
     * 
     */
    delete<T extends BookingsDeleteArgs>(args: SelectSubset<T, BookingsDeleteArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bookings.
     * @param {BookingsUpdateArgs} args - Arguments to update one Bookings.
     * @example
     * // Update one Bookings
     * const bookings = await prisma.bookings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingsUpdateArgs>(args: SelectSubset<T, BookingsUpdateArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingsDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.bookings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingsDeleteManyArgs>(args?: SelectSubset<T, BookingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const bookings = await prisma.bookings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingsUpdateManyArgs>(args: SelectSubset<T, BookingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingsUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const bookings = await prisma.bookings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingsWithIdOnly = await prisma.bookings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingsUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bookings.
     * @param {BookingsUpsertArgs} args - Arguments to update or create a Bookings.
     * @example
     * // Update or create a Bookings
     * const bookings = await prisma.bookings.upsert({
     *   create: {
     *     // ... data to create a Bookings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookings we want to update
     *   }
     * })
     */
    upsert<T extends BookingsUpsertArgs>(args: SelectSubset<T, BookingsUpsertArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.bookings.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingsCountArgs>(
      args?: Subset<T, BookingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingsAggregateArgs>(args: Subset<T, BookingsAggregateArgs>): Prisma.PrismaPromise<GetBookingsAggregateType<T>>

    /**
     * Group by Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsGroupByArgs} args - Group by arguments.
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
      T extends BookingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingsGroupByArgs['orderBy'] }
        : { orderBy?: BookingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bookings model
   */
  readonly fields: BookingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bookings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends RoomsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomsDefaultArgs<ExtArgs>>): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Bookings model
   */
  interface BookingsFieldRefs {
    readonly id: FieldRef<"Bookings", 'Int'>
    readonly userId: FieldRef<"Bookings", 'Int'>
    readonly roomId: FieldRef<"Bookings", 'Int'>
    readonly startDate: FieldRef<"Bookings", 'DateTime'>
    readonly endDate: FieldRef<"Bookings", 'DateTime'>
    readonly price: FieldRef<"Bookings", 'Int'>
    readonly status: FieldRef<"Bookings", 'String'>
    readonly createdAt: FieldRef<"Bookings", 'DateTime'>
    readonly updatedAt: FieldRef<"Bookings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bookings findUnique
   */
  export type BookingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where: BookingsWhereUniqueInput
  }

  /**
   * Bookings findUniqueOrThrow
   */
  export type BookingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where: BookingsWhereUniqueInput
  }

  /**
   * Bookings findFirst
   */
  export type BookingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Bookings findFirstOrThrow
   */
  export type BookingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Bookings findMany
   */
  export type BookingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Bookings create
   */
  export type BookingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * The data needed to create a Bookings.
     */
    data: XOR<BookingsCreateInput, BookingsUncheckedCreateInput>
  }

  /**
   * Bookings createMany
   */
  export type BookingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingsCreateManyInput | BookingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bookings createManyAndReturn
   */
  export type BookingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingsCreateManyInput | BookingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bookings update
   */
  export type BookingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * The data needed to update a Bookings.
     */
    data: XOR<BookingsUpdateInput, BookingsUncheckedUpdateInput>
    /**
     * Choose, which Bookings to update.
     */
    where: BookingsWhereUniqueInput
  }

  /**
   * Bookings updateMany
   */
  export type BookingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingsUpdateManyMutationInput, BookingsUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingsWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Bookings updateManyAndReturn
   */
  export type BookingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingsUpdateManyMutationInput, BookingsUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingsWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bookings upsert
   */
  export type BookingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * The filter to search for the Bookings to update in case it exists.
     */
    where: BookingsWhereUniqueInput
    /**
     * In case the Bookings found by the `where` argument doesn't exist, create a new Bookings with this data.
     */
    create: XOR<BookingsCreateInput, BookingsUncheckedCreateInput>
    /**
     * In case the Bookings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingsUpdateInput, BookingsUncheckedUpdateInput>
  }

  /**
   * Bookings delete
   */
  export type BookingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter which Bookings to delete.
     */
    where: BookingsWhereUniqueInput
  }

  /**
   * Bookings deleteMany
   */
  export type BookingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingsWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Bookings without action
   */
  export type BookingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
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


  export const HotelsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    city: 'city',
    address: 'address',
    distance: 'distance',
    photos: 'photos',
    title: 'title',
    desc: 'desc',
    rating: 'rating',
    cheapestPrice: 'cheapestPrice',
    featured: 'featured',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HotelsScalarFieldEnum = (typeof HotelsScalarFieldEnum)[keyof typeof HotelsScalarFieldEnum]


  export const RoomsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    price: 'price',
    maxPeople: 'maxPeople',
    desc: 'desc',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    hotelId: 'hotelId'
  };

  export type RoomsScalarFieldEnum = (typeof RoomsScalarFieldEnum)[keyof typeof RoomsScalarFieldEnum]


  export const RoomNumberScalarFieldEnum: {
    id: 'id',
    number: 'number',
    roomId: 'roomId'
  };

  export type RoomNumberScalarFieldEnum = (typeof RoomNumberScalarFieldEnum)[keyof typeof RoomNumberScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    isAdmin: 'isAdmin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const BookingsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    roomId: 'roomId',
    startDate: 'startDate',
    endDate: 'endDate',
    price: 'price',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingsScalarFieldEnum = (typeof BookingsScalarFieldEnum)[keyof typeof BookingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type HotelsWhereInput = {
    AND?: HotelsWhereInput | HotelsWhereInput[]
    OR?: HotelsWhereInput[]
    NOT?: HotelsWhereInput | HotelsWhereInput[]
    id?: IntFilter<"Hotels"> | number
    name?: StringFilter<"Hotels"> | string
    type?: StringFilter<"Hotels"> | string
    city?: StringFilter<"Hotels"> | string
    address?: StringFilter<"Hotels"> | string
    distance?: StringFilter<"Hotels"> | string
    photos?: StringNullableListFilter<"Hotels">
    title?: StringNullableFilter<"Hotels"> | string | null
    desc?: StringNullableFilter<"Hotels"> | string | null
    rating?: IntNullableFilter<"Hotels"> | number | null
    cheapestPrice?: IntFilter<"Hotels"> | number
    featured?: BoolNullableFilter<"Hotels"> | boolean | null
    createdAt?: DateTimeFilter<"Hotels"> | Date | string
    updatedAt?: DateTimeFilter<"Hotels"> | Date | string
    rooms?: RoomsListRelationFilter
  }

  export type HotelsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    city?: SortOrder
    address?: SortOrder
    distance?: SortOrder
    photos?: SortOrder
    title?: SortOrderInput | SortOrder
    desc?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    cheapestPrice?: SortOrder
    featured?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rooms?: RoomsOrderByRelationAggregateInput
  }

  export type HotelsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HotelsWhereInput | HotelsWhereInput[]
    OR?: HotelsWhereInput[]
    NOT?: HotelsWhereInput | HotelsWhereInput[]
    name?: StringFilter<"Hotels"> | string
    type?: StringFilter<"Hotels"> | string
    city?: StringFilter<"Hotels"> | string
    address?: StringFilter<"Hotels"> | string
    distance?: StringFilter<"Hotels"> | string
    photos?: StringNullableListFilter<"Hotels">
    title?: StringNullableFilter<"Hotels"> | string | null
    desc?: StringNullableFilter<"Hotels"> | string | null
    rating?: IntNullableFilter<"Hotels"> | number | null
    cheapestPrice?: IntFilter<"Hotels"> | number
    featured?: BoolNullableFilter<"Hotels"> | boolean | null
    createdAt?: DateTimeFilter<"Hotels"> | Date | string
    updatedAt?: DateTimeFilter<"Hotels"> | Date | string
    rooms?: RoomsListRelationFilter
  }, "id">

  export type HotelsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    city?: SortOrder
    address?: SortOrder
    distance?: SortOrder
    photos?: SortOrder
    title?: SortOrderInput | SortOrder
    desc?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    cheapestPrice?: SortOrder
    featured?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HotelsCountOrderByAggregateInput
    _avg?: HotelsAvgOrderByAggregateInput
    _max?: HotelsMaxOrderByAggregateInput
    _min?: HotelsMinOrderByAggregateInput
    _sum?: HotelsSumOrderByAggregateInput
  }

  export type HotelsScalarWhereWithAggregatesInput = {
    AND?: HotelsScalarWhereWithAggregatesInput | HotelsScalarWhereWithAggregatesInput[]
    OR?: HotelsScalarWhereWithAggregatesInput[]
    NOT?: HotelsScalarWhereWithAggregatesInput | HotelsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Hotels"> | number
    name?: StringWithAggregatesFilter<"Hotels"> | string
    type?: StringWithAggregatesFilter<"Hotels"> | string
    city?: StringWithAggregatesFilter<"Hotels"> | string
    address?: StringWithAggregatesFilter<"Hotels"> | string
    distance?: StringWithAggregatesFilter<"Hotels"> | string
    photos?: StringNullableListFilter<"Hotels">
    title?: StringNullableWithAggregatesFilter<"Hotels"> | string | null
    desc?: StringNullableWithAggregatesFilter<"Hotels"> | string | null
    rating?: IntNullableWithAggregatesFilter<"Hotels"> | number | null
    cheapestPrice?: IntWithAggregatesFilter<"Hotels"> | number
    featured?: BoolNullableWithAggregatesFilter<"Hotels"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"Hotels"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Hotels"> | Date | string
  }

  export type RoomsWhereInput = {
    AND?: RoomsWhereInput | RoomsWhereInput[]
    OR?: RoomsWhereInput[]
    NOT?: RoomsWhereInput | RoomsWhereInput[]
    id?: IntFilter<"Rooms"> | number
    title?: StringFilter<"Rooms"> | string
    price?: IntFilter<"Rooms"> | number
    maxPeople?: IntFilter<"Rooms"> | number
    desc?: StringFilter<"Rooms"> | string
    createdAt?: DateTimeFilter<"Rooms"> | Date | string
    updatedAt?: DateTimeFilter<"Rooms"> | Date | string
    hotelId?: IntFilter<"Rooms"> | number
    roomNumbers?: RoomNumberListRelationFilter
    hotel?: XOR<HotelsScalarRelationFilter, HotelsWhereInput>
    bookings?: BookingsListRelationFilter
  }

  export type RoomsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    maxPeople?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hotelId?: SortOrder
    roomNumbers?: RoomNumberOrderByRelationAggregateInput
    hotel?: HotelsOrderByWithRelationInput
    bookings?: BookingsOrderByRelationAggregateInput
  }

  export type RoomsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoomsWhereInput | RoomsWhereInput[]
    OR?: RoomsWhereInput[]
    NOT?: RoomsWhereInput | RoomsWhereInput[]
    title?: StringFilter<"Rooms"> | string
    price?: IntFilter<"Rooms"> | number
    maxPeople?: IntFilter<"Rooms"> | number
    desc?: StringFilter<"Rooms"> | string
    createdAt?: DateTimeFilter<"Rooms"> | Date | string
    updatedAt?: DateTimeFilter<"Rooms"> | Date | string
    hotelId?: IntFilter<"Rooms"> | number
    roomNumbers?: RoomNumberListRelationFilter
    hotel?: XOR<HotelsScalarRelationFilter, HotelsWhereInput>
    bookings?: BookingsListRelationFilter
  }, "id">

  export type RoomsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    maxPeople?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hotelId?: SortOrder
    _count?: RoomsCountOrderByAggregateInput
    _avg?: RoomsAvgOrderByAggregateInput
    _max?: RoomsMaxOrderByAggregateInput
    _min?: RoomsMinOrderByAggregateInput
    _sum?: RoomsSumOrderByAggregateInput
  }

  export type RoomsScalarWhereWithAggregatesInput = {
    AND?: RoomsScalarWhereWithAggregatesInput | RoomsScalarWhereWithAggregatesInput[]
    OR?: RoomsScalarWhereWithAggregatesInput[]
    NOT?: RoomsScalarWhereWithAggregatesInput | RoomsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rooms"> | number
    title?: StringWithAggregatesFilter<"Rooms"> | string
    price?: IntWithAggregatesFilter<"Rooms"> | number
    maxPeople?: IntWithAggregatesFilter<"Rooms"> | number
    desc?: StringWithAggregatesFilter<"Rooms"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Rooms"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rooms"> | Date | string
    hotelId?: IntWithAggregatesFilter<"Rooms"> | number
  }

  export type RoomNumberWhereInput = {
    AND?: RoomNumberWhereInput | RoomNumberWhereInput[]
    OR?: RoomNumberWhereInput[]
    NOT?: RoomNumberWhereInput | RoomNumberWhereInput[]
    id?: IntFilter<"RoomNumber"> | number
    number?: StringFilter<"RoomNumber"> | string
    roomId?: IntFilter<"RoomNumber"> | number
    room?: XOR<RoomsScalarRelationFilter, RoomsWhereInput>
  }

  export type RoomNumberOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    roomId?: SortOrder
    room?: RoomsOrderByWithRelationInput
  }

  export type RoomNumberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    number?: string
    AND?: RoomNumberWhereInput | RoomNumberWhereInput[]
    OR?: RoomNumberWhereInput[]
    NOT?: RoomNumberWhereInput | RoomNumberWhereInput[]
    roomId?: IntFilter<"RoomNumber"> | number
    room?: XOR<RoomsScalarRelationFilter, RoomsWhereInput>
  }, "id" | "number">

  export type RoomNumberOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    roomId?: SortOrder
    _count?: RoomNumberCountOrderByAggregateInput
    _avg?: RoomNumberAvgOrderByAggregateInput
    _max?: RoomNumberMaxOrderByAggregateInput
    _min?: RoomNumberMinOrderByAggregateInput
    _sum?: RoomNumberSumOrderByAggregateInput
  }

  export type RoomNumberScalarWhereWithAggregatesInput = {
    AND?: RoomNumberScalarWhereWithAggregatesInput | RoomNumberScalarWhereWithAggregatesInput[]
    OR?: RoomNumberScalarWhereWithAggregatesInput[]
    NOT?: RoomNumberScalarWhereWithAggregatesInput | RoomNumberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RoomNumber"> | number
    number?: StringWithAggregatesFilter<"RoomNumber"> | string
    roomId?: IntWithAggregatesFilter<"RoomNumber"> | number
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    username?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    isAdmin?: BoolNullableFilter<"Users"> | boolean | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    bookings?: BookingsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookings?: BookingsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    password?: StringFilter<"Users"> | string
    isAdmin?: BoolNullableFilter<"Users"> | boolean | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    bookings?: BookingsListRelationFilter
  }, "id" | "username" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    username?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    isAdmin?: BoolNullableWithAggregatesFilter<"Users"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type BookingsWhereInput = {
    AND?: BookingsWhereInput | BookingsWhereInput[]
    OR?: BookingsWhereInput[]
    NOT?: BookingsWhereInput | BookingsWhereInput[]
    id?: IntFilter<"Bookings"> | number
    userId?: IntFilter<"Bookings"> | number
    roomId?: IntFilter<"Bookings"> | number
    startDate?: DateTimeFilter<"Bookings"> | Date | string
    endDate?: DateTimeFilter<"Bookings"> | Date | string
    price?: IntFilter<"Bookings"> | number
    status?: StringFilter<"Bookings"> | string
    createdAt?: DateTimeFilter<"Bookings"> | Date | string
    updatedAt?: DateTimeFilter<"Bookings"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    room?: XOR<RoomsScalarRelationFilter, RoomsWhereInput>
  }

  export type BookingsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    room?: RoomsOrderByWithRelationInput
  }

  export type BookingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookingsWhereInput | BookingsWhereInput[]
    OR?: BookingsWhereInput[]
    NOT?: BookingsWhereInput | BookingsWhereInput[]
    userId?: IntFilter<"Bookings"> | number
    roomId?: IntFilter<"Bookings"> | number
    startDate?: DateTimeFilter<"Bookings"> | Date | string
    endDate?: DateTimeFilter<"Bookings"> | Date | string
    price?: IntFilter<"Bookings"> | number
    status?: StringFilter<"Bookings"> | string
    createdAt?: DateTimeFilter<"Bookings"> | Date | string
    updatedAt?: DateTimeFilter<"Bookings"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    room?: XOR<RoomsScalarRelationFilter, RoomsWhereInput>
  }, "id">

  export type BookingsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingsCountOrderByAggregateInput
    _avg?: BookingsAvgOrderByAggregateInput
    _max?: BookingsMaxOrderByAggregateInput
    _min?: BookingsMinOrderByAggregateInput
    _sum?: BookingsSumOrderByAggregateInput
  }

  export type BookingsScalarWhereWithAggregatesInput = {
    AND?: BookingsScalarWhereWithAggregatesInput | BookingsScalarWhereWithAggregatesInput[]
    OR?: BookingsScalarWhereWithAggregatesInput[]
    NOT?: BookingsScalarWhereWithAggregatesInput | BookingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bookings"> | number
    userId?: IntWithAggregatesFilter<"Bookings"> | number
    roomId?: IntWithAggregatesFilter<"Bookings"> | number
    startDate?: DateTimeWithAggregatesFilter<"Bookings"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Bookings"> | Date | string
    price?: IntWithAggregatesFilter<"Bookings"> | number
    status?: StringWithAggregatesFilter<"Bookings"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Bookings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bookings"> | Date | string
  }

  export type HotelsCreateInput = {
    name: string
    type: string
    city: string
    address: string
    distance: string
    photos?: HotelsCreatephotosInput | string[]
    title?: string | null
    desc?: string | null
    rating?: number | null
    cheapestPrice: number
    featured?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomsCreateNestedManyWithoutHotelInput
  }

  export type HotelsUncheckedCreateInput = {
    id?: number
    name: string
    type: string
    city: string
    address: string
    distance: string
    photos?: HotelsCreatephotosInput | string[]
    title?: string | null
    desc?: string | null
    rating?: number | null
    cheapestPrice: number
    featured?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomsUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    photos?: HotelsUpdatephotosInput | string[]
    title?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    cheapestPrice?: IntFieldUpdateOperationsInput | number
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomsUpdateManyWithoutHotelNestedInput
  }

  export type HotelsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    photos?: HotelsUpdatephotosInput | string[]
    title?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    cheapestPrice?: IntFieldUpdateOperationsInput | number
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomsUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type HotelsCreateManyInput = {
    id?: number
    name: string
    type: string
    city: string
    address: string
    distance: string
    photos?: HotelsCreatephotosInput | string[]
    title?: string | null
    desc?: string | null
    rating?: number | null
    cheapestPrice: number
    featured?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HotelsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    photos?: HotelsUpdatephotosInput | string[]
    title?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    cheapestPrice?: IntFieldUpdateOperationsInput | number
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    photos?: HotelsUpdatephotosInput | string[]
    title?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    cheapestPrice?: IntFieldUpdateOperationsInput | number
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomsCreateInput = {
    title: string
    price: number
    maxPeople: number
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roomNumbers?: RoomNumberCreateNestedManyWithoutRoomInput
    hotel: HotelsCreateNestedOneWithoutRoomsInput
    bookings?: BookingsCreateNestedManyWithoutRoomInput
  }

  export type RoomsUncheckedCreateInput = {
    id?: number
    title: string
    price: number
    maxPeople: number
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotelId: number
    roomNumbers?: RoomNumberUncheckedCreateNestedManyWithoutRoomInput
    bookings?: BookingsUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    maxPeople?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomNumbers?: RoomNumberUpdateManyWithoutRoomNestedInput
    hotel?: HotelsUpdateOneRequiredWithoutRoomsNestedInput
    bookings?: BookingsUpdateManyWithoutRoomNestedInput
  }

  export type RoomsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    maxPeople?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotelId?: IntFieldUpdateOperationsInput | number
    roomNumbers?: RoomNumberUncheckedUpdateManyWithoutRoomNestedInput
    bookings?: BookingsUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomsCreateManyInput = {
    id?: number
    title: string
    price: number
    maxPeople: number
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotelId: number
  }

  export type RoomsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    maxPeople?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    maxPeople?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotelId?: IntFieldUpdateOperationsInput | number
  }

  export type RoomNumberCreateInput = {
    number: string
    room: RoomsCreateNestedOneWithoutRoomNumbersInput
  }

  export type RoomNumberUncheckedCreateInput = {
    id?: number
    number: string
    roomId: number
  }

  export type RoomNumberUpdateInput = {
    number?: StringFieldUpdateOperationsInput | string
    room?: RoomsUpdateOneRequiredWithoutRoomNumbersNestedInput
  }

  export type RoomNumberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    roomId?: IntFieldUpdateOperationsInput | number
  }

  export type RoomNumberCreateManyInput = {
    id?: number
    number: string
    roomId: number
  }

  export type RoomNumberUpdateManyMutationInput = {
    number?: StringFieldUpdateOperationsInput | string
  }

  export type RoomNumberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    roomId?: IntFieldUpdateOperationsInput | number
  }

  export type UsersCreateInput = {
    username: string
    email: string
    password: string
    isAdmin?: boolean | null
    createdAt: Date | string
    updatedAt?: Date | string
    bookings?: BookingsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    isAdmin?: boolean | null
    createdAt: Date | string
    updatedAt?: Date | string
    bookings?: BookingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    isAdmin?: boolean | null
    createdAt: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingsCreateInput = {
    startDate: Date | string
    endDate: Date | string
    price: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutBookingsInput
    room: RoomsCreateNestedOneWithoutBookingsInput
  }

  export type BookingsUncheckedCreateInput = {
    id?: number
    userId: number
    roomId: number
    startDate: Date | string
    endDate: Date | string
    price: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingsUpdateInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutBookingsNestedInput
    room?: RoomsUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingsCreateManyInput = {
    id?: number
    userId: number
    roomId: number
    startDate: Date | string
    endDate: Date | string
    price: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingsUpdateManyMutationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RoomsListRelationFilter = {
    every?: RoomsWhereInput
    some?: RoomsWhereInput
    none?: RoomsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RoomsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HotelsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    city?: SortOrder
    address?: SortOrder
    distance?: SortOrder
    photos?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    rating?: SortOrder
    cheapestPrice?: SortOrder
    featured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HotelsAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    cheapestPrice?: SortOrder
  }

  export type HotelsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    city?: SortOrder
    address?: SortOrder
    distance?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    rating?: SortOrder
    cheapestPrice?: SortOrder
    featured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HotelsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    city?: SortOrder
    address?: SortOrder
    distance?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    rating?: SortOrder
    cheapestPrice?: SortOrder
    featured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HotelsSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    cheapestPrice?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RoomNumberListRelationFilter = {
    every?: RoomNumberWhereInput
    some?: RoomNumberWhereInput
    none?: RoomNumberWhereInput
  }

  export type HotelsScalarRelationFilter = {
    is?: HotelsWhereInput
    isNot?: HotelsWhereInput
  }

  export type BookingsListRelationFilter = {
    every?: BookingsWhereInput
    some?: BookingsWhereInput
    none?: BookingsWhereInput
  }

  export type RoomNumberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    maxPeople?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hotelId?: SortOrder
  }

  export type RoomsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    maxPeople?: SortOrder
    hotelId?: SortOrder
  }

  export type RoomsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    maxPeople?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hotelId?: SortOrder
  }

  export type RoomsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    maxPeople?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hotelId?: SortOrder
  }

  export type RoomsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    maxPeople?: SortOrder
    hotelId?: SortOrder
  }

  export type RoomsScalarRelationFilter = {
    is?: RoomsWhereInput
    isNot?: RoomsWhereInput
  }

  export type RoomNumberCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    roomId?: SortOrder
  }

  export type RoomNumberAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
  }

  export type RoomNumberMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    roomId?: SortOrder
  }

  export type RoomNumberMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    roomId?: SortOrder
  }

  export type RoomNumberSumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type BookingsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    price?: SortOrder
  }

  export type BookingsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    price?: SortOrder
  }

  export type HotelsCreatephotosInput = {
    set: string[]
  }

  export type RoomsCreateNestedManyWithoutHotelInput = {
    create?: XOR<RoomsCreateWithoutHotelInput, RoomsUncheckedCreateWithoutHotelInput> | RoomsCreateWithoutHotelInput[] | RoomsUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomsCreateOrConnectWithoutHotelInput | RoomsCreateOrConnectWithoutHotelInput[]
    createMany?: RoomsCreateManyHotelInputEnvelope
    connect?: RoomsWhereUniqueInput | RoomsWhereUniqueInput[]
  }

  export type RoomsUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<RoomsCreateWithoutHotelInput, RoomsUncheckedCreateWithoutHotelInput> | RoomsCreateWithoutHotelInput[] | RoomsUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomsCreateOrConnectWithoutHotelInput | RoomsCreateOrConnectWithoutHotelInput[]
    createMany?: RoomsCreateManyHotelInputEnvelope
    connect?: RoomsWhereUniqueInput | RoomsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type HotelsUpdatephotosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RoomsUpdateManyWithoutHotelNestedInput = {
    create?: XOR<RoomsCreateWithoutHotelInput, RoomsUncheckedCreateWithoutHotelInput> | RoomsCreateWithoutHotelInput[] | RoomsUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomsCreateOrConnectWithoutHotelInput | RoomsCreateOrConnectWithoutHotelInput[]
    upsert?: RoomsUpsertWithWhereUniqueWithoutHotelInput | RoomsUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: RoomsCreateManyHotelInputEnvelope
    set?: RoomsWhereUniqueInput | RoomsWhereUniqueInput[]
    disconnect?: RoomsWhereUniqueInput | RoomsWhereUniqueInput[]
    delete?: RoomsWhereUniqueInput | RoomsWhereUniqueInput[]
    connect?: RoomsWhereUniqueInput | RoomsWhereUniqueInput[]
    update?: RoomsUpdateWithWhereUniqueWithoutHotelInput | RoomsUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: RoomsUpdateManyWithWhereWithoutHotelInput | RoomsUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: RoomsScalarWhereInput | RoomsScalarWhereInput[]
  }

  export type RoomsUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<RoomsCreateWithoutHotelInput, RoomsUncheckedCreateWithoutHotelInput> | RoomsCreateWithoutHotelInput[] | RoomsUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomsCreateOrConnectWithoutHotelInput | RoomsCreateOrConnectWithoutHotelInput[]
    upsert?: RoomsUpsertWithWhereUniqueWithoutHotelInput | RoomsUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: RoomsCreateManyHotelInputEnvelope
    set?: RoomsWhereUniqueInput | RoomsWhereUniqueInput[]
    disconnect?: RoomsWhereUniqueInput | RoomsWhereUniqueInput[]
    delete?: RoomsWhereUniqueInput | RoomsWhereUniqueInput[]
    connect?: RoomsWhereUniqueInput | RoomsWhereUniqueInput[]
    update?: RoomsUpdateWithWhereUniqueWithoutHotelInput | RoomsUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: RoomsUpdateManyWithWhereWithoutHotelInput | RoomsUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: RoomsScalarWhereInput | RoomsScalarWhereInput[]
  }

  export type RoomNumberCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomNumberCreateWithoutRoomInput, RoomNumberUncheckedCreateWithoutRoomInput> | RoomNumberCreateWithoutRoomInput[] | RoomNumberUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomNumberCreateOrConnectWithoutRoomInput | RoomNumberCreateOrConnectWithoutRoomInput[]
    createMany?: RoomNumberCreateManyRoomInputEnvelope
    connect?: RoomNumberWhereUniqueInput | RoomNumberWhereUniqueInput[]
  }

  export type HotelsCreateNestedOneWithoutRoomsInput = {
    create?: XOR<HotelsCreateWithoutRoomsInput, HotelsUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: HotelsCreateOrConnectWithoutRoomsInput
    connect?: HotelsWhereUniqueInput
  }

  export type BookingsCreateNestedManyWithoutRoomInput = {
    create?: XOR<BookingsCreateWithoutRoomInput, BookingsUncheckedCreateWithoutRoomInput> | BookingsCreateWithoutRoomInput[] | BookingsUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutRoomInput | BookingsCreateOrConnectWithoutRoomInput[]
    createMany?: BookingsCreateManyRoomInputEnvelope
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
  }

  export type RoomNumberUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomNumberCreateWithoutRoomInput, RoomNumberUncheckedCreateWithoutRoomInput> | RoomNumberCreateWithoutRoomInput[] | RoomNumberUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomNumberCreateOrConnectWithoutRoomInput | RoomNumberCreateOrConnectWithoutRoomInput[]
    createMany?: RoomNumberCreateManyRoomInputEnvelope
    connect?: RoomNumberWhereUniqueInput | RoomNumberWhereUniqueInput[]
  }

  export type BookingsUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<BookingsCreateWithoutRoomInput, BookingsUncheckedCreateWithoutRoomInput> | BookingsCreateWithoutRoomInput[] | BookingsUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutRoomInput | BookingsCreateOrConnectWithoutRoomInput[]
    createMany?: BookingsCreateManyRoomInputEnvelope
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
  }

  export type RoomNumberUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomNumberCreateWithoutRoomInput, RoomNumberUncheckedCreateWithoutRoomInput> | RoomNumberCreateWithoutRoomInput[] | RoomNumberUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomNumberCreateOrConnectWithoutRoomInput | RoomNumberCreateOrConnectWithoutRoomInput[]
    upsert?: RoomNumberUpsertWithWhereUniqueWithoutRoomInput | RoomNumberUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomNumberCreateManyRoomInputEnvelope
    set?: RoomNumberWhereUniqueInput | RoomNumberWhereUniqueInput[]
    disconnect?: RoomNumberWhereUniqueInput | RoomNumberWhereUniqueInput[]
    delete?: RoomNumberWhereUniqueInput | RoomNumberWhereUniqueInput[]
    connect?: RoomNumberWhereUniqueInput | RoomNumberWhereUniqueInput[]
    update?: RoomNumberUpdateWithWhereUniqueWithoutRoomInput | RoomNumberUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomNumberUpdateManyWithWhereWithoutRoomInput | RoomNumberUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomNumberScalarWhereInput | RoomNumberScalarWhereInput[]
  }

  export type HotelsUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<HotelsCreateWithoutRoomsInput, HotelsUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: HotelsCreateOrConnectWithoutRoomsInput
    upsert?: HotelsUpsertWithoutRoomsInput
    connect?: HotelsWhereUniqueInput
    update?: XOR<XOR<HotelsUpdateToOneWithWhereWithoutRoomsInput, HotelsUpdateWithoutRoomsInput>, HotelsUncheckedUpdateWithoutRoomsInput>
  }

  export type BookingsUpdateManyWithoutRoomNestedInput = {
    create?: XOR<BookingsCreateWithoutRoomInput, BookingsUncheckedCreateWithoutRoomInput> | BookingsCreateWithoutRoomInput[] | BookingsUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutRoomInput | BookingsCreateOrConnectWithoutRoomInput[]
    upsert?: BookingsUpsertWithWhereUniqueWithoutRoomInput | BookingsUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: BookingsCreateManyRoomInputEnvelope
    set?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    disconnect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    delete?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    update?: BookingsUpdateWithWhereUniqueWithoutRoomInput | BookingsUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: BookingsUpdateManyWithWhereWithoutRoomInput | BookingsUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
  }

  export type RoomNumberUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomNumberCreateWithoutRoomInput, RoomNumberUncheckedCreateWithoutRoomInput> | RoomNumberCreateWithoutRoomInput[] | RoomNumberUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomNumberCreateOrConnectWithoutRoomInput | RoomNumberCreateOrConnectWithoutRoomInput[]
    upsert?: RoomNumberUpsertWithWhereUniqueWithoutRoomInput | RoomNumberUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomNumberCreateManyRoomInputEnvelope
    set?: RoomNumberWhereUniqueInput | RoomNumberWhereUniqueInput[]
    disconnect?: RoomNumberWhereUniqueInput | RoomNumberWhereUniqueInput[]
    delete?: RoomNumberWhereUniqueInput | RoomNumberWhereUniqueInput[]
    connect?: RoomNumberWhereUniqueInput | RoomNumberWhereUniqueInput[]
    update?: RoomNumberUpdateWithWhereUniqueWithoutRoomInput | RoomNumberUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomNumberUpdateManyWithWhereWithoutRoomInput | RoomNumberUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomNumberScalarWhereInput | RoomNumberScalarWhereInput[]
  }

  export type BookingsUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<BookingsCreateWithoutRoomInput, BookingsUncheckedCreateWithoutRoomInput> | BookingsCreateWithoutRoomInput[] | BookingsUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutRoomInput | BookingsCreateOrConnectWithoutRoomInput[]
    upsert?: BookingsUpsertWithWhereUniqueWithoutRoomInput | BookingsUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: BookingsCreateManyRoomInputEnvelope
    set?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    disconnect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    delete?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    update?: BookingsUpdateWithWhereUniqueWithoutRoomInput | BookingsUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: BookingsUpdateManyWithWhereWithoutRoomInput | BookingsUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
  }

  export type RoomsCreateNestedOneWithoutRoomNumbersInput = {
    create?: XOR<RoomsCreateWithoutRoomNumbersInput, RoomsUncheckedCreateWithoutRoomNumbersInput>
    connectOrCreate?: RoomsCreateOrConnectWithoutRoomNumbersInput
    connect?: RoomsWhereUniqueInput
  }

  export type RoomsUpdateOneRequiredWithoutRoomNumbersNestedInput = {
    create?: XOR<RoomsCreateWithoutRoomNumbersInput, RoomsUncheckedCreateWithoutRoomNumbersInput>
    connectOrCreate?: RoomsCreateOrConnectWithoutRoomNumbersInput
    upsert?: RoomsUpsertWithoutRoomNumbersInput
    connect?: RoomsWhereUniqueInput
    update?: XOR<XOR<RoomsUpdateToOneWithWhereWithoutRoomNumbersInput, RoomsUpdateWithoutRoomNumbersInput>, RoomsUncheckedUpdateWithoutRoomNumbersInput>
  }

  export type BookingsCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingsCreateWithoutUserInput, BookingsUncheckedCreateWithoutUserInput> | BookingsCreateWithoutUserInput[] | BookingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutUserInput | BookingsCreateOrConnectWithoutUserInput[]
    createMany?: BookingsCreateManyUserInputEnvelope
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
  }

  export type BookingsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingsCreateWithoutUserInput, BookingsUncheckedCreateWithoutUserInput> | BookingsCreateWithoutUserInput[] | BookingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutUserInput | BookingsCreateOrConnectWithoutUserInput[]
    createMany?: BookingsCreateManyUserInputEnvelope
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
  }

  export type BookingsUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingsCreateWithoutUserInput, BookingsUncheckedCreateWithoutUserInput> | BookingsCreateWithoutUserInput[] | BookingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutUserInput | BookingsCreateOrConnectWithoutUserInput[]
    upsert?: BookingsUpsertWithWhereUniqueWithoutUserInput | BookingsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingsCreateManyUserInputEnvelope
    set?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    disconnect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    delete?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    update?: BookingsUpdateWithWhereUniqueWithoutUserInput | BookingsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingsUpdateManyWithWhereWithoutUserInput | BookingsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
  }

  export type BookingsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingsCreateWithoutUserInput, BookingsUncheckedCreateWithoutUserInput> | BookingsCreateWithoutUserInput[] | BookingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutUserInput | BookingsCreateOrConnectWithoutUserInput[]
    upsert?: BookingsUpsertWithWhereUniqueWithoutUserInput | BookingsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingsCreateManyUserInputEnvelope
    set?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    disconnect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    delete?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    update?: BookingsUpdateWithWhereUniqueWithoutUserInput | BookingsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingsUpdateManyWithWhereWithoutUserInput | BookingsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UsersCreateWithoutBookingsInput, UsersUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBookingsInput
    connect?: UsersWhereUniqueInput
  }

  export type RoomsCreateNestedOneWithoutBookingsInput = {
    create?: XOR<RoomsCreateWithoutBookingsInput, RoomsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: RoomsCreateOrConnectWithoutBookingsInput
    connect?: RoomsWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UsersCreateWithoutBookingsInput, UsersUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBookingsInput
    upsert?: UsersUpsertWithoutBookingsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutBookingsInput, UsersUpdateWithoutBookingsInput>, UsersUncheckedUpdateWithoutBookingsInput>
  }

  export type RoomsUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<RoomsCreateWithoutBookingsInput, RoomsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: RoomsCreateOrConnectWithoutBookingsInput
    upsert?: RoomsUpsertWithoutBookingsInput
    connect?: RoomsWhereUniqueInput
    update?: XOR<XOR<RoomsUpdateToOneWithWhereWithoutBookingsInput, RoomsUpdateWithoutBookingsInput>, RoomsUncheckedUpdateWithoutBookingsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RoomsCreateWithoutHotelInput = {
    title: string
    price: number
    maxPeople: number
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roomNumbers?: RoomNumberCreateNestedManyWithoutRoomInput
    bookings?: BookingsCreateNestedManyWithoutRoomInput
  }

  export type RoomsUncheckedCreateWithoutHotelInput = {
    id?: number
    title: string
    price: number
    maxPeople: number
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roomNumbers?: RoomNumberUncheckedCreateNestedManyWithoutRoomInput
    bookings?: BookingsUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomsCreateOrConnectWithoutHotelInput = {
    where: RoomsWhereUniqueInput
    create: XOR<RoomsCreateWithoutHotelInput, RoomsUncheckedCreateWithoutHotelInput>
  }

  export type RoomsCreateManyHotelInputEnvelope = {
    data: RoomsCreateManyHotelInput | RoomsCreateManyHotelInput[]
    skipDuplicates?: boolean
  }

  export type RoomsUpsertWithWhereUniqueWithoutHotelInput = {
    where: RoomsWhereUniqueInput
    update: XOR<RoomsUpdateWithoutHotelInput, RoomsUncheckedUpdateWithoutHotelInput>
    create: XOR<RoomsCreateWithoutHotelInput, RoomsUncheckedCreateWithoutHotelInput>
  }

  export type RoomsUpdateWithWhereUniqueWithoutHotelInput = {
    where: RoomsWhereUniqueInput
    data: XOR<RoomsUpdateWithoutHotelInput, RoomsUncheckedUpdateWithoutHotelInput>
  }

  export type RoomsUpdateManyWithWhereWithoutHotelInput = {
    where: RoomsScalarWhereInput
    data: XOR<RoomsUpdateManyMutationInput, RoomsUncheckedUpdateManyWithoutHotelInput>
  }

  export type RoomsScalarWhereInput = {
    AND?: RoomsScalarWhereInput | RoomsScalarWhereInput[]
    OR?: RoomsScalarWhereInput[]
    NOT?: RoomsScalarWhereInput | RoomsScalarWhereInput[]
    id?: IntFilter<"Rooms"> | number
    title?: StringFilter<"Rooms"> | string
    price?: IntFilter<"Rooms"> | number
    maxPeople?: IntFilter<"Rooms"> | number
    desc?: StringFilter<"Rooms"> | string
    createdAt?: DateTimeFilter<"Rooms"> | Date | string
    updatedAt?: DateTimeFilter<"Rooms"> | Date | string
    hotelId?: IntFilter<"Rooms"> | number
  }

  export type RoomNumberCreateWithoutRoomInput = {
    number: string
  }

  export type RoomNumberUncheckedCreateWithoutRoomInput = {
    id?: number
    number: string
  }

  export type RoomNumberCreateOrConnectWithoutRoomInput = {
    where: RoomNumberWhereUniqueInput
    create: XOR<RoomNumberCreateWithoutRoomInput, RoomNumberUncheckedCreateWithoutRoomInput>
  }

  export type RoomNumberCreateManyRoomInputEnvelope = {
    data: RoomNumberCreateManyRoomInput | RoomNumberCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type HotelsCreateWithoutRoomsInput = {
    name: string
    type: string
    city: string
    address: string
    distance: string
    photos?: HotelsCreatephotosInput | string[]
    title?: string | null
    desc?: string | null
    rating?: number | null
    cheapestPrice: number
    featured?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HotelsUncheckedCreateWithoutRoomsInput = {
    id?: number
    name: string
    type: string
    city: string
    address: string
    distance: string
    photos?: HotelsCreatephotosInput | string[]
    title?: string | null
    desc?: string | null
    rating?: number | null
    cheapestPrice: number
    featured?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HotelsCreateOrConnectWithoutRoomsInput = {
    where: HotelsWhereUniqueInput
    create: XOR<HotelsCreateWithoutRoomsInput, HotelsUncheckedCreateWithoutRoomsInput>
  }

  export type BookingsCreateWithoutRoomInput = {
    startDate: Date | string
    endDate: Date | string
    price: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutBookingsInput
  }

  export type BookingsUncheckedCreateWithoutRoomInput = {
    id?: number
    userId: number
    startDate: Date | string
    endDate: Date | string
    price: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingsCreateOrConnectWithoutRoomInput = {
    where: BookingsWhereUniqueInput
    create: XOR<BookingsCreateWithoutRoomInput, BookingsUncheckedCreateWithoutRoomInput>
  }

  export type BookingsCreateManyRoomInputEnvelope = {
    data: BookingsCreateManyRoomInput | BookingsCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type RoomNumberUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomNumberWhereUniqueInput
    update: XOR<RoomNumberUpdateWithoutRoomInput, RoomNumberUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomNumberCreateWithoutRoomInput, RoomNumberUncheckedCreateWithoutRoomInput>
  }

  export type RoomNumberUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomNumberWhereUniqueInput
    data: XOR<RoomNumberUpdateWithoutRoomInput, RoomNumberUncheckedUpdateWithoutRoomInput>
  }

  export type RoomNumberUpdateManyWithWhereWithoutRoomInput = {
    where: RoomNumberScalarWhereInput
    data: XOR<RoomNumberUpdateManyMutationInput, RoomNumberUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomNumberScalarWhereInput = {
    AND?: RoomNumberScalarWhereInput | RoomNumberScalarWhereInput[]
    OR?: RoomNumberScalarWhereInput[]
    NOT?: RoomNumberScalarWhereInput | RoomNumberScalarWhereInput[]
    id?: IntFilter<"RoomNumber"> | number
    number?: StringFilter<"RoomNumber"> | string
    roomId?: IntFilter<"RoomNumber"> | number
  }

  export type HotelsUpsertWithoutRoomsInput = {
    update: XOR<HotelsUpdateWithoutRoomsInput, HotelsUncheckedUpdateWithoutRoomsInput>
    create: XOR<HotelsCreateWithoutRoomsInput, HotelsUncheckedCreateWithoutRoomsInput>
    where?: HotelsWhereInput
  }

  export type HotelsUpdateToOneWithWhereWithoutRoomsInput = {
    where?: HotelsWhereInput
    data: XOR<HotelsUpdateWithoutRoomsInput, HotelsUncheckedUpdateWithoutRoomsInput>
  }

  export type HotelsUpdateWithoutRoomsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    photos?: HotelsUpdatephotosInput | string[]
    title?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    cheapestPrice?: IntFieldUpdateOperationsInput | number
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelsUncheckedUpdateWithoutRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    photos?: HotelsUpdatephotosInput | string[]
    title?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    cheapestPrice?: IntFieldUpdateOperationsInput | number
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingsUpsertWithWhereUniqueWithoutRoomInput = {
    where: BookingsWhereUniqueInput
    update: XOR<BookingsUpdateWithoutRoomInput, BookingsUncheckedUpdateWithoutRoomInput>
    create: XOR<BookingsCreateWithoutRoomInput, BookingsUncheckedCreateWithoutRoomInput>
  }

  export type BookingsUpdateWithWhereUniqueWithoutRoomInput = {
    where: BookingsWhereUniqueInput
    data: XOR<BookingsUpdateWithoutRoomInput, BookingsUncheckedUpdateWithoutRoomInput>
  }

  export type BookingsUpdateManyWithWhereWithoutRoomInput = {
    where: BookingsScalarWhereInput
    data: XOR<BookingsUpdateManyMutationInput, BookingsUncheckedUpdateManyWithoutRoomInput>
  }

  export type BookingsScalarWhereInput = {
    AND?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
    OR?: BookingsScalarWhereInput[]
    NOT?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
    id?: IntFilter<"Bookings"> | number
    userId?: IntFilter<"Bookings"> | number
    roomId?: IntFilter<"Bookings"> | number
    startDate?: DateTimeFilter<"Bookings"> | Date | string
    endDate?: DateTimeFilter<"Bookings"> | Date | string
    price?: IntFilter<"Bookings"> | number
    status?: StringFilter<"Bookings"> | string
    createdAt?: DateTimeFilter<"Bookings"> | Date | string
    updatedAt?: DateTimeFilter<"Bookings"> | Date | string
  }

  export type RoomsCreateWithoutRoomNumbersInput = {
    title: string
    price: number
    maxPeople: number
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotel: HotelsCreateNestedOneWithoutRoomsInput
    bookings?: BookingsCreateNestedManyWithoutRoomInput
  }

  export type RoomsUncheckedCreateWithoutRoomNumbersInput = {
    id?: number
    title: string
    price: number
    maxPeople: number
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotelId: number
    bookings?: BookingsUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomsCreateOrConnectWithoutRoomNumbersInput = {
    where: RoomsWhereUniqueInput
    create: XOR<RoomsCreateWithoutRoomNumbersInput, RoomsUncheckedCreateWithoutRoomNumbersInput>
  }

  export type RoomsUpsertWithoutRoomNumbersInput = {
    update: XOR<RoomsUpdateWithoutRoomNumbersInput, RoomsUncheckedUpdateWithoutRoomNumbersInput>
    create: XOR<RoomsCreateWithoutRoomNumbersInput, RoomsUncheckedCreateWithoutRoomNumbersInput>
    where?: RoomsWhereInput
  }

  export type RoomsUpdateToOneWithWhereWithoutRoomNumbersInput = {
    where?: RoomsWhereInput
    data: XOR<RoomsUpdateWithoutRoomNumbersInput, RoomsUncheckedUpdateWithoutRoomNumbersInput>
  }

  export type RoomsUpdateWithoutRoomNumbersInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    maxPeople?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelsUpdateOneRequiredWithoutRoomsNestedInput
    bookings?: BookingsUpdateManyWithoutRoomNestedInput
  }

  export type RoomsUncheckedUpdateWithoutRoomNumbersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    maxPeople?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotelId?: IntFieldUpdateOperationsInput | number
    bookings?: BookingsUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type BookingsCreateWithoutUserInput = {
    startDate: Date | string
    endDate: Date | string
    price: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomsCreateNestedOneWithoutBookingsInput
  }

  export type BookingsUncheckedCreateWithoutUserInput = {
    id?: number
    roomId: number
    startDate: Date | string
    endDate: Date | string
    price: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingsCreateOrConnectWithoutUserInput = {
    where: BookingsWhereUniqueInput
    create: XOR<BookingsCreateWithoutUserInput, BookingsUncheckedCreateWithoutUserInput>
  }

  export type BookingsCreateManyUserInputEnvelope = {
    data: BookingsCreateManyUserInput | BookingsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookingsUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingsWhereUniqueInput
    update: XOR<BookingsUpdateWithoutUserInput, BookingsUncheckedUpdateWithoutUserInput>
    create: XOR<BookingsCreateWithoutUserInput, BookingsUncheckedCreateWithoutUserInput>
  }

  export type BookingsUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingsWhereUniqueInput
    data: XOR<BookingsUpdateWithoutUserInput, BookingsUncheckedUpdateWithoutUserInput>
  }

  export type BookingsUpdateManyWithWhereWithoutUserInput = {
    where: BookingsScalarWhereInput
    data: XOR<BookingsUpdateManyMutationInput, BookingsUncheckedUpdateManyWithoutUserInput>
  }

  export type UsersCreateWithoutBookingsInput = {
    username: string
    email: string
    password: string
    isAdmin?: boolean | null
    createdAt: Date | string
    updatedAt?: Date | string
  }

  export type UsersUncheckedCreateWithoutBookingsInput = {
    id?: number
    username: string
    email: string
    password: string
    isAdmin?: boolean | null
    createdAt: Date | string
    updatedAt?: Date | string
  }

  export type UsersCreateOrConnectWithoutBookingsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutBookingsInput, UsersUncheckedCreateWithoutBookingsInput>
  }

  export type RoomsCreateWithoutBookingsInput = {
    title: string
    price: number
    maxPeople: number
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roomNumbers?: RoomNumberCreateNestedManyWithoutRoomInput
    hotel: HotelsCreateNestedOneWithoutRoomsInput
  }

  export type RoomsUncheckedCreateWithoutBookingsInput = {
    id?: number
    title: string
    price: number
    maxPeople: number
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotelId: number
    roomNumbers?: RoomNumberUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomsCreateOrConnectWithoutBookingsInput = {
    where: RoomsWhereUniqueInput
    create: XOR<RoomsCreateWithoutBookingsInput, RoomsUncheckedCreateWithoutBookingsInput>
  }

  export type UsersUpsertWithoutBookingsInput = {
    update: XOR<UsersUpdateWithoutBookingsInput, UsersUncheckedUpdateWithoutBookingsInput>
    create: XOR<UsersCreateWithoutBookingsInput, UsersUncheckedCreateWithoutBookingsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutBookingsInput, UsersUncheckedUpdateWithoutBookingsInput>
  }

  export type UsersUpdateWithoutBookingsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomsUpsertWithoutBookingsInput = {
    update: XOR<RoomsUpdateWithoutBookingsInput, RoomsUncheckedUpdateWithoutBookingsInput>
    create: XOR<RoomsCreateWithoutBookingsInput, RoomsUncheckedCreateWithoutBookingsInput>
    where?: RoomsWhereInput
  }

  export type RoomsUpdateToOneWithWhereWithoutBookingsInput = {
    where?: RoomsWhereInput
    data: XOR<RoomsUpdateWithoutBookingsInput, RoomsUncheckedUpdateWithoutBookingsInput>
  }

  export type RoomsUpdateWithoutBookingsInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    maxPeople?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomNumbers?: RoomNumberUpdateManyWithoutRoomNestedInput
    hotel?: HotelsUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type RoomsUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    maxPeople?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotelId?: IntFieldUpdateOperationsInput | number
    roomNumbers?: RoomNumberUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomsCreateManyHotelInput = {
    id?: number
    title: string
    price: number
    maxPeople: number
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomsUpdateWithoutHotelInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    maxPeople?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomNumbers?: RoomNumberUpdateManyWithoutRoomNestedInput
    bookings?: BookingsUpdateManyWithoutRoomNestedInput
  }

  export type RoomsUncheckedUpdateWithoutHotelInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    maxPeople?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomNumbers?: RoomNumberUncheckedUpdateManyWithoutRoomNestedInput
    bookings?: BookingsUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomsUncheckedUpdateManyWithoutHotelInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    maxPeople?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomNumberCreateManyRoomInput = {
    id?: number
    number: string
  }

  export type BookingsCreateManyRoomInput = {
    id?: number
    userId: number
    startDate: Date | string
    endDate: Date | string
    price: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomNumberUpdateWithoutRoomInput = {
    number?: StringFieldUpdateOperationsInput | string
  }

  export type RoomNumberUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
  }

  export type RoomNumberUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
  }

  export type BookingsUpdateWithoutRoomInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingsUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingsUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingsCreateManyUserInput = {
    id?: number
    roomId: number
    startDate: Date | string
    endDate: Date | string
    price: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingsUpdateWithoutUserInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomsUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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