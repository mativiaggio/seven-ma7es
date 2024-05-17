export interface MongoDBCategory {
  _id: string;
  name: string;
  parent: {
    $oid: string;
  };
  properties: string[];
  __v: number;
  slug: string;
}
