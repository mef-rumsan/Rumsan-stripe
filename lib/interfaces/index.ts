interface obj {
  [key: string]: any;
}

interface createIntent {
  amount: number;
  currency: string;
  payment_method_types?: Array<string>;
  metadata?: obj;
}

interface responseIntent {
  amount: number;
  currency: string;
  client_secret: string;
  status: string;
  id: string;
}

interface stripeEvent {
  id: string;
  object: string;
  type: string;
  data: {
    object: any;
  };
}
export { createIntent, responseIntent, obj, stripeEvent };
