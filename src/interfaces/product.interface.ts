export interface MongoDBProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  __v: number;
  category: {
    $oid: string;
  };
  slug: string;
}
